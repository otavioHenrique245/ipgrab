const express = require("express");

const app = express();

app.get("/", (req, res) => {

    console.log("Recebeu acesso!");

    const ip =
        req.headers["x-forwarded-for"] ||
        req.socket.remoteAddress;

    console.log("IP:", ip);

    res.redirect("https://discord.com");
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});