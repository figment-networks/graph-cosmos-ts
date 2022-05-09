import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../google";
import { cosmos } from "../../cosmos";

export class PeriodLock {
  static encode(message: PeriodLock, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.ID);

    writer.uint32(18);
    writer.string(message.owner);

    const duration = message.duration;
    if (duration !== null) {
      writer.uint32(26);
      writer.fork();
      google.protobuf.Duration.encode(duration, writer);
      writer.ldelim();
    }

    const end_time = message.end_time;
    if (end_time !== null) {
      writer.uint32(34);
      writer.fork();
      google.protobuf.Timestamp.encode(end_time, writer);
      writer.ldelim();
    }

    const coins = message.coins;
    for (let i = 0; i < coins.length; ++i) {
      writer.uint32(42);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(coins[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): PeriodLock {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PeriodLock();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.duration = google.protobuf.Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.end_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.coins.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  ID: u64;
  owner: string;
  duration: google.protobuf.Duration | null;
  end_time: google.protobuf.Timestamp | null;
  coins: Array<cosmos.base.v1beta1.Coin>;

  constructor(
    ID: u64 = 0,
    owner: string = "",
    duration: google.protobuf.Duration | null = null,
    end_time: google.protobuf.Timestamp | null = null,
    coins: Array<cosmos.base.v1beta1.Coin> = []
  ) {
    this.ID = ID;
    this.owner = owner;
    this.duration = duration;
    this.end_time = end_time;
    this.coins = coins;
  }
}

export function decodePeriodLock(a: Uint8Array): PeriodLock {
  return Protobuf.decode<PeriodLock>(a, PeriodLock.decode);
}

export class QueryCondition {
  static encode(message: QueryCondition, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.lock_query_type);

    writer.uint32(18);
    writer.string(message.denom);

    const duration = message.duration;
    if (duration !== null) {
      writer.uint32(26);
      writer.fork();
      google.protobuf.Duration.encode(duration, writer);
      writer.ldelim();
    }

    const timestamp = message.timestamp;
    if (timestamp !== null) {
      writer.uint32(34);
      writer.fork();
      google.protobuf.Timestamp.encode(timestamp, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryCondition {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryCondition();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lock_query_type = reader.int32();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.duration = google.protobuf.Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.timestamp = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  lock_query_type: LockQueryType;
  denom: string;
  duration: google.protobuf.Duration | null;
  timestamp: google.protobuf.Timestamp | null;

  constructor(
    lock_query_type: LockQueryType = 0,
    denom: string = "",
    duration: google.protobuf.Duration | null = null,
    timestamp: google.protobuf.Timestamp | null = null
  ) {
    this.lock_query_type = lock_query_type;
    this.denom = denom;
    this.duration = duration;
    this.timestamp = timestamp;
  }
}

export function decodeQueryCondition(a: Uint8Array): QueryCondition {
  return Protobuf.decode<QueryCondition>(a, QueryCondition.decode);
}

export class SyntheticLock {
  static encode(message: SyntheticLock, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.underlying_lock_id);

    writer.uint32(18);
    writer.string(message.synth_denom);

    const end_time = message.end_time;
    if (end_time !== null) {
      writer.uint32(26);
      writer.fork();
      google.protobuf.Timestamp.encode(end_time, writer);
      writer.ldelim();
    }

    const duration = message.duration;
    if (duration !== null) {
      writer.uint32(34);
      writer.fork();
      google.protobuf.Duration.encode(duration, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SyntheticLock {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SyntheticLock();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.underlying_lock_id = reader.uint64();
          break;

        case 2:
          message.synth_denom = reader.string();
          break;

        case 3:
          message.end_time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.duration = google.protobuf.Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  underlying_lock_id: u64;
  synth_denom: string;
  end_time: google.protobuf.Timestamp | null;
  duration: google.protobuf.Duration | null;

  constructor(
    underlying_lock_id: u64 = 0,
    synth_denom: string = "",
    end_time: google.protobuf.Timestamp | null = null,
    duration: google.protobuf.Duration | null = null
  ) {
    this.underlying_lock_id = underlying_lock_id;
    this.synth_denom = synth_denom;
    this.end_time = end_time;
    this.duration = duration;
  }
}

export function decodeSyntheticLock(a: Uint8Array): SyntheticLock {
  return Protobuf.decode<SyntheticLock>(a, SyntheticLock.decode);
}

export enum LockQueryType {
  ByDuration = 0,
  ByTime = 1,
}
