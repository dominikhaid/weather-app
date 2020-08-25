const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const { parse } = require("url");
const handle = nextApp.getRequestHandler();
const multer = require("multer");
var upload = multer();

function startNext(server, serverOptions, protocol) {
  nextApp
    .prepare()
    .then(() => {
      server.post("*", upload.none(), (req, res) => {
        const parsedUrl = parse(req.url, true);

        return handle(req, res, parsedUrl);
      });

      server.get("*", (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;
        //console.debug('PATHNAME: ', pathname)

        return handle(req, res, parsedUrl);
      });

      port = process.env.PORT || 5000;
      if (protocol.httpServer) protocol.httpServer.listen(port);
      if (protocol.httpsServer) protocol.listen(port);
      if (!protocol.httpServer && !protocol.httpsServer) server.listen(port);

      console.debug(
        "\nBackend Service Manager with Next.js start at: " + port,
        "\nConfig:",
        serverOptions
      );
    })
    .catch((ex) => {
      console.error(ex.stack);
      process.exit(1);
    });
}

module.exports.startNext = startNext;
