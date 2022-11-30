import { createStitches } from '@stitches/react';

export const mainStiches = createStitches({
  theme: {
    colors: {
      primary100: 'rgba(108, 74, 182, 1)',
      secondary100: 'rgba(141, 114, 225, 1)',
      tertiary100: 'rgba(141, 158, 255, 1)',
      neutral100: 'rgba(185, 224, 255, 1)',
      red100: 'rgba(233,105,87, 1)',
      red90: 'rgba(233,105,87, 0.9)',
      gray100: 'rgba(150, 150, 150, 1)',
    },
    zIndices: {
      toolbar: 1,
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});
