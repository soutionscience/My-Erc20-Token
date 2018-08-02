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
    
  });
});
