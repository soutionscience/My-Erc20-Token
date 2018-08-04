let CourseTokenV2 = artifacts.require('./CourseTokenV2.sol');

contract('CourseTokenV2', function(accounts) {
  let john_address = accounts[0];
    
  let jane_address = accounts[1];
  let dave_address = accounts[2];

  // Test cases
  // 1. Jon calls transer to sned 100 tokens to jane
  // 2. John approves jane for 50 tokens
  // 3. Jane transfersFrom() john 5 tokens to Dave
 // 4 assers =>
//            jonh balance = 1000 - 100 -5;
//          jane balance = 100;
//          dave balance = 5;
//         jans's allowance = 45;


  it("should assert true", function() {
    let token2;

    return CourseTokenV2.deployed().then(function(instance){
      token2 = instance;
      // transfer  100 from john to jane
      token2.transfer(jane_address, 100, {from: john_address})
      return token2.approve(jane_address, 50)

    })
   .then(function(result){
        //Jane tranfser John's 5 tokens to Dave
        token2.transferFrom(john_address, dave_address,5, {from: jane_address});
              // Check John's balance
      return token2.balanceOf.call(john_address);

   }).then(function(result){
     console.log("the balance of john = ", result.valueOf());
     //check johns balance
     assert.equal(result.valueOf(), 895, "John's Token Balance NOT equal to 895!!!");

     return token2.balanceOf.call(jane_address)

   }).then(function(result){
     console.log("jane's balance is = ", result.valueOf() );
     assert.equal(result.valueOf(), 100, "janes balance is NOT equal to 100!!")

     return token2.balanceOf.call(dave_address)
   }).then(function(result){
     console.log("daves balance is =", result.valueOf());
     assert.equal(result.valueOf(), 5, "daves balance is NOT equal to 5!!")

     return token2.allowance.call(john_address, jane_address)

   }).then(function(result){
     console.log("janes allowance remainint = ", result.valueOf());
     assert.equal(result.valueOf(), 45, "balance of allowance to jane is NOT equal to 45!!")
   });

  });
});
