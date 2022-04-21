const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// router
const AuthRouter = require('./src/routes/AuthRouter')
const RegisterRouter = require('./src/routes/RegisterRouter')
const UsersRouter = require('./src/routes/UsersRouter')
const PatnersRouter = require('./src/routes/PatnersRouter')
const GadgetTypesRouter = require('./src/routes/GadgetTypesRouter')
const OrdersRouter = require('./src/routes/OrdersRouter')
const OrderStatusRouter = require('./src/routes/OrderStatusRouter')
const ProblemCategoryRouter = require('./src/routes/ProblemCategoryRouter')
const ReviewRouter = require('./src/routes/ReviewRouter')
const ProgressRouter = require('./src/routes/ProgressRouter')
const TransactionRouter = require('./src/routes/TransactionRouter')
const NotifTokenRouter = require('./src/routes/NotifTokenRouter')
const path = require("path");

app.use(cors(
    {
        origin: ["http://localhost:1900"],
        method: ["GET", "POST"],
        credentials: true
    }
));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/public", express.static(path.resolve(__dirname + '/public')));

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
app.use('/api/users', UsersRouter);
app.use('/api/patners', PatnersRouter);
app.use('/api/gadgets', GadgetTypesRouter);
app.use('/api/gadget-types', GadgetTypesRouter);
app.use('/api/orders', OrdersRouter);
app.use('/api/order-status', OrderStatusRouter);
app.use('/api/problem-category', ProblemCategoryRouter);
app.use('/api/review', ReviewRouter);
app.use('/api/progress', ProgressRouter);
app.use('/api/transaction', TransactionRouter);
app.use('/api/notif-token', NotifTokenRouter);

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));

module.exports = app;