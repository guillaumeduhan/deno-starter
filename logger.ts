import { join } from "https://deno.land/std/path/mod.ts";

export class Logger {
	private logFile: string;

	constructor() {
		this.logFile = "app.log";
	}

	private formatTimestamp(date: Date): string {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const day = date.getDate().toString().padStart(2, "0");
		const hours = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");
		const seconds = date.getSeconds().toString().padStart(2, "0");

		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	}

	async log(context: string, message: string): Promise<void> {
		const timestamp = this.formatTimestamp(new Date());
		const logEntry = `[${timestamp}]: ${message}\n`;
		const logPath = join("./", this.logFile);

		await Deno.writeTextFile(logPath, logEntry, { append: true });
	}
}
