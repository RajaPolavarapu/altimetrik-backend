const setHeader = require("../helper/setHeader");
const jwt = require('jsonwebtoken');
const path = require('path');
const uuid = require("uuid").v4;
const fs = require('fs');
const tmpDir = require('os').tmpdir();

const login = async (req, res) => {
    setHeader(req, res);
    const JWT_SECRET = 'my_secret_jwt_test_123';

    const { username, password } = req.body;
    const tokenAge = 60; // In minutes

    const users = JSON.parse(fs.readFileSync(path.join(tmpDir, 'users.json')));

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
        return res.status(401).json({
            ...req.body,
            message: 'Invalid credentials'
        });
    }

    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });

}

module.exports = login;