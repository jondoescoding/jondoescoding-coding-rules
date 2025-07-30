# Format Code

I'll format your code using your project's configured formatter.

First, let me check for existing formatter configurations:

I'll look for configuration files like:
- .prettierrc, prettier.config.js (JavaScript/TypeScript)
- .eslintrc with formatting rules
- pyproject.toml, setup.cfg (Python)
- .rustfmt.toml (Rust)
- .clang-format (C/C++)

My formatting approach:
- Use your existing formatter configuration
- Only format files that have been modified recently
- Avoid formatting vendor/node_modules/build directories
- Preserve your code's logic while improving style consistency

If no formatter is configured, I'll:
- Suggest popular formatters for your language
- Help you set up a basic configuration
- Format using sensible defaults for your project type

For each file I format, I'll:
1. Show you what will be changed
2. Apply formatting while preserving functionality
3. Handle any formatting errors gracefully
4. Provide alternatives if the primary formatter fails

This ensures consistent code style across your project while respecting your existing preferences and conventions.