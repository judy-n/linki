const { menubar } = require('menubar');

const mb = menubar();
require('electron-reload')(__dirname);
mb.on('ready', () => {
    console.log('app is ready');
    // your app code here
});
