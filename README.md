# Nucre: Get paid via credit card, quickly.

> Much of the impetus and configuration for this app was inspired by [begriffs/lucre](https://github.com/begriffs/lucre). I used lucre for a while and for several clients, but it is __way__ too much application for such a simple task. If you run it on a single-dyno Heroku instnace, it also takes several seconds to spin up (which frustrated my clients). Putting the same funciotnality into a node.js app allows for a much smaller footprint (<5mb) and only a second or two of spin-up time. Nucre is just as powerful, but simplified and sweeter.

You should be able to accept credit cards willy-nilly. Let your friends send you some money, or charge
for impromptu consulting. Just deploy this app to Heroku, set two
variables and you're in business.

This thing doesn't ask the customer much, just for an email
and the payment amount. A message is optional. All the credit card info stays on
[Stripe](https://stripe.com) so you have nothing to worry about.

You can see it in action [here](http://nucre.herokuapp.com). Note that the demo site uses test STRIPE variables so you can input credit cards to test and view confirmation/error pages without fear of being charged. Go wild.

## Installation

1. Get a [Stripe](https://stripe.com) account and find your API keys (account info).
2. Fork and clone this repo.
3. Get a [Heroku](http://heroku.com) account.
4. Deploy this app to a new Heroku instance.
5. Set the environment variables (see below).
6. Link to it and rake in 'dat money.

For each variable below, set its value in your heroku instance by
running `$ heroku config:set VARIABLE_NAME="value"`.

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Variable Name</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Your Name</td>
      <td>PAYEE_NAME</td>
      <td>Johnny Sprockets</td>
    </tr>
    <tr>
      <td>Stripe public key</td>
      <td>STRIPE_PUBLIC_KEY</td>
      <td>pk_xyz</td>
    </tr>
    <tr>
      <td>Stripe private key</td>
      <td>STRIPE_SECRET_KEY</td>
      <td>sk_abc</td>
    </tr>
  </tbody>
</table>

## Requesting Payment?

If you are using lucre to collect an owed debt you can create a
customized link to your lucre installation with a specified email and/or
amount you intend to collect.

```
http://your-nucre-site.com/?email=generous-client@example.com
```

The above will fill-in the email address of the person from whom you are
collecting monies.

```
http://your-nucre-site.com/?email=client@example.com&amount=47.39
```

The above will fill-in your client's email address and amount to be
collected, in this case $47.39.

## Contributing

To run this project locally in development, set your local variables by running
`$ export VARIABLE_NAME="value"`

The app does not require setting up a database.

Use the stripe test credentials provided in your account to use fake
cards without issuing real charges. There are a variety of [test card
numbers](https://stripe.com/docs/testing#cards) to simulate any kind of
error or card event.

## License

Nucre was built by [J Beckman](http://bckmn.com) as free software, and may be
redistributed under the terms specified in the LICENSE file.