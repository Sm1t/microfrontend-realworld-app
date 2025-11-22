import { defineConfig, RsbuildConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

type EnhanceConfigFunction = (config: RsbuildConfig) => RsbuildConfig;

const defaultEnhanceConfig = (config: RsbuildConfig) => config;

export const getRsbuildConfig = (
  enhanceConfig: EnhanceConfigFunction = defaultEnhanceConfig,
) =>
  defineConfig(
    enhanceConfig({
      plugins: [pluginReact()],
    }),
  );
