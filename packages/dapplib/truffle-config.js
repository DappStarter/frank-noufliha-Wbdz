require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone street dash stereo snow harvest drink equal genre'; 
let testAccounts = [
"0x253c492af7a2ccc8e03f91dce0ebf428ffb2039ffe1423234a23a57b98f46919",
"0xf87b3780c9a8b9e62debcaa9c93bd63253f5efa36a6b2044a599c15670e5f86f",
"0x7b890ad9df3768c904d2e607eae34903d5c7eca145a4ce0422fbc03d36fcdc32",
"0x979fcb6f8de7ca6baa0121d7ac50f1f68b46fcd47987ad0b2a128416e46bc9c5",
"0xb508508ec8abf62d18e3f19be98054bab60a1030dfa8d5903c71a408428155c7",
"0xaea33e2a4e78bdf6cd153864b6cef222bb249945e9c851a23732e13f6e99d93a",
"0xfcf2fa6593e2aa13b646d5b22311d05b2ed2fadd17a9b5c4e8015a5093c378e3",
"0x158843d42f13e28ec1080a7668db07a8b6e11abf3a2c805ef3d796c312f7a4a0",
"0x744a1e9211d1a8e30fa69bd7c58250bf5b82b0e6e9334a2f02f0b0427f4fcaf9",
"0x23f3a36f3a8f40127a1d49faab10708ba3062e27f11d601df26a64eee04f40c3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


