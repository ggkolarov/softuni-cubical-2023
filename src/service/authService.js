const User = require('../models/User');

exports.getUserByUsername = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password }); // the model in User.js will transform the password in has view

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username);
    const isValid = await user.validatePassword(password);

    if (!user) {
        throw 'Invalid username or password!';
    }


    if (!isValid) {
        throw 'Invalid username or password!';
    }

    return user;
}