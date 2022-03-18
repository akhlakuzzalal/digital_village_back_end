const express = require('express');
const router = express.Router();

const {
  handleAddDonateCuase,
  getAllCuases,
  getSigleCuase,
  AddDonarPayment,
  deleteCuase,
  updeteCuase,
} = require('../controller/donationCauseControllers');

router.get('/cuases', getAllCuases);
router.get('/causedetails', getSigleCuase);
router.post('/addcuase', handleAddDonateCuase);
router.post('/donarpayment', AddDonarPayment);
router.put('/updatecuase', updeteCuase);
router.delete('/deletecuase', deleteCuase);

module.exports = router;
