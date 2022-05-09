# /bin/bash

ls -1 $(grep -slR 'message Msg' ./osmosis/proto | egrep '\.proto$') \
    ./osmosis/proto/osmosis/lockup/lock.proto \
    ./osmosis/proto/osmosis/gamm/v1beta1/pool.proto \
    ./osmosis/proto/osmosis/gamm/pool-models/balancer/balancerPool.proto \
    | sort | uniq