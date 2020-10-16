module.exports = function (sequelize, DataTypes) {
    const Club = sequelize.define("Club", {
        club_name: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2, 16],
            }
        },
        club_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        }
        });

        return Club;
}