const path = require('path');
const electron = require('electron');
const { app, BrowserWindow, Tray } = electron;

let mainWindow;
let Tray;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false,
    resizeable: false,
    show: false //create a browserWindow but dont show it to the user
  });
mainWindow.loadURL(`file://${__dirname}/src/index.html`);
  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
tray = new Tray(iconPath);
});
