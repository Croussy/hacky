const path = require("path");
const router = require('express').Router()

router.get("/", (req, res) => {
    console.log("clément", "[__dirname]", __dirname);

    res.sendFile(path.join(__dirname + '../public/dist/index.html'));
})

module.exports = router;