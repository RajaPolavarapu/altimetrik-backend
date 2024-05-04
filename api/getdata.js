const setHeader = require("../helper/setHeader");
const jwt = require('jsonwebtoken');
const path = require('path');
const uuid = require("uuid").v4;
const fs = require('fs');

const getdata = async (req, res) => {
    setHeader(req, res);
    const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')));
    return res.json(users);

}

module.exports = getdata;