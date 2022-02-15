const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// utils
const JWT = require('./../utils/JWTUtils');
const Users = require('./../utils/Users');
// middleware
const AuthMiddleware = require('./../middlewares/AuthMiddleware');

router.post('/', (req, res) => {
    const { username, password } = req.body;

    const hash = '$2a$10$kA5Scek0r2ltPdgO18VjhOI0oRJxo27AKgqy15Cioq36OaFAojlxm';

    const users = Users.getUser();
    const getExactUser = users.filter(user => user.username === username)
    if (getExactUser.length == 0) return res.status(404).send('Username not found')
    console.log(getExactUser)

    const comparePassword = bcrypt.compareSync(password, hash);
    if (!comparePassword) return res.status(404).send('Password not match!');

    res.json('login success');
})

router.get('/token', (req, res) => {
    const users = Users.getUser();
    const token = JWT.generateToken(users[0].username)
    console.log(users[0].username)
    const result = {
        auth: true,
        username: users[0].username,
        token
    }
    res.json(result);
});

router.get('/verify', AuthMiddleware.auth, (req, res) => {
    res.send("you're authenticated ✅");
})


module.exports = router;