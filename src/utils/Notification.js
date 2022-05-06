const NotifToken = require('../models/NotifTokensModel');
const axios = require('axios').default;

class NotifHandler {
    static send = async (tokens, message) => {
        try {
            const url = 'https://exp.host/--/api/v2/push/send';
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Accept-encoding': 'gzip, deflate',
                    'Content-Type': 'application/json',
                },
            }
            const data = {
                to: tokens,
                sound: "default",
                body: message,
                data: {
                    someData: "goes here"
                }
            }

            const response = await axios.post(url, data, config);
            return response;
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }
}


module.exports = NotifHandler;