import chalk from 'chalk';

const { info, warn, error } = console;

const logger = {
  log(str: any) {
    info(chalk.blue(`[INFO]:${typeof str === "string" ? str : JSON.stringify(str)}`));
  },
  warn(str: any) {
    warn(chalk.yellow(`[WARN]:${typeof str === "string" ? str : JSON.stringify(str)}`));
  },
  error(str: any) {
    error(chalk.red(`[ERROR]:${typeof str === "string" ? str : JSON.stringify(str)}`));
  },
} as const;

export { logger };
