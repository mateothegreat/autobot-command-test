import { Command, CommandBase, CommandParser, Event } from '@autobot/common';
import { RichEmbed }                                  from 'discord.js';

/**
 * Demonstrates a simple command that replies to a test.
 *
 * Example message: `>test`
 */
@Command
export class TestCommand extends CommandBase {

    public constructor() {

        //
        // Set this commands configuration.
        //
        super({

            event: Event.MESSAGE,
            name: '>test',
            group: 'testing',
            description: 'Simple test command that sends a reply.',

        });

    }

    /**
     * Called when a command matches config.name.
     *
     * @param command Parsed out commamd
     *
     */
    public run(command: CommandParser): void {

        command.obj.reply(new RichEmbed().setTitle('Test received!'));

    }

}
