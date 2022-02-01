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
        function addCourse() {
            // main divs
            const course = document.createElement('div');
            const title = document.createElement('div');
            const link_line = document.createElement('div');
            const pass_line = document.createElement('div');
            course.classList.add('course');
            title.classList.add('title');
            link_line.classList.add('line');
            pass_line.classList.add('line');

            // title div content
            const className = document.createElement('h2');
            className.appendChild(document.createTextNode("NEW"));
            const i = document.createElement('i');
            i.classList.add('material-icons');
            i.appendChild(document.createTextNode('more_horiz'));
            title.appendChild(className);
            title.appendChild(i);

            // link div content
            const a = document.createElement('a');
            a.setAttribute('href', 'https://utoronto.zoom.us/j/');
            a.setAttribute('target', '_blank');
            a.appendChild(document.createTextNode('https://utoronto.zoom.us/j/'));
            const i_cp = document.createElement('i');
            i_cp.classList.add('material-icons', 'copy');
            i_cp.appendChild(document.createTextNode('content_copy'));
            link_line.appendChild(a);
            link_line.appendChild(i_cp);

            // pass div content
            const passText = document.createElement('span');
            passText.classList.add('passcode');
            passText.appendChild(document.createTextNode('Passcode: '));
            const p = document.createElement('p');
            p.appendChild(passText);
            p.appendChild(document.createTextNode('123456'));
            pass_line.appendChild(p);
            pass_line.appendChild(i_cp);

            course.appendChild(title);
            course.appendChild(link_line);
            course.appendChild(pass_line);

            document.body.appendChild(course);
        }
        console.log(document.querySelector('.add-btn').addEventListener('click', addCourse));
    `)
    // let button = document.querySelector('.button')
    // button.addEventListener('click', () => {addCourse()})
});

function addCourse(){
    console.log("pressed")
}
