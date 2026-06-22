import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT ?? 4173);
const rootDir = resolve(fileURLToPath(new URL("..", import.meta.url)));

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8"
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", "http://localhost");
  const normalizedPath = normalize(url.pathname).replace(/^(\.\.(\/|\\|$))+/, "");
  const relativePath =
    normalizedPath === "/" ? "/index.html" : normalizedPath;
  const filePath = resolve(rootDir, `.${relativePath}`);

  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  try {
    const contents = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type":
        mimeTypes[extname(filePath)] ?? "application/octet-stream"
    });
    response.end(contents);
  } catch (error) {
    const statusCode =
      error instanceof Error && "code" in error && error.code === "ENOENT"
        ? 404
        : 500;
    response.writeHead(statusCode, {
      "Content-Type": "text/plain; charset=utf-8"
    });
    response.end(statusCode === 404 ? "Not Found" : "Server Error");
  }
});

server.listen(port, () => {
  console.log(`Plugin demo available at http://localhost:${port}`);
});
