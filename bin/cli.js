#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const RULES_DIR = '.cursor/rules';
const TEMPLATES_DIR = path.join(__dirname, '../templates');

function ensureRulesDirectory() {
  if (!fs.existsSync(RULES_DIR)) {
    fs.mkdirSync(RULES_DIR, { recursive: true });
    console.log('📁 Created .cursor/rules directory');
  }
}

function getAvailableTemplates() {
  if (!fs.existsSync(TEMPLATES_DIR)) {
    console.error('❌ No templates directory found');
    process.exit(1);
  }
  
  return fs.readdirSync(TEMPLATES_DIR)
    .filter(file => file.endsWith('.mdc'))
    .map(file => file.replace('.mdc', ''));
}

function installTemplate(templateName) {
  const templatePath = path.join(TEMPLATES_DIR, `${templateName}.mdc`);
  const targetPath = path.join(RULES_DIR, `${templateName}.mdc`);
  
  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template '${templateName}' not found`);
    return false;
  }
  
  try {
    fs.copyFileSync(templatePath, targetPath);
    console.log(`✅ Added ${templateName}.mdc to your cursor rules`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to install ${templateName}: ${error.message}`);
    return false;
  }
}

function showHelp() {
  console.log(`
🎯 My Cursor Rules CLI

Usage:
  npx my-cursor-rules [options]

Options:
  --list, -l          List all available templates
  --all              Install all available templates
  --help, -h         Show this help message
  <template-name>    Install a specific template

Examples:
  npx my-cursor-rules --list
  npx my-cursor-rules typescript
  npx my-cursor-rules --all
`);
}

function listTemplates() {
  const templates = getAvailableTemplates();
  
  if (templates.length === 0) {
    console.log('❌ No templates found');
    return;
  }
  
  console.log('\n📋 Available templates:');
  templates.forEach(template => {
    console.log(`  • ${template}`);
  });
  console.log();
}

function installAllTemplates() {
  const templates = getAvailableTemplates();
  let installed = 0;
  
  templates.forEach(template => {
    if (installTemplate(template)) {
      installed++;
    }
  });
  
  console.log(`\n🎉 Installed ${installed}/${templates.length} templates`);
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    showHelp();
    return;
  }
  
  ensureRulesDirectory();
  
  if (args.includes('--list') || args.includes('-l')) {
    listTemplates();
    return;
  }
  
  if (args.includes('--all')) {
    installAllTemplates();
    return;
  }
  
  // Install specific templates
  args.forEach(templateName => {
    if (!templateName.startsWith('--')) {
      installTemplate(templateName);
    }
  });
}

main();