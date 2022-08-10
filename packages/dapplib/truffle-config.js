require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stool radar script color install canoe army genuine'; 
let testAccounts = [
"0x18116c02f176d211e3356dcd618b4954f89973edde8b0628f2d548ca8f71217f",
"0x1715513349b8640e2b2b8c98dc5654112b1e07b5dc4322cec6e71bb5a46064c2",
"0x201d3d22925d6f83ab13946f5add4bcb5df3d08fd05c4bcd47f5fb4c050094dc",
"0xb744c45f102a5fbbf03009a14d0d8c2cbe6b7c85bfc64bd54c23847456030d6e",
"0x9b6db1346c28543c22774ce278a949445f8093c5225b90881a5d50017dabdc83",
"0x79f70ca48d26f44cb90491c464960aa4aad543c5532b531893fa502a87b9c765",
"0xef46905739a1dd0847e7264ecf791649a546764f3b3bf2fdc2e34df0fc066fb5",
"0x8c756d9191ac8fb1353cf1ae298578ea2784efb202af2804c9c66224bc71f96a",
"0xf6bba73f0bca415ea81969192b29506ac7d1faf8267742ebda74ae6241b6b2d2",
"0x66bda077e592c6ed267f779d18b1dc8a32500e8fc7e3eaf3d34e00c5c5949a1d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

