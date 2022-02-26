const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// router
const AuthRouter = require('./src/routes/AuthRouter')
const RegisterRouter = require('./src/routes/RegisterRouter')

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
    res.send(JSON.stringify({ message: 'welcome 👋' }));
});
// Edit routes auth di file ./src/routes/AuthRouter.js
app.use('/api/auth', AuthRouter);
// Edit routes auth di file ./src/routes/AuthRouter.js
app.use('/api/register', RegisterRouter);

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));

module.exports = app;