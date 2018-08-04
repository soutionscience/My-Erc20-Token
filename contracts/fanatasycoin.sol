pragma solidity ^0.4.17;
contract Fantasy {
    uint public balance;
    address [] public players;
    
    
 function Fantasy() public{
        balance = 100;
      
    }
    function buyPlayers( uint amount, address bought) public{
        balance = balance - amount;
        players.push(bought);
        
    }
    function deletePlayers(uint amount, address sold) public{
        balance = balance + amount;
        
    }
    


}