const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/', (req, res, next) => {
    try {
        const { username, password, name, address, phone_num } = req.body;
        // generate hashed password
        const saltRound = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRound)
        // save to database
        // response
        res.status(200).send(JSON.stringify({ message: 'registration success!' }));
    } catch (error) {
        console.log('error', error);
        res.status(500).send(JSON.stringify({ message: 'registration failed!' }));
    }
});

module.exports = router;