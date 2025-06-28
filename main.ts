import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
    name: "MCP Domotica Server",
    version: "1.0.0",
    description: "Server for MCP Domotica project"
});

server.registerTool(
  "enciende-luz",
  {
    title: "Encender Luz",
    description: "Enciende una luz de una habitación de la casa",
  },
  async () => {
    const response = await fetch(`https://blynk.cloud/external/api/update?token={API_KEY}&v3=1`);
    if (!response.ok) {
      return {
        content: [{ type: "text", text: `Error al encender la luz: ${response.status} ${response.statusText}` }]
      };
    }
    return {
      content: [{ type: "text", text: `Se encendio la luz de la habitación` }]
    };
  }
);

server.registerTool(
  "apaga-luz",
  {
    title: "Apagar Luz",
    description: "Apaga una luz de una habitación de la casa",
  },
  async () => {
    const response = await fetch(`https://blynk.cloud/external/api/update?token={API_KEY}&v3=0`);
    if (!response.ok) {
      return {
        content: [{ type: "text", text: `Error al apagar la luz: ${response.status} ${response.statusText}` }]
      };
    }
    return {
      content: [{ type: "text", text: `Se apago la luz de la habitación` }]
    };
  }
);

server.registerTool(
  "abre-puerta",
  {
    title: "Abrir Puerta",
    description: "Abre la puerta de entrada de la casa",
  },
  async () => {
    const response = await fetch(`https://blynk.cloud/external/api/update?token={API_KEY}&v1=1`);
    if (!response.ok) {
      return {
        content: [{ type: "text", text: `Error al abrir la puerta: ${response.status} ${response.statusText}` }]
      };
    }
    return {
      content: [{ type: "text", text: `Se abrió la puerta de entrada de la casa` }]
    };
  }
);

server.registerTool(
  "cierra-puerta",
  {
    title: "Cerrar Puerta",
    description: "Cierra la puerta de entrada de la casa",
  },
  async () => {
    const response = await fetch(`https://blynk.cloud/external/api/update?token={API_KEY}&v1=0`);
    if (!response.ok) {
      return {
        content: [{ type: "text", text: `Error al cerrar la puerta: ${response.status} ${response.statusText}` }]
      };
    }
    return {
      content: [{ type: "text", text: `Se cerró la puerta de entrada de la casa` }]
    };
  }
);

const transport = new StdioServerTransport()
await server.connect(transport);