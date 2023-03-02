import { REG_HEX, REG_RGB_A } from "../constants";


const DEFAULT_VARIABLE = require("../assets/default_variable.json");

export const rgb2hex = (rgb: string) => {
  const r = /\d/g;
};

const generateVariable = (word: string) => {
  return DEFAULT_VARIABLE[word];
};

export default generateVariable;