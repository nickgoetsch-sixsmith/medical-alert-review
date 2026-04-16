import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(
    [
      "User-agent: *",
      "Allow: /",
      "",
      "User-agent: GPTBot",
      "Allow: /",
      "",
      "User-agent: ChatGPT-User",
      "Allow: /",
      "",
      "User-agent: ClaudeBot",
      "Allow: /",
      "",
      "User-agent: anthropic-ai",
      "Allow: /",
      "",
      "User-agent: PerplexityBot",
      "Allow: /",
      "",
      "User-agent: OAI-SearchBot",
      "Allow: /",
      "",
      "Sitemap: https://medicalalertreview.com/sitemap.xml",
    ].join("\n"),
    { headers: { "Content-Type": "text/plain" } }
  );
}
