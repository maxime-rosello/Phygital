const Phygital = artifacts.require("Phygital");

contract("Phygital", (accounts) => {
    let contract

    before(async () => {
        contract = await Phygital.deployed();
    });

    describe('deployment', async () => {
        it('deploys succesfully', async () => {
            contract = await Phygital.deployed()
            const address = contract.address
            assert.notEqual(address,'')
            assert.notEqual(address,'0x0')
            assert.notEqual(address,'null')
            assert.notEqual(address,'undefined')
        })
        it('has a name', async () => {
            const name = await contract.name()
            assert.equal(name, 'Phygital')
        })

        it('has a symbol', async () => {
            const symbol = await contract.symbol()
            assert.equal(symbol, 'PHYG')
        })
    })

    describe('minting', async () => {
        it('creates a new token', async () => {
            const result = await contract.mint('PART1')
            const totalSupply = await contract.totalSupply()
            assert.equal(totalSupply, 1)
            console.log(result)
        })
    })
});