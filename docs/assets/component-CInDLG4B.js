import{j as s}from"./jsx-runtime-DBEcOq3S.js";import{r as d}from"./index-DtJulBIN.js";import{P as m}from"./index-kfRDelSZ.js";import{c as h}from"./utils-B06rK7pa.js";var v="Separator",l="horizontal",f=["horizontal","vertical"],p=d.forwardRef((e,a)=>{const{decorative:t,orientation:r=l,...o}=e,i=y(r)?r:l,u=t?{role:"none"}:{"aria-orientation":i==="vertical"?i:void 0,role:"separator"};return s.jsx(m.div,{"data-orientation":i,...u,...o,ref:a})});p.displayName=v;function y(e){return f.includes(e)}var c=p;const n=d.forwardRef(({className:e,orientation:a="horizontal",decorative:t=!0,...r},o)=>s.jsx(c,{ref:o,decorative:t,orientation:a,className:h("shrink-0 bg-gray-200 dark:bg-gray-800",a==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...r}));n.displayName=c.displayName;try{n.displayName="Separator",n.__docgenInfo={description:"",displayName:"Separator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"horizontal"},description:"Either `vertical` or `horizontal`. Defaults to `horizontal`.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},decorative:{defaultValue:{value:"true"},description:`Whether or not the component is purely decorative. When true, accessibility-related attributes
are updated so that that the rendered element is removed from the accessibility tree.`,name:"decorative",required:!1,type:{name:"boolean"}}}}}catch{}export{n as S};