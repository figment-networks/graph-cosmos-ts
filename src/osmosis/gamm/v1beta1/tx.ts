import { Writer, Reader, Protobuf } from "as-proto";
import { cosmos } from "../../../cosmos";

export class MsgJoinPool {
  static encode(message: MsgJoinPool, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.poolId);

    writer.uint32(26);
    writer.string(message.shareOutAmount);

    const tokenInMaxs = message.tokenInMaxs;
    for (let i = 0; i < tokenInMaxs.length; ++i) {
      writer.uint32(34);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(tokenInMaxs[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgJoinPool {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgJoinPool();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = reader.uint64();
          break;

        case 3:
          message.shareOutAmount = reader.string();
          break;

        case 4:
          message.tokenInMaxs.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  poolId: u64;
  shareOutAmount: string;
  tokenInMaxs: Array<cosmos.base.v1beta1.Coin>;

  constructor(
    sender: string = "",
    poolId: u64 = 0,
    shareOutAmount: string = "",
    tokenInMaxs: Array<cosmos.base.v1beta1.Coin> = []
  ) {
    this.sender = sender;
    this.poolId = poolId;
    this.shareOutAmount = shareOutAmount;
    this.tokenInMaxs = tokenInMaxs;
  }
}

export function decodeMsgJoinPool(a: Uint8Array): MsgJoinPool {
  return Protobuf.decode<MsgJoinPool>(a, MsgJoinPool.decode);
}

@unmanaged
export class MsgJoinPoolResponse {
  static encode(message: MsgJoinPoolResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgJoinPoolResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgJoinPoolResponse();

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

export function decodeMsgJoinPoolResponse(a: Uint8Array): MsgJoinPoolResponse {
  return Protobuf.decode<MsgJoinPoolResponse>(a, MsgJoinPoolResponse.decode);
}

export class MsgExitPool {
  static encode(message: MsgExitPool, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.poolId);

    writer.uint32(26);
    writer.string(message.shareInAmount);

    const tokenOutMins = message.tokenOutMins;
    for (let i = 0; i < tokenOutMins.length; ++i) {
      writer.uint32(34);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(tokenOutMins[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgExitPool {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExitPool();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = reader.uint64();
          break;

        case 3:
          message.shareInAmount = reader.string();
          break;

        case 4:
          message.tokenOutMins.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  poolId: u64;
  shareInAmount: string;
  tokenOutMins: Array<cosmos.base.v1beta1.Coin>;

  constructor(
    sender: string = "",
    poolId: u64 = 0,
    shareInAmount: string = "",
    tokenOutMins: Array<cosmos.base.v1beta1.Coin> = []
  ) {
    this.sender = sender;
    this.poolId = poolId;
    this.shareInAmount = shareInAmount;
    this.tokenOutMins = tokenOutMins;
  }
}

export function decodeMsgExitPool(a: Uint8Array): MsgExitPool {
  return Protobuf.decode<MsgExitPool>(a, MsgExitPool.decode);
}

@unmanaged
export class MsgExitPoolResponse {
  static encode(message: MsgExitPoolResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgExitPoolResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExitPoolResponse();

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

export function decodeMsgExitPoolResponse(a: Uint8Array): MsgExitPoolResponse {
  return Protobuf.decode<MsgExitPoolResponse>(a, MsgExitPoolResponse.decode);
}

export class SwapAmountInRoute {
  static encode(message: SwapAmountInRoute, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.poolId);

    writer.uint32(18);
    writer.string(message.tokenOutDenom);
  }

  static decode(reader: Reader, length: i32): SwapAmountInRoute {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SwapAmountInRoute();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;

        case 2:
          message.tokenOutDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  poolId: u64;
  tokenOutDenom: string;

  constructor(poolId: u64 = 0, tokenOutDenom: string = "") {
    this.poolId = poolId;
    this.tokenOutDenom = tokenOutDenom;
  }
}

export function decodeSwapAmountInRoute(a: Uint8Array): SwapAmountInRoute {
  return Protobuf.decode<SwapAmountInRoute>(a, SwapAmountInRoute.decode);
}

export class MsgSwapExactAmountIn {
  static encode(message: MsgSwapExactAmountIn, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    const routes = message.routes;
    for (let i = 0; i < routes.length; ++i) {
      writer.uint32(18);
      writer.fork();
      SwapAmountInRoute.encode(routes[i], writer);
      writer.ldelim();
    }

    const tokenIn = message.tokenIn;
    if (tokenIn !== null) {
      writer.uint32(26);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(tokenIn, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.tokenOutMinAmount);
  }

  static decode(reader: Reader, length: i32): MsgSwapExactAmountIn {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSwapExactAmountIn();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;

        case 3:
          message.tokenIn = cosmos.base.v1beta1.Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.tokenOutMinAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  routes: Array<SwapAmountInRoute>;
  tokenIn: cosmos.base.v1beta1.Coin | null;
  tokenOutMinAmount: string;

  constructor(
    sender: string = "",
    routes: Array<SwapAmountInRoute> = [],
    tokenIn: cosmos.base.v1beta1.Coin | null = null,
    tokenOutMinAmount: string = ""
  ) {
    this.sender = sender;
    this.routes = routes;
    this.tokenIn = tokenIn;
    this.tokenOutMinAmount = tokenOutMinAmount;
  }
}

export function decodeMsgSwapExactAmountIn(a: Uint8Array): MsgSwapExactAmountIn {
  return Protobuf.decode<MsgSwapExactAmountIn>(a, MsgSwapExactAmountIn.decode);
}

@unmanaged
export class MsgSwapExactAmountInResponse {
  static encode(message: MsgSwapExactAmountInResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgSwapExactAmountInResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSwapExactAmountInResponse();

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

export function decodeMsgSwapExactAmountInResponse(a: Uint8Array): MsgSwapExactAmountInResponse {
  return Protobuf.decode<MsgSwapExactAmountInResponse>(a, MsgSwapExactAmountInResponse.decode);
}

export class SwapAmountOutRoute {
  static encode(message: SwapAmountOutRoute, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.poolId);

    writer.uint32(18);
    writer.string(message.tokenInDenom);
  }

  static decode(reader: Reader, length: i32): SwapAmountOutRoute {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SwapAmountOutRoute();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;

        case 2:
          message.tokenInDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  poolId: u64;
  tokenInDenom: string;

  constructor(poolId: u64 = 0, tokenInDenom: string = "") {
    this.poolId = poolId;
    this.tokenInDenom = tokenInDenom;
  }
}

export function decodeSwapAmountOutRoute(a: Uint8Array): SwapAmountOutRoute {
  return Protobuf.decode<SwapAmountOutRoute>(a, SwapAmountOutRoute.decode);
}

export class MsgSwapExactAmountOut {
  static encode(message: MsgSwapExactAmountOut, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    const routes = message.routes;
    for (let i = 0; i < routes.length; ++i) {
      writer.uint32(18);
      writer.fork();
      SwapAmountOutRoute.encode(routes[i], writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.tokenInMaxAmount);

    const tokenOut = message.tokenOut;
    if (tokenOut !== null) {
      writer.uint32(34);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(tokenOut, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgSwapExactAmountOut {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSwapExactAmountOut();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;

        case 3:
          message.tokenInMaxAmount = reader.string();
          break;

        case 4:
          message.tokenOut = cosmos.base.v1beta1.Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  routes: Array<SwapAmountOutRoute>;
  tokenInMaxAmount: string;
  tokenOut: cosmos.base.v1beta1.Coin | null;

  constructor(
    sender: string = "",
    routes: Array<SwapAmountOutRoute> = [],
    tokenInMaxAmount: string = "",
    tokenOut: cosmos.base.v1beta1.Coin | null = null
  ) {
    this.sender = sender;
    this.routes = routes;
    this.tokenInMaxAmount = tokenInMaxAmount;
    this.tokenOut = tokenOut;
  }
}

export function decodeMsgSwapExactAmountOut(a: Uint8Array): MsgSwapExactAmountOut {
  return Protobuf.decode<MsgSwapExactAmountOut>(a, MsgSwapExactAmountOut.decode);
}

@unmanaged
export class MsgSwapExactAmountOutResponse {
  static encode(message: MsgSwapExactAmountOutResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgSwapExactAmountOutResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSwapExactAmountOutResponse();

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

export function decodeMsgSwapExactAmountOutResponse(a: Uint8Array): MsgSwapExactAmountOutResponse {
  return Protobuf.decode<MsgSwapExactAmountOutResponse>(a, MsgSwapExactAmountOutResponse.decode);
}

export class MsgJoinSwapExternAmountIn {
  static encode(message: MsgJoinSwapExternAmountIn, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.poolId);

    const tokenIn = message.tokenIn;
    if (tokenIn !== null) {
      writer.uint32(26);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(tokenIn, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.shareOutMinAmount);
  }

  static decode(reader: Reader, length: i32): MsgJoinSwapExternAmountIn {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgJoinSwapExternAmountIn();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = reader.uint64();
          break;

        case 3:
          message.tokenIn = cosmos.base.v1beta1.Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.shareOutMinAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  poolId: u64;
  tokenIn: cosmos.base.v1beta1.Coin | null;
  shareOutMinAmount: string;

  constructor(
    sender: string = "",
    poolId: u64 = 0,
    tokenIn: cosmos.base.v1beta1.Coin | null = null,
    shareOutMinAmount: string = ""
  ) {
    this.sender = sender;
    this.poolId = poolId;
    this.tokenIn = tokenIn;
    this.shareOutMinAmount = shareOutMinAmount;
  }
}

export function decodeMsgJoinSwapExternAmountIn(a: Uint8Array): MsgJoinSwapExternAmountIn {
  return Protobuf.decode<MsgJoinSwapExternAmountIn>(a, MsgJoinSwapExternAmountIn.decode);
}

@unmanaged
export class MsgJoinSwapExternAmountInResponse {
  static encode(message: MsgJoinSwapExternAmountInResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgJoinSwapExternAmountInResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgJoinSwapExternAmountInResponse();

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

export function decodeMsgJoinSwapExternAmountInResponse(a: Uint8Array): MsgJoinSwapExternAmountInResponse {
  return Protobuf.decode<MsgJoinSwapExternAmountInResponse>(a, MsgJoinSwapExternAmountInResponse.decode);
}

export class MsgJoinSwapShareAmountOut {
  static encode(message: MsgJoinSwapShareAmountOut, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.poolId);

    writer.uint32(26);
    writer.string(message.tokenInDenom);

    writer.uint32(34);
    writer.string(message.shareOutAmount);

    writer.uint32(42);
    writer.string(message.tokenInMaxAmount);
  }

  static decode(reader: Reader, length: i32): MsgJoinSwapShareAmountOut {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgJoinSwapShareAmountOut();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = reader.uint64();
          break;

        case 3:
          message.tokenInDenom = reader.string();
          break;

        case 4:
          message.shareOutAmount = reader.string();
          break;

        case 5:
          message.tokenInMaxAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  poolId: u64;
  tokenInDenom: string;
  shareOutAmount: string;
  tokenInMaxAmount: string;

  constructor(
    sender: string = "",
    poolId: u64 = 0,
    tokenInDenom: string = "",
    shareOutAmount: string = "",
    tokenInMaxAmount: string = ""
  ) {
    this.sender = sender;
    this.poolId = poolId;
    this.tokenInDenom = tokenInDenom;
    this.shareOutAmount = shareOutAmount;
    this.tokenInMaxAmount = tokenInMaxAmount;
  }
}

export function decodeMsgJoinSwapShareAmountOut(a: Uint8Array): MsgJoinSwapShareAmountOut {
  return Protobuf.decode<MsgJoinSwapShareAmountOut>(a, MsgJoinSwapShareAmountOut.decode);
}

@unmanaged
export class MsgJoinSwapShareAmountOutResponse {
  static encode(message: MsgJoinSwapShareAmountOutResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgJoinSwapShareAmountOutResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgJoinSwapShareAmountOutResponse();

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

export function decodeMsgJoinSwapShareAmountOutResponse(a: Uint8Array): MsgJoinSwapShareAmountOutResponse {
  return Protobuf.decode<MsgJoinSwapShareAmountOutResponse>(a, MsgJoinSwapShareAmountOutResponse.decode);
}

export class MsgExitSwapShareAmountIn {
  static encode(message: MsgExitSwapShareAmountIn, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.poolId);

    writer.uint32(26);
    writer.string(message.tokenOutDenom);

    writer.uint32(34);
    writer.string(message.shareInAmount);

    writer.uint32(42);
    writer.string(message.tokenOutMinAmount);
  }

  static decode(reader: Reader, length: i32): MsgExitSwapShareAmountIn {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExitSwapShareAmountIn();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = reader.uint64();
          break;

        case 3:
          message.tokenOutDenom = reader.string();
          break;

        case 4:
          message.shareInAmount = reader.string();
          break;

        case 5:
          message.tokenOutMinAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  poolId: u64;
  tokenOutDenom: string;
  shareInAmount: string;
  tokenOutMinAmount: string;

  constructor(
    sender: string = "",
    poolId: u64 = 0,
    tokenOutDenom: string = "",
    shareInAmount: string = "",
    tokenOutMinAmount: string = ""
  ) {
    this.sender = sender;
    this.poolId = poolId;
    this.tokenOutDenom = tokenOutDenom;
    this.shareInAmount = shareInAmount;
    this.tokenOutMinAmount = tokenOutMinAmount;
  }
}

export function decodeMsgExitSwapShareAmountIn(a: Uint8Array): MsgExitSwapShareAmountIn {
  return Protobuf.decode<MsgExitSwapShareAmountIn>(a, MsgExitSwapShareAmountIn.decode);
}

@unmanaged
export class MsgExitSwapShareAmountInResponse {
  static encode(message: MsgExitSwapShareAmountInResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgExitSwapShareAmountInResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExitSwapShareAmountInResponse();

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

export function decodeMsgExitSwapShareAmountInResponse(a: Uint8Array): MsgExitSwapShareAmountInResponse {
  return Protobuf.decode<MsgExitSwapShareAmountInResponse>(a, MsgExitSwapShareAmountInResponse.decode);
}

export class MsgExitSwapExternAmountOut {
  static encode(message: MsgExitSwapExternAmountOut, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.sender);

    writer.uint32(16);
    writer.uint64(message.poolId);

    const tokenOut = message.tokenOut;
    if (tokenOut !== null) {
      writer.uint32(26);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(tokenOut, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.shareInMaxAmount);
  }

  static decode(reader: Reader, length: i32): MsgExitSwapExternAmountOut {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExitSwapExternAmountOut();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.poolId = reader.uint64();
          break;

        case 3:
          message.tokenOut = cosmos.base.v1beta1.Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.shareInMaxAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sender: string;
  poolId: u64;
  tokenOut: cosmos.base.v1beta1.Coin | null;
  shareInMaxAmount: string;

  constructor(
    sender: string = "",
    poolId: u64 = 0,
    tokenOut: cosmos.base.v1beta1.Coin | null = null,
    shareInMaxAmount: string = ""
  ) {
    this.sender = sender;
    this.poolId = poolId;
    this.tokenOut = tokenOut;
    this.shareInMaxAmount = shareInMaxAmount;
  }
}

export function decodeMsgExitSwapExternAmountOut(a: Uint8Array): MsgExitSwapExternAmountOut {
  return Protobuf.decode<MsgExitSwapExternAmountOut>(a, MsgExitSwapExternAmountOut.decode);
}

@unmanaged
export class MsgExitSwapExternAmountOutResponse {
  static encode(message: MsgExitSwapExternAmountOutResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgExitSwapExternAmountOutResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgExitSwapExternAmountOutResponse();

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

export function decodeMsgExitSwapExternAmountOutResponse(a: Uint8Array): MsgExitSwapExternAmountOutResponse {
  return Protobuf.decode<MsgExitSwapExternAmountOutResponse>(a, MsgExitSwapExternAmountOutResponse.decode);
}
