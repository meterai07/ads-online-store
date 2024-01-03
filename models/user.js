module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        role: {
            type: DataTypes.ENUM,
            values: ['seller', 'customer'],
        }
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
}