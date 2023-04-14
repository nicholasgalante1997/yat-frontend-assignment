import chalk from 'chalk';

const { info, warn, error } = console;

const logger = {
  log(str: any) {
    info(chalk.blue(`[INFO]:${JSON.stringify(str)}`));
  },
  warn(str: any) {
    warn(chalk.yellow(`[WARN]:${JSON.stringify(str)}`));
  },
  error(str: any) {
    error(chalk.red(`[ERROR]:${JSON.stringify(str)}`));
  },
} as const;

export { logger };
