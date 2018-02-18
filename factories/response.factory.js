const logger = require('winston');

const ResponseFactory = {
  ok: (res, result) => res.status(200).json(result),
  error: (res, error) => {
    logger.error(error);

    if ([
      'AUTH_ERROR'
    ].indexOf(error.message) !== -1) {
      return res.status(400).json(error.message);
    }

    return res.status(500).json('SERVER_ERROR');
  }
};

module.exports = ResponseFactory;