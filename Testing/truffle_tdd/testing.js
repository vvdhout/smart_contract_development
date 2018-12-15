// Import the contract
const {contractName} = artifacts.require('{contractName}');

contract('{contractName}', accounts => {

	// Before running the tests, initiate the contract 
	before(async function() {
		this.contract = await {contractName}.new({from: accounts[0]});
	})

	describe('describe the main section we are testing', () => {

		it('can do the following', async function() {
			// check something e.g. assertEqual
		})

	})
});