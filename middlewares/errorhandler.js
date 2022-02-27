const multer = require('multer');

const errorhandler = (error, request, response, next) => {
  // handling error (needs more update)
  if (error.name === 'CastError')
    return response.status(400).json({ error: 'malformated id' });
  if (error instanceof multer.MulterError)
    return response
      .status(400)
      .json({ error: 'A Multer error occurred when uploading.' });
  response.status(400).json({ error: 'something went wrong' });

  next(error);
};

module.exports = errorhandler;
