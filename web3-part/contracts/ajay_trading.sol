// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EnergyTrading {
    address public owner;
    IERC20 public energyToken;

    struct Trade {
        address buyer;
        address seller;
        uint256 energyAmount;
        uint256 price;
        bool settled;
    }

    Trade[] public trades;

    event TradeInitiated(address indexed buyer, address indexed seller, uint256 energyAmount, uint256 price);
    event TradeSettled(uint256 tradeId);

    constructor(address _energyToken) {
        owner = msg.sender;
        energyToken = IERC20(_energyToken);
    }

    function initiateTrade(address seller, uint256 energyAmount, uint256 price) public {
        require(msg.sender != seller, "Cannot trade with oneself");
        require(energyAmount > 0, "Energy amount must be greater than 0");

        trades.push(Trade({
            buyer: msg.sender,
            seller: seller,
            energyAmount: energyAmount,
            price: price,
            settled: false
        }));

        emit TradeInitiated(msg.sender, seller, energyAmount, price);
    }

    function settleTrade(uint256 tradeId) public {
        require(tradeId < trades.length, "Invalid trade ID");
        Trade storage trade = trades[tradeId];
        require(!trade.settled, "Trade already settled");

        uint256 totalCost = trade.energyAmount * trade.price;
        require(energyToken.transferFrom(trade.buyer, trade.seller, trade.energyAmount), "Energy transfer failed");
        require(energyToken.transferFrom(trade.seller, trade.buyer, totalCost), "Payment transfer failed");

        trade.settled = true;
        emit TradeSettled(tradeId);
    }
}
