const GadgetTypes = require("../models/GadgetTypeModel");

class GadgetTypesController {
    static getAll = async (req, res) => {
        try {
            const gadgetTypes = await GadgetTypes.findAll();
            res.json({ data: gadgetTypes });
        } catch (err) {
            console.log(err);
        }
    }
    static addNew = async (req, res) => {
        console.log(req.body)
        try {
            const data = req.body;
            const newRecord = await GadgetTypes.create({ name: data.name });
            res.json({ data: newRecord });
        } catch (error) {
            res.status(500).json({ message: 'insert data failed!' });
        }
    }
    static delete = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await GadgetTypes.destroy({
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
            const updated = await GadgetTypes.update(data, {
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

module.exports = GadgetTypesController;