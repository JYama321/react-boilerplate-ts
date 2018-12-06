const chalk = require('chalk');
const isDev = process.env.NODE_ENV === 'development';

const logger = {
  // Called whenever there's an error on the server we want to print
  error: (err: any) => {
    if(isDev){
      console.error(chalk.red(err));
    }
  },
  debug: (log: any) => {
    if(isDev){
      console.log(chalk.green(`debug: ${log}`))
    }
  }
};

export default logger
