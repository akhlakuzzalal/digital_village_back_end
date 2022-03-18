const express = require('express');
const router = express.Router();

const {
  handleAddDonateCuase,
  getAllCuases,
  AddDonarPayment,
  deleteCuase,
  updeteCuase,
} = require('../controller/donationCauseControllers');

router.get('/all', getAllCuases);
router.post('/add', handleAddDonateCuase);
router.post('/donarpayment', AddDonarPayment);
router.put('/update', updeteCuase);
router.delete('/delete', deleteCuase);

module.exports = router;
