import{j as i}from"./jsx-runtime-DBEcOq3S.js";import{r as u}from"./index-DtJulBIN.js";import{c as h}from"./utils-B06rK7pa.js";import"./_commonjsHelpers-BosuxZz1.js";function y(){const s=u.useRef(null),[l,e]=u.useState({vertical:0,horizontal:0});return u.useEffect(()=>{const t=()=>{var o;const r=(o=s.current)==null?void 0:o.getBoundingClientRect();r&&e({vertical:Math.floor(r.height),horizontal:Math.floor(r.width)})};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),{layout:l,containerRef:s}}function b(s,l,e){const t=[],r=e*2,o=new Set;for(let n=r;n<s/2-r;n+=e)for(let a=r;a<l-r;a+=e)o.has(n+a+e)||o.has(n+a-e)||o.has(n+a+e*4)||o.has(n+a-e*4)||(o.add(n+a),t.push({x:n,y:a}));return t}const x=24,w="absolute h-6 w-6 rounded-md bg-transparent p-px border border-gray-400/30 border-box group ";function N(){const{layout:{vertical:s,horizontal:l},containerRef:e}=y(),t=u.useMemo(()=>b(l,s,x),[l,s]),[r,o]=u.useState(0),n=u.useRef(),a=u.useCallback(()=>{n.current&&clearInterval(n.current);const c=()=>{const f=t[Math.floor(Math.random()*t.length)%t.length];o(f.x+f.y)};c();const d=5;let m=0;n.current=setInterval(()=>{if(m===d){clearInterval(n.current),o(0);return}c(),m++},1e3)},[t]),v=u.useMemo(()=>t.map(({x:c,y:d},m)=>{let f=c;m%2&&(f=l-c-x);const g=r-c===c||r-d===d;return i.jsx("div",{style:{transform:`translate(${f}px, ${d}px)`},onMouseEnter:a,onClick:a,className:w,children:i.jsx("div",{style:{transitionDelay:r?`${c+d}ms`:"0ms"},className:h("h-full w-full scale-90 rounded bg-gray-400/30 opacity-0 transition-all duration-700",{"scale-100 opacity-100":g,"group-hover:scale-100 group-hover:opacity-100":!g})})},`${c}-${d}`)}),[t,l,r,a]);return i.jsx("div",{ref:e,onClick:a,className:h("absolute inset-0 h-full max-h-96 w-full",{"top-1/4":s>96*4}),children:v})}function p({children:s,className:l,contentClassName:e}){return i.jsxs("div",{className:h("storybook-fix relative h-full w-full overflow-hidden rounded-3xl",l),style:{backgroundImage:"linear-gradient(123deg, transparent 0%, transparent 36%,rgba(17, 17, 57,0.02) 36%, rgba(17, 17, 87,0.02) 56%,transparent 56%, transparent 100%),linear-gradient(251deg, transparent 0%, transparent 68%,rgba(3, 3, 3,0.02) 68%, rgba(3, 3, 93,0.02) 99%,transparent 99%, transparent 100%),linear-gradient(135deg, rgb(200,215,255),rgb(205,215,255))"},children:[i.jsx(N,{}),i.jsx("div",{className:h("relative mx-auto h-full w-fit",e),children:s})]})}try{p.displayName="InteractiveGrid",p.__docgenInfo={description:"",displayName:"InteractiveGrid",props:{contentClassName:{defaultValue:null,description:"",name:"contentClassName",required:!1,type:{name:"string"}}}}}catch{}const M={title:"Third Party/Animata/Background/InteractiveGrid",component:p,tags:["autodoc"]},R={args:{children:i.jsxs("div",{className:"pointer-events-none my-24 flex h-fit max-w-sm flex-col items-center justify-center text-center text-zinc-800",children:[i.jsx("h1",{className:"text-4xl font-bold",children:"Hello there!"}),i.jsx("p",{className:"text-balance text-base",children:"I am a placeholder content. Hover over the small squares to see the animation."})]})}};export{R as Default,M as default};
