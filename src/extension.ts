import * as vscode from 'vscode';

import { ProviderVariable } from './utils';

export function activate(context: vscode.ExtensionContext) {

	const disposable = new ProviderVariable();

	context.subscriptions.push(disposable.registerHover());
}

export function deactivate() { }
