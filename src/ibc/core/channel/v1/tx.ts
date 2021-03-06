// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.2
// 	 protoc        v3.20.1
// source: ibc/core/channel/v1/tx.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { Channel, Packet } from "./channel";
import { client } from "../../client";

export class MsgChannelOpenInit {
  static encode(message: MsgChannelOpenInit, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.port_id);

    const channel_ = message.channel;
    if (channel_ !== null) {
      writer.uint32(18);
      writer.fork();
      Channel.encode(channel_, writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelOpenInit {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenInit();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  port_id: string;
  channel: Channel | null;
  signer: string;

  constructor(port_id: string = "", channel: Channel | null = null, signer: string = "") {
    this.port_id = port_id;
    this.channel = channel;
    this.signer = signer;
  }
}

export function decodeMsgChannelOpenInit(a: Uint8Array): MsgChannelOpenInit {
  return Protobuf.decode<MsgChannelOpenInit>(a, MsgChannelOpenInit.decode);
}

export class MsgChannelOpenInitResponse {
  static encode(message: MsgChannelOpenInitResponse, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.channel_id);
  }

  static decode(reader: Reader, length: i32): MsgChannelOpenInitResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenInitResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  channel_id: string;

  constructor(channel_id: string = "") {
    this.channel_id = channel_id;
  }
}

export function decodeMsgChannelOpenInitResponse(a: Uint8Array): MsgChannelOpenInitResponse {
  return Protobuf.decode<MsgChannelOpenInitResponse>(a, MsgChannelOpenInitResponse.decode);
}

export class MsgChannelOpenTry {
  static encode(message: MsgChannelOpenTry, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.port_id);

    writer.uint32(18);
    writer.string(message.previous_channel_id);

    const channel_ = message.channel;
    if (channel_ !== null) {
      writer.uint32(26);
      writer.fork();
      Channel.encode(channel_, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.counterparty_version);

    writer.uint32(42);
    writer.bytes(message.proof_init);

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(50);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(58);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelOpenTry {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenTry();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.previous_channel_id = reader.string();
          break;

        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;

        case 4:
          message.counterparty_version = reader.string();
          break;

        case 5:
          message.proof_init = reader.bytes();
          break;

        case 6:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 7:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  port_id: string;
  previous_channel_id: string;
  channel: Channel | null;
  counterparty_version: string;
  proof_init: Uint8Array;
  proof_height: client.v1.Height | null;
  signer: string;

  constructor(
    port_id: string = "",
    previous_channel_id: string = "",
    channel: Channel | null = null,
    counterparty_version: string = "",
    proof_init: Uint8Array = new Uint8Array(0),
    proof_height: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.port_id = port_id;
    this.previous_channel_id = previous_channel_id;
    this.channel = channel;
    this.counterparty_version = counterparty_version;
    this.proof_init = proof_init;
    this.proof_height = proof_height;
    this.signer = signer;
  }
}

export function decodeMsgChannelOpenTry(a: Uint8Array): MsgChannelOpenTry {
  return Protobuf.decode<MsgChannelOpenTry>(a, MsgChannelOpenTry.decode);
}

@unmanaged
export class MsgChannelOpenTryResponse {
  static encode(message: MsgChannelOpenTryResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelOpenTryResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenTryResponse();

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

export function decodeMsgChannelOpenTryResponse(a: Uint8Array): MsgChannelOpenTryResponse {
  return Protobuf.decode<MsgChannelOpenTryResponse>(a, MsgChannelOpenTryResponse.decode);
}

export class MsgChannelOpenAck {
  static encode(message: MsgChannelOpenAck, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.port_id);

    writer.uint32(18);
    writer.string(message.channel_id);

    writer.uint32(26);
    writer.string(message.counterparty_channel_id);

    writer.uint32(34);
    writer.string(message.counterparty_version);

    writer.uint32(42);
    writer.bytes(message.proof_try);

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(50);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(58);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelOpenAck {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenAck();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.counterparty_channel_id = reader.string();
          break;

        case 4:
          message.counterparty_version = reader.string();
          break;

        case 5:
          message.proof_try = reader.bytes();
          break;

        case 6:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 7:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  port_id: string;
  channel_id: string;
  counterparty_channel_id: string;
  counterparty_version: string;
  proof_try: Uint8Array;
  proof_height: client.v1.Height | null;
  signer: string;

  constructor(
    port_id: string = "",
    channel_id: string = "",
    counterparty_channel_id: string = "",
    counterparty_version: string = "",
    proof_try: Uint8Array = new Uint8Array(0),
    proof_height: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.port_id = port_id;
    this.channel_id = channel_id;
    this.counterparty_channel_id = counterparty_channel_id;
    this.counterparty_version = counterparty_version;
    this.proof_try = proof_try;
    this.proof_height = proof_height;
    this.signer = signer;
  }
}

export function decodeMsgChannelOpenAck(a: Uint8Array): MsgChannelOpenAck {
  return Protobuf.decode<MsgChannelOpenAck>(a, MsgChannelOpenAck.decode);
}

@unmanaged
export class MsgChannelOpenAckResponse {
  static encode(message: MsgChannelOpenAckResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelOpenAckResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenAckResponse();

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

export function decodeMsgChannelOpenAckResponse(a: Uint8Array): MsgChannelOpenAckResponse {
  return Protobuf.decode<MsgChannelOpenAckResponse>(a, MsgChannelOpenAckResponse.decode);
}

export class MsgChannelOpenConfirm {
  static encode(message: MsgChannelOpenConfirm, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.port_id);

    writer.uint32(18);
    writer.string(message.channel_id);

    writer.uint32(26);
    writer.bytes(message.proof_ack);

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(34);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelOpenConfirm {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenConfirm();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.proof_ack = reader.bytes();
          break;

        case 4:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  port_id: string;
  channel_id: string;
  proof_ack: Uint8Array;
  proof_height: client.v1.Height | null;
  signer: string;

  constructor(
    port_id: string = "",
    channel_id: string = "",
    proof_ack: Uint8Array = new Uint8Array(0),
    proof_height: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.port_id = port_id;
    this.channel_id = channel_id;
    this.proof_ack = proof_ack;
    this.proof_height = proof_height;
    this.signer = signer;
  }
}

export function decodeMsgChannelOpenConfirm(a: Uint8Array): MsgChannelOpenConfirm {
  return Protobuf.decode<MsgChannelOpenConfirm>(a, MsgChannelOpenConfirm.decode);
}

@unmanaged
export class MsgChannelOpenConfirmResponse {
  static encode(message: MsgChannelOpenConfirmResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelOpenConfirmResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenConfirmResponse();

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

export function decodeMsgChannelOpenConfirmResponse(a: Uint8Array): MsgChannelOpenConfirmResponse {
  return Protobuf.decode<MsgChannelOpenConfirmResponse>(a, MsgChannelOpenConfirmResponse.decode);
}

export class MsgChannelCloseInit {
  static encode(message: MsgChannelCloseInit, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.port_id);

    writer.uint32(18);
    writer.string(message.channel_id);

    writer.uint32(26);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelCloseInit {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelCloseInit();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  port_id: string;
  channel_id: string;
  signer: string;

  constructor(port_id: string = "", channel_id: string = "", signer: string = "") {
    this.port_id = port_id;
    this.channel_id = channel_id;
    this.signer = signer;
  }
}

export function decodeMsgChannelCloseInit(a: Uint8Array): MsgChannelCloseInit {
  return Protobuf.decode<MsgChannelCloseInit>(a, MsgChannelCloseInit.decode);
}

@unmanaged
export class MsgChannelCloseInitResponse {
  static encode(message: MsgChannelCloseInitResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelCloseInitResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelCloseInitResponse();

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

export function decodeMsgChannelCloseInitResponse(a: Uint8Array): MsgChannelCloseInitResponse {
  return Protobuf.decode<MsgChannelCloseInitResponse>(a, MsgChannelCloseInitResponse.decode);
}

export class MsgChannelCloseConfirm {
  static encode(message: MsgChannelCloseConfirm, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.port_id);

    writer.uint32(18);
    writer.string(message.channel_id);

    writer.uint32(26);
    writer.bytes(message.proof_init);

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(34);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelCloseConfirm {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelCloseConfirm();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.proof_init = reader.bytes();
          break;

        case 4:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  port_id: string;
  channel_id: string;
  proof_init: Uint8Array;
  proof_height: client.v1.Height | null;
  signer: string;

  constructor(
    port_id: string = "",
    channel_id: string = "",
    proof_init: Uint8Array = new Uint8Array(0),
    proof_height: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.port_id = port_id;
    this.channel_id = channel_id;
    this.proof_init = proof_init;
    this.proof_height = proof_height;
    this.signer = signer;
  }
}

export function decodeMsgChannelCloseConfirm(a: Uint8Array): MsgChannelCloseConfirm {
  return Protobuf.decode<MsgChannelCloseConfirm>(a, MsgChannelCloseConfirm.decode);
}

@unmanaged
export class MsgChannelCloseConfirmResponse {
  static encode(message: MsgChannelCloseConfirmResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelCloseConfirmResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelCloseConfirmResponse();

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

export function decodeMsgChannelCloseConfirmResponse(a: Uint8Array): MsgChannelCloseConfirmResponse {
  return Protobuf.decode<MsgChannelCloseConfirmResponse>(a, MsgChannelCloseConfirmResponse.decode);
}

export class MsgRecvPacket {
  static encode(message: MsgRecvPacket, writer: Writer): void {
    const packet_ = message.packet;
    if (packet_ !== null) {
      writer.uint32(10);
      writer.fork();
      Packet.encode(packet_, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.proof_commitment);

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(26);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgRecvPacket {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgRecvPacket();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof_commitment = reader.bytes();
          break;

        case 3:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  packet: Packet | null;
  proof_commitment: Uint8Array;
  proof_height: client.v1.Height | null;
  signer: string;

  constructor(
    packet: Packet | null = null,
    proof_commitment: Uint8Array = new Uint8Array(0),
    proof_height: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.packet = packet;
    this.proof_commitment = proof_commitment;
    this.proof_height = proof_height;
    this.signer = signer;
  }
}

export function decodeMsgRecvPacket(a: Uint8Array): MsgRecvPacket {
  return Protobuf.decode<MsgRecvPacket>(a, MsgRecvPacket.decode);
}

@unmanaged
export class MsgRecvPacketResponse {
  static encode(message: MsgRecvPacketResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): MsgRecvPacketResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgRecvPacketResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ResponseResultType;

  constructor(result: ResponseResultType = 0) {
    this.result = result;
  }
}

export function decodeMsgRecvPacketResponse(a: Uint8Array): MsgRecvPacketResponse {
  return Protobuf.decode<MsgRecvPacketResponse>(a, MsgRecvPacketResponse.decode);
}

export class MsgTimeout {
  static encode(message: MsgTimeout, writer: Writer): void {
    const packet_ = message.packet;
    if (packet_ !== null) {
      writer.uint32(10);
      writer.fork();
      Packet.encode(packet_, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.proof_unreceived);

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(26);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(32);
    writer.uint64(message.next_sequence_recv);

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgTimeout {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTimeout();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof_unreceived = reader.bytes();
          break;

        case 3:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.next_sequence_recv = reader.uint64();
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  packet: Packet | null;
  proof_unreceived: Uint8Array;
  proof_height: client.v1.Height | null;
  next_sequence_recv: u64;
  signer: string;

  constructor(
    packet: Packet | null = null,
    proof_unreceived: Uint8Array = new Uint8Array(0),
    proof_height: client.v1.Height | null = null,
    next_sequence_recv: u64 = 0,
    signer: string = ""
  ) {
    this.packet = packet;
    this.proof_unreceived = proof_unreceived;
    this.proof_height = proof_height;
    this.next_sequence_recv = next_sequence_recv;
    this.signer = signer;
  }
}

export function decodeMsgTimeout(a: Uint8Array): MsgTimeout {
  return Protobuf.decode<MsgTimeout>(a, MsgTimeout.decode);
}

@unmanaged
export class MsgTimeoutResponse {
  static encode(message: MsgTimeoutResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): MsgTimeoutResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTimeoutResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ResponseResultType;

  constructor(result: ResponseResultType = 0) {
    this.result = result;
  }
}

export function decodeMsgTimeoutResponse(a: Uint8Array): MsgTimeoutResponse {
  return Protobuf.decode<MsgTimeoutResponse>(a, MsgTimeoutResponse.decode);
}

export class MsgTimeoutOnClose {
  static encode(message: MsgTimeoutOnClose, writer: Writer): void {
    const packet_ = message.packet;
    if (packet_ !== null) {
      writer.uint32(10);
      writer.fork();
      Packet.encode(packet_, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.proof_unreceived);

    writer.uint32(26);
    writer.bytes(message.proof_close);

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(34);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(40);
    writer.uint64(message.next_sequence_recv);

    writer.uint32(50);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgTimeoutOnClose {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTimeoutOnClose();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof_unreceived = reader.bytes();
          break;

        case 3:
          message.proof_close = reader.bytes();
          break;

        case 4:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.next_sequence_recv = reader.uint64();
          break;

        case 6:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  packet: Packet | null;
  proof_unreceived: Uint8Array;
  proof_close: Uint8Array;
  proof_height: client.v1.Height | null;
  next_sequence_recv: u64;
  signer: string;

  constructor(
    packet: Packet | null = null,
    proof_unreceived: Uint8Array = new Uint8Array(0),
    proof_close: Uint8Array = new Uint8Array(0),
    proof_height: client.v1.Height | null = null,
    next_sequence_recv: u64 = 0,
    signer: string = ""
  ) {
    this.packet = packet;
    this.proof_unreceived = proof_unreceived;
    this.proof_close = proof_close;
    this.proof_height = proof_height;
    this.next_sequence_recv = next_sequence_recv;
    this.signer = signer;
  }
}

export function decodeMsgTimeoutOnClose(a: Uint8Array): MsgTimeoutOnClose {
  return Protobuf.decode<MsgTimeoutOnClose>(a, MsgTimeoutOnClose.decode);
}

@unmanaged
export class MsgTimeoutOnCloseResponse {
  static encode(message: MsgTimeoutOnCloseResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): MsgTimeoutOnCloseResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTimeoutOnCloseResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ResponseResultType;

  constructor(result: ResponseResultType = 0) {
    this.result = result;
  }
}

export function decodeMsgTimeoutOnCloseResponse(a: Uint8Array): MsgTimeoutOnCloseResponse {
  return Protobuf.decode<MsgTimeoutOnCloseResponse>(a, MsgTimeoutOnCloseResponse.decode);
}

export class MsgAcknowledgement {
  static encode(message: MsgAcknowledgement, writer: Writer): void {
    const packet_ = message.packet;
    if (packet_ !== null) {
      writer.uint32(10);
      writer.fork();
      Packet.encode(packet_, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.acknowledgement);

    writer.uint32(26);
    writer.bytes(message.proof_acked);

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(34);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgAcknowledgement {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgAcknowledgement();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.acknowledgement = reader.bytes();
          break;

        case 3:
          message.proof_acked = reader.bytes();
          break;

        case 4:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  packet: Packet | null;
  acknowledgement: Uint8Array;
  proof_acked: Uint8Array;
  proof_height: client.v1.Height | null;
  signer: string;

  constructor(
    packet: Packet | null = null,
    acknowledgement: Uint8Array = new Uint8Array(0),
    proof_acked: Uint8Array = new Uint8Array(0),
    proof_height: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.packet = packet;
    this.acknowledgement = acknowledgement;
    this.proof_acked = proof_acked;
    this.proof_height = proof_height;
    this.signer = signer;
  }
}

export function decodeMsgAcknowledgement(a: Uint8Array): MsgAcknowledgement {
  return Protobuf.decode<MsgAcknowledgement>(a, MsgAcknowledgement.decode);
}

@unmanaged
export class MsgAcknowledgementResponse {
  static encode(message: MsgAcknowledgementResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): MsgAcknowledgementResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgAcknowledgementResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ResponseResultType;

  constructor(result: ResponseResultType = 0) {
    this.result = result;
  }
}

export function decodeMsgAcknowledgementResponse(a: Uint8Array): MsgAcknowledgementResponse {
  return Protobuf.decode<MsgAcknowledgementResponse>(a, MsgAcknowledgementResponse.decode);
}

export enum ResponseResultType {
  RESPONSE_RESULT_UNSPECIFIED = 0,
  RESPONSE_RESULT_NOOP = 1,
  RESPONSE_RESULT_SUCCESS = 2,
}
