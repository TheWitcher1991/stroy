from packages.abstractions import CommandHandler
from tags.applicantion.commands.create_tag.create_tag_command import CreateTagCommand
from tags.domain.tag import TagEntity
from tags.infrastructure.repository import TagRepository


class CreateTagCommandHandler(CommandHandler):
    def __init__(self, repository: TagRepository):
        self.repository = repository

    def handle(self, command: CreateTagCommand) -> TagEntity:
        tag_entity = TagEntity.new(name=command.name)

        return self.repository.add(tag_entity)
