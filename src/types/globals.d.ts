declare type EmptyObject = Record<string, never>;
declare type AnyObject = Record<string, unknown>;

declare interface IFunction {
  (...args): void;
}

declare interface Bridge {
  send: (channel: string, data?: AnyObject) => void;
  receive: (channel: string, func: IFunction) => void;
}

declare const bridge: Bridge;
