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
    static register = async (req, res) => {
        const photo = req.file.path;
        const { name, username, password, phone, address, lat, lng } = req.body;
        try {
            if (!photo) {
                res.status(400).send({
                    status: false,
                    data: "No File is selected.",
                });
            }
            // res.status(200).json({ message: photo });
            console.log(photo)
            const patner = await Patner.create({
                name,
                photo,
                username,
                password,
                phone,
                address,
                lat,
                lng
            });
            res.status(200).json({ message: `success create new data, ${patner}` });
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