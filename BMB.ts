import { expect } from "chai";
import { network } from "hardhat";

describe("BMB", function () {
  it("creates the fixed supply in the deployer's wallet", async function () {
    const { ethers } = await network.connect();

    const [deployer] = await ethers.getSigners();
    const BMB = await ethers.getContractFactory("BMB");
    const bmb = await BMB.deploy();
    await bmb.waitForDeployment();

    const expected = ethers.parseUnits("1000000000", 18);

    expect(await bmb.name()).to.equal("BMB");
    expect(await bmb.symbol()).to.equal("BMB");
    expect(await bmb.decimals()).to.equal(18);
    expect(await bmb.totalSupply()).to.equal(expected);
    expect(await bmb.balanceOf(deployer.address)).to.equal(expected);
    expect(await bmb.MAX_SUPPLY()).to.equal(expected);
  });

  it("does not expose a public mint function", async function () {
    const { ethers } = await network.connect();

    const BMB = await ethers.getContractFactory("BMB");
    const bmb = await BMB.deploy();
    await bmb.waitForDeployment();

    expect((bmb.interface as any).getFunction("mint")).to.equal(null);
  });
});