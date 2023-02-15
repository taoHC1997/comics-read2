// main.js
const { app, BrowserWindow } = require("electron");

let win;

// 创建窗口
const createWindow = () => {
  win = new BrowserWindow({
    width: 300,
    height: 400,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });

  // 加载页面
  win.loadFile("index.html");

  // 开启控制台
  // win.webContents.openDevTools({ mode: "undocked" });

  // 不要菜单
  win.removeMenu();
};

app.whenReady().then(() => {
  createWindow();

  // 没有窗口打开则打开一个窗口
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 关闭所有窗口时退出应用
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
