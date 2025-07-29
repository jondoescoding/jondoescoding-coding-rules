# Claude Code Memory Management

This configuration helps Claude Code better manage context and memory across conversations.

## Key Principles

- Use CLAUDE.md files to provide persistent context
- Keep important project information in memory
- Structure conversations for better context retention
- Use markdown files for documentation that Claude can reference

## CLAUDE.md Structure

```markdown
# Project: [Project Name]

## Overview
Brief description of what this project does.

## Key Files and Structure
- `src/` - Main source code
- `docs/` - Documentation
- `tests/` - Test files

## Current Goals
- [Goal 1]
- [Goal 2]
- [Goal 3]

## Important Notes
- [Note 1]
- [Note 2]
```

## Best Practices

1. **Keep CLAUDE.md Updated** - Always update when project structure changes
2. **Use Clear Headings** - Help Claude navigate your documentation
3. **Reference Specific Files** - Use file paths when discussing code
4. **Maintain Context** - Include relevant background in conversations

## Implementation

1. Create a `CLAUDE.md` file in your project root
2. Update it regularly with project changes
3. Reference it in conversations with Claude Code
4. Use it to maintain context across sessions