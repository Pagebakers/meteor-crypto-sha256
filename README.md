[SHA256](https://en.wikipedia.org/wiki/SHA-256) algorithm from [CryptoJS](https://code.google.com/p/crypto-js/).

Install
-------

Inside your project folder run
```
$ mrt add crypto-sha256
```
The following method under the `CryptoJS` namespace will now be available
on **both the client and server**:

* `CryptoJS.SHA256(message)`

If [crypto-hmac](https://atmosphere.meteor.com/package/crypto-hmac) is also
installed, the following method will also be available:

* `CryptoJS.HmacSHA256(message, key)`


Usage
-----
SHA256 digest of a string:
```javascript
CryptoJS.SHA256("Message").toString()
// "2f77668a9dfbf8d5848b9eeb4a7145ca94c6ed9236e4a773f6dcafa5132b2f91"
```

SHA256 HMAC of a string, given a passphrase:
```javascript
CryptoJS.HmacSHA256("Message", "Secret Passphrase").toString()
// "32c647602ab4c4c7543e9c50ae25e567c3354e1532b11649ce308e6e2568d205"
```

See also
--------
The CryptoJS project lives at <https://code.google.com/p/crypto-js/>
