const express = require('express');
const router = express.Router();

const {
    handleAddDonateCuase,
    getAllCuases,
    getSigleCuase,
    AddDonarPayment,
    deleteCuase,
    updeteCuase,
} = require('../controller/donateControllers');

router.get('/cuases', getAllCuases);
router.post('/addcuase', handleAddDonateCuase);
router.get('/causedetails', getSigleCuase);
router.post('/donarpayment', AddDonarPayment);
router.delete('/deletecuase', deleteCuase);
router.put('/updatecuase', updeteCuase);

module.exports = router;