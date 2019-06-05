const Wish = require('./models/Wish');

class Manager {
    get(conditions = {}) {
        return Wish.find({ ...conditions })
            .sort({ created_at: 'desc' });
    }

    save(model) {
        const wish = Wish({
            date: model.date,
            title: model.title,
            is_succeeded: false,
        });

        wish.save(function (err) {
            if (err) throw err;
        });

        return wish;
    }

    delete(id) {
        return Wish.findOneAndRemove({ _id: id });
    }
}

module.exports = new Manager();