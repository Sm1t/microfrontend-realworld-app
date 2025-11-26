import { tanstackRouter } from '@tanstack/router-plugin/rspack';

import { rsbuildConfig } from '../../rsbuild.base';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default rsbuildConfig({
  html: {
    template: './index.html',
  },
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
        remote: 'remote@http://localhost:3001/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
