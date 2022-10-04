// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

library ExampleLib {
    function ret1(
    ) public pure returns (uint256) {
        return 1;
    }
}

contract Example {
    function test() public pure returns (uint256) {
        return ExampleLib.ret1();
    }
}
