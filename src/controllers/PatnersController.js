const Order = require("../models/OrdersModel");
const Patner = require("../models/PatnersModel");

class PatnersController {
    static getAll = async (req, res) => {
        try {
            // await Order.hasMany(Patner, { foreignKey: 'id' })
            // await Patner.belongsTo(Order, { foreignKey: 'patner_id' })
            const patner = await Patner.findAll();
            // const patnerWithOrder = await Patner.findAll({ include: Order });
            // console.log(patnerWithOrder);
            res.json({ data: patner });
        } catch (err) {
            console.log(err);
        }
    }
    static getOne = async (req, res) => {
        try {
            const { username } = req.params;
            const patner = await Patner.findOne({ where: { username } });
            res.json({ data: patner });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: error.message });
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
        const rawUrl = req.file.path;
        const photo = rawUrl.substring(rawUrl.indexOf('public'));

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