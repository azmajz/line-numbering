# Line Numbering

Quickly **add or remove line numbers** to selected text in Visual Studio Code.  
Works directly from the right-click context menu — no need to open the command palette.

---

## ✨ Features

- Add line numbers to any selected block of text  
- Remove line numbers from previously numbered text  
- Accessible via **right-click menu**  
- Keeps your workflow simple and fast  

---

## 🚀 Usage

1. Select the lines of text you want to modify  
2. Right-click → choose **Add Line Numbers**  
```
apple
banana
cherry

becomes:

1. apple
2. banana
3. cherry
```
3. To revert, select the same block → right-click → **Remove Line Numbers**  

---

## 🛠 Commands

- **Add Line Numbers** → `lineNumbering.addNumbers`  
- **Remove Line Numbers** → `lineNumbering.removeNumbers`  

Both are available in the **editor context menu** when you have text selected.  

---

## ⌨️ Keyboard Shortcuts (Optional)

If you want a shortcut, add this to your `keybindings.json`:

```json
{
"key": "ctrl+alt+n",
"command": "lineNumbering.addNumbers",
"when": "editorHasSelection"
}
