#!/bin/sh

cb-sol-cli deploy --all --relayerThreshold 1
cb-sol-cli bridge register-resource --resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00" --targetContract "0x006f485B4216759cfb8979DE2E4974f74c95585D"
cb-sol-cli bridge set-burn --tokenContract "0x9e1a245707799e747B4482E965B18BDd7cB4df57"
cb-sol-cli erc20 add-minter --minter "0xaFfCFf9AA352E8f3960e2B9538164053F8C9E264"
