#!/usr/bin/env node

import { Command } from 'commander';

type action = (this: Command, opts: { [key: string]: boolean }, ...args: any[]) => void;

type command = {
    args: string,
    desc?: string,
    aliases: string[],
    action: action,
    options: [
        {
            flags: string[],
            desc?: string,
            default?: any,
        }
    ]
}

/*
function Action(func: action, opts: { [key: string]: boolean }, ...args: any[])
{
    func.call(this, opts, ...args);
}
*/

(async () => {
    const fetch = (await import('node-fetch')).default;
    const cproc = await import('node:child_process');
    const program = new Command();


    const commands: { [key: string]: command } = {
        "install": {
            args: "<name/repo>",
            desc: "Install an addon\n\n- normal addons: grabs from godot assets\n- github addons: url | username/repo | username/repo@tag | username/repo@version",
            aliases: ["i"],
            action: Install,
            options: [
                {
                    flags: [
                        "--i",
                        "--ignore_root"
                    ],
                    desc: "if it should ignore a duplicate addons folder"
                }
            ]
        }
    }

    async function Install(this: Command, opts: { [key: string]: boolean }, name?: string)
    {
        console.log(name);
        opts
    }

    async function Update(name?: string)
    {
        if (name == "gdpm") {
            cproc.exec("npm update gdpm")
        }
    }

    program.name('GDPM')
        .description("Simple but effective godot plugin manager inspired by NPM")
        .version('1.0.0');

    Object.entries(commands).forEach(([k, guh]) => 
    {
        let v = guh as command;
        
        let p = program.command(`${k} ${v.args}`)
            .aliases(v.aliases)
            .action(v.action);

        if (v.desc) {
            p.description(v.desc);
        }

        v.options.forEach( o => p.option(o.flags.join(" "), o.desc, o.default) );
    });

    program.parse(process.argv);

})()