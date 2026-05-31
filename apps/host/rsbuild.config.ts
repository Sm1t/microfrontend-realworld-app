import { tanstackRouter } from '@tanstack/router-plugin/rspack';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  tools: {
    rspack: {
      plugins: [
        tanstackRouter({
          target: 'react',
          autoCodeSplitting: true,
        }),
      ],
    },
  },
  plugins: [
    pluginModuleFederation({
      name: 'host',
      remotes: {
        remote_login: 'remote_login@http://localhost:3001/mf-manifest.json',
        remote_register:
          'remote_register@http://localhost:3002/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
