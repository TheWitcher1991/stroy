from tags.applicantion.commands.create_tag.create_tag_command_validator import CreateTagCommandValidator
from tags.applicantion.commands.create_tag.create_tag_handler import CreateTagCommandHandler
from tags.infrastructure.repository import TagRepository

tag_repository = TagRepository()

create_tag_validator = CreateTagCommandValidator()

create_tag_command = CreateTagCommandHandler(tag_repository, create_tag_validator)
