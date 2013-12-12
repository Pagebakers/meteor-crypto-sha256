Tinytest.add('MeteorCryptoSHA256 - Simple Test', function (test) {
  test.equal(
    CryptoJS.SHA256("Message").toString(),
    '2f77668a9dfbf8d5848b9eeb4a7145ca94c6ed9236e4a773f6dcafa5132b2f91',
    'SHA256 digest'
  );
/* TODO run only if crypto-hmac is installed
    test.equal(
    CryptoJS.HmacSHA256("Message", "Secret Passphrase").toString(),
    '32c647602ab4c4c7543e9c50ae25e567c3354e1532b11649ce308e6e2568d205',
    'SHA256 HMAC of a string, given a passphrase'

  );
*/
});
