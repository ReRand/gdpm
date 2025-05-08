#!/usr/bin/env node
import { Command } from 'commander';
import fetch from 'node-fetch';
const program = new Command();

function getPlugin(name: string) {

}

program.name('GDPM')
    .description("Simple but effective godot plugin manager inspired by NPM")
    .version('1.0.0');

program.command('greet <name>')
    .alias("i")
    .description('Greet a person')

    .action( (name) => {
        console.log(`Hello, ${name}!`);
    }
);

program.parse(process.argv);