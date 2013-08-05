var api_key = process.env.STRIPE_SECRET_KEY,
  stripe = require('stripe')(api_key),
  api_public = process.env.STRIPE_PUBLIC_KEY;

module.exports = function (app) {

    app.get('/', function(req, res) {
      res.render('index', { title: process.env.PAYEE_NAME+' accepts credit cards!', 
                            publicKey: api_public,
                            amount: req.query.amount,
                            email: req.query.email,
                            message: req.query.message,
                            info: req.flash('info'), 
                            error: req.flash('error') });
    });

    app.post('/thanks', function(req, res) {
      stripe.charges.create(
        { 
          amount: parseInt(parseFloat(req.body.amount)*100),
          currency: "usd",
          card: req.body.stripeToken,
          description: req.body.email+' '+req.body.message
        },
        function(err, charge) {
          if (err) {
             console.log(err.message);
             req.flash('error', err.message);
             res.redirect('/error');
          }
          if (!err) {
            console.log("charge id", charge.id);
            req.flash('info', 'Success!');
            res.render('thanks', {  title: 'Thank you!', 
                                    name: process.env.PAYEE_NAME,
                                    charge: charge,
                                    paidAmount: req.body.amount, 
                                    paidMessage: req.body.message, 
                                    info: req.flash('info'), 
                                    error: req.flash('error') });
          }
        }
      );
    });

    app.get('/error', function(req, res) {
      res.render('error', { title: 'Oh Noes!', 
                            info: req.flash('info'), 
                            error: req.flash('error') });
    });
};