const NotifToken = require("../models/NotifTokensModel");

class ReviewController {
    static getAll = async (req, res) => {
        try {
            const data = await NotifToken.findAll();
            console.log(data);
            res.json({ data });
        } catch (err) {
            console.log(err);
        }
    }
    static addNew = async (req, res) => {
        console.log(req.body)
        try {
            const data = req.body;
            const newRecord = await NotifToken.create(data);
            res.json({ data: newRecord });
        } catch (error) {
            res.status(500).json({ message: 'insert data failed!' });
        }
    }
    static delete = async (req, res) => {
        try {
            const { username, token } = req.query;
            const deleted = await NotifToken.destroy({
                where: {
                    username,
                    token
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
            const updated = await
                NotifToken.update(data, {
                    where: {
                        id
                    }
                });
            console.log(updated)
            res.json({ data: updated });
        } catch (error) {
            console.log('error', error)
            res.status(500).json({ message: 'updated data failed!' });
        }
    }
}

module.exports = ReviewController;