const configs = {
  prefix: 'chat',
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    db: process.env.REDIS_DB,
    options: {}
  },
  removeOnSuccess: false,
  removeOnFailure: false
}

module.exports = configs;