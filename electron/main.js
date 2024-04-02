const { app, BrowserWindow } = require('electron')
const serve = require('electron-serve')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (app.isPackaged) {
    const appServe = serve({
      directory: path.join(__dirname, '../out')
    })

    appServe(win).then(() => win.loadURL('app://-'))
    return
  }

  win.loadURL('http://localhost:3000')
  win.webContents.on('did-fail-load', (e, code, desc) =>
    win.webContents.reloadIgnoringCache()
  )
}

app.on('ready', () => createWindow())

app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())
