const { app, BrowserWindow } = require('electron');
 
let mainWindow;
 
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 900,
    webPreferences: {
      nodeIntegration: true, // 禁用Node.js集成，以增加安全性
      contextIsolation: true, // 启用上下文隔离，以增加安全性
    },
    icon:'/home/wzl/.config/icons/yunpan.png',
  });
 
  mainWindow.loadURL('https://www.aliyundrive.com/drive');
 
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
 
app.whenReady().then(createWindow);
 
app.on('window-all-closed', () => {
  // 在macOS上，当所有窗口都关闭时，默认情况下不会退出应用程序
  // 如果您希望在所有窗口关闭后退出应用程序，请在这里添加对应的处理逻辑
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
 
app.on('activate', () => {
  // 在macOS上，点击dock图标并没有打开一个新窗口时，重新创建一个主窗口
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
 
// 添加before-quit事件监听，用于在关闭之前执行一些操作（如果需要的话）
app.on('before-quit', (event) => {
  // 在这里可以添加一些关闭前的处理逻辑
  // 例如保存数据、清理资源等
  // 如果您不需要执行额外的操作，可以忽略这个事件处理函数
});
