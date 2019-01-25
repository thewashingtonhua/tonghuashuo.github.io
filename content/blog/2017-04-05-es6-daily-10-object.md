<h2>迟来的更新</h2>
<p>想来这个系列上一次更新还是去年年底的时候……真心对不起日更的标题，这个Flag立大了……虽然时至今日ES6已经不再新鲜，不过自己挖的坑说什么也得填完，这一篇咱继续对象的扩展。</p>
<p>ES5 给对象加入了大量实用的方法，用于创建、枚举、封闭一个对象，ES6 在此基础上进一步完善。</p>

<h2>属性简写</h2>
<p>ES6 允许在对象之中直接使用单个变量来代表属性键值对，变量名就是属性名，变量值就是属性值。</p>
<pre><code class="javascript">const foo = 'bar';
const baz = {foo};
baz // {foo: 'bar'}


// 该规则同样适用于函数返回
function f(x, y) {
  return {x, y}
}
f(1, 2) // {x:1, y:2}

// 这非常适合用于在 CommonJS 中导出变量
module.exports = {f1, f2, f3};</code></pre>

<p>函数作为属性时也可以省略<span class="code">function</span>关键字，如同在 ES6 的 class 中的写法一样：</p>
<pre><code class="javascript">var o = {
  method() {
    return 'hello';
  }
}</code></pre>

<p>简写的属性名始终被当做字符串看待，不用避讳语言本身的关键字，因此完全可以定义一个方法叫<span class="code">class() {}</span>。</p>

<h2>属性名表达式</h2>
<p>ES6 允许在使用字面量定义对象时使用表达式来作为属性名，表达式用方括号包裹：</p>
<pre><code class="javascript">let propKey = 'foo';
let obj = {
  [propKey]: true,
  ['a' + 'b']: 123
};

// obj {foo: true, ab: 123}</code></pre>

<p>但这种写法不能和属性简写一起用，否则会报错。（表达式的值就是属性名，属性值无从取得，逻辑上走不通）</p>
<pre><code class="javascript">var foo = 'bar';

var baz = { [foo] }         // 报错
var baz = { [foo]: 'abc' }  // 正确</code></pre>

<p>属性名表达式如果是一个对象，那么默认会转为字符串<span class="code">[object Object]</span>，需要留意。</p>
<pre><code class="javascript">const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};
// Object {[object Object]: "valueB"}
// [keyA]、[keyB]都解析为[object Object]，后者将前者覆盖</code></pre>

<h2>方法的name属性</h2>
<p>函数的<span class="code">name</span>属性返回函数名。</p>
<pre><code class="javascript">const person = {
  sayName() {
    console.log('hello!');
  },
};

person.sayName.name   // "sayName"

// 匿名函数返回空字符串
(function () {}).name // ""
// Function 构造函数创建的返回anonymous
(new Function()).name // anonymous

// 用函数表达式构造的函数，优先使用等号右边的函数的名称，如果是匿名函数则返回左边的变量名
var v = function() {}
v.name // "v"
var v = function f() {}
v.name // "f"

// 通过bind方法创建的函数，name前面会加上bound字样
var doSomething = function() {
  // ...
};
doSomething.bind().name // "bound doSomething"</code></pre>

<p>特别的，对于使用了 getter 和 setter 的方法，直接访问<span class="code">name</span>会得到<span class="code">undefined</span>，需要在获得属性描述之后再进一步访问一下<span class="code">get</span>/<span class="code">set</span>才能访问到<span class="code">name</span>。</p>
<pre><code class="javascript">const obj = {
  get foo() {},
  set foo(x) {}
};

obj.foo.name
// TypeError: Cannot read property 'name' of undefined

const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

descriptor.get.name // "get foo"
descriptor.set.name // "set foo"</code></pre>

<p>如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。</p>
<pre><code class="javascript">const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
  [key1]() {},
  [key2]() {}
};
obj[key1].name // "[description]"
obj[key2].name // ""，key2没有描述，所以为空</code></pre>

<h2>Object.is()</h2>
<p>ES6 引入了一种“同值相等”比较，作为“==”和“===”的补充。使用“==”时会自动转换类型，使用“===”时NaN不等于自身，+0和-0相等，而<span class="code">Object.is()</span>只要两边的值相等就相等。大部分情况下<span class="code">Object.is()</span>和===等效，但对于两种特殊情况的处理是相反的。</p>
<pre><code class="javascript">Object.is('foo', 'foo') // true，字符串值相同
Object.is({}, {}) // false，对象是引用，两个不同的引用不等值

Object.is(1, '1') // false，不会自动转换，数字和字符串不等
Object.is(+0, -0) // false，区分正负

Object.is(NaN, NaN) // true，NaN 不等于 NaN 本来就不合理</code></pre>

<h2>Object.assign()</h2>
<p>用于合并两个对象，依参数列表顺序右边覆盖左边。此前要么开发者自行实现<span class="code">extend()</span>函数，或者用一些类库封装的<span class="code">extend</span>（例如：jQuery 的<span class="code">$.extend()</span>）。常用于插件开发中的自定义参数覆盖默认参数。</p>
<pre><code class="javascript">const opt1 = {x:1, y:2};
const opt2 = {x:3};
const opt = Object.assign({}, opt1, opt2); // {x:3, y:2}</code></pre>

