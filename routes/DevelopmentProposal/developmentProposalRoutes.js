const express = require('express');
const {
  getAllDevelopmentProposal,
  addNewDevelopmentProposal,
  removeDevelopmentProposal,
  updateDevelopmentProposal,
  updateDevelopmentProposalStatus,
} = require('../../controller/DevelopmentProposal/developmentProposalController');
const upload = require('../../middlewares/upload');

const router = express.Router();

router.get('/all', getAllDevelopmentProposal);
router.post('/add', upload.single('file'), addNewDevelopmentProposal);
router.put('/update', upload.single('file'), updateDevelopmentProposal);
router.put('/updateStatus', updateDevelopmentProposalStatus);
router.delete('/remove', removeDevelopmentProposal);

module.exports = router;
