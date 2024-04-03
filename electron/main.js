const { app, protocol, BrowserWindow } = require('electron')
const serve = require('electron-serve')
const path = require('path')
const fs = require('fs')

protocol.registerSchemesAsPrivileged([
  { scheme: 'cyberguard-app', privileges: { secure: true, standard: true } }
])

const createBrowserWindow = async () => {
  const preload = path.join(__dirname, 'preload.js')
  const browserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 800,
    title: 'Cyberguard',
    titleBarStyle: 'hiddenInset',
    webPreferences: { preload, contextIsolation: true, nodeIntegration: false }
  })

  browserWindow.webContents.on('did-fail-load', (e, code, desc) =>
    browserWindow.webContents.reloadIgnoringCache()
  )

  const directory = path.join(__dirname, './../out')

  if (app.isPackaged && fs.existsSync(directory)) {
    serve({ directory })(browserWindow)
    browserWindow.webContents.openDevTools()
    await browserWindow.loadURL('app://-')
    return
  }

  if (app.isPackaged && !fs.existsSync(directory)) {
    return await browserWindow.loadURL('http://www.staggeringbeauty.com/')
  }

  browserWindow.loadURL('http://localhost:3000')
}

app.on('ready', () => createBrowserWindow())

app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())
