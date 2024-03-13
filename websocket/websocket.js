const { createServer } = require("http");
const { Server } = require("socket.io");
const { parse } = require("url");

const httpServer = createServer((req, res) => {
    const { pathname } = parse(req.url);

    if (pathname === "/api/webhook") {
        if (req.method === "POST") {
            handleWebhookPost(req, res);
        } else {
            res.writeHead(405, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Method Not Allowed" }));
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        method: ["GET", "POST"]
    }
});

io.on("connection", async (socket) => {
    console.log(socket.id);
});

const sendDataToClients = (data) => {
    io.emit("data", data);
};

const PORT = 4000;
httpServer.listen(PORT, () => {
    console.log(`Server is connected on port ${PORT}`);
});

module.exports = {
    io,
    sendDataToClients
};