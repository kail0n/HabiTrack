const User = require('../models/User');

async function index(req, res) {
    try {
        const user = await User.all;
        res.json(user);
    } catch (err) {
        res.status(500).send(err);
    };
}

async function show(req, res) {
    try {
        const user = await User.findById(req.params.id);
        const habits = await user.habits;
        res.json({ ...user, habits });
    } catch (err) {
        res.status(500).send(err);
    };
}

module.exports = { index, show }