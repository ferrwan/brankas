declare type EmptyObject = Record<string, never>

declare interface Bridge {
  send: (channel: string, data?: any) => void,
  receive: (channel: string, func: any) => void
}

declare const bridge: Bridge;
