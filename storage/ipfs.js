const IPFS = require('ipfs-http-client');
const ipfs = IPFS.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

async function uploadToIPFS(data) {
    const result = await ipfs.add(data);
    console.log(result.path); // CID of the uploaded file
}

uploadToIPFS("Hello, IPFS!");