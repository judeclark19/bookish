// generate a Club model for the db
module.exports = function (sequelize, DataTypes) {
  const Club = sequelize.define("Club", {
    club_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    // BookId: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: "Books",
    //     key: "goodReads",
    //   },
    // },
  });

  //   Club.associate = function (models) {
  //     // Associating user with clubs
  //     // When a user is deleted, also delete any associated clubs
  //     // TODO: I don't think we need to cascade delete these
  //     Club.hasMany(models.User, {
  //       // onDelete: "cascade",
  //     });
  //   };

  return Club;
};
