const errorhandler = (error, request, response, next) => {
  console.log(error.message);

  // handling error (needs more update)
  if (error.name === 'CastError') {
    return response.status(400).json({ error: 'malformated id' });
  } else {
    response.status(400).json({ error: 'something went wrong' });
  }

  next(error);
};

module.exports = errorhandler;
