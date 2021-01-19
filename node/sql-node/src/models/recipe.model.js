module.exports = (sequelize, DataTypes) => {
  const recipeSchema = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING,
      noEmpty: true,
    },
    description: {
      type: DataTypes.STRING,
    }
  }

  const recipeOps = {
    timestamps: true,
    tableName: 'recipes',
  }

  const Recipe = sequelize.define('Recipe', recipeSchema, recipeOps)

  return Recipe
}
