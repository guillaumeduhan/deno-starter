![Deno Starter](https://repository-images.githubusercontent.com/883734988/c6fe1555-d337-45e8-b641-8c349f386c53)

# Deno Starter Project

A starter template for projects using Deno, including auto-linting, formatting, and essential configurations for development.

## Features

- **Development Task**: Start the app with automatic file watching and re-running on changes.
- **Linting Task**: Run linting checks to enforce code quality.
- **Formatting**: Customizable code formatting settings to keep code style consistent.
- **Standard Library Imports**: Convenient imports for frequently used Deno standard libraries.
- **Third-Party Packages**: Use `chalk` for colorful console output.
- **Basic Logging Utility**: A simple logging class to keep track of application events in a log file.

## Requirements

- [Deno](https://deno.land/) (v1.30 or later)

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repo-url>
   cd deno-starter
   ```

2. **Run Development Server**:

   Start the development server with file watching enabled. The server restarts automatically on any code change:

   ```bash
   make run
   ```

3. **Run Linting**:

   Check the project files for linting errors. Configurable linting rules are defined in `deno.json`:

   ```bash
   deno task link
   ```

## Configuration

### `deno.json`

This project is configured with Deno’s `deno.json` for defining tasks, imports, permissions, linting, and formatting options.

- **Tasks**:
  - `dev`: Runs the main script in watch mode for development.
  - `link`: Runs the linter with customized rules.

- **Imports**:
  - **Standard Libraries**:
    - `@std/assert`: Provides assertion functions.
    - `@std/fs`: File system utilities.
    - `@std/path`: Path utilities.
  - **Third-Party**:
    - `chalk`: A popular Node.js package for styling terminal output, imported through `npm`.

- **Permissions**:
  - Write permission is limited to the current directory (`"."`).

- **Linting**:
  - Includes all files in the project (`"."`).
  - Excludes the `no-unused-vars` rule to allow flexibility during development.
  - Enforces the `ban-untagged-todo` rule, ensuring that TODO comments include tags.

- **Formatting**:
  - Custom formatting rules to ensure consistent style across the project:
    - Tabs for indentation.
    - Line width of 80 characters.
    - Use of semicolons.
    - Double quotes for strings.
    - Wrap prose as written.

## Logger

The project includes a `Logger` class to handle basic file-based logging. This is useful for recording events, errors, and other relevant information while the application runs.

### Logger Class Overview

- **File Path**: The logger writes to a file named `app.log` in the project root directory.
- **Timestamp Formatting**: Uses a helper function to create a readable timestamp in `YYYY-MM-DD HH:MM:SS` format.
- **Log Entries**: Each log entry includes a timestamp, context, and message, appended to `app.log`.
- **Usage**: Call `log(context, message)` to add an entry to the log file.

### Example Usage

```typescript
const logger = new Logger();
await logger.log("Server", "Server started on port 8000");
await logger.log("Database", "Connected to the database");
```

This will produce entries in `app.log` such as:

```
[2023-10-28 14:35:12]: Server started on port 8000
[2023-10-28 14:35:12]: Connected to the database
```

## Available Libraries

The following libraries are available through Deno's imports configuration, so you can use them without manually importing each time:

- **`@std/assert`**: For assertions.
- **`@std/fs`**: File system utilities.
- **`@std/path`**: Path utilities.
- **`chalk`**: Use `chalk` to colorize console output (imported via npm).

## Additional Notes

- **Deno Permissions**: Deno enforces permissions strictly. Additional permissions can be added to `deno.json` if required by the app.
- **Hot Reloading**: The `dev` task uses `--watch`, enabling hot reloading for easier development.
- **Preconfigured Linting and Formatting**: Ensures consistent code quality and style across the project.

## License

This project is licensed under the MIT License.
