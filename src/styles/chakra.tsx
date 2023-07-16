import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react';

const linkTheme = defineStyleConfig({
  variants: {
    withBackground: defineStyle({
      color: '#FFFFFF'
    }),
  }
});

export const theme = extendTheme({
  colors: {
    navy: '0139FF',
    beige: 'F4E9DE',
  },
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Space Grotesk', sans-serif`,
  },
  components: {
    Link: linkTheme,
  }
});