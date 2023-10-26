# MCU_Tools
MCU寄存器配置工具

该仓库中不含依赖与环境，运行编译源码请在根文件夹中运行以下指令。

## 安装node.js

### 安装包获取

去[node.js官网](https://nodejs.org/en/download/)下载安装包安装,推荐选择LTS版

### 检测是否完成安装

在`powershell`或者`cmd`窗口输入`node -v`,显示版本号表明安装成功

### 修改存放目录（可选）

1. 设置全局模块存放路径

   ```shell
   npm config set prefix "D:\Env\nodejs\node_global"
   ```

   

2. 设置缓存文件夹

   ```shell
   npm config set cache "D:\Env\nodejs\node_global"
   ```

   > 设置完成后可执行以下命令查看是否成功
   >
   > ```shell
   > npm config get cache
   > npm config get prefix
   > ```

3. 更改用户变量，在用户变量中找到path，将`C:\Users\user\AppData\Roaming\npm`修改为`D:\Env\nodejs\node_global`
4. 新增系统变量，新增`NODE_PATH`变量，值为`D:\Env\nodejs\node_global\node_modules`
5. 修改系统变量，在系统变量中找到path，新增值为`%NODE_PATH%`

### 下载慢的解决方法

### 修改镜像源

```shell
npm config set registry https://registry.npm.taobao.org
```

> 查看是否配置成功
>
> ```shell
> npm config list
> ```

### 直接从镜像仓库安装

```shell
npm install -g [package] --registry=https://registry.npm.taobao.org
```

### 使用`cnpm`安装

```shell
//首先安装cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

//使用cnpm进行安装，使用方法和npm相同
cnpm install -g electron
```



## 安装vue

### 安装vue.js

```shell
npm install vue -g
```

`-g`是全局安装，指安装到global全局目录去，如果不加`-g`，模块就会安装到当前路径下的node_modules文件夹下，没有目录则自动创建。

`npm`安装不成功的话可以使用上面说的淘宝的镜像进行安装（安装淘宝镜像见上面教程）。

```she
cnpm install vue -g
```

### 安装vue/cli脚手架

```shell
npm install -g @vue/cli
```

## 安装项目依赖

### 安装ElementUI

```shell
npm i element-ui -S
```

### ~~添加调用代码~~

在/src/main.js中添加以下代码

```js
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)
```

### 全局安装 Electron

```shell
npm install electron -g
```

> 查看是否安装成功：
>
> ```shell
> electron -v
> ```
>
> 出现版本号表示安装成功

### vue项目中添加Electron

```shell
vue add electron-builder
```

选择最新版本安装
> 在安装electron-builder插件时，可能会遇到安装electron连接不上，导致node install安装失败
> ```shell
> //修改npm的config
> npm config edit
> // 在打开的文档中添加这两句话，重新安装即可
> electron_mirror=https://npm.taobao.org/mirrors/electron/
> electron-builder-binaries_mirror=https://npm.taobao.org/mirrors/electron-builder-binaries/
> ```

## 生产环境与编译

### 生产环境

```shell
npm run electron:serve
```

### 最终编译

```shell
npm run electron:build
```

# electron相关配置

## 修改默认窗口大小

修改 background.js中的createWindow()函数

```js
async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
+   width: 800,
+   height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    },
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}
```

## 取消跨域限制

修改 background.js中的createWindow()函数

```js
async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
+     webSecurity: false,
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    },
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}
```

## 取消菜单栏显示

修改background.js中的import

```js
 import { app, protocol, BrowserWindow, Menu } from 'electron'
```

修改 background.js中的createWindow()函数

```js
async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    },
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
+ createMenu()
}
```

在 background.js中添加createMenu()函数

```js
// 设置菜单栏
 function createMenu() {
       // darwin表示macOS，针对macOS的设置
       if (process.platform === 'darwin') {
           const template = [
           {
               label: 'App Demo',
               submenu: [
                   {
                       role: 'about'
                   },
                   {
                       role: 'quit'
                   }]
           }]
           let menu = Menu.buildFromTemplate(template)
           Menu.setApplicationMenu(menu)
       } else {
           // windows及linux系统
           Menu.setApplicationMenu(null)
       }
   }
```

## 显示应用图标

修改 background.js中的createWindow()函数

```js
async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    },
+   // eslint-disable-next-line no-undef
+   icon: 'public/icons/avatar-icon.png'
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  createMenu()
}
```

## 修改安装包图标与名称

修改vue.config.js

```js
module.exports = defineConfig({
  transpileDependencies: true,
+ pluginOptions: {
+   electronBuilder: {
+     builderOptions: {
+       win: {
+         icon: './public/icons/avatar-icon.png'
+       },
+       mac: {
+         icon: './public/icons/avatar-icon.png'
+       },
+       productName: 'MCU_Tools'
+     }
+   }
+ }
})
```





PS：

JavaScript中直接给数组赋值不会立即刷新,如：`Array1[0] = Array2[0]`,需要使用this.$set(Array,index,value),如：`this.$set(Array1,0,Array2[0])`



使用array1 = array2只能引用数组，改变array1的值array2也会改变，可以将原数组转化成JSON再解析回来，完成数组的深拷贝。

```js
//浅拷贝
this.GPIOB[i].mode = this.modes;
//深拷贝
this.GPIOB[i].mode = JSON.parse(JSON.stringify(this.modes));	
```

