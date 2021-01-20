module.exports = (sequelize, DataTypes) => {
  const userSchema = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    email: {
      type: DataTypes.STRING,
      noEmpty: true,
      isEmail: true,
    }
  }

  const userOps = {
    timestamps: true,
    tableName: 'users',
  }

  const User = sequelize.define('User', userSchema, userOps)

  User.associate = (db) => {
    db.User.hasMany(db.Recipe)
    // db.User.belongsToMany(db.Recipe, { through: 'UserRecipe' })
  }

  return User
}
