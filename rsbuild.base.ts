import { defineConfig, type RsbuildConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export const rsbuildConfig = (config: RsbuildConfig) =>
  defineConfig({
    ...config,
    plugins: (config.plugins || []).concat(pluginReact()),
  });
