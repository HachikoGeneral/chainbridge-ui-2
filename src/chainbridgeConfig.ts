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
      chainId: 1,
      networkId: 1,
      name: "Ethereum Mainnet",
      decimals: 18,
      bridgeAddress: "0x312C034304f0fCFc2e7D125baaf121DcF24F125D",
      erc20HandlerAddress: "0x67b4B460dDC18Ea8febce84F8B377824A5CC6d29",
      rpcUrl: "https://mainnet.infura.io/v3/957f4313f1374fcc8fdf0d7037555cd9",
      type: "Ethereum",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0x9040e237c3bf18347bb00957dc22167d0f2b999d",
          name: "Standard",
          symbol: "STND",
          imageUri: "WETHIcon",
          resourceId:
            "0xc04648c7ac0a6ec16720544cb9a4b3e685e51016009bf048a1100c01027a84d7",
        },
        {
          address: "0x8347b8a88c0cc6aad466d93b6533927ce8100857",
          name: "Chainbridge Shiden",
          symbol: "cbrSDN",
          imageUri: "WETHIcon",
          resourceId:
            "0x754af6dbae57fc76c03086507f7ff6d3584d021d81e8eed7395402233673fe11",
        },
      ],
    },
    {
      chainId: 100,
      networkId: 336,
      name: "Shiden",
      decimals: 18,
      bridgeAddress: "0x036A851D3Ca034a6b9075266f538d2De29426571",
      erc20HandlerAddress: "0x924E82c5e4cDA29AA8241116f6dDdeC021301D6c",
      rpcUrl: "https://rpc.shiden.astar.network:8545",
      type: "Ethereum",
      nativeTokenSymbol: "SDN",
      tokens: [
        {
          address: "0x722377A047e89CA735f09Eb7CccAb780943c4CB4",
          name: "Standard",
          symbol: "STND",
          imageUri: "WETHIcon",
          resourceId:
            "0xc04648c7ac0a6ec16720544cb9a4b3e685e51016009bf048a1100c01027a84d7",
        },
        {
          address: "0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef",
          name: "Wrapped Shiden",
          symbol: "WSDN",
          imageUri: "WETHIcon",
          resourceId:
            "0x754af6dbae57fc76c03086507f7ff6d3584d021d81e8eed7395402233673fe11",
        },
      ],
    },
  ],
};
