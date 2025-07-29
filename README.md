# 🎯 JonDoesCoding Cursor Rules CLI

> A powerful CLI tool to manage and distribute custom Cursor AI rule templates for enhanced AI-assisted development.

[![npm version](https://badge.fury.io/js/jondoescoding-cursor-rules.svg)](https://badge.fury.io/js/jondoescoding-cursor-rules)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 What This Does

This CLI tool allows you to quickly install pre-configured Cursor AI rules into your projects. Cursor AI rules (`.mdc` files) help guide AI assistants to follow your coding standards, best practices, and project-specific conventions.

### Key Features

- 📦 **Easy Installation**: One command to install any rule template
- 🎨 **Multiple Templates**: Pre-built rules for popular technologies
- 🔧 **Customizable**: Easy to add your own custom rule templates
- 🌐 **Shareable**: Distribute your team's coding standards as npm packages
- 🎯 **Focused**: Rules are applied to specific file types using glob patterns

## 📋 What Are Cursor Rules?

Cursor rules are markdown files (`.mdc`) placed in `.cursor/rules/` that provide context and coding standards to AI assistants. They help ensure consistent:

- Code style and formatting
- Architecture patterns
- Best practices
- Error handling approaches
- Naming conventions

## 🛠 Installation & Usage

### Quick Start (Recommended)

```bash
# List available templates
npx jondoescoding-cursor-rules --list

# Install a specific template
npx jondoescoding-cursor-rules typescript

# Install multiple templates
npx jondoescoding-cursor-rules typescript react nodejs

# Install all available templates
npx jondoescoding-cursor-rules --all
```

### Global Installation

```bash
npm install -g jondoescoding-cursor-rules
jondoescoding-cursor-rules --help
```

## 📚 Available Templates

| Template | Description | File Types |
|----------|-------------|------------|
| `typescript` | TypeScript coding standards and best practices | `*.ts`, `*.tsx` |
| `react` | React development standards and patterns | `*.jsx`, `*.tsx` |
| `nodejs` | Node.js backend development standards | `*.js`, `*.ts`, `server/**/*`, `api/**/*` |

### Template Details

Each template includes:
- ✅ Coding standards and style guidelines
- ✅ Best practices for the technology
- ✅ Common patterns and examples
- ✅ Error handling recommendations
- ✅ Performance considerations

## 📁 Project Structure

```
jondoescoding-cursor-rules/
├── bin/
│   └── cli.js              # Main CLI script
├── templates/              # Rule templates directory
│   ├── typescript.mdc      # TypeScript rules
│   ├── react.mdc          # React rules
│   └── nodejs.mdc         # Node.js rules
├── package.json           # Package configuration
└── README.md             # This file
```

## ➕ Adding New Templates

### 1. Create Template File

Create a new `.mdc` file in the `templates/` directory:

```bash
touch templates/your-template-name.mdc
```

### 2. Template Format

Follow this structure for your template:

```markdown
---
description: Brief description of what this rule does
globs: ["**/*.ext", "**/*.pattern"]
alwaysApply: false
---

# Your Rule Title

## Section 1: Standards
Your coding standards here...

## Section 2: Best Practices
Best practices specific to this technology...

## Section 3: Examples
```language
// Good example
const goodExample = () => {
  // Implementation
};

// Avoid
const badExample = () => {
  // What not to do
};
```

### 3. Frontmatter Configuration

| Field | Description | Example |
|-------|-------------|---------|
| `description` | Brief description of the rule's purpose | `"React development standards"` |
| `globs` | File patterns where this rule applies | `["**/*.tsx", "**/*.jsx"]` |
| `alwaysApply` | Whether to apply to all files regardless of globs | `false` (recommended) |

### 4. Template Content Guidelines

**Include These Sections:**
- 📝 **Code Style**: Formatting, naming conventions, structure
- 🏗️ **Architecture**: Patterns, organization, best practices  
- 🔒 **Security**: Security considerations and practices
- ⚡ **Performance**: Optimization tips and patterns
- 🧪 **Testing**: Testing approaches and examples
- 📖 **Examples**: Clear good vs bad code examples

**Template Example:**

```markdown
---
description: Python development standards with Django
globs: ["**/*.py", "django/**/*"]
alwaysApply: false
---

# Python + Django Development Rules

## Code Style
- Follow PEP 8 style guidelines
- Use type hints for function parameters and return values
- Maximum line length of 88 characters (Black formatter)
- Use descriptive variable and function names

## Django Best Practices
- Use Django's built-in authentication system
- Implement proper model validation
- Use Django forms for data validation
- Follow the Model-View-Template pattern

## Examples
```python
# Good
from typing import Optional
from django.contrib.auth.models import User

def get_user_profile(user_id: int) -> Optional[User]:
    try:
        return User.objects.get(id=user_id)
    except User.DoesNotExist:
        return None

# Avoid
def get_user_profile(user_id):
    return User.objects.get(id=user_id)  # No error handling
```

## 🔧 Development & Customization

### Local Development

```bash
# Clone and setup  
git clone https://github.com/jondoescoding/jondoescoding-cursor-rules.git
cd jondoescoding-cursor-rules
npm install

# Test locally
node bin/cli.js --list
node bin/cli.js typescript
```

### Publishing Your Own Version

1. **Fork this repository**
2. **Customize templates** in the `templates/` directory
3. **Update package.json** with your package name:
   ```json
   {
     "name": "your-custom-cursor-rules",
     "description": "Your team's cursor rules",
     "author": "Your Name"
   }
   ```
4. **Publish to npm**:
   ```bash
   npm publish
   ```
5. **Share with your team**:
   ```bash
   npx your-custom-cursor-rules --all
   ```

### Customizing for Your Team

Create organization-specific rules:

```bash
# Example: Create a company-wide rule set
templates/
├── company-typescript.mdc    # Your TS standards
├── company-react.mdc        # Your React patterns  
├── company-api.mdc          # Your API conventions
└── company-testing.mdc      # Your testing standards
```

## 🔍 How It Works

1. **CLI Detection**: The tool checks for existing `.cursor/rules/` directory
2. **Auto-Creation**: Creates the directory if it doesn't exist
3. **Template Copy**: Copies selected templates from `templates/` to `.cursor/rules/`
4. **Cursor Integration**: Cursor AI automatically loads rules from this directory
5. **Smart Application**: Rules apply only to files matching their glob patterns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-template`
3. Add your template following the guidelines above
4. Test locally: `node bin/cli.js your-template`
5. Submit a pull request

### Template Contribution Guidelines

- ✅ Include comprehensive examples
- ✅ Cover both good and bad practices
- ✅ Use appropriate glob patterns
- ✅ Test with actual Cursor AI
- ✅ Document any special considerations

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

- 🐛 **Issues**: Report bugs via GitHub Issues
- 💡 **Feature Requests**: Submit via GitHub Issues
- 📖 **Documentation**: Check this README and template examples
- 💬 **Questions**: Start a GitHub Discussion

## 🎉 Acknowledgments

Inspired by [CitrusRules](https://github.com/jakerains/citrusrules) and the Cursor AI community's effort to improve AI-assisted development through better context and standards.