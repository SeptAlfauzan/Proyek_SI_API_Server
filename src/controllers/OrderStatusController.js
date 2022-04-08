const OrderStatus = require("../models/OrderStatusModel");

class OrderStatusController {
    static getAll = async (req, res) => {
        try {
            const orderStatus = await OrderStatus.findAll();
            console.log(orderStatus);
            res.json({ data: orderStatus });
        } catch (err) {
            console.log(err);
        }
    }
    static addNew = async (req, res) => {
        console.log(req.body)
        try {
            const data = req.body;
            const newRecord = await OrderStatus.create(data);
            res.json({ data: newRecord });
        } catch (error) {
            res.status(500).json({ message: 'insert data failed!' });
        }
    }
    static delete = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await OrderStatus.destroy({
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
            console.log(id);
            const updated = await OrderStatus.update(data, {
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

module.exports = OrderStatusController;