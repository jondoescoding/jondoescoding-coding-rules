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
  
  const templates = [];
  
  function scanDirectory(dir, prefix = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursively scan subdirectories
        scanDirectory(fullPath, prefix ? `${prefix}/${item}` : item);
      } else if (item.endsWith('.mdc')) {
        // Add template with its path
        const templateName = item.replace('.mdc', '');
        const fullTemplateName = prefix ? `${prefix}/${templateName}` : templateName;
        templates.push(fullTemplateName);
      }
    }
  }
  
  scanDirectory(TEMPLATES_DIR);
  return templates;
}

function installTemplate(templateName) {
  const templatePath = path.join(TEMPLATES_DIR, `${templateName}.mdc`);
  const targetFileName = templateName.replace(/\//g, '-'); // Replace slashes with dashes
  const targetPath = path.join(RULES_DIR, `${targetFileName}.mdc`);
  
  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Template '${templateName}' not found`);
    return false;
  }
  
  try {
    fs.copyFileSync(templatePath, targetPath);
    console.log(`✅ Added ${targetFileName}.mdc to your cursor rules`);
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
  
  // Group templates by category
  const grouped = {};
  templates.forEach(template => {
    const parts = template.split('/');
    if (parts.length === 1) {
      // Root level template
      if (!grouped['Root']) grouped['Root'] = [];
      grouped['Root'].push(template);
    } else {
      // Nested template
      const category = parts.slice(0, -1).join('/');
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(template);
    }
  });
  
  // Display grouped templates
  Object.keys(grouped).sort().forEach(category => {
    if (category === 'Root') {
      console.log('\n  📁 Core Templates:');
    } else {
      console.log(`\n  📁 ${category}:`);
    }
    grouped[category].forEach(template => {
      const displayName = template.split('/').pop();
      console.log(`    • ${template}`);
    });
  });
  
  console.log('\n💡 Usage: npx jondoescoding-cursor-rules <template-name>');
  console.log('   Example: npx jondoescoding-cursor-rules python/llm/observability/langfuse\n');
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