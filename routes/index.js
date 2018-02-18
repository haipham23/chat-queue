const rp = require('chat-rp');

const enqueue = require('../apis/enqueue');

const routes = [{
  method: 'get',
  path: '/api/health-check',
  func: (req, res) => rp.ok(res, 'ok')
}, {
  method: 'post',
  path: '/api/queue/new-message',
  func: (req, res) =>
    enqueue(req.body, req.headers)
      .then(() => rp.ok(res, 'ok'))
      .catch((error) => rp.error(res, error))
}]

module.exports = routes;