const vscode = require('vscode');

function activate(context) {
  const changed = new vscode.EventEmitter();
  const configName = 'ansysLumericalMcp';
  const definition = () => {
    const command = vscode.workspace.getConfiguration(configName).get('uvxExecutable', 'uvx');
    return new vscode.McpStdioServerDefinition(
      'Ansys Lumerical MCP', command,
      ['--from', 'git+https://github.com/ansys/pylumerical-mcp', 'ansys-lumerical-mcp'],
      {}, 'latest'
    );
  };
  context.subscriptions.push(changed);
  context.subscriptions.push(vscode.lm.registerMcpServerDefinitionProvider('pylumerical', {
    onDidChangeMcpServerDefinitions: changed.event,
    provideMcpServerDefinitions: async () => [definition()],
    resolveMcpServerDefinition: async server => server
  }));
  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration(`${configName}.uvxExecutable`)) changed.fire();
  }));
  context.subscriptions.push(vscode.commands.registerCommand('ansysLumericalMcp.openDocs', () =>
    vscode.env.openExternal(vscode.Uri.parse('https://github.com/ansys/pylumerical-mcp'))));
}

function deactivate() {}
module.exports = { activate, deactivate };
