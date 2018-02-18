const QueueService = require('../services/queue.service');
const isAuth = require('../services/isAuth.service');

const enqueue = (data, headers) => {
  if (!headers || !headers['x-auth-token']) {
    return Promise.reject(new Error('AUTH_ERROR'));
  }

  const [username, token] = headers['x-auth-token'].split(' ');

  return isAuth(username, token)
    .then(() => QueueService.enqueue(data))
    .catch((e) => Promise.reject(new Error('AUTH_ERROR')));
};

module.exports = enqueue;