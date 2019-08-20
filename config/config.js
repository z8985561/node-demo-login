module.exports = {
  port:3001,
  mongodb: 'mongodb://localhost:27017/goudan',
  session: {
    key: 'goudan',
    maxAge: 86400000
  }
}