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

    update(id, payload) {
        return Wish.findOneAndUpdate({ _id: id }, { $set: payload }, { new: true });
    }
}

module.exports = new Manager();