const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await models.Users.findOne({
            where: {
                email,
            },
        });

        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (isPasswordMatch) {
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    role: user.role,
                }, process.env.JWT_SECRET, {
                    expiresIn: '1800s', // 30 minutes
                });

                return res.status(200).json({
                    code: res.statusCode,
                    message: 'Successfully login',
                    data: {
                        token,
                    },
                });
            }
        }
        return res.status(401).json({
            code: res.statusCode,
            message: 'Wrong email or password',
        });
    } catch (err) {
        console.log(err);
    }
}

const register = async (req, res) => {
    try {
        const alreadyExist = await models.Users.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (alreadyExist) {
            return res.status(409).json({
                code: res.statusCode,
                message: 'Email already exist',
            });
        }

        const { name, phone, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await models.Users.create({
            name,
            phone,
            email,
            password: hashedPassword,
            role,
        });
        return res.status(201).json({
            code: res.statusCode,
            message: 'Successfully register user',
            data: user,
        });
    } catch (err) {
        console.log(err);
    }
}

const getUserDetails = async (req, res) => {
    try {
        const user = await models.Users.findByPk(req.user.id);
        return res.status(200).json({
            code: res.statusCode,
            message: 'Successfully get user data',
            data: user,
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getUserDetails, login, register };