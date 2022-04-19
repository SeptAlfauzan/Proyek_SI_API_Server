const Order = require("../models/OrdersModel");
const sequelize = require('sequelize');

class OrderController {
    static getAll = async (req, res) => {
        try {
            const order = await Order.findAll();
            console.log(order);
            res.json({ data: order });
        } catch (err) {
            console.log(err);
        }
    }
    static getNotFinished = async (req, res) => {
        console.log(req.params)
        try {
            const order = await Order.findAll({
                where: {
                    progress_id: {
                        [sequelize.Op.not]: [0, 2]
                    },
                    confirmed: true,
                    patner_id: req.params.id
                }
            });
            console.log(order);
            res.json({ data: order });
        } catch (err) {
            console.log(err);
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
            const { id } = req.params;
            const data = req.body;
            const updated = await Order.update(data, {
                where: {
                    id
                }
            });
            res.json({ data: updated });
        } catch (error) {
            res.status(500).json({ message: 'updated data failed!' });
        }
    }
}

module.exports = OrderController;