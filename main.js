console.warn('main.js loaded')

import { world, system } from "@minecraft/server"
import { ActionFormData } from "@minecraft/server-ui"
world.beforeEvents.itemUse.subscribe(data => {
    let player = data.source
    if (data.itemStack.typeId == "minecraft:compass") system.run(() => main(player))
}
);function main() {
        const form = new ActionFormData()
.title("Compass menu")
.body("§qWelcome to Buckshot Roulette!\nDo !Shop, !Suicide, !Abilities(ability abilitys or inventory)\n§cNEWS (2/25/24): News goes here")
.button("§6Hub")
.button("§d= Muilti-player =")
.button("§e-Single-Player/Bots")
.button("§6Leaderboards")
.button("§9Settings")
.button("§5Store")
.button("§3Duels")
.button("§5Abilities")
form.show(player)
then(r => {
    if (r.selection == 0) {
        player.runCommandAsync("tp 3 -60 3")
        if (r.selection == 1) SP(player)
        if (r.selection == 2) Multiplayer(player)
        if (r.selection == 3) SP(player) }})
        
    }
;function Multiplayer() {
    const form = new ActionFormData()
        .title("Multiplayer")
        .body("§aSelect your server\n§cServer 2 doesnt exist yet!")
        .button("§aServer 1")
        .button("§cServer 2")
        form.show(player).then(r => {
            if (r.selection == 0) {
                player.sendMessage(`§3Joined server 1`)
                player.runCommandAsync("tp 50 -60 50")
                if (r.selection == 1) Multiplayer(player)
                    player.sendMessage(`§mServer 2 Is not available!`);
}});
}
;function SP() {
                    const form = new ActionFormData()
            .title("Single player menu")
            .body("§5§l")
            .button("§d1v1 Bot")
            .button("§5Bots")
            form.show(player).then(r => {
                if (r.selection == 0) SP(player)
                if (r.selection == 1) SP(player)
                            player.sendMessage(`§3Joined server 1`)
                            player.runCommandAsync("tp 50 -60 50")
                        });
}
                    ;function LB() {
                                        const form = new ActionFormData()
                                .title("learderBoards")
                                .body("§e§l1st: Xsniperfirex926\n§72nd: Xsniperfirex926\n§n3rd: Xsniperfirex926")
                                .button("§cBack")
}