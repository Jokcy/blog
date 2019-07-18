(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{270:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return p}),a.d(t,"default",function(){return r});a(37);var n=a(29),b=a.n(n),c=(a(0),a(99)),p={title:"为什么react-redux没有更新hooks API",cover:"http://ww1.sinaimg.cn/large/a90af92bly1g0qi36cwv4j20yn077aar.jpg",date:"2019-02-27",description:"React Hooks 正式发布之后，正常来说社区的大部分类库都会及时跟进，但是为什么到现在 React-Redux 到目前都没有更新 Hooks 的 API 呢？因为这里存在着一个 Context API 的性能问题...",tags:["react","redux"]},s={_frontmatter:p},o="wrapper";function r(e){var t=e.components,a=b()(e,["components"]);return Object(c.b)(o,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"按照正常来讲，像 React-Redux 这一类较为活跃的社区类库，在 React 有较大的更新出现的时候一般都会及时跟进的。而这一次 React 的 Hooks 发布，有将近两个月的 beta 期，以及到截止本篇文章发布已经 Hooks 正式版也已经将近一个月来，React-Redux 到现在都没有正式发布一个类似",Object(c.b)("inlineCode",{parentName:"p"},"useRedux"),"这样的 Hooks API，那么这是为什么呢？我们来分析一下原因。")),Object(c.b)("p",null,"去年年底，出于兴趣，研究了一波 redux 和 react-redux 的源码，除了在原理上的理解之外，让我较为好奇的一点就是：",Object(c.b)("strong",{parentName:"p"},"React-Redux"),"到目前为止都没有对 Hooks 进行支持。从使用角度上来讲，出现一个类似："),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"function")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"ConnectedComponent"),"(",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"})),") "),"{\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," store = useReduxStore()\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," state = useRedux(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"function")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"mapState"),"(",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"})),"))\n}"))),Object(c.b)("p",null,"这样的代码是非常可以理解的，而且也是非常符合 Hooks 的使用习惯的，事实上社区上也出现来很多非官方的 reudx Hooks 的类库："),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/facebookincubator/redux-react-hook"}),"react-redux-hooks")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/philipp-spiess/use-substate"}),"use-substate")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/martynaskadisa/react-use-redux"}),"react-use-redux"))),Object(c.b)("p",null,"说明了总体上社区对于 Hooks 的接受度是很高的，大家应该都在期待官方能给出一个真正的 Hooks API。那么为什么 React-Redux 到现在都没有发布正式的 Hooks API 呢？"),Object(c.b)("p",null,"在翻阅 React-Redux 的 issues 列表的时候，我发现了",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/reduxjs/react-redux/issues/1177"}),"这个 issue"),"。作者非常完整得为我们介绍了 React-Redux 从最初得 idea 到现在 v6 版本得成长历程。那么 v6 版本相比 v5 版本有哪些大的变化呢？"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"使用",Object(c.b)("inlineCode",{parentName:"li"},"createContext"),"来传递 state"),Object(c.b)("li",{parentName:"ul"},"只有",Object(c.b)("inlineCode",{parentName:"li"},"Provider"),"订阅了 store 的变化"),Object(c.b)("li",{parentName:"ul"},"不再对被",Object(c.b)("inlineCode",{parentName:"li"},"connect"),"的组件传递 store 对象")),Object(c.b)("p",null,"v6 版本更新这些内容的主要原因如下："),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"老的 context API 即将被删除，并且如果和新的 context API 一起使用会有问题"),Object(c.b)("li",{parentName:"ul"},"React 即将推出",Object(c.b)("inlineCode",{parentName:"li"},"Concurrent Mode"),"异步渲染，如果使用老的方式可能会导致不同的子树获取的状态不同，使用新的 context API，React 会确保整棵树拿到的是相同的状态"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"createContext"),"默认带有",Object(c.b)("em",{parentName:"li"},"top-down"),"数据流，不再需要 React-Redux 自己实现")),Object(c.b)("p",null,"以上是 v6 版本的变化和其原因，但是到目前为止我们好像并没有看到任何提及 Hooks 的地方。别急，接下去就是正题了。"),Object(c.b)("p",null,"在升级到 v6 的过程中，React-Redux 团队发现 v6 版本的整体性能是比不上 v5 的。这个性能下降的主要原因不是 React-Redux 的实现代码有什么问题，其主要问题是来自",Object(c.b)("inlineCode",{parentName:"p"},"createContent"),"的实现方式，以及 React-Redux 选择了只有在",Object(c.b)("inlineCode",{parentName:"p"},"Provider"),"中订阅 store 变化。"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"注意"),Object(c.b)("p",{parentName:"blockquote"},"React-Redux 选择使用",Object(c.b)("inlineCode",{parentName:"p"},"createContext"),"和只有在",Object(c.b)("inlineCode",{parentName:"p"},"Provider"),"中订阅都是没有任何问题的，也是 React 官方推荐的使用方法，从面向未来的眼光来看，这是势必的升级。所以同学们在后面分析问题的时候不要问，为什么不换个实现方式啥的。")),Object(c.b)("p",null,"那么所谓的性能问题具体是怎么来的呢？",Object(c.b)("strong",{parentName:"p"},"主要原因是",Object(c.b)("inlineCode",{parentName:"strong"},"createContext"),"在 value 变化的时候他是如何通知子树的。"),"我们先来看一组性能测试对比图："),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"http://ww1.sinaimg.cn/large/a90af92bly1g0qi36cwv4j20yn077aar.jpg",alt:"react-redux-benchmark"}))),Object(c.b)("p",null,"这个测试用例来自",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/reduxjs/react-redux-benchmarks"}),"react-redux-benchmarks"),"，大家有兴趣可以自己去跑一下。"),Object(c.b)("p",null,"从图中我们可以看出来，v6 主要性能降低的点是来自于",Object(c.b)("inlineCode",{parentName:"p"},"Scripting"),"，也就是运行 JavaScript 脚本的时间，从数据上来看，是 v5 版本的两倍多。虽然在",Object(c.b)("inlineCode",{parentName:"p"},"Rendering"),"和",Object(c.b)("inlineCode",{parentName:"p"},"Painting"),"阶段要好很多，但是因为",Object(c.b)("inlineCode",{parentName:"p"},"Scripting"),"的占比最大，所以总体上讲是略微有些下降的。"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"其根本原因是",Object(c.b)("inlineCode",{parentName:"strong"},"createContext"),"的实现方式中，我们更改了",Object(c.b)("inlineCode",{parentName:"strong"},"Provider"),"的 value，那么在这次更新周期中，React 会遍历",Object(c.b)("inlineCode",{parentName:"strong"},"Provider"),"的所有子节点，并对监听了这一个 context 的节点进行标记，让后续渲染中知道这个节点是需要更新的，即便他的 props 和 state 根本没有变化。"),"关于为什么 React 要这么去实现的原因不是一句话能讲完的，他涉及到 React 16 之后 Fiber 判断一个节点是否有更新的方法，后面我会单独写一篇文章来讲解，现在大家只需要知道他就是这么实现的就可以了。"),Object(c.b)("p",null,"因为上诉的原因，我们可以想象在一个节点非常多的 React 应用中，一个类似 React-Redux 这样放置在最顶层的",Object(c.b)("inlineCode",{parentName:"p"},"Provier"),"数据变化之后，他的总体计算量肯定是非常大的。"),Object(c.b)("p",null,"相对的，在 v5 中因为使用老的 context API，为了避免一些这个 API 带来的问题，所以 React-Redux 团队选择在",Object(c.b)("inlineCode",{parentName:"p"},"connect"),"返回的",Object(c.b)("inlineCode",{parentName:"p"},"WrapperComponent")," HOC 中进行 store 数据变化的监听，也就是说 Store 变化之后之后被",Object(c.b)("inlineCode",{parentName:"p"},"connect"),"的组件可能出现 props 上的变化，而没有任何需要遍历子树的需要。"),Object(c.b)("p",null,"以上就是 v6 版本在性能上不升反降的原因。这也是 React 新的 context API 不是很适合用在变化频繁的数据上原因。我们可以想象如果我们像以前一样把一个表单的所有项数据都缓存在 redux store 里面，每次输入都要更新 store，可能带来的对整体性能的影响。关于这一块，React 也有一个",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/facebook/react/issues/14110"}),"issue"),"在讨论是否以及如何设计一个方案来解决这个性能上的问题。这个讨论非常热闹，大家有兴趣可以关注一下。"),Object(c.b)("p",null,"那么到现在为止我们还是没有讲到 Hooks 相关的任何内容，是不是有点偏题了？不，因为我们已经知道了大部分的原因，那就是新的 context API 存在的性能问题。而这个问题，反应到 Hooks 上面，则会更大程度地体现出来。"),Object(c.b)("p",null,"如果我们要封装一个类似",Object(c.b)("inlineCode",{parentName:"p"},"useRedux"),"这样的 Hook，那么我们肯定需要用到",Object(c.b)("inlineCode",{parentName:"p"},"useContext"),"来获取",Object(c.b)("inlineCode",{parentName:"p"},"Provider"),"提供的 state，毕竟",Object(c.b)("inlineCode",{parentName:"p"},"Provider"),"是唯一订阅来 store 变化的。而使用了",Object(c.b)("inlineCode",{parentName:"p"},"useContext"),"，就代表我们这个组件是",Object(c.b)("strong",{parentName:"p"},"依赖于"),"这个 context 的，也就是说一旦 state 变化，这个组件就会被标记为",Object(c.b)("strong",{parentName:"p"},"需要更新"),"。"),Object(c.b)("p",null,"而按照我们一直以来的使用 React-Reudx 的情况，我们都会提供",Object(c.b)("inlineCode",{parentName:"p"},"mapState"),"来映射组件真正需要监听的数据，因为 store 是整个应用的，不太会存在某一个组件需要整个应用所有的数据的情况。这种情况下，在 v5 版本中，甚至是在 v6 版本中使用",Object(c.b)("inlineCode",{parentName:"p"},"connect"),"的情况，都会在 HOC 中进行",Object(c.b)("inlineCode",{parentName:"p"},"mapState"),"的执行进行数据映射，然后通过",Object(c.b)("inlineCode",{parentName:"p"},"shallowEqual"),"判断是否有依赖的 state 变化，如果没有其实是不需要更新真正的组件的。"),Object(c.b)("p",null,"但是在使用",Object(c.b)("inlineCode",{parentName:"p"},"useContext"),"的情况，即便我们给",Object(c.b)("inlineCode",{parentName:"p"},"useRedux"),"提供来",Object(c.b)("inlineCode",{parentName:"p"},"mapState"),"，但是他的执行依然要等到这个组件真正开始执行更新的时候。也就是说我们无法让 React 在更新这个组件之前就判断他是否可以不被更新，那么 React 提供的优化就没啥用了。"),Object(c.b)("p",null,"而同时一旦我们的组件开始执行，即便我们发现",Object(c.b)("inlineCode",{parentName:"p"},"useRedux"),"返回的 map 之后的 state 其实跟上一次是一样的，我们也无法告诉 React 这个组件其实是不需要更新的来终止这次更新。所以，这是一个无法在",Object(c.b)("strong",{parentName:"p"},"类库层面进行的优化。"),"要优化我们只有通过使用者自己使用",Object(c.b)("inlineCode",{parentName:"p"},"useMemo"),"这样的 API，那么对于开发经验不是那么多的同学，很可能会导致这个组件会被频繁进行无用更新，而导致性能浪费。"),Object(c.b)("p",null,"那么以上就是为什么 React-Redux 以及很多常用类库还没有更新 Hooks API 的原因来，目前来说这个性能问题较为无解，React 官方也在考虑是否要出一些新的 context 相关的 API 来专门优化更新频率较高的情况，我们也只能拭目以待了。"),Object(c.b)("p",null,"目前来说，如果你不清楚",Object(c.b)("inlineCode",{parentName:"p"},"createContent"),"的这些问题，建议不要把经常需要更新的内容放在 context 里面（除非没有别的方法）。"),Object(c.b)("p",null,"以上，就是我对于为什么 Hooks 现在呼声这么高，但是社区支持却没有这么快跟进的原因分析，如果有任何问题，可以直接回复邮件，或者在我的",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/Jokcy/AMA/issues"}),"AMA（Ask Me Anything）"),"中给我提问，我都会浏览，并且进行解答。"),Object(c.b)("p",null,"另外在这里提出的一些问题，也会在后续进行更详细的解析："),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"createContext")," 为什么在更新的时候要遍历所有子树节点"),Object(c.b)("li",{parentName:"ul"},"React 中判断一个节点是否可以跳过更新的判断条件")))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-react-why-react-redux-not-update-hooks-md-9320c3c30c3e8b1a7374.js.map