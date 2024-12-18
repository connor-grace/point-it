import { randomUUID } from "crypto";
import express from "express";
import http from "http";
import { WebSocket } from "ws";

const app = express();
const PORT = 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  const userId = randomUUID();
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("Welcome " + userId);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

server.listen(PORT, () => {
  console.log("Server listening on %d", PORT);
});

// multiple users
// user needs to tell server it has pointed
// server needs to relay that user has pointed back to all other users to update ui
// server needs to let clients know when all users have pointed so they can enable flipping cards
//
