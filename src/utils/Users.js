const fs = require('fs');
const { join } = require('path');
class Users {
    static getUser = (username) => {
        const file = fs.readFileSync(join(__dirname, '../../', 'user.json'), 'utf8');
        const data = JSON.parse(file);
        return data.users;
        // get data from json
    }
}

module.exports = Users;