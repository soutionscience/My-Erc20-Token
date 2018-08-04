let tokenV1 = artifacts.require('./CourseTokenV1.sol')
let tokenV2 = artifacts.require('./CourseTokenV2.sol')

module.exports = function(deployer) {
  deployer.deploy(tokenV1, 1000);
  deployer.deploy(tokenV2, 1000);
};