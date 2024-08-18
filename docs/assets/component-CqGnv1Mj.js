import{j as l}from"./jsx-runtime-DBEcOq3S.js";import{r as d}from"./index-DtJulBIN.js";import{u as F,c as b}from"./index-CE5k4Bb4.js";import{c as $}from"./index-P-l_ls5c.js";import{c as N,R as D,I as L}from"./index-CihUykaf.js";import{P as G}from"./index-ChMhjsiA.js";import{P as v}from"./index-kfRDelSZ.js";import{u as K}from"./index-C2NFV522.js";import{u as B}from"./index-xu9aqoQg.js";import{c as T}from"./utils-B06rK7pa.js";var _="Tabs",[U,ie]=$(_,[N]),V=N(),[H,x]=U(_),w=d.forwardRef((e,a)=>{const{__scopeTabs:t,value:n,onValueChange:r,defaultValue:c,orientation:i="horizontal",dir:u,activationMode:p="automatic",...m}=e,s=K(u),[o,f]=F({prop:n,onChange:r,defaultProp:c});return l.jsx(H,{scope:t,baseId:B(),value:o,onValueChange:f,orientation:i,dir:s,activationMode:p,children:l.jsx(v.div,{dir:s,"data-orientation":i,...m,ref:a})})});w.displayName=_;var I="TabsList",R=d.forwardRef((e,a)=>{const{__scopeTabs:t,loop:n=!0,...r}=e,c=x(I,t),i=V(t);return l.jsx(D,{asChild:!0,...i,orientation:c.orientation,dir:c.dir,loop:n,children:l.jsx(v.div,{role:"tablist","aria-orientation":c.orientation,...r,ref:a})})});R.displayName=I;var z="TabsTrigger",j=d.forwardRef((e,a)=>{const{__scopeTabs:t,value:n,disabled:r=!1,...c}=e,i=x(z,t),u=V(t),p=A(i.baseId,n),m=P(i.baseId,n),s=n===i.value;return l.jsx(L,{asChild:!0,...u,focusable:!r,active:s,children:l.jsx(v.button,{type:"button",role:"tab","aria-selected":s,"aria-controls":m,"data-state":s?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:p,...c,ref:a,onMouseDown:b(e.onMouseDown,o=>{!r&&o.button===0&&o.ctrlKey===!1?i.onValueChange(n):o.preventDefault()}),onKeyDown:b(e.onKeyDown,o=>{[" ","Enter"].includes(o.key)&&i.onValueChange(n)}),onFocus:b(e.onFocus,()=>{const o=i.activationMode!=="manual";!s&&!r&&o&&i.onValueChange(n)})})})});j.displayName=z;var q="TabsContent",M=d.forwardRef((e,a)=>{const{__scopeTabs:t,value:n,forceMount:r,children:c,...i}=e,u=x(q,t),p=A(u.baseId,n),m=P(u.baseId,n),s=n===u.value,o=d.useRef(s);return d.useEffect(()=>{const f=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(f)},[]),l.jsx(G,{present:r||s,children:({present:f})=>l.jsx(v.div,{"data-state":s?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!f,id:m,tabIndex:0,...i,ref:a,style:{...e.style,animationDuration:o.current?"0s":void 0},children:f&&c})})});M.displayName=q;function A(e,a){return`${e}-trigger-${a}`}function P(e,a){return`${e}-content-${a}`}var O=w,k=R,E=j,S=M;const C=O,g=d.forwardRef(({className:e,...a},t)=>l.jsx(k,{ref:t,className:T("inline-flex h-10 items-center justify-center rounded-md bg-zinc-100 p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",e),...a}));g.displayName=k.displayName;const y=d.forwardRef(({className:e,...a},t)=>l.jsx(E,{ref:t,className:T("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50",e),...a}));y.displayName=E.displayName;const h=d.forwardRef(({className:e,...a},t)=>l.jsx(S,{ref:t,className:T("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",e),...a}));h.displayName=S.displayName;try{C.displayName="Tabs",C.__docgenInfo={description:"",displayName:"Tabs",props:{value:{defaultValue:null,description:"The value for the selected tab, if controlled",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The value of the tab to select by default, if uncontrolled",name:"defaultValue",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"A function called when a new tab is selected",name:"onValueChange",required:!1,type:{name:"(value: string) => void"}},orientation:{defaultValue:null,description:`The orientation the tabs are layed out.
Mainly so arrow navigation is done accordingly (left & right vs. up & down)
@defaultValue horizontal`,name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},dir:{defaultValue:null,description:"The direction of navigation between toolbar items.",name:"dir",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},activationMode:{defaultValue:null,description:`Whether a tab is activated automatically or manually.
@defaultValue automatic`,name:"activationMode",required:!1,type:{name:"enum",value:[{value:'"automatic"'},{value:'"manual"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="TabsList",g.__docgenInfo={description:"",displayName:"TabsList",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},loop:{defaultValue:null,description:"",name:"loop",required:!1,type:{name:"boolean"}}}}}catch{}try{y.displayName="TabsTrigger",y.__docgenInfo={description:"",displayName:"TabsTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}}}catch{}try{h.displayName="TabsContent",h.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},forceMount:{defaultValue:null,description:`Used to force mounting when more control is needed. Useful when
controlling animation with React animation libraries.`,name:"forceMount",required:!1,type:{name:"true"}}}}}catch{}export{C as T,g as a,y as b,h as c};
