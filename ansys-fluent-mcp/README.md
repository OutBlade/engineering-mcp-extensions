# Ansys Fluent MCP for VS Code

<p align="center"><img src="https://raw.githubusercontent.com/OutBlade/engineering-mcp-extensions/main/ansys-fluent-mcp/icon.png" alt="Fluent airfoil with CFD flow lines icon" width="144"></p>

**CFD simulation tools inside Copilot Chat.** Connect VS Code to Ansys Fluent through the Ansys-maintained PyFluent Model Context Protocol (MCP) server.

Adds **Ansys Fluent MCP** to VS Code's native MCP server catalog. It launches Ansys' [PyFluent MCP](https://github.com/ansys/pyfluent-mcp) on demand, enabling Fluent CFD workflows such as session control, settings discovery, validated code execution, mesh-quality checks, field inspection, and simulation reporting.

## Requirements

- VS Code with MCP support
- Git and [`uv`](https://docs.astral.sh/uv/getting-started/installation/) (`uvx`)
- Python 3.12+ (confirm current range upstream)
- A licensed local Ansys Fluent installation for live solver work; some documentation and validation tools work offline

Install `uv` and Git first. In VS Code, open Chat and choose **Ansys Fluent MCP** from the MCP server picker. `uvx` fetches the upstream server from Ansys GitHub the first time it starts. See the upstream docs for the supported Fluent versions and configuration.

If `uvx` is not on PATH, set `ansysFluentMcp.uvxExecutable` to its full path in VS Code settings.

Equivalent workspace configuration:

```json
{
  "servers": {
    "ansys-fluent-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": ["--from", "git+https://github.com/ansys/pyfluent-mcp", "ansys-fluent-mcp"]
    }
  }
}
```

The extension is an independent community connector and is not affiliated with or endorsed by Ansys. The MCP server is maintained by Ansys under its own license.
