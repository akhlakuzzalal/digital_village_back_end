const express = require('express');
const router = express.Router();

const {
  handleAddDonateCuase,
  getAllCuases,
  deleteCuase,
  updateACause,
  takeDonations,
  getAllDonarInfo,
  updateDonarPaymentStatus,
  getSpecificUserDonationInfo,
} = require('../controller/donationCauseControllers');
const upload = require('../middlewares/upload');

router.get('/all', getAllCuases);
router.get('/specificUserDonationInfo', getSpecificUserDonationInfo);
router.post('/add', upload.single('file'), handleAddDonateCuase);
router.get('/allDonarInfo', getAllDonarInfo);
router.put('/update', upload.single('file'), updateACause);
router.put('/take', takeDonations);
router.put('/updateDonarPaymentStatus', updateDonarPaymentStatus);
router.delete('/delete', deleteCuase);

module.exports = router;
