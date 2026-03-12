const http = require("http");
const { estimateQuote } = require("./pricing");

const goats = [
  { id: "marguerite", name: "Marguerite", speciality: "ronces", dailyRate: 42 },
  { id: "noisette", name: "Noisette", speciality: "petites surfaces", dailyRate: 35 },
  { id: "gaston", name: "Gaston", speciality: "terrains escarpes", dailyRate: 48 }
];

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  res.end(JSON.stringify(payload));
}

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url || "/", "http://localhost");

    if (req.method === "GET" && url.pathname === "/health") {
      sendJson(res, 200, {
        status: "ok",
        service: "loueunechevre-api",
        version: "0.4.0"
      });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/goats") {
      sendJson(res, 200, { goats });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/quote") {
      const amount = estimateQuote(url.searchParams.get("surface"), url.searchParams.get("terrain"));
      sendJson(res, 200, {
        currency: "EUR",
        estimatedAmount: amount,
        note: "Estimation indicative. Validation terrain obligatoire."
      });
      return;
    }

    sendJson(res, 404, { error: "Not found" });
  });
}

if (require.main === module) {
  const port = Number(process.env.API_PORT || 3001);
  createServer().listen(port, () => {
    console.log(`LoueUneChevre API listening on ${port}`);
  });
}

module.exports = { createServer, estimateQuote };
