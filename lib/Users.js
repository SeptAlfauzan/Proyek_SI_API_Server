const fs = require('fs');

class Users {
    static getUser = (username) => {
        const file = fs.readFileSync('./user.json')
        const data = JSON.parse(file);
        return data.users;
        // get data from json
    }
}

module.exports = Users;