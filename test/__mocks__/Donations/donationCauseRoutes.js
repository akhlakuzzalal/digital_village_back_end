const express = require('express');
const router = express.Router();

const {
  handleAddDonateCuase,
  getAllCuases,
  AddDonarPayment,
  deleteCuase,
  updateACause,
  takeDonations,
} = require('./donationCauseControllers');


router.get('/all', getAllCuases);
router.post('/add', handleAddDonateCuase);
router.post('/donarpayment', AddDonarPayment);
router.put('/update', updateACause);
router.put('/take', takeDonations);
router.delete('/delete', deleteCuase);

module.exports = router;
