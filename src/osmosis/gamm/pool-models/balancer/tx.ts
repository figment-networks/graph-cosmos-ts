import { Writer, Reader, Protobuf } from "as-proto";
import { PoolParams } from "./balancerPool";
import { v1beta1 } from "../../v1beta1";

export class MsgCreateBalancerPool {
  static encode(message: MsgCreateBalancerPool, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    const poolParams = message.poolParams;
    if (poolParams !== null) {
      writer.uint32(18);
      writer.fork();
      PoolParams.encode(poolParams, writer);
      writer.ldelim();
    }

    const poolAssets = message.poolAssets;
    for (let i = 0; i < poolAssets.length; ++i) {
      writer.uint32(26);
      writer.fork();
      v1beta1.PoolAsset.encode(poolAssets[i], writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.future_pool_governor);
  }

  static decode(reader: Reader, length: i32): MsgCreateBalancerPool {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgCreateBalancerPool();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.poolAssets.push(v1beta1.PoolAsset.decode(reader, reader.uint32()));
          break;

        case 4:
          message.future_pool_governor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  poolParams: PoolParams | null;
  poolAssets: Array<v1beta1.PoolAsset>;
  future_pool_governor: string;

  constructor(
    sender: string = "",
    poolParams: PoolParams | null = null,
    poolAssets: Array<v1beta1.PoolAsset> = [],
    future_pool_governor: string = ""
  ) {
    this.sender = sender;
    this.poolParams = poolParams;
    this.poolAssets = poolAssets;
    this.future_pool_governor = future_pool_governor;
  }
}

export function decodeMsgCreateBalancerPool(a: Uint8Array): MsgCreateBalancerPool {
  return Protobuf.decode<MsgCreateBalancerPool>(a, MsgCreateBalancerPool.decode);
}

@unmanaged
export class MsgCreateBalancerPoolResponse {
  static encode(message: MsgCreateBalancerPoolResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgCreateBalancerPoolResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgCreateBalancerPoolResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgCreateBalancerPoolResponse(a: Uint8Array): MsgCreateBalancerPoolResponse {
  return Protobuf.decode<MsgCreateBalancerPoolResponse>(a, MsgCreateBalancerPoolResponse.decode);
}
