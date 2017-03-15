const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow;

app.on('ready', function createWindow() {
  // Create the browser window.
  let mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'www', 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools. mainWindow.webContents.openDevTools();
});
