import { tanstackRouter } from '@tanstack/router-plugin/rspack';

import { getRsbuildConfig } from '../../rsbuild.base';

export default getRsbuildConfig((config) => ({
  ...config,
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
}));
