const Progress = require("../models/ProgressModel");

class ProgressController {
    static getAll = async (req, res) => {
        try {
            const order = await Progress.findAll();
            console.log(order);
            res.json({ data: order });
        } catch (err) {
            console.log(err);
        }
    }
    static addNew = async (req, res) => {
        console.log(req.body)
        try {
            const data = req.body;
            const newRecord = await Progress.create(data);
            res.json({ data: newRecord });
        } catch (error) {
            res.status(500).json({ message: 'insert data failed!' });
        }
    }
    static delete = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Progress.destroy({
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
            const updated = await Progress.update(data, {
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

module.exports = ProgressController;