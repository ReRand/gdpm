#!/usr/bin/env node

(async () => {

    const chalk = (await import('chalk')).default;
    const boxen = (await import('boxen')).default;

    const greeting = chalk.white.bold("Built GDPM :>");

    const boxenOptions = {
    padding: 1,
    margin: 1,
    borderColor: "green",
    backgroundColor: "#555555"
    };

    const msgBox = boxen( greeting, boxenOptions );

    console.log(msgBox);

})()