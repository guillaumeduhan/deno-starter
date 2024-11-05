import chalk from "chalk";
import { Logger } from "./logger.ts";

const logger = new Logger();

const msg = `✅ Deno starts...`;
logger.log(".", msg);
console.log(chalk.green(msg));
