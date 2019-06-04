const Manager = require('../Manager');

module.exports = {
    index(req, res) {
        return Manager.get().then((response) => {
            res.json(response);
        });
    }
};