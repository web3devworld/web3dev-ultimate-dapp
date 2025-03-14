const hre = require("hardhat");

async function main() {
    const GovernanceToken = await hre.ethers.getContractFactory("GovernanceToken");
    const govToken = await GovernanceToken.deploy(1000000);
    await govToken.deployed();
    console.log("GovernanceToken deployed to:", govToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});