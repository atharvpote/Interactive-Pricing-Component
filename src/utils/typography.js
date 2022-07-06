import { rem } from "polished";
export const fontFamily = `'Manrope', sans-serif`;

export const weightScale = {
  semiBold: 600,
  extraBold: 800,
};

const scaleConstants = 1.333;
const baseFontSize = 16;

export const typeScale = {
  heading1: rem(baseFontSize * scaleConstants ** 5),
  heading2: rem(baseFontSize * scaleConstants ** 4),
  heading3: rem(baseFontSize * scaleConstants ** 3),
  heading4: rem(baseFontSize * scaleConstants ** 2),
  heading5: rem(baseFontSize * scaleConstants),
  paragraph: "1rem",
  helperText: rem(baseFontSize * scaleConstants ** -1),
  copyright: rem(baseFontSize * scaleConstants ** -2),
  disclaimer: rem(baseFontSize * scaleConstants ** -3),
};
