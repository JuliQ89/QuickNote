export const getTextColorBasedOnHex = (
  hex_code,
  light_color = "#ffffff",
  dark_color = "#000000"
) => {
  const threshold = 130;

  const red = parseInt(String(hex_code).slice(0, 2), 16);
  const green = parseInt(String(hex_code).slice(2, 4), 16);
  const blue = parseInt(String(hex_code).slice(4, 6), 16);
  const colorBrightness = (red * 299 + green * 587 + blue * 114) / 1000;

  return colorBrightness > threshold ? dark_color : light_color;
};
