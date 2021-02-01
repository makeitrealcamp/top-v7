const users = require('./data')

module.exports = {
  users() {
    return users
  },
  user(parent, args, ctx) {
    const user = users.filter(user => user.id === +args.id)[0]
    return user
  }
}
