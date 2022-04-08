const Gadget = require("../models/GadgetModel");

class GadgetController {
    static getAll = async (req, res) => {
        try {
            const gadget = await Gadget.findAll();
            console.log(gadget);
            res.json({ data: gadget });
        } catch (err) {
            console.log(err);
        }
    }
    static addNew = async (req, res) => {
        console.log(req.body)
        try {
            const data = req.body;
            const newRecord = await Gadget.create(data);
            res.json({ data: newRecord });
        } catch (error) {
            res.status(500).json({ message: 'insert data failed!' });
        }
    }
    static delete = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Gadget.destroy({
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
            const updated = await Gadget.update(data, {
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

module.exports = GadgetController;