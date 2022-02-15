const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const Auth = require('./src/utils/AuthUtils');
const Users = require('./src/utils/Users');
const JWT = require('./src/utils/JWTUtils');
const AuthMiddleware = require('./src/middlewares/AuthMiddleware');

app.use(cors(
    {
        origin: ["http://localhost:1900"],
        method: ["GET", "POST"],
        credentials: true
    }
));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    const auth = new Auth();
    const en = auth.encrypt('suka kucing');
    const de = auth.decrypt(en);
    const users = Users.getUser();
    console.log(users[0].username)
    res.send(JSON.stringify(users[0]));
});

app.get('/getToken', (req, res) => {
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
// IT WILL BREAK LMAO
app.get('/checkAuth', AuthMiddleware.auth, (req, res) => {
    res.send("you're authenticated ✅");
})

app.post('/auth', (req, res) => {
    const { username, password } = req.body;
    const users = Users.getUser();
    const getExactUser = users.filter(user => user.username === username)
    if (getExactUser.length == 0) return res.status(404).send('Username not found')
    console.log(getExactUser)
    res.json(password)
})

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));

module.exports = app;