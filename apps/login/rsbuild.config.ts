import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defaultAllowedOrigins } from '@rsbuild/core';

import { rsbuildConfig } from '../../rsbuild.base';

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
      name: 'remote_login',
      exposes: {
        './login': './src/components/login.tsx',
      },
      shared: [
        'react',
        'react-dom',
        '@mf-realworld/utils',
        '@mf-realworld/ui-kit',
      ],
    }),
  ],
  html: {
    template: './index.html',
  },
});
