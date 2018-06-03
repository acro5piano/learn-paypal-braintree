# learn-paypal-braintree

This repository shows how braintree SDK + express.js works.

# Why

Brain tree has official tutorial (of cource) but it contains a lot of implicit dependency. 
For example, `app` is for express instance, but JavaScript beginners has luck of the background, so hard to implement the tutorial.

https://developers.braintreepayments.com/start/hello-server/node

This is official example repository using express.js, but it has a lot of things such as templates, stylesheets, etc.

https://github.com/braintree/braintree_express_example

Beginner should start the minimam start point. So I created this repository.

# Setup

Install Node.js > 8 and install Yarn.

Then run:

```
git clone https://github.com/acro5piano/learn-paypal-braintree.git
cd learn-paypal-braintree
yarn install
yarn dev
```

Optional: Edit `server.js` and fill out your SDK tokens.

Then open `index.html` and you can see the braintree screen.

![image.png](https://qiita-image-store.s3.amazonaws.com/0/103885/59161f38-e895-fc35-4175-0b6b5d97728f.png)
