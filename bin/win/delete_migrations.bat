@echo off
echo Удаление файлов миграций Django...
echo.

cd backend

for /d /r %%d in (migrations) do (
    if exist "%%d\__init__.py" (
        echo Найдена папка миграций: %%d
        for %%f in ("%%d\*.py") do (
            if /I "%%~nxf"=="__init__.py" (
                echo Оставляем %%f
            ) else (
                echo Удаляем файл %%f
                del /q "%%f"
            )
        )
        echo.
    )
)

del /f /q db.sqlite3

echo Все файлы миграций удалены.
pause