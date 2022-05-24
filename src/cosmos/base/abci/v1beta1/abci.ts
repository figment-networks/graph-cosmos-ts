import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../../../google";
import { tendermint } from "../../../../tendermint";

export class TxResponse {
  static encode(message: TxResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.height);

    writer.uint32(18);
    writer.string(message.txhash);

    writer.uint32(26);
    writer.string(message.codespace);

    writer.uint32(32);
    writer.uint32(message.code);

    writer.uint32(42);
    writer.string(message.data);

    writer.uint32(50);
    writer.string(message.raw_log);

    const logs_ = message.logs;
    for (let i = 0; i < logs_.length; ++i) {
      writer.uint32(58);
      writer.fork();
      ABCIMessageLog.encode(logs_[i], writer);
      writer.ldelim();
    }

    writer.uint32(66);
    writer.string(message.info);

    writer.uint32(72);
    writer.int64(message.gas_wanted);

    writer.uint32(80);
    writer.int64(message.gas_used);

    const tx_ = message.tx;
    if (tx_ !== null) {
      writer.uint32(90);
      writer.fork();
      google.protobuf.Any.encode(tx_, writer);
      writer.ldelim();
    }

    writer.uint32(98);
    writer.string(message.timestamp);

    const events_ = message.events;
    for (let i = 0; i < events_.length; ++i) {
      writer.uint32(106);
      writer.fork();
      tendermint.abci.Event.encode(events_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): TxResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TxResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;

        case 2:
          message.txhash = reader.string();
          break;

        case 3:
          message.codespace = reader.string();
          break;

        case 4:
          message.code = reader.uint32();
          break;

        case 5:
          message.data = reader.string();
          break;

        case 6:
          message.raw_log = reader.string();
          break;

        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;

        case 8:
          message.info = reader.string();
          break;

        case 9:
          message.gas_wanted = reader.int64();
          break;

        case 10:
          message.gas_used = reader.int64();
          break;

        case 11:
          message.tx = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 12:
          message.timestamp = reader.string();
          break;

        case 13:
          message.events.push(tendermint.abci.Event.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  height: i64;
  txhash: string;
  codespace: string;
  code: u32;
  data: string;
  raw_log: string;
  logs: Array<ABCIMessageLog>;
  info: string;
  gas_wanted: i64;
  gas_used: i64;
  tx: google.protobuf.Any | null;
  timestamp: string;
  events: Array<tendermint.abci.Event>;

  constructor(
    height: i64 = 0,
    txhash: string = "",
    codespace: string = "",
    code: u32 = 0,
    data: string = "",
    raw_log: string = "",
    logs: Array<ABCIMessageLog> = [],
    info: string = "",
    gas_wanted: i64 = 0,
    gas_used: i64 = 0,
    tx: google.protobuf.Any | null = null,
    timestamp: string = "",
    events: Array<tendermint.abci.Event> = []
  ) {
    this.height = height;
    this.txhash = txhash;
    this.codespace = codespace;
    this.code = code;
    this.data = data;
    this.raw_log = raw_log;
    this.logs = logs;
    this.info = info;
    this.gas_wanted = gas_wanted;
    this.gas_used = gas_used;
    this.tx = tx;
    this.timestamp = timestamp;
    this.events = events;
  }
}

export function decodeTxResponse(a: Uint8Array): TxResponse {
  return Protobuf.decode<TxResponse>(a, TxResponse.decode);
}

export class ABCIMessageLog {
  static encode(message: ABCIMessageLog, writer: Writer): void {
    writer.uint32(8);
    writer.uint32(message.msg_index);

    writer.uint32(18);
    writer.string(message.log);

    const events_ = message.events;
    for (let i = 0; i < events_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      StringEvent.encode(events_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ABCIMessageLog {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ABCIMessageLog();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_index = reader.uint32();
          break;

        case 2:
          message.log = reader.string();
          break;

        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  msg_index: u32;
  log: string;
  events: Array<StringEvent>;

  constructor(msg_index: u32 = 0, log: string = "", events: Array<StringEvent> = []) {
    this.msg_index = msg_index;
    this.log = log;
    this.events = events;
  }
}

export function decodeABCIMessageLog(a: Uint8Array): ABCIMessageLog {
  return Protobuf.decode<ABCIMessageLog>(a, ABCIMessageLog.decode);
}

export class StringEvent {
  static encode(message: StringEvent, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.type);

    const attributes_ = message.attributes;
    for (let i = 0; i < attributes_.length; ++i) {
      writer.uint32(18);
      writer.fork();
      Attribute.encode(attributes_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): StringEvent {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new StringEvent();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  type: string;
  attributes: Array<Attribute>;

  constructor(type: string = "", attributes: Array<Attribute> = []) {
    this.type = type;
    this.attributes = attributes;
  }
}

export function decodeStringEvent(a: Uint8Array): StringEvent {
  return Protobuf.decode<StringEvent>(a, StringEvent.decode);
}

export class Attribute {
  static encode(message: Attribute, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.key);

    writer.uint32(18);
    writer.string(message.value);
  }

  static decode(reader: Reader, length: i32): Attribute {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Attribute();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: string;
  value: string;

  constructor(key: string = "", value: string = "") {
    this.key = key;
    this.value = value;
  }
}

export function decodeAttribute(a: Uint8Array): Attribute {
  return Protobuf.decode<Attribute>(a, Attribute.decode);
}

@unmanaged
export class GasInfo {
  static encode(message: GasInfo, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.gas_wanted);

    writer.uint32(16);
    writer.uint64(message.gas_used);
  }

  static decode(reader: Reader, length: i32): GasInfo {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GasInfo();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas_wanted = reader.uint64();
          break;

        case 2:
          message.gas_used = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  gas_wanted: u64;
  gas_used: u64;

  constructor(gas_wanted: u64 = 0, gas_used: u64 = 0) {
    this.gas_wanted = gas_wanted;
    this.gas_used = gas_used;
  }
}

export function decodeGasInfo(a: Uint8Array): GasInfo {
  return Protobuf.decode<GasInfo>(a, GasInfo.decode);
}

export class Result {
  static encode(message: Result, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);

    writer.uint32(18);
    writer.string(message.log);

    const events_ = message.events;
    for (let i = 0; i < events_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      tendermint.abci.Event.encode(events_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Result {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Result();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.log = reader.string();
          break;

        case 3:
          message.events.push(tendermint.abci.Event.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  data: Uint8Array;
  log: string;
  events: Array<tendermint.abci.Event>;

  constructor(data: Uint8Array = new Uint8Array(0), log: string = "", events: Array<tendermint.abci.Event> = []) {
    this.data = data;
    this.log = log;
    this.events = events;
  }
}

export function decodeResult(a: Uint8Array): Result {
  return Protobuf.decode<Result>(a, Result.decode);
}

export class SimulationResponse {
  static encode(message: SimulationResponse, writer: Writer): void {
    const gas_info_ = message.gas_info;
    if (gas_info_ !== null) {
      writer.uint32(10);
      writer.fork();
      GasInfo.encode(gas_info_, writer);
      writer.ldelim();
    }

    const result_ = message.result;
    if (result_ !== null) {
      writer.uint32(18);
      writer.fork();
      Result.encode(result_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SimulationResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SimulationResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas_info = GasInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  gas_info: GasInfo | null;
  result: Result | null;

  constructor(gas_info: GasInfo | null = null, result: Result | null = null) {
    this.gas_info = gas_info;
    this.result = result;
  }
}

export function decodeSimulationResponse(a: Uint8Array): SimulationResponse {
  return Protobuf.decode<SimulationResponse>(a, SimulationResponse.decode);
}

export class MsgData {
  static encode(message: MsgData, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.msg_type);

    writer.uint32(18);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): MsgData {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgData();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg_type = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  msg_type: string;
  data: Uint8Array;

  constructor(msg_type: string = "", data: Uint8Array = new Uint8Array(0)) {
    this.msg_type = msg_type;
    this.data = data;
  }
}

export function decodeMsgData(a: Uint8Array): MsgData {
  return Protobuf.decode<MsgData>(a, MsgData.decode);
}

export class TxMsgData {
  static encode(message: TxMsgData, writer: Writer): void {
    const data_ = message.data;
    for (let i = 0; i < data_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      MsgData.encode(data_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): TxMsgData {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TxMsgData();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  data: Array<MsgData>;

  constructor(data: Array<MsgData> = []) {
    this.data = data;
  }
}

export function decodeTxMsgData(a: Uint8Array): TxMsgData {
  return Protobuf.decode<TxMsgData>(a, TxMsgData.decode);
}

export class SearchTxsResult {
  static encode(message: SearchTxsResult, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.total_count);

    writer.uint32(16);
    writer.uint64(message.count);

    writer.uint32(24);
    writer.uint64(message.page_number);

    writer.uint32(32);
    writer.uint64(message.page_total);

    writer.uint32(40);
    writer.uint64(message.limit);

    const txs_ = message.txs;
    for (let i = 0; i < txs_.length; ++i) {
      writer.uint32(50);
      writer.fork();
      TxResponse.encode(txs_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SearchTxsResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SearchTxsResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total_count = reader.uint64();
          break;

        case 2:
          message.count = reader.uint64();
          break;

        case 3:
          message.page_number = reader.uint64();
          break;

        case 4:
          message.page_total = reader.uint64();
          break;

        case 5:
          message.limit = reader.uint64();
          break;

        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  total_count: u64;
  count: u64;
  page_number: u64;
  page_total: u64;
  limit: u64;
  txs: Array<TxResponse>;

  constructor(
    total_count: u64 = 0,
    count: u64 = 0,
    page_number: u64 = 0,
    page_total: u64 = 0,
    limit: u64 = 0,
    txs: Array<TxResponse> = []
  ) {
    this.total_count = total_count;
    this.count = count;
    this.page_number = page_number;
    this.page_total = page_total;
    this.limit = limit;
    this.txs = txs;
  }
}

export function decodeSearchTxsResult(a: Uint8Array): SearchTxsResult {
  return Protobuf.decode<SearchTxsResult>(a, SearchTxsResult.decode);
}
