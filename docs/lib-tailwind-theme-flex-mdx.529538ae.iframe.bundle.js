(self.webpackChunkmadroxjs=self.webpackChunkmadroxjs||[]).push([[1249,3840],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/lib/tailwind/theme/extend/flex.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Documentation:()=>Documentation,SourceCode:()=>SourceCode,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const flexraw={};function SourceCode(){return(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:flexraw})}function Documentation(){return""}function _createMdxContent(props){const _components={h1:"h1",h2:"h2",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"extended-flex",children:"Extended Flex"}),"\n",(0,jsx_runtime.jsx)(dist.W8,{isTemplate:!0,title:"Tailwind/Theme/Extended/Flex"}),"\n",(0,jsx_runtime.jsx)(Documentation,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"source-code",children:"Source Code"}),"\n",(0,jsx_runtime.jsx)(SourceCode,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/lib/tailwind/theme/flex.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const flex={flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme})=>({auto:"auto",...theme("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%"}),flexGrow:{0:"0",DEFAULT:"1"},flexShrink:{0:"0",DEFAULT:"1"}},flexraw={flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme})=>({auto:"auto",...theme("spacing"),"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%"}),flexGrow:{0:"0",DEFAULT:"1"},flexShrink:{0:"0",DEFAULT:"1"}};var extend_flex=__webpack_require__("./src/lib/tailwind/theme/extend/flex.mdx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Tailwind/Theme/Flex"}),"\n",(0,jsx_runtime.jsxs)(_components.h1,{id:"flex-jump-to-source",children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/flex",rel:"nofollow",children:"Flex"})," ",(0,jsx_runtime.jsx)("small",{className:"text-xs",children:(0,jsx_runtime.jsx)(_components.a,{href:"#source-code",children:"Jump to source"})})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"flex"})," property provides utilities for controlling the flex container and items within it. Each property allows for precise control over layout and alignment."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"flex",children:(0,jsx_runtime.jsx)(_components.code,{children:"flex"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Defines the flex properties for flex items."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`flex: ${JSON.stringify(flex.flex,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"flexbasis",children:(0,jsx_runtime.jsx)(_components.code,{children:"flexBasis"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Sets the flex basis for flex items."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`flexBasis: ${flex.flexBasis}`}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"auto"}),": Automatically determined size."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"full"}),": Takes up 100% of the parent container."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Fractional values like ",(0,jsx_runtime.jsx)(_components.code,{children:"1/2"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"1/3"}),", etc., determine the size as a percentage of the parent container."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"flexgrow",children:(0,jsx_runtime.jsx)(_components.code,{children:"flexGrow"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Controls the ability of a flex item to grow relative to the rest of the flex items."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`flexGrow: ${JSON.stringify(flex.flexGrow,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"flexshrink",children:(0,jsx_runtime.jsx)(_components.code,{children:"flexShrink"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Controls the ability of a flex item to shrink relative to the rest of the flex items."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`flexShrink: ${JSON.stringify(flex.flexShrink,null,2)}`}),"\n","function"==typeof extend_flex.Documentation&&""!==(0,extend_flex.Documentation)().toString()&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{children:"Extended Documentation"}),(0,jsx_runtime.jsx)(extend_flex.Documentation,{})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"source-code",children:"Source Code"}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:flexraw}),"\n","function"==typeof extend_flex.SourceCode&&""!==(0,extend_flex.SourceCode)().toString()&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h3,{children:"Extended Source Code"}),(0,jsx_runtime.jsx)(extend_flex.SourceCode,{})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);