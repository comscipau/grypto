import { ethers } from "ethers";
import { magic } from "./magic";
import Web3 from "web3";

export const provider = new ethers.providers.Web3Provider(magic.rpcProvider);
export const web3 = new Web3(magic.rpcProvider);