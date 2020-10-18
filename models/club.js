// generate a Club model for the db
module.exports = function (sequelize, DataTypes) {
  const Club = sequelize.define("Club", {
    club_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 35],
      },
    },

    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 35],
      },
    },
    // userId: DataTypes.Integer
  });

  Club.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Club.hasMany(models.User, {
      onDelete: "cascade",
    });
  };

  return Club;
};

// // generate book model for the db

// module.exports = function (sequelize, DataTypes) {
//     const Book = sequelize.define("Book", {
//         book_names: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 len: [2, 35],
//             }
//         },

//         book_id: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 len: [2, 35],
//             }
//         }
//         // userId: DataTypes.Integer
