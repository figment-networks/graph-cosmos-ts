import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../../../google";
import { v1beta1 } from "../../v1beta1";
import { cosmos } from "../../../../cosmos";

export class SmoothWeightChangeParams {
  static encode(message: SmoothWeightChangeParams, writer: Writer): void {
    const start_time = message.start_time;
    if (start_time !== null) {
      writer.uint32(10);
      writer.fork();
      google.protobuf.Timestamp.encode(start_time, writer);
      writer.ldelim();
    }

    const duration = message.duration;
    if (duration !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Duration.encode(duration, writer);
      writer.ldelim();
    }

    const initialPoolWeights = message.initialPoolWeights;
    for (let i = 0; i < initialPoolWeights.length; ++i) {
      writer.uint32(26);
      writer.fork();
      v1beta1.PoolAsset.encode(initialPoolWeights[i], writer);
      writer.ldelim();
    }

    const targetPoolWeights = message.targetPoolWeights;
    for (let i = 0; i < targetPoolWeights.length; ++i) {
      writer.uint32(34);
      writer.fork();
      v1beta1.PoolAsset.encode(targetPoolWeights[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SmoothWeightChangeParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SmoothWeightChangeParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 2:
          message.duration = google.protobuf.Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.initialPoolWeights.push(v1beta1.PoolAsset.decode(reader, reader.uint32()));
          break;

        case 4:
          message.targetPoolWeights.push(v1beta1.PoolAsset.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  start_time: google.protobuf.Timestamp | null;
  duration: google.protobuf.Duration | null;
  initialPoolWeights: Array<v1beta1.PoolAsset>;
  targetPoolWeights: Array<v1beta1.PoolAsset>;

  constructor(
    start_time: google.protobuf.Timestamp | null = null,
    duration: google.protobuf.Duration | null = null,
    initialPoolWeights: Array<v1beta1.PoolAsset> = [],
    targetPoolWeights: Array<v1beta1.PoolAsset> = []
  ) {
    this.start_time = start_time;
    this.duration = duration;
    this.initialPoolWeights = initialPoolWeights;
    this.targetPoolWeights = targetPoolWeights;
  }
}

export function decodeSmoothWeightChangeParams(a: Uint8Array): SmoothWeightChangeParams {
  return Protobuf.decode<SmoothWeightChangeParams>(a, SmoothWeightChangeParams.decode);
}

export class PoolParams {
  static encode(message: PoolParams, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.swapFee);

    writer.uint32(18);
    writer.string(message.exitFee);

    const smoothWeightChangeParams = message.smoothWeightChangeParams;
    if (smoothWeightChangeParams !== null) {
      writer.uint32(26);
      writer.fork();
      SmoothWeightChangeParams.encode(smoothWeightChangeParams, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): PoolParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PoolParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapFee = reader.string();
          break;

        case 2:
          message.exitFee = reader.string();
          break;

        case 3:
          message.smoothWeightChangeParams = SmoothWeightChangeParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  swapFee: string;
  exitFee: string;
  smoothWeightChangeParams: SmoothWeightChangeParams | null;

  constructor(swapFee: string = "", exitFee: string = "", smoothWeightChangeParams: SmoothWeightChangeParams | null = null) {
    this.swapFee = swapFee;
    this.exitFee = exitFee;
    this.smoothWeightChangeParams = smoothWeightChangeParams;
  }
}

export function decodePoolParams(a: Uint8Array): PoolParams {
  return Protobuf.decode<PoolParams>(a, PoolParams.decode);
}

export class Pool {
  static encode(message: Pool, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    writer.uint32(16);
    writer.uint64(message.id);

    const poolParams = message.poolParams;
    if (poolParams !== null) {
      writer.uint32(26);
      writer.fork();
      PoolParams.encode(poolParams, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.future_pool_governor);

    const totalShares = message.totalShares;
    if (totalShares !== null) {
      writer.uint32(42);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(totalShares, writer);
      writer.ldelim();
    }

    const poolAssets = message.poolAssets;
    for (let i = 0; i < poolAssets.length; ++i) {
      writer.uint32(50);
      writer.fork();
      v1beta1.PoolAsset.encode(poolAssets[i], writer);
      writer.ldelim();
    }

    writer.uint32(58);
    writer.string(message.totalWeight);
  }

  static decode(reader: Reader, length: i32): Pool {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Pool();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.id = reader.uint64();
          break;

        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.future_pool_governor = reader.string();
          break;

        case 5:
          message.totalShares = cosmos.base.v1beta1.Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.poolAssets.push(v1beta1.PoolAsset.decode(reader, reader.uint32()));
          break;

        case 7:
          message.totalWeight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  id: u64;
  poolParams: PoolParams | null;
  future_pool_governor: string;
  totalShares: cosmos.base.v1beta1.Coin | null;
  poolAssets: Array<v1beta1.PoolAsset>;
  totalWeight: string;

  constructor(
    address: string = "",
    id: u64 = 0,
    poolParams: PoolParams | null = null,
    future_pool_governor: string = "",
    totalShares: cosmos.base.v1beta1.Coin | null = null,
    poolAssets: Array<v1beta1.PoolAsset> = [],
    totalWeight: string = ""
  ) {
    this.address = address;
    this.id = id;
    this.poolParams = poolParams;
    this.future_pool_governor = future_pool_governor;
    this.totalShares = totalShares;
    this.poolAssets = poolAssets;
    this.totalWeight = totalWeight;
  }
}

export function decodePool(a: Uint8Array): Pool {
  return Protobuf.decode<Pool>(a, Pool.decode);
}
