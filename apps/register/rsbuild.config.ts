import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defaultAllowedOrigins } from '@rsbuild/core';

import { rsbuildConfig } from '../../rsbuild.base';

export default rsbuildConfig({
  server: {
    port: 3002,
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
      name: 'remote_register',
      exposes: {
        './register': './src/components/register.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  html: {
    template: './index.html',
  },
});
