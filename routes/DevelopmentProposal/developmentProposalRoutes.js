const express = require('express');
const {
  getAllDevelopmentProposal,
  addNewDevelopmentProposal,
  removeDevelopmentProposal,
} = require('../../controller/DevelopmentProposal/developmentProposalController');
const upload = require('../../middlewares/upload');

const router = express.Router();

router.get('/all', getAllDevelopmentProposal);
router.post('/add', upload.single('file'), addNewDevelopmentProposal);
router.delete('/remove', removeDevelopmentProposal);

module.exports = router;
