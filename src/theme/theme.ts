type Colors = {
  [key: string]: string;
};

export type ColorOption =
  | "blue"
  | "brown"
  | "black"
  | "green"
  | "pink"
  | "orange"
  | "lavender"
  | "purple"
  | "white"
  | "grey";

type Theme = {
  colors: Colors;
  fonts: {
    jost: string;
  };
};

const theme: Theme = {
  colors: {
    blue: "#a7dcd0",
    brown: "#644335",
    black: "#25272e",
    green: "#8ebb5c",
    pink: "#c088a1",
    orange: "#f15226",
    lavender: "#aaa0df",
    purple: "#884dfb",
    white: "#d4d0d7",
    grey: "#96a1ab",
  },
  fonts: {
    jost: "'Jost', sans-serif",
  },
};

export const getFont = () => {
  return theme?.fonts?.jost;
};

export const getColor = (key: ColorOption, applyModifier?: number) => {
  let result = "#96a1ab";

  if (key) {
    result = theme?.colors[key] || "#96a1ab";
  }

  if (applyModifier) {
    const modifier = Math.floor(255 * applyModifier);
    let r = parseInt(result.replace("#", "").substring(0, 2), 16) + modifier;
    let g = parseInt(result.replace("#", "").substring(2, 4), 16) + modifier;
    let b = parseInt(result.replace("#", "").substring(4), 16) + modifier;

    if (r > 255) r = 255;
    if (r < 0) r = 0;
    if (g > 255) g = 255;
    if (g < 0) g = 0;
    if (b > 255) b = 255;
    if (b < 0) b = 0;

    result = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }

  return result;
};

export const numberOrStringToCSS = (
  value?: number | string,
  defaultValue?: string
) => {
  return value ? `${value}${Number(value) ? "px" : ""}` : defaultValue;
};
