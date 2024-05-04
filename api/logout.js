const setHeader = require("../helper/setHeader");

const logout = async (req, res) => {
    setHeader(req, res);

    return res.json({
        message: "Logged Out Successfully"
    });

}

module.exports = logout;