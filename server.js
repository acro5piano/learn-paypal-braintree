const app = require('express')()
const braintree = require('braintree')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}))

const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: '2b2wrfcd7n749pg6',
  publicKey: '8wj8v2h8j66t7fxd',
  privateKey: '00c4f782ebf2343d934c7ad8d8a470f6',
})

app.get('/client_token', (req, res) => {
  gateway.clientToken.generate({}, (err, response) => {
    res.send(response.clientToken)
  })
})

app.post('/checkout', (req, res) => {
  const nonceFromTheClient = req.body.payment_method_nonce
  console.log(req.body)
  gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, (err, result) => {
    if (err) {
      console.error(err)
      res.send('error')
      return
    }

    res.send('success')
  })
})

app.listen(3000)
