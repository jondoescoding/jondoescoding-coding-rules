# Fix Imports

I'll help you fix broken import statements after file moves or renames.

Let me analyze your project structure and identify any broken imports:

First, I'll detect your project type and import patterns by examining:
- Package.json, requirements.txt, or other dependency files
- File extensions and directory structure
- Existing import statements to understand your patterns

Then I'll identify broken imports by:
- Parsing import/require statements in your code
- Verifying that imported files actually exist
- Checking for common import issues (wrong extensions, case sensitivity)

For each broken import I find, I'll:
1. Show you the broken import and its location
2. Search for the likely new location of the moved file
3. Suggest the corrected import path
4. Handle any ambiguous matches by asking for your input
5. Update the import while preserving your existing code style

This ensures your code compiles and runs correctly after file reorganization, maintaining proper syntax and following your project's import conventions.