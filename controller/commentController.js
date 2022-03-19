const Comment = require('../schemas/CommentSchema');

const getAllComment = async (req, res, next) => {
  try {
    const { id } = req.query;
    Comment.find({ postId: id })
      .populate('commenter')
      .exec((err, comments) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, comments });
      });
  } catch (error) {
    next(error);
  }
};

const handleAddComment = async (req, res, next) => {
  try {
    const comment = new Comment(req.body);

    comment.save((err, comment) => {
      if (err) return res.json({ success: false, err });

      Comment.find({ _id: comment._id })
        .populate('commenter')
        .exec((err, result) => {
          if (err) return res.json({ success: false, err });
          return res.status(200).json({ success: true, result });
        });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleAddComment,
  getAllComment,
};
