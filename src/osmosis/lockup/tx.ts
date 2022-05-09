import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../google";
import { cosmos } from "../../cosmos";
import { PeriodLock } from "./lock";

export class MsgLockTokens {
  static encode(message: MsgLockTokens, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.owner);

    const duration = message.duration;
    if (duration !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Duration.encode(duration, writer);
      writer.ldelim();
    }

    const coins = message.coins;
    for (let i = 0; i < coins.length; ++i) {
      writer.uint32(26);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(coins[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgLockTokens {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgLockTokens();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.duration = google.protobuf.Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.coins.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  owner: string;
  duration: google.protobuf.Duration | null;
  coins: Array<cosmos.base.v1beta1.Coin>;

  constructor(owner: string = "", duration: google.protobuf.Duration | null = null, coins: Array<cosmos.base.v1beta1.Coin> = []) {
    this.owner = owner;
    this.duration = duration;
    this.coins = coins;
  }
}

export function decodeMsgLockTokens(a: Uint8Array): MsgLockTokens {
  return Protobuf.decode<MsgLockTokens>(a, MsgLockTokens.decode);
}

@unmanaged
export class MsgLockTokensResponse {
  static encode(message: MsgLockTokensResponse, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.ID);
  }

  static decode(reader: Reader, length: i32): MsgLockTokensResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgLockTokensResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  ID: u64;

  constructor(ID: u64 = 0) {
    this.ID = ID;
  }
}

export function decodeMsgLockTokensResponse(a: Uint8Array): MsgLockTokensResponse {
  return Protobuf.decode<MsgLockTokensResponse>(a, MsgLockTokensResponse.decode);
}

export class MsgBeginUnlockingAll {
  static encode(message: MsgBeginUnlockingAll, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.owner);
  }

  static decode(reader: Reader, length: i32): MsgBeginUnlockingAll {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgBeginUnlockingAll();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  owner: string;

  constructor(owner: string = "") {
    this.owner = owner;
  }
}

export function decodeMsgBeginUnlockingAll(a: Uint8Array): MsgBeginUnlockingAll {
  return Protobuf.decode<MsgBeginUnlockingAll>(a, MsgBeginUnlockingAll.decode);
}

export class MsgBeginUnlockingAllResponse {
  static encode(message: MsgBeginUnlockingAllResponse, writer: Writer): void {
    const unlocks = message.unlocks;
    for (let i = 0; i < unlocks.length; ++i) {
      writer.uint32(10);
      writer.fork();
      PeriodLock.encode(unlocks[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgBeginUnlockingAllResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgBeginUnlockingAllResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlocks.push(PeriodLock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  unlocks: Array<PeriodLock>;

  constructor(unlocks: Array<PeriodLock> = []) {
    this.unlocks = unlocks;
  }
}

export function decodeMsgBeginUnlockingAllResponse(a: Uint8Array): MsgBeginUnlockingAllResponse {
  return Protobuf.decode<MsgBeginUnlockingAllResponse>(a, MsgBeginUnlockingAllResponse.decode);
}

export class MsgBeginUnlocking {
  static encode(message: MsgBeginUnlocking, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.owner);

    writer.uint32(16);
    writer.uint64(message.ID);

    const coins = message.coins;
    for (let i = 0; i < coins.length; ++i) {
      writer.uint32(26);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(coins[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgBeginUnlocking {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgBeginUnlocking();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.ID = reader.uint64();
          break;

        case 3:
          message.coins.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  owner: string;
  ID: u64;
  coins: Array<cosmos.base.v1beta1.Coin>;

  constructor(owner: string = "", ID: u64 = 0, coins: Array<cosmos.base.v1beta1.Coin> = []) {
    this.owner = owner;
    this.ID = ID;
    this.coins = coins;
  }
}

export function decodeMsgBeginUnlocking(a: Uint8Array): MsgBeginUnlocking {
  return Protobuf.decode<MsgBeginUnlocking>(a, MsgBeginUnlocking.decode);
}

@unmanaged
export class MsgBeginUnlockingResponse {
  static encode(message: MsgBeginUnlockingResponse, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.success);
  }

  static decode(reader: Reader, length: i32): MsgBeginUnlockingResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgBeginUnlockingResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  success: bool;

  constructor(success: bool = false) {
    this.success = success;
  }
}

export function decodeMsgBeginUnlockingResponse(a: Uint8Array): MsgBeginUnlockingResponse {
  return Protobuf.decode<MsgBeginUnlockingResponse>(a, MsgBeginUnlockingResponse.decode);
}
