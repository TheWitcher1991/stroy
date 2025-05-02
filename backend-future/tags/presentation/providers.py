from tags.application.commands.create_tag.create_tag_command_validator import CreateTagCommandValidator
from tags.application.commands.create_tag.create_tag_handler import CreateTagCommandHandler
from tags.application.commands.delete_tag.delete_tag_command_validator import DeleteTagCommandValidator
from tags.application.commands.delete_tag.delete_tag_handler import DeleteTagCommandHandler
from tags.application.commands.update_tag.update_tag_command_validator import UpdateTagCommandValidator
from tags.application.commands.update_tag.update_tag_handler import UpdateTagCommandHandler
from tags.infrastructure.repository import TagRepository

tag_repository = TagRepository()

create_tag_validator = CreateTagCommandValidator()

create_tag_command = CreateTagCommandHandler(tag_repository, create_tag_validator)

update_tag_validator = UpdateTagCommandValidator()

update_tag_command = UpdateTagCommandHandler(tag_repository, update_tag_validator)

delete_tag_validator = DeleteTagCommandValidator()

delete_tag_command = DeleteTagCommandHandler(tag_repository, delete_tag_validator)
