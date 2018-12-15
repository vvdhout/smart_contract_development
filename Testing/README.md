# Testing

Testing is maybe the most important aspect of smart contract programming. Giving the highly static and immutable nature of smart contracts as well as the possibly large amounts of value that it will handle, security it of utmost importance. Testing can be done in a variety of different manners and levels, and should get priority at all cost. Smart contracts can be deployed and run on different Ethereum networks before moving it to the mainnet and should be run on these quite substantially before doing so.

#### Testing environments
- Javascript Virtual Machine (via Remix) --- Allows for deployment and function testing right in the development environment of Remix.
- Ganache (in Truffle) --- Allows us to set up a local ethereum blockchain (localhost:8454) that we can deploy and test smart contracts on (we can deploy from within truffle or via Remix with MetaMask)
- Rinkeby or Ropsten (via Truffle or MetaMask) -- Allows for deployment on the Rinkeby/Ropsten Ethereum Test Network and run a smart contract as realistic as possible.

When testing we are obviously concerned with whether our functions operate the way we want them to (very convenient to use TDD here in Truffle) but also whether it is possible for a malicious actor to attack our contracts. Once we get to a point where we are convinced all operations work as desired and the biggest attacker threats have been addressed, it is a very good idea to run some bounty competitions and allow external hackers to probe the contracts. After all of this, it is time to deploy to the mainnet.