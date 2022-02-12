const path = require("path");
module.exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname + '../public/dist/index.html'));
}