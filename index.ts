#! /usr/bin/env node

import {
  createRsbuild,
  defineConfig,
  loadConfig,
  mergeRsbuildConfig,
} from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

type Scripts = 'dev' | 'preview' | 'build';

const scriptName: Scripts = process.argv[2];

const loadedConfig = await loadConfig();
const baseConfig = defineConfig({
  plugins: [pluginReact()],
  tools: {
    htmlPlugin: {
      templateContent: `
        <!doctype html>
        <html>

        <head>
          <meta charset="utf-8" />
          <title>Conduit</title>
          <!-- Import Ionicon icons & Google Fonts our Bootstrap theme relies on -->
          <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
          <link
            href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
            rel="stylesheet" type="text/css" />
        </head>

        <body>
          <div id="root"></div>
        </body>

        </html>
      `,
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

const scriptTorsbuildMethodMap = {
  dev: 'startDevServer',
  preview: 'preview',
  build: 'build',
} as const;

const rsbuildMethod = scriptTorsbuildMethodMap[scriptName];

if (rsbuildMethod) {
  rsbuild[rsbuildMethod]();
}
