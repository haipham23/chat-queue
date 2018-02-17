const Queue = require('bee-queue');
const axios = require('axios');
const logger = require('winston');

const config = require('../config');

const queue = new Queue('messages', config);

queue.process((job, done) => {
  return axios
    .post(process.env.MESSAGE_API, job.data)
    .then((data) => {
      logger.info('process success');

      done();
    })
    .catch((error) => {
      logger.error('process failed ', error);

      done();
    });
});

const QueueService = {
  enqueue: (data) => {
    return queue
      .createJob(data)
      .timeout(1000)
      .retries(2)
      .save();
  }
};

module.exports = QueueService;