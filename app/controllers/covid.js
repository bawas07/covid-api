const { response } = require('../helpers');

module.exports = {
    getData: (req, res) => {
        return response(null, {message: 'Hello Here'}, res);
    }
}