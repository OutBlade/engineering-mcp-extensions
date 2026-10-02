# Ansys Mechanical MCP for VS Code

<p align="center"><img src="https://raw.githubusercontent.com/OutBlade/engineering-mcp-extensions/main/ansys-mechanical-mcp/icon.png" alt="Mechanical finite element mesh under load icon" width="144"></p>

**Structural simulation tools inside Copilot Chat.** Connect VS Code to Ansys Mechanical with the Ansys-maintained PyMechanical Model Context Protocol (MCP) server.

Adds **Ansys Mechanical MCP** to VS Code's native MCP server catalog. It launches Ansys' [PyMechanical MCP](https://github.com/ansys/pymechanical-mcp) on demand for structural, thermal, modal, and multiphysics workflows: manage sessions, inspect models, run scripts and solves, export results, and capture plots/screenshots.

## Requirements

- VS Code with MCP support
- Git and [`uv`](https://docs.astral.sh/uv/getting-started/installation/) (`uvx`)
- A supported Ansys Mechanical installation and license for live simulation
- Python version supported by the upstream server (see its README)

Install `uv` and Git first. In VS Code, open Chat and choose **Ansys Mechanical MCP** from the MCP server picker. `uvx` fetches the upstream server from Ansys GitHub on first start. Mechanical connection mode and product-version requirements are documented upstream.

If `uvx` is not on PATH, set `ansysMechanicalMcp.uvxExecutable` to its full path in VS Code settings.

Equivalent workspace configuration:

```json
{
  "servers": {
    "ansys-mechanical-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": ["--index-strategy", "unsafe-best-match", "--from", "git+https://github.com/ansys/pymechanical-mcp", "ansys-mechanical-mcp"]
    }
  }
}
```

The extension is an independent community connector and is not affiliated with or endorsed by Ansys. The MCP server is maintained by Ansys under its own license.
