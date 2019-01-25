<article id="xinyue">
  <h1>新阅</h1>

  <h2>简介</h2>
  <p>一个专为视频行业设计的在线协同平台。</p>
  <p>该项目使用 React 全家桶进行开发，我作为前端技术负责人带领同事共同开发。项目其中一个功能点为对视频关键帧进行手绘标注，并支持撤销/重绘等操作，还有出血线、画面比例预览等功能，我们通过创建多个离屏 Canvas 进行绘图，在实现各功能的同时，确保各组件的性能得到保障。我们通过 Redux 记录绘制历史实现 Time Travel。我们还自定义了一款视频播放器，以满足项目中的一些自定义功能，除了常规的播放控制，还实现了清晰度切换、悬浮进度条显示视频预览、多格式时间码等功能。为实现文件管理，我们在前端实现了一整套的文件系统，包括完整的目录结构、自定义右键菜单、拖拽操作、键鼠配合的快捷操作等。</p>
  <p>项目严格按照 React 官方文档推荐的方式进行组件化开发，使用 PropTypes 配合 Flow 进行类型检查。使用 standard.js 来统一开发组成员之间的代码风格。使用高阶组件和函数式组件来优化结构，借助 shouldComponentUpdate 函数精简不必要的渲染。样式方面以 SCSS 为主，配合 PostCSS 补齐兼容代码，部分公共组件，如 Tooltip、Dropdown、Toast 等尝试性地使用了 CSS Modules 技术。</p>
  <p>项目充分利用 ES2015+ 语法的新特性，自行封装了基于 fetch 的 HTTP 客户端。使用 Yarn 进行依赖管理，Webpack 进行构建，Gulp 进行自动化部署，Git 进行版本控制。</p>

  <h2>周期</h2>
  <p>2017 年 8 月 - 2017 年 10 月</p>

  <h2>技术栈</h2>
  <div class="stacks">
    <div class="stack fix-ratio ratio-1-1 icon icon-html5" title="HTML5"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-css3" title="CSS3"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-javascript" title="JavaScript"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-es" title="ECMAScript 2015+"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-react" title="React"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-redux" title="Redux"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-sass" title="SASS"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-flow" title="Flow"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-jest" title="Jest"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-webpack" title="Webpack"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-gulp" title="Gulp"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-yarn" title="Yarn"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-eslint" title="ESLint"></div>
    <div class="stack fix-ratio ratio-1-1 icon icon-standard" title="standard.js"></div>
  </div>

  <h2>相关链接</h2>
  <p>
    <a class="button" target="_blank" href="https://www.uxinyue.com">线上地址</a>
  </p>

  <h2>项目截图</h2>
  <img src="/img/project/xinyue/screenshot.jpg" alt="截图" title="截图" class="img-block">
</article>