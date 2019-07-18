(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{268:function(e,a,s){"use strict";s.r(a),s.d(a,"_frontmatter",function(){return b}),s.d(a,"default",function(){return l});s(37);var n=s(29),t=s.n(n),c=(s(0),s(99)),b={title:"为什么你应该放弃React老的Context API用新的Context API",cover:"https://user-gold-cdn.xitu.io/2018/9/25/1661089d06718faf?w=2524&h=866&f=png&s=106307",description:"新的 React Context API 是官方的正式定稿 Context API、他解决来老的 Context API 不是稳定版的问题，同时他还很大程度上解决了老的 Context API 的性能问题...",date:"2018-10-2",tags:["react"]},p={_frontmatter:b},j="wrapper";function l(e){var a=e.components,s=t()(e,["components"]);return Object(c.b)(j,Object.assign({},p,s,{components:a,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"React16.3 发布了新的 Context API，并且已经确认了将在下一个版本废弃老的 Context API。所以大家更新到新的 Context API 是无可厚非的事情。而这篇文章会从原理的角度为大家分析为什么要用新的 API--不仅仅是因为 React 官方要更新，毕竟更新了你也可以用 16 版本的 React 来使用老的 API--而是因为新的 API 性能比老 API ",Object(c.b)("strong",{parentName:"p"},"高出太多"))),Object(c.b)("h1",null,"用法"),Object(c.b)("p",null,"我们先来看一下两个版本的 Context API 如何使用"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// old version"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-class"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"Parent")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"Component")," "),"{\n  getChildContext() {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," { ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"123")," }\n  }\n}\n\nParent.childContextType = {\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": PropTypes.number,\n}\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," Child = ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),"(",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"props, context"),") =>")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"p"),">"),"{context.type}",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"p"),">")),"\n\nChild.contextTypes = {\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": PropTypes.number,\n}")),Object(c.b)("p",null,"通过在父组件上声明",Object(c.b)("inlineCode",{parentName:"p"},"getChildContext"),"方法为其子孙组件提供",Object(c.b)("inlineCode",{parentName:"p"},"context"),"，我们称其",Object(c.b)("inlineCode",{parentName:"p"},"ProviderComponent"),"。注意必须要声明",Object(c.b)("inlineCode",{parentName:"p"},"Parent.childContextType"),"才会生效，而子组件如果需要使用",Object(c.b)("inlineCode",{parentName:"p"},"context"),"，需要显示得声明",Object(c.b)("inlineCode",{parentName:"p"},"Child.contextTypes")),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// new version"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," { Provider, Consumer } = React.createContext(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'defaultValue'"),")\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," Parent = ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"props")," =>")," (\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"Provider")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-attr"}),"value"),"=",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-string"}),"{"),"'",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-attr"}),"realValue"),"'}>"),"{props.children}",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"Provider"),">")),"\n)\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," Child = ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"()")," =>")," {\n  ;",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"Consumer"),">"),"{value => "),"<p>{value}</p>",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),"}",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"Consumer"),">")),"\n}")),Object(c.b)("p",null,"新版本的 API，React 提供了",Object(c.b)("inlineCode",{parentName:"p"},"createContext"),"方法，这个方法会返回两个",Object(c.b)("em",{parentName:"p"},"组件"),"：",Object(c.b)("inlineCode",{parentName:"p"},"Provider"),"和",Object(c.b)("inlineCode",{parentName:"p"},"Consumber"),"，",Object(c.b)("inlineCode",{parentName:"p"},"Provider"),"用来提供",Object(c.b)("inlineCode",{parentName:"p"},"context"),"的内容，通过向",Object(c.b)("inlineCode",{parentName:"p"},"Provider"),"传递",Object(c.b)("inlineCode",{parentName:"p"},"value"),"这个",Object(c.b)("inlineCode",{parentName:"p"},"prop"),"，而在需要用到对应",Object(c.b)("inlineCode",{parentName:"p"},"context"),"的地方，用",Object(c.b)("strong",{parentName:"p"},"相同来源的"),Object(c.b)("inlineCode",{parentName:"p"},"Consumer"),"来获取",Object(c.b)("inlineCode",{parentName:"p"},"context"),"，",Object(c.b)("inlineCode",{parentName:"p"},"Consumer"),"有特定的用法，就是他的",Object(c.b)("inlineCode",{parentName:"p"},"children"),"必须是一个方法，并且",Object(c.b)("inlineCode",{parentName:"p"},"context"),"的值使用参数传递给这个方法。"),Object(c.b)("h1",null,"性能对比"),Object(c.b)("p",null,"正好前几天 React devtool 发布了",Object(c.b)("inlineCode",{parentName:"p"},"Profiler"),"功能，就用这个新功能来查看一下两个 API 的新能有什么差距吧，先看一下例子"),Object(c.b)("p",null,Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://juejin.im/post/5ba1f995f265da0a972e1657"}),"不知道 Profiler 的看这里")),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// old api demo"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"import")," React ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'react'"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"import")," PropTypes ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'prop-types'"),"\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"default")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-class"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"App")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"React"),".",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"Component")," "),"{\n  state = {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"1"),",\n  }\n\n  getChildContext() {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," {\n      ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"this"),".state.type,\n    }\n  }\n\n  componentDidMount() {\n    setInterval(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"()")," =>")," {\n      ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"this"),".setState({\n        ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"this"),".state.type + ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"1"),",\n      })\n    }, ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"500"),")\n  }\n\n  render() {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"this"),".props.children\n  }\n}\n\nApp.childContextTypes = {\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": PropTypes.number,\n}\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," Comp = ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),"(",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"props, context"),") =>")," {\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," arr = []\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"for")," (",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"let")," i = ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"0"),"; i < ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"100"),"; i++) {\n    arr.push(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"p")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-attr"}),"key"),"=",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-string"}),"{i}"),">"),"{i}",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"p"),">")),")\n  }\n\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," (\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"div"),">"),"\n      "),"<p>{context.type}</p>",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),"\n      {arr}\n    ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"div"),">")),"\n  )\n}\n\nComp.contextTypes = {\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": PropTypes.number,\n}")),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// new api demo"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"import")," React, { Component, createContext } ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'react'"),"\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," { Provider, Consumer } = createContext(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"1"),")\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"default")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-class"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"App")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"Component")," "),"{\n  state = {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"1"),",\n  }\n\n  componentDidMount() {\n    setInterval(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"()")," =>")," {\n      ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"this"),".setState({\n        ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"this"),".state.type + ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"1"),",\n      })\n    }, ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"500"),")\n  }\n\n  render() {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"Provider")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-attr"}),"value"),"=",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-string"}),"{this.state.type}"),">"),"{this.props.children}",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"Provider"),">")),"\n  }\n}\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," Comp = ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"()")," =>")," {\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," arr = []\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"for")," (",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"let")," i = ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"0"),"; i < ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"100"),"; i++) {\n    arr.push(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"p")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-attr"}),"key"),"=",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-string"}),"{i}"),">"),"{i}",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"p"),">")),")\n  }\n\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," (\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"div"),">"),"\n      "),"<Consumer>{type => <p>{type}</p>}</Consumer>",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),"\n      {arr}\n    ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"div"),">")),"\n  )\n}")),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// index.js"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"import")," React ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'react'"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"import")," ReactDOM ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'react-dom'"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"import")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'./index.css'"),"\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"import")," App, { Comp } ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"from")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'./context/OldApi'"),"\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// import App, { Comp } from './context/NewApi'"),"\n\nReactDOM.render(\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"App"),">"),"\n    "),"<Comp />",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),"\n  ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"App"),">")),",\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-built_in"}),"document"),".getElementById(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'root'"),"),\n)")),Object(c.b)("p",null,"代码基本相同，主要变动就是一个",Object(c.b)("inlineCode",{parentName:"p"},"interval"),"，每 500 毫秒给",Object(c.b)("inlineCode",{parentName:"p"},"type"),"加 1，然后我们来分别看一下",Object(c.b)("inlineCode",{parentName:"p"},"Profiler"),"的截图"),Object(c.b)("p",null,Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://juejin.im/post/5ba1f995f265da0a972e1657"}),"不知道 Profiler 的看这里")),Object(c.b)("h5",null,"老 API"),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://user-gold-cdn.xitu.io/2018/9/25/1661089d073beff2?w=2558&h=908&f=png&s=122252",alt:"老API"}))),Object(c.b)("h5",null,"新 API"),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://user-gold-cdn.xitu.io/2018/9/25/1661089d06718faf?w=2524&h=866&f=png&s=106307",alt:"新API"}))),Object(c.b)("p",null,"可见这两个性能差距是非常大的，老的 API 需要 7 点几毫秒，而新的 API 只需要 0.4 毫秒，而且新的 API 只有两个节点重新渲染了，而老的 API 所有节点都重新渲染了（下面还有很多节点没截图进去，虽然每个可能只有 0.1 毫秒或者甚至不到，但是积少成多，导致他们的父组件 Comp 渲染时间很长）"),Object(c.b)("h1",null,"进一步举例"),Object(c.b)("p",null,"在这里可能有些同学会想，新老 API 的用法不一样，因为老 API 的",Object(c.b)("inlineCode",{parentName:"p"},"context"),"是作为",Object(c.b)("inlineCode",{parentName:"p"},"Comp"),"这个",Object(c.b)("inlineCode",{parentName:"p"},"functional Component"),"的参数传入的，所以肯定会影响该组件的所有子元素，所以我在这个基础上修改了例子，把数组从",Object(c.b)("inlineCode",{parentName:"p"},"Comp"),"组件中移除，放到一个新的组件",Object(c.b)("inlineCode",{parentName:"p"},"Comp2"),"中"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// Comp2"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-class"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"Comp2")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"React"),".",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"Component")," "),"{\n  render() {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," arr = []\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"for")," (",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"let")," i=",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"0"),"; i<",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"100"),"; i++) {\n      arr.push(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"p")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-attr"}),"key"),"=",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-string"}),"{i}"),">"),"{i}",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"p"),">")),")\n    }\n\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," arr\n  }\n}\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// new old api Comp"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," Comp = ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),"(",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"props, context"),") =>")," {\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," (\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"div"),">"),"\n      "),"<p>{context.type}</p>",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),"\n    ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"div"),">")),"\n  )\n}\n\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// new new api Comp"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"const")," Comp = ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"()")," =>")," {\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," (\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"div"),">"),"\n      "),"<Consumer>\n        {(type) => <p>{type}</p>}\n      </Consumer>",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),"\n    ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"div"),">")),"\n  )\n}")),Object(c.b)("p",null,"现在受",Object(c.b)("inlineCode",{parentName:"p"},"context"),"影响的渲染内容新老 API 都是一样的，只有",Object(c.b)("inlineCode",{parentName:"p"},"<p>{type}</p>"),"，我们再来看一下情况"),Object(c.b)("h5",null,"老 API"),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://user-gold-cdn.xitu.io/2018/9/25/1661089d0663f708?w=2542&h=900&f=png&s=115960",alt:"老API"}))),Object(c.b)("h5",null,"新 API"),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://user-gold-cdn.xitu.io/2018/9/25/1661089d07ca2b98?w=2542&h=846&f=png&s=108262",alt:"新API"}))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"忽视比 demo1 时间长的问题，应该是我电脑运行时间长性能下降的问题，只需要横向对比新老 API 就可以了")),Object(c.b)("p",null,"从这里可以看出来，结果跟 Demo1 没什么区别，老 API 中我们的",Object(c.b)("inlineCode",{parentName:"p"},"arr"),"仍然都被重新渲染了，导致整体的渲染时间被拉长很多。"),Object(c.b)("p",null,"事实上，这可能还不是最让你震惊的地方，我们再改一下例子，我们在",Object(c.b)("inlineCode",{parentName:"p"},"App"),"中不再修改",Object(c.b)("inlineCode",{parentName:"p"},"type"),"，而是新增一个",Object(c.b)("inlineCode",{parentName:"p"},"state"),"叫",Object(c.b)("inlineCode",{parentName:"p"},"num"),"，然后对其进行递增"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// App"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"export")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"default")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-class"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"App")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"React"),".",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-title"}),"Component")," "),"{\n  state = {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"1"),",\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"num"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"1"),",\n  }\n\n  getChildContext() {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," {\n      ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"type"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"this"),".state.type,\n    }\n  }\n\n  componentDidMount() {\n    setInterval(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-function"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-params"}),"()")," =>")," {\n      ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"this"),".setState({\n        ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-attr"}),"num"),": ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"this"),".state.num + ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"1"),",\n      })\n    }, ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-number"}),"500"),")\n  }\n\n  render() {\n    ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," (\n      ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"<",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"div"),">"),"\n        "),"<p>inside update {this.state.num}</p>",Object(c.b)("span",Object.assign({parentName:"code"},{className:"xml"}),"\n        {this.props.children}\n      ",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-tag"}),"</",Object(c.b)("span",Object.assign({parentName:"span"},{className:"hljs-name"}),"div"),">")),"\n    )\n  }\n}")),Object(c.b)("h5",null,"老 API"),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://user-gold-cdn.xitu.io/2018/9/25/1661089d0808111a?w=2542&h=896&f=png&s=117817",alt:"老API"}))),Object(c.b)("h5",null,"新 API"),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://user-gold-cdn.xitu.io/2018/9/25/1661089d07b2c45d?w=2546&h=884&f=png&s=110699",alt:"新API"}))),Object(c.b)("p",null,"可以看到老 API 依然没有什么改观，他依然重新渲染所有子节点。"),Object(c.b)("p",null,"再进一步我给",Object(c.b)("inlineCode",{parentName:"p"},"Comp2"),"增加",Object(c.b)("inlineCode",{parentName:"p"},"componentDidUpdate"),"生命周期钩子"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),"componentDidUpdate() {\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-built_in"}),"console"),".log(",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-string"}),"'update'"),")\n}")),Object(c.b)("p",null,"在使用老 API 的时候，每次 App 更新都会打印"),Object(c.b)("p",null,Object(c.b)("img",Object.assign({parentName:"p"},{src:"https://user-gold-cdn.xitu.io/2018/9/25/1661089d3ab654ed?w=2548&h=530&f=png&s=104117",alt:null}))),Object(c.b)("p",null,"而新 API 则不会"),Object(c.b)("h1",null,"总结"),Object(c.b)("p",null,"从上面测试的结果大家应该可以看出来结果了，这里简单的讲一下原因，因为要具体分析会很长并且要涉及到源码的很多细节，所以有空再写一片续，来详细得讲解源码，大家有兴趣的可以关注我。"),Object(c.b)("p",null,"要分析原理要了解 React 对于每次更新的处理流程，React 是一个树结构，要进行更新只能通过某个节点执行",Object(c.b)("inlineCode",{parentName:"p"},"setState、forceUpdate"),"等方法，在某一个节点执行了这些方法之后，React 会向上搜索直到找到",Object(c.b)("inlineCode",{parentName:"p"},"root"),"节点，然后把",Object(c.b)("inlineCode",{parentName:"p"},"root"),"节点放到更新队列中，等待更新。"),Object(c.b)("p",null,"所以 React 的更新都是从",Object(c.b)("inlineCode",{parentName:"p"},"root"),"往下执行的，他会尝试重新构建一个新的树，在这个过程中能复用之前的节点就会复用，",Object(c.b)("strong",{parentName:"p"},"而我们现在看到的情况，就是因为复用算法根据不同的情况而得到的不同的结果")),Object(c.b)("p",null,"我们来看一小段源码"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"hljs language-js"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"if")," (\n  !hasLegacyContextChanged() &&\n  (updateExpirationTime === NoWork ||\n    updateExpirationTime > renderExpirationTime)\n) {\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-comment"}),"// ..."),"\n  ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"hljs-keyword"}),"return")," bailoutOnAlreadyFinishedWork(\n    current,\n    workInProgress,\n    renderExpirationTime,\n  )\n}")),Object(c.b)("p",null,"如果能满足这个判断条件并且进入",Object(c.b)("inlineCode",{parentName:"p"},"bailoutOnAlreadyFinishedWork"),"，那么有极高的可能这个节点以及他的子树都不需要更新，React 会直接跳过，我们使用新的",Object(c.b)("inlineCode",{parentName:"p"},"context API"),"的时候就是这种情况，",Object(c.b)("strong",{parentName:"p"},"但是使用老的",Object(c.b)("inlineCode",{parentName:"strong"},"context API"),"是永远不可能跳过这个判断的")),Object(c.b)("p",null,"老的",Object(c.b)("inlineCode",{parentName:"p"},"context API"),"使用过程中，一旦有一个节点提供了",Object(c.b)("inlineCode",{parentName:"p"},"context"),"，那么他的所有子节点都会被视为有",Object(c.b)("inlineCode",{parentName:"p"},"side effect"),"的，因为 React 本身并不判断子节点是否有使用",Object(c.b)("inlineCode",{parentName:"p"},"context"),"，以及提供的",Object(c.b)("inlineCode",{parentName:"p"},"context"),"是否有变化，所以一旦检测到有节点提供了",Object(c.b)("inlineCode",{parentName:"p"},"context"),"，那么他的子节点在执行",Object(c.b)("inlineCode",{parentName:"p"},"hasLegacyContextChanged"),"的时候，永远都是 true 的，而没有进入",Object(c.b)("inlineCode",{parentName:"p"},"bailoutOnAlreadyFinishedWork"),"，就会变成重新",Object(c.b)("inlineCode",{parentName:"p"},"reconcile"),"子节点，虽然最终可能不需要更新 DOM 节点，但是重新计算生成",Object(c.b)("inlineCode",{parentName:"p"},"Fiber"),"对象的开销还是又得，一两个还好，数量多了时间也是会被拉长的。"),Object(c.b)("p",null,"以上就是使用老的",Object(c.b)("inlineCode",{parentName:"p"},"context API"),"比新的 API 要慢很多的原因，大家可以先不深究得理解一下，在我之后的源码分析环节会有更详细的讲解。"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"我是 Jocky，一个专注于 React 技巧和深度分析的前端工程师，React 绝对是一个越深入学习，越能让你觉得他的设计精巧，思想超前的框架。关注我获取最新的 React 动态，以及最深度的 React 学习。",Object(c.b)("a",Object.assign({parentName:"strong"},{href:"https://juejin.im/post/5bd68bc5518825287847a860"}),"更多的文章看这里"))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-react-why-new-context-api-md-5bcb9cab184398c0b8df.js.map