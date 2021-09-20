import { contextBridge, ipcRenderer } from 'electron';

const VALID_CHANNELS = ['createData', 'getFile', 'saveData'];
const bridge: Bridge = {
  send: (channel: string, data: unknown) => {
    if (VALID_CHANNELS.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel: string, func: IFunction) => {
    if (VALID_CHANNELS.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
};

contextBridge.exposeInMainWorld('bridge', bridge);
