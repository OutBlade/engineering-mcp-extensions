const vscode = require('vscode');

function activate(context) {
  const changed = new vscode.EventEmitter();
  const configName = 'ansysMechanicalMcp';
  const definition = () => {
    const command = vscode.workspace.getConfiguration(configName).get('uvxExecutable', 'uvx');
    return new vscode.McpStdioServerDefinition(
      'Ansys Mechanical MCP', command,
      ['--index-strategy', 'unsafe-best-match', '--from', 'git+https://github.com/ansys/pymechanical-mcp', 'ansys-mechanical-mcp'],
      {}, 'latest'
    );
  };
  context.subscriptions.push(changed);
  context.subscriptions.push(vscode.lm.registerMcpServerDefinitionProvider('pymechanical', {
    onDidChangeMcpServerDefinitions: changed.event,
    provideMcpServerDefinitions: async () => [definition()],
    resolveMcpServerDefinition: async server => server
  }));
  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration(`${configName}.uvxExecutable`)) changed.fire();
  }));
  context.subscriptions.push(vscode.commands.registerCommand('ansysMechanicalMcp.openDocs', () =>
    vscode.env.openExternal(vscode.Uri.parse('https://github.com/ansys/pymechanical-mcp'))));
}

function deactivate() {}
module.exports = { activate, deactivate };
