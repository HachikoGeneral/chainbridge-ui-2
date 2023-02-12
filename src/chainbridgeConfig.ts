import ETHIcon from "./media/tokens/eth.svg";

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type ChainType = "Ethereum" | "Substrate";

export type BridgeConfig = {
  networkId?: number;
  chainId: number;
  name: string;
  rpcUrl: string;
  type: ChainType;
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  decimals: number;
};

export type EvmBridgeConfig = BridgeConfig & {
  bridgeAddress: string;
  erc20HandlerAddress: string;
  type: "Ethereum";
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
  deployedBlockNumber?: number;
};

export type SubstrateBridgeConfig = BridgeConfig & {
  type: "Substrate";
  chainbridgePalletName: string;
  bridgeFeeFunctionName?: string; // If this value is provided, the chain value will be used will be used
  bridgeFeeValue?: number; // If the above value is not provided, this value will be used for the fee. No scaling should be applied.
  transferPalletName: string;
  transferFunctionName: string;
  typesFileName: string;
};

export type ChainbridgeConfig = {
  chains: Array<EvmBridgeConfig | SubstrateBridgeConfig>;
};

export const chainbridgeConfig: ChainbridgeConfig = {
 chains: [
    {
      chainId: 0,
      networkId: 42,
      name: "chikochain",
      decimals: 18,
      bridgeAddress: "0x4b552F62A4Db1f31C59c93E8Cb5A112a410598Ef",
      erc20HandlerAddress: "0x3C4BcD08649897975123Cd8E47b2B34fB6e06D57",
      rpcUrl: "http://70.34.216.42:9933",
      type: "Ethereum",
      blockExplorer: "http://95.179.194.226:3000/?rpc=ws%3A%2F%2F70.34.216.42%3A9944#/explorer",
      nativeTokenSymbol: "CHK",
      tokens: [
        {
          address: "0x2e5E530dC2C6b2A8f214ee929dC4a302575881A9",
          name: "WrappedChikoToken",
          symbol: "WCHK",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00",
        },
      ],
    },
    {
      chainId: 1,
      networkId: 137,
      name: "polygon",
      decimals: 18,
      bridgeAddress: "0x006f485B4216759cfb8979DE2E4974f74c95585D",
      erc20HandlerAddress: "0xaFfCFf9AA352E8f3960e2B9538164053F8C9E264",
      rpcUrl: "https://polygon-mainnet.g.alchemy.com/v2/Sziok2o64OsCpH9HP339wQdHe-akTGFi",
      type: "Ethereum",
      blockExplorer: "https://polygonscan.com/",
      nativeTokenSymbol: "MATIC",
      tokens: [
        {
          address: "0x9e1a245707799e747B4482E965B18BDd7cB4df57",
          name: "WrappedChikoToken",
          symbol: "WCHK",
          imageUri: ETHIcon,
          resourceId:
            "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00",
        },
      ],
    },
  ],
};

