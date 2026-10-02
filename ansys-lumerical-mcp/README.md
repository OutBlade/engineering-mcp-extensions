# Ansys Lumerical MCP for VS Code

<p align="center"><img src="https://raw.githubusercontent.com/OutBlade/engineering-mcp-extensions/main/ansys-lumerical-mcp/icon.png" alt="Lumerical photonic resonator icon" width="144"></p>

**Photonic simulation tools inside Copilot Chat.** Connect VS Code to Ansys Lumerical FDTD, MODE, DEVICE, and INTERCONNECT through the Ansys-maintained PyLumerical Model Context Protocol (MCP) server.

Adds **Ansys Lumerical MCP** to VS Code's native MCP server catalog. It launches Ansys' [PyLumerical MCP](https://github.com/ansys/pylumerical-mcp) on demand, connecting Copilot chat tools to photonics workflows across FDTD, MODE, DEVICE, and INTERCONNECT.

## Requirements

- VS Code with MCP support
- Git and [`uv`](https://docs.astral.sh/uv/getting-started/installation/) (`uvx`)
- Ansys Lumerical and a valid license for live simulations
- Python version supported by the upstream server (see its README)

Install `uv` and Git before starting the MCP server. In VS Code, open Chat and choose **Ansys Lumerical MCP** from the MCP server picker. `uvx` retrieves the upstream server from GitHub when it starts. The upstream package discovers the local Lumerical installation; see the official setup guide for licensing and platform details.

If `uvx` is not on PATH, set `ansysLumericalMcp.uvxExecutable` to its full path in VS Code settings.

Equivalent workspace configuration:

```json
{
  "servers": {
    "ansys-lumerical-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": ["--from", "git+https://github.com/ansys/pylumerical-mcp", "ansys-lumerical-mcp"]
    }
  }
}
```

The extension is an independent community connector and is not affiliated with or endorsed by Ansys. The MCP server is maintained by Ansys under its own license.
