#!/usr/bin/env node

import chalk from 'chalk';
import * as boxen from 'boxen';

const greeting = chalk.white.bold("Building GDPM :>");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderColor: "green",
 backgroundColor: "#555555"
};

const msgBox = boxen.default( greeting, boxenOptions );

console.log(msgBox);