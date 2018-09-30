const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300
  });
mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
