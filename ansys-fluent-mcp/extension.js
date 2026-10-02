const vscode = require('vscode');

function activate(context) {
  const changed = new vscode.EventEmitter();
  const configName = 'ansysFluentMcp';
  const definition = () => {
    const command = vscode.workspace.getConfiguration(configName).get('uvxExecutable', 'uvx');
    return new vscode.McpStdioServerDefinition(
      'Ansys Fluent MCP', command,
      ['--from', 'git+https://github.com/ansys/pyfluent-mcp', 'ansys-fluent-mcp'],
      {}, 'latest'
    );
  };
  context.subscriptions.push(changed);
  context.subscriptions.push(vscode.lm.registerMcpServerDefinitionProvider('pyfluent', {
    onDidChangeMcpServerDefinitions: changed.event,
    provideMcpServerDefinitions: async () => [definition()],
    resolveMcpServerDefinition: async server => server
  }));
  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration(`${configName}.uvxExecutable`)) changed.fire();
  }));
  context.subscriptions.push(vscode.commands.registerCommand('ansysFluentMcp.openDocs', () =>
    vscode.env.openExternal(vscode.Uri.parse('https://github.com/ansys/pyfluent-mcp'))));
}

function deactivate() {}
module.exports = { activate, deactivate };
