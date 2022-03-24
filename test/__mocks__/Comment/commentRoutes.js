const {
    getAllComment,
    handleAddComment
  } = require('./commentController');
  
router.get('/all', getAllComment);
router.post('/add', handleAddComment);

module.exports = router;
