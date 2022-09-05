import React, { Component } from 'react';
import { Container , Row, Col } from 'reactstrap'
import { Link } from "react-router-dom";
import Web3 from "web3";
import Phygital from '../../../abis/Phygital.json'
import './mint.css'

class Mint extends Component {

    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }
    
    async loadBlockchainData() {
        const web3 = window.web3
        // Load account
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
    
        const networkId = await web3.eth.net.getId()
        const networkData = Phygital.networks[networkId]
        if(networkData) {
            const abi = Phygital.abi
            const address = networkData.address
            const contract = new web3.eth.Contract(abi, address)
            this.setState({ contract })
            const totalSupply = await contract.methods.totalSupply().call()
            this.setState({ totalSupply })
            // Load NFTs
            for (var i = 1; i <= totalSupply; i++) {
                const part = await contract.methods.parts(i - 1).call()
                this.setState({
                  parts: [...this.state.parts, part]
                })
            }
        } else {
            window.alert('Smart contract not deployed to detected network.')
        }
    }

    mint = (part) => {
        this.state.contract.methods.mint(part).send({ from: this.state.account })
        .once('receipt', (receipt) => {
          this.setState({
            parts: [...this.state.parts, part]
          })
        })
        console.log(part)
    }

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            contract: null,
            totalSupply: 0,
            parts: []
        }
    }

    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/home' className="navbar-brand">Phygital</Link>
                <span className="navbar-text" id="account">
                    {this.state.account}
                </span>
            </nav>
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <h2 className="mb-4 text-light">Preview Item</h2>
                    </Col>
                    <Col lg='8' md='7' sm='6'>
                        <h2 className="mb-4 text-light">Issue Part</h2>
                        <div className="create__item">
                            <form onSubmit={(event) => {
                                event.preventDefault()
                                const part = this.part.value
                                this.mint(part)
                                }}>
                                <div className="form__input">
                                    <label htmlFor="">Upload File</label>
                                    <input type="file" className="upload__input" />
                                </div>
                                <div className="form__input">
                                    <label htmlFor="">Part Name</label>
                                    <input
                                        type='text'
                                        className='form-control mb-1'
                                        placeholder='e.g. MyPart'
                                        ref={(input) => { this.part = input }}
                                    />
                                </div>
                                <div className="form__input">
                                    <label htmlFor="">Physical Supply</label>
                                    <input
                                        type='int'
                                        className='form-control mb-1'
                                        placeholder='e.g. 1'
                                    />
                                </div>
                                <div className="form__submit">
                                    <input
                                        type='submit'
                                        className='btn btn-block btn-primary'
                                        value='MINT'
                                    />
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { this.state.parts.map((part, key) => {
                                    return(
                                        <div key={key} className="col-md-3 mb-3">
                                            <div>{part}</div>
                                        </div>
                                    )
                        })}
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}
export default Mint