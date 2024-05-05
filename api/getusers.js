const setHeader = require("../helper/setHeader");
const jwt = require('jsonwebtoken');
const path = require('path');
const uuid = require("uuid").v4;
const fs = require('fs');
const tmpDir = require('os').tmpdir();

const getusers = async (req, res) => {
    setHeader(req, res);
    const JWT_SECRET = 'my_secret_jwt_test_123';

    const { token } = req.body;

    try {
        const isAuthenticated = !!jwt.verify(token, JWT_SECRET);
        if (isAuthenticated) {
            const users = JSON.parse(fs.readFileSync(path.join(tmpDir, 'users.json')));
            return res.status(200).json(users);
        } else {
            throw Error('Unauthorized Request');
        }
    } catch (err) {
        return res.status(401).json({ valid: false, message: 'Unauthorized Request' });
    }

}

module.exports = getusers;