const SSLCommerz = require("ssl-commerz-node");
// const PaymentSession = SSLCommerz.PaymentSession;
const shortid = require("shortid");
const Order = require("../schemas/orderSchema/Order");
require("dotenv").config();
const SSLCommerzPayment = require('sslcommerz')
const { v4: uuidv4 } = require('uuid');
// For live payment set first parameter `false` and for sandbox set it `true`
// const payment = new PaymentSession(
//   true,
//   process.env.SSLCOMMERZ_STORE_ID,
//   process.env.SSLCOMMERZ_STORE_PASSWORD
// );

const SSLCommerz_payment_init = async (req, res) => {
  console.log(req.body, "hitting init");
    const productInfo = {
        total_amount: req.body.total_amount,
        currency: 'BDT',
        tran_id: uuidv4(),
        success_url: 'http://localhost:5000/sslpayment/success',
        fail_url: 'http://localhost:5000/sslpayment/failure',
        cancel_url: 'http://localhost:5000/sslpayment/cancel',
        ipn_url: 'http://localhost:5000/sslpayment/ipn',
        paymentStatus: 'pending',
        shipping_method: 'Courier',
        product_name: req.body.product_name,
        product_category: 'Electronic',
        product_profile: req.body.product_profile,
        product_image: req.body.product_image,
        cus_name: req.body.cus_name,
        cus_email: req.body.cus_email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: req.body.cus_name,
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D'
    };

    // Insert order info
    const result = await Order.insertOne(productInfo);

    const sslcommer = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false) //true for live default false for sandbox
    sslcommer.init(productInfo).then(data => {
        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#returned-parameters
        const info = { ...productInfo, ...data }
        // console.log(info.GatewayPageURL);
        if (info.GatewayPageURL) {
            res.json(info.GatewayPageURL)
        }
        else {
            return res.status(400).json({
                message: "SSL session was not successful"
            })
        }

    });
};


const SSLCommerz_payment_success = async (req, res) => {

  const result = await Order.updateOne({ tran_id: req.body.tran_id }, {
    $set: {
        val_id: req.body.val_id
    }
})
res.status(200).redirect(`http://localhost:3000/sslpayment/success/${req.body.tran_id}`)

};

const SSLCommerz_payment_fail = async (req, res) => {
  const result = await Order.deleteOne({ tran_id: req.body.tran_id })

        res.status(400).redirect(`http://localhost:3000`)
};

const SSLCommerz_payment_cancel = async (req, res) => {
  const result = await Order.deleteOne({ tran_id: req.body.tran_id })

        res.status(200).redirect(`http://localhost:3000`)
};
const SSLCommerz_payment_ipn = async (req, res) => {
  console.log(req.body)
  res.send(req.body);
};
const SSLCommerz_payment_validate = async (req, res) => {
  const result = await Order.findOne({
    tran_id: req.body.tran_id
})

if (result.val_id === req.body.val_id) {
    const update = await Order.updateOne({ tran_id: req.body.tran_id }, {
        $set: {
            paymentStatus: 'paymentComplete'
        }
    })
    console.log(update);
    res.send(update.modifiedCount > 0)

}
else {
    res.send("payment cencel and  detected")
}

};

const SSLCommerz_payment_orders = async (req, res) => {
  const id = req.params.tran_id;
        const result = await Order.findOne({ tran_id: id })
        res.json(result)
};

// exports all module

module.exports = {
      SSLCommerz_payment_init,
      SSLCommerz_payment_success,
      SSLCommerz_payment_fail,
      SSLCommerz_payment_cancel,
      SSLCommerz_payment_ipn,
      SSLCommerz_payment_validate,
      SSLCommerz_payment_orders,
};