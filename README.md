# 🎯 jondoescoding Rules CLI

> A powerful CLI tool to manage and distribute custom Cursor AI rule templates for enhanced AI-assisted development.

[![npm version](https://badge.fury.io/js/jondoescoding-coding-rules.svg)](https://badge.fury.io/js/jondoescoding-coding-rules)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 What This Does

This CLI tool allows you to quickly install pre-configured templates for both Cursor AI and Claude Code into your projects. Choose the right import type for your AI development workflow.

### Key Features

- 📦 **Dual AI Support**: Templates for both Cursor AI and Claude Code
- 🎨 **Multiple Categories**: Pre-built templates for popular technologies
- 🔧 **Customizable**: Easy to add your own custom templates
- 🌐 **Shareable**: Distribute your team's standards as npm packages
- 🎯 **Targeted Installation**: Choose exactly what you need with `--type` parameter

## 🤖 Import Types

### `--type cursor` (Default)
- **Purpose**: Cursor AI coding rules and standards
- **Location**: `.cursor/rules/`
- **Format**: `.mdc` files
- **Use Case**: Guide Cursor AI's code suggestions and completions

### `--type claude-code`
- **Purpose**: Claude Code workflow optimization
- **Location**: `.claude/`
- **Format**: `.md` files
- **Use Case**: Improve communication and productivity with Claude Code

## 📋 Template Types Explained

### Cursor AI Rules (`.mdc` files)
Cursor rules are markdown files placed in `.cursor/rules/` that provide context and coding standards to Cursor AI. They help ensure consistent:
- Code style and formatting
- Architecture patterns  
- Best practices
- Error handling approaches
- Naming conventions

### Claude Code Configuration (`.md` files)
Claude Code templates are workflow guides placed in `.claude/` that optimize your collaboration with Claude Code:
- Project setup and organization
- Communication patterns
- Context management strategies
- Productivity workflows
- Best practices for AI collaboration

## 🛠 Installation & Usage

### ⚡ Super Quick Start (NEW!)

```bash
# Install EVERYTHING (both Cursor AI and Claude Code rules)
npx jondoescoding-coding-rules --all
```

### Quick Start (Recommended)

```bash
# List available templates by type
npx jondoescoding-coding-rules --list --type cursor
npx jondoescoding-coding-rules --list --type claude-code

# Install specific templates (defaults to cursor type)
npx jondoescoding-coding-rules writing/scott-adams-writing-principles
npx jondoescoding-coding-rules python/llm/observability/langfuse
npx jondoescoding-coding-rules seo/seo-best-practices

# Install with explicit type
npx jondoescoding-coding-rules --type cursor python/llm/observability/langfuse
npx jondoescoding-coding-rules --type claude-code memory-management

# Install multiple templates
npx jondoescoding-coding-rules writing/scott-adams-writing-principles seo/seo-best-practices
npx jondoescoding-coding-rules --type claude-code memory-management project-setup

# Install all available templates of a type
npx jondoescoding-coding-rules --all --type cursor
npx jondoescoding-coding-rules --all --type claude-code

# Install ALL templates (both cursor and claude-code) - NEW!
npx jondoescoding-coding-rules --all
```

### Global Installation

```bash
npm install -g jondoescoding-coding-rules
jondoescoding-coding-rules --help
```

## 📚 Available Templates

## 🎯 Cursor AI Rules (`--type cursor`)
*Installed to `.cursor/rules/` - Used by Cursor AI for coding assistance*


### Python Templates
| Template | Description | File Types |
|----------|-------------|------------|
| `python/llm/observability/langfuse` | Complete LangFuse tracing setup for FastAPI + LangChain/LangGraph | `**/*.py`, `src/**/*`, `api/**/*` |

### SEO Templates
| Template | Description | File Types |
|----------|-------------|------------|
| `seo/seo-best-practices` | SEO best practices for page modifications and server-side rendering | `**/*.tsx`, `**/*.jsx`, `app/**/*` |
| `seo/seo-google-rules` | Google SEO standards compliance rules for Next.js business websites | `**/*.tsx`, `**/*.jsx`, `**/*.ts` |
| `seo/seo_rules` | Elite Technical & Content SEO strategy for AI automation and web design agencies | `**/*.tsx`, `**/*.jsx`, `content/**/*` |

### Writing Templates
| Template | Description | File Types |
|----------|-------------|------------|
| `writing/content-curation-rule` | Viral content formats for Twitter and LinkedIn | `**/*.md`, `**/*.txt` |
| `writing/scott-adams-writing-principles` | Clear, persuasive writing principles from Scott Adams | `**/*.md`, `**/*.txt`, `content/**/*` |
| `writing/seo-long-form-article-blueprint` | Complete blueprint for high-converting SEO articles | `**/*.md`, `content/**/*`, `blog/**/*` |
| `writing/tweet-interview-process` | Systematic approach for creating viral, conversion-focused tweets | `**/*.md`, `social/**/*`, `content/**/*` |
| `writing/twitter-thread-creation` | Step-by-step guide for creating viral Twitter threads | `**/*.md`, `social/**/*`, `twitter/**/*` |

### Task Management Templates
| Template | Description | File Types |
|----------|-------------|------------|
| `tasking/task-management` | Comprehensive task management system with dementia-friendly clear documentation | `tasks/**/*`, `task-logs/**/*`, `.cursor/task-logs/**/*` |

## 🤖 Claude Code Configuration (`--type claude-code`)
*Installed to `.claude/` - Used for Claude Code workflow optimization*

| Template | Description | Purpose |
|----------|-------------|---------|
| `memory-management` | Claude Code memory and context management strategies | Improve context retention across conversations |
| `project-setup` | Optimal project structure and configuration for Claude Code | Set up projects for effective AI collaboration |
| `workflow-optimization` | Communication patterns and productivity tips for Claude Code | Maximize efficiency when working with Claude |

### Template Details

Each template includes:
- ✅ Coding standards and style guidelines
- ✅ Best practices for the technology
- ✅ Common patterns and examples
- ✅ Error handling recommendations
- ✅ Performance considerations

## 📁 Project Structure

```
jondoescoding-coding-rules/
├── bin/
│   └── cli.js              # Main CLI script
├── templates/              # Rule templates directory
│   ├── python/            # Python-specific templates
│   │   └── llm/           # LLM development templates
│   │       └── observability/
│   │           └── langfuse.mdc  # LangFuse tracing guide
│   ├── seo/               # SEO optimization templates
│   │   ├── seo-best-practices.mdc    # SEO best practices
│   │   ├── seo-google-rules.mdc      # Google SEO standards
│   │   └── seo_rules.mdc             # Technical SEO strategy
│   ├── writing/           # Content creation templates
│   │   ├── content-curation-rule.mdc
│   │   ├── scott-adams-writing-principles.mdc
│   │   ├── seo-long-form-article-blueprint.mdc
│   │   ├── tweet-interview-process.mdc
│   │   └── twitter-thread-creation.mdc
│   └── tasking/            # Task management templates
│       └── task-management.mdc
├── templates/
│   ├── cursor-rules/        # Cursor AI rule templates
│   │   ├── [all above templates]
│   └── .claude/            # Claude Code configuration templates
│       ├── memory-management.md
│       ├── project-setup.md
│       └── workflow-optimization.md
├── package.json           # Package configuration
└── README.md             # This file
```

## ➕ Adding New Templates

### 1. Create Template File

Create a new `.mdc` file in the `templates/` directory. You can organize templates in nested folders:

```bash
# Root level template
touch templates/your-template-name.mdc

# Nested template (creates folder structure automatically)
mkdir -p templates/category/subcategory
touch templates/category/subcategory/your-template.mdc
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
git clone https://github.com/jondoescoding/jondoescoding-coding-rules.git
cd jondoescoding-coding-rules
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
     "name": "your-custom-coding-rules",
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
   npx your-custom-coding-rules --all
   ```

### Customizing for Your Team

Create organization-specific rules:

```bash
# Example: Create a company-wide rule set with categories
templates/
  
├── api/
│   ├── rest.mdc             # REST API conventions
│   └── graphql.mdc         # GraphQL patterns
├── testing/
│   ├── unit.mdc            # Unit testing standards
│   └── integration.mdc     # Integration testing
└── python/
    ├── fastapi.mdc         # FastAPI patterns
    └── llm/
        └── langchain.mdc   # LangChain standards
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
