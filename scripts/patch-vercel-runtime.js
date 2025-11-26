#!/usr/bin/env node

/**
 * Post-build script to patch Vercel runtime configuration
 * Converts nodejs18.x to nodejs20.x in generated .vc-config.json files
 * This addresses the @astrojs/vercel adapter defaulting to Node 18
 */

import { promises as fs } from 'fs';
import { join } from 'path';

const VERCEL_OUTPUT_DIR = '.vercel/output/functions';

async function findAndPatchRuntimeConfig(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Recursively search subdirectories
        await findAndPatchRuntimeConfig(fullPath);
      } else if (entry.name === '.vc-config.json') {
        // Found a config file, patch it
        console.log(`Patching ${fullPath}...`);
        const content = await fs.readFile(fullPath, 'utf-8');
        const config = JSON.parse(content);
        
        if (config.runtime === 'nodejs18.x') {
          config.runtime = 'nodejs20.x';
          await fs.writeFile(fullPath, JSON.stringify(config, null, 2));
          console.log(`✓ Updated runtime from nodejs18.x to nodejs20.x`);
        }
      }
    }
  } catch (error) {
    // Directory might not exist yet, which is fine
    if (error.code !== 'ENOENT') {
      console.error(`Error patching runtime config: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the patch
console.log('🔧 Post-build: Patching Vercel runtime configuration...');
await findAndPatchRuntimeConfig(VERCEL_OUTPUT_DIR);
console.log('✅ Runtime patch complete');
