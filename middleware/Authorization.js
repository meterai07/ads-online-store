const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            code: res.statusCode,
            message: 'Unauthorized - No token provided',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            code: res.statusCode,
            message: 'Unauthorized - Invalid token',
        });
    }
}

module.exports = authorization;