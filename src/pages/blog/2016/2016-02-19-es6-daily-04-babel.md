---
title: '每天一点ES6(4)：Babel'
description: '《圣经》的光辉，永恒！'
tags: ['ecmascript', '2015', 'es6', 'javascript', 'babel', 'npm']
cover: '../../../images/blog/es6daily.jpg'
series: 'es6daily'
draft: false
original: true
---

## 打脸

好吧，这个系列已经从一开始的日更变成现在周更都未必做得到了，啪！啪！啪！打脸呐！！！

好，打脸完毕，下面我们来说正事儿。

## ~~ES6 无限好，就是用不了~~

~~尽管 ES6 发布有一阵子了，但各大浏览器的兼容工作才刚刚开始，最新版的 Chrome、Firefox、Safari 对 ES6 的支持度还处于起步阶段，而谁又能想到，Microsoft Edge 这次竟成黑马，现阶段的支持度已有 80% 左右，实战能力仅次于 Node.js 平台。~~

~~但相信大部分开发者的信仰归属依然是 Chrome 和 Firefox，现阶段要想在这些环境下试用 ES6，最好的办法就是借助一些转码器，将 ES6 的代码转换成 ES5 的等效实现。目前最靠谱的转码器非 [Babel](https://babeljs.io) 莫属。~~

## 为什么需要 Babel

尽管如今主流环境对 ES 2015+ 的原生支持度越来越高，但各个环境的支持进度不尽相同，因此需要一个机制来确保新的语法在没有原生支持的平台上也能正常运行——这就是 Babel 的作用。不管你用什么样的语法标准，Babel 都把它统一成 ES5 的语法。

## 《圣经》的力量

第一眼看到这货的名字，就想到《圣经》（Bible），两者的拼写是何其的相似，果不其然，Babel 的英文释义是“巴别塔”，是《圣经》中提到的一座通天塔。

Babel 是目前支持度最高，同时也是使用最广泛的 ES6 转码器，Facebook、Mozilla、Yahoo、npm、MongoDB 等国内外上百家科技公司都在使用它。该项目最初的名称叫 6to5，用意非常明显。

## Babel 的版本

Babel 有两个比较重要的大版本，Babel 5 和 Babel 6，后面的章节都以 Babel6 为例。

对新手而言 Babel 5 更加友好，因为只有 babel 一个命令行工具。Babel 6 将整套工具拆分为几个单独的工具和插件，更灵活，但上手也更麻烦。现在 Babel 5 虽然还能够安装，但已经没有什么卵用，命令行会提示你安装 Babel 6 的包。

## Babel 的安装和配置

Babel 通过 npm 进行安装，这就需要你预先安装好 Node.js 的环境，前端发展到现在，不管你是否看好 Node.js 都免不了要和它打交道了。

Babel 官方推荐将 Babel 安装在本地，因为 Babel 的不同版本以及不同转码规则会起到不同的效果。当然全局和本地的版本并不冲突，在项目中会优先使用本地安装的，但如果是在项目之外有测试需要，全局安装过就会方便许多。

```bash
npm install --save-dev babel-cli // 本地
npm install -g babel-cli // 全局
```

光有一个 babel-cli 什么也做不了，我们还要为 Babel 设置语法规则。官方提供了几套预设的插件集合，除了标准的 ES2015+，还针对主流的开发工具提供了相应的插件和预设，例如 React、Flow、TypeScript 等。一般我们选 env 就好了。

```bash
npm install --save-dev babel-preset-env
```

> 现在 ES 的发布周期确定为一年一个大版本，Babel 为每个年度的标准提供了单独的预设包，但如果每次出新特性都要改预设太麻烦（虽然基本上也就一年一次的样子），为此 Babel 官方推出了 env 预设（之前叫 latest，现在已经 deprecated 了），把从 ES2015 开始到当年的所有用于标准 ECMAScript 转码工具全部打包到一起，后续只需要升级这个包就好了。开发者还可以在 `.babelrc` 中设置要支持的环境范围，类似 auto-prefixer，以减少转码的工作量。


在项目根目录下创建一个 `.babelrc` 文件，注意这是个配置文件，以点号开头，没有后缀。Windows 系统是不允许直接创建这样格式的文件的，需要借助代码编辑器来新建文件。创建好后写入以下内容来启用预设：

```json
{
  "presets": ["env"]
}
```


当然这段配置也可以写到 `package.json` 里，或是在构建工具的脚本中直接传入，但使用 `.babelrc` 配置文件的方式更加符合关注点分离的思想，必要时还能够满足代码复用的需求，推荐这种方法。

至此，我们就完成了 Babel 的安装，可以开始使用了。

## 通过命令行使用 Babel

对于全局安装了的用户，打开 Terminal 并切换到 JS 文件所在位置，就可以开始用了。下面的命令会将转码结果输出到 Terminal 的标准输出中：

```bash
babel es6.js
```


当然更多的时候我们是希望把结果放入文件中的：

```bash
babel es6.js -o es6-babeled.js
```


Babel 支持对文件进行监测，文件内容有改动，会自动执行转码，无需人工再干预。（通过 Ctrl/Command + C 结束）

```bash
babel es6.js --watch -o es6-babeled.js
```


Babel 还能批量处理整个路径下的 JS 文件，下面的代码把 src 目录下的文件批量转码，并放到 lib 目录下：

```bash
babel src -d lib
```


还可以从 Terminal 的标准输入中读取文件进行转码：

```bash
babel -o es6-babeled.js < es6.js
```

## 通过 npm 安装 Babel

全局安装的 Babel 适合偶尔测试一些代码片段，如果是在项目中使用，还是推荐本地安装，然后在 `package.json` 中的 `scripts` 属性中添加相关命令： `"build": "babel src -d build"` ，之后只要在项目根目录执行 `npm run build` ，就会自动调用本地版本的 Babel 对 `src` 目录下的 js 文件转码并将转码后的文件放到 `build` 目录下。

如果你使用了其他的构建/打包工具，如 Grunt、Gulp、Webpack、Rollup 等，也都有各自适用的 Babel 插件可以使用。

### 关于 npm 包的全局安装和本地安装
 npm 的包分全局安装和本地安装，只有全局安装的包才能直接使用其命令行（如果有的话），因为全局安装过程会把命令行工具添加进环境变量，因而系统能够查找到。本地安装由于项目根目录不属于环境变量中，因此无法直接通过全局命令访问，但可以通过 `package.json` 中的 `scripts` 属性进行调用。

  对于全局安装：

  - mac 和 linux 下是通过在 `/usr/local/bin` 目录下（环境变量中默认包含）创建软连接指向 npm 全局安装目录下对应的文件。
  - Windows 是在 Node 安装目录下的 `node_global` 目录中创建 `*.cmd` 后缀的脚本（Node 安装配置过程已将该目录添加至环境变量），通过脚本调用 npm 全局安装目录下对应的文件。

  本地安装的命令行工具会在项目根目录下的  `/node_modules/.bin`  目录中创建一个软连接，指向本地安装目录下对应的入口文件，该目录下的命令都可以在 `package.json` 中的 `scripts` 属性中直接使用，node 会优先到  `/node_modules/.bin` 目录查找，找不到再到父级 `node_modules` 目录找，直到全局目录。

  本地安装的包也可以手动执行 `node_modules/package_name/bin/index.js` 来运行命令行工具（一般都是这么个套路，有“bin”目录就找“bin”目录，没有就具体看包的 `package.json` 里 `main` 字段的描述）， `package.json` 里的 `scripts` 属性里也可以这么写，尽管没有必要。

## ~~babel-node~~（新版中已移除）

~~babel-node 是随 babel-cli 一起安装的另一款命令行工具，是一个模拟 Node.js 环境的 REPL（Read-Evel-Print Loop，一种循环执行“读取-执行-输出”的程序）。执行 `babel-node` 会进入一个类似 Node.js 的环境，在这里你可以直接运行 ES6 的代码。你也可以用形如 `babel-node es6.js` 的命令来直接运行用 ES6 编写的文件，babel-node 会在运行代码之前先将其编译成 ES5 的等效代码，然后执行。~~

~~甚至可以改写 `package.json` 文件，用 babel-node 替代 node 命令来直接运行。~~

```json
{
  "scripts": {
    "run-node": "babel-node app.js"    // 需替换成实际文件名
  }
}
```

~~此时执行 `npm run script` 就等同于执行 `babel-node script.js`~~

## ~~babel-doctor~~（新版中已移除）

~~看名字就知道，这个工具大概是排错用的。没错，如果在命令行中执行 `~~babel~~` 命令有问题的，可以用它来检查一下环境配置是否正确。 `~~babel-doctor~~` 主要检查以下几项内容：~~

- ~~项目根目录下是否存在 `~~.babelrc~~` 文件~~
- ~~是否有重复的 Babel 版本，例如同时安装了 Babel 5 和 Babel 6~~
- ~~所有已安装的 Babel 工具是否升级到了最新版~~
- ~~npm 的版本是否大于等于 3.3.0~~

## 在 Node.js 中使用 Babel

在 Node.js 环境中，可以直接在 js 文件里调用 Babel 的转码功能。

### babel-register

该模块给 `require()` 加上一个钩子，加载它之后，每当再 require 其他 js、jsx、es、es6 类型的文件，就会先用 Babel 进行转码。需要注意的是，使用该模块的文件本身并不会被转码，需要从外部执行转码。另外由于是实时转码，从效率上考虑不适用与生产环境，仅供学习研究使用。

### babel-core

这是 Babel 的核心 API 所在，在项目中加载该模块 `var babel = require("babel-core");` ，然后就可以通过 `babel.transform(code, options)` 方法来执行转码， `code` 是待转码的 ES6 代码字符串， `options` 提供了一些转码说明，例如指定语法规则、启用一些插件、设定编码等，具体用法可以参考 [这里](http://babeljs.io/docs/usage/options)。

## 在浏览器中使用 Babel

### babel-polyfill

这是 Babel 官方提供的语言环境垫片。Babel 只负责转码 ES6 的新语法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign、Array.from）都不会转码。主流浏览器的最新版基本都已经原生支持了这些语法，但如果你的代码需要运行在比较老的环境，可以通过在文件顶部加上 `require("babel-polyfill")` 来引入垫片。

### browser.js

在命令行中使用 Babel 虽然在功能性上没得挑，但毕竟还有各种配置，多少有点麻烦。Babel 提供了一种可以在浏览器中使用的方法，只需两步就能一劳永逸。这个方法唯一的缺点就是实时转码需要时间，性能上不及预先转换的方案，因此生产环境中不推荐使用，仅供学习研究使用。

首先我们需要下载 [browser.js](https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.29/browser.min.js)，注意，这是 Babel 5 的版本，Babel 6 开始不再直接提供该文件，需要自行构建。

除了从上面的链接下载，你也可以用 npm 下载：

```bash
npm install babel-core@5
```

下载后在 `node_modules/babel-core` 子目录中就能找到 `browser.js` 文件。

使用方法如下：

```html
<script src=`browser.js`></script>
<script src=`your_own_es6_file.js`></script>
```


有两点需要注意
1. browser.js 文件必须放在你自己的 js 文件之前
2. 你自己的文件的类型要写成 `type="text/babel"`

## 在线试用 Babel

有时候我们并不需要在项目中操作什么，纯粹就想看看 Babel 到底做了什么。为此 Babel 官方提供了一套在线的 [REPL (Read-Eval-Print-Loop)](https://babeljs.io/repl/)，可以方便的试用 Babel。

## 路由查询命令的近亲 —— Traceur

除了 Babel 之外，还有一款不错的 ES6 转码器叫做 [Traceur](https://github.com/google/traceur-compiler)，是由科技巨头 Google 开发的，支持度虽然差 Babel 一大截，但使用非常简单，可以作为备用方案。Traceur 同样支持浏览器、在线 REPL、命令行、Node.js 四种环境下的使用。

学过计算机网络的同学，或多或少都应该听说过 Linux 下的  `tracerouter`  命令，和 Windows 下的  `tracert` 命令。这两个命令都是用来追踪数据包从起点到终点所经过的路由的。而 Traceur 的名字，和它们实在是太像了，科技圈的命名方式真是一道风景。