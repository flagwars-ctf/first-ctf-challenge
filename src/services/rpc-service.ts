import { GetVersionedBlockConfig } from "@solana/web3.js";
import { Helius, HeliusCluster } from "helius-sdk";

const createHelius = (cluster: HeliusCluster) => {
  if (!process.env.RPC_API_KEY) throw new Error("No RPC key in env");

  return new Helius(process.env.RPC_API_KEY, cluster);
};

export const getBlock = async (blockNumber: number) => {
  const helius = createHelius("devnet");

  const config = {
    commitment: "finalized",
    maxSupportedTransactionVersion: 3,
    transactionDetails: "full",
  } as GetVersionedBlockConfig;

  return await helius.connection.getBlock(blockNumber, config);
};
