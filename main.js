const { menubar } = require('menubar');
const path = require('path')
const zlIcon = path.join(__dirname, 'zl2.png')

const mb = menubar({
    icon: zlIcon,
    preloadWindow: true,
    browserWindow: {
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
    }
});
let ipc = require('electron').ipcRenderer
require('electron-reload')(__dirname);
mb.on('ready', () => {
    console.log('app is ready');
    mb.window.on('close', () => mb.app.quit())
});

function addCourse(){
    console.log("pressed")
}
