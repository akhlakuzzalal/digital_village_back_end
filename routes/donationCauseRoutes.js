const express = require('express');
const router = express.Router();

const {
  handleAddDonateCuase,
  getAllCuases,
  AddDonarPayment,
  deleteCuase,
  updateACause,
  takeDonations,
} = require('../controller/donationCauseControllers');
const upload = require('../middlewares/upload');

router.get('/all', getAllCuases);
router.post('/add', upload.single('file'), handleAddDonateCuase);
router.post('/donarpayment', AddDonarPayment);
router.put('/update', upload.single('file'), updateACause);
router.put('/take', takeDonations);
router.delete('/delete', deleteCuase);

module.exports = router;
