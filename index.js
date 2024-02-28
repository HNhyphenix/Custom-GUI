import { world } from '@minecraft/server';

world.beforeEvents.chatSend.subscribe((eventData) => {
	const player = eventData.sender;
	switch (eventData.message) {
		case '!help':
			eventData.cancel = true;
			player.runCommandAsync('tellraw @a {"rawtext":[{"text":"§1-Help menu(1/?)-\n§e!Hub, !Shop, !Suicide, !Duels, !Friends, !Rules, !HTP"}]}')
			break

		case '!hub':
			eventData.cancel = true;
			player.runCommandAsync('tp @s 1 -60 1')
		break

		case '!shop':
			eventData.cancel = true;
			player.runCommandAsync('title @s title Coming Soon!')
		break

		case '!suicide':
			eventData.cancel = true;
			player.runCommandAsync('kill @s')
			break
			case '!duels':
				eventData.cancel = true;
				player.runCommandAsync('tp @s 600 -60 1')
			break
			case '!friends':
				eventData.cancel = true;
				player.runCommandAsync('tellraw @a {"rawtext":[{"text":"No friends online"}]}')
				case '!cmds':
					eventData.cancel = true;
					if (!player.hasTag("Admin"))
					player.runCommandAsync('tellraw @a {"rawtext":[{"text":"§cYou do not have permission to use this."}]}')
				break
				case '!rules':
					eventData.cancel = true;
					player.runCommandAsync(`tellraw @a {"rawtext":[{"text":"=- Rules -=\n1.) No hacks/glitches/bugs\n2.) Writing more!\n=- Rules -="}]}`)
					player.runCommandAsync(`tag @s add rules`)
					default: break;
	}
	for (const player of world.getPlayers()) {
		if (!player.hasTag("rules"))
		player.runCommandAsync(`title @a[tag=!rules] actionbar §eWelcome to the world! §cYou have to read the rules before you can continue. do !rules`)

	}});
