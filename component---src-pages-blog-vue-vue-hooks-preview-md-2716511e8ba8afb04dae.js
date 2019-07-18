(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{265:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",function(){return p}),n.d(a,"default",function(){return m});n(37);var t=n(29),s=n.n(t),c=(n(0),n(99)),p={title:"vue hook API 可能存在的问题",date:"2019-06-24",cover:"http://www.getgametackle.com.au/wp-content/uploads/2016/06/MEAT-HOOK-D-STYLE.png",description:"Vue 作者前几天发布了一个关于 vue3 的 RFC，其内容主要描述来函数式组件以及 hook API 的使用，而这个却引发来社区的激烈讨论，其中不乏批评之声，那么我们来看看这个 API 到底有什么独特之处",tags:["vue"]},b={_frontmatter:p},o="wrapper";function m(e){var a=e.components,n=s()(e,["components"]);return Object(c.b)(o,Object.assign({},b,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"关于最近 Vue 社区的激烈讨论，不知道大家是否有所耳闻。其主要原因是 Evan You 前几天发布了一个新的关于 Vue3 的 RFC，主要描述了 hook API，通过 ",Object(c.b)("inlineCode",{parentName:"p"},"setup")," 方法，我们可以不需要再区分书写 ",Object(c.b)("inlineCode",{parentName:"p"},"data"),"，",Object(c.b)("inlineCode",{parentName:"p"},"computed"),"，",Object(c.b)("inlineCode",{parentName:"p"},"watch")," 等属性来创建一个 vue 组件。"),Object(c.b)("p",null,"对于这个提案，社区的反应却非常激烈，甚至有很多的批评声，很多人觉得这个新的组件书写方式完全改变了老的组件开发模式，导致社区以前的积累都白费来。也有人觉得这个 API 完全就是抄袭 react 的，对于 vue 来说并不是特别需要。"),Object(c.b)("p",null,"在这里我简单讲一下我的见解，vue 的这个提案本质上跟 react 的 hook API 确实是非常像的，同时他们解决的也是同一个问题。这个问题其实是现在的组件化框架都存在的，简单概括就是：",Object(c.b)("strong",{parentName:"p"},"组件化可以很好得分解功能，却对于一些没有那么明确分块的逻辑无能为力。")),Object(c.b)("p",null,"所以即便这个方案是 react 先出的，你要说抄袭，那也没有这么夸张，毕竟是实际能解决问题的，而不是为了提供 react 相同的功能而去做的。"),Object(c.b)("p",null,"具体关于这块我不在这里继续深入，这篇文章主要是想讲一个可能比较严重的问题，如果这个问题无法解决，那么 vue 的 hook API 可能前途并不明朗。"),Object(c.b)("p",null,"这个问题非常简单，假设我们有如下组件："),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),"{\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"props"),": [",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'data'"),"]\n  template: ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"`<span>{{num}}</span>`"),",\n  setup(props) {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," data = props.data\n\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," num = computed(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"()")," =>")," data.num + ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"1"),")\n\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," { num }\n  }\n}")),Object(c.b)("p",null,"我们在使用的时候可以这么做："),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),"{\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"template"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),'`<Comp :data="data" />`'),",\n  setup() {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," num = value(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"0"),")\n\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," data = computed(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"()")," =>")," ({ num, ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"/* 其他数据。。。 */")," }))\n\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// 其他设置"),"\n\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," { data }\n  }\n}")),Object(c.b)("p",null,"以上的代码是非常自然的，有可能会出现在平时写页面和组件的时候。但是这里就出现了一个问题，我们在修改父组件的",Object(c.b)("inlineCode",{parentName:"p"},"num"),"的时候，子组件的",Object(c.b)("inlineCode",{parentName:"p"},"num"),"是无法更新的。"),Object(c.b)("p",null,"会出现这个问题也是非常好理解的，vue 中的 ",Object(c.b)("inlineCode",{parentName:"p"},"computed")," 的实现原理是他会执行一次传入的方法，在执行方法的时候，根据执行到某个数据获取的时候，把当前的 ",Object(c.b)("inlineCode",{parentName:"p"},"computed")," 作为一个依赖放入到数据的根性流程中。"),Object(c.b)("p",null,"到这个例子里面，我们执行 ",Object(c.b)("inlineCode",{parentName:"p"},"const num = computed(() => data.num + 1)")," 这句代码的时候，发现我们读取了 ",Object(c.b)("inlineCode",{parentName:"p"},"data.num"),"，那么这个 ",Object(c.b)("inlineCode",{parentName:"p"},"computed")," 就会作为 ",Object(c.b)("inlineCode",{parentName:"p"},"data.num")," 的依赖，在后续 ",Object(c.b)("inlineCode",{parentName:"p"},"data.num")," 更新之后，会再次执行这个 ",Object(c.b)("inlineCode",{parentName:"p"},"computed")," 并更新 ",Object(c.b)("inlineCode",{parentName:"p"},"num")),Object(c.b)("p",null,"那么为什么在这个例子中最终子组件的 ",Object(c.b)("inlineCode",{parentName:"p"},"num")," 没有更新呢？因为在这里父组件改变了整个",Object(c.b)("inlineCode",{parentName:"p"},"data"),"，而不是 ",Object(c.b)("inlineCode",{parentName:"p"},"data.num"),"。要解决这个问题也非常简单，我们使用 ",Object(c.b)("inlineCode",{parentName:"p"},"props.data.num + 1")," 作为 ",Object(c.b)("inlineCode",{parentName:"p"},"computed")," 的返回就可以。这两种方式的区别是后者把 ",Object(c.b)("inlineCode",{parentName:"p"},"props.data")," 也作为依赖，所以他改变的话也会引起更新。"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"但是，需要注意的是，对于一个函数来说，我们使用上面的写法是完全没有问题的。"),"这个问题对于不那么理解 vue 的响应式原理的同学来说，不是那么明了的。这其实就跟 react 的 hooks API 不能在判断条件中调用一样，是一个使用 hook API 的先觉条件。我们完全可以通过所有的 ",Object(c.b)("inlineCode",{parentName:"p"},"props")," 调用都直接在 ",Object(c.b)("inlineCode",{parentName:"p"},"props")," 上直接操作，不预先读取某个对象然后再操作，来规避这个问题，但不免会显得有点啰嗦。"),Object(c.b)("p",null,"同时这个问题可能比 react 的问题更为严重，因为他很难消除也很难监控，你很难通过一个 eslint 插件来监控这种问题，而一旦这个问题出现了，在代码较为复杂的情况下，你也是很难查找问题的。"),Object(c.b)("p",null,"所以以上是我在尝试 vue 的 hook API 的时候遇到的第一个问题。介于毕竟目前能够使用的只是在 vue2 基础上实现的模拟 API，我并不能下定论说这个问题是存在的，可能在 vue3 正式发布的时候已经解决了，所以这里也只是抛砖引玉，跟大家分享一下。同时我也把这个也在 vue 的 issue 列表里反馈了一下，虽然好像没怎么引起注意就是了。",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/vuejs/vue/issues/10198"}),"issue 在这")),Object(c.b)("p",null,"上面 demo 的运行结果可以看",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://codesandbox.io/s/vue-template-zlflg?fontsize=14"}),"这里")),Object(c.b)("p",null,"另外模拟 API 的库是",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/vuejs/vue-function-api"}),"这个"),"，大家有兴趣可以自己去用用看。"),Object(c.b)("p",null,"最后，个人其实是非常喜欢这个 API 的模式的，但是不得不说，需要解决的问题还是挺多的。另外使用函数式的 API 却依然要写静态模版来绑定总感觉还是有点怪。但不论如何，让我们一起期待 vue3 带来的变化吧。"))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-vue-vue-hooks-preview-md-2716511e8ba8afb04dae.js.map