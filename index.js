import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "Weather Data Fetcher",
  version: "1.0.0",
});

async function getWeatherByCity(city = "") {
  if (city.toLowerCase() === "Bellevue") {
    return { temp: "16C", forecast: "Chances of rain" };
  }
  if (city.toLowerCase() === "Kirkland") {
    return { temp: "14C", forecast: "Chances of wind" };
  }
  if (city.toLowerCase() === "Redmond") {
    return { temp: "17C", forecast: "Chances of mild rain" };
  }
  return { temp: null, error: "City not found" };
}

// register a tool on the server, we can have multiple tools based on our needs
server.tool(
  "getWeatherDataByCityName",
  {
    city: z.string(),
  },
  async ({ city }) => {
    return {
      content: [
        {
          type: "text/plain",
          text: JSON.stringify(await getWeatherByCity(city)),
          value: `The weather in ${city} is sunny!`,
        },
      ],
    };
  }
);

// Start receiving messages on stdin and sending messages on stdout
async function init() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

init();
