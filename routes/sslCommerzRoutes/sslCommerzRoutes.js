const express = require("express");
const router = express.Router();
const {
    SSLCommerz_payment_init,
    SSLCommerz_payment_success,
    SSLCommerz_payment_fail,
    SSLCommerz_payment_cancel,
    SSLCommerz_payment_ipn,
    SSLCommerz_payment_validate,
    SSLCommerz_payment_orders,
} = require("../../controller/sslCommerzControllers");

router.post("/init", SSLCommerz_payment_init);
router.post("/success", SSLCommerz_payment_success);
router.post("/failure", SSLCommerz_payment_fail);
router.post("/cancel", SSLCommerz_payment_cancel);
router.post("/ipn", SSLCommerz_payment_ipn);
router.post("/validate", SSLCommerz_payment_validate);
router.get("/orders/:tran_id", SSLCommerz_payment_orders);

module.exports = router;