const QueueService = require('../services/queue.service');

const enqueue = data => QueueService.enqueue(data);

module.exports = enqueue;