<p>如果参数只有一项的话，函数会直接返回参数，非对象参数会自动转换成对象。但有一些特殊情况：</p>
<ul>
  <li>如果<span class="code">undefined</span>或<span class="code">null</span>作为第一个参数则会报错，在之后则会跳过（无法转成对象的都会被跳过）</li>
  <li>数值、布尔值可以被转换成包装对象，但依然会被忽略，因为它们的原始值在包装对象的<span class="code">[[PrimitiveValue]]</span>属性上，而该属性是不可枚举的，因此等效于空对象</li>
  <li>字符串转对象会被拆分成数组，除了原始值会被拷贝到<span class="code">[[PrimitiveValue]]</span>属性中，每个字符都是可枚举的实义属性，因此是有效的。</li>
</ul>
<p><span class="code">Object.assign()</span>只拷贝对象的自有属性，属性名为 Symbol 的属性也会被拷贝，继承属性和不可枚举的属性不会被拷贝。</p>
<p><span class="code">Object.assign()</span>执行的是浅拷贝，对于同名属性会直接覆盖而非合并。</p>
<p><span class="code">Object.assign()</span>可以用于处理数组，但会把数组转换成属性名为 0、1、2……的对象，并依次替换。</p>

<h2>Object.keys()、Object.values()、Object.entries()</h2>
<p>ES5 引入了 <span class="code">Object.keys()</span>来返回一个数组，其成员是参数对象的可枚举的自有属性的键名，ES2017 跟着引入了<span class="code">Object.values()</span>和<span class="code">Object.entries()</span>用于返回属性对应的值，以及以键值对数组的形式返回。可以配合<span class="code">for...of</span>循环使用。</p>

<h2>Object.getOwnPropertyDescriptors()</h2>
<p>ES5 中有个<span class="code">Object.getOwnPropertyDescriptor()</span>函数用于返回某个对象属性的描述对象（值、是否可修改、可枚举、可配置），ES2017 新增了一个更全面的函数（函数名后面加了个 s），可以直接作用于对象，返回该对象所有自有属性（非继承属性）的描述对象。原理上其实非常简单，就是对对象的所有自有属性循环调用<span class="code">Object.getOwnPropertyDescriptor()</span>，然后返回一个集合。</p>
<pre><code class="javascript">// ES5
var obj = { p: 'a' };

Object.getOwnPropertyDescriptor(obj, 'p')
// Object {
//   value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// ES2017
const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

Object.getOwnPropertyDescriptors(obj)
// {
//   foo: {
//     value: 123,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   bar: {
//     get: [Function: bar],
//     set: undefined,
//     enumerable: true,
//     configurable: true
//   }
// }</code></pre>

<p>新函数存在的主要意义，是为了解决<span class="code">Object.assign()</span>无法正确拷贝 getter 和 setter 的问题。</p>
<p><span class="code">Object.assign()</span>在拷贝对象属性时只拷贝它的值，getter 或者 setter 属性没有 value 描述，因此访问会得到<span class="code">undefined</span>。使用<span class="code">Object.getOwnPropertyDescriptors()</span>配合<span class="code">Object.defineProperties</span>可以实现正确拷贝。</p>
<pre><code class="javascript">const source = {
  set foo(value) {
    console.log(value);
  }
};

const target = {};
Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
Object.getOwnPropertyDescriptor(target, 'foo')
// {
//   get: undefined,
//   set: [Function: foo],
//   enumerable: true,
//   configurable: true
// }</code></pre>

<p>据此，我们可以进一步实现更为完善的<span class="code">merge()</span>、<span class="code">clone()</span>等方法（都是浅拷贝）。</p>
<pre><code class="javascript">const merge = (target, source) => Object.defineProperties(
  target,
  Object.getOwnPropertyDescriptors(sourse)
);

const clone = (obj) => Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);</code></pre>

<h2>属性的遍历</h2>
<p>ES6 中一共有 5 种遍历对象属性的方法：</p>
<div class="table-wrapper">
  <table cellspacing="0">
    <tr>
      <th>方法名</th>
      <th>遍历自有属性（非Symbol）</th>
      <th>遍历自有属性（Symbol）</th>
      <th>遍历继承属性</th>
      <th>遍历不可枚举属性</th>
    </tr>
    <tr>
      <td>for...in</td>
      <td class="true">是</td>
      <td class="false">否</td>
      <td class="true">是</td>
      <td class="false">否</td>
    </tr>
    <tr>
      <td>Object.keys(obj)</td>
      <td class="true">是</td>
      <td class="false">否</td>
      <td class="false">否</td>
      <td class="false">否</td>
    </tr>
    <tr>
      <td>Object.getOwnPropertyNames(obj)</td>
      <td class="true">是</td>
      <td class="false">否</td>
      <td class="false">否</td>
      <td class="true">是</td>
    </tr>
    <tr>
      <td>Object.getOwnPropertySymbols(obj)</td>
      <td class="false">否</td>
      <td class="true">是</td>
      <td class="false">否</td>
      <td class="false">否</td>
    </tr>
    <tr>
      <td>Reflect.ownKeys(obj)</td>
      <td class="true">是</td>
      <td class="true">是</td>
      <td class="false">否</td>
      <td class="true">是</td>
    </tr>
  </table>
</div>
<p>这 5 种方法在遍历对象属性时都遵守同样的次序规则：</p>
<ol>
  <li>先遍历属性名为数值的属性，由小到大</li>
  <li>在遍历属性名为字符串的属性，按生成时间为序</li>
  <li>最后遍历属性名为Symbol值的属性，按生成时间为序</li>
</ol>

<h2>该系列的其他文章</h2>
<p>上一篇：<a href="es6-daily-09-function.html">每天一点ES6(9)：函数的扩展</a></p>
<p>下一篇：<a href="es6-daily-11-symbol.html">每天一点ES6(11)：Symbol</a></p>