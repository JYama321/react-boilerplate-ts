const chalk = require('chalk');
const ip = require('ip');


const divider = chalk.gray('\n----------------------------------------');


const logger = {
  // Called whenever there's an error on the server we want to print
    error: err => {
        console.error(chalk.red(err));
    },

    // Called when express.js src starts on given port w/o errors
    appStarted: (port, host, tunnelStarted) => {
        if (tunnelStarted) {
            console.log(`Server started ! ${chalk.green('✓')}`);
        }

        console.log(`
        ${chalk.bold('Access URLs:')}${divider}
        Localhost: ${chalk.magenta(`http://${host}:${port}`)}
        LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) + (tunnelStarted ? `\n Proxy: ${chalk.magenta(tunnelStarted)}` : '' )}${divider}
        ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)} 
        `)
    },
};

module.exports = logger;
