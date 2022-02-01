const { menubar } = require('menubar');

const mb = menubar({
    preloadWindow: true,
    browserWindow: {
        webPreferences: {
            nodeIntegration: true,
        }
    }
});
let ipc = require('electron').ipcRenderer
require('electron-reload')(__dirname);
mb.on('ready', () => {
    console.log('app is ready');
    // your app code here
    mb.window.openDevTools()
    mb.window.webContents.executeJavaScript(`
        console.log(document.querySelector('.add-btn').addEventListener('click', (e)=>console.log('hi', e.target)));
    `)
    // let button = document.querySelector('.button')
    // button.addEventListener('click', () => {addCourse()})
});

function addCourse(){
    console.log("pressed")
}
