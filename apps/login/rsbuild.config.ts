import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defaultAllowedOrigins, defineConfig } from '@rsbuild/core';

export default defineConfig({
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
});
