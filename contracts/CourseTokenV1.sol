pragma solidity ^0.4.22;

contract CourseTokenV1{
    string public constant name ="DAPP course token";
    string public constant symbol ="DCT";

    uint8 public constant decimals = 0;
  //maintain total supply
    uint public totalSupply;
    //maintain balance in a mapping
    mapping(address=> uint256) balances;

    // constructor will set inital total supply

    constructor (uint256 initialSupply) public{
        totalSupply = initialSupply;

        
        //set sender as owner of all the initial supply
        balances[msg.sender] = totalSupply;
        
    }
    event Transfer(address _from, address _to, uint256 _value);
    function transfer(address _to, uint256 _value) public returns(bool success){
        // return false if value is more  than  senders balance
        if(_value>0 && balances[msg.sender] < _value){
            return false;
        }
      //reduce senders balance
        balances[msg.sender] -= _value;

      //increase balance of receiver
        balances[_to] += _value;
    //send emit
        Transfer (msg.sender, _to, _value);
        
        return true;

    }
    // anyone can call this constant function to check the balance of tokens for an address

    function balanceOf(address _someone)public view returns (uint256 balance){
        return balances[_someone];
    }

}