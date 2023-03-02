
// eslint-disable-next-line @typescript-eslint/naming-convention
export const REG_HEX = new RegExp("^#[a-fA-F0-9]{6}", "g");
export const REG_RGB_A = new RegExp("\brgba?\(([^\)]*)\)", "g");
export const SUPPORTED_TEXT_TYPE = ['css', 'scss', 'less', 'stylus', 'jsx', 'tsx', 'vue'];
export const UNSUPPORTED_TIP = 'This text type is not supported. If you need to use it, you can fork a source code and add a supported text type.';