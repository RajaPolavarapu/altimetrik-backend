const setHeader = require("../helper/setHeader");
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const tmpDir = require('os').tmpdir();

const update = async (req, res) => {
    setHeader(req, res);
    const JWT_SECRET = 'my_secret_jwt_test_123';

    const { user, token } = req.body;

    let users = JSON.parse(fs.readFileSync(path.join(tmpDir, 'users.json')));

    const isValid = jwt.verify(token, JWT_SECRET)

    users = users.map(d => {
        if (d.id === user.id) return {
            ...d,
            ...user
        }
        return d;
    });

    if (!!isValid) {
        fs.writeFileSync(path.join(tmpDir, 'users.json'), JSON.stringify(users));
        return res.json(users);
    }

    return res.status(401).json({ message: 'Unauthorized' });
}

module.exports = update;