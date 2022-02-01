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
});

function addCourse(){
    console.log("pressed")
}

let button = document.querySelector('.button')
button.addEventListener('click', () => {addCourse()})
