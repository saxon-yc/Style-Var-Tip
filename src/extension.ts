import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const { languages, Hover: hover } = vscode;
	const disposable = languages.registerHoverProvider(
		['css', 'scss', 'less', 'stylus', 'jsx', 'tsx', 'vue'],
		{
			provideHover(document: vscode.TextDocument, position: vscode.Position, token: Object) {
				const word = document.getText(document.getWordRangeAtPosition(position));
				if(/^#[a-zA-Z0-9]{2,6}/g.test(word)){
					return new hover('I am a hover!');
				}
			}
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() { }
