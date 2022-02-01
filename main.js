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
        function newEl(tag, classes, attrs, children) {
            const el = document.createElement(tag);
            el.classList.add(...classes);
            Object.keys(attrs).forEach(attr => {
                el.setAttribute(attr, attrs[attr]);
            });
            children.forEach(child => {
                el.appendChild(child);
            });
            return el;
        }

        function newText(text) {
            return document.createTextNode(text);
        }

        function addCourse() {
            const course = newEl('div', ['course'], {}, [
                // title
                newEl('div', ['title'], {}, [
                    newEl('h2', [], {}, [newText('NEW')]),
                    newEl('i', ['material-icons'], {}, [newText('more_horiz')])
                ]),
                // link
                newEl('div', ['line'], {}, [
                    newEl('a', [], {'href': 'https://utoronto.zoom.us/j/', 'target': '_blank'}, [newText('https://utoronto.zoom.us/j/')]),
                    newEl('i', ['material-icons', 'copy'], {}, [newText('content_copy')])
                ]),
                // pass
                newEl('div', ['line'], {}, [
                    newEl('p', [], {}, [
                        newEl('span', ['passcode'], {}, [newText('Passcode: ')]),
                        newText('123456')
                    ]),
                    newEl('i', ['material-icons', 'copy'], {}, [newText('content_copy')])
                ])
            ]);

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
