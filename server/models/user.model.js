module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    password: {
      type: Sequelize.STRING
    }
  });
  return User;
};