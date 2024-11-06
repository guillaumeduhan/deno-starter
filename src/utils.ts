import chalk from "chalk";
import { Logger } from "../logger.ts";

const instance = new Logger();

/**
 * Logs a message and optionally throws an error.
 * @param message - The message to log.
 * @param isError - Whether the message is an error. Default is `false`.
 */
export function logger(message: string, isError: boolean = false): void {
	instance.log(message);

	if (isError) {
		console.error(chalk.red(message));
		throw new Error(message);
	} else {
		console.log(chalk.green(message));
	}
}
