# mymcp

Learning about MCP server

Substack Post Link: https://open.substack.com/pub/booleanbit1/p/mcp?r=z6l5o&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true

In cursor settings you can add this MCP server by giving the path of the index.js file, and then claude will be able to run this server to get answers of the questions like "How is the weather of Bellevue?" etc.

STDIO will not work if the MCP server is hosted externally and not in your own machine, we can use SSE Transport instead of STDIO Transport at that time.
