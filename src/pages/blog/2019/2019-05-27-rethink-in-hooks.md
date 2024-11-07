---
title: '重新 Think in Hooks'
description: '忘记过去之所学，我们从头来过'
tags: ['react', 'hooks']
cover: '../../../images/blog/rethink-in-hooks.jpg'
series: ''
draft: false
original: true
---

## 为什么要重新来过？

我之前写过 [一篇博客](/blog/2019/02/15/how-to-think-in-hooks)，介绍了 Class 组件的各个生命周期钩子函数在 Hooks 中对应的方案。那时 Hooks 刚刚发布，开发者最关心的莫过于代码的迁移问题，也就是怎么把现有的 Class 组件改造成 Hooks 的方式。

尽管这种方式非常的直观有效，但很快我们就发现，事情似乎没那么简单。单纯用这个思维来考虑问题，并不能很好地解释 Hooks 的一些行为，比如 `useEffect` 中的变量有时候无法获取最新的值、命令式的回调函数也不总是按照我们的预期工作，`useEffect` 的依赖数组好像总是缺点什么。

在亲自踩了 2 个多月的坑，参与了一些 [React 官网的翻译工作](https://github.com/reactjs/zh-hans.reactjs.org/pull/121)，拜读了 [几篇](https://overreacted.io/a-complete-guide-to-useeffect) [非常好的](https://overreacted.io/react-as-a-ui-runtime) [博客](https://overreacted.io/making-setinterval-declarative-with-react-hooks) 之后，我对「如何 Think in Hooks」有了新的认识。

因此这篇博客，我们来「重新 Think in Hooks」。

## 当我们讨论 Hooks 时，我们到底在讨论什么？

要理解 Hooks，我们得先回到 Hooks 的本质 —— 一种逻辑复用的方式。

Hooks 并不是新的组件类型，当我们讨论 Hooks 时，我们讨论的其实是函数组件 —— 就是那种只是根据 props 返回相应的 JSX 的渲染函数。Hooks 的出现让函数组件可以和 Class 组件一样可以拥有 state（是可以，不是必须）。因此确切的说，我们是在讨论使用了 Hooks 的函数组件。

但是「使用了 Hooks 的函数组件」这个词太长了，而下文我又将经常提到这个词，所以在后面的文字中，我将简单用 Hooks 来表示这个概念。

## 忘掉你所学

当我们在使用 Class 组件时，每当 props 或 state 有更新，所有的修改都发生在 React 组件实例上，就像修改一个对象的属性一样。这个逻辑放到 Hooks 里是行不通的，函数组件的渲染只是简单的函数调用，不加 `new` 的函数调用是不存在所谓生成实例的。这也是很多问题产生的根源。

所以要想真正 Think in Hooks，首先你得忘记如何 Think in Class，改为 Think in Functions。

## 为什么我的 state 不更新？

Hooks 的本质是一个渲染函数，就像是把 Class 组件的 `render()` 函数单独提取出来一样。

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

现在考虑一个问题：如果我在 2 秒内点击组件 3 次，那么到第 5 秒的时候，组件会显示什么？

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

那如果我想实现 Class 版本的那种效果要怎么办？可以通过给 `setCount()` 传入一个回调函数来解决（如果可以的话，我推荐在更新 state 时尽量采用这种写法，原因后面会讲到）：

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

## useEffect 的依赖数组到底应该怎么用

这可能是刚接触 Hooks 时最让人头疼的一个问题，相信每个人都对「依赖数组里的内容会决定 Effect 是否会重新执行」这一点印象深刻，给人感觉这就是 `componentDidUpdate()` 的等效实现，按照我们对 Class 组件的认知，只要依赖数组里的内容不变，Effect 就不会重新执行；如果某个变量不参与比对的过程，就不需要出现在依赖数组中。然而依赖数组并没有我们想象的这么简单。

依赖数组真正的含义，是「这个 Effect 引用了哪些外部变量」。不管它是否参与比对的过程，只要 Effect 中引用了（也就是 Effect 依赖了这个变量），就必须出现在依赖数组中。举个例子：

在下面的代码中，我们想要实现：`foo` 或 `bar` 在被点击时自身加一，其中任何一个的变化都会触发 `total` 也加一，同时有一个 Effect 在每秒打印 `total` 的值。由于我们只需要在组件挂载时启用一下计时器就好，因此我们把依赖数组留空。

```jsx
const App = (props) => {
  const [total, setTotal] = useState(0)
  const [foo, setFoo] = useState(0)
  const [bar, setBar] = useState(0)

  // highlight-range{1-5}
  useEffect(() => {
    setInterval(() => {
      console.log(total)
    }, 1000)
  }, [])

  function updateTotal () {
    setTotal(t => t + 1)
  }

  function addFoo () {
    setFoo(f => f + 1)
    updateTotal()
  }

  function addBar () {
    setBar(b => b + 1)
    updateTotal()
  }

  return <>
    <button onClick={addFoo}>{foo}</button>
    +
    <button onClick={addBar}>{bar}</button>
    =
    <span>{total}</span>
  </>
}
```

这个 Effect 引用了 `total` 这个变量，但是 `total` 并没有参与「是否要执行这个 Effect」的决策。按照我们之前对于 Class 组件的理解，`total` 不需要出现在依赖数组中。那么我们来执行一下这段代码。

点击按钮，`foo` 和 `bar` 如我们预期的那样自增了，页面上 `total` 也显示了最新的值。然而控制台打印出来的 `total` 却始终为 0。

为什么会这样？

如我们上一节所说的，「`render()` 函数中用到的 props 和 state 在函数执行的一开始就已经被确定了」，Effect 也是 render 函数的一部分，因此同样适用这条规则，那么我们带入变量值看一下：

```jsx
// 初始化时
useEffect(() => {
  setInterval(() => {
    console.log(0)
  }, 1000)
}, [])
```

```jsx
// 点击 foo
useEffect(() => {
  setInterval(() => {
    console.log(0)
  }, 1000)
}, [])
```

```jsx
// 再点击 bar
useEffect(() => {
  setInterval(() => {
    console.log(0)
  }, 1000)
}, [])
```

由于 `total` 并没有在依赖数组中申明，因此 `total` 的更新不会触发 Effect 重新执行，也就不会去获取它的最新值，每次执行都引用了第一次执行时候的值。

要解决这个问题，我们可以把 `total` 加入依赖数组，告诉 Effect 当 `total` 更新时重新执行 Effect，这样依赖 Effect 就能在重新执行时获取到 `total` 的最新值了。同时注意，由于每次 `total` 改变会引起 Effect 的重新执行，因此 `setInterval()` 也会重复执行，创建多个计时器，要解决这个问题，只要让 Effect 返回一个清理函数，结束掉上一个计时器即可：

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log(total)
  }, 1000)

  return () => {
    clearInterval(id)
  }
}, [total])
```

这么一来，程序就正常了。

现在新版的 React 已经自带了对 Hooks 规则的一些检查，当它发现一些不合规的写法（比如 Effect 中引用了外部变量，但没有在依赖数组中进行申明），就会给出提示。只要保持使用最新版的 React，理论上就可以避免这一类的错误。如果你出于某些原因不方便升级，也可以手动安装 [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) 来进行检查。

总的来说，对于 `useEffect()` 的依赖数组，一定要牢记：

> 只要是 `useEffect()` 中用到的，都要在依赖数组中申明。

那如果 `useEffect()` 中引用了一些不参与「是否执行 Effect」的决策的变量，我们要怎么处理这些尴尬的变量呢？别担心，方法有很多：

1. 用回调函数的方式来设置 state，以解除对某些 state 变量的引用。
2. 如果组件内部的函数仅用于某个 Effect，可以把这个函数的定义移到 `useEffect()` 内部，以解除对某些函数的引用。
3. 如果一些变量的存在是为了决定另一些变量（比如 url 查询参数），可以把相关逻辑抽取为独立的函数，用 `useCallback()` 进行优化，然后我们就可以把这部分变量提取到 Effect 之外去，以精简依赖数组。
4. 实在没法优化了，还有个最简单粗暴的方法。在 `useEffect()` 中对所有参与决策的变量进行比对，判断是否发生变化，以决定是继续执行还是就此返回。

## 不要担心重复定义函数

从工程学的角度，我们习惯通过缓存来避免频繁的销毁和重建同样的内容。在 Class 组件中，通过函数绑定，我们可以很轻易的做到这一点。但在 Hooks 中，我们或许需要改变一下习惯，试着接受这一类的开销。

由于函数组件的特性，它不像类组件的实例那样，存在生命周期的概念。函数组件的核心就只有一个渲染函数，即便 Hooks 引入了 state，函数组件的更新也还是重新执行整个函数，而不是在某个实例上小修小改。这样的特定就决定了函数组件内定义的函数，会在组件每次重新渲染时被销毁然后重建，即便函数本身并没有改变，只是传入的参数发生了改变。Hooks 的执行就只是单纯的「渲染 -> 执行 Effect」，当组件状态发生改变，它并不是去修改某个现有的东西，而是给组件的函数传入新的参数，然后重置走一遍「渲染 -> 执行 Effect」的流程。

事实上，Hooks 的每一次渲染，都有它自己的 props、state、函数、Effect、……所有的一切都是这一次渲染独有的。

好在，只要不是非常高频的更新，这种程度的开销并不会对我们的应用造成明显的负面影响。因此我们可以允许这种反模式的存在。

## 如何在 Hooks 中发起 HTTP 请求

在 Class 组件中，我们常见的做法是定义一个获取数据的函数，在其中读取 props 和 state，拼接出要传递的参数，好一点的做法或许还要判断一下 loading 状态以避免重复操作和异步冲突，然后发起其请求，等 Promise 被 resolve 后，处理返回的结果，更新一些 state。

但当我们尝试在 Hooks 中重现这一套路时，我们遇到了问题。要想读取最新的 props 和 state，我们就必须把发起请求的函数写到一个 Effect 中，并且所有引用到的变量都必须放进依赖数组中。这就导致我们必须非常小心地处理每一个依赖的变化，一不小心就会陷入死循环。

具体的操作，展开来篇幅太长了，这里就不展开了，推荐一篇非常全面的[文章](https://www.robinwieruch.de/react-hooks-fetch-data/)，需要的可以看一下。这篇文章国内有不少人做了翻译，[这篇](https://juejin.im/post/5c98fb35518825157172acc6)是一个不错的译本，英文有压力的同学可以看看。

## 如何使用 `setInterval()`

还有一个非常常见的命令式操作，就是设置定时器。

比如一个短信验证码的倒计时，在 Class 组件中，我们通常会这么做：

```jsx
state = {
  countdown: 0
}

