// generate a Club model for the db
module.exports = function (sequelize, DataTypes) {
  const Book = sequelize.define("Book", {
    goodReads: {
      type: DataTypes.STRING,
      allowNull: false,
      //this comes from GoodReads
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
  });

  //   Book.associate = function (models) {
  //     Book.hasMany(models.Club, {
  //       //   onDelete: "cascade",
  //     });
  //   };

  return Book;
};
