const errorhandler = (error, request, response, next) => {
  console.log(error.message);

  // handling error for finding documents with wrong ObjectId
  if (error.name === 'CastError') {
    return response.status(400).json({ error: 'malformated id' });
  }

  next(error);
};

module.exports = errorhandler;
