
# New Phygital NFT Standard

This project aims at developing a new ERC-721 extension for Phygital NFTs.

It consits in a simple React app used for Minting NFTs. All contracts standards used in the minting process are included in the folder so that they can be customized. Nothing is pulled from Openzeppelin.

The objective is to create a new ERC721Phygital extension that we could publish on Openzeppelin.

## Truffle

### Installation

Truffle is used for deployement and testing, you will need to install it:

#### `npm install -g truffle`

### Commands

#### `truffle build` 

Builds the smart contracts into the /build/ folder. You will then need to copy-paste the generated json into /src/abis/ for React to interact with the given contract.

#### `truffle test`

Runs tests on the Smart contracts. Tests are defined in /test/testPhygital.test.js.


## Ganache

Ganache provides a local (fake) Ethereum blockchain. We use it to to simulate accounts, transaction and deploy smart contracts without the need for paying gas fees.

After installing Ganache, open it and click on "Quickstart Ethereum".

This React app is set up to interact with your Metamask once you open the page, but there is some required configuration for Metamask to interact with Ganache.

### Connect your Metamask extension to the Ganache blockchain:

Your Ganache network is defined by its RPC adress, which should be: HTTP://127.0.0.1:7545

Under Metamask, add a new network and type this RPC URL.

This should only be done once.

### Add your account:

Everytime Ganache creates a new fake Ethereum blockchain, it generates fake accounts with fakes private and public keys. You will need to create the corresponding account under Metamask everytime you generate a new network.

Make sure you are connected to the Ganache network under Metamask.

Under Metamask, click "Import an account".

Under Ganache, choose any generated address and click "Show keys". Copy and paste the private key as your new Metamask account. You are all set and should see 100 ETH on your Metamask Account.

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.