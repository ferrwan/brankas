import { contextBridge, ipcRenderer } from 'electron';

const bridge: Bridge = {
  send: (channel: string, data: AnyObject) => {
    const validChannels: string[] = ['createData', 'getFile'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel: string, func: IFunction) => {
    const validChannels: string[] = ['createData'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
};

contextBridge.exposeInMainWorld('bridge', bridge);
