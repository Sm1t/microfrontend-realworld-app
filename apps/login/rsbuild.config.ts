import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

import { rsbuildConfig } from '../../rsbuild.base';
import { defaultAllowedOrigins } from '@rsbuild/core';

export default rsbuildConfig({
  server: {
    port: 3001,
    cors: {
      origin: [defaultAllowedOrigins],
    },
  },
  tools: {
    rspack: {
      output: {
        publicPath: 'auto',
      },
    },
  },
  plugins: [
    pluginModuleFederation({
      name: 'remote',
      exposes: {
        './login': './src/components/login.tsx',
      },
      shared: ['react', 'react-dom'],
      getPublicPath: `function() {return "http://localhost:3001/"}`,
    }),
  ],
  html: {
    template: './index.html',
  },
});
