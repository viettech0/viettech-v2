import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react';

const linkTheme = defineStyleConfig({
  variants: {
    withBackground: defineStyle({
      color: '#FFFFFF',
    }),
  },
});

const headingTheme = defineStyleConfig({
  variants: {
    action: defineStyle({
      background: 'navy',
      color: 'white',
    }),
    target: defineStyle({}),
  },
  sizes: {
    xl: {
      fontSize: '40px',
      fontWeight: '700',
    },
    '4xl': {
      fontSize: '96px',
      fontWeight: '700',
    },
  },
});

export const theme = extendTheme({
  colors: {
    navy: '#0139FF',
    beige: '#F4E9DE',
  },
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Space Grotesk', sans-serif`,
  },
  components: {
    Link: linkTheme,
    Heading: headingTheme,
  },
});
