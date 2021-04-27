const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('bridge', {
  send: (channel: string, data: any) => {
    const validChannels: string[] = ['createData', 'getFile'];
    if (validChannels.includes(channel)) {
      console.log(channel, data);
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel: string, func: any) => {
    const validChannels: string[] = ['createData'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
});
