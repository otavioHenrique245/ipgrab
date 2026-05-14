const express = require("express");
const app = express();

app.set("trust proxy", true);

app.get("/", (req, res) => {
    const ip =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket.remoteAddress;

    console.log("IP:", ip);

    res.send("OK");
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on port ${port}`);
});
