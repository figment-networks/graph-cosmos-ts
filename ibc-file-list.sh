# /bin/bash

ls -1 $(grep -slR 'message Msg' ./ibc-go/proto | egrep '\.proto$') \
    ./ibc-go/proto/ibc/core/client/v1/client.proto \
    ./ibc-go/proto/ibc/core/channel/v1/channel.proto \
    ./ibc-go/proto/ibc/core/connection/v1/connection.proto \
    ./ibc-go/proto/ibc/core/commitment/v1/commitment.proto \
    | sort | uniq
