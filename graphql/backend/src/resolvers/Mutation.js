const users = require('./data')

module.exports = {
  createUser(parent, args) {
    const user = {
      id: users.length + 1,
      name: args.name,
      age: args.age,
    }

    users.push(user)

    return user
  }
}
