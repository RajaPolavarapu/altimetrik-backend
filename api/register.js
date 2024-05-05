const setHeader = require("../helper/setHeader");
const jwt = require('jsonwebtoken');
const path = require('path');
const uuid = require("uuid").v4;
const fs = require('fs');
const { isValidJSON } = require("../helper/helpers");
const tmpDir = require('os').tmpdir();

const register = async (req, res) => {
    setHeader(req, res);

    const { last_name, first_name, password, payment_type, address, username } = req.body;

    const usersData = fs.readFileSync(path.join(tmpDir, 'users.json'));

    const users = isValidJSON(usersData) || [];

    const id = uuid();

    const existingUser = !!users.find(u => u.username === username);

    if (!existingUser) {
        fs.writeFileSync(path.join(tmpDir, 'users.json'), JSON.stringify([
            ...users,
            { id, last_name, first_name, password, payment_type, address, username }
        ]));
        return res.status(200).json({ status: "User Successfully Created" });
    }
    return res.status(409).json({ status: "User Already Exists" });

}

module.exports = register;