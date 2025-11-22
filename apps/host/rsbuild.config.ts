import { getRsbuildConfig } from '../../rsbuild.base';

export default getRsbuildConfig((config) => ({
  ...config,
  html: {
    template: './index.html',
  },
}));
