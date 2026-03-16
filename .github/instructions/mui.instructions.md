---
description: Use these instructions when the user asks about Material UI (MUI), MUI packages, components, theming, or related docs.
applyTo: "**/*"
---

## description: MUI MCP usage

**Purpose:** Ensure the agent uses the Material UI MCP toolchain to fetch authoritative MUI docs and produce accurate, source-cited answers.

- **Scope:** Applies to any question or task involving MUI libraries and components in this repository or general MUI usage.
- **Priority:** Hard rule — the agent must follow the fetch-and-cite workflow below for MUI questions.

**Required workflow (always follow for MUI questions):**

1. Call the `mcp_mui-mcp_useMuiDocs` tool with the most appropriate llms.txt URL from the MUI provider list to retrieve the documentation index for the target MUI package/version.
2. Parse the returned llms.txt content and extract the specific documentation page URLs relevant to the user’s question.
3. Call the `mcp_mui-mcp_fetchDocs` tool with those extracted URLs to fetch the actual doc pages. Use only URLs provided by the llms.txt content.
4. Repeat steps 1–3 until you have all necessary documentation pages.
5. Use the fetched documentation to answer the user. Always cite the fetched pages and include the source URLs in the response.

**Implementation notes for the agent:**

- Prefer exact matches for component names, API names, and versioned docs (choose the llms.txt that matches the repo's MUI major version when obvious).
- If multiple llms.txt URLs appear equally relevant, fetch the most recent stable MUI major version first, then fall back.
- If the llms.txt file lists example code or code samples, fetch the corresponding example pages as needed to clarify behavior.
- If the docs do not contain an answer, state that you searched the official docs and couldn't find an authoritative answer; then propose well-reasoned guidance and label it as agent inference.

**Examples:**

- When asked "How do I customize the MUI Button's hover style?": call `mcp_mui-mcp_useMuiDocs` → parse llms.txt → fetch API/Theming pages with `mcp_mui-mcp_fetchDocs` → answer with examples and doc links.

**Maintenance:**

- If new MUI versions are added to the repository, update this file to prefer the matching llms.txt URL for that version.
