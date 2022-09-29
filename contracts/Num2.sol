// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Num2{
    uint private num;

function update(uint _num) public {
    num=_num;
}
function get() public view returns(uint256){
    return num;
}
function increment()public{
    num=num + 1;
}
}