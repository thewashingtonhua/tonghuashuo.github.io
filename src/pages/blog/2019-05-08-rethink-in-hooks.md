---
title: '重新 Think in Hooks'
description: '忘记过去之所学，我们从头来过'
tags: ['react', 'hooks']
cover: '../../images/blog/think-in-hooks-again.jpg'
series: ''
draft: true
original: true
---

## 为什么要重新来过？

我之前写过 [一篇博客](/blog/2019/02/15/how-to-think-in-hooks)，介绍了 Class 组件的各个生命周期钩子函数在 Hooks 中对应的方案。那时 Hooks 刚刚发布，开发者最关心的莫过于代码的迁移问题，也就是怎么把现有的 Class 组件改造成 Hooks 的方式。

尽管这种方式非常的直观有效，但很快我们就发现，事情似乎没那么简单。单纯用这个思维来考虑问题，并不能很好地解释 Hooks 的一些行为，比如 `useEffect` 中的变量有时候无法获取最新的值、命令式的回调函数也不总是按照我们的预期工作，`useEffect` 的依赖数组好像总是缺点什么。

在亲自踩了 2 个多月的坑，参与了一些 [React 官网的翻译工作](https://github.com/reactjs/zh-hans.reactjs.org/pull/121)，拜读了 [几篇](https://overreacted.io/making-setinterval-declarative-with-react-hooks) [非常好的](https://overreacted.io/react-as-a-ui-runtime) [博客](https://overreacted.io/a-complete-guide-to-useeffect) 之后，我幡然醒悟，对「如何 Think in Hooks」有了新的认识。

因此这篇博客，我们来「重新 Think in Hooks」。

## 当我们讨论 Hooks 时，我们到底在讨论什么？

要理解 Hooks，我们得先回到 Hooks 的本质 —— 一种逻辑复用的方式。

Hooks 并不是新的组件类型，当我们讨论 Hooks 时，我们讨论的其实是函数组件 —— 就是那种没有 state、没有生命周期、只是根据 props 返回相应的 JSX 的渲染函数。Hooks 的出现让函数组件可以拥有和 Class 组件一样可以拥有 state（是可以，不是必须），相应的也就有了生命周期。因此确切的说，我们是在讨论使用了 Hooks 的函数组件。

但是「使用了 Hooks 的函数组件」这个词太长了，而下文我又将经常提到这个词，所以在后面的文字中，我将简单用 Hooks 来表示这个概念。

## 欲练此功，必先……忘记过去

当我们在使用 Class 组件时，每当 props 或 state 有更新，只有 `render()` 函数会重新执行，其它成员函数（生命周期函数除外）并不会因此而重新执行。这个逻辑放到 Hooks 里是行不通的，这也是很多问题产生的根源。

所以要想真正实现 Think in Hooks，首先你得忘记如何 Think in Class。

## 为什么我的 state 没更新？

Hooks 的本质是一个渲染函数，就像是 Class 组件的 `render()` 函数一样。

`render()` 函数在运行时会根据那一次的 props 和 state 去渲染。如果在 `render()` 函数运行期间 props 或是 state 再次发生变化，并不会影响这一次的执行，而是会触发新一轮的渲染，`render()` 再一次被调用，并且这一次传入的是变化后的 props 和 state。

到这里我们得出结论：

> `render()` 函数中用到的 props 和 state 在函数执行的一开始就已经被确定了。

好了，理论说得够多了，我们来看代码吧。假设我们有这样一个组件：

```jsx
function Counter () {
  const [count, setCount] = useState(0)

  function onClick () {
    setTimeout(() => {
      setCount(count + 1)
    }, 2000)
  }

  return <p onClick={onClick}>You clicked {count} times</p>
}
```

等价的 Class 组件实现可以是下面这样：

```jsx

class Counter extends Component {
  state = {
    count: 0
  }

  onClick = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 2000)
  }

  render () {
    return <p onClick={this.onClick}>You clicked {this.state.count} times</p>
  }
}

```

对比一下两段函数，如果把 Class 的语法中的所有东西全部塞到 `render()` 函数里，然后把 `render()` 函数单独拎出来，给变量和函数换个名字 —— 恭喜你，你得到了一个等效的 Hooks ！

开玩笑的，但这真的很像对不对。

现在考虑一个问题：如果我在 2 秒内连续点击组件 3 次，那么到第 5 秒的时候，组件会显示什么？

在类组件的实现中，结果是 3，因为触发了 3 次更新，每次都在原有的基础上加 1。

但在 Hooks 的实现中，结果意外地变成了 1。很奇怪对不对，明明是一样的逻辑，为什么结果不一样？（我向你保证这跟闭包没有关系）

如果你在 `onClick` 函数中 `console.log` 一下，你会发现点击事件确实被触发了 3 次，但是 3 次 `count` 的值是一样的。

这是为什么？

还记得我们前面的结论吗？「`render()` 函数中用到的 props 和 state 在函数执行的一开始就已经被确定了」。为了简化问题，我们可以把 Hooks 的代码中所有用到的 props 和 state 直接替换成那一次的取值：

```jsx
// 第一次渲染
function Counter () {
  // 这里是对 useState 的等价替换
  const count = 0 // highlight-line
  const setCount = (val) => { ... }

  function onClick () {
    setTimeout(() => {
      setCount(0 + 1) // highlight-line
    }, 2000)
  }

  return <p onClick={onClick}>You clicked 0 times</p> // highlight-line
}
```

注意到第 9 行的变化了么？这就是为什么。在这 2 秒钟之内，无论点击多少次，我们都是在给组件下达同样的指令：2 秒钟后把 `count` 设置为 1。2 秒之后组件或许会被更新多次，但结果都是一样的。`onClick` 函数中 `count` 的值在一开始就已经被确定了。

> 这里有一个细节，如果你碰巧真的运行了刚才的代码，你或许会注意到，不管我们在 2 秒之内点击了组件多少次，点击事件和 `setTimeout` 会执行同样的次数，但组件最多更新 2 次。这应该是 React 自身的一种优化机制吧。
>
> 在写这个 Demo 时我所用的 React 版本是 16.8.6，我并不清楚这个特性是从哪个版本开始加入的，但这确实是个不错的特性。

那如果我想实现 Class 版本的那种效果要怎么办？可以通过给 `setCount()` 传入一个回调函数来解决：

```jsx
function Counter () {
  const [count, setCount] = useState(0)

  function onClick () {
    setTimeout(() => {
      setCount(c => c + 1) // highlight-line
    }, 2000)
  }

  return <p onClick={onClick}>You clicked {count} times</p>
}
```

这里表示不管 count 现在的值是多少，往上加一就好了。Class 组件中的 `setState()` 函数也有同样的写法，虽然它俩的目的并不相同。

## 永远对 useEffect 的依赖数组保持诚实

这就是为什么我们经常会遇到 useEffect 里的值

## 不要担心重复定义函数

## 如何在 Hooks 中请求数据

## 如何实现 `setInterval()`

## 小结

第一次看到官方文档中的「It takes a bit of a mindshift to start “thinking in Hooks”」这句话的时候，我并没有太当回事，觉得无非就是有一样新东西要学而已。时隔几个月再看，这句话分量还是挺重的。从 Class 到 Hooks 的变化真的很大。

React 从一开始就推崇声明式的设计，万物皆组件，最大的感受就是路由的设计。Hooks 相比 Class 更加符合声明式的设计，从此 React 进入「万物皆函数」的时代。

如果你觉得 Hooks 是一颗重磅炸弹，我建议你了解一下 [Concurrent Mode](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html#react-16x-q2-2019-the-one-with-concurrent-mode)。然后你会发现，Hooks 只是一道前菜。