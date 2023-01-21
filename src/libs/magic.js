
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3"
 
const customNodeOptions = {
  rpcUrl: 'https://polygon-rpc.com/',
  chainId: 137,
}

export const magic = new Magic("pk_live_621D1A9595A26A65", {
  network: customNodeOptions,
  extensions: [new ConnectExtension()]
});
export const web3 = new Web3(magic.rpcProvider);

