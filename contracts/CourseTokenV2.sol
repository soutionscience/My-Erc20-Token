pragma solidity ^0.4.22;
import './CourseTokenV1.sol';



contract CourseTokenV2 is CourseTokenV1{
  //Allowances
  //two dimensional associative array
  //index-1 = owner account,  index-2 = spender account

  mapping(address => mapping(address => uint256)) allowances;

   function CourseTokenV2(uint256 initSupply) CourseTokenV1(initSupply) {
    // constructor
    // we have invoked the constructor for the V1, so we are good
  }


  //how many tokens can spender spend from owner's account
  function allowance(address _owner, address _spender) view returns(uint remaining){
    // return the allowance for _spender approved by _owner
    return allowances[_owner][_spender];

  }
  event Approval(address indexed_owner, address indexed_spender, uint256 _value);
  function approve(address _spender, uint256 _value) returns(bool success){
    if( _value <=0) return false;

    // simply add/change the amount in allowances
    allowances[msg.sender][_spender] = _value;

    //Declare the approval event and emit it
    Approval(msg.sender, _spender, _value);
  }

  function transferFrom(address _from, address _to, uint256 _value ) public returns(bool success){

    if( _value <=0) return false;
     //1. check if spender is allowed to spend amount
     //2. spender is =msg.sender
     if(allowances[_from][msg.sender]< _value) return false;
    
     // check if there are enough tokens
     if(balances[_from] < _value) return false;

     //reduce _from balance
     balances[_from] -= _value;

      // increase _to balance

      balances[_to] += _value;

    // reduce allowance value
    allowances[_from][msg.sender]-= _value;

    //emit this transaction

    Transfer(_from, _to, _value);

  return true;
  }
 

}
