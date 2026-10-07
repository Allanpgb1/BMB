// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title BMB
 * @notice Fixed-supply ERC-20 token.
 *
 * Supply: 1,000,000,000 BMB
 * Decimals: 18
 * Minting after deployment: disabled
 * Transfer tax: none
 */
contract BMB is ERC20 {
    uint256 public constant MAX_SUPPLY = 1_000_000_000 * 10 ** 18;

    constructor() ERC20("BMB", "BMB") {
        _mint(msg.sender, MAX_SUPPLY);
    }
}