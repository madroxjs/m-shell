import{j as t}from"./jsx-runtime-DBEcOq3S.js";import{r as i}from"./index-DtJulBIN.js";import{c as Ie}from"./index-w8xf2XUY.js";import{u as Re}from"./index-C2NFV522.js";import{u as H,c as _}from"./index-CE5k4Bb4.js";import{u as qe}from"./index-CtLtbpqE.js";import{c as Oe}from"./index-P-l_ls5c.js";import{u as N}from"./index-xu9aqoQg.js";import{c as Pe,A as Ee,C as ke,G as ze,L as je,I as Ae,a as Te,R as De,b as Ge,d as Fe,S as Ke,e as $e,f as Be,g as Le,h as Ue,P as We,i as He}from"./index-CIhIF-XF.js";import{c as X,R as Xe,I as Ye}from"./index-CihUykaf.js";import{P as Y}from"./index-kfRDelSZ.js";import{c as h}from"./utils-B06rK7pa.js";import{C as Je}from"./chevron-right-BP5yij6X.js";import{C as Qe}from"./check-DD0slIy4.js";import{C as Ze}from"./circle-Cdvv4Ohh.js";var x="Menubar",[w,ea,aa]=Ie(x),[J,Da]=Oe(x,[aa,X]),c=Pe(),Q=X(),[na,D]=J(x),Z=i.forwardRef((e,n)=>{const{__scopeMenubar:a,value:r,onValueChange:o,defaultValue:f,loop:p=!0,dir:u,...l}=e,b=Re(u),s=Q(a),[g="",m]=H({prop:r,onChange:o,defaultProp:f}),[v,d]=i.useState(null);return t.jsx(na,{scope:a,value:g,onMenuOpen:i.useCallback(y=>{m(y),d(y)},[m]),onMenuClose:i.useCallback(()=>m(""),[m]),onMenuToggle:i.useCallback(y=>{m(F=>F?"":y),d(y)},[m]),dir:b,loop:p,children:t.jsx(w.Provider,{scope:a,children:t.jsx(w.Slot,{scope:a,children:t.jsx(Xe,{asChild:!0,...s,orientation:"horizontal",loop:p,dir:b,currentTabStopId:v,onCurrentTabStopIdChange:d,children:t.jsx(Y.div,{role:"menubar",...l,ref:n})})})})})});Z.displayName=x;var G="MenubarMenu",[ra,ee]=J(G),ae=e=>{const{__scopeMenubar:n,value:a,...r}=e,o=N(),f=a||o||"LEGACY_REACT_AUTO_VALUE",p=D(G,n),u=c(n),l=i.useRef(null),b=i.useRef(!1),s=p.value===f;return i.useEffect(()=>{s||(b.current=!1)},[s]),t.jsx(ra,{scope:n,value:f,triggerId:N(),triggerRef:l,contentId:N(),wasKeyboardTriggerOpenRef:b,children:t.jsx(Ue,{...u,open:s,onOpenChange:g=>{g||p.onMenuClose()},modal:!1,dir:p.dir,...r})})};ae.displayName=G;var V="MenubarTrigger",ne=i.forwardRef((e,n)=>{const{__scopeMenubar:a,disabled:r=!1,...o}=e,f=Q(a),p=c(a),u=D(V,a),l=ee(V,a),b=i.useRef(null),s=qe(n,b,l.triggerRef),[g,m]=i.useState(!1),v=u.value===l.value;return t.jsx(w.ItemSlot,{scope:a,value:l.value,disabled:r,children:t.jsx(Ye,{asChild:!0,...f,focusable:!r,tabStopId:l.value,children:t.jsx(Ee,{asChild:!0,...p,children:t.jsx(Y.button,{type:"button",role:"menuitem",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":v,"aria-controls":v?l.contentId:void 0,"data-highlighted":g?"":void 0,"data-state":v?"open":"closed","data-disabled":r?"":void 0,disabled:r,...o,ref:s,onPointerDown:_(e.onPointerDown,d=>{!r&&d.button===0&&d.ctrlKey===!1&&(u.onMenuOpen(l.value),v||d.preventDefault())}),onPointerEnter:_(e.onPointerEnter,()=>{var y;!!u.value&&!v&&(u.onMenuOpen(l.value),(y=b.current)==null||y.focus())}),onKeyDown:_(e.onKeyDown,d=>{r||(["Enter"," "].includes(d.key)&&u.onMenuToggle(l.value),d.key==="ArrowDown"&&u.onMenuOpen(l.value),["Enter"," ","ArrowDown"].includes(d.key)&&(l.wasKeyboardTriggerOpenRef.current=!0,d.preventDefault()))}),onFocus:_(e.onFocus,()=>m(!0)),onBlur:_(e.onBlur,()=>m(!1))})})})})});ne.displayName=V;var ta="MenubarPortal",re=e=>{const{__scopeMenubar:n,...a}=e,r=c(n);return t.jsx(We,{...r,...a})};re.displayName=ta;var S="MenubarContent",te=i.forwardRef((e,n)=>{const{__scopeMenubar:a,align:r="start",...o}=e,f=c(a),p=D(S,a),u=ee(S,a),l=ea(a),b=i.useRef(!1);return t.jsx(ke,{id:u.contentId,"aria-labelledby":u.triggerId,"data-radix-menubar-content":"",...f,...o,ref:n,align:r,onCloseAutoFocus:_(e.onCloseAutoFocus,s=>{var m;!!!p.value&&!b.current&&((m=u.triggerRef.current)==null||m.focus()),b.current=!1,s.preventDefault()}),onFocusOutside:_(e.onFocusOutside,s=>{const g=s.target;l().some(v=>{var d;return(d=v.ref.current)==null?void 0:d.contains(g)})&&s.preventDefault()}),onInteractOutside:_(e.onInteractOutside,()=>{b.current=!0}),onEntryFocus:s=>{u.wasKeyboardTriggerOpenRef.current||s.preventDefault()},onKeyDown:_(e.onKeyDown,s=>{if(["ArrowRight","ArrowLeft"].includes(s.key)){const g=s.target,m=g.hasAttribute("data-radix-menubar-subtrigger"),v=g.closest("[data-radix-menubar-content]")!==s.currentTarget,y=(p.dir==="rtl"?"ArrowRight":"ArrowLeft")===s.key;if(!y&&m||v&&y)return;let M=l().filter(C=>!C.disabled).map(C=>C.value);y&&M.reverse();const K=M.indexOf(u.value);M=p.loop?va(M,K+1):M.slice(K+1);const[$]=M;$&&p.onMenuOpen($)}},{checkForDefaultPrevented:!1}),style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});te.displayName=S;var oa="MenubarGroup",oe=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx(ze,{...o,...r,ref:n})});oe.displayName=oa;var ia="MenubarLabel",ie=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx(je,{...o,...r,ref:n})});ie.displayName=ia;var la="MenubarItem",le=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx(Ae,{...o,...r,ref:n})});le.displayName=la;var sa="MenubarCheckboxItem",se=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx(Te,{...o,...r,ref:n})});se.displayName=sa;var ua="MenubarRadioGroup",ue=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx(De,{...o,...r,ref:n})});ue.displayName=ua;var da="MenubarRadioItem",de=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx(Ge,{...o,...r,ref:n})});de.displayName=da;var ca="MenubarItemIndicator",ce=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx(Fe,{...o,...r,ref:n})});ce.displayName=ca;var pa="MenubarSeparator",pe=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx(Ke,{...o,...r,ref:n})});pe.displayName=pa;var ma="MenubarArrow",fa=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx($e,{...o,...r,ref:n})});fa.displayName=ma;var ba="MenubarSub",me=e=>{const{__scopeMenubar:n,children:a,open:r,onOpenChange:o,defaultOpen:f}=e,p=c(n),[u=!1,l]=H({prop:r,defaultProp:f,onChange:o});return t.jsx(He,{...p,open:u,onOpenChange:l,children:a})};me.displayName=ba;var ya="MenubarSubTrigger",fe=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx(Be,{"data-radix-menubar-subtrigger":"",...o,...r,ref:n})});fe.displayName=ya;var ga="MenubarSubContent",be=i.forwardRef((e,n)=>{const{__scopeMenubar:a,...r}=e,o=c(a);return t.jsx(Le,{...o,"data-radix-menubar-content":"",...r,ref:n,style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});be.displayName=ga;function va(e,n){return e.map((a,r)=>e[(n+r)%e.length])}var ye=Z,ha=ae,ge=ne,ve=re,he=te,_a=oe,_e=ie,Me=le,xe=se,Ma=ue,Ce=de,Ne=ce,we=pe,xa=me,Ve=fe,Se=be;const Ga=ha,B=_a,L=ve,U=xa,W=Ma,I=i.forwardRef(({className:e,...n},a)=>t.jsx(ye,{ref:a,className:h("flex h-10 items-center space-x-1 rounded-md border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-950",e),...n}));I.displayName=ye.displayName;const R=i.forwardRef(({className:e,...n},a)=>t.jsx(ge,{ref:a,className:h("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[state=open]:bg-zinc-100 data-[state=open]:text-zinc-900 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[state=open]:bg-zinc-800 dark:data-[state=open]:text-zinc-50",e),...n}));R.displayName=ge.displayName;const q=i.forwardRef(({className:e,inset:n,children:a,...r},o)=>t.jsxs(Ve,{ref:o,className:h("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[state=open]:bg-zinc-100 data-[state=open]:text-zinc-900 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[state=open]:bg-zinc-800 dark:data-[state=open]:text-zinc-50",n&&"pl-8",e),...r,children:[a,t.jsx(Je,{className:"ml-auto h-4 w-4"})]}));q.displayName=Ve.displayName;const O=i.forwardRef(({className:e,...n},a)=>t.jsx(Se,{ref:a,className:h("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",e),...n}));O.displayName=Se.displayName;const P=i.forwardRef(({className:e,align:n="start",alignOffset:a=-4,sideOffset:r=8,...o},f)=>t.jsx(ve,{children:t.jsx(he,{ref:f,align:n,alignOffset:a,sideOffset:r,className:h("z-50 min-w-[12rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",e),...o})}));P.displayName=he.displayName;const E=i.forwardRef(({className:e,inset:n,...a},r)=>t.jsx(Me,{ref:r,className:h("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",n&&"pl-8",e),...a}));E.displayName=Me.displayName;const k=i.forwardRef(({className:e,children:n,checked:a,...r},o)=>t.jsxs(xe,{ref:o,className:h("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",e),checked:a,...r,children:[t.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:t.jsx(Ne,{children:t.jsx(Qe,{className:"h-4 w-4"})})}),n]}));k.displayName=xe.displayName;const z=i.forwardRef(({className:e,children:n,...a},r)=>t.jsxs(Ce,{ref:r,className:h("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",e),...a,children:[t.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:t.jsx(Ne,{children:t.jsx(Ze,{className:"h-2 w-2 fill-current"})})}),n]}));z.displayName=Ce.displayName;const j=i.forwardRef(({className:e,inset:n,...a},r)=>t.jsx(_e,{ref:r,className:h("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",e),...a}));j.displayName=_e.displayName;const A=i.forwardRef(({className:e,...n},a)=>t.jsx(we,{ref:a,className:h("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",e),...n}));A.displayName=we.displayName;const T=({className:e,...n})=>t.jsx("span",{className:h("ml-auto text-xs tracking-widest text-zinc-500 dark:text-zinc-400",e),...n});T.displayname="MenubarShortcut";try{I.displayName="Menubar",I.__docgenInfo={description:"",displayName:"Menubar",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},loop:{defaultValue:null,description:"",name:"loop",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"(value: string) => void"}}}}}catch{}try{R.displayName="MenubarTrigger",R.__docgenInfo={description:"",displayName:"MenubarTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{P.displayName="MenubarContent",P.__docgenInfo={description:"",displayName:"MenubarContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},loop:{defaultValue:null,description:`Whether keyboard navigation should loop around
@defaultValue false`,name:"loop",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"start"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},onEscapeKeyDown:{defaultValue:null,description:"",name:"onEscapeKeyDown",required:!1,type:{name:"(event: KeyboardEvent) => void"}},forceMount:{defaultValue:null,description:`Used to force mounting when more control is needed. Useful when
controlling animation with React animation libraries.`,name:"forceMount",required:!1,type:{name:"true"}},onPointerDownOutside:{defaultValue:null,description:"",name:"onPointerDownOutside",required:!1,type:{name:"(event: PointerDownOutsideEvent) => void"}},onFocusOutside:{defaultValue:null,description:"",name:"onFocusOutside",required:!1,type:{name:"(event: FocusOutsideEvent) => void"}},onInteractOutside:{defaultValue:null,description:"",name:"onInteractOutside",required:!1,type:{name:"(event: PointerDownOutsideEvent | FocusOutsideEvent) => void"}},onCloseAutoFocus:{defaultValue:null,description:`Event handler called when auto-focusing on close.
Can be prevented.`,name:"onCloseAutoFocus",required:!1,type:{name:"(event: Event) => void"}},side:{defaultValue:null,description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}},sideOffset:{defaultValue:{value:"8"},description:"",name:"sideOffset",required:!1,type:{name:"number"}},alignOffset:{defaultValue:{value:"-4"},description:"",name:"alignOffset",required:!1,type:{name:"number"}},arrowPadding:{defaultValue:null,description:"",name:"arrowPadding",required:!1,type:{name:"number"}},avoidCollisions:{defaultValue:null,description:"",name:"avoidCollisions",required:!1,type:{name:"boolean"}},collisionBoundary:{defaultValue:null,description:"",name:"collisionBoundary",required:!1,type:{name:"Element | Element[]"}},collisionPadding:{defaultValue:null,description:"",name:"collisionPadding",required:!1,type:{name:'number | Partial<Record<"top" | "bottom" | "left" | "right", number>>'}},sticky:{defaultValue:null,description:"",name:"sticky",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"partial"'}]}},hideWhenDetached:{defaultValue:null,description:"",name:"hideWhenDetached",required:!1,type:{name:"boolean"}},updatePositionStrategy:{defaultValue:null,description:"",name:"updatePositionStrategy",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"optimized"'}]}}}}}catch{}try{E.displayName="MenubarItem",E.__docgenInfo={description:"",displayName:"MenubarItem",props:{onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(event: Event) => void"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textValue:{defaultValue:null,description:"",name:"textValue",required:!1,type:{name:"string"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{A.displayName="MenubarSeparator",A.__docgenInfo={description:"",displayName:"MenubarSeparator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{j.displayName="MenubarLabel",j.__docgenInfo={description:"",displayName:"MenubarLabel",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{k.displayName="MenubarCheckboxItem",k.__docgenInfo={description:"",displayName:"MenubarCheckboxItem",props:{onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(event: Event) => void"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"CheckedState"}},onCheckedChange:{defaultValue:null,description:"",name:"onCheckedChange",required:!1,type:{name:"(checked: boolean) => void"}},textValue:{defaultValue:null,description:"",name:"textValue",required:!1,type:{name:"string"}}}}}catch{}try{W.displayName="MenubarRadioGroup",W.__docgenInfo={description:"",displayName:"MenubarRadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"(value: string) => void"}}}}}catch{}try{z.displayName="MenubarRadioItem",z.__docgenInfo={description:"",displayName:"MenubarRadioItem",props:{onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(event: Event) => void"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},textValue:{defaultValue:null,description:"",name:"textValue",required:!1,type:{name:"string"}}}}}catch{}try{L.displayName="MenubarPortal",L.__docgenInfo={description:"",displayName:"MenubarPortal",props:{container:{defaultValue:null,description:"Specify a container element to portal the content into.",name:"container",required:!1,type:{name:"Element"}},forceMount:{defaultValue:null,description:`Used to force mounting when more control is needed. Useful when
controlling animation with React animation libraries.`,name:"forceMount",required:!1,type:{name:"true"}}}}}catch{}try{O.displayName="MenubarSubContent",O.__docgenInfo={description:"",displayName:"MenubarSubContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},loop:{defaultValue:null,description:`Whether keyboard navigation should loop around
@defaultValue false`,name:"loop",required:!1,type:{name:"boolean"}},onEscapeKeyDown:{defaultValue:null,description:"",name:"onEscapeKeyDown",required:!1,type:{name:"(event: KeyboardEvent) => void"}},forceMount:{defaultValue:null,description:`Used to force mounting when more control is needed. Useful when
controlling animation with React animation libraries.`,name:"forceMount",required:!1,type:{name:"true"}},onPointerDownOutside:{defaultValue:null,description:"",name:"onPointerDownOutside",required:!1,type:{name:"(event: PointerDownOutsideEvent) => void"}},onFocusOutside:{defaultValue:null,description:"",name:"onFocusOutside",required:!1,type:{name:"(event: FocusOutsideEvent) => void"}},onInteractOutside:{defaultValue:null,description:"",name:"onInteractOutside",required:!1,type:{name:"(event: PointerDownOutsideEvent | FocusOutsideEvent) => void"}},sideOffset:{defaultValue:{value:"8"},description:"",name:"sideOffset",required:!1,type:{name:"number"}},alignOffset:{defaultValue:{value:"-4"},description:"",name:"alignOffset",required:!1,type:{name:"number"}},arrowPadding:{defaultValue:null,description:"",name:"arrowPadding",required:!1,type:{name:"number"}},avoidCollisions:{defaultValue:null,description:"",name:"avoidCollisions",required:!1,type:{name:"boolean"}},collisionBoundary:{defaultValue:null,description:"",name:"collisionBoundary",required:!1,type:{name:"Element | Element[]"}},collisionPadding:{defaultValue:null,description:"",name:"collisionPadding",required:!1,type:{name:'number | Partial<Record<"top" | "bottom" | "left" | "right", number>>'}},sticky:{defaultValue:null,description:"",name:"sticky",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"partial"'}]}},hideWhenDetached:{defaultValue:null,description:"",name:"hideWhenDetached",required:!1,type:{name:"boolean"}},updatePositionStrategy:{defaultValue:null,description:"",name:"updatePositionStrategy",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"optimized"'}]}}}}}catch{}try{q.displayName="MenubarSubTrigger",q.__docgenInfo={description:"",displayName:"MenubarSubTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textValue:{defaultValue:null,description:"",name:"textValue",required:!1,type:{name:"string"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{B.displayName="MenubarGroup",B.__docgenInfo={description:"",displayName:"MenubarGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{U.displayName="MenubarSub",U.__docgenInfo={description:"",displayName:"MenubarSub",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"(open: boolean) => void"}}}}}catch{}try{T.displayName="MenubarShortcut",T.__docgenInfo={description:"",displayName:"MenubarShortcut",props:{}}}catch{}export{I as M,Ga as a,R as b,P as c,E as d,T as e,A as f,U as g,q as h,O as i,k as j,W as k,z as l};
