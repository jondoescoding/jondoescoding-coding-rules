# Smart Test Runner

I'll analyze your project and run tests intelligently.

First, let me understand your testing setup by examining:
- Package.json scripts, Makefile, or other build files
- Test directory structure and naming patterns
- Testing framework indicators (Jest, pytest, cargo test, etc.)
- CI configuration files for test commands

I'll identify the best way to run your tests:
- Use existing npm/yarn scripts if available
- Detect testing frameworks and use their commands
- Find test files using common patterns
- Check for test configuration files

When running tests, I'll:
1. Execute tests with appropriate commands for your setup
2. Parse test output to identify failures clearly
3. Provide explanations for common test failure patterns
4. Help resolve dependency or configuration issues
5. Suggest fixes for failing tests when possible

If tests fail, I'll analyze:
- Error messages and stack traces
- Missing dependencies or configuration
- Environmental issues (node version, missing files)
- Common setup problems

If no testing framework is detected, I'll:
- Suggest appropriate testing tools for your language
- Help you set up a basic testing structure
- Create example test files to get you started

This ensures your code quality through comprehensive testing while working with your existing development workflow.