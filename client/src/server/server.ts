/**
 * This is the main server application
 * Built in JS for simplicity of deployment
 */
import * as express from "express";
import * as path from "path";

const app = express();

const root = path.resolve(__dirname, "../..");

const windowConfig = {
  authHost: process.env.AUTH_HOST,
  authClientId: process.env.AUTH_CLIENT_ID
};

const INDEX_HTML_LOCATION = path.resolve(root, "build/client/index.html");
const STATIC_ROOT = path.resolve(root, "build/client");
/*
 * This is a way of making JavaScript not being able to override the configuration
 * after it has been defined.
 */
// TODO: verify browser support for Object.freeze
const WINDOW_CONFIG = `
(function defineConfig() {
  Object.defineProperty(window, 'CONFIG', {
    get: function() {
      return Object.freeze(${JSON.stringify(windowConfig)});
    }
  });
})();
`;

app.get("/config.js", (req: express.Request, res: express.Response) => {
  res
    .header("Content-Type", "application/javascript")
    .header("Cache-Control", "public,max-age=900")
    .status(200)
    .send(module.exports.WINDOW_CONFIG)
    .end();
});

// Serve static files from build directory as part of the application
app.use(
  express.static(STATIC_ROOT, {
    maxAge: 3600 * 1000 // Given in ms here
  })
);

// The rest of the requests fall through to index.html
app.get("*", (req, res) => {
  res
    .header("Cache-Control", "public, max-age=900")
    .sendFile(INDEX_HTML_LOCATION);
});

export { app, INDEX_HTML_LOCATION, STATIC_ROOT, WINDOW_CONFIG };
