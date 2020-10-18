// generate a Club model for the db
module.exports = function (sequelize, DataTypes) {
  const Book = sequelize.define("Book", {
    gr_id: {
      type: DataTypes.STRING,
      allowNull: false,
      //this comes from GoodReads
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Book.associate = function (models) {
    Book.hasMany(models.Club, {
      //   onDelete: "cascade",
    });
  };

  return Book;
};
