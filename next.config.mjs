import { withPigment } from '@pigment-css/nextjs-plugin';
import { createTheme } from '@mui/material';
// import { TanStackRouterWebpack } from '@tanstack/router-plugin/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (
  //   config,
  //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  // ) => {
  //   config.plugins.push(TanStackRouterWebpack())
  //   // Important: return the modified config
  //   return config
  // },
};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  theme: createTheme({
    cssVariables: true,
    colorSchemes: { light: true, dark: true },
    typography: {
      fontFamily: 'var(--font-roboto)',
    },
  }),
  transformLibraries: ['@mui/material'],
};

export default withPigment(nextConfig, pigmentConfig);
