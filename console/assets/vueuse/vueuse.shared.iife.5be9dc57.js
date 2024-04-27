var VueDemi=function(a,i,F){if(a.install)return a;if(!i)return console.error("[vue-demi] no Vue instance found, please be sure to import `vue` before `vue-demi`."),a;if(i.version.slice(0,4)==="2.7."){let h=function(P,j){var g,N={},U={config:i.config,use:i.use.bind(i),mixin:i.mixin.bind(i),component:i.component.bind(i),provide:function($,S){return N[$]=S,this},directive:function($,S){return S?(i.directive($,S),U):i.directive($)},mount:function($,S){return g||(g=new i(Object.assign({propsData:j},P,{provide:Object.assign(N,P.provide)})),g.$mount($,S),g)},unmount:function(){g&&(g.$destroy(),g=void 0)}};return U};var ee=h;for(var b in i)a[b]=i[b];a.isVue2=!0,a.isVue3=!1,a.install=function(){},a.Vue=i,a.Vue2=i,a.version=i.version,a.warn=i.util.warn,a.hasInjectionContext=()=>!!a.getCurrentInstance(),a.createApp=h}else if(i.version.slice(0,2)==="2.")if(F){for(var b in F)a[b]=F[b];a.isVue2=!0,a.isVue3=!1,a.install=function(){},a.Vue=i,a.Vue2=i,a.version=i.version,a.hasInjectionContext=()=>!!a.getCurrentInstance()}else console.error("[vue-demi] no VueCompositionAPI instance found, please be sure to import `@vue/composition-api` before `vue-demi`.");else if(i.version.slice(0,2)==="3."){for(var b in i)a[b]=i[b];a.isVue2=!1,a.isVue3=!0,a.install=function(){},a.Vue=i,a.Vue2=void 0,a.version=i.version,a.set=function(h,P,j){return Array.isArray(h)?(h.length=Math.max(h.length,P),h.splice(P,1,j),j):(h[P]=j,j)},a.del=function(h,P){if(Array.isArray(h)){h.splice(P,1);return}delete h[P]}}else console.error("[vue-demi] Vue version "+i.version+" is unsupported.");return a}(this.VueDemi=this.VueDemi||(typeof VueDemi<"u"?VueDemi:{}),this.Vue||(typeof Vue<"u"?Vue:void 0),this.VueCompositionAPI||(typeof VueCompositionAPI<"u"?VueCompositionAPI:void 0));(function(a,i){"use strict";var F=Object.defineProperty,b=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&g(e,r,t[r]);if(h)for(var r of h(t))j.call(t,r)&&g(e,r,t[r]);return e},U=(e,t)=>b(e,ee(t));function $(e,t){var r;const n=i.shallowRef();return i.watchEffect(()=>{n.value=e()},U(N({},t),{flush:(r=t?.flush)!=null?r:"sync"})),i.readonly(n)}function S(e,t){let r,n,o;const c=i.ref(!0),u=()=>{c.value=!0,o()};i.watch(e,u,{flush:"sync"});const l=typeof t=="function"?t:t.get,d=typeof t=="function"?void 0:t.set,y=i.customRef((_,f)=>(n=_,o=f,{get(){return c.value&&(r=l(),c.value=!1),n(),r},set(p){d?.(p)}}));return Object.isExtensible(y)&&(y.trigger=u),y}function I(e){return i.getCurrentScope()?(i.onScopeDispose(e),!0):!1}function Xe(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const c=()=>t(o);return I(c),{off:c}},off:t,trigger:o=>Promise.all(Array.from(e).map(c=>c(o)))}}function Ke(e){let t=!1,r;const n=i.effectScope(!0);return(...o)=>(t||(r=n.run(()=>e(...o)),t=!0),r)}function Qe(e){const t=Symbol("InjectionState");return[(...o)=>{const c=e(...o);return i.provide(t,c),c},()=>i.inject(t)]}function Ve(e){let t=0,r,n;const o=()=>{t-=1,n&&t<=0&&(n.stop(),r=void 0,n=void 0)};return(...c)=>(t+=1,r||(n=i.effectScope(!0),r=n.run(()=>e(...c))),I(o),r)}function te(e,t,{enumerable:r=!1,unwrap:n=!0}={}){if(!i.isVue3&&!i.version.startsWith("2.7.")){if(process.env.NODE_ENV!=="production")throw new Error("[VueUse] extendRef only works in Vue 2.7 or above.");return}for(const[o,c]of Object.entries(t))o!=="value"&&(i.isRef(c)&&n?Object.defineProperty(e,o,{get(){return c.value},set(u){c.value=u},enumerable:r}):Object.defineProperty(e,o,{value:c,enumerable:r}));return e}function De(e,t){return t==null?i.unref(e):i.unref(e)[t]}function xe(e){return i.unref(e)!=null}var et=Object.defineProperty,re=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,ne=(e,t,r)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nt=(e,t)=>{for(var r in t||(t={}))tt.call(t,r)&&ne(e,r,t[r]);if(re)for(var r of re(t))rt.call(t,r)&&ne(e,r,t[r]);return e};function ot(e,t){if(typeof Symbol<"u"){const r=nt({},e);return Object.defineProperty(r,Symbol.iterator,{enumerable:!1,value(){let n=0;return{next:()=>({value:t[n++],done:n>t.length})}}}),r}else return Object.assign([...t],e)}function s(e){return typeof e=="function"?e():i.unref(e)}const at=s;function k(e,t){const r=t?.computedGetter===!1?i.unref:s;return function(...n){return i.computed(()=>e.apply(this,n.map(o=>r(o))))}}function it(e,t={}){let r=[],n;if(Array.isArray(t))r=t;else{n=t;const{includeOwnProperties:o=!0}=t;r.push(...Object.keys(e)),o&&r.push(...Object.getOwnPropertyNames(e))}return Object.fromEntries(r.map(o=>{const c=e[o];return[o,typeof c=="function"?k(c.bind(e),n):c]}))}function oe(e){if(!i.isRef(e))return i.reactive(e);const t=new Proxy({},{get(r,n,o){return i.unref(Reflect.get(e.value,n,o))},set(r,n,o){return i.isRef(e.value[n])&&!i.isRef(o)?e.value[n].value=o:e.value[n]=o,!0},deleteProperty(r,n){return Reflect.deleteProperty(e.value,n)},has(r,n){return Reflect.has(e.value,n)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return i.reactive(t)}function z(e){return oe(i.computed(e))}function ct(e,...t){const r=t.flat(),n=r[0];return z(()=>Object.fromEntries(typeof n=="function"?Object.entries(i.toRefs(e)).filter(([o,c])=>!n(s(c),o)):Object.entries(i.toRefs(e)).filter(o=>!r.includes(o[0]))))}const R=typeof window<"u",lt=e=>typeof e<"u",ut=e=>e!=null,st=(e,...t)=>{e||console.warn(...t)},ft=Object.prototype.toString,ae=e=>ft.call(e)==="[object Object]",dt=()=>Date.now(),ie=()=>+Date.now(),pt=(e,t,r)=>Math.min(r,Math.max(t,e)),E=()=>{},_t=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),yt=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),vt=Ot();function Ot(){var e;return R&&((e=window?.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function C(e,t){function r(...n){return new Promise((o,c)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(o).catch(c)})}return r}const W=e=>e();function q(e,t={}){let r,n,o=E;const c=l=>{clearTimeout(l),o(),o=E};return l=>{const d=s(e),y=s(t.maxWait);return r&&c(r),d<=0||y!==void 0&&y<=0?(n&&(c(n),n=null),Promise.resolve(l())):new Promise((_,f)=>{o=t.rejectOnCancel?f:_,y&&!n&&(n=setTimeout(()=>{r&&c(r),n=null,_(l())},y)),r=setTimeout(()=>{n&&c(n),n=null,_(l())},d)})}}function Z(e,t=!0,r=!0,n=!1){let o=0,c,u=!0,l=E,d;const y=()=>{c&&(clearTimeout(c),c=void 0,l(),l=E)};return f=>{const p=s(e),O=Date.now()-o,v=()=>d=f();return y(),p<=0?(o=Date.now(),v()):(O>p&&(r||!u)?(o=Date.now(),v()):t&&(d=new Promise((m,w)=>{l=n?w:m,c=setTimeout(()=>{o=Date.now(),u=!0,m(v()),y()},Math.max(0,p-O))})),!r&&!c&&(c=setTimeout(()=>u=!0,p)),u=!1,d)}}function ce(e=W){const t=i.ref(!0);function r(){t.value=!1}function n(){t.value=!0}const o=(...c)=>{t.value&&e(...c)};return{isActive:i.readonly(t),pause:r,resume:n,eventFilter:o}}const ht={mounted:i.isVue3?"mounted":"inserted",updated:i.isVue3?"updated":"componentUpdated",unmounted:i.isVue3?"unmounted":"unbind"};function le(e){const t=Object.create(null);return r=>t[r]||(t[r]=e(r))}const wt=/\B([A-Z])/g,mt=le(e=>e.replace(wt,"-$1").toLowerCase()),Pt=/-(\w)/g,gt=le(e=>e.replace(Pt,(t,r)=>r?r.toUpperCase():""));function J(e,t=!1,r="Timeout"){return new Promise((n,o)=>{setTimeout(t?()=>o(r):n,e)})}function bt(e){return e}function $t(e){let t;function r(){return t||(t=e()),t}return r.reset=async()=>{const n=t;t=void 0,n&&await n},r}function St(e){return e()}function ue(e,...t){return t.some(r=>r in e)}function At(e,t){var r;if(typeof e=="number")return e+t;const n=((r=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:r[0])||"",o=e.slice(n.length),c=Number.parseFloat(n)+t;return Number.isNaN(c)?e:c+o}function jt(e,t,r=!1){return t.reduce((n,o)=>(o in e&&(!r||e[o]!==void 0)&&(n[o]=e[o]),n),{})}function It(e,t,r=!1){return Object.fromEntries(Object.entries(e).filter(([n,o])=>(!r||o!==void 0)&&!t.includes(n)))}function Et(e){return Object.entries(e)}function X(...e){if(e.length!==1)return i.toRef(...e);const t=e[0];return typeof t=="function"?i.readonly(i.customRef(()=>({get:t,set:E}))):i.ref(t)}const Tt=X;function Ft(e,...t){const r=t.flat(),n=r[0];return z(()=>Object.fromEntries(typeof n=="function"?Object.entries(i.toRefs(e)).filter(([o,c])=>n(s(c),o)):r.map(o=>[o,X(e,o)])))}function se(e,t=1e4){return i.customRef((r,n)=>{let o=e,c;const u=()=>setTimeout(()=>{o=e,n()},s(t));return I(()=>{clearTimeout(c)}),{get(){return r(),o},set(l){o=l,n(),clearTimeout(c),c=u()}}})}function fe(e,t=200,r={}){return C(q(t,r),e)}function K(e,t=200,r={}){const n=i.ref(e.value),o=fe(()=>{n.value=e.value},t,r);return i.watch(e,()=>o()),n}function Rt(e,t){return i.computed({get(){var r;return(r=e.value)!=null?r:t},set(r){e.value=r}})}function de(e,t=200,r=!1,n=!0,o=!1){return C(Z(t,r,n,o),e)}function Q(e,t=200,r=!0,n=!0){if(t<=0)return e;const o=i.ref(e.value),c=de(()=>{o.value=e.value},t,r,n);return i.watch(e,()=>c()),o}function pe(e,t={}){let r=e,n,o;const c=i.customRef((p,O)=>(n=p,o=O,{get(){return u()},set(v){l(v)}}));function u(p=!0){return p&&n(),r}function l(p,O=!0){var v,m;if(p===r)return;const w=r;((v=t.onBeforeChange)==null?void 0:v.call(t,p,w))!==!1&&(r=p,(m=t.onChanged)==null||m.call(t,p,w),O&&o())}return te(c,{get:u,set:l,untrackedGet:()=>u(!1),silentSet:p=>l(p,!1),peek:()=>u(!1),lay:p=>l(p,!1)},{enumerable:!0})}const Ct=pe;function Mt(...e){if(e.length===2){const[t,r]=e;t.value=r}if(e.length===3)if(i.isVue2)i.set(...e);else{const[t,r,n]=e;t[r]=n}}function Nt(e,t,r={}){var n,o;const{flush:c="sync",deep:u=!1,immediate:l=!0,direction:d="both",transform:y={}}=r;let _,f;const p=(n=y.ltr)!=null?n:v=>v,O=(o=y.rtl)!=null?o:v=>v;return(d==="both"||d==="ltr")&&(_=i.watch(e,v=>t.value=p(v),{flush:c,deep:u,immediate:l})),(d==="both"||d==="rtl")&&(f=i.watch(t,v=>e.value=O(v),{flush:c,deep:u,immediate:l})),()=>{_?.(),f?.()}}function Ut(e,t,r={}){const{flush:n="sync",deep:o=!1,immediate:c=!0}=r;return Array.isArray(t)||(t=[t]),i.watch(e,u=>t.forEach(l=>l.value=u),{flush:n,deep:o,immediate:c})}var Wt=Object.defineProperty,Lt=Object.defineProperties,Bt=Object.getOwnPropertyDescriptors,_e=Object.getOwnPropertySymbols,Ht=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable,ye=(e,t,r)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Gt=(e,t)=>{for(var r in t||(t={}))Ht.call(t,r)&&ye(e,r,t[r]);if(_e)for(var r of _e(t))Yt.call(t,r)&&ye(e,r,t[r]);return e},kt=(e,t)=>Lt(e,Bt(t));function zt(e,t={}){if(!i.isRef(e))return i.toRefs(e);const r=Array.isArray(e.value)?Array.from({length:e.value.length}):{};for(const n in e.value)r[n]=i.customRef(()=>({get(){return e.value[n]},set(o){var c;if((c=s(t.replaceRef))!=null?c:!0)if(Array.isArray(e.value)){const l=[...e.value];l[n]=o,e.value=l}else{const l=kt(Gt({},e.value),{[n]:o});Object.setPrototypeOf(l,Object.getPrototypeOf(e.value)),e.value=l}else e.value[n]=o}}));return r}function qt(e,t=!0){i.getCurrentInstance()?i.onBeforeMount(e):t?e():i.nextTick(e)}function Zt(e){i.getCurrentInstance()&&i.onBeforeUnmount(e)}function Jt(e,t=!0){i.getCurrentInstance()?i.onMounted(e):t?e():i.nextTick(e)}function Xt(e){i.getCurrentInstance()&&i.onUnmounted(e)}function V(e,t=!1){function r(f,{flush:p="sync",deep:O=!1,timeout:v,throwOnTimeout:m}={}){let w=null;const x=[new Promise(G=>{w=i.watch(e,T=>{f(T)!==t&&(w?.(),G(T))},{flush:p,deep:O,immediate:!0})})];return v!=null&&x.push(J(v,m).then(()=>s(e)).finally(()=>w?.())),Promise.race(x)}function n(f,p){if(!i.isRef(f))return r(T=>T===f,p);const{flush:O="sync",deep:v=!1,timeout:m,throwOnTimeout:w}=p??{};let A=null;const G=[new Promise(T=>{A=i.watch([e,f],([Je,Bn])=>{t!==(Je===Bn)&&(A?.(),T(Je))},{flush:O,deep:v,immediate:!0})})];return m!=null&&G.push(J(m,w).then(()=>s(e)).finally(()=>(A?.(),s(e)))),Promise.race(G)}function o(f){return r(p=>!!p,f)}function c(f){return n(null,f)}function u(f){return n(void 0,f)}function l(f){return r(Number.isNaN,f)}function d(f,p){return r(O=>{const v=Array.from(O);return v.includes(f)||v.includes(s(f))},p)}function y(f){return _(1,f)}function _(f=1,p){let O=-1;return r(()=>(O+=1,O>=f),p)}return Array.isArray(s(e))?{toMatch:r,toContains:d,changed:y,changedTimes:_,get not(){return V(e,!t)}}:{toMatch:r,toBe:n,toBeTruthy:o,toBeNull:c,toBeNaN:l,toBeUndefined:u,changed:y,changedTimes:_,get not(){return V(e,!t)}}}function Kt(e){return V(e)}function Qt(e,t){return e===t}function Vt(...e){var t;const r=e[0],n=e[1];let o=(t=e[2])!=null?t:Qt;if(typeof o=="string"){const c=o;o=(u,l)=>u[c]===l[c]}return i.computed(()=>s(r).filter(c=>s(n).findIndex(u=>o(c,u))===-1))}function Dt(e,t){return i.computed(()=>s(e).every((r,n,o)=>t(s(r),n,o)))}function xt(e,t){return i.computed(()=>s(e).map(r=>s(r)).filter(t))}function er(e,t){return i.computed(()=>s(s(e).find((r,n,o)=>t(s(r),n,o))))}function tr(e,t){return i.computed(()=>s(e).findIndex((r,n,o)=>t(s(r),n,o)))}function rr(e,t){let r=e.length;for(;r-- >0;)if(t(e[r],r,e))return e[r]}function nr(e,t){return i.computed(()=>s(Array.prototype.findLast?s(e).findLast((r,n,o)=>t(s(r),n,o)):rr(s(e),(r,n,o)=>t(s(r),n,o))))}function or(e){return ae(e)&&ue(e,"formIndex","comparator")}function ar(...e){var t;const r=e[0],n=e[1];let o=e[2],c=0;if(or(o)&&(c=(t=o.fromIndex)!=null?t:0,o=o.comparator),typeof o=="string"){const u=o;o=(l,d)=>l[u]===s(d)}return o=o??((u,l)=>u===s(l)),i.computed(()=>s(r).slice(c).some((u,l,d)=>o(s(u),s(n),l,s(d))))}function ir(e,t){return i.computed(()=>s(e).map(r=>s(r)).join(s(t)))}function cr(e,t){return i.computed(()=>s(e).map(r=>s(r)).map(t))}function lr(e,t,...r){const n=(o,c,u)=>t(s(o),s(c),u);return i.computed(()=>{const o=s(e);return r.length?o.reduce(n,s(r[0])):o.reduce(n)})}function ur(e,t){return i.computed(()=>s(e).some((r,n,o)=>t(s(r),n,o)))}function sr(e){return Array.from(new Set(e))}function fr(e,t){return e.reduce((r,n)=>(r.some(o=>t(n,o,e))||r.push(n),r),[])}function dr(e,t){return i.computed(()=>{const r=s(e).map(n=>s(n));return t?fr(r,t):sr(r)})}function pr(e=0,t={}){let r=i.unref(e);const n=i.ref(e),{max:o=Number.POSITIVE_INFINITY,min:c=Number.NEGATIVE_INFINITY}=t,u=(f=1)=>n.value=Math.min(o,n.value+f),l=(f=1)=>n.value=Math.max(c,n.value-f),d=()=>n.value,y=f=>n.value=Math.max(c,Math.min(o,f));return{count:n,inc:u,dec:l,get:d,set:y,reset:(f=r)=>(r=f,y(f))}}const _r=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,yr=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function vr(e,t,r,n){let o=e<12?"AM":"PM";return n&&(o=o.split("").reduce((c,u)=>c+=`${u}.`,"")),r?o.toLowerCase():o}function ve(e,t,r={}){var n;const o=e.getFullYear(),c=e.getMonth(),u=e.getDate(),l=e.getHours(),d=e.getMinutes(),y=e.getSeconds(),_=e.getMilliseconds(),f=e.getDay(),p=(n=r.customMeridiem)!=null?n:vr,O={YY:()=>String(o).slice(-2),YYYY:()=>o,M:()=>c+1,MM:()=>`${c+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(r.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(r.locales,{month:"long"}),D:()=>String(u),DD:()=>`${u}`.padStart(2,"0"),H:()=>String(l),HH:()=>`${l}`.padStart(2,"0"),h:()=>`${l%12||12}`.padStart(1,"0"),hh:()=>`${l%12||12}`.padStart(2,"0"),m:()=>String(d),mm:()=>`${d}`.padStart(2,"0"),s:()=>String(y),ss:()=>`${y}`.padStart(2,"0"),SSS:()=>`${_}`.padStart(3,"0"),d:()=>f,dd:()=>e.toLocaleDateString(r.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(r.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(r.locales,{weekday:"long"}),A:()=>p(l,d),AA:()=>p(l,d,!1,!0),a:()=>p(l,d,!0),aa:()=>p(l,d,!0,!0)};return t.replace(yr,(v,m)=>{var w,A;return(A=m??((w=O[v])==null?void 0:w.call(O)))!=null?A:v})}function Oe(e){if(e===null)return new Date(Number.NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(_r);if(t){const r=t[2]-1||0,n=(t[7]||"0").substring(0,3);return new Date(t[1],r,t[3]||1,t[4]||0,t[5]||0,t[6]||0,n)}}return new Date(e)}function Or(e,t="HH:mm:ss",r={}){return i.computed(()=>ve(Oe(s(e)),s(t),r))}function he(e,t=1e3,r={}){const{immediate:n=!0,immediateCallback:o=!1}=r;let c=null;const u=i.ref(!1);function l(){c&&(clearInterval(c),c=null)}function d(){u.value=!1,l()}function y(){const _=s(t);_<=0||(u.value=!0,o&&e(),l(),c=setInterval(e,_))}if(n&&R&&y(),i.isRef(t)||typeof t=="function"){const _=i.watch(t,()=>{u.value&&R&&y()});I(_)}return I(d),{isActive:u,pause:d,resume:y}}var hr=Object.defineProperty,we=Object.getOwnPropertySymbols,wr=Object.prototype.hasOwnProperty,mr=Object.prototype.propertyIsEnumerable,me=(e,t,r)=>t in e?hr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Pr=(e,t)=>{for(var r in t||(t={}))wr.call(t,r)&&me(e,r,t[r]);if(we)for(var r of we(t))mr.call(t,r)&&me(e,r,t[r]);return e};function gr(e=1e3,t={}){const{controls:r=!1,immediate:n=!0,callback:o}=t,c=i.ref(0),u=()=>c.value+=1,l=()=>{c.value=0},d=he(o?()=>{u(),o(c.value)}:u,e,{immediate:n});return r?Pr({counter:c,reset:l},d):c}function br(e,t={}){var r;const n=i.ref((r=t.initialValue)!=null?r:null);return i.watch(e,()=>n.value=ie(),t),n}function Pe(e,t,r={}){const{immediate:n=!0}=r,o=i.ref(!1);let c=null;function u(){c&&(clearTimeout(c),c=null)}function l(){o.value=!1,u()}function d(...y){u(),o.value=!0,c=setTimeout(()=>{o.value=!1,c=null,e(...y)},s(t))}return n&&(o.value=!0,R&&d()),I(l),{isPending:i.readonly(o),start:d,stop:l}}var $r=Object.defineProperty,ge=Object.getOwnPropertySymbols,Sr=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable,be=(e,t,r)=>t in e?$r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,jr=(e,t)=>{for(var r in t||(t={}))Sr.call(t,r)&&be(e,r,t[r]);if(ge)for(var r of ge(t))Ar.call(t,r)&&be(e,r,t[r]);return e};function Ir(e=1e3,t={}){const{controls:r=!1,callback:n}=t,o=Pe(n??E,e,t),c=i.computed(()=>!o.isPending.value);return r?jr({ready:c},o):c}function Er(e,t={}){const{method:r="parseFloat",radix:n,nanToZero:o}=t;return i.computed(()=>{let c=s(e);return typeof c=="string"&&(c=Number[r](c,n)),o&&Number.isNaN(c)&&(c=0),c})}function Tr(e){return i.computed(()=>`${s(e)}`)}function Fr(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,o=i.isRef(e),c=i.ref(e);function u(l){if(arguments.length)return c.value=l,c.value;{const d=s(r);return c.value=c.value===d?s(n):d,c.value}}return o?u:[c,u]}function Rr(e,t,r){let n=r?.immediate?[]:[...e instanceof Function?e():Array.isArray(e)?e:s(e)];return i.watch(e,(o,c,u)=>{const l=Array.from({length:n.length}),d=[];for(const _ of o){let f=!1;for(let p=0;p<n.length;p++)if(!l[p]&&_===n[p]){l[p]=!0,f=!0;break}f||d.push(_)}const y=n.filter((_,f)=>!l[f]);t(o,n,d,y,u),n=[...o]},r)}var $e=Object.getOwnPropertySymbols,Cr=Object.prototype.hasOwnProperty,Mr=Object.prototype.propertyIsEnumerable,Nr=(e,t)=>{var r={};for(var n in e)Cr.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&$e)for(var n of $e(e))t.indexOf(n)<0&&Mr.call(e,n)&&(r[n]=e[n]);return r};function M(e,t,r={}){const n=r,{eventFilter:o=W}=n,c=Nr(n,["eventFilter"]);return i.watch(e,C(o,t),c)}var Se=Object.getOwnPropertySymbols,Ur=Object.prototype.hasOwnProperty,Wr=Object.prototype.propertyIsEnumerable,Lr=(e,t)=>{var r={};for(var n in e)Ur.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Se)for(var n of Se(e))t.indexOf(n)<0&&Wr.call(e,n)&&(r[n]=e[n]);return r};function Br(e,t,r){const n=r,{count:o}=n,c=Lr(n,["count"]),u=i.ref(0),l=M(e,(...d)=>{u.value+=1,u.value>=s(o)&&i.nextTick(()=>l()),t(...d)},c);return{count:u,stop:l}}var Hr=Object.defineProperty,Yr=Object.defineProperties,Gr=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,Ie=(e,t,r)=>t in e?Hr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,kr=(e,t)=>{for(var r in t||(t={}))Ae.call(t,r)&&Ie(e,r,t[r]);if(L)for(var r of L(t))je.call(t,r)&&Ie(e,r,t[r]);return e},zr=(e,t)=>Yr(e,Gr(t)),qr=(e,t)=>{var r={};for(var n in e)Ae.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&L)for(var n of L(e))t.indexOf(n)<0&&je.call(e,n)&&(r[n]=e[n]);return r};function Ee(e,t,r={}){const n=r,{debounce:o=0,maxWait:c=void 0}=n,u=qr(n,["debounce","maxWait"]);return M(e,t,zr(kr({},u),{eventFilter:q(o,{maxWait:c})}))}var Zr=Object.defineProperty,Jr=Object.defineProperties,Xr=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertySymbols,Kr=Object.prototype.hasOwnProperty,Qr=Object.prototype.propertyIsEnumerable,Fe=(e,t,r)=>t in e?Zr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Vr=(e,t)=>{for(var r in t||(t={}))Kr.call(t,r)&&Fe(e,r,t[r]);if(Te)for(var r of Te(t))Qr.call(t,r)&&Fe(e,r,t[r]);return e},Dr=(e,t)=>Jr(e,Xr(t));function xr(e,t,r){return i.watch(e,t,Dr(Vr({},r),{deep:!0}))}var en=Object.defineProperty,tn=Object.defineProperties,rn=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,Me=(e,t,r)=>t in e?en(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nn=(e,t)=>{for(var r in t||(t={}))Re.call(t,r)&&Me(e,r,t[r]);if(B)for(var r of B(t))Ce.call(t,r)&&Me(e,r,t[r]);return e},on=(e,t)=>tn(e,rn(t)),an=(e,t)=>{var r={};for(var n in e)Re.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&B)for(var n of B(e))t.indexOf(n)<0&&Ce.call(e,n)&&(r[n]=e[n]);return r};function D(e,t,r={}){const n=r,{eventFilter:o=W}=n,c=an(n,["eventFilter"]),u=C(o,t);let l,d,y;if(c.flush==="sync"){const _=i.ref(!1);d=()=>{},l=f=>{_.value=!0,f(),_.value=!1},y=i.watch(e,(...f)=>{_.value||u(...f)},c)}else{const _=[],f=i.ref(0),p=i.ref(0);d=()=>{f.value=p.value},_.push(i.watch(e,()=>{p.value++},on(nn({},c),{flush:"sync"}))),l=O=>{const v=p.value;O(),f.value+=p.value-v},_.push(i.watch(e,(...O)=>{const v=f.value>0&&f.value===p.value;f.value=0,p.value=0,!v&&u(...O)},c)),y=()=>{_.forEach(O=>O())}}return{stop:y,ignoreUpdates:l,ignorePrevAsyncUpdates:d}}var cn=Object.defineProperty,ln=Object.defineProperties,un=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertySymbols,sn=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable,Ue=(e,t,r)=>t in e?cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,dn=(e,t)=>{for(var r in t||(t={}))sn.call(t,r)&&Ue(e,r,t[r]);if(Ne)for(var r of Ne(t))fn.call(t,r)&&Ue(e,r,t[r]);return e},pn=(e,t)=>ln(e,un(t));function _n(e,t,r){return i.watch(e,t,pn(dn({},r),{immediate:!0}))}function yn(e,t,r){const n=i.watch(e,(...o)=>(i.nextTick(()=>n()),t(...o)),r)}var vn=Object.defineProperty,On=Object.defineProperties,hn=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,Be=(e,t,r)=>t in e?vn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wn=(e,t)=>{for(var r in t||(t={}))We.call(t,r)&&Be(e,r,t[r]);if(H)for(var r of H(t))Le.call(t,r)&&Be(e,r,t[r]);return e},mn=(e,t)=>On(e,hn(t)),Pn=(e,t)=>{var r={};for(var n in e)We.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&H)for(var n of H(e))t.indexOf(n)<0&&Le.call(e,n)&&(r[n]=e[n]);return r};function He(e,t,r={}){const n=r,{eventFilter:o}=n,c=Pn(n,["eventFilter"]),{eventFilter:u,pause:l,resume:d,isActive:y}=ce(o);return{stop:M(e,t,mn(wn({},c),{eventFilter:u})),pause:l,resume:d,isActive:y}}var gn=Object.defineProperty,bn=Object.defineProperties,$n=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,ke=(e,t,r)=>t in e?gn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Sn=(e,t)=>{for(var r in t||(t={}))Ye.call(t,r)&&ke(e,r,t[r]);if(Y)for(var r of Y(t))Ge.call(t,r)&&ke(e,r,t[r]);return e},An=(e,t)=>bn(e,$n(t)),jn=(e,t)=>{var r={};for(var n in e)Ye.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Y)for(var n of Y(e))t.indexOf(n)<0&&Ge.call(e,n)&&(r[n]=e[n]);return r};function ze(e,t,r={}){const n=r,{throttle:o=0,trailing:c=!0,leading:u=!0}=n,l=jn(n,["throttle","trailing","leading"]);return M(e,t,An(Sn({},l),{eventFilter:Z(o,c,u)}))}var In=Object.defineProperty,En=Object.defineProperties,Tn=Object.getOwnPropertyDescriptors,qe=Object.getOwnPropertySymbols,Fn=Object.prototype.hasOwnProperty,Rn=Object.prototype.propertyIsEnumerable,Ze=(e,t,r)=>t in e?In(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Cn=(e,t)=>{for(var r in t||(t={}))Fn.call(t,r)&&Ze(e,r,t[r]);if(qe)for(var r of qe(t))Rn.call(t,r)&&Ze(e,r,t[r]);return e},Mn=(e,t)=>En(e,Tn(t));function Nn(e,t,r={}){let n;function o(){if(!n)return;const _=n;n=void 0,_()}function c(_){n=_}const u=(_,f)=>(o(),t(_,f,c)),l=D(e,u,r),{ignoreUpdates:d}=l,y=()=>{let _;return d(()=>{_=u(Un(e),Wn(e))}),_};return Mn(Cn({},l),{trigger:y})}function Un(e){return i.isReactive(e)?e:Array.isArray(e)?e.map(t=>s(t)):s(e)}function Wn(e){return Array.isArray(e)?e.map(()=>{}):void 0}function Ln(e,t,r){return i.watch(e,(n,o,c)=>{n&&t(n,o,c)},r)}a.assert=st,a.autoResetRef=se,a.bypassFilter=W,a.camelize=gt,a.clamp=pt,a.computedEager=$,a.computedWithControl=S,a.containsProp=ue,a.controlledComputed=S,a.controlledRef=Ct,a.createEventHook=Xe,a.createFilterWrapper=C,a.createGlobalState=Ke,a.createInjectionState=Qe,a.createReactiveFn=k,a.createSharedComposable=Ve,a.createSingletonPromise=$t,a.debounceFilter=q,a.debouncedRef=K,a.debouncedWatch=Ee,a.directiveHooks=ht,a.eagerComputed=$,a.extendRef=te,a.formatDate=ve,a.get=De,a.hasOwn=yt,a.hyphenate=mt,a.identity=bt,a.ignorableWatch=D,a.increaseWithUnit=At,a.invoke=St,a.isClient=R,a.isDef=lt,a.isDefined=xe,a.isIOS=vt,a.isObject=ae,a.makeDestructurable=ot,a.noop=E,a.normalizeDate=Oe,a.notNullish=ut,a.now=dt,a.objectEntries=Et,a.objectOmit=It,a.objectPick=jt,a.pausableFilter=ce,a.pausableWatch=He,a.promiseTimeout=J,a.rand=_t,a.reactify=k,a.reactifyObject=it,a.reactiveComputed=z,a.reactiveOmit=ct,a.reactivePick=Ft,a.refAutoReset=se,a.refDebounced=K,a.refDefault=Rt,a.refThrottled=Q,a.refWithControl=pe,a.resolveRef=Tt,a.resolveUnref=at,a.set=Mt,a.syncRef=Nt,a.syncRefs=Ut,a.throttleFilter=Z,a.throttledRef=Q,a.throttledWatch=ze,a.timestamp=ie,a.toReactive=oe,a.toRef=X,a.toRefs=zt,a.toValue=s,a.tryOnBeforeMount=qt,a.tryOnBeforeUnmount=Zt,a.tryOnMounted=Jt,a.tryOnScopeDispose=I,a.tryOnUnmounted=Xt,a.until=Kt,a.useArrayDifference=Vt,a.useArrayEvery=Dt,a.useArrayFilter=xt,a.useArrayFind=er,a.useArrayFindIndex=tr,a.useArrayFindLast=nr,a.useArrayIncludes=ar,a.useArrayJoin=ir,a.useArrayMap=cr,a.useArrayReduce=lr,a.useArraySome=ur,a.useArrayUnique=dr,a.useCounter=pr,a.useDateFormat=Or,a.useDebounce=K,a.useDebounceFn=fe,a.useInterval=gr,a.useIntervalFn=he,a.useLastChanged=br,a.useThrottle=Q,a.useThrottleFn=de,a.useTimeout=Ir,a.useTimeoutFn=Pe,a.useToNumber=Er,a.useToString=Tr,a.useToggle=Fr,a.watchArray=Rr,a.watchAtMost=Br,a.watchDebounced=Ee,a.watchDeep=xr,a.watchIgnorable=D,a.watchImmediate=_n,a.watchOnce=yn,a.watchPausable=He,a.watchThrottled=ze,a.watchTriggerable=Nn,a.watchWithFilter=M,a.whenever=Ln})(this.VueUse=this.VueUse||{},VueDemi);