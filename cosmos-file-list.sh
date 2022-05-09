# /bin/bash

ls -1 $(grep -slR 'message Msg' ./cosmos-sdk/proto | egrep '\.proto$') \
    $(egrep -slR 'enum|message' ./cosmos-sdk/third_party/proto/tendermint/ | egrep '\.proto$') \
    $(egrep -slR 'enum|message' ./cosmos-sdk/third_party/proto/google/ | egrep '\.proto$') \
    ./cosmos-sdk/proto/cosmos/bank/v1beta1/bank.proto \
    ./cosmos-sdk/proto/cosmos/base/v1beta1/coin.proto \
    ./cosmos-sdk/proto/cosmos/gov/v1beta1/gov.proto \
    ./cosmos-sdk/proto/cosmos/staking/v1beta1/staking.proto \
    ./cosmos-sdk/proto/cosmos/authz/v1beta1/authz.proto \
    ./cosmos-sdk/proto/cosmos/upgrade/v1beta1/upgrade.proto \
    ./cosmos-sdk/third_party/proto/confio/proofs.proto \
    ./third_party/google/protobuf/timestamp.proto \
    ./third_party/google/protobuf/duration.proto \
    | sort | uniq