timer = null

startCountdown = (duration) => {
  this.setState({ countdown: duration }, () => {
    this.timer = setInterval(() => {
      this.setState({ countdown: this.state.countdown - 1 }, () => {
        if (!this.state.countdown) {
          clearInterval(this.timer)
        }
      })
    }, 1000)
  })
}
```

现在我们尝试改用 Hooks 来实现。

设置一个 state 用于存储当前剩余秒数，然后在 `setInterval()` 的回调函数中更新这个值（通过回调函数的写法，我们不需要引用这个 state 也能正确更新它）。很好，倒计时开始了，页面上也能获取到更新了，目前为止一切顺利。

```jsx
const [countdown, setCountdown] = useState(0)
const timer = useRef()

function startCountdown (duration) {
  setCountdown(duration)
  timer = setInterval(() => {
    setCountdown(c => c - 1)
  }, 1000)
}
```

3、2、1、0、-1？问题出现了。我们希望数到 0 的时候结束倒计时，为此我们需要判断 countdown 是否为 0 以决定是否要 `clearInterval()`，然而现在我们无法直接读取 countdown 的最新值。为了能读到 countdown 的最新值，我们需要把这个逻辑放到一个 Effect 里，并把 countdown 放进依赖数组中。

```jsx
const [countdown, setCountdown] = useState(0)

