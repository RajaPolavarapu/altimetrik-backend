const setHeader = require("../helper/setHeader");
const jwt = require('jsonwebtoken');
const path = require('path');
const uuid = require("uuid").v4;
const fs = require('fs');

const login = async (req, res) => {
    setHeader(req, res);
    const JWT_SECRET = 'my_secret_jwt_test_123';

    const { token } = req.body;

    try {
        const isValid = !!jwt.verify(token, JWT_SECRET);
        return res.status(200).json({ valid: isValid, message: 'Valid User' });
    } catch (err) {
        return res.status(401).json({ valid: false, message: 'Unauthorized' });
    }
}

module.exports = login;