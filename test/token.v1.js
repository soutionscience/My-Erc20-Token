let CourseTokenV1 = artifacts.require('./CourseTokenV1.sol')

contract('CourseTokenV1', function(accounts){
    //Token owner
    let john_address = accounts[0];
    
    let jane_address = accounts[1];
    let dave_address = accounts[2];


    //make sure token supply is initialized correctly to 1000,
    // call transfer from john to jane amount = 100
    //check jane balance it should be 100
    //check john balance it should be 900

    it("Should assert to true", async function(){
        var tokenV1;
        return CourseTokenV1.deployed().then(function(instance){
            tokenV1 = instance;
            return tokenV1.totalSupply.call()

        }).then(function(result){
            console.log("initial Supply= ", result.valueOf());
            // 1. Balace shoud be 1000
            assert.equal(result.valueOf(), 1000, "Token Contract initialized Value NOT equal to 1000");
           // 2. john transfers 100 token
           tokenV1.transfer(jane_address, 100, {from: john_address})
           // 3. check jane's balance
           return tokenV1.balanceOf.call(jane_address)
        }).then(function(result){
            console.log("balance of jane = ", result.valueOf());
            //4. balance of jane should be 100
            assert.equal(result.valueOf(), 100, "transfered NOT equal to 100!!!");
            return tokenV1.balanceOf.call(john_address)
        }).then(function(result){
            console.log("balance of john= ", result.valueOf());
            assert.equal(result.valueOf(), 900, "johns balance NOT equal to 900!!")
        })
    })

})