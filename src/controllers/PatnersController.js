const Patner = require("../models/PatnersModel");

class PatnersController {
    static getAll = async (req, res) => {
        try {
            const patner = await Patner.findAll();
            console.log(patner);
            res.json({ data: patner });
        } catch (err) {
            console.log(err);
        }
    }
    static getPatners = async (req, res) => {
        const { email, username } = req.params;
        console.log(email, username);
        try {
            const patner = await Patner.findOne({ where: { email, username } });
            res.status(200).json({ patner });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static orders = async (req, res) => {
        const { username } = req.params;
    }
    static setStatus = async (req, res) => {
        return null;
    }
}

module.exports = PatnersController;