const Manager = require('../Manager');

module.exports = {
    index(req, res) {
        Manager.update(req.params.id, req.body)
            .then((response) => {
                res.json(response);
            });
    }
};