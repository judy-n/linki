const { menubar } = require('menubar');

const mb = menubar({
    preloadWindow: true,
    browserWindow: {
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    }
});
let ipc = require('electron').ipcRenderer
require('electron-reload')(__dirname);
mb.on('ready', () => {
    console.log('app is ready');
    // your app code here
    mb.window.openDevTools()
    // mb.window.webContents.executeJavaScript(`
        
    // `)
});

function addCourse(){
    console.log("pressed")
}
