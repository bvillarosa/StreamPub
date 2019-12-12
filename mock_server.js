const express = require("express");
const APP = express();

const PORT = 3000;

APP.get("/", (req, res) => {
    res
    .status(200)
    .send("Hello World");
});

APP.get("*", (req, res) => {
    res.sendStatus(404);

});

APP.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
