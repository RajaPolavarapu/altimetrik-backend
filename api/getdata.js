const setHeader = require("../helper/setHeader");
const jwt = require('jsonwebtoken');
const path = require('path');
const uuid = require("uuid").v4;
const fs = require('fs');
const tmpDir = require('os').tmpdir();

const getdata = async (req, res) => {
    setHeader(req, res);
    fs.writeFileSync(path.join(tmpDir, 'users.json'), "[]");
    const users = JSON.parse(fs.readFileSync(path.join(tmpDir, 'users.json')));
    return res.json(users);

}

module.exports = getdata;