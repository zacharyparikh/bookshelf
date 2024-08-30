import { withPigment } from '@pigment-css/nextjs-plugin';
import { createTheme } from '@mui/material';

/** @type {import('next').NextConfig} */
const nextConfig = {};

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
