#! /usr/bin/env node

import {
  createRsbuild,
  defineConfig,
  loadConfig,
  mergeRsbuildConfig,
  logger,
} from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import { htmlTemplate } from './html-template.js';

enum Scripts {
  dev = 'dev',
  build = 'build',
  preview = 'preview',
}

const scriptToRsbuildMethodMap = {
  [Scripts.dev]: 'startDevServer',
  [Scripts.build]: 'build',
  [Scripts.preview]: 'preview',
} as const;

const scriptName = process.argv[2];

const isAvailableScript = (script: string): script is Scripts => {
  return script in Scripts;
};

if (isAvailableScript(scriptName)) {
  const loadedConfig = await loadConfig();
  const baseConfig = defineConfig({
    plugins: [pluginReact()],
    tools: {
      htmlPlugin: {
        templateContent: htmlTemplate,
        templateParameters: {
          mountId: 'root',
        },
      },
    },
  });

  const config = mergeRsbuildConfig(loadedConfig.content, baseConfig);

  const rsbuild = await createRsbuild({
    config,
  });

  const rsbuildMethod = scriptToRsbuildMethodMap[scriptName];

  if (rsbuildMethod) {
    if (rsbuildMethod === 'startDevServer') {
      const devServer = await rsbuild.createDevServer();

      await devServer.listen();
      devServer.open();
    } else {
      rsbuild[rsbuildMethod]();
    }
  }
} else {
  logger.error(
    `Script not found. Available scripts: ${Object.keys(Scripts).join(', ')}`,
  );
}
