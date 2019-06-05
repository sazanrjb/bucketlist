const Manager = require('../Manager');

module.exports = {
    index(req, res) {
        Manager.delete(req.params.id)
        .then((wish) => {
            res.json(wish);
        })
        .catch((error) => {
            console.log(error);
        })
    }
};