function startCountdown (duration) {
  setCountdown(duration)
}

useEffect(() => {
  if (!countdown) return
  timer = setInterval(() => {
    setCountdown(c => c - 1)
    if (!countdown) {
      clearInterval(timer)
    }
  }, 1000)
}, [countdown])
```

然而事情还没有结束，仔细看一下代码，不难发现每次 countdown 更新都会触发一次新的 `setInterval()`，这并不是我们想要的。并且我们没法提前结束这个计时器。

哎~明明在 Class 组件中很简单的事情，怎么到了 Hooks 中这么复杂。

解决方案看[这里](https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/)，你会惊讶的。

## 小结

第一次看到官方文档中的「It takes a bit of a mindshift to start “thinking in Hooks”」这句话的时候，我并没有太当回事，觉得无非就是有一样新东西要学而已。时隔几个月再看，这句话分量还是挺重的。从 Class 到 Hooks 的变化真的很大，很多思维模式都变了，我们甚至需要接受一些曾经极力避免的反模式。

React 从一开始就推崇声明式的设计，万物皆组件，最大的感受就是路由的设计。Hooks 相比 Class 更加符合声明式的设计，从此 React 进入「万物皆函数」的时代。

如果你觉得 Hooks 是一颗重磅炸弹，我建议你了解一下 [Concurrent Mode](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html#react-16x-q2-2019-the-one-with-concurrent-mode)。然后你会发现，Hooks 只是一道前菜，是为后面真正的主菜做铺垫用的。