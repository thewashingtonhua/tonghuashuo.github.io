---
title: '除了 SSR，就没有别的办法了吗'
description: '当 MVVM 遇上 SEO，该如何是好'
tags: ['static', 'site', 'gatsby', 'pug']
cover: '../../images/blog/explore-static-site-generation.jpg'
series: ''
---

## SSR 出啥事了

放心，SSR 没出事。

写这篇博客并不是想说 SSR 有什么不好，而是因为一些别的原因。

## 想象一个这样的场景

作为有追求的开发者，我们都希望自己能够负责一些比较有技术难度的项目。但作为公司业务来说，总会有一些比较简单的需求，需要做几个静态页，比如产品官网、活动页之类的。这些需求虽然没什么挑战性，但总得有人来做。

## 没有什么是 jQuery 一把梭搞不定的

一般接到这类“简单”的需求，相信绝大部分人的第一反应肯定是 jQuery，尽管它早已落入前端鄙视链的最底层，但依然魅力不减，宝刀未老。配合 BootStrap 又是一把梭，分分钟搞定。

时至今日，这套方案依然可行，很好的满足了业务的需求，对开发者的技术要求也不高，可以说是非常稳了。

那不就行了，你还担心啥？

## 教练，我想打篮球

这是一个属于 MVVM 的时代，即便是刚入行的新人也都知道：jQuery 不是终点。

Angular、React、Vue，不管谁是你的本命，一旦入坑，就再也回不去了。即便不为框架故，ES 2015+ 了解一下？LESS、SCSS 了解一下？Pug、EJS 了解一下？用了这些那肯定逃不开 Babel、Gulp、Webpack 了吧？

See？不是 jQuery 不行了，而是行业的发展，让开发者更倾向于（至少已经习惯于）用 MVVM 来开发。

## 老生常谈 SEO

MVVM 的开发体验是不错，极大的解放了前端开发者的生产力。但和 MVVM 经常一起出现的还有另一个让人又爱又恨的东西，叫 SPA。

SPA 的体验非常好，页面切换非常自然。但 SPA 最大的问题，就是缺少对 SEO 的支持。

为了解决这个问题，主流 MVVM 技术栈都提供了对应的 SSR 的方案。

SSR 从根本上解决了 SEO 的问题，但是实践起来比较麻烦。一方面上手难度较高：必须使用 Node.js、业务代码要进行同构化改造、Webpack 需要多一套配置、第三方库需要审查是否支持 SSR；另一方面 SSR 使得前端的工作需要在浏览器和服务器之间来回切换，相比单纯的客户端开发，或是服务端开发，工作内容要更杂。

所以尽管 SSR 很强大，但杀鸡焉用牛刀。

## 回到未来

SSR 其实并不是什么新鲜玩意儿，早在 SPA 占领世界之前，动态页面本就是由服务端输出的，前端不过是后端代码中的一个视图而已。

我们现在所谈的 SSR 方案，主要得归功于 Node.js。作为一个运行环境，它使得 JS 成为一门全端语言，前端现在所有的繁荣昌盛和麻烦事儿，都源自 Node.js 的诞生。

相比于传统的后端渲染方案，SSR 最大的好处，是兼顾了前端的组件化，和后端输出的效率。顺带地，由于前后端使用了同一门语言，大量代码得以复用。

尽管前端现在开发手段花里胡哨，但网页最终的样子始终没变。

因此总的来说，我们的诉求就是：开发阶段用 MVVM，构建阶段利用工具生成静态页面。

## “预渲染”了解一下

显然，我肯定不是第一个提出这个诉求的人，在 SSR 方案出来没多久，就有人开始研究另一种方案 —— 预渲染。

大家都觉得，这事儿不一定非得放到服务器去做，Node.js 只是一个运行环境，不用非把它当做服务器来看。如果能在构建阶段直接把渲染好的 HTML 打出来，问题不就解决了。

于是有人开发出来这样一个 Webpack 插件 —— <a target='_blank' href='https://github.com/chrisvfritz/prerender-spa-plugin'>PrerenderSPAPlugin</a>。

这是一个很厉害的插件，不挑技术栈，无论你是 Angular、React、Vue 中谁的粉，只需要简单设定一下路由，就可以在构建阶段直接输出渲染好的静态页面。背后的原理主要是利用 <a target='_blank' href='https://github.com/GoogleChrome/puppeteer'>Puppeteer</a> 加载页面，并把加载完成后的内容保存下来。

PrerenderSPAPlugin 的好处是改造成本低，如果你有一个现有的系统，需要进行预渲染改造，那么你只需要调整一下 Webpack 的配置即可，业务代码不用动。

但这个方案只能处理静态的路由，对于动态路由，这个插件暂时还没有很好的办法来解决。

## 了不起的盖茨比

开发者大多有自己的博客，博客是一种典型的静态站点，过去有 WordPress、JekyII、Hexo 等大名鼎鼎的 CMS，都能生成静态站点。但这些工具目的性都太强，明白儿地告诉你：我就是个博客。

<a target='_blank' href='https://www.gatsbyjs.org/'>Gatsby</a> 是最近流行起来的一种新型方案，<a target='_blank' href='https://github.com/gatsbyjs/gatsby/commits/master?after=2032147f23d40fe8d986fd33996a8c5362e6c75d+7960'>项目始于 2015 年</a>，原本只是个副业，开发了一年之后，发现反响不错，于是 <a target='_blank' href='https://www.bricolage.io/gatsby-open-source-work/'>创始人开始全职投入 Gatsby 的开发工作</a>。

