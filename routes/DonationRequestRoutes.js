const express = require('express');
const router = express.Router();

const {
  helpRequestApply,
  getAllApply,
  getSigleApply,
  updeteRequest,
  deleteApply,
} = require('../controller/donationRequestControllers');

router.get('/requestapply', getAllApply);
router.get('/myrequest', getSigleApply);
router.post('/helprequest', helpRequestApply);
router.put('/requestpay', updeteRequest);
router.delete('/deleterequest', deleteApply);

module.exports = router;
