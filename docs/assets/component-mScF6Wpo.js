import{j as R}from"./jsx-runtime-DBEcOq3S.js";import{r as P}from"./index-DtJulBIN.js";import{c as mt}from"./utils-B06rK7pa.js";import{B as Kt}from"./component-DrK3ye17.js";import{c as Ut}from"./createLucideIcon-uFt_cLfz.js";/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=Ut("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=Ut("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);function an(t){return Object.prototype.toString.call(t)==="[object Object]"}function qt(t){return an(t)||Array.isArray(t)}function ln(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function At(t,n){const o=Object.keys(t),r=Object.keys(n);if(o.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==s?!1:o.every(e=>{const a=t[e],u=n[e];return typeof a=="function"?`${a}`==`${u}`:!qt(a)||!qt(u)?a===u:At(a,u)})}function Gt(t){return t.concat().sort((n,o)=>n.name>o.name?1:-1).map(n=>n.options)}function fn(t,n){if(t.length!==n.length)return!1;const o=Gt(t),r=Gt(n);return o.every((i,s)=>{const e=r[s];return At(i,e)})}function Nt(t){return typeof t=="number"}function wt(t){return typeof t=="string"}function Pt(t){return typeof t=="boolean"}function _t(t){return Object.prototype.toString.call(t)==="[object Object]"}function D(t){return Math.abs(t)}function Dt(t){return Math.sign(t)}function lt(t,n){return D(t-n)}function dn(t,n){if(t===0||n===0||D(t)<=D(n))return 0;const o=lt(D(t),D(n));return D(o/t)}function ft(t){return dt(t).map(Number)}function H(t){return t[gt(t)]}function gt(t){return Math.max(0,t.length-1)}function Ot(t,n){return n===gt(t)}function $t(t,n=0){return Array.from(Array(t),(o,r)=>n+r)}function dt(t){return Object.keys(t)}function Qt(t,n){return[t,n].reduce((o,r)=>(dt(r).forEach(i=>{const s=o[i],e=r[i],a=_t(s)&&_t(e);o[i]=a?Qt(s,e):e}),o),{})}function It(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function pn(t,n){const o={start:r,center:i,end:s};function r(){return 0}function i(u){return s(u)/2}function s(u){return n-u}function e(u,c){return wt(t)?o[t](u):t(n,u,c)}return{measure:e}}function pt(){let t=[];function n(i,s,e,a={passive:!0}){let u;if("addEventListener"in i)i.addEventListener(s,e,a),u=()=>i.removeEventListener(s,e,a);else{const c=i;c.addListener(e),u=()=>c.removeListener(e)}return t.push(u),r}function o(){t=t.filter(i=>i())}const r={add:n,clear:o};return r}function mn(t,n,o,r){const i=pt(),s=1e3/60;let e=null,a=0,u=0;function c(){i.add(t,"visibilitychange",()=>{t.hidden&&f()})}function y(){x(),i.clear()}function d(h){if(!u)return;e||(e=h);const l=h-e;for(e=h,a+=l;a>=s;)o(s),a-=s;const g=a/s;r(g),u&&n.requestAnimationFrame(d)}function p(){u||(u=n.requestAnimationFrame(d))}function x(){n.cancelAnimationFrame(u),e=null,a=0,u=0}function f(){e=null,a=0}return{init:c,destroy:y,start:p,stop:x,update:()=>o(s),render:r}}function gn(t,n){const o=n==="rtl",r=t==="y",i=r?"y":"x",s=r?"x":"y",e=!r&&o?-1:1,a=y(),u=d();function c(f){const{height:m,width:h}=f;return r?m:h}function y(){return r?"top":o?"right":"left"}function d(){return r?"bottom":o?"left":"right"}function p(f){return f*e}return{scroll:i,cross:s,startEdge:a,endEdge:u,measureSize:c,direction:p}}function ot(t=0,n=0){const o=D(t-n);function r(c){return c<t}function i(c){return c>n}function s(c){return r(c)||i(c)}function e(c){return s(c)?r(c)?t:n:c}function a(c){return o?c-o*Math.ceil((c-n)/o):c}return{length:o,max:n,min:t,constrain:e,reachedAny:s,reachedMax:i,reachedMin:r,removeOffset:a}}function Jt(t,n,o){const{constrain:r}=ot(0,t),i=t+1;let s=e(n);function e(p){return o?D((i+p)%i):r(p)}function a(){return s}function u(p){return s=e(p),d}function c(p){return y().set(a()+p)}function y(){return Jt(t,a(),o)}const d={get:a,set:u,add:c,clone:y};return d}function hn(t,n,o,r,i,s,e,a,u,c,y,d,p,x,f,m,h,l,g){const{cross:b,direction:L}=t,A=["INPUT","SELECT","TEXTAREA"],w={passive:!1},v=pt(),E=pt(),C=ot(50,225).constrain(x.measure(20)),I={mouse:300,touch:400},N={mouse:500,touch:600},j=f?43:25;let Z=!1,V=0,$=0,nt=!1,K=!1,W=!1,U=!1;function et(S){if(!g)return;function T(k){(Pt(g)||g(S,k))&&z(k)}const M=n;v.add(M,"dragstart",k=>k.preventDefault(),w).add(M,"touchmove",()=>{},w).add(M,"touchend",()=>{}).add(M,"touchstart",T).add(M,"mousedown",T).add(M,"touchcancel",F).add(M,"contextmenu",F).add(M,"click",st,!0)}function Q(){v.clear(),E.clear()}function rt(){const S=U?o:n;E.add(S,"touchmove",q,w).add(S,"touchend",F).add(S,"mousemove",q,w).add(S,"mouseup",F)}function J(S){const T=S.nodeName||"";return A.includes(T)}function it(){return(f?N:I)[U?"mouse":"touch"]}function ct(S,T){const M=d.add(Dt(S)*-1),k=y.byDistance(S,!f).distance;return f||D(S)<C?k:h&&T?k*.5:y.byIndex(M.get(),0).distance}function z(S){const T=It(S,r);U=T,W=f&&T&&!S.buttons&&Z,Z=lt(i.get(),e.get())>=2,!(T&&S.button!==0)&&(J(S.target)||(nt=!0,s.pointerDown(S),c.useFriction(0).useDuration(0),i.set(e),rt(),V=s.readPoint(S),$=s.readPoint(S,b),p.emit("pointerDown")))}function q(S){if(!It(S,r)&&S.touches.length>=2)return F(S);const M=s.readPoint(S),k=s.readPoint(S,b),G=lt(M,V),X=lt(k,$);if(!K&&!U&&(!S.cancelable||(K=G>X,!K)))return F(S);const _=s.pointerMove(S);G>m&&(W=!0),c.useFriction(.3).useDuration(.75),a.start(),i.add(L(_)),S.preventDefault()}function F(S){const M=y.byDistance(0,!1).index!==d.get(),k=s.pointerUp(S)*it(),G=ct(L(k),M),X=dn(k,G),_=j-10*X,Y=l+X/50;K=!1,nt=!1,E.clear(),c.useDuration(_).useFriction(Y),u.distance(G,!f),U=!1,p.emit("pointerUp")}function st(S){W&&(S.stopPropagation(),S.preventDefault(),W=!1)}function B(){return nt}return{init:et,destroy:Q,pointerDown:B}}function yn(t,n){let r,i;function s(d){return d.timeStamp}function e(d,p){const f=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(It(d,n)?d:d.touches[0])[f]}function a(d){return r=d,i=d,e(d)}function u(d){const p=e(d)-e(i),x=s(d)-s(r)>170;return i=d,x&&(r=d),p}function c(d){if(!r||!i)return 0;const p=e(i)-e(r),x=s(d)-s(r),f=s(d)-s(i)>170,m=p/x;return x&&!f&&D(m)>.1?m:0}return{pointerDown:a,pointerMove:u,pointerUp:c,readPoint:e}}function Sn(){function t(o){const{offsetTop:r,offsetLeft:i,offsetWidth:s,offsetHeight:e}=o;return{top:r,right:i+s,bottom:r+e,left:i,width:s,height:e}}return{measure:t}}function xn(t){function n(r){return t*(r/100)}return{measure:n}}function bn(t,n,o,r,i,s,e){const a=[t].concat(r);let u,c,y=[],d=!1;function p(h){return i.measureSize(e.measure(h))}function x(h){if(!s)return;c=p(t),y=r.map(p);function l(g){for(const b of g){if(d)return;const L=b.target===t,A=r.indexOf(b.target),w=L?c:y[A],v=p(L?t:r[A]);if(D(v-w)>=.5){h.reInit(),n.emit("resize");break}}}u=new ResizeObserver(g=>{(Pt(s)||s(h,g))&&l(g)}),o.requestAnimationFrame(()=>{a.forEach(g=>u.observe(g))})}function f(){d=!0,u&&u.disconnect()}return{init:x,destroy:f}}function vn(t,n,o,r,i,s){let e=0,a=0,u=i,c=s,y=t.get(),d=0;function p(w){const v=w/1e3,E=u*v,C=r.get()-t.get(),I=!u;let N=0;return I?(e=0,o.set(r),t.set(r),N=C):(o.set(t),e+=C/E,e*=c,y+=e,t.add(e*v),N=y-d),a=Dt(N),d=y,A}function x(){const w=r.get()-n.get();return D(w)<.001}function f(){return u}function m(){return a}function h(){return e}function l(){return b(i)}function g(){return L(s)}function b(w){return u=w,A}function L(w){return c=w,A}const A={direction:m,duration:f,velocity:h,seek:p,settled:x,useBaseFriction:g,useBaseDuration:l,useFriction:L,useDuration:b};return A}function En(t,n,o,r,i){const s=i.measure(10),e=i.measure(50),a=ot(.1,.99);let u=!1;function c(){return!(u||!t.reachedAny(o.get())||!t.reachedAny(n.get()))}function y(x){if(!c())return;const f=t.reachedMin(n.get())?"min":"max",m=D(t[f]-n.get()),h=o.get()-n.get(),l=a.constrain(m/e);o.subtract(h*l),!x&&D(h)<s&&(o.set(t.constrain(o.get())),r.useDuration(25).useBaseFriction())}function d(x){u=!x}return{shouldConstrain:c,constrain:y,toggleActive:d}}function Cn(t,n,o,r,i){const s=ot(-n+t,0),e=d(),a=y(),u=p();function c(f,m){return lt(f,m)<1}function y(){const f=e[0],m=H(e),h=e.lastIndexOf(f),l=e.indexOf(m)+1;return ot(h,l)}function d(){return o.map((f,m)=>{const{min:h,max:l}=s,g=s.constrain(f),b=!m,L=Ot(o,m);return b?l:L||c(h,g)?h:c(l,g)?l:g}).map(f=>parseFloat(f.toFixed(3)))}function p(){if(n<=t+i)return[s.max];if(r==="keepSnaps")return e;const{min:f,max:m}=a;return e.slice(f,m)}return{snapsContained:u,scrollContainLimit:a}}function Ln(t,n,o){const r=n[0],i=o?r-t:H(n);return{limit:ot(i,r)}}function wn(t,n,o,r){const s=n.min+.1,e=n.max+.1,{reachedMin:a,reachedMax:u}=ot(s,e);function c(p){return p===1?u(o.get()):p===-1?a(o.get()):!1}function y(p){if(!c(p))return;const x=t*(p*-1);r.forEach(f=>f.add(x))}return{loop:y}}function In(t){const{max:n,length:o}=t;function r(s){const e=s-n;return o?e/-o:0}return{get:r}}function Tn(t,n,o,r,i){const{startEdge:s,endEdge:e}=t,{groupSlides:a}=i,u=d().map(n.measure),c=p(),y=x();function d(){return a(r).map(m=>H(m)[e]-m[0][s]).map(D)}function p(){return r.map(m=>o[s]-m[s]).map(m=>-D(m))}function x(){return a(c).map(m=>m[0]).map((m,h)=>m+u[h])}return{snaps:c,snapsAligned:y}}function An(t,n,o,r,i,s){const{groupSlides:e}=i,{min:a,max:u}=r,c=y();function y(){const p=e(s),x=!t||n==="keepSnaps";return o.length===1?[s]:x?p:p.slice(a,u).map((f,m,h)=>{const l=!m,g=Ot(h,m);if(l){const b=H(h[0])+1;return $t(b)}if(g){const b=gt(s)-H(h)[0]+1;return $t(b,H(h)[0])}return f})}return{slideRegistry:c}}function Nn(t,n,o,r,i){const{reachedAny:s,removeOffset:e,constrain:a}=r;function u(f){return f.concat().sort((m,h)=>D(m)-D(h))[0]}function c(f){const m=t?e(f):a(f),h=n.map((g,b)=>({diff:y(g-m,0),index:b})).sort((g,b)=>D(g.diff)-D(b.diff)),{index:l}=h[0];return{index:l,distance:m}}function y(f,m){const h=[f,f+o,f-o];if(!t)return f;if(!m)return u(h);const l=h.filter(g=>Dt(g)===m);return l.length?u(l):H(h)-o}function d(f,m){const h=n[f]-i.get(),l=y(h,m);return{index:f,distance:l}}function p(f,m){const h=i.get()+f,{index:l,distance:g}=c(h),b=!t&&s(h);if(!m||b)return{index:l,distance:f};const L=n[l]-g,A=f+y(L,0);return{index:l,distance:A}}return{byDistance:p,byIndex:d,shortcut:y}}function Pn(t,n,o,r,i,s,e){function a(d){const p=d.distance,x=d.index!==n.get();s.add(p),p&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),x&&(o.set(n.get()),n.set(d.index),e.emit("select"))}function u(d,p){const x=i.byDistance(d,p);a(x)}function c(d,p){const x=n.clone().set(d),f=i.byIndex(x.get(),p);a(f)}return{distance:u,index:c}}function Dn(t,n,o,r,i,s,e){let a=0;function u(){s.add(document,"keydown",c,!1),n.forEach(y)}function c(p){p.code==="Tab"&&(a=new Date().getTime())}function y(p){const x=()=>{if(new Date().getTime()-a>10)return;t.scrollLeft=0;const h=n.indexOf(p),l=o.findIndex(g=>g.includes(h));Nt(l)&&(i.useDuration(0),r.index(l,0),e.emit("slideFocus"))};s.add(p,"focus",x,{passive:!0,capture:!0})}return{init:u}}function at(t){let n=t;function o(){return n}function r(u){n=e(u)}function i(u){n+=e(u)}function s(u){n-=e(u)}function e(u){return Nt(u)?u:u.get()}return{get:o,set:r,add:i,subtract:s}}function Xt(t,n){const o=t.scroll==="x"?s:e,r=n.style;let i=!1;function s(d){return`translate3d(${d}px,0px,0px)`}function e(d){return`translate3d(0px,${d}px,0px)`}function a(d){i||(r.transform=o(t.direction(d)))}function u(d){i=!d}function c(){i||(r.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:c,to:a,toggleActive:u}}function On(t,n,o,r,i,s,e,a,u){const y=ft(i),d=ft(i).reverse(),p=l().concat(g());function x(v,E){return v.reduce((C,I)=>C-i[I],E)}function f(v,E){return v.reduce((C,I)=>x(C,E)>0?C.concat([I]):C,[])}function m(v){return s.map((E,C)=>({start:E-r[C]+.5+v,end:E+n-.5+v}))}function h(v,E,C){const I=m(E);return v.map(N=>{const j=C?0:-o,Z=C?o:0,V=C?"end":"start",$=I[N][V];return{index:N,loopPoint:$,slideLocation:at(-1),translate:Xt(t,u[N]),target:()=>a.get()>$?j:Z}})}function l(){const v=e[0],E=f(d,v);return h(E,o,!1)}function g(){const v=n-e[0]-1,E=f(y,v);return h(E,-o,!0)}function b(){return p.every(({index:v})=>{const E=y.filter(C=>C!==v);return x(E,n)<=.1})}function L(){p.forEach(v=>{const{target:E,translate:C,slideLocation:I}=v,N=E();N!==I.get()&&(C.to(N),I.set(N))})}function A(){p.forEach(v=>v.translate.clear())}return{canLoop:b,clear:A,loop:L,loopPoints:p}}function Mn(t,n,o){let r,i=!1;function s(u){if(!o)return;function c(y){for(const d of y)if(d.type==="childList"){u.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(y=>{i||(Pt(o)||o(u,y))&&c(y)}),r.observe(t,{childList:!0})}function e(){r&&r.disconnect(),i=!0}return{init:s,destroy:e}}function kn(t,n,o,r){const i={};let s=null,e=null,a,u=!1;function c(){a=new IntersectionObserver(f=>{u||(f.forEach(m=>{const h=n.indexOf(m.target);i[h]=m}),s=null,e=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(f=>a.observe(f))}function y(){a&&a.disconnect(),u=!0}function d(f){return dt(i).reduce((m,h)=>{const l=parseInt(h),{isIntersecting:g}=i[l];return(f&&g||!f&&!g)&&m.push(l),m},[])}function p(f=!0){if(f&&s)return s;if(!f&&e)return e;const m=d(f);return f&&(s=m),f||(e=m),m}return{init:c,destroy:y,get:p}}function Fn(t,n,o,r,i,s){const{measureSize:e,startEdge:a,endEdge:u}=t,c=o[0]&&i,y=f(),d=m(),p=o.map(e),x=h();function f(){if(!c)return 0;const g=o[0];return D(n[a]-g[a])}function m(){if(!c)return 0;const g=s.getComputedStyle(H(r));return parseFloat(g.getPropertyValue(`margin-${u}`))}function h(){return o.map((g,b,L)=>{const A=!b,w=Ot(L,b);return A?p[b]+y:w?p[b]+d:L[b+1][a]-g[a]}).map(D)}return{slideSizes:p,slideSizesWithGaps:x,startGap:y,endGap:d}}function jn(t,n,o,r,i,s,e,a,u){const{startEdge:c,endEdge:y,direction:d}=t,p=Nt(o);function x(l,g){return ft(l).filter(b=>b%g===0).map(b=>l.slice(b,b+g))}function f(l){return l.length?ft(l).reduce((g,b,L)=>{const A=H(g)||0,w=A===0,v=b===gt(l),E=i[c]-s[A][c],C=i[c]-s[b][y],I=!r&&w?d(e):0,N=!r&&v?d(a):0,j=D(C-N-(E+I));return L&&j>n+u&&g.push(b),v&&g.push(l.length),g},[]).map((g,b,L)=>{const A=Math.max(L[b-1]||0);return l.slice(A,g)}):[]}function m(l){return p?x(l,o):f(l)}return{groupSlides:m}}function zn(t,n,o,r,i,s,e){const{align:a,axis:u,direction:c,startIndex:y,loop:d,duration:p,dragFree:x,dragThreshold:f,inViewThreshold:m,slidesToScroll:h,skipSnaps:l,containScroll:g,watchResize:b,watchSlides:L,watchDrag:A}=s,w=2,v=Sn(),E=v.measure(n),C=o.map(v.measure),I=gn(u,c),N=I.measureSize(E),j=xn(N),Z=pn(a,N),V=!d&&!!g,$=d||!!g,{slideSizes:nt,slideSizesWithGaps:K,startGap:W,endGap:U}=Fn(I,E,C,o,$,i),et=jn(I,N,h,d,E,C,W,U,w),{snaps:Q,snapsAligned:rt}=Tn(I,Z,E,C,et),J=-H(Q)+H(K),{snapsContained:it,scrollContainLimit:ct}=Cn(N,J,rt,g,w),z=V?it:rt,{limit:q}=Ln(J,z,d),F=Jt(gt(z),y,d),st=F.clone(),B=ft(o),O=({dragHandler:tt,scrollBody:Et,scrollBounds:Ct,options:{loop:ht}},Lt)=>{ht||Ct.constrain(tt.pointerDown()),Et.seek(Lt)},S=({scrollBody:tt,translate:Et,location:Ct,offsetLocation:ht,scrollLooper:Lt,slideLooper:tn,dragHandler:nn,animation:en,eventHandler:zt,scrollBounds:on,options:{loop:Vt}},Bt)=>{const Rt=tt.settled(),rn=!on.shouldConstrain(),Ht=Vt?Rt:Rt&&rn;Ht&&!nn.pointerDown()&&(en.stop(),zt.emit("settle")),Ht||zt.emit("scroll");const sn=Ct.get()*Bt+X.get()*(1-Bt);ht.set(sn),Vt&&(Lt.loop(tt.direction()),tn.loop()),Et.to(ht.get())},T=mn(r,i,tt=>O(vt,tt),tt=>S(vt,tt)),M=.68,k=z[F.get()],G=at(k),X=at(k),_=at(k),Y=at(k),ut=vn(G,_,X,Y,p,M),xt=Nn(d,z,J,q,Y),bt=Pn(T,F,st,ut,xt,Y,e),kt=In(q),Ft=pt(),Zt=kn(n,o,e,m),{slideRegistry:jt}=An(V,g,z,ct,et,B),Wt=Dn(t,o,jt,bt,ut,Ft,e),vt={ownerDocument:r,ownerWindow:i,eventHandler:e,containerRect:E,slideRects:C,animation:T,axis:I,dragHandler:hn(I,t,r,i,Y,yn(I,i),G,T,bt,ut,xt,F,e,j,x,f,l,M,A),eventStore:Ft,percentOfView:j,index:F,indexPrevious:st,limit:q,location:G,offsetLocation:_,previousLocation:X,options:s,resizeHandler:bn(n,e,i,o,I,b,v),scrollBody:ut,scrollBounds:En(q,_,Y,ut,j),scrollLooper:wn(J,q,_,[G,_,X,Y]),scrollProgress:kt,scrollSnapList:z.map(kt.get),scrollSnaps:z,scrollTarget:xt,scrollTo:bt,slideLooper:On(I,N,J,nt,K,Q,z,_,o),slideFocus:Wt,slidesHandler:Mn(n,e,L),slidesInView:Zt,slideIndexes:B,slideRegistry:jt,slidesToScroll:et,target:Y,translate:Xt(I,n)};return vt}function Vn(){let t={},n;function o(c){n=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(y=>y(n,c)),u}function s(c,y){return t[c]=r(c).concat([y]),u}function e(c,y){return t[c]=r(c).filter(d=>d!==y),u}function a(){t={}}const u={init:o,emit:i,off:e,on:s,clear:a};return u}const Bn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Rn(t){function n(s,e){return Qt(s,e||{})}function o(s){const e=s.breakpoints||{},a=dt(e).filter(u=>t.matchMedia(u).matches).map(u=>e[u]).reduce((u,c)=>n(u,c),{});return n(s,a)}function r(s){return s.map(e=>dt(e.breakpoints||{})).reduce((e,a)=>e.concat(a),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:o,optionsMediaQueries:r}}function Hn(t){let n=[];function o(s,e){return n=e.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),n.forEach(a=>a.init(s,t)),e.reduce((a,u)=>Object.assign(a,{[u.name]:u}),{})}function r(){n=n.filter(s=>s.destroy())}return{init:o,destroy:r}}function yt(t,n,o){const r=t.ownerDocument,i=r.defaultView,s=Rn(i),e=Hn(s),a=pt(),u=Vn(),{mergeOptions:c,optionsAtMedia:y,optionsMediaQueries:d}=s,{on:p,off:x,emit:f}=u,m=N;let h=!1,l,g=c(Bn,yt.globalOptions),b=c(g),L=[],A,w,v;function E(){const{container:O,slides:S}=b;w=(wt(O)?t.querySelector(O):O)||t.children[0];const M=wt(S)?w.querySelectorAll(S):S;v=[].slice.call(M||w.children)}function C(O){const S=zn(t,w,v,r,i,O,u);if(O.loop&&!S.slideLooper.canLoop()){const T=Object.assign({},O,{loop:!1});return C(T)}return S}function I(O,S){h||(g=c(g,O),b=y(g),L=S||L,E(),l=C(b),d([g,...L.map(({options:T})=>T)]).forEach(T=>a.add(T,"change",N)),b.active&&(l.translate.to(l.location.get()),l.animation.init(),l.slidesInView.init(),l.slideFocus.init(),l.eventHandler.init(B),l.resizeHandler.init(B),l.slidesHandler.init(B),l.options.loop&&l.slideLooper.loop(),w.offsetParent&&v.length&&l.dragHandler.init(B),A=e.init(B,L)))}function N(O,S){const T=Q();j(),I(c({startIndex:T},O),S),u.emit("reInit")}function j(){l.dragHandler.destroy(),l.eventStore.clear(),l.translate.clear(),l.slideLooper.clear(),l.resizeHandler.destroy(),l.slidesHandler.destroy(),l.slidesInView.destroy(),l.animation.destroy(),e.destroy(),a.clear()}function Z(){h||(h=!0,a.clear(),j(),u.emit("destroy"),u.clear())}function V(O,S,T){!b.active||h||(l.scrollBody.useBaseFriction().useDuration(S===!0?0:b.duration),l.scrollTo.index(O,T||0))}function $(O){const S=l.index.add(1).get();V(S,O,-1)}function nt(O){const S=l.index.add(-1).get();V(S,O,1)}function K(){return l.index.add(1).get()!==Q()}function W(){return l.index.add(-1).get()!==Q()}function U(){return l.scrollSnapList}function et(){return l.scrollProgress.get(l.location.get())}function Q(){return l.index.get()}function rt(){return l.indexPrevious.get()}function J(){return l.slidesInView.get()}function it(){return l.slidesInView.get(!1)}function ct(){return A}function z(){return l}function q(){return t}function F(){return w}function st(){return v}const B={canScrollNext:K,canScrollPrev:W,containerNode:F,internalEngine:z,destroy:Z,off:x,on:p,emit:f,plugins:ct,previousScrollSnap:rt,reInit:m,rootNode:q,scrollNext:$,scrollPrev:nt,scrollProgress:et,scrollSnapList:U,scrollTo:V,selectedScrollSnap:Q,slideNodes:st,slidesInView:J,slidesNotInView:it};return I(n,o),setTimeout(()=>u.emit("init"),0),B}yt.globalOptions=void 0;function Mt(t={},n=[]){const o=P.useRef(t),r=P.useRef(n),[i,s]=P.useState(),[e,a]=P.useState(),u=P.useCallback(()=>{i&&i.reInit(o.current,r.current)},[i]);return P.useEffect(()=>{if(ln()&&e){yt.globalOptions=Mt.globalOptions;const c=yt(e,o.current,r.current);return s(c),()=>c.destroy()}else s(void 0)},[e,s]),P.useEffect(()=>{At(o.current,t)||(o.current=t,u())},[t,u]),P.useEffect(()=>{fn(r.current,n)||(r.current=n,u())},[n,u]),[a,i]}Mt.globalOptions=void 0;const Yt=P.createContext(null);function St(){const t=P.useContext(Yt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Tt=P.forwardRef(({orientation:t="horizontal",opts:n,setApi:o,plugins:r,className:i,children:s,...e},a)=>{const[u,c]=Mt({...n,axis:t==="horizontal"?"x":"y"},r),[y,d]=P.useState(!1),[p,x]=P.useState(!1),f=P.useCallback(g=>{g&&(d(g.canScrollPrev()),x(g.canScrollNext()))},[]),m=P.useCallback(()=>{c==null||c.scrollPrev()},[c]),h=P.useCallback(()=>{c==null||c.scrollNext()},[c]),l=P.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),m()):g.key==="ArrowRight"&&(g.preventDefault(),h())},[m,h]);return P.useEffect(()=>{!c||!o||o(c)},[c,o]),P.useEffect(()=>{if(c)return f(c),c.on("reInit",f),c.on("select",f),()=>{c==null||c.off("select",f)}},[c,f]),R.jsx(Yt.Provider,{value:{carouselRef:u,api:c,opts:n,orientation:t||((n==null?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:h,canScrollPrev:y,canScrollNext:p},children:R.jsx("div",{ref:a,onKeyDownCapture:l,className:mt("relative",i),role:"region","aria-roledescription":"carousel",...e,children:s})})});Tt.displayName="Carousel";const qn=P.forwardRef(({className:t,...n},o)=>{const{carouselRef:r,orientation:i}=St();return R.jsx("div",{ref:r,className:"overflow-hidden",children:R.jsx("div",{ref:o,className:mt("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...n})})});qn.displayName="CarouselContent";const Gn=P.forwardRef(({className:t,...n},o)=>{const{orientation:r}=St();return R.jsx("div",{ref:o,role:"group","aria-roledescription":"slide",className:mt("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",t),...n})});Gn.displayName="CarouselItem";const _n=P.forwardRef(({className:t,variant:n="outline",size:o="icon",...r},i)=>{const{orientation:s,scrollPrev:e,canScrollPrev:a}=St();return R.jsxs(Kt,{ref:i,variant:n,size:o,className:mt("absolute  h-8 w-8 rounded-full",s==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:e,...r,children:[R.jsx(cn,{className:"h-4 w-4"}),R.jsx("span",{className:"sr-only",children:"Previous slide"})]})});_n.displayName="CarouselPrevious";const $n=P.forwardRef(({className:t,variant:n="outline",size:o="icon",...r},i)=>{const{orientation:s,scrollNext:e,canScrollNext:a}=St();return R.jsxs(Kt,{ref:i,variant:n,size:o,className:mt("absolute h-8 w-8 rounded-full",s==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:e,...r,children:[R.jsx(un,{className:"h-4 w-4"}),R.jsx("span",{className:"sr-only",children:"Next slide"})]})});$n.displayName="CarouselNext";try{Tt.displayName="Carousel",Tt.__docgenInfo={description:"",displayName:"Carousel",props:{opts:{defaultValue:null,description:"",name:"opts",required:!1,type:{name:"Partial<OptionsType>"}},plugins:{defaultValue:null,description:"",name:"plugins",required:!1,type:{name:"CreatePluginType<LoosePluginType, {}>[]"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},setApi:{defaultValue:null,description:"",name:"setApi",required:!1,type:{name:"(api: EmblaCarouselType) => void"}}}}}catch{}export{Tt as C,qn as a,Gn as b,_n as c,$n as d};