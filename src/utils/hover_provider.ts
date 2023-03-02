import * as vscode from 'vscode';

import {
  REG_HEX,
  REG_RGB_A,
  SUPPORTED_TEXT_TYPE,
  UNSUPPORTED_TIP
} from "../constants";
import generateVariable from './variable_generator';

export default class ProviderVariable {
  registerHover() {

    const { languages } = vscode;

    return languages.registerHoverProvider(
      SUPPORTED_TEXT_TYPE,
      {
        provideHover: this.provideHover
      }
    );
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position, token: Object) {
    const range = document.getWordRangeAtPosition(position);
    const word = document.getText(range);
    if (REG_HEX.test(word) || REG_RGB_A.test(word)) {
      return new vscode.Hover(generateVariable(word));
    }

    return new vscode.Hover(UNSUPPORTED_TIP);
  }
}
