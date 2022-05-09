import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../../google";

export class Plan {
  static encode(message: Plan, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.name);

    const time = message.time;
    if (time !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Timestamp.encode(time, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int64(message.height);

    writer.uint32(34);
    writer.string(message.info);

    const upgraded_client_state = message.upgraded_client_state;
    if (upgraded_client_state !== null) {
      writer.uint32(42);
      writer.fork();
      google.protobuf.Any.encode(upgraded_client_state, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Plan {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Plan();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.time = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = reader.int64();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.upgraded_client_state = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  name: string;
  time: google.protobuf.Timestamp | null;
  height: i64;
  info: string;
  upgraded_client_state: google.protobuf.Any | null;

  constructor(
    name: string = "",
    time: google.protobuf.Timestamp | null = null,
    height: i64 = 0,
    info: string = "",
    upgraded_client_state: google.protobuf.Any | null = null
  ) {
    this.name = name;
    this.time = time;
    this.height = height;
    this.info = info;
    this.upgraded_client_state = upgraded_client_state;
  }
}

export function decodePlan(a: Uint8Array): Plan {
  return Protobuf.decode<Plan>(a, Plan.decode);
}

export class SoftwareUpgradeProposal {
  static encode(message: SoftwareUpgradeProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    const plan = message.plan;
    if (plan !== null) {
      writer.uint32(26);
      writer.fork();
      Plan.encode(plan, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SoftwareUpgradeProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SoftwareUpgradeProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  plan: Plan | null;

  constructor(title: string = "", description: string = "", plan: Plan | null = null) {
    this.title = title;
    this.description = description;
    this.plan = plan;
  }
}

export function decodeSoftwareUpgradeProposal(a: Uint8Array): SoftwareUpgradeProposal {
  return Protobuf.decode<SoftwareUpgradeProposal>(a, SoftwareUpgradeProposal.decode);
}

export class CancelSoftwareUpgradeProposal {
  static encode(message: CancelSoftwareUpgradeProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);
  }

  static decode(reader: Reader, length: i32): CancelSoftwareUpgradeProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CancelSoftwareUpgradeProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;

  constructor(title: string = "", description: string = "") {
    this.title = title;
    this.description = description;
  }
}

export function decodeCancelSoftwareUpgradeProposal(a: Uint8Array): CancelSoftwareUpgradeProposal {
  return Protobuf.decode<CancelSoftwareUpgradeProposal>(a, CancelSoftwareUpgradeProposal.decode);
}

export class ModuleVersion {
  static encode(message: ModuleVersion, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.name);

    writer.uint32(16);
    writer.uint64(message.version);
  }

  static decode(reader: Reader, length: i32): ModuleVersion {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ModuleVersion();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.version = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  name: string;
  version: u64;

  constructor(name: string = "", version: u64 = 0) {
    this.name = name;
    this.version = version;
  }
}

export function decodeModuleVersion(a: Uint8Array): ModuleVersion {
  return Protobuf.decode<ModuleVersion>(a, ModuleVersion.decode);
}
