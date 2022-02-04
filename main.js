const { menubar } = require('menubar');
const store = require('electron-localstorage');

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
        (function load() {
            const courses = JSON.parse(localStorage.getItem('__zoomlinks') || '[]')
            courses.forEach(course => {
                addCourse(course.title, course.link, course.pass)
            })
        })()
    `)
});

function addCourse(){
    console.log("pressed")
}
