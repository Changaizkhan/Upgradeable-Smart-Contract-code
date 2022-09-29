const {ethers,upgrades}=require("hardhat");

async function main(){
    const Num2 =await ethers.getContractFactory("Num2");
    console.log("Num1 is upgrading");
    await upgrades.upgradeProxy('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',Num2);

}
main();