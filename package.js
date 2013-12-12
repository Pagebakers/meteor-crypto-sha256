Package.describe({
  summary: "SHA256 algo for CryptoJS, standard secure crypto algorithms"
});

Package.on_use(function (api) {
  api.use('crypto-base',    ['client', 'server']);
  api.imply('crypto-base',  ['client', 'server']);
  api.add_files(['sha256.js'], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['crypto-base', 'crypto-sha256', 'tinytest']);

  api.add_files('crypto-sha256_tests.js', ['client', 'server']);
});
