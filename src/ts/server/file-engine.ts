import { BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import fs from 'fs';

type TFileEngine = {
  mainWindow: BrowserWindow;
};

const getFile = () => new Promise<string>((resolve, reject) => {
  fs.readFile(path.resolve('data/data.json'), 'utf-8', (err, data) => {
    if (err) {
      console.error('ERROR when reading Vault Data');
      console.error(err);
      reject(err);
    } else if (data) {
      resolve(data);
    }
  });
});

const FileEngine = (params: TFileEngine): void => {
  const { mainWindow } = params;
  ipcMain.on('getFile', async () => {
    await getFile().then((res) => {
      mainWindow.webContents.send('createData', res);
    });
  });

  ipcMain.on('saveData', async (e, newData) => {
    const fileDataStr = await getFile().then((res) => res);
    let fileData = JSON.parse(fileDataStr);
    fileData.data = {
      ...fileData.data,
      ...newData,
    };
    fileData = JSON.stringify(fileData, null, 2);
    fs.writeFileSync(path.resolve('data/data.json'), fileData);
  });
};

export default FileEngine;
