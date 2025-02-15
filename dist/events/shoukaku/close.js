"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShoukakuEventHandler_1 = require("../../classes/handlers/ShoukakuEventHandler");
const forgescript_1 = require("@tryforge/forgescript");
const ForgeLink_1 = require("../../classes/structures/ForgeLink");
exports.default = new ShoukakuEventHandler_1.ShoukakuEventHandler({
    name: 'close',
    description: '...',
    async listener(name, code, reason) {
        const commands = this.getExtension(ForgeLink_1.ForgeLink, true).commands.shoukaku.get('close');
        if (!commands)
            return;
        for (const command of commands) {
            forgescript_1.Interpreter.run({
                obj: {},
                client: this,
                command,
                data: command.compiled.code,
                environment: { name, code, reason }
            });
        }
    }
});
