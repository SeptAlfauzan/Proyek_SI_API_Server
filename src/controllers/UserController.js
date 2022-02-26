const User = require("../models/UsersModel");

class UserController {
    static getProducts = async (req, res) => {
        try {
            const user = await User.findAll();
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    }
}
UserController.getProducts()