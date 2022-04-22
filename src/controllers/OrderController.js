const Order = require("../models/OrdersModel");
const OrderStatus = require("../models/OrderStatusModel");
const User = require('../models/UsersModel');
const Patner = require('../models/PatnersModel');
const sequelize = require('sequelize');

class OrderController {
    static getAll = async (req, res) => {
        try {

            OrderStatus.hasMany(Order, { foreignKey: 'order_status_id' });
            Order.belongsTo(OrderStatus, { foreignKey: 'order_status_id' });

            const order = await Order.findAll({
                include: [
                    {
                        model: OrderStatus,
                        attributes: [
                            'name',
                        ]
                    }
                ]
            });
            console.log(order);
            res.json({ data: order });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
    static getNeedToProcess = async (req, res) => {
        console.log(req.params)
        try {
            User.hasMany(Order, { foreignKey: 'user_id' });
            Order.belongsTo(User, { foreignKey: 'user_id' });

            OrderStatus.hasMany(Order, { foreignKey: 'order_status_id' });
            Order.belongsTo(OrderStatus, { foreignKey: 'order_status_id' });

            const order = await Order.findAll({
                where: {
                    progress_id: {
                        [sequelize.Op.not]: [5]
                    },
                    patner_id: req.params.id
                },
                include: [
                    {
                        model: User,
                        attributes: [
                            'name',
                            'username',
                            'phone',
                            'email',
                            'address',
                        ]
                    },
                    {
                        model: OrderStatus,
                        attributes: [
                            'name',
                        ]
                    }
                ]
            });
            console.log(order);
            res.json({ data: order });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
    static getHistory = async (req, res) => {
        console.log(req.params)
        try {
            User.hasMany(Order, { foreignKey: 'user_id' });
            Order.belongsTo(User, { foreignKey: 'user_id' });

            Patner.hasMany(Order, { foreignKey: 'patner_id' });
            Order.belongsTo(Patner, { foreignKey: 'patner_id' });

            OrderStatus.hasMany(Order, { foreignKey: 'order_status_id' });
            Order.belongsTo(OrderStatus, { foreignKey: 'order_status_id' });

            const order = await Order.findAll({
                include: [{
                    model: User,
                    attributes: [
                        'name',
                        'username',
                        'email',
                        'address',
                    ],
                    where: {
                        id: req.params.id
                    },
                }, {
                    model: Patner,
                    attributes: [
                        'name',
                        'address',
                    ],
                },
                {
                    model: OrderStatus,
                    attributes: [
                        'name',
                    ]
                }]
            });
            console.log(order);
            res.json({ data: order });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
    static updateProgress = async (req, res) => {

        try {

            const { id } = req.params;

            const order = await Order.update(data, {
                where: {
                    id
                }
            });

            console.log(order);
            res.json({ data: order });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
    static getNotFinished = async (req, res) => {
        console.log(req.params)
        try {
            const order = await Order.findAll({
                where: {
                    progress_id: {
                        [sequelize.Op.not]: [1, 5]
                    },
                    confirmed: true,
                    patner_id: req.params.id
                }
            });
            console.log(order);
            res.json({ data: order });
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
    static addNew = async (req, res) => {
        console.log('request', req.body)
        try {
            const data = req.body;
            const newRecord = await Order.create(data);
            res.json({ data: newRecord });
        } catch (error) {
            res.status(500).json({ message: `insert data failed!, ${error.message}` });
        }
    }
    static delete = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Order.destroy({
                where: {
                    id
                }
            });
            res.json({ data: deleted });
        } catch (error) {
            res.status(500).json({ message: 'delete data failed!' });
        }
    }
    static update = async (req, res) => {
        try {
            const { id } = req.query;
            const data = req.body;
            const updated = await Order.update(data, {
                where: {
                    id
                }
            });
            res.json({ data: data });
        } catch (error) {
            res.status(500).json({ message: 'updated data failed!' });
        }
    }
}

module.exports = OrderController;