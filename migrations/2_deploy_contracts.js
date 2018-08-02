let tokenV1 = artifacts.require('./CourseTokenV1.sol')

module.exports = function(deployer) {
  deployer.deploy(tokenV1, 1000);
};