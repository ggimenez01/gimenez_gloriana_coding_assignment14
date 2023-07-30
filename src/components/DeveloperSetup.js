import React from 'react';
import './DeveloperSetup.css';

function DeveloperSetup() {
  return (
    <div className="developer-setup-container">
      <h2>Developer Setup</h2>
      <section>
        <h2 id="vscode">VsCode Setup:</h2>
        <p>
          [Visual Studio Code on Windows]<br />
          <strong>Installation</strong><br />
          1. Download the Visual Studio Code installer for Windows.<br />
          2. Once it is downloaded, run the installer (VSCodeUserSetup-version.exe). This will only take a minute.<br />
          3. By default, VS Code is installed under C:\Users\Username\AppData\Local\Programs\Microsoft VS Code.<br />
          Alternatively, you can also download a Zip archive, extract it, and run Code from there.<br />
        </p>
      </section>
      <section>
        <h2 id="vscode">VsCode Setup:</h2>
        <p>
          [Setting up the terminal involves configuring your command-line interface to work with Visual Studio Code. By default, Visual Studio Code uses the integrated terminal, but you can also set up an external terminal if you prefer. Here's how to set up both the integrated terminal and the external terminal:
        </p>
        <p>
          <strong>Integrated Terminal Setup:</strong><br />
          The integrated terminal in Visual Studio Code is the terminal that appears within the editor itself. By default, it uses the default shell of your operating system.
        </p>
        <p>
          To open the integrated terminal, press <kbd>Ctrl + `</kbd> on Windows/Linux or <kbd>Cmd + `</kbd> on macOS.
        </p>
        <p>
          If you want to customize the integrated terminal, you can change the default shell or configure its behavior using the following steps:
        </p>
        <ol>
          <li>Open Visual Studio Code.</li>
          <li>Press <kbd>Ctrl + ,</kbd> (comma) to open the settings.</li>
          <li>In the settings search bar, type "terminal.integrated.shell".</li>
          <li>Under "Terminal > Integrated > Shell: Windows" (for Windows users) or "Terminal > Integrated > Shell: Linux" (for Linux users) or "Terminal > Integrated > Shell: macOS" (for macOS users), set the path to the desired shell executable (e.g., PowerShell, Git Bash, Bash, Zsh, etc.). You can specify the full path or just the executable name if it's available in your system's PATH.</li>
        </ol>
        <p>
          <strong>External Terminal Setup:</strong><br />
          If you prefer to use an external terminal application, you can set it up in Visual Studio Code as follows:
        </p>
        <ol>
          <li>Open Visual Studio Code.</li>
          <li>Press <kbd>Ctrl + ,</kbd> (comma) to open the settings.</li>
          <li>In the settings search bar, type "terminal.external".</li>
          <li>Under "Terminal > External: Windows Exec", "Terminal > External: Linux Exec", or "Terminal > External: Osx Exec", set the path to the terminal application's executable. Again, you can specify the full path or just the executable name if it's available in your system's PATH.</li>
        </ol>
        <p>
          Once you have set up the external terminal, you can right-click in the editor and choose "Open in Terminal" to open the external terminal in the current working directory.
        </p>
        <p>
          Remember to save your changes in the settings after making any modifications.
        </p>
        <p>
          That's it! You have now set up the terminal in Visual Studio Code according to your preference. Whether you choose the integrated terminal or an external one, it will enable you to execute commands and run scripts directly from within the editor.]
        </p>
      </section>
      <section>
        <h2 id="editor-font">Preferred Editor Font:</h2>
        <p>
          [To set the preferred editor font in Visual Studio Code, you can follow these steps:
        </p>
        <ol>
          <li>Open Visual Studio Code.</li>
          <li>Press <kbd>Ctrl + ,</kbd> (comma) to open the settings.</li>
          <li>In the settings search bar, type "editor.fontFamily".</li>
          <li>Under "Text Editor > Font Family", you can specify the font you want to use for the editor. You can set multiple fonts separated by commas. Visual Studio Code will use the first font that is available on your system.</li>
          <li>For example, if you want to use the "Fira Code" font, you can add the following to the settings:</li>
        </ol>
        <code>
          "editor.fontFamily": "Fira Code, Consolas, 'Courier New', monospace"
        </code>
        <p>
          In this example, Visual Studio Code will first try to use "Fira Code". If it's not available, it will fall back to "Consolas", then "Courier New", and finally to the generic monospace font.
        </p>
        <p>
          Save your changes in the settings.<br />
          After saving the settings, Visual Studio Code will immediately apply the new font to the editor.
        </p>
        <p>
          If you haven't installed the preferred font on your system, you can download and install it from the font provider's website. For example, "Fira Code" is available for free from Google Fonts or GitHub. Once the font is installed on your system, Visual Studio Code will be able to use it in the editor.
        </p>
        <p>
          Remember that the actual appearance of the font may depend on your operating system and other system-wide font settings.
        </p>
      </section>
    </div>
  );
}

export default DeveloperSetup;