区别于其它方案，Gatsby 并没有死盯着 CMS 这一个领域，它定位于一种使用 React 技术栈开发站点的方式。不光可以用于开发静态站点，动态站点也完全不在话下。

Gatsby 的页面就是 React 组件，你之前积累的所有 React 知识到这里都可以继续用，可定制性非常高。

Gatsby 不光支持 Markdown 转 HTML 的方式来生成内容，同时还支持从 WordPress 等主流 CMS 导入数据，或通过外部 API 获取数据来动态生成页面，方便迁移。

Gatsby 支持自定义路由，静态动态均可，没有任何固定的路由套路。

Gatsby 支持部署到 Github Page、Now.sh、Surge.sh 等各大主流托管平台。如果你有自己的服务器，你当然也可以自由发挥。

事实上，这篇博客发布之时，我刚刚把整个博客用 Gatsby 彻底改造了一遍，大家可以感受一下。

## 想得远一点

既然 Gatsby 这么强大，那么我们可不可以用 Gastby 来替代 SSR 呢？在一定条件下是可以的，但目前有几个问题还没能得到很好的处理：

### 1）动态路由（/user/:id）

对于博客这种内容已经确定的，可以在构建期就确定有哪些路由，但如果需要通过外部 API 来获取，就需要 API 支持 GraphQL，否则目前还无法实现。

当然这种情况我们可以换种思路来考虑，使用固定的子路由，通过改变查询参数，在页面载入之后再动态获取内容。这种方法虽然 URL 看上去不那么完美，但解决问题还是可以的。

### 2）React-Router

一般我们在使用 React 时都会配合 React-Router 来管理路由，然而 Gatsby 并非使用 React-Router，它的路由有两种，一个是 `src/pages` 目录下按照目录和文件的名称来定义路由，另一个是通过 `onCreateNode` 生命周期手动创建 slug 来扩展路由。React 的 SSR 框架 Next.js 也是采用的类似的方式。这点在迁移老系统时需要重新设计一下。

## 别急

尽管还有一些问题，但 Gatsby 可以说是目前创建静态站点最完善的方案，既满足了一个静态网站所需要的一切，又提供给了开发者非常现代化的开发方式。

项目现在更新很频繁，包括核心库在内，每天都有大量的 commit。我这次改造大概花了一周时间，期间执行过几次 `yarn outdated`，每次都有一堆的可更新项目，全都是 `gatsby-` 开头。

频繁更新的背后，是一整个团队不屑的努力。截至发文当时，Gatsby 最新版本是 `2.0.117`。

## 小结

至此，我们来对比一下前面说到的几个方案。

| | jQuery | SSR | Prerender | Gatsby |
|-|-|-|-|-|
| 适用范围 | 任何页面 | 所有 MVVM 技术栈 | 所有 MVVM 技术栈 | 目前仅 React |
| 实施难度 | 低 | 高 | 低 | 中 |
| 可定制性 | 高 | 高 | 低 | 高 |
| 对现代化生态的支持度 | 低 | 中 | 高 | 高 |

总的看来，Gatsby 虽然需要投入一些额外的学习成本，但回报率还是比较高的。

## 题外话：简单谈一谈 Imgcook

前阵子阿里爸爸放又出来一个大杀器 —— <a target='_blank' href='https://imgcook.taobao.org'>Imgcook</a>，可以把设计稿一键生成可读性很高的代码，让一批前端从业者背后又一凉。

为什么是“又”？

一方面，人们研究设计稿自动转 HTML 的技术也不是一两天了。前有 <a target='_blank' href='https://github.com/tonybeltramelli/pix2code'>Pixel2Code</a> 一文惊天下，后有 <a target='_blank' href='https://github.com/Microsoft/ailab/tree/master/Sketch2Code'>微软</a>、<a target='_blank' href='https://airbnb.design/sketching-interfaces/'>Airbnb</a> 等大厂发力相关技术。另一方面，阿里爸爸在过去一年先后推出过好多这一类自动化的项目：<a target='_blank' href='https://luban.aliyun.com/'>鹿班</a>、<a target='_blank' href='https://alibaba.github.io/ice/'>飞冰</a>、<a target='_blank' href='https://fusion.design/'>Fusion Design</a>。

其实这没什么新鲜，Word、Photoshop、Sketch 导出成 HTML 早就已经是存在了很久的功能了。

每次 AI 出点什么新闻，都会让一批人背后一凉，担心什么时候自己就失业了。但在我看来，AI 再厉害不过是个熟练工。如果一件事情只要重复次数多了谁都能来，那它就有可能被 AI 做到，否则，那就不用担心。不管是设计，还是开发，都属于创造型工作，从创意到实现的过程或许能被 AI 代替，但形成创意的过程，再强大的电脑也算不过来。

<!-- 自动识别、自动生成，这是 AI 给我们带来的便利，但我们并不会因此就失业。AI 可以根据训练的结果，得出一个靠谱的结果。但 AI 永远不可能具备的，就是创造力。就像工厂流水线上的自动化设备，它可以取代流水线上的人工，甚至自己制造自己，但它永远不可能知道接下来该去。 -->

<!-- <a target='_blank' href=''></a> -->