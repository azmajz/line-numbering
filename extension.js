const vscode = require('vscode');

function activate(context) {
  // Add Numbers
  let addCmd = vscode.commands.registerCommand('lineNumbering.addNumbers', function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor!');
      return;
    }

    const selection = editor.selection;
    const text = editor.document.getText(selection);

    if (!text.trim()) {
      vscode.window.showErrorMessage('No text selected!');
      return;
    }

    const lines = text.split(/\r?\n/);
    const numbered = lines.map((line, idx) => `${idx + 1}. ${line}`);

    editor.edit(editBuilder => {
      editBuilder.replace(selection, numbered.join('\n'));
    });
  });

  // Remove Numbers
  let removeCmd = vscode.commands.registerCommand('lineNumbering.removeNumbers', function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor!');
      return;
    }

    const selection = editor.selection;
    const text = editor.document.getText(selection);

    if (!text.trim()) {
      vscode.window.showErrorMessage('No text selected!');
      return;
    }

    const lines = text.split(/\r?\n/);
    // Regex: match "number. " at line start
    const unnumbered = lines.map(line => line.replace(/^\d+\.\s*/, ''));

    editor.edit(editBuilder => {
      editBuilder.replace(selection, unnumbered.join('\n'));
    });
  });

  context.subscriptions.push(addCmd, removeCmd);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
