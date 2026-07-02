import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defaultAllowedOrigins, defineConfig } from '@rsbuild/core';

export default defineConfig({
  server: {
    port: 3003,
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
      name: 'remote_profile',
      exposes: {
        './profile': './src/pages/user/index.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
