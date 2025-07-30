# Find TODOs

I'll locate and organize all TODO comments and unfinished work markers in your codebase.

I'll search for common markers across different languages:
- TODO, FIXME, HACK, XXX, NOTE, BUG
- Language-specific comment patterns (// /* # etc.)
- Placeholder code and incomplete implementations

My search will:
- Skip build directories, node_modules, vendor folders
- Look in source files, documentation, and configuration
- Find both obvious markers and subtle incomplete work
- Organize findings by priority and context

For each item found, I'll provide:
1. **Location**: File path and line number
2. **Priority**: Critical/Important/Informational based on marker type
3. **Context**: Surrounding code to understand the issue
4. **Description**: What needs to be done

I'll categorize findings as:
- **Critical**: FIXME, BUG, HACK - issues that need immediate attention
- **Important**: TODO with deadlines or affecting functionality
- **Informational**: General notes, future improvements, documentation

For each TODO, I'll also identify:
- Whether it's blocking other work
- If it's related to recent changes
- Estimated complexity based on the description
- Dependencies or requirements to complete it

This helps you prioritize technical debt and ensures nothing important gets forgotten in your codebase.