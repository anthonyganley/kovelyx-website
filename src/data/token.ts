export const token = {
  name: "Kovelyx",
  symbol: "KOVL",

  supply: {
    raw: 1_000_000_000,
    display: "1,000,000,000",
  },

  decimals: 18,

  blockchain: "Base",

  mainnet: {
    deployed: false,
    contractAddress: null,
  },

  testnet: {
    name: "Base Sepolia",
    chainId: 84532,
    contractAddress: "0x4b166f0a11a7aE8e8EF520599D3F5f497DC786c3",
    explorerUrl:
      "https://sepolia.basescan.org/address/0x4b166f0a11a7aE8e8EF520599D3F5f497DC786c3",
  },
} as const;