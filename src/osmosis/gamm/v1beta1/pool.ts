import { Writer, Reader, Protobuf } from "as-proto";
import { cosmos } from "../../../cosmos";

export class PoolAsset {
  static encode(message: PoolAsset, writer: Writer): void {
    const token = message.token;
    if (token !== null) {
      writer.uint32(10);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(token, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.string(message.weight);
  }

  static decode(reader: Reader, length: i32): PoolAsset {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PoolAsset();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = cosmos.base.v1beta1.Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  token: cosmos.base.v1beta1.Coin | null;
  weight: string;

  constructor(token: cosmos.base.v1beta1.Coin | null = null, weight: string = "") {
    this.token = token;
    this.weight = weight;
  }
}

export function decodePoolAsset(a: Uint8Array): PoolAsset {
  return Protobuf.decode<PoolAsset>(a, PoolAsset.decode);
}
