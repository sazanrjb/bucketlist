const Manager = require('../Manager');

module.exports = {
    index(req, res) {
        res.json(Manager.save(req.body)); 
    }
};