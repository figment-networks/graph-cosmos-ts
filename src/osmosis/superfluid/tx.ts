import { Writer, Reader, Protobuf } from "as-proto";
import { cosmos } from "../../cosmos";

export class MsgSuperfluidDelegate {
  static encode(message: MsgSuperfluidDelegate, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.lock_id);

    writer.uint32(26);
    writer.string(message.val_addr);
  }

  static decode(reader: Reader, length: i32): MsgSuperfluidDelegate {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSuperfluidDelegate();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.lock_id = reader.uint64();
          break;

        case 3:
          message.val_addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  lock_id: u64;
  val_addr: string;

  constructor(sender: string = "", lock_id: u64 = 0, val_addr: string = "") {
    this.sender = sender;
    this.lock_id = lock_id;
    this.val_addr = val_addr;
  }
}

export function decodeMsgSuperfluidDelegate(a: Uint8Array): MsgSuperfluidDelegate {
  return Protobuf.decode<MsgSuperfluidDelegate>(a, MsgSuperfluidDelegate.decode);
}

@unmanaged
export class MsgSuperfluidDelegateResponse {
  static encode(message: MsgSuperfluidDelegateResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgSuperfluidDelegateResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSuperfluidDelegateResponse();

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

export function decodeMsgSuperfluidDelegateResponse(a: Uint8Array): MsgSuperfluidDelegateResponse {
  return Protobuf.decode<MsgSuperfluidDelegateResponse>(a, MsgSuperfluidDelegateResponse.decode);
}

export class MsgSuperfluidUndelegate {
  static encode(message: MsgSuperfluidUndelegate, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.lock_id);
  }

  static decode(reader: Reader, length: i32): MsgSuperfluidUndelegate {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSuperfluidUndelegate();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.lock_id = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  lock_id: u64;

  constructor(sender: string = "", lock_id: u64 = 0) {
    this.sender = sender;
    this.lock_id = lock_id;
  }
}

export function decodeMsgSuperfluidUndelegate(a: Uint8Array): MsgSuperfluidUndelegate {
  return Protobuf.decode<MsgSuperfluidUndelegate>(a, MsgSuperfluidUndelegate.decode);
}

@unmanaged
export class MsgSuperfluidUndelegateResponse {
  static encode(message: MsgSuperfluidUndelegateResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgSuperfluidUndelegateResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSuperfluidUndelegateResponse();

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

export function decodeMsgSuperfluidUndelegateResponse(a: Uint8Array): MsgSuperfluidUndelegateResponse {
  return Protobuf.decode<MsgSuperfluidUndelegateResponse>(a, MsgSuperfluidUndelegateResponse.decode);
}

export class MsgSuperfluidUnbondLock {
  static encode(message: MsgSuperfluidUnbondLock, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.lock_id);
  }

  static decode(reader: Reader, length: i32): MsgSuperfluidUnbondLock {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSuperfluidUnbondLock();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.lock_id = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  lock_id: u64;

  constructor(sender: string = "", lock_id: u64 = 0) {
    this.sender = sender;
    this.lock_id = lock_id;
  }
}

export function decodeMsgSuperfluidUnbondLock(a: Uint8Array): MsgSuperfluidUnbondLock {
  return Protobuf.decode<MsgSuperfluidUnbondLock>(a, MsgSuperfluidUnbondLock.decode);
}

@unmanaged
export class MsgSuperfluidUnbondLockResponse {
  static encode(message: MsgSuperfluidUnbondLockResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgSuperfluidUnbondLockResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSuperfluidUnbondLockResponse();

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

export function decodeMsgSuperfluidUnbondLockResponse(a: Uint8Array): MsgSuperfluidUnbondLockResponse {
  return Protobuf.decode<MsgSuperfluidUnbondLockResponse>(a, MsgSuperfluidUnbondLockResponse.decode);
}

export class MsgLockAndSuperfluidDelegate {
  static encode(message: MsgLockAndSuperfluidDelegate, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    const coins = message.coins;
    for (let i = 0; i < coins.length; ++i) {
      writer.uint32(18);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(coins[i], writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.val_addr);
  }

  static decode(reader: Reader, length: i32): MsgLockAndSuperfluidDelegate {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgLockAndSuperfluidDelegate();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.coins.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.val_addr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  coins: Array<cosmos.base.v1beta1.Coin>;
  val_addr: string;

  constructor(sender: string = "", coins: Array<cosmos.base.v1beta1.Coin> = [], val_addr: string = "") {
    this.sender = sender;
    this.coins = coins;
    this.val_addr = val_addr;
  }
}

export function decodeMsgLockAndSuperfluidDelegate(a: Uint8Array): MsgLockAndSuperfluidDelegate {
  return Protobuf.decode<MsgLockAndSuperfluidDelegate>(a, MsgLockAndSuperfluidDelegate.decode);
}

@unmanaged
export class MsgLockAndSuperfluidDelegateResponse {
  static encode(message: MsgLockAndSuperfluidDelegateResponse, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.ID);
  }

  static decode(reader: Reader, length: i32): MsgLockAndSuperfluidDelegateResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgLockAndSuperfluidDelegateResponse();

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

export function decodeMsgLockAndSuperfluidDelegateResponse(a: Uint8Array): MsgLockAndSuperfluidDelegateResponse {
  return Protobuf.decode<MsgLockAndSuperfluidDelegateResponse>(a, MsgLockAndSuperfluidDelegateResponse.decode);
}
