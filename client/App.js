const express = require("express")
const app = express()


const path = require("path");

const port = process.env.PORT || 5000


if (process.env.NODE_ENV === "PRODUCTION") {
    app.use(express.static("build"))
    app.get("*", (req, res) => {
        req.sendFIle(path.resolve(__dirname, "build", "index.html"))
    })
}

app.listen(port, (err) => {
    if (err) return console.log(erro);
    console.log("Server is running on port XX")
})