const express = require('express');
const router = express.Router();

const {
  handleAddDonateCuase,
  helpRequestApply,
  getAllCuases,
  getSigleCuase,
  AddDonarPayment,
  deleteCuase,
  updeteCuase,
  getSiglePayment,
  getAllPayments,
  updetePayment,
  deletePayment,
  getAllApply,
  getSigleApply,
  updeteRequest,
  deleteApply,
} = require('../controller/donateControllers');

router.get('/cuases', getAllCuases);
router.get('/payments', getAllPayments);
router.get('/apply', getAllApply);
router.get('/causedetails', getSigleCuase);
router.get('/donarpay', getSiglePayment);
router.get('/request', getSigleApply);
router.post('/addcuase', handleAddDonateCuase);
router.post('/requestapply', helpRequestApply);
router.post('/donarpayment', AddDonarPayment);
router.put('/updatecuase', updeteCuase);
router.put('/donarpaysuccessful', updetePayment);
router.put('/requestsuccessful', updeteRequest);
router.delete('/deletecuase', deleteCuase);
router.delete('/deletepay', deletePayment);
router.delete('/deleteapply', deleteApply);

module.exports = router;
