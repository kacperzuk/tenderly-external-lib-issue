import { ethers } from "hardhat";

async function main() {
  const lib = await (
    await ethers.getContractFactory("ExampleLib")
  ).deploy();
  await lib.deployed();

  const contract = await (
    await ethers.getContractFactory("Example", {
      libraries: { ExampleLib: lib.address },
    })
  ).deploy();
  await contract.deployed();

  console.log("Lib deployed to ", lib.address);
  console.log("Contract deployed to ", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
