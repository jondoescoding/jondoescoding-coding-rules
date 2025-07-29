# Claude Code Workflow Optimization

Strategies for maximizing productivity and effectiveness when working with Claude Code.

## Efficient Communication Patterns

### 1. Context Setting
Always provide relevant context:
```
I'm working on [project type] and trying to [specific goal].
The relevant files are [file1, file2].
The current issue is [specific problem].
```

### 2. Specific Requests
Be precise about what you need:
- ❌ "Fix this code"
- ✅ "Fix the TypeError on line 23 in src/utils.js"

### 3. Iterative Development
Break large tasks into smaller chunks:
```
1. First, let's implement the basic structure
2. Then we'll add error handling
3. Finally, we'll optimize performance
```

## File Management

### Key Files to Maintain
- `CLAUDE.md` - Project context and status
- `TODO.md` - Current tasks and priorities
- `CHANGELOG.md` - Recent changes and decisions

### File Naming Conventions
- Use descriptive names: `user-authentication.js` not `auth.js`
- Include version info: `api-v2.js` for different versions
- Separate concerns: `utils/`, `components/`, `services/`

## Session Management

### Starting a Session
1. Review CLAUDE.md for current context
2. Check TODO.md for pending tasks
3. Explain current goal to Claude

### During the Session
- Update TODO.md as tasks are completed
- Document important decisions
- Keep Claude informed of context changes

### Ending a Session
1. Update CLAUDE.md with current status
2. Update TODO.md with remaining tasks
3. Note any important decisions or learnings

## Common Patterns

### Code Review Request
```
Please review this function in src/api.js lines 45-78.
Focus on:
- Error handling
- Performance
- Code clarity
```

### Feature Implementation
```
I need to implement [feature] that:
1. Does [specific action 1]
2. Handles [specific case 2]
3. Returns [specific format]

The code should follow [style guide] and integrate with [existing system].
```

### Debugging Help
```
I'm getting [specific error] in [file:line].
The expected behavior is [description].
The actual behavior is [description].
Relevant code context: [code snippet]
```

## Productivity Tips

1. **Use Templates** - Create templates for common requests
2. **Maintain Context** - Keep CLAUDE.md current
3. **Be Specific** - Include file paths and line numbers
4. **Chunk Work** - Break large tasks into smaller pieces
5. **Document Decisions** - Keep track of important choices