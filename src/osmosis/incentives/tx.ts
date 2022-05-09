import { Writer, Reader, Protobuf } from "as-proto";
import { lockup } from "../lockup";
import { cosmos } from "../../cosmos";
import { google } from "../../google";

export class MsgCreateGauge {
  static encode(message: MsgCreateGauge, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.is_perpetual);

    writer.uint32(18);
    writer.string(message.owner);

    const distribute_to = message.distribute_to;
    if (distribute_to !== null) {
      writer.uint32(26);
      writer.fork();
      lockup.QueryCondition.encode(distribute_to, writer);
      writer.ldelim();
    }

    const coins = message.coins;
    for (let i = 0; i < coins.length; ++i) {
      writer.uint32(34);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(coins[i], writer);
      writer.ldelim();
    }

    const start_time = message.start_time;
    if (start_time !== null) {
      writer.uint32(42);
      writer.fork();
      google.protobuf.Timestamp.encode(start_time, writer);
      writer.ldelim();
    }

    writer.uint32(48);
    writer.uint64(message.num_epochs_paid_over);
  }

  static decode(reader: Reader, length: i32): MsgCreateGauge {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgCreateGauge();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.is_perpetual = reader.bool();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.distribute_to = lockup.QueryCondition.decode(reader, reader.uint32());
          break;

        case 4:
          message.coins.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.start_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 6:
          message.num_epochs_paid_over = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  is_perpetual: bool;
  owner: string;
  distribute_to: lockup.QueryCondition | null;
  coins: Array<cosmos.base.v1beta1.Coin>;
  start_time: google.protobuf.Timestamp | null;
  num_epochs_paid_over: u64;

  constructor(
    is_perpetual: bool = false,
    owner: string = "",
    distribute_to: lockup.QueryCondition | null = null,
    coins: Array<cosmos.base.v1beta1.Coin> = [],
    start_time: google.protobuf.Timestamp | null = null,
    num_epochs_paid_over: u64 = 0
  ) {
    this.is_perpetual = is_perpetual;
    this.owner = owner;
    this.distribute_to = distribute_to;
    this.coins = coins;
    this.start_time = start_time;
    this.num_epochs_paid_over = num_epochs_paid_over;
  }
}

export function decodeMsgCreateGauge(a: Uint8Array): MsgCreateGauge {
  return Protobuf.decode<MsgCreateGauge>(a, MsgCreateGauge.decode);
}

@unmanaged
export class MsgCreateGaugeResponse {
  static encode(message: MsgCreateGaugeResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgCreateGaugeResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgCreateGaugeResponse();

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

export function decodeMsgCreateGaugeResponse(a: Uint8Array): MsgCreateGaugeResponse {
  return Protobuf.decode<MsgCreateGaugeResponse>(a, MsgCreateGaugeResponse.decode);
}

export class MsgAddToGauge {
  static encode(message: MsgAddToGauge, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.owner);

    writer.uint32(16);
    writer.uint64(message.gauge_id);

    const rewards = message.rewards;
    for (let i = 0; i < rewards.length; ++i) {
      writer.uint32(26);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(rewards[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgAddToGauge {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgAddToGauge();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.gauge_id = reader.uint64();
          break;

        case 3:
          message.rewards.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  owner: string;
  gauge_id: u64;
  rewards: Array<cosmos.base.v1beta1.Coin>;

  constructor(owner: string = "", gauge_id: u64 = 0, rewards: Array<cosmos.base.v1beta1.Coin> = []) {
    this.owner = owner;
    this.gauge_id = gauge_id;
    this.rewards = rewards;
  }
}

export function decodeMsgAddToGauge(a: Uint8Array): MsgAddToGauge {
  return Protobuf.decode<MsgAddToGauge>(a, MsgAddToGauge.decode);
}

@unmanaged
export class MsgAddToGaugeResponse {
  static encode(message: MsgAddToGaugeResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgAddToGaugeResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgAddToGaugeResponse();

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

export function decodeMsgAddToGaugeResponse(a: Uint8Array): MsgAddToGaugeResponse {
  return Protobuf.decode<MsgAddToGaugeResponse>(a, MsgAddToGaugeResponse.decode);
}
