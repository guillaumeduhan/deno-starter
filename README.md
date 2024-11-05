# Deno-Starter (updated Nov. 5th 2024)

A starter template for projects using Deno, including auto-linting, formatting, and essential configurations for development.

![Deno Starter](https://repository-images.githubusercontent.com/883734988/c6fe1555-d337-45e8-b641-8c349f386c53)

## Features

- **Development Task**: Start the app with automatic file watching and re-running on changes.
- **Linting Task**: Run linting checks to enforce code quality.
- **Formatting**: Customizable code formatting settings to keep code style consistent.
- **Standard Library Imports**: Convenient imports for frequently used Deno standard libraries.
- **Third-Party Packages**: Use `chalk` for colorful console output.

## Requirements

- [Deno](https://deno.land/) (v2.0 or later)

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repo-url>
   cd deno-starter
   ```

2. **Run Development Server**:

   Start the development server with file watching enabled. The server restarts automatically on any code change:

   ```bash
   deno task dev
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

## Available Libraries

The following libraries are available through Deno's imports configuration, so you can use them without manually importing each time:

- **`@std/assert`**: For assertions.
- **`@std/fs`**: File system utilities.
- **`@std/path`**: Path utilities.
- **`chalk`**: Use `chalk` to colorize console output (imported via npm).

## Example Usage

```typescript
import { assertEquals } from "@std/assert";
import { exists } from "@std/fs";
import { join } from "@std/path";
import chalk from "chalk";

// Example of using chalk for colorful output
console.log(chalk.green("Hello, Deno!"));
```

## Additional Notes

- **Deno Permissions**: Deno enforces permissions strictly. Additional permissions can be added to `deno.json` if required by the app.
- **Hot Reloading**: The `dev` task uses `--watch`, enabling hot reloading for easier development.
- **Preconfigured Linting and Formatting**: Ensures consistent code quality and style across the project.

## License

This project is licensed under the MIT License.

---

This README provides a comprehensive overview of the project's setup and configuration, suitable for getting started with a Deno-based application. Let me know if there are any other specifics you'd like to add!
