const errorControler = (error, request, response, next) => {
  // handling error (needs more update)
  if (error.name === 'CastError') {
    return response.status(400).json({ error: 'malformated id' });
  } else {
    response.status(400).json({ error: 'something went wrong' });
  }

  next(error);
};

module.exports = errorControler;
