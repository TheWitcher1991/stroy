const CACHE_NAME_PREFIX = 'STROY_CACHE'
const CLIENTS_DB_NAME = 'STROY_CLIENTS'
const CLEAN_INTERVAL = 1000

const routes = new Map([
	['/', /^\/$/],
	['/login', /^\/login\/?$/],
	['/signup', /^\/signup\/?$/],
	['/workspace', /^\/workspace\/?$/],
	['/workspace/profile', /^\/workspace\/profile\/?$/],
	['/workspace/billing', /^\/workspace\/billing\/?$/],
	['/workspace/finances', /^\/workspace\/finances\/?$/],
	['/workspace/finances/deposit', /^\/workspace\/finances\/deposit\/?$/],
	['/workspace/finances/closure', /^\/workspace\/finances\/closure\/?$/],
	[
		'/workspace/finances/transactions',
		/^\/workspace\/finances\/transactions\/?$/,
	],
	['/workspace/documents', /^\/workspace\/documents\/?$/],
	['/workspace/tags', /^\/workspace\/tags\/?$/],
	['/workspace/projects', /^\/workspace\/projects\/?$/],
	['/workspace/users', /^\/workspace\/users\/?$/],
	['/workspace/journal', /^\/workspace\/journal\/?$/],
	['/workspace/guards', /^\/workspace\/guards\/?$/],
])

self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', event => {
	event.waitUntil(self.clients.claim())
	cleanCache()
})

self.addEventListener('fetch', event => {
	const url = new URL(event.request.url)
	const aggregated = getAggregatedUrl(url.pathname)
	if (!aggregated) return

	event.respondWith(handleRequest(event, aggregated))
})

async function handleRequest(event, aggregated) {
	try {
		const clientId = event.clientId || event.source?.id
		const version = await getClientVersion(clientId)
		if (!version) return fetch(event.request)

		const cacheName = `${CACHE_NAME_PREFIX}_v-${version}`
		const cache = await caches.open(cacheName)
		const match = await cache.match(aggregated.url, { ignoreSearch: true })

		if (match) {
			let body = await match.text()
			for (const [k, v] of Object.entries(aggregated.groups || {})) {
				body = body.replaceAll(`"${k}":"ID"`, `"${k}":"${v}"`)
			}
			return new Response(body, match)
		}
	} catch (err) {
		console.warn('Cache miss or error:', err)
	}

	return fetch(event.request)
}

function getAggregatedUrl(pathname) {
	for (const [pattern, regex] of routes.entries()) {
		const match = pathname.match(regex)
		if (match) {
			const groups = match.groups || {}
			let simplified = pattern.replace(/\(\?<(\w+)>[^)]+\)/g, 'ID')
			return {
				url: simplified,
				groups,
			}
		}
	}
	return null
}

function openDB() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(CLIENTS_DB_NAME, 1)
		req.onupgradeneeded = () => {
			const db = req.result
			const store = db.createObjectStore('clients', {
				keyPath: 'clientId',
			})
			store.createIndex('version', 'version', { unique: false })
		}
		req.onsuccess = () => resolve(req.result)
		req.onerror = e => reject(e)
	})
}

async function addClientVersion(clientId, version) {
	const db = await openDB()
	const tx = db.transaction('clients', 'readwrite')
	tx.objectStore('clients').put({ clientId, version })
}

async function getClientVersion(clientId) {
	const db = await openDB()
	const tx = db.transaction('clients', 'readonly')
	const store = tx.objectStore('clients')
	return new Promise((resolve, reject) => {
		const req = store.get(clientId)
		req.onsuccess = () => resolve(req.result?.version)
		req.onerror = reject
	})
}

async function getClientIdsForVersion(version) {
	const db = await openDB()
	const tx = db.transaction('clients', 'readonly')
	const index = tx.objectStore('clients').index('version')
	const matched = []

	return new Promise(resolve => {
		index.openCursor().onsuccess = e => {
			const cursor = e.target?.result
			if (cursor) {
				if (cursor.value.version === version)
					matched.push(cursor.value.clientId)
				cursor.continue()
			} else {
				resolve(matched.length ? matched : null)
			}
		}
	})
}

async function deleteClient(clientId) {
	const db = await openDB()
	const tx = db.transaction('clients', 'readwrite')
	tx.objectStore('clients').delete(clientId)
}

function cleanCache() {
	setInterval(async () => {
		const allClients = await getAllClients()
		const activeClients = (await self.clients.matchAll()).map(c => c.id)
		for (const { clientId } of allClients) {
			if (!activeClients.includes(clientId)) {
				await deleteClient(clientId)
			}
		}

		const keys = await caches.keys()
		for (const key of keys) {
			if (key.startsWith(CACHE_NAME_PREFIX + '_v-')) {
				const version = key.split('_v-')[1]
				const stillUsed = await getClientIdsForVersion(version)
				if (!stillUsed) await caches.delete(key)
			}
		}
	}, CLEAN_INTERVAL)
}

async function getAllClients() {
	const db = await openDB()
	const tx = db.transaction('clients', 'readonly')
	const store = tx.objectStore('clients')
	return new Promise(resolve => {
		const req = store.getAll()
		req.onsuccess = () => resolve(req.result)
	})
}
