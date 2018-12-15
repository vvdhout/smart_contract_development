// Provide Web3 framework
<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js"></script>
// Provide jQuery framework
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
// Connect to Ethereum Network/Blockchain
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
  console.log('We already have a provider.');
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 
  console.log('We have set a new provider on Ganache chain at localhost:8454');
}

// Set the default account
web3.eth.defaultAccount = web3.eth.accounts[0];
console.log('Default account: ' + web3.eth.defaultAccount);

// Provide the ABI to interact with the smart contract
const {ContractName}Contract = web3.eth.contract({ABI HERE});

// Connect to the smart contract by providing its ethereum address
const {ContractName} = {ContractName}Contract.at('{CONTRACT ADDRESS}');
</script>