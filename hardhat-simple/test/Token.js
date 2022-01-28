const { expect } = require("chai");
const { ethers } = require("hardhat");

// describe("Token contract", function () {
//   it("Deployment should assign the total supply of tokens to the owner", async function () {
//     const [owner] = await ethers.getSigners();

//     const Token = await ethers.getContractFactory("Token");

//     const hardhatToken = await Token.deploy();

//     const ownerBalance = await hardhatToken.balanceOf(owner.address);
//     expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//   });
// });

// ## Using a different account

// describe("Transactions", function () {
//   it("Should transfer tokens between accounts", async function () {
//     const [owner, addr1, addr2] = await ethers.getSigners();

//     const Token = await ethers.getContractFactory("Token");

//     const hardhatToken = await Token.deploy();
//     console.log(await hardhatToken.balanceOf(addr1.address));

//     // Transfer 50 tokens from owner to addr1
//     await hardhatToken.transfer(addr1.address, 50);
//     console.log(await hardhatToken.balanceOf(addr1.address));

//     expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

//     // Transfer 50 tokens from addr1 to addr2
//     await hardhatToken.connect(addr1).transfer(addr2.address, 50);
//     expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
//   });
// });

// ##  Full coverage

describe("Token contract", function () {
  let Token;
  let hardhatToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  //   before(function () {
  //     console.log("before");

  //     // runs before all tests in this file regardless where this line is defined.
  //   });

  //   after(function () {
  //     console.log("after");

  //     // runs after all tests in this file
  //   });

  //   afterEach(function () {
  //     console.log("afterEach");

  //     // runs after each test in this block
  //   });

  beforeEach(async function () {
    Token = await ethers.getContractFactory("Token");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    hardhatToken = await Token.deploy();
    // runs before each test in this block
  });

  //
  describe("Deployment", function () {
    it("should set the right owner", async function () {
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

    it("should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("should transfer tokens between accounts", async function () {
      await hardhatToken.transfer(addr1.address, 50);
      const addr1Balance = await hardhatToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      await hardhatToken.connect(addr1).transfer(addr2.address, 30);
      const addr2Balance = await hardhatToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(30);
    });

    it("should fail if sender doesn’t have enough tokens", async function () {
      const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

      await expect(
        hardhatToken.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("Not enough tokens");

      expect(await hardhatToken.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });

    it("should update balances after transfers", async function () {
      const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

      await hardhatToken.transfer(addr1.address, 100);

      await hardhatToken.transfer(addr2.address, 50);

      const finalOwnerBalance = await hardhatToken.balanceOf(owner.address);
      expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));

      const addr1Balance = await hardhatToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(100);

      const addr2Balance = await hardhatToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });
  });
});
