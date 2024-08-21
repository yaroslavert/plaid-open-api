const { DefaultApi } = require('./plaid-node-client');

const apiClient = new DefaultApi();

apiClient.searchInstitutions({
  client_id: 'your_client_id',
  secret: 'your_sandbox_secret',
  query: 'Chase',
  products: ['auth', 'balance', 'identity', 'transactions', 'investments'],
  country_codes: ["US"]
})
  .then(function (resp) {
    console.log(resp.institutions);
  })
  .catch(function (error) {
    console.log(error);
  });
