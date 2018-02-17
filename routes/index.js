const enqueue = require('../apis/enqueue');
const ResponseFactory = require('../factories/response.factory');

const routes = [{
  method: 'get',
  path: '/api/health-check',
  func: (req, res) => ResponseFactory.ok(res, 'ok')
}, {
  method: 'post',
  path: '/api/queue/new-message',
  func: (req, res) =>
    enqueue(req.body)
      .then(() => ResponseFactory.ok(res, 'ok'))
      .catch((error) => ResponseFactory.error(res, error))
}]

module.exports = routes;