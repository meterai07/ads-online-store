const models = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await models.Users.findAll();
        return res.status(200).json({
            code: res.statusCode,
            message: 'Successfully get all users',
            data: users,
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllUsers };