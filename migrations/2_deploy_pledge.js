const XcomRewards = artifacts.require("XcomRewards");

module.exports = function(deployer) {
  // Xcom 最大发行量 4亿
  deployer.deploy(XcomRewards);
};
