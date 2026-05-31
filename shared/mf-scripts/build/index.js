#! /usr/bin/env node
import { createRsbuild, defineConfig, loadConfig, mergeRsbuildConfig, logger, } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
var Scripts;
(function (Scripts) {
    Scripts["dev"] = "dev";
    Scripts["build"] = "build";
    Scripts["preview"] = "preview";
})(Scripts || (Scripts = {}));
const scriptToRsbuildMethodMap = {
    [Scripts.dev]: 'startDevServer',
    [Scripts.build]: 'build',
    [Scripts.preview]: 'preview',
};
const scriptName = process.argv[2];
const isAvailableScript = (script) => {
    return script in Scripts;
};
if (isAvailableScript(scriptName)) {
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
    const rsbuildMethod = scriptToRsbuildMethodMap[scriptName];
    if (rsbuildMethod) {
        if (rsbuildMethod === 'startDevServer') {
            const devServer = await rsbuild.createDevServer();
            await devServer.listen();
            devServer.open();
        }
        else {
            rsbuild[rsbuildMethod]();
        }
    }
}
else {
    logger.error(`Script not found. Available scripts: ${Object.keys(Scripts).join(', ')}`);
}
