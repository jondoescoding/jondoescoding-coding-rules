#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const IMPORT_CONFIGS = {
  'cursor': {
    dir: '.cursor/rules',
    templates: path.join(__dirname, '../templates/cursor-rules'),
    description: 'Cursor AI rules (.mdc files)'
  },
  'claude-code': {
    dir: '.claude',
    templates: path.join(__dirname, '../templates/.claude'),  
    description: 'Claude Code configuration files'
  }
};

function ensureImportDirectory(importType) {
  const config = IMPORT_CONFIGS[importType];
  if (!config) {
    console.error(`❌ Unknown import type: ${importType}`);
    return false;
  }
  
  if (!fs.existsSync(config.dir)) {
    fs.mkdirSync(config.dir, { recursive: true });
    console.log(`📁 Created ${config.dir} directory`);
  }
  return true;
}

function getAvailableTemplates(importType = 'cursor') {
  const config = IMPORT_CONFIGS[importType];
  if (!config) {
    console.error(`❌ Unknown import type: ${importType}`);
    return [];
  }
  
  const templatesDir = config.templates;
  if (!fs.existsSync(templatesDir)) {
    console.error(`❌ No templates directory found for ${importType}: ${templatesDir}`);
    return [];
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
      } else if (item.endsWith('.mdc') || item.endsWith('.md') || item.endsWith('.json')) {
        // Add template with its path (support different file types)
        const templateName = item.replace(/\.(mdc|md|json)$/, '');
        const fullTemplateName = prefix ? `${prefix}/${templateName}` : templateName;
        templates.push(fullTemplateName);
      }
    }
  }
  
  scanDirectory(templatesDir);
  return templates;
}

function installTemplate(templateName, importType = 'cursor') {
  const config = IMPORT_CONFIGS[importType];
  if (!config) {
    console.error(`❌ Unknown import type: ${importType}`);
    return false;
  }
  
  // Find the actual template file (could be .mdc, .md, or .json)
  const possibleExtensions = ['.mdc', '.md', '.json'];
  let templatePath = null;
  let actualExtension = '';
  
  for (const ext of possibleExtensions) {
    const testPath = path.join(config.templates, `${templateName}${ext}`);
    if (fs.existsSync(testPath)) {
      templatePath = testPath;
      actualExtension = ext;
      break;
    }
  }
  
  if (!templatePath) {
    console.error(`❌ Template '${templateName}' not found for ${importType}`);
    return false;
  }
  
  if (!ensureImportDirectory(importType)) {
    return false;
  }
  
  const targetFileName = templateName.replace(/\//g, '-'); // Replace slashes with dashes
  const targetPath = path.join(config.dir, `${targetFileName}${actualExtension}`);
  
  try {
    fs.copyFileSync(templatePath, targetPath);
    console.log(`✅ Added ${targetFileName}${actualExtension} to your ${config.description.toLowerCase()}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to install ${templateName}: ${error.message}`);
    return false;
  }
}

function showHelp() {
  console.log(`
🎯 JonDoesCoding Development Rules CLI

Usage:
  npx jondoescoding-cursor-rules [options] [template-name]

Options:
  --type <type>       Import type: 'cursor' (default) or 'claude-code'
  --list, -l          List all available templates
  --all              Install all available templates (both types if no --type specified)
  --help, -h         Show this help message
  <template-name>    Install a specific template

Import Types:
  cursor             Cursor AI rules (.mdc files) - Default
  claude-code        Claude Code configuration files

Examples:
  npx jondoescoding-cursor-rules --list --type cursor
  npx jondoescoding-cursor-rules --list --type claude-code
  npx jondoescoding-cursor-rules typescript
  npx jondoescoding-cursor-rules --type cursor writing/scott-adams-writing-principles
  npx jondoescoding-cursor-rules --type claude-code python/config
  npx jondoescoding-cursor-rules --all --type cursor
  npx jondoescoding-cursor-rules --all                # Installs BOTH cursor and claude-code rules
`);
}

function listTemplates(importType = 'cursor') {
  const config = IMPORT_CONFIGS[importType];
  const templates = getAvailableTemplates(importType);
  
  if (templates.length === 0) {
    console.log(`❌ No templates found for ${importType}`);
    return;
  }
  
  console.log(`\n📋 Available ${config.description}:`);
  
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
  
  console.log(`\n💡 Usage: npx jondoescoding-cursor-rules --type ${importType} <template-name>`);
  console.log(`   Example: npx jondoescoding-cursor-rules --type ${importType} ${templates[0] || 'template-name'}\n`);
}

function installAllTemplates(importType = null) {
  // If no specific type is provided, install both cursor and claude-code rules
  if (importType === null) {
    console.log('🚀 Installing all templates for both Cursor AI and Claude Code...\n');
    
    let totalInstalled = 0;
    let totalTemplates = 0;
    
    // Install cursor rules
    const cursorTemplates = getAvailableTemplates('cursor');
    console.log('📦 Installing Cursor AI rules...');
    let cursorInstalled = 0;
    cursorTemplates.forEach(template => {
      if (installTemplate(template, 'cursor')) {
        cursorInstalled++;
      }
    });
    totalInstalled += cursorInstalled;
    totalTemplates += cursorTemplates.length;
    
    console.log(`✅ Cursor AI: ${cursorInstalled}/${cursorTemplates.length} templates installed\n`);
    
    // Install claude-code rules
    const claudeTemplates = getAvailableTemplates('claude-code');
    console.log('📦 Installing Claude Code configuration...');
    let claudeInstalled = 0;
    claudeTemplates.forEach(template => {
      if (installTemplate(template, 'claude-code')) {
        claudeInstalled++;
      }
    });
    totalInstalled += claudeInstalled;
    totalTemplates += claudeTemplates.length;
    
    console.log(`✅ Claude Code: ${claudeInstalled}/${claudeTemplates.length} templates installed`);
    console.log(`\n🎉 Total: ${totalInstalled}/${totalTemplates} templates installed across both platforms`);
    
    return;
  }
  
  // Original behavior for specific import type
  const templates = getAvailableTemplates(importType);
  let installed = 0;
  
  templates.forEach(template => {
    if (installTemplate(template, importType)) {
      installed++;
    }
  });
  
  console.log(`\n🎉 Installed ${installed}/${templates.length} ${IMPORT_CONFIGS[importType].description.toLowerCase()}`);
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    showHelp();
    return;
  }
  
  // Parse --type parameter
  let importType = 'cursor'; // default
  const typeIndex = args.indexOf('--type');
  if (typeIndex !== -1 && typeIndex + 1 < args.length) {
    importType = args[typeIndex + 1];
    // Remove --type and its value from args
    args.splice(typeIndex, 2);
  }
  
  // Validate import type
  if (!IMPORT_CONFIGS[importType]) {
    console.error(`❌ Unknown import type: ${importType}`);
    console.error(`Available types: ${Object.keys(IMPORT_CONFIGS).join(', ')}`);
    return;
  }
  
  if (args.includes('--list') || args.includes('-l')) {
    listTemplates(importType);
    return;
  }
  
  if (args.includes('--all')) {
    // If --all is used without --type, install both cursor and claude-code
    const hasTypeFlag = args.includes('--type');
    installAllTemplates(hasTypeFlag ? importType : null);
    return;
  }
  
  // Install specific templates
  const templatesToInstall = args.filter(arg => !arg.startsWith('--'));
  
  if (templatesToInstall.length === 0) {
    console.error('❌ No templates specified');
    showHelp();
    return;
  }
  
  templatesToInstall.forEach(templateName => {
    installTemplate(templateName, importType);
  });
}

main();