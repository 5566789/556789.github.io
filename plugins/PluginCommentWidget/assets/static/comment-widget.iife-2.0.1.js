var CommentWidget=function(rt){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wo;const st=globalThis,Pt=st.ShadowRoot&&(st.ShadyCSS===void 0||st.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zt=Symbol(),mn=new WeakMap;let fn=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Pt&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=mn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&mn.set(t,e))}return e}toString(){return this.cssText}};const Ko=n=>new fn(typeof n=="string"?n:n+"",void 0,zt),F=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((o,r,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new fn(t,n,zt)},Zo=(n,e)=>{if(Pt)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),r=st.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=t.cssText,n.appendChild(o)}},vn=Pt?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Ko(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qo,defineProperty:Go,getOwnPropertyDescriptor:Xo,getOwnPropertyNames:ei,getOwnPropertySymbols:ti,getPrototypeOf:ni}=Object,ue=globalThis,gn=ue.trustedTypes,oi=gn?gn.emptyScript:"",Dt=ue.reactiveElementPolyfillSupport,Fe=(n,e)=>n,at={toAttribute(n,e){switch(e){case Boolean:n=n?oi:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ot=(n,e)=>!Qo(n,e),bn={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:Ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ue.litPropertyMetadata??(ue.litPropertyMetadata=new WeakMap);class Pe extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=bn){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(e,o,t);r!==void 0&&Go(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){const{get:r,set:i}=Xo(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const a=r==null?void 0:r.call(this);i.call(this,s),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bn}static _$Ei(){if(this.hasOwnProperty(Fe("elementProperties")))return;const e=ni(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fe("properties"))){const t=this.properties,o=[...ei(t),...ti(t)];for(const r of o)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,r]of t)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const r=this._$Eu(t,o);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const r of o)t.unshift(vn(r))}else e!==void 0&&t.push(vn(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){var i;const o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(r!==void 0&&o.reflect===!0){const s=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:at).toAttribute(t,o.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){var i;const o=this.constructor,r=o._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=o.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:at;this._$Em=r,this[r]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??Ot)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}Pe.elementStyles=[],Pe.shadowRootOptions={mode:"open"},Pe[Fe("elementProperties")]=new Map,Pe[Fe("finalized")]=new Map,Dt==null||Dt({ReactiveElement:Pe}),(ue.reactiveElementVersions??(ue.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=globalThis,ct=Ye.trustedTypes,_n=ct?ct.createPolicy("lit-html",{createHTML:n=>n}):void 0,Lt="$lit$",re=`lit$${(Math.random()+"").slice(9)}$`,Tt="?"+re,ii=`<${Tt}>`,ye=document,qe=()=>ye.createComment(""),We=n=>n===null||typeof n!="object"&&typeof n!="function",$n=Array.isArray,yn=n=>$n(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Ut=`[ 	
\f\r]`,Je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wn=/-->/g,xn=/>/g,we=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kn=/'/g,Cn=/"/g,Sn=/^(?:script|style|textarea|title)$/i,ri=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),x=ri(1),pe=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),jn=new WeakMap,xe=ye.createTreeWalker(ye,129);function An(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return _n!==void 0?_n.createHTML(e):e}const En=(n,e)=>{const t=n.length-1,o=[];let r,i=e===2?"<svg>":"",s=Je;for(let a=0;a<t;a++){const c=n[a];let d,l,u=-1,h=0;for(;h<c.length&&(s.lastIndex=h,l=s.exec(c),l!==null);)h=s.lastIndex,s===Je?l[1]==="!--"?s=wn:l[1]!==void 0?s=xn:l[2]!==void 0?(Sn.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=we):l[3]!==void 0&&(s=we):s===we?l[0]===">"?(s=r??Je,u=-1):l[1]===void 0?u=-2:(u=s.lastIndex-l[2].length,d=l[1],s=l[3]===void 0?we:l[3]==='"'?Cn:kn):s===Cn||s===kn?s=we:s===wn||s===xn?s=Je:(s=we,r=void 0);const p=s===we&&n[a+1].startsWith("/>")?" ":"";i+=s===Je?c+ii:u>=0?(o.push(d),c.slice(0,u)+Lt+c.slice(u)+re+p):c+re+(u===-2?a:p)}return[An(n,i+(n[t]||"<?>")+(e===2?"</svg>":"")),o]};class Ke{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let i=0,s=0;const a=e.length-1,c=this.parts,[d,l]=En(e,t);if(this.el=Ke.createElement(d,o),xe.currentNode=this.el.content,t===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=xe.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Lt)){const h=l[s++],p=r.getAttribute(u).split(re),f=/([.?@])?(.*)/.exec(h);c.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?Rn:f[1]==="?"?Pn:f[1]==="@"?zn:Ze}),r.removeAttribute(u)}else u.startsWith(re)&&(c.push({type:6,index:i}),r.removeAttribute(u));if(Sn.test(r.tagName)){const u=r.textContent.split(re),h=u.length-1;if(h>0){r.textContent=ct?ct.emptyScript:"";for(let p=0;p<h;p++)r.append(u[p],qe()),xe.nextNode(),c.push({type:2,index:++i});r.append(u[h],qe())}}}else if(r.nodeType===8)if(r.data===Tt)c.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(re,u+1))!==-1;)c.push({type:7,index:i}),u+=re.length-1}i++}}static createElement(e,t){const o=ye.createElement("template");return o.innerHTML=e,o}}function ke(n,e,t=n,o){var s,a;if(e===pe)return e;let r=o!==void 0?(s=t._$Co)==null?void 0:s[o]:t._$Cl;const i=We(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=r:t._$Cl=r),r!==void 0&&(e=ke(n,r._$AS(n,e.values),r,o)),e}class Mn{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,r=((e==null?void 0:e.creationScope)??ye).importNode(t,!0);xe.currentNode=r;let i=xe.nextNode(),s=0,a=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new ze(i,i.nextSibling,this,e):c.type===1?d=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(d=new Dn(i,this,e)),this._$AV.push(d),c=o[++a]}s!==(c==null?void 0:c.index)&&(i=xe.nextNode(),s++)}return xe.currentNode=ye,r}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ze{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ke(this,e,t),We(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==pe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yn(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==I&&We(this._$AH)?this._$AA.nextSibling.data=e:this.T(ye.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ke.createElement(An(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{const s=new Mn(r,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=jn.get(e.strings);return t===void 0&&jn.set(e.strings,t=new Ke(e)),t}k(e){$n(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,r=0;for(const i of e)r===t.length?t.push(o=new ze(this.S(qe()),this.S(qe()),this,this.options)):o=t[r],o._$AI(i),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Ze{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}_$AI(e,t=this,o,r){const i=this.strings;let s=!1;if(i===void 0)e=ke(this,e,t,0),s=!We(e)||e!==this._$AH&&e!==pe,s&&(this._$AH=e);else{const a=e;let c,d;for(e=i[0],c=0;c<i.length-1;c++)d=ke(this,a[o+c],t,c),d===pe&&(d=this._$AH[c]),s||(s=!We(d)||d!==this._$AH[c]),d===I?e=I:e!==I&&(e+=(d??"")+i[c+1]),this._$AH[c]=d}s&&!r&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Rn extends Ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class Pn extends Ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}class zn extends Ze{constructor(e,t,o,r,i){super(e,t,o,r,i),this.type=5}_$AI(e,t=this){if((e=ke(this,e,t,0)??I)===pe)return;const o=this._$AH,r=e===I&&o!==I||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==I&&(o===I||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Dn{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ke(this,e)}}const si={P:Lt,A:re,C:Tt,M:1,L:En,R:Mn,D:yn,V:ke,I:ze,H:Ze,N:Pn,U:zn,B:Rn,F:Dn},Ht=Ye.litHtmlPolyfillSupport;Ht==null||Ht(Ke,ze),(Ye.litHtmlVersions??(Ye.litHtmlVersions=[])).push("3.1.2");const ai=(n,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let r=o._$litPart$;if(r===void 0){const i=(t==null?void 0:t.renderBefore)??null;o._$litPart$=r=new ze(e.insertBefore(qe(),i),i,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let U=class extends Pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ai(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return pe}};U._$litElement$=!0,U.finalized=!0,(Wo=globalThis.litElementHydrateSupport)==null||Wo.call(globalThis,{LitElement:U});const It=globalThis.litElementPolyfillSupport;It==null||It({LitElement:U}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:Ot},li=(n=ci,e,t)=>{const{kind:o,metadata:r}=t;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(t.name,n),o==="accessor"){const{name:s}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,n)},init(a){return a!==void 0&&this.P(s,void 0,n),a}}}if(o==="setter"){const{name:s}=t;return function(a){const c=this[s];e.call(this,a),this.requestUpdate(s,c,n)}}throw Error("Unsupported decorator location: "+o)};function P(n){return(e,t)=>typeof t=="object"?li(n,e,t):((o,r,i)=>{const s=r.hasOwnProperty(i);return r.constructor.createProperty(i,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(r,i):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(n){return P({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Nt=n=>(...e)=>({_$litDirective$:n,values:e});let Vt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:di}=si,hi=n=>n.strings===void 0,On=()=>document.createComment(""),Qe=(n,e,t)=>{var i;const o=n._$AA.parentNode,r=e===void 0?n._$AB:e._$AA;if(t===void 0){const s=o.insertBefore(On(),r),a=o.insertBefore(On(),r);t=new di(s,a,n,n.options)}else{const s=t._$AB.nextSibling,a=t._$AM,c=a!==n;if(c){let d;(i=t._$AQ)==null||i.call(t,n),t._$AM=n,t._$AP!==void 0&&(d=n._$AU)!==a._$AU&&t._$AP(d)}if(s!==r||c){let d=t._$AA;for(;d!==s;){const l=d.nextSibling;o.insertBefore(d,r),d=l}}}return t},Ce=(n,e,t=n)=>(n._$AI(e,t),n),ui={},pi=(n,e=ui)=>n._$AH=e,mi=n=>n._$AH,Ft=n=>{var o;(o=n._$AP)==null||o.call(n,!1,!0);let e=n._$AA;const t=n._$AB.nextSibling;for(;e!==t;){const r=e.nextSibling;e.remove(),e=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ln=(n,e,t)=>{const o=new Map;for(let r=e;r<=t;r++)o.set(n[r],r);return o},Tn=Nt(class extends Vt{constructor(n){if(super(n),n.type!==Bt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,e,t){let o;t===void 0?t=e:e!==void 0&&(o=e);const r=[],i=[];let s=0;for(const a of n)r[s]=o?o(a,s):s,i[s]=t(a,s),s++;return{values:i,keys:r}}render(n,e,t){return this.dt(n,e,t).values}update(n,[e,t,o]){const r=mi(n),{values:i,keys:s}=this.dt(e,t,o);if(!Array.isArray(r))return this.ut=s,i;const a=this.ut??(this.ut=[]),c=[];let d,l,u=0,h=r.length-1,p=0,f=i.length-1;for(;u<=h&&p<=f;)if(r[u]===null)u++;else if(r[h]===null)h--;else if(a[u]===s[p])c[p]=Ce(r[u],i[p]),u++,p++;else if(a[h]===s[f])c[f]=Ce(r[h],i[f]),h--,f--;else if(a[u]===s[f])c[f]=Ce(r[u],i[f]),Qe(n,c[f+1],r[u]),u++,f--;else if(a[h]===s[p])c[p]=Ce(r[h],i[p]),Qe(n,r[u],r[h]),h--,p++;else if(d===void 0&&(d=Ln(s,p,f),l=Ln(a,u,h)),d.has(a[u]))if(d.has(a[h])){const g=l.get(s[p]),$=g!==void 0?r[g]:null;if($===null){const C=Qe(n,r[u]);Ce(C,i[p]),c[p]=C}else c[p]=Ce($,i[p]),Qe(n,r[u],$),r[g]=null;p++}else Ft(r[h]),h--;else Ft(r[u]),u++;for(;p<=f;){const g=Qe(n,c[f+1]);Ce(g,i[p]),c[p++]=g}for(;u<=h;){const g=r[u++];g!==null&&Ft(g)}return this.ut=s,pi(n,c),pe}}),X=F`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }

  :host {
    font-size: var(--base-font-size);
    line-height: var(--base-line-height);
    font-family: var(--base-font-family);
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    font-feature-settings: normal;
    font-variation-settings: normal;
  }

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-size: 0.875em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    user-select: none;
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
    cursor: pointer;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  pre {
    font-family: var(--base-font-family);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Un=class extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gr(n){return n}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hn=class{constructor(e,t,o,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,s)),this.unsubscribe=s},this.host=e,t.context!==void 0){const i=t;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=t,this.callback=o,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Un(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let fi=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:o}]of this.subscriptions)t(this.o,o)},e!==void 0&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vi=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class In extends fi{constructor(e,t,o){var r,i;super(t.context!==void 0?t.initialValue:o),this.onContextRequest=s=>{const a=s.composedPath()[0];s.context===this.context&&a!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,a,s.subscribe))},this.onProviderRequest=s=>{const a=s.composedPath()[0];if(s.context!==this.context||a===this.host)return;const c=new Set;for(const[d,{consumerHost:l}]of this.subscriptions)c.has(d)||(c.add(d),l.dispatchEvent(new Un(this.context,d,!0)));s.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(i=(r=this.host).addController)==null||i.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new vi(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se({context:n}){return(e,t)=>{const o=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){o.set(this,new In(this,{context:n}))}),{get(){return e.get.call(this)},set(r){var i;return(i=o.get(this))==null||i.setValue(r),e.set.call(this,r)},init(r){var i;return(i=o.get(this))==null||i.setValue(r),r}};{e.constructor.addInitializer(s=>{o.set(s,new In(s,{context:n}))});const r=Object.getOwnPropertyDescriptor(e,t);let i;if(r===void 0){const s=new WeakMap;i={get:function(){return s.get(this)},set:function(a){o.get(this).setValue(a),s.set(this,a)},configurable:!0,enumerable:!0}}else{const s=r.set;i={...r,set:function(a){o.get(this).setValue(a),s==null||s.call(this,a)}}}return void Object.defineProperty(e,t,i)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T({context:n,subscribe:e}){return(t,o)=>{typeof o=="object"?o.addInitializer(function(){new Hn(this,{context:n,callback:r=>{this[o.name]=r},subscribe:e})}):t.constructor.addInitializer(r=>{new Hn(r,{context:n,callback:i=>{r[o]=i},subscribe:e})})}}const Se=Symbol("baseUrl"),Yt=Symbol("kind"),qt=Symbol("group"),Wt=Symbol("name"),Bn=Symbol("version"),lt=Symbol("allowAnonymousComments"),dt=Symbol("currentUser"),Nn=Symbol("emojiDataUrl"),ht=Symbol("toastContext");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(n,e)=>{var o;const t=n._$AN;if(t===void 0)return!1;for(const r of t)(o=r._$AO)==null||o.call(r,e,!1),Ge(r,e);return!0},ut=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while((t==null?void 0:t.size)===0)},Vn=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),_i(e)}};function gi(n){this._$AN!==void 0?(ut(this),this._$AM=n,Vn(this)):this._$AM=n}function bi(n,e=!1,t=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(o))for(let i=t;i<o.length;i++)Ge(o[i],!1),ut(o[i]);else o!=null&&(Ge(o,!1),ut(o));else Ge(this,n)}const _i=n=>{n.type==Bt.CHILD&&(n._$AP??(n._$AP=bi),n._$AQ??(n._$AQ=gi))};class $i extends Vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Vn(this),this.isConnected=e._$AU}_$AO(e,t=!0){var o,r;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)==null||o.call(this):(r=this.disconnected)==null||r.call(this)),t&&(Ge(this,e),ut(this))}setValue(e){if(hi(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=()=>new yi;class yi{}const Jt=new WeakMap,mt=Nt(class extends $i{render(n){return I}update(n,[e]){var o;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(o=n.options)==null?void 0:o.host,this.rt(this.ct=n.element)),I}rt(n){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=Jt.get(e);t===void 0&&(t=new WeakMap,Jt.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,n),n!==void 0&&this.Y.call(this.ht,n)}else this.Y.value=n}get lt(){var n,e;return typeof this.Y=="function"?(n=Jt.get(this.ht??globalThis))==null?void 0:n.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class Fn extends U{render(){return x`<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle
        style="opacity: 0.25;"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        style="opacity: 0.75;"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentColor"
      ></path>
    </svg>`}}Fn.styles=F`
    :host {
      display: inline-flex;
    }
    svg {
      height: 1.25em;
      width: 1.25em;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `,customElements.get("icon-loading")||customElements.define("icon-loading",Fn);class Yn extends U{render(){return x`<svg viewBox="0 0 24 24" width="1.25em" height="1.25em">
      <path
        fill="currentColor"
        d="M5.5 2C3.56 2 2 3.56 2 5.5v13C2 20.44 3.56 22 5.5 22H16l6-6V5.5C22 3.56 20.44 2 18.5 2h-13m.25 2h12.5A1.75 1.75 0 0 1 20 5.75V15h-1.5c-1.94 0-3.5 1.56-3.5 3.5V20H5.75A1.75 1.75 0 0 1 4 18.25V5.75A1.75 1.75 0 0 1 5.75 4m8.69 2.77c-.16 0-.32.02-.47.06c-.94.26-1.47 1.22-1.23 2.17c.05.15.12.3.21.44l3.23-.88c0-.17-.02-.34-.06-.51c-.21-.75-.9-1.28-1.68-1.28M8.17 8.5c-.17 0-.32 0-.47.05c-.93.26-1.48 1.22-1.23 2.15c.03.16.12.3.21.46l3.23-.88c0-.17-.02-.34-.06-.5A1.72 1.72 0 0 0 8.17 8.5m8.55 2.76l-9.13 2.51a5.266 5.266 0 0 0 5.36 1.64a5.273 5.273 0 0 0 3.77-4.15Z"
      ></path>
    </svg>`}}Yn.styles=F`
    :host {
      display: inline-flex;
    }
    svg {
      height: 1.25em;
      width: 1.25em;
    }
  `,customElements.get("icon-emoji")||customElements.define("icon-emoji",Yn);function qn(n){return n&&n.__esModule?n.default:n}function ee(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var ft,w,Wn,Xe,Jn,Kn,vt={},Zn=[],wi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function me(n,e){for(var t in e)n[t]=e[t];return n}function Qn(n){var e=n.parentNode;e&&e.removeChild(n)}function Kt(n,e,t){var o,r,i,s={};for(i in e)i=="key"?o=e[i]:i=="ref"?r=e[i]:s[i]=e[i];if(arguments.length>2&&(s.children=arguments.length>3?ft.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)s[i]===void 0&&(s[i]=n.defaultProps[i]);return gt(n,s,o,r,null)}function gt(n,e,t,o,r){var i={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Wn};return r==null&&w.vnode!=null&&w.vnode(i),i}function ae(){return{current:null}}function De(n){return n.children}function oe(n,e){this.props=n,this.context=e}function Oe(n,e){if(e==null)return n.__?Oe(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Oe(n):null}function Gn(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Gn(n)}}function Xn(n){(!n.__d&&(n.__d=!0)&&Xe.push(n)&&!bt.__r++||Kn!==w.debounceRendering)&&((Kn=w.debounceRendering)||Jn)(bt)}function bt(){for(var n;bt.__r=Xe.length;)n=Xe.sort(function(e,t){return e.__v.__b-t.__v.__b}),Xe=[],n.some(function(e){var t,o,r,i,s,a;e.__d&&(s=(i=(t=e).__v).__e,(a=t.__P)&&(o=[],(r=me({},i)).__v=i.__v+1,Zt(a,i,r,t.__n,a.ownerSVGElement!==void 0,i.__h!=null?[s]:null,o,s??Oe(i),i.__h),so(o,i),i.__e!=s&&Gn(i)))})}function eo(n,e,t,o,r,i,s,a,c,d){var l,u,h,p,f,g,$,C=o&&o.__k||Zn,M=C.length;for(t.__k=[],l=0;l<e.length;l++)if((p=t.__k[l]=(p=e[l])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?gt(null,p,null,null,p):Array.isArray(p)?gt(De,{children:p},null,null,null):p.__b>0?gt(p.type,p.props,p.key,null,p.__v):p)!=null){if(p.__=t,p.__b=t.__b+1,(h=C[l])===null||h&&p.key==h.key&&p.type===h.type)C[l]=void 0;else for(u=0;u<M;u++){if((h=C[u])&&p.key==h.key&&p.type===h.type){C[u]=void 0;break}h=null}Zt(n,p,h=h||vt,r,i,s,a,c,d),f=p.__e,(u=p.ref)&&h.ref!=u&&($||($=[]),h.ref&&$.push(h.ref,null,p),$.push(u,p.__c||f,p)),f!=null?(g==null&&(g=f),typeof p.type=="function"&&p.__k===h.__k?p.__d=c=to(p,c,n):c=no(n,p,h,C,f,c),typeof t.type=="function"&&(t.__d=c)):c&&h.__e==c&&c.parentNode!=n&&(c=Oe(h))}for(t.__e=g,l=M;l--;)C[l]!=null&&(typeof t.type=="function"&&C[l].__e!=null&&C[l].__e==t.__d&&(t.__d=Oe(o,l+1)),co(C[l],C[l]));if($)for(l=0;l<$.length;l++)ao($[l],$[++l],$[++l])}function to(n,e,t){for(var o,r=n.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=n,e=typeof o.type=="function"?to(o,e,t):no(t,o,o,r,o.__e,e));return e}function _t(n,e){return e=e||[],n==null||typeof n=="boolean"||(Array.isArray(n)?n.some(function(t){_t(t,e)}):e.push(n)),e}function no(n,e,t,o,r,i){var s,a,c;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(t==null||r!=i||r.parentNode==null)e:if(i==null||i.parentNode!==n)n.appendChild(r),s=null;else{for(a=i,c=0;(a=a.nextSibling)&&c<o.length;c+=2)if(a==r)break e;n.insertBefore(r,i),s=i}return s!==void 0?s:r.nextSibling}function xi(n,e,t,o,r){var i;for(i in t)i==="children"||i==="key"||i in e||$t(n,i,null,t[i],o);for(i in e)r&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||t[i]===e[i]||$t(n,i,e[i],t[i],o)}function oo(n,e,t){e[0]==="-"?n.setProperty(e,t):n[e]=t==null?"":typeof t!="number"||wi.test(e)?t:t+"px"}function $t(n,e,t,o,r){var i;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||oo(n.style,e,"");if(t)for(e in t)o&&t[e]===o[e]||oo(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?o||n.addEventListener(e,i?ro:io,i):n.removeEventListener(e,i?ro:io,i);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||e[0]==="a"&&e[1]==="r")?n.setAttribute(e,t):n.removeAttribute(e))}}function io(n){this.l[n.type+!1](w.event?w.event(n):n)}function ro(n){this.l[n.type+!0](w.event?w.event(n):n)}function Zt(n,e,t,o,r,i,s,a,c){var d,l,u,h,p,f,g,$,C,M,B,D=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,a=e.__e=t.__e,e.__h=null,i=[a]),(d=w.__b)&&d(e);try{e:if(typeof D=="function"){if($=e.props,C=(d=D.contextType)&&o[d.__c],M=d?C?C.props.value:d.__:o,t.__c?g=(l=e.__c=t.__c).__=l.__E:("prototype"in D&&D.prototype.render?e.__c=l=new D($,M):(e.__c=l=new oe($,M),l.constructor=D,l.render=Ci),C&&C.sub(l),l.props=$,l.state||(l.state={}),l.context=M,l.__n=o,u=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),D.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=me({},l.__s)),me(l.__s,D.getDerivedStateFromProps($,l.__s))),h=l.props,p=l.state,u)D.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(D.getDerivedStateFromProps==null&&$!==h&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps($,M),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate($,l.__s,M)===!1||e.__v===t.__v){l.props=$,l.state=l.__s,e.__v!==t.__v&&(l.__d=!1),l.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(z){z&&(z.__=e)}),l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate($,l.__s,M),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(h,p,f)})}l.context=M,l.props=$,l.state=l.__s,(d=w.__r)&&d(e),l.__d=!1,l.__v=e,l.__P=n,d=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(o=me(me({},o),l.getChildContext())),u||l.getSnapshotBeforeUpdate==null||(f=l.getSnapshotBeforeUpdate(h,p)),B=d!=null&&d.type===De&&d.key==null?d.props.children:d,eo(n,Array.isArray(B)?B:[B],e,t,o,r,i,s,a,c),l.base=e.__e,e.__h=null,l.__h.length&&s.push(l),g&&(l.__E=l.__=null),l.__e=!1}else i==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=ki(t.__e,e,t,o,r,i,s,c);(d=w.diffed)&&d(e)}catch(z){e.__v=null,(c||i!=null)&&(e.__e=a,e.__h=!!c,i[i.indexOf(a)]=null),w.__e(z,e,t)}}function so(n,e){w.__c&&w.__c(e,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(o){o.call(t)})}catch(o){w.__e(o,t.__v)}})}function ki(n,e,t,o,r,i,s,a){var c,d,l,u=t.props,h=e.props,p=e.type,f=0;if(p==="svg"&&(r=!0),i!=null){for(;f<i.length;f++)if((c=i[f])&&"setAttribute"in c==!!p&&(p?c.localName===p:c.nodeType===3)){n=c,i[f]=null;break}}if(n==null){if(p===null)return document.createTextNode(h);n=r?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,h.is&&h),i=null,a=!1}if(p===null)u===h||a&&n.data===h||(n.data=h);else{if(i=i&&ft.call(n.childNodes),d=(u=t.props||vt).dangerouslySetInnerHTML,l=h.dangerouslySetInnerHTML,!a){if(i!=null)for(u={},f=0;f<n.attributes.length;f++)u[n.attributes[f].name]=n.attributes[f].value;(l||d)&&(l&&(d&&l.__html==d.__html||l.__html===n.innerHTML)||(n.innerHTML=l&&l.__html||""))}if(xi(n,h,u,r,a),l)e.__k=[];else if(f=e.props.children,eo(n,Array.isArray(f)?f:[f],e,t,o,r&&p!=="foreignObject",i,s,i?i[0]:t.__k&&Oe(t,0),a),i!=null)for(f=i.length;f--;)i[f]!=null&&Qn(i[f]);a||("value"in h&&(f=h.value)!==void 0&&(f!==u.value||f!==n.value||p==="progress"&&!f)&&$t(n,"value",f,u.value,!1),"checked"in h&&(f=h.checked)!==void 0&&f!==n.checked&&$t(n,"checked",f,u.checked,!1))}return n}function ao(n,e,t){try{typeof n=="function"?n(e):n.current=e}catch(o){w.__e(o,t)}}function co(n,e,t){var o,r;if(w.unmount&&w.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||ao(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){w.__e(i,e)}o.base=o.__P=null}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&co(o[r],e,typeof n.type!="function");t||n.__e==null||Qn(n.__e),n.__e=n.__d=void 0}function Ci(n,e,t){return this.constructor(n,t)}function lo(n,e,t){var o,r,i;w.__&&w.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,i=[],Zt(e,n=(!o&&t||e).__k=Kt(De,null,[n]),r||vt,vt,e.ownerSVGElement!==void 0,!o&&t?[t]:r?null:e.firstChild?ft.call(e.childNodes):null,i,!o&&t?t:r?r.__e:e.firstChild,o),so(i,n)}ft=Zn.slice,w={__e:function(n,e){for(var t,o,r;e=e.__;)if((t=e.__c)&&!t.__)try{if((o=t.constructor)&&o.getDerivedStateFromError!=null&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(n),r=t.__d),r)return t.__E=t}catch(i){n=i}throw n}},Wn=0,oe.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=me({},this.state),typeof n=="function"&&(n=n(me({},t),this.props)),n&&me(t,n),n!=null&&this.__v&&(e&&this.__h.push(e),Xn(this))},oe.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Xn(this))},oe.prototype.render=De,Xe=[],Jn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,bt.__r=0;var Si=0;function m(n,e,t,o,r){var i,s,a={};for(s in e)s=="ref"?i=e[s]:a[s]=e[s];var c={type:n,props:a,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Si,__source:o,__self:r};if(typeof n=="function"&&(i=n.defaultProps))for(s in i)a[s]===void 0&&(a[s]=i[s]);return w.vnode&&w.vnode(c),c}function ji(n,e){try{window.localStorage[`emoji-mart.${n}`]=JSON.stringify(e)}catch{}}function Ai(n){try{const e=window.localStorage[`emoji-mart.${n}`];if(e)return JSON.parse(e)}catch{}}var fe={set:ji,get:Ai};const Qt=new Map,Ei=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function Mi(){for(const{v:n,emoji:e}of Ei)if(ho(e))return n}function Ri(){return!ho("🇨🇦")}function ho(n){if(Qt.has(n))return Qt.get(n);const e=Pi(n);return Qt.set(n,e),e}const Pi=(()=>{let n=null;try{navigator.userAgent.includes("jsdom")||(n=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!n)return()=>!1;const e=25,t=20,o=Math.floor(e/2);return n.font=o+"px Arial, Sans-Serif",n.textBaseline="top",n.canvas.width=t*2,n.canvas.height=e,r=>{n.clearRect(0,0,t*2,e),n.fillStyle="#FF0000",n.fillText(r,0,22),n.fillStyle="#0000FF",n.fillText(r,t,22);const i=n.getImageData(0,0,t,e).data,s=i.length;let a=0;for(;a<s&&!i[a+3];a+=4);if(a>=s)return!1;const c=t+a/4%t,d=Math.floor(a/4/t),l=n.getImageData(c,d,1,1).data;return!(i[a]!==l[0]||i[a+2]!==l[2]||n.measureText(r).width>=t)}})();var uo={latestVersion:Mi,noCountryFlags:Ri};const Gt=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Y=null;function zi(n){Y||(Y=fe.get("frequently")||{});const e=n.id||n;e&&(Y[e]||(Y[e]=0),Y[e]+=1,fe.set("last",e),fe.set("frequently",Y))}function Di({maxFrequentRows:n,perLine:e}){if(!n)return[];Y||(Y=fe.get("frequently"));let t=[];if(!Y){Y={};for(let i in Gt.slice(0,e)){const s=Gt[i];Y[s]=e-i,t.push(s)}return t}const o=n*e,r=fe.get("last");for(let i in Y)t.push(i);if(t.sort((i,s)=>{const a=Y[s],c=Y[i];return a==c?i.localeCompare(s):a-c}),t.length>o){const i=t.slice(o);t=t.slice(0,o);for(let s of i)s!=r&&delete Y[s];r&&t.indexOf(r)==-1&&(delete Y[t[t.length-1]],t.splice(-1,1,r)),fe.set("frequently",Y)}return t}var po={add:zi,get:Di,DEFAULTS:Gt},mo={};mo=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var ce={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let q=null,E=null;const Xt={};async function fo(n){if(Xt[n])return Xt[n];const t=await(await fetch(n)).json();return Xt[n]=t,t}let en=null,vo=null,go=!1;function yt(n,{caller:e}={}){return en||(en=new Promise(t=>{vo=t})),n?Oi(n):e&&!go&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),en}async function Oi(n){go=!0;let{emojiVersion:e,set:t,locale:o}=n;if(e||(e=ce.emojiVersion.value),t||(t=ce.set.value),o||(o=ce.locale.value),E)E.categories=E.categories.filter(c=>!c.name);else{E=(typeof n.data=="function"?await n.data():n.data)||await fo(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${t}.json`),E.emoticons={},E.natives={},E.categories.unshift({id:"frequent",emojis:[]});for(const c in E.aliases){const d=E.aliases[c],l=E.emojis[d];l&&(l.aliases||(l.aliases=[]),l.aliases.push(c))}E.originalCategories=E.categories}if(q=(typeof n.i18n=="function"?await n.i18n():n.i18n)||(o=="en"?qn(mo):await fo(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${o}.json`)),n.custom)for(let c in n.custom){c=parseInt(c);const d=n.custom[c],l=n.custom[c-1];if(!(!d.emojis||!d.emojis.length)){d.id||(d.id=`custom_${c+1}`),d.name||(d.name=q.categories.custom),l&&!d.icon&&(d.target=l.target||l),E.categories.push(d);for(const u of d.emojis)E.emojis[u.id]=u}}n.categories&&(E.categories=E.originalCategories.filter(c=>n.categories.indexOf(c.id)!=-1).sort((c,d)=>{const l=n.categories.indexOf(c.id),u=n.categories.indexOf(d.id);return l-u}));let r=null,i=null;t=="native"&&(r=uo.latestVersion(),i=n.noCountryFlags||uo.noCountryFlags());let s=E.categories.length,a=!1;for(;s--;){const c=E.categories[s];if(c.id=="frequent"){let{maxFrequentRows:u,perLine:h}=n;u=u>=0?u:ce.maxFrequentRows.value,h||(h=ce.perLine.value),c.emojis=po.get({maxFrequentRows:u,perLine:h})}if(!c.emojis||!c.emojis.length){E.categories.splice(s,1);continue}const{categoryIcons:d}=n;if(d){const u=d[c.id];u&&!c.icon&&(c.icon=u)}let l=c.emojis.length;for(;l--;){const u=c.emojis[l],h=u.id?u:E.emojis[u],p=()=>{c.emojis.splice(l,1)};if(!h||n.exceptEmojis&&n.exceptEmojis.includes(h.id)){p();continue}if(r&&h.version>r){p();continue}if(i&&c.id=="flags"&&!Ii.includes(h.id)){p();continue}if(!h.search){if(a=!0,h.search=","+[[h.id,!1],[h.name,!0],[h.keywords,!1],[h.emoticons,!1]].map(([g,$])=>{if(g)return(Array.isArray(g)?g:[g]).map(C=>($?C.split(/[-|_|\s]+/):[C]).map(M=>M.toLowerCase())).flat()}).flat().filter(g=>g&&g.trim()).join(","),h.emoticons)for(const g of h.emoticons)E.emoticons[g]||(E.emoticons[g]=h.id);let f=0;for(const g of h.skins){if(!g)continue;f++;const{native:$}=g;$&&(E.natives[$]=h.id,h.search+=`,${$}`);const C=f==1?"":`:skin-tone-${f}:`;g.shortcodes=`:${h.id}:${C}`}}}}a&&Le.reset(),vo()}function bo(n,e,t){n||(n={});const o={};for(let r in e)o[r]=_o(r,n,e,t);return o}function _o(n,e,t,o){const r=t[n];let i=o&&o.getAttribute(n)||(e[n]!=null&&e[n]!=null?e[n]:null);return r&&(i!=null&&r.value&&typeof r.value!=typeof i&&(typeof r.value=="boolean"?i=i!="false":i=r.value.constructor(i)),r.transform&&i&&(i=r.transform(i)),(i==null||r.choices&&r.choices.indexOf(i)==-1)&&(i=r.value)),i}const Li=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let tn=null;function Ti(n){return n.id?n:E.emojis[n]||E.emojis[E.aliases[n]]||E.emojis[E.natives[n]]}function Ui(){tn=null}async function Hi(n,{maxResults:e,caller:t}={}){if(!n||!n.trim().length)return null;e||(e=90),await yt(null,{caller:t||"SearchIndex.search"});const o=n.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((a,c,d)=>a.trim()&&d.indexOf(a)==c);if(!o.length)return;let r=tn||(tn=Object.values(E.emojis)),i,s;for(const a of o){if(!r.length)break;i=[],s={};for(const c of r){if(!c.search)continue;const d=c.search.indexOf(`,${a}`);d!=-1&&(i.push(c),s[c.id]||(s[c.id]=0),s[c.id]+=c.id==a?0:d+1)}r=i}return i.length<2||(i.sort((a,c)=>{const d=s[a.id],l=s[c.id];return d==l?a.id.localeCompare(c.id):d-l}),i.length>e&&(i=i.slice(0,e))),i}var Le={search:Hi,get:Ti,reset:Ui,SHORTCODES_REGEX:Li};const Ii=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function Bi(n,e){return Array.isArray(n)&&Array.isArray(e)&&n.length===e.length&&n.every((t,o)=>t==e[o])}async function Ni(n=1){for(let e in[...Array(n).keys()])await new Promise(requestAnimationFrame)}function Vi(n,{skinIndex:e=0}={}){const t=n.skins[e]||(e=0,n.skins[e]),o={id:n.id,name:n.name,native:t.native,unified:t.unified,keywords:n.keywords,shortcodes:t.shortcodes||n.shortcodes};return n.skins.length>1&&(o.skin=e+1),t.src&&(o.src=t.src),n.aliases&&n.aliases.length&&(o.aliases=n.aliases),n.emoticons&&n.emoticons.length&&(o.emoticons=n.emoticons),o}var wt={categories:{activity:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:m("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),m("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),m("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:m("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),m("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:m("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),m("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[m("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),m("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:m("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},search:{loupe:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:m("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:m("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})}};function nn(n){let{id:e,skin:t,emoji:o}=n;if(n.shortcodes){const a=n.shortcodes.match(Le.SHORTCODES_REGEX);a&&(e=a[1],a[2]&&(t=a[2]))}if(o||(o=Le.get(e||n.native)),!o)return n.fallback;const r=o.skins[t-1]||o.skins[0],i=r.src||(n.set!="native"&&!n.spritesheet?typeof n.getImageURL=="function"?n.getImageURL(n.set,r.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${n.set}@14.0.0/img/${n.set}/64/${r.unified}.png`:void 0),s=typeof n.getSpritesheetURL=="function"?n.getSpritesheetURL(n.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${n.set}@14.0.0/img/${n.set}/sheets-256/64.png`;return m("span",{class:"emoji-mart-emoji","data-emoji-set":n.set,children:i?m("img",{style:{maxWidth:n.size||"1em",maxHeight:n.size||"1em",display:"inline-block"},alt:r.native||r.shortcodes,src:i}):n.set=="native"?m("span",{style:{fontSize:n.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:r.native}):m("span",{style:{display:"block",width:n.size,height:n.size,backgroundImage:`url(${s})`,backgroundSize:`${100*E.sheet.cols}% ${100*E.sheet.rows}%`,backgroundPosition:`${100/(E.sheet.cols-1)*r.x}% ${100/(E.sheet.rows-1)*r.y}%`}})})}const Fi=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class $o extends Fi{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let t in e)this.attributeChangedCallback(t,null,e[t])}attributeChangedCallback(e,t,o){if(!this.component)return;const r=_o(e,{[e]:o},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:r}):(this.component.props[e]=r,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let t=null;const o=e.parent||(t=e.ref&&e.ref.current);t&&(t.innerHTML=""),o&&o.appendChild(this)}}}class Yi extends $o{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const t=document.createElement("style");t.textContent=e,this.shadowRoot.insertBefore(t,this.shadowRoot.firstChild)}constructor(e,{styles:t}={}){super(e),this.setShadow(),this.injectStyles(t)}}var yo={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:n=>/\D/.test(n)?n:`${n}px`},set:ce.set,skin:ce.skin};class wo extends $o{async connectedCallback(){const e=bo(this.props,yo,this);e.element=this,e.ref=t=>{this.component=t},await yt(),!this.disconnected&&lo(m(nn,{...e}),this)}constructor(e){super(e)}}ee(wo,"Props",yo),typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",wo);var xo,on=[],ko=w.__b,Co=w.__r,So=w.diffed,jo=w.__c,Ao=w.unmount;function qi(){var n;for(on.sort(function(e,t){return e.__v.__b-t.__v.__b});n=on.pop();)if(n.__P)try{n.__H.__h.forEach(xt),n.__H.__h.forEach(rn),n.__H.__h=[]}catch(e){n.__H.__h=[],w.__e(e,n.__v)}}w.__b=function(n){ko&&ko(n)},w.__r=function(n){Co&&Co(n);var e=n.__c.__H;e&&(e.__h.forEach(xt),e.__h.forEach(rn),e.__h=[])},w.diffed=function(n){So&&So(n);var e=n.__c;e&&e.__H&&e.__H.__h.length&&(on.push(e)!==1&&xo===w.requestAnimationFrame||((xo=w.requestAnimationFrame)||function(t){var o,r=function(){clearTimeout(i),Eo&&cancelAnimationFrame(o),setTimeout(t)},i=setTimeout(r,100);Eo&&(o=requestAnimationFrame(r))})(qi))},w.__c=function(n,e){e.some(function(t){try{t.__h.forEach(xt),t.__h=t.__h.filter(function(o){return!o.__||rn(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],w.__e(o,t.__v)}}),jo&&jo(n,e)},w.unmount=function(n){Ao&&Ao(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{xt(o)}catch(r){e=r}}),e&&w.__e(e,t.__v))};var Eo=typeof requestAnimationFrame=="function";function xt(n){var e=n.__c;typeof e=="function"&&(n.__c=void 0,e())}function rn(n){n.__c=n.__()}function Wi(n,e){for(var t in e)n[t]=e[t];return n}function Mo(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var o in e)if(o!=="__source"&&n[o]!==e[o])return!0;return!1}function kt(n){this.props=n}(kt.prototype=new oe).isPureReactComponent=!0,kt.prototype.shouldComponentUpdate=function(n,e){return Mo(this.props,n)||Mo(this.state,e)};var Ro=w.__b;w.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Ro&&Ro(n)};var Ji=w.__e;w.__e=function(n,e,t){if(n.then){for(var o,r=e;r=r.__;)if((o=r.__c)&&o.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),o.__c(n,e)}Ji(n,e,t)};var Po=w.unmount;function sn(){this.__u=0,this.t=null,this.__b=null}function zo(n){var e=n.__.__c;return e&&e.__e&&e.__e(n)}function Ct(){this.u=null,this.o=null}w.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&n.__h===!0&&(n.type=null),Po&&Po(n)},(sn.prototype=new oe).__c=function(n,e){var t=e.__c,o=this;o.t==null&&(o.t=[]),o.t.push(t);var r=zo(o.__v),i=!1,s=function(){i||(i=!0,t.__R=null,r?r(a):a())};t.__R=s;var a=function(){if(!--o.__u){if(o.state.__e){var d=o.state.__e;o.__v.__k[0]=function u(h,p,f){return h&&(h.__v=null,h.__k=h.__k&&h.__k.map(function(g){return u(g,p,f)}),h.__c&&h.__c.__P===p&&(h.__e&&f.insertBefore(h.__e,h.__d),h.__c.__e=!0,h.__c.__P=f)),h}(d,d.__c.__P,d.__c.__O)}var l;for(o.setState({__e:o.__b=null});l=o.t.pop();)l.forceUpdate()}},c=e.__h===!0;o.__u++||c||o.setState({__e:o.__b=o.__v.__k[0]}),n.then(s,s)},sn.prototype.componentWillUnmount=function(){this.t=[]},sn.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=function i(s,a,c){return s&&(s.__c&&s.__c.__H&&(s.__c.__H.__.forEach(function(d){typeof d.__c=="function"&&d.__c()}),s.__c.__H=null),(s=Wi({},s)).__c!=null&&(s.__c.__P===c&&(s.__c.__P=a),s.__c=null),s.__k=s.__k&&s.__k.map(function(d){return i(d,a,c)})),s}(this.__b,t,o.__O=o.__P)}this.__b=null}var r=e.__e&&Kt(De,null,n.fallback);return r&&(r.__h=null),[Kt(De,null,e.__e?null:n.children),r]};var Do=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};(Ct.prototype=new oe).__e=function(n){var e=this,t=zo(e.__v),o=e.o.get(n);return o[0]++,function(r){var i=function(){e.props.revealOrder?(o.push(r),Do(e,n,o)):r()};t?t(i):i()}},Ct.prototype.render=function(n){this.u=null,this.o=new Map;var e=_t(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},Ct.prototype.componentDidUpdate=Ct.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(e,t){Do(n,t,e)})};var Ki=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Zi=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Qi=typeof document<"u",Gi=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(n)};oe.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(oe.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var Oo=w.event;function Xi(){}function er(){return this.cancelBubble}function tr(){return this.defaultPrevented}w.event=function(n){return Oo&&(n=Oo(n)),n.persist=Xi,n.isPropagationStopped=er,n.isDefaultPrevented=tr,n.nativeEvent=n};var Lo={configurable:!0,get:function(){return this.class}},To=w.vnode;w.vnode=function(n){var e=n.type,t=n.props,o=t;if(typeof e=="string"){var r=e.indexOf("-")===-1;for(var i in o={},t){var s=t[i];Qi&&i==="children"&&e==="noscript"||i==="value"&&"defaultValue"in t&&s==null||(i==="defaultValue"&&"value"in t&&t.value==null?i="value":i==="download"&&s===!0?s="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!Gi(t.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():r&&Zi.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():s===null&&(s=void 0),o[i]=s)}e=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=_t(t.children).forEach(function(a){a.props.selected=o.value.indexOf(a.props.value)!=-1})),e=="select"&&o.defaultValue!=null&&(o.value=_t(t.children).forEach(function(a){a.props.selected=o.multiple?o.defaultValue.indexOf(a.props.value)!=-1:o.defaultValue==a.props.value})),n.props=o,t.class!=t.className&&(Lo.enumerable="className"in t,t.className!=null&&(o.class=t.className),Object.defineProperty(o,"className",Lo))}n.$$typeof=Ki,To&&To(n)};var Uo=w.__r;w.__r=function(n){Uo&&Uo(n),n.__c};const nr={light:"outline",dark:"solid"};class or extends kt{renderIcon(e){const{icon:t}=e;if(t){if(t.svg)return m("span",{class:"flex",dangerouslySetInnerHTML:{__html:t.svg}});if(t.src)return m("img",{src:t.src})}const o=wt.categories[e.id]||wt.categories.custom,r=this.props.icons=="auto"?nr[this.props.theme]:this.props.icons;return o[r]||o}render(){let e=null;return m("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:m("div",{class:"flex relative",children:[this.categories.map((t,o)=>{const r=t.name||q.categories[t.id],i=!this.props.unfocused&&t.id==this.state.categoryId;return i&&(e=o),m("button",{"aria-label":r,"aria-selected":i||void 0,title:r,type:"button",class:"flex flex-grow flex-center",onMouseDown:s=>s.preventDefault(),onClick:()=>{this.props.onClick({category:t,i:o})},children:this.renderIcon(t)})}),m("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=E.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class ir extends kt{shouldComponentUpdate(e){for(let t in e)if(t!="children"&&e[t]!=this.props[t])return!0;return!1}render(){return this.props.children}}const St={rowsPerRender:10};class rr extends oe{getInitialState(e=this.props){return{skin:fe.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=q.rtl?"rtl":"ltr",this.refs={menu:ae(),navigation:ae(),scroll:ae(),search:ae(),searchInput:ae(),skinToneButton:ae(),skinToneRadio:ae()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const t in e)this.nextState[t]=e[t];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let t=!1;for(const r in this.nextState)this.props[r]=this.nextState[r],(r==="custom"||r==="categories")&&(t=!0);delete this.nextState;const o=this.getInitialState();if(t)return this.reset(o);this.setState(o)})}componentWillUnmount(){this.unregister()}async reset(e={}){await yt(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const t of this.observers)e.includes(t)||t.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=E;this.refs.categories=new Map;const t=E.categories.map(r=>r.id).join(",");this.navKey&&this.navKey!=t&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=t,this.grid=[],this.grid.setsize=0;const o=(r,i)=>{const s=[];s.__categoryId=i.id,s.__index=r.length,this.grid.push(s);const a=this.grid.length-1,c=a%St.rowsPerRender?{}:ae();return c.index=a,c.posinset=this.grid.setsize+1,r.push(c),s};for(let r of e){const i=[];let s=o(i,r);for(let a of r.emojis)s.length==this.getPerLine()&&(s=o(i,r)),this.grid.setsize+=1,s.push(a);this.refs.categories.set(r.id,{root:ae(),rows:i})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:t,emojiButtonSize:o}=e,r=()=>{const{width:s}=t.getBoundingClientRect();return Math.floor(s/o)},i=new ResizeObserver(()=>{this.unobserve({except:i}),this.setState({perLine:r()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return i.observe(t),this.observers.push(i),r()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,t]){const o=this.state.searchResults||this.grid,r=o[e]&&o[e][t];if(r)return Le.get(r)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const t=new Map,o=s=>{s!=e.state.categoryId&&e.setState({categoryId:s})},r={root:this.refs.scroll.current,threshold:[0,1]},i=new IntersectionObserver(s=>{for(const c of s){const d=c.target.dataset.id;t.set(d,c.intersectionRatio)}const a=[...t];for(const[c,d]of a)if(d){o(c);break}},r);for(const{root:s}of this.refs.categories.values())i.observe(s.current);this.observers.push(i)}observeRows(){const e={...this.state.visibleRows},t=new IntersectionObserver(o=>{for(const r of o){const i=parseInt(r.target.dataset.index);r.isIntersecting?e[i]=!0:delete e[i]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(St.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*St.rowsPerRender}px`});for(const{rows:o}of this.refs.categories.values())for(const r of o)r.current&&t.observe(r.current);this.observers.push(t)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:t,left:o,right:r,up:i,down:s}){const a=this.state.searchResults||this.grid;if(!a.length)return;let[c,d]=this.state.pos;const l=(()=>{if(c==0&&d==0&&!e.repeat&&(o||i))return null;if(c==-1)return!e.repeat&&(r||s)&&t.selectionStart==t.value.length?[0,0]:null;if(o||r){let u=a[c];const h=o?-1:1;if(d+=h,!u[d]){if(c+=h,u=a[c],!u)return c=o?0:a.length-1,d=o?0:a[c].length-1,[c,d];d=o?u.length-1:0}return[c,d]}if(i||s){c+=i?-1:1;const u=a[c];return u?(u[d]||(d=u.length-1),[c,d]):(c=i?0:a.length-1,d=i?0:a[c].length-1,[c,d])}})();if(l)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:l,keyboard:!0},()=>{this.scrollTo({row:l[0]})})}scrollTo({categoryId:e,row:t}){const o=this.state.searchResults||this.grid;if(!o.length)return;const r=this.refs.scroll.current,i=r.getBoundingClientRect();let s=0;if(t>=0&&(e=o[t].__categoryId),e&&(s=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(i.top-r.scrollTop)+1),t>=0)if(!t)s=0;else{const a=o[t].__index,c=s+a*this.props.emojiButtonSize,d=c+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(c<r.scrollTop)s=c;else if(d>r.scrollTop+i.height)s=d-i.height;else return}this.ignoreMouse(),r.scrollTop=s}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:t,pos:o}){if(this.props.onEmojiSelect&&(!t&&o&&(t=this.getEmojiByPos(o)),t)){const r=Vi(t,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&po.add(r,this.props),this.props.onEmojiSelect(r,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),fe.set("skin",e)}renderNav(){return m(or,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),t=this.state.searchResults&&!this.state.searchResults.length;return m("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[m("div",{class:"flex flex-middle flex-grow",children:[m("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:m(nn,{emoji:e,id:t?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),m("div",{class:`margin-${this.dir[0]}`,children:e||t?m("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[m("div",{class:"preview-title ellipsis",children:e?e.name:q.search_no_results_1}),m("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:q.search_no_results_2})]}):m("div",{class:"preview-placeholder color-c",children:q.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:t,posinset:o,grid:r}){const i=this.props.emojiButtonSize,s=this.state.tempSkin||this.state.skin,c=(e.skins[s-1]||e.skins[0]).native,d=Bi(this.state.pos,t),l=t.concat(e.id).join("");return m(ir,{selected:d,skin:s,size:i,children:m("button",{"aria-label":c,"aria-selected":d||void 0,"aria-posinset":o,"aria-setsize":r.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:u=>this.handleEmojiClick({e:u,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(t),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[m("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(o-1)%this.props.emojiButtonColors.length]:void 0}}),m(nn,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:s,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},l)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return m("div",{children:[m("div",{class:"spacer"}),m("div",{class:"flex flex-middle",children:[m("div",{class:"search relative flex-grow",children:[m("input",{type:"search",ref:this.refs.searchInput,placeholder:q.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),m("span",{class:"icon loupe flex",children:wt.search.loupe}),this.state.searchResults&&m("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:wt.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?m("div",{class:"category",ref:this.refs.search,children:[m("div",{class:`sticky padding-small align-${this.dir[0]}`,children:q.categories.search}),m("div",{children:e.length?e.map((t,o)=>m("div",{class:"flex",children:t.map((r,i)=>this.renderEmojiButton(r,{pos:[o,i],posinset:o*this.props.perLine+i+1,grid:e}))})):m("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&m("a",{onClick:this.props.onAddCustomEmoji,children:q.add_custom})})})]}):null}renderCategories(){const{categories:e}=E,t=!!this.state.searchResults,o=this.getPerLine();return m("div",{style:{visibility:t?"hidden":void 0,display:t?"none":void 0,height:"100%"},children:e.map(r=>{const{root:i,rows:s}=this.refs.categories.get(r.id);return m("div",{"data-id":r.target?r.target.id:r.id,class:"category",ref:i,children:[m("div",{class:`sticky padding-small align-${this.dir[0]}`,children:r.name||q.categories[r.id]}),m("div",{class:"relative",style:{height:s.length*this.props.emojiButtonSize},children:s.map((a,c)=>{const d=a.index-a.index%St.rowsPerRender,l=this.state.visibleRows[d],u="current"in a?a:void 0;if(!l&&!u)return null;const h=c*o,p=h+o,f=r.emojis.slice(h,p);return f.length<o&&f.push(...new Array(o-f.length)),m("div",{"data-index":a.index,ref:u,class:"flex row",style:{top:c*this.props.emojiButtonSize},children:l&&f.map((g,$)=>{if(!g)return m("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=Le.get(g);return this.renderEmojiButton(C,{pos:[a.index,$],posinset:a.posinset+$,grid:this.grid})})},a.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:m("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:m("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":q.skins.choose,title:q.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:m("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),t=e?e.name:"";return m("div",{"aria-live":"polite",class:"sr-only",children:t})}renderSkins(){const t=this.refs.skinToneButton.current.getBoundingClientRect(),o=this.base.getBoundingClientRect(),r={};return this.dir=="ltr"?r.right=o.right-t.right-3:r.left=t.left-o.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?r.bottom=o.bottom-t.top+6:(r.top=t.bottom-o.top+3,r.bottom="auto"),m("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":q.skins.choose,class:"menu hidden","data-position":r.top?"top":"bottom",style:r,children:[...Array(6).keys()].map(i=>{const s=i+1,a=this.state.skin==s;return m("div",{children:[m("input",{type:"radio",name:"skin-tone",value:s,"aria-label":q.skins[s],ref:a?this.refs.skinToneRadio:null,defaultChecked:a,onChange:()=>this.handleSkinMouseOver(s),onKeyDown:c=>{(c.code=="Enter"||c.code=="Space"||c.code=="Tab")&&(c.preventDefault(),this.handleSkinClick(s))}}),m("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(s),onMouseEnter:()=>this.handleSkinMouseOver(s),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[m("span",{class:`skin-tone skin-tone-${s}`}),m("span",{class:"margin-small-lr",children:q.skins[s]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return m("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&m("div",{class:"padding-lr",children:this.renderSearch()}),m("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:m("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),ee(this,"handleClickOutside",t=>{const{element:o}=this.props;t.target!=o&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(t))}),ee(this,"handleBaseClick",t=>{this.state.showSkins&&(t.target.closest(".menu")||(t.preventDefault(),t.stopImmediatePropagation(),this.closeSkins()))}),ee(this,"handleBaseKeydown",t=>{this.state.showSkins&&t.key=="Escape"&&(t.preventDefault(),t.stopImmediatePropagation(),this.closeSkins())}),ee(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),ee(this,"handleSearchInput",async()=>{const t=this.refs.searchInput.current;if(!t)return;const{value:o}=t,r=await Le.search(o),i=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!r)return this.setState({searchResults:r,pos:[-1,-1]},i);const s=t.selectionStart==t.value.length?[0,0]:[-1,-1],a=[];a.setsize=r.length;let c=null;for(let d of r)(!a.length||c.length==this.getPerLine())&&(c=[],c.__categoryId="search",c.__index=a.length,a.push(c)),c.push(d);this.ignoreMouse(),this.setState({searchResults:a,pos:s},i)}),ee(this,"handleSearchKeyDown",t=>{const o=t.currentTarget;switch(t.stopImmediatePropagation(),t.key){case"ArrowLeft":this.navigate({e:t,input:o,left:!0});break;case"ArrowRight":this.navigate({e:t,input:o,right:!0});break;case"ArrowUp":this.navigate({e:t,input:o,up:!0});break;case"ArrowDown":this.navigate({e:t,input:o,down:!0});break;case"Enter":t.preventDefault(),this.handleEmojiClick({e:t,pos:this.state.pos});break;case"Escape":t.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),ee(this,"clearSearch",()=>{const t=this.refs.searchInput.current;t&&(t.value="",t.focus(),this.handleSearchInput())}),ee(this,"handleCategoryClick",({category:t,i:o})=>{this.scrollTo(o==0?{row:-1}:{categoryId:t.id})}),ee(this,"openSkins",t=>{const{currentTarget:o}=t,r=o.getBoundingClientRect();this.setState({showSkins:r},async()=>{await Ni(2);const i=this.refs.menu.current;i&&(i.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class an extends Yi{async connectedCallback(){const e=bo(this.props,ce,this);e.element=this,e.ref=t=>{this.component=t},await yt(e),!this.disconnected&&lo(m(rr,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:qn(Ho)})}}ee(an,"Props",ce),typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",an);var Ho={};Ho=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;const te=F`
  :host {
    /* Base */
    --base-color: var(--halo-comment-widget-base-color, #333);
    --base-info-color: var(--halo-comment-widget-base-info-color, #4b5563);
    --base-border-radius: var(--halo-comment-widget-base-border-radius, 0.4em);
    --base-font-size: var(--halo-comment-widget-base-font-size, 1rem);
    --base-line-height: var(--halo-comment-widget-base-line-height, 1.25em);
    --base-font-family: var(
      --halo-comment-widget-base-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Helvetica Neue,
      Arial,
      Noto Sans,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      Segoe UI Symbol,
      'Noto Color Emoji'
    );

    /* Components */
    --component-avatar-rounded: var(--halo-comment-widget-component-avatar-rounded, 9999px);
    --component-avatar-size: var(--halo-comment-widget-component-avatar-size, 2em);
    --component-form-input-bg-color: var(--halo-comment-widget-component-form-input-bg-color, #fff);
    --component-form-input-color: var(--halo-comment-widget-component-form-input-color, #3b4351);
    --component-form-input-border-color: var(
      --halo-comment-widget-component-form-input-border-color,
      #bcc3ce
    );
    --component-form-input-border-color-focus: var(
      --halo-comment-widget-component-form-input-border-color-focus,
      #5755d9
    );
    --component-form-input-box-shadow-focus: var(
      --halo-comment-widget-component-form-input-box-shadow-focus,
      0 0 0 0.15em rgba(87, 85, 217, 0.2)
    );

    --component-form-button-login-bg-color: var(
      --halo-comment-widget-component-form-button-login-bg-color,
      #fff
    );
    --component-form-button-login-bg-color-hover: var(
      --halo-comment-widget-component-form-button-login-bg-color-hover,
      #f2f4f8
    );
    --component-form-button-login-border-color: var(
      --halo-comment-widget-component-form-button-login-border-color,
      #f2f4f8
    );
    --component-form-button-submit-bg-color: var(
      --halo-comment-widget-component-form-button-submit-bg-color,
      #0d1731
    );
    --component-form-button-submit-color: var(
      --halo-comment-widget-component-form-button-submit-color,
      #fff
    );
    --component-form-button-submit-border-color: var(
      --halo-comment-widget-component-form-button-submit-border-color,
      #0d1731
    );
    --component-form-button-submit-border-color-hover: var(
      --halo-comment-widget-component-form-button-submit-border-color-hover,
      #0d1731
    );
    --component-form-button-emoji-color: var(
      --halo-comment-widget-component-form-button-emoji-color,
      #4b5563
    );

    --component-comment-item-action-bg-color-hover: var(
      --halo-comment-widget-component-comment-item-action-bg-color-hover,
      #f3f4f6
    );
    --component-comment-item-action-color-hover: var(
      --halo-comment-widget-component-comment-item-action-color-hover,
      #333
    );

    --component-pagination-button-bg-color-hover: var(
      --halo-comment-widget-component-pagination-button-bg-color-hover,
      #f5f5f5
    );
    --component-pagination-button-bg-color-active: var(
      --halo-comment-widget-component-pagination-button-bg-color-active,
      #fff
    );
    --component-pagination-button-border-color-active: var(
      --halo-comment-widget-component-pagination-button-border-color-active,
      #d1d5db
    );

    --component-emoji-picker-rgb-color: var(
      --halo-comment-widget-component-emoji-picker-rgb-color,
      34,
      36,
      39
    );
    --component-emoji-picker-rgb-accent: var(
      --halo-comment-widget-component-emoji-picker-rgb-accent,
      34,
      102,
      237
    );
    --component-emoji-picker-rgb-background: var(
      --halo-comment-widget-component-emoji-picker-rgb-background,
      255,
      255,
      255
    );
    --component-emoji-picker-rgb-input: var(
      --halo-comment-widget-component-emoji-picker-rgb-input,
      255,
      255,
      255
    );
    --component-emoji-picker-color-border: var(
      --halo-comment-widget-component-emoji-picker-color-border,
      rgba(0, 0, 0, 0.05)
    );
    --component-emoji-picker-color-border-over: var(
      --halo-comment-widget-component-emoji-picker-color-border-over,
      rgba(0, 0, 0, 0.1)
    );
  }
`,sr={search:"搜索",search_no_results_1:"哦不！",search_no_results_2:"没有找到相关表情",pick:"选择一个表情…",add_custom:"添加自定义表情",categories:{activity:"活动",custom:"自定义",flags:"旗帜",foods:"食物与饮品",frequent:"最近使用",nature:"动物与自然",objects:"物品",people:"表情与角色",places:"旅行与景点",search:"搜索结果",symbols:"符号"},skins:{1:"默认",2:"白色",3:"偏白",4:"中等",5:"偏黑",6:"黑色",choose:"选择默认肤色"}};var jt=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class Te extends U{constructor(){super(),this.emojiPickerVisible=!1,this.emojiLoading=!1,this.emojiPicker=null,this.emojiDataUrl="",this.emojiPickerWrapperRef=pt(),this.emojiPickerVisible=!1,this.handleClickOutside=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleClickOutside,!0)}disconnectedCallback(){document.removeEventListener("click",this.handleClickOutside,!0),super.disconnectedCallback()}handleClickOutside(e){this.emojiPickerVisible&&!e.composedPath().includes(this)&&(this.emojiPickerVisible=!1)}async handleOpenEmojiPicker(){var r,i;if(this.emojiPickerVisible){this.emojiPickerVisible=!1;return}if((r=this.emojiPickerWrapperRef.value)!=null&&r.children.length){this.emojiPickerVisible=!0;return}this.emojiLoading=!0;const t=await(await fetch(this.emojiDataUrl)).json(),o=new an({data:t,onEmojiSelect:({native:s})=>{this.dispatchEvent(new CustomEvent("emoji-select",{detail:{native:s}}))},i18n:sr});(i=this.emojiPickerWrapperRef.value)==null||i.appendChild(o),this.emojiPickerVisible=!0,this.emojiLoading=!1}render(){return x`<button class="emoji-button" type="button">
      ${this.emojiLoading?x`<icon-loading></icon-loading>`:x`<icon-emoji @click=${this.handleOpenEmojiPicker}></icon-emoji>`}
      <div
        class="form__emoji-panel"
        style="display: ${this.emojiPickerVisible?"block":"none"}"
        ${mt(this.emojiPickerWrapperRef)}
      ></div>
    </button>`}}Te.styles=[te,X,F`
      :host {
        display: inline-flex;
      }

      em-emoji-picker {
        --rgb-color: var(--component-emoji-picker-rgb-color);
        --rgb-accent: var(--component-emoji-picker-rgb-accent);
        --rgb-background: var(--component-emoji-picker-rgb-background);
        --rgb-input: var(--component-emoji-picker-rgb-input);
        --color-border: var(--component-emoji-picker-color-border);
        --color-border-over: var(--component-emoji-picker-color-border-over);
      }

      .emoji-button {
        color: var(--base-color);
        display: inline-flex;
        position: relative;
      }

      .emoji-button:hover icon-emoji {
        opacity: 0.8;
      }

      .form__emoji-panel {
        position: absolute;
        top: 2em;
        right: 0;
        box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.1);
        border-radius: 0.875em;
        overflow: hidden;
        animation: fadeInUp 0.3s both;
      }

      @media (max-width: 640px) {
        .form__emoji-panel {
          right: -7.8em;
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 5%, 0);
        }

        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    `],jt([S()],Te.prototype,"emojiPickerVisible",void 0),jt([S()],Te.prototype,"emojiLoading",void 0),jt([S()],Te.prototype,"emojiPicker",void 0),jt([T({context:Nn}),S()],Te.prototype,"emojiDataUrl",void 0),customElements.get("emoji-button")||customElements.define("emoji-button",Te);var Ue=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class ve extends U{constructor(){super(...arguments),this.baseUrl="",this.allowAnonymousComments=!1,this.group="",this.kind="",this.name="",this.textareaRef=pt()}get customAccount(){return JSON.parse(localStorage.getItem("halo-comment-custom-account")||"{}")}get loginUrl(){var t;const e=`#comment-${[(t=this.group)==null?void 0:t.replaceAll(".","-"),this.kind,this.name].join("-").replaceAll(/-+/g,"-")}`;return`/console/login?redirect_uri=${encodeURIComponent(window.location.href+e)}`}handleOpenLoginPage(){window.location.href=this.loginUrl}async handleLogout(){var e;if(window.confirm("确定要退出登录吗？"))try{if(!(await fetch(`${this.baseUrl}/logout`,{method:"POST",headers:{"X-Xsrf-Token":((e=document.cookie.split("; ").find(o=>o.startsWith("XSRF-TOKEN")))==null?void 0:e.split("=")[1])||""},credentials:"same-origin"})).ok)throw new Error("Failed to logout");window.location.reload()}catch(t){console.error("Failed to logout",t)}}renderAccountInfo(){var e,t,o;return x`<div class="form__account-info">
      ${(e=this.currentUser)!=null&&e.spec.avatar?x`<img src=${this.currentUser.spec.avatar} />`:""}
      <span> ${((t=this.currentUser)==null?void 0:t.spec.displayName)||((o=this.currentUser)==null?void 0:o.metadata.name)} </span>
      <button @click=${this.handleLogout} type="button" class="form__button--logout">
        退出登录
      </button>
    </div>`}onContentInput(e){const t=e.target;t.style.height="auto",t.style.height=`${t.scrollHeight}px`}onEmojiSelect(e){const t=e.detail;this.textareaRef.value&&(this.textareaRef.value.value+=t.native,this.textareaRef.value.focus())}onKeydown(e){var t;if(e.key==="Enter"&&(e.metaKey||e.ctrlKey)){const o=(t=this.shadowRoot)==null?void 0:t.querySelector("form");e.preventDefault(),o==null||o.requestSubmit()}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown)}render(){return x`
      <form class="form" @submit="${this.onSubmit}">
        <textarea
          class="form__editor"
          ${mt(this.textareaRef)}
          placeholder="编写评论"
          rows="4"
          name="content"
          required
          @input=${this.onContentInput}
        ></textarea>

        ${!this.currentUser&&this.allowAnonymousComments?x`<div class="form__anonymous-inputs">
              <input
                name="displayName"
                value=${this.customAccount.displayName}
                type="text"
                placeholder="昵称"
                required
              />
              <input
                name="email"
                value=${this.customAccount.email}
                type="email"
                placeholder="电子邮件"
                required
              />
              <input
                name="website"
                value=${this.customAccount.website}
                type="url"
                placeholder="网站"
              />
              <a href=${this.loginUrl} rel="nofollow"> （已有该站点的账号） </a>
            </div>`:""}

        <div class="form__footer">
          <div class="form-account">
            ${this.currentUser?this.renderAccountInfo():""}
            ${!this.currentUser&&!this.allowAnonymousComments?x`<button
                  @click=${this.handleOpenLoginPage}
                  class="form__button--login"
                  type="button"
                >
                  登录
                </button> `:""}
          </div>
          <div class="form__actions">
            <emoji-button @emoji-select=${this.onEmojiSelect}></emoji-button>
            <button type="submit" class="form__button--submit">
              <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="h-full w-full">
                <path
                  fill="currentColor"
                  d="M8 7.71L18 12L8 16.29v-3.34l7.14-.95L8 11.05V7.71M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8Z"
                ></path>
              </svg>
              提交评论
            </button>
          </div>
        </div>
      </form>
    `}onSubmit(e){e.preventDefault();const t=e.target,o=new FormData(t),r=Object.fromEntries(o.entries());localStorage.setItem("halo-comment-custom-account",JSON.stringify({displayName:r.displayName,email:r.email,website:r.website}));const i=new CustomEvent("submit",{detail:r});this.dispatchEvent(i)}resetForm(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("form");e==null||e.reset()}setFocus(){var e;(e=this.textareaRef.value)==null||e.focus()}}ve.styles=[te,X,F`
      .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      .form__editor {
        height: auto;
      }

      .form__anonymous-inputs {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.5em;
        align-items: center;
      }

      @media (max-width: 640px) {
        .form__anonymous-inputs {
          grid-template-columns: 1fr;
        }
      }

      .form__anonymous-inputs a {
        font-size: 0.75em;
        line-height: 1em;
        color: darkcyan;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
        user-select: none;
      }

      .form__anonymous-inputs a:hover {
        color: var(--base-color);
      }

      input,
      textarea {
        border-radius: var(--base-border-radius);
        background: var(--component-form-input-bg-color);
        color: var(--component-form-input-color);
        border: 0.05em solid var(--component-form-input-border-color);
        font-size: 0.875em;
        display: block;
        height: 2.25em;
        max-width: 100%;
        outline: 0;
        padding: 0.4em 0.75em;
        width: 100%;
        transition:
          background 0.2s,
          border 0.2s,
          box-shadow 0.2s,
          color 0.2s;
      }

      input:focus,
      textarea:focus {
        border-color: var(--component-form-input-border-color-focus);
        box-shadow: var(--component-form-input-box-shadow-focus);
      }

      .form__account-info {
        color: var(--base-color);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.75em;
      }

      .form__account-info img {
        height: 2em;
        width: 2em;
        border-radius: 9999px;
      }

      .form__account-info span {
        font-weight: 500;
        font-size: 0.9em;
      }

      .form__button--logout,
      .form__button--login {
        border-radius: var(--base-border-radius);
        background: var(--component-form-button-login-bg-color);
        border: 1px solid var(--component-form-button-login-border-color);
        font-size: 0.75em;
        outline: none;
        padding: 0.2rem 0.75em;
        user-select: none;
      }

      .form__button--logout:hover,
      .form__button--login:hover {
        background: var(--component-form-button-login-bg-color-hover);
      }

      .form__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .form__actions {
        display: flex;
        align-items: center;
        gap: 0.75em;
      }

      .form__button--submit {
        border-radius: var(--base-border-radius);
        background-color: var(--component-form-button-submit-bg-color);
        color: var(--component-form-button-submit-color);
        border: 1px solid var(--component-form-button-submit-border-color);
        font-size: 0.875em;
        display: inline-flex;
        flex-shrink: 0;
        user-select: none;
        align-items: center;
        justify-content: center;
        padding: 0.5em 1em;
        text-align: center;
        vertical-align: middle;
        text-decoration-line: none;
        outline-width: 0px;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.15s;
        gap: 0.5em;
      }

      .form__button--submit:hover {
        opacity: 0.8;
        border-color: var(--component-form-button-submit-border-color-hover);
      }

      .form__button--submit:active {
        opacity: 0.7;
      }

      .form__button--submit:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `],Ue([T({context:Se}),S()],ve.prototype,"baseUrl",void 0),Ue([T({context:dt,subscribe:!0}),S()],ve.prototype,"currentUser",void 0),Ue([T({context:lt,subscribe:!0}),S()],ve.prototype,"allowAnonymousComments",void 0),Ue([T({context:qt}),S()],ve.prototype,"group",void 0),Ue([T({context:Yt}),S()],ve.prototype,"kind",void 0),Ue([T({context:Wt}),S()],ve.prototype,"name",void 0),customElements.get("base-form")||customElements.define("base-form",ve);var ge=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class le extends U{constructor(){super(...arguments),this.baseUrl="",this.group="",this.kind="",this.name="",this.version="v1alpha1",this.allowAnonymousComments=!1,this.baseFormRef=pt()}render(){return x`<base-form ${mt(this.baseFormRef)} @submit="${this.onSubmit}"></base-form>`}async onSubmit(e){var c,d,l,u,h,p;e.preventDefault();const t=e.detail,{displayName:o,email:r,website:i,content:s}=t||{},a={raw:s,content:s,allowNotification:!0,subjectRef:{group:this.group,kind:this.kind,name:this.name,version:this.version}};if(!this.currentUser&&!this.allowAnonymousComments){(c=this.toastManager)==null||c.warn("请先登录");return}if(!this.currentUser&&this.allowAnonymousComments)if(!o||!r){(d=this.toastManager)==null||d.warn("请先登录或者完善信息");return}else a.owner={displayName:o,email:r,website:i};try{const f=await fetch(`${this.baseUrl}/apis/api.halo.run/v1alpha1/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!f.ok)throw new Error("评论失败，请稍后重试");(await f.json()).spec.approved?(l=this.toastManager)==null||l.success("评论成功"):(u=this.toastManager)==null||u.success("评论成功，等待审核"),this.dispatchEvent(new CustomEvent("reload")),(h=this.baseFormRef.value)==null||h.resetForm()}catch(f){f instanceof Error&&((p=this.toastManager)==null||p.error(f.message))}}}ge([T({context:Se}),S()],le.prototype,"baseUrl",void 0),ge([T({context:dt,subscribe:!0}),S()],le.prototype,"currentUser",void 0),ge([T({context:qt}),S()],le.prototype,"group",void 0),ge([T({context:Yt}),S()],le.prototype,"kind",void 0),ge([T({context:Wt}),S()],le.prototype,"name",void 0),ge([T({context:Bn}),S()],le.prototype,"version",void 0),ge([T({context:lt,subscribe:!0}),S()],le.prototype,"allowAnonymousComments",void 0),ge([T({context:ht,subscribe:!0}),S()],le.prototype,"toastManager",void 0),customElements.get("comment-form")||customElements.define("comment-form",le);var At=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class He extends U{constructor(){super(...arguments),this.error=!1,this.loading=!1}async connectedCallback(){super.connectedCallback(),await this.loadImage()}async loadImage(){if(!this.src)return Promise.resolve();this.loading=!0;try{await new Promise(e=>{const t=new Image;t.src=this.src||"",t.onload=()=>{this.error=!1,e(null)},t.onerror=()=>{this.error=!0,e(null)}})}catch{this.error=!0}finally{this.loading=!1}}getPlaceholderText(){if(!this.alt)return;const e=this.alt.split(" ");if(e.length===1)return e[0].charAt(0).toUpperCase();if(e.length>1)return e[0].charAt(0).toUpperCase()+e[1].charAt(0).toUpperCase()}render(){return this.src?this.loading?x`<div class="avatar avatar--loading">
          <icon-loading></icon-loading>
        </div>`:this.error?x`<div class="avatar avatar--error">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm-1-5h2v2h-2v-2Zm0-8h2v6h-2V7Z"
            />
          </svg>
        </div>`:x`<div class="avatar">
        <img src="${this.src}" alt="${this.alt||""}" loading="lazy" />
      </div>`:x`<div class="avatar">
      <span class="avatar__placeholder">${this.getPlaceholderText()}</span>
    </div>`}}He.styles=[te,X,F`
      .avatar {
        border-radius: var(--component-avatar-rounded);
        height: var(--component-avatar-size);
        width: var(--component-avatar-size);
        overflow: hidden;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(243 244 246);
      }

      .avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .avatar--error svg {
        height: 1.15em;
        width: 1.15em;
        color: rgb(255 59 48);
      }

      .avatar__placeholder {
        font-weight: 500;
        color: rgb(31 41 55);
        font-size: 0.75em;
        line-height: 1em;
        user-select: none;
      }
    `],At([P({type:String})],He.prototype,"src",void 0),At([P({type:String})],He.prototype,"alt",void 0),At([S()],He.prototype,"error",void 0),At([S()],He.prototype,"loading",void 0),customElements.get("user-avatar")||customElements.define("user-avatar",He);var Et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Io={exports:{}};(function(n,e){(function(t,o){n.exports=o()})(Et,function(){var t=1e3,o=6e4,r=36e5,i="millisecond",s="second",a="minute",c="hour",d="day",l="week",u="month",h="quarter",p="year",f="date",g="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,C=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(k){var _=["th","st","nd","rd"],v=k%100;return"["+k+(_[(v-20)%10]||_[v]||_[0])+"]"}},B=function(k,_,v){var y=String(k);return!y||y.length>=_?k:""+Array(_+1-y.length).join(v)+k},D={s:B,z:function(k){var _=-k.utcOffset(),v=Math.abs(_),y=Math.floor(v/60),b=v%60;return(_<=0?"+":"-")+B(y,2,"0")+":"+B(b,2,"0")},m:function k(_,v){if(_.date()<v.date())return-k(v,_);var y=12*(v.year()-_.year())+(v.month()-_.month()),b=_.clone().add(y,u),j=v-b<0,A=_.clone().add(y+(j?-1:1),u);return+(-(y+(v-b)/(j?b-A:A-b))||0)},a:function(k){return k<0?Math.ceil(k)||0:Math.floor(k)},p:function(k){return{M:u,y:p,w:l,d,D:f,h:c,m:a,s,ms:i,Q:h}[k]||String(k||"").toLowerCase().replace(/s$/,"")},u:function(k){return k===void 0}},z="en",N={};N[z]=M;var Z="$isDayjsObject",Q=function(k){return k instanceof Mt||!(!k||!k[Z])},he=function k(_,v,y){var b;if(!_)return z;if(typeof _=="string"){var j=_.toLowerCase();N[j]&&(b=j),v&&(N[j]=v,b=j);var A=_.split("-");if(!b&&A.length>1)return k(A[0])}else{var O=_.name;N[O]=_,b=O}return!y&&b&&(z=b),b||!y&&z},L=function(k,_){if(Q(k))return k.clone();var v=typeof _=="object"?_:{};return v.date=k,v.args=arguments,new Mt(v)},R=D;R.l=he,R.i=Q,R.w=function(k,_){return L(k,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var Mt=function(){function k(v){this.$L=he(v.locale,null,!0),this.parse(v),this.$x=this.$x||v.x||{},this[Z]=!0}var _=k.prototype;return _.parse=function(v){this.$d=function(y){var b=y.date,j=y.utc;if(b===null)return new Date(NaN);if(R.u(b))return new Date;if(b instanceof Date)return new Date(b);if(typeof b=="string"&&!/Z$/i.test(b)){var A=b.match($);if(A){var O=A[2]-1||0,H=(A[7]||"0").substring(0,3);return j?new Date(Date.UTC(A[1],O,A[3]||1,A[4]||0,A[5]||0,A[6]||0,H)):new Date(A[1],O,A[3]||1,A[4]||0,A[5]||0,A[6]||0,H)}}return new Date(b)}(v),this.init()},_.init=function(){var v=this.$d;this.$y=v.getFullYear(),this.$M=v.getMonth(),this.$D=v.getDate(),this.$W=v.getDay(),this.$H=v.getHours(),this.$m=v.getMinutes(),this.$s=v.getSeconds(),this.$ms=v.getMilliseconds()},_.$utils=function(){return R},_.isValid=function(){return this.$d.toString()!==g},_.isSame=function(v,y){var b=L(v);return this.startOf(y)<=b&&b<=this.endOf(y)},_.isAfter=function(v,y){return L(v)<this.startOf(y)},_.isBefore=function(v,y){return this.endOf(y)<L(v)},_.$g=function(v,y,b){return R.u(v)?this[y]:this.set(b,v)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(v,y){var b=this,j=!!R.u(y)||y,A=R.p(v),O=function(Re,K){var $e=R.w(b.$u?Date.UTC(b.$y,K,Re):new Date(b.$y,K,Re),b);return j?$e:$e.endOf(d)},H=function(Re,K){return R.w(b.toDate()[Re].apply(b.toDate("s"),(j?[0,0,0,0]:[23,59,59,999]).slice(K)),b)},V=this.$W,W=this.$M,G=this.$D,Ve="set"+(this.$u?"UTC":"");switch(A){case p:return j?O(1,0):O(31,11);case u:return j?O(1,W):O(0,W+1);case l:var Me=this.$locale().weekStart||0,ot=(V<Me?V+7:V)-Me;return O(j?G-ot:G+(6-ot),W);case d:case f:return H(Ve+"Hours",0);case c:return H(Ve+"Minutes",1);case a:return H(Ve+"Seconds",2);case s:return H(Ve+"Milliseconds",3);default:return this.clone()}},_.endOf=function(v){return this.startOf(v,!1)},_.$set=function(v,y){var b,j=R.p(v),A="set"+(this.$u?"UTC":""),O=(b={},b[d]=A+"Date",b[f]=A+"Date",b[u]=A+"Month",b[p]=A+"FullYear",b[c]=A+"Hours",b[a]=A+"Minutes",b[s]=A+"Seconds",b[i]=A+"Milliseconds",b)[j],H=j===d?this.$D+(y-this.$W):y;if(j===u||j===p){var V=this.clone().set(f,1);V.$d[O](H),V.init(),this.$d=V.set(f,Math.min(this.$D,V.daysInMonth())).$d}else O&&this.$d[O](H);return this.init(),this},_.set=function(v,y){return this.clone().$set(v,y)},_.get=function(v){return this[R.p(v)]()},_.add=function(v,y){var b,j=this;v=Number(v);var A=R.p(y),O=function(W){var G=L(j);return R.w(G.date(G.date()+Math.round(W*v)),j)};if(A===u)return this.set(u,this.$M+v);if(A===p)return this.set(p,this.$y+v);if(A===d)return O(1);if(A===l)return O(7);var H=(b={},b[a]=o,b[c]=r,b[s]=t,b)[A]||1,V=this.$d.getTime()+v*H;return R.w(V,this)},_.subtract=function(v,y){return this.add(-1*v,y)},_.format=function(v){var y=this,b=this.$locale();if(!this.isValid())return b.invalidDate||g;var j=v||"YYYY-MM-DDTHH:mm:ssZ",A=R.z(this),O=this.$H,H=this.$m,V=this.$M,W=b.weekdays,G=b.months,Ve=b.meridiem,Me=function(K,$e,it,Rt){return K&&(K[$e]||K(y,j))||it[$e].slice(0,Rt)},ot=function(K){return R.s(O%12||12,K,"0")},Re=Ve||function(K,$e,it){var Rt=K<12?"AM":"PM";return it?Rt.toLowerCase():Rt};return j.replace(C,function(K,$e){return $e||function(it){switch(it){case"YY":return String(y.$y).slice(-2);case"YYYY":return R.s(y.$y,4,"0");case"M":return V+1;case"MM":return R.s(V+1,2,"0");case"MMM":return Me(b.monthsShort,V,G,3);case"MMMM":return Me(G,V);case"D":return y.$D;case"DD":return R.s(y.$D,2,"0");case"d":return String(y.$W);case"dd":return Me(b.weekdaysMin,y.$W,W,2);case"ddd":return Me(b.weekdaysShort,y.$W,W,3);case"dddd":return W[y.$W];case"H":return String(O);case"HH":return R.s(O,2,"0");case"h":return ot(1);case"hh":return ot(2);case"a":return Re(O,H,!0);case"A":return Re(O,H,!1);case"m":return String(H);case"mm":return R.s(H,2,"0");case"s":return String(y.$s);case"ss":return R.s(y.$s,2,"0");case"SSS":return R.s(y.$ms,3,"0");case"Z":return A}return null}(K)||A.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(v,y,b){var j,A=this,O=R.p(y),H=L(v),V=(H.utcOffset()-this.utcOffset())*o,W=this-H,G=function(){return R.m(A,H)};switch(O){case p:j=G()/12;break;case u:j=G();break;case h:j=G()/3;break;case l:j=(W-V)/6048e5;break;case d:j=(W-V)/864e5;break;case c:j=W/r;break;case a:j=W/o;break;case s:j=W/t;break;default:j=W}return b?j:R.a(j)},_.daysInMonth=function(){return this.endOf(u).$D},_.$locale=function(){return N[this.$L]},_.locale=function(v,y){if(!v)return this.$L;var b=this.clone(),j=he(v,y,!0);return j&&(b.$L=j),b},_.clone=function(){return R.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},k}(),Jo=Mt.prototype;return L.prototype=Jo,[["$ms",i],["$s",s],["$m",a],["$H",c],["$W",d],["$M",u],["$y",p],["$D",f]].forEach(function(k){Jo[k[1]]=function(_){return this.$g(_,k[0],k[1])}}),L.extend=function(k,_){return k.$i||(k(_,Mt,L),k.$i=!0),L},L.locale=he,L.isDayjs=Q,L.unix=function(k){return L(1e3*k)},L.en=N[z],L.Ls=N,L.p={},L})})(Io);var Bo=Io.exports;const Ie=cn(Bo);var ar={exports:{}};(function(n,e){(function(t,o){n.exports=o(Bo)})(Et,function(t){function o(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var r=o(t),i={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(s,a){return a==="W"?s+"周":s+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(s,a){var c=100*s+a;return c<600?"凌晨":c<900?"早上":c<1100?"上午":c<1300?"中午":c<1800?"下午":"晚上"}};return r.default.locale(i,null,!0),i})})(ar);var No={exports:{}};(function(n,e){(function(t,o){n.exports=o()})(Et,function(){var t={year:0,month:1,day:2,hour:3,minute:4,second:5},o={};return function(r,i,s){var a,c=function(h,p,f){f===void 0&&(f={});var g=new Date(h),$=function(C,M){M===void 0&&(M={});var B=M.timeZoneName||"short",D=C+"|"+B,z=o[D];return z||(z=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:C,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:B}),o[D]=z),z}(p,f);return $.formatToParts(g)},d=function(h,p){for(var f=c(h,p),g=[],$=0;$<f.length;$+=1){var C=f[$],M=C.type,B=C.value,D=t[M];D>=0&&(g[D]=parseInt(B,10))}var z=g[3],N=z===24?0:z,Z=g[0]+"-"+g[1]+"-"+g[2]+" "+N+":"+g[4]+":"+g[5]+":000",Q=+h;return(s.utc(Z).valueOf()-(Q-=Q%1e3))/6e4},l=i.prototype;l.tz=function(h,p){h===void 0&&(h=a);var f=this.utcOffset(),g=this.toDate(),$=g.toLocaleString("en-US",{timeZone:h}),C=Math.round((g-new Date($))/1e3/60),M=s($,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(g.getTimezoneOffset()/15)-C,!0);if(p){var B=M.utcOffset();M=M.add(f-B,"minute")}return M.$x.$timezone=h,M},l.offsetName=function(h){var p=this.$x.$timezone||s.tz.guess(),f=c(this.valueOf(),p,{timeZoneName:h}).find(function(g){return g.type.toLowerCase()==="timezonename"});return f&&f.value};var u=l.startOf;l.startOf=function(h,p){if(!this.$x||!this.$x.$timezone)return u.call(this,h,p);var f=s(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return u.call(f,h,p).tz(this.$x.$timezone,!0)},s.tz=function(h,p,f){var g=f&&p,$=f||p||a,C=d(+s(),$);if(typeof h!="string")return s(h).tz($);var M=function(N,Z,Q){var he=N-60*Z*1e3,L=d(he,Q);if(Z===L)return[he,Z];var R=d(he-=60*(L-Z)*1e3,Q);return L===R?[he,L]:[N-60*Math.min(L,R)*1e3,Math.max(L,R)]}(s.utc(h,g).valueOf(),C,$),B=M[0],D=M[1],z=s(B).utcOffset(D);return z.$x.$timezone=$,z},s.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},s.tz.setDefault=function(h){a=h}}})})(No);var cr=No.exports;const lr=cn(cr);var Vo={exports:{}};(function(n,e){(function(t,o){n.exports=o()})(Et,function(){return function(t,o,r){t=t||{};var i=o.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(d,l,u,h){return i.fromToBase(d,l,u,h)}r.en.relativeTime=s,i.fromToBase=function(d,l,u,h,p){for(var f,g,$,C=u.$locale().relativeTime||s,M=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],B=M.length,D=0;D<B;D+=1){var z=M[D];z.d&&(f=h?r(d).diff(u,z.d,!0):u.diff(d,z.d,!0));var N=(t.rounding||Math.round)(Math.abs(f));if($=f>0,N<=z.r||!z.r){N<=1&&D>0&&(z=M[D-1]);var Z=C[z.l];p&&(N=p(""+N)),g=typeof Z=="string"?Z.replace("%d",N):Z(N,l,z.l,$);break}}if(l)return g;var Q=$?C.future:C.past;return typeof Q=="function"?Q(g):Q.replace("%s",g)},i.to=function(d,l){return a(d,l,this,!0)},i.from=function(d,l){return a(d,l,this)};var c=function(d){return d.$u?r.utc():r()};i.toNow=function(d){return this.to(c(this),d)},i.fromNow=function(d){return this.from(c(this),d)}}})})(Vo);var dr=Vo.exports;const hr=cn(dr);Ie.extend(lr),Ie.extend(hr),Ie.locale("zh-cn");function Fo(n){return n?Ie(n).format("YYYY-MM-DD HH:mm"):""}function ur(n){return n?new Date().getFullYear()-new Date(n).getFullYear()>0?Fo(new Date(n)):Ie().to(Ie(n)):""}var je=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class de extends U{constructor(){super(...arguments),this.content=""}render(){return x`<div class="item ${this.breath?"item--animate-breath":""}">
      <div class="item__avatar">
        <user-avatar
          src="${this.userAvatar||""}"
          alt="${this.userDisplayName||""}"
        ></user-avatar>
      </div>
      <div class="item__main">
        <div class="item__meta">
          ${this.userWebsite?x`<a class="item__author" target="_blank" href=${this.userWebsite}>
                ${this.userDisplayName}
              </a>`:x`<div class="item__author">${this.userDisplayName}</div>`}
          <div class="item__meta-info" title=${Fo(this.creationTime)}>
            ${ur(this.creationTime)}
          </div>
          ${this.approved?"":x`<div class="item__meta-info">审核中</div>`}
        </div>

        <div class="item__content">
          <pre><slot name="pre-content"></slot>${this.content}</pre>
        </div>

        <div class="item__actions">
          <slot name="action"></slot>
        </div>

        <slot name="footer"></slot>
      </div>
    </div>`}}de.styles=[te,X,F`
      .item {
        display: flex;
        gap: 0.75em;
        padding: 1em 0;
      }

      .item__main {
        flex: 1;
      }

      .item__meta {
        display: flex;
        align-items: center;
        gap: 0.75em;
      }

      .item__author {
        color: var(--base-color);
        font-weight: 500;
        font-size: 0.875em;
      }

      .item__meta-info {
        color: var(--base-info-color);
        font-size: 0.75em;
        line-height: 1em;
      }

      .item__content {
        margin-top: 0.5em;
      }

      .item__content pre {
        color: var(--base-color);
        white-space: pre-wrap;
        overflow-wrap: break-word;
        word-break: break-all;
      }

      .item__actions {
        margin-top: 0.5em;
        display: flex;
        align-items: center;
      }

      .item--animate-breath {
        animation: breath 1s ease-in-out infinite;
      }

      @keyframes breath {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.02);
        }
        100% {
          transform: scale(1);
        }
      }
    `],je([P({type:String})],de.prototype,"userAvatar",void 0),je([P({type:String})],de.prototype,"userDisplayName",void 0),je([P({type:String})],de.prototype,"userWebsite",void 0),je([P({type:String})],de.prototype,"creationTime",void 0),je([P({type:Boolean})],de.prototype,"approved",void 0),je([P({type:Boolean})],de.prototype,"breath",void 0),je([P({type:String})],de.prototype,"content",void 0),customElements.get("base-comment-item")||customElements.define("base-comment-item",de);var pr=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class ln extends U{constructor(){super(...arguments),this.text=""}render(){return x`
      <div slot="action" class="item-action">
        <div class="item-action__icon">
          <slot name="icon"></slot>
        </div>
        <span class="item-action__text"> ${this.text} </span>
      </div>
    `}}ln.styles=F`
    .item-action {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      margin-right: 0.5em;
    }

    .item-action__icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.15s;
      padding: 0.45em;
    }

    .item-action__icon ::slotted(svg) {
      color: var(--base-info-color);
      width: 1em;
      height: 1em;
    }

    .item-action__text {
      color: var(--base-info-color);
      user-select: none;
    }

    .item-action:hover .item-action__icon {
      background-color: var(--component-comment-item-action-bg-color-hover);
    }

    .item-action:hover .item-action__text {
      color: var(--component-comment-item-action-color-hover);
    }

    .item-action:hover .item-action__icon ::slotted(svg) {
      color: var(--component-comment-item-action-color-hover);
    }
  `,pr([P({type:String})],ln.prototype,"text",void 0),customElements.get("base-comment-item-action")||customElements.define("base-comment-item-action",ln);var Be=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class Ae extends U{constructor(){super(...arguments),this.baseUrl="",this.allowAnonymousComments=!1,this.baseFormRef=pt()}connectedCallback(){super.connectedCallback(),setTimeout(()=>{var e;this.scrollIntoView({block:"center",inline:"start",behavior:"smooth"}),(e=this.baseFormRef.value)==null||e.setFocus()},0)}render(){return x`<base-form ${mt(this.baseFormRef)} @submit="${this.onSubmit}"></base-form>`}async onSubmit(e){var c,d,l,u,h,p,f;e.preventDefault();const t=e.detail,{displayName:o,email:r,website:i,content:s}=t||{},a={raw:s,content:s,allowNotification:!0};if(this.quoteReply&&(a.quoteReply=this.quoteReply.metadata.name),!this.currentUser&&!this.allowAnonymousComments){(c=this.toastManager)==null||c.warn("请先登录");return}if(!this.currentUser&&this.allowAnonymousComments)if(!o||!r){(d=this.toastManager)==null||d.warn("请先登录或者完善信息");return}else a.owner={displayName:o,email:r,website:i};try{const g=await fetch(`${this.baseUrl}/apis/api.halo.run/v1alpha1/comments/${(l=this.comment)==null?void 0:l.metadata.name}/reply`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!g.ok)throw new Error("评论失败，请稍后重试");(await g.json()).spec.approved?(u=this.toastManager)==null||u.success("评论成功"):(h=this.toastManager)==null||h.success("评论成功，等待审核"),this.dispatchEvent(new CustomEvent("reload")),(p=this.baseFormRef.value)==null||p.resetForm()}catch(g){g instanceof Error&&((f=this.toastManager)==null||f.error(g.message))}}}Be([T({context:Se}),S()],Ae.prototype,"baseUrl",void 0),Be([T({context:dt,subscribe:!0}),S()],Ae.prototype,"currentUser",void 0),Be([P({type:Object})],Ae.prototype,"comment",void 0),Be([P({type:Object})],Ae.prototype,"quoteReply",void 0),Be([T({context:lt,subscribe:!0}),S()],Ae.prototype,"allowAnonymousComments",void 0),Be([T({context:ht,subscribe:!0}),S()],Ae.prototype,"toastManager",void 0),customElements.get("reply-form")||customElements.define("reply-form",Ae);const dn="halo.upvoted.comments",hn="halo.upvoted.replies";var be=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class ie extends U{constructor(){super(...arguments),this.baseUrl="",this.activeQuoteReply=void 0,this.replies=[],this.showReplyForm=!1,this.upvoted=!1,this.upvoteCount=0}get quoteReply(){var t;const{quoteReply:e}=((t=this.reply)==null?void 0:t.spec)||{};if(e)return this.replies.find(o=>o.metadata.name===e)}get isQuoteReplyHovered(){var e,t;return((e=this.activeQuoteReply)==null?void 0:e.metadata.name)===((t=this.reply)==null?void 0:t.metadata.name)}handleSetActiveQuoteReply(e){this.dispatchEvent(new CustomEvent("set-active-quote-reply",{detail:{quoteReply:e},bubbles:!0,composed:!0}))}connectedCallback(){var e;super.connectedCallback(),this.checkUpvotedStatus(),this.upvoteCount=((e=this.reply)==null?void 0:e.stats.upvote)||0}checkUpvotedStatus(){var t;JSON.parse(localStorage.getItem(hn)||"[]").includes((t=this.reply)==null?void 0:t.metadata.name)&&(this.upvoted=!0)}async handleUpvote(){var o,r,i;const e=JSON.parse(localStorage.getItem(hn)||"[]");if(e.includes((o=this.reply)==null?void 0:o.metadata.name))return;const t={name:(r=this.reply)==null?void 0:r.metadata.name,plural:"replies",group:"content.halo.run"};await fetch(`${this.baseUrl}/apis/api.halo.run/v1alpha1/trackers/upvote`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),e.push((i=this.reply)==null?void 0:i.metadata.name),localStorage.setItem(hn,JSON.stringify(e)),this.upvoteCount+=1,this.upvoted=!0,this.checkUpvotedStatus()}render(){var e,t,o,r,i,s,a,c;return x`
      <base-comment-item
        .userAvatar="${(e=this.reply)==null?void 0:e.owner.avatar}"
        .userDisplayName="${(t=this.reply)==null?void 0:t.owner.displayName}"
        .content="${((o=this.reply)==null?void 0:o.spec.content)||""}"
        .creationTime="${((r=this.reply)==null?void 0:r.metadata.creationTimestamp)??void 0}"
        .approved=${(i=this.reply)==null?void 0:i.spec.approved}
        .breath=${this.isQuoteReplyHovered}
        .userWebsite=${(a=(s=this.reply)==null?void 0:s.spec.owner.annotations)==null?void 0:a.website}
      >
        <base-comment-item-action
          slot="action"
          class="item-action__upvote"
          .text="${this.upvoteCount+""}"
          @click="${this.handleUpvote}"
        >
          ${this.upvoted?x`<svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M0 0h24v24H0z" />
                  <path
                    fill="red"
                    d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074z"
                  />
                </g>
              </svg>`:x`<svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"
                />
              </svg>`}
        </base-comment-item-action>

        <base-comment-item-action
          slot="action"
          @click="${()=>this.showReplyForm=!this.showReplyForm}"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48c3.255 2.777 3.695 7.266 1.029 10.501C16.608 19.942 11.659 20.922 7.7 19L3 20"
            />
          </svg>
        </base-comment-item-action>

        ${this.showReplyForm?x`
              <div class="form__wrapper" slot="footer">
                <reply-form
                  .comment=${this.comment}
                  .quoteReply=${this.reply}
                  @reload=${()=>this.dispatchEvent(new CustomEvent("reload"))}
                ></reply-form>
              </div>
            `:""}
        ${this.quoteReply?x`<span
                slot="pre-content"
                @mouseenter=${()=>this.handleSetActiveQuoteReply(this.quoteReply)}
                @mouseleave=${()=>this.handleSetActiveQuoteReply()}
                class="item__quote-badge"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 9V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11"
                  /></svg
                ><span>${(c=this.quoteReply)==null?void 0:c.owner.displayName}</span>
              </span>
              <br slot="pre-content" />`:""}
      </base-comment-item>
    `}}ie.styles=[te,X,F`
      .item-action__upvote {
        margin-left: -0.5em;
      }

      .form__wrapper {
        margin-top: 0.5em;
      }

      .item__quote-badge {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        gap: 0.25em;
        padding: 0 0.3em;
        font-weight: 500;
        font-size: 0.75em;
        border-radius: 0.3em;
        background-color: #e5e7eb;
        color: #4b5563;
        cursor: pointer;
      }

      .item__quote-badge:hover {
        text-decoration: underline;
        color: #3b82f6;
      }
    `],be([T({context:Se}),S()],ie.prototype,"baseUrl",void 0),be([P({type:Object})],ie.prototype,"comment",void 0),be([P({type:Object})],ie.prototype,"reply",void 0),be([P({type:Object})],ie.prototype,"activeQuoteReply",void 0),be([P({type:Array})],ie.prototype,"replies",void 0),be([S()],ie.prototype,"showReplyForm",void 0),be([S()],ie.prototype,"upvoted",void 0),be([S()],ie.prototype,"upvoteCount",void 0),customElements.get("reply-item")||customElements.define("reply-item",ie);class Yo extends U{render(){return x` <div class="loading-block">
      <icon-loading></icon-loading>
    </div>`}}Yo.styles=F`
    .loading-block {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em;
    }
  `,customElements.get("loading-block")||customElements.define("loading-block",Yo);var Ne=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class _e extends U{constructor(){super(...arguments),this.baseUrl="",this.replies=[],this.loading=!1,this.activeQuoteReply=void 0}render(){return x`<div class="replies__wrapper">
      <reply-form @reload=${this.fetchReplies} .comment=${this.comment}></reply-form>
      ${this.loading?x`<loading-block></loading-block>`:x`
            <div class="replies__list">
              ${Tn(this.replies,e=>e.metadata.name,e=>x`<reply-item
                    .comment=${this.comment}
                    .reply="${e}"
                    .replies=${this.replies}
                    .activeQuoteReply=${this.activeQuoteReply}
                    @set-active-quote-reply=${this.onSetActiveQuoteReply}
                    @reload=${this.fetchReplies}
                  ></reply-item>`)}
            </div>
          `}
    </div>`}onSetActiveQuoteReply(e){this.activeQuoteReply=e.detail.quoteReply}async fetchReplies(){var e,t;this.replies.length===0&&(this.loading=!0);try{const o=await fetch(`${this.baseUrl}/apis/api.halo.run/v1alpha1/comments/${(e=this.comment)==null?void 0:e.metadata.name}/reply`);if(!o.ok)throw new Error("加载回复列表失败，请稍后重试");const r=await o.json();this.replies=r.items}catch(o){o instanceof Error&&((t=this.toastManager)==null||t.error(o.message))}this.loading=!1}connectedCallback(){super.connectedCallback(),this.fetchReplies()}}_e.styles=[te,X,F`
      .replies__wrapper {
        margin-top: 0.5em;
      }

      .replies__list {
        margin-top: 0.875em;
      }
    `],Ne([T({context:Se}),P({attribute:!1})],_e.prototype,"baseUrl",void 0),Ne([P({type:Object})],_e.prototype,"comment",void 0),Ne([S()],_e.prototype,"replies",void 0),Ne([S()],_e.prototype,"loading",void 0),Ne([S()],_e.prototype,"activeQuoteReply",void 0),Ne([T({context:ht,subscribe:!0}),S()],_e.prototype,"toastManager",void 0),customElements.get("comment-replies")||customElements.define("comment-replies",_e);var et=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class Ee extends U{constructor(){super(...arguments),this.baseUrl="",this.showReplies=!1,this.upvoted=!1,this.upvoteCount=0}connectedCallback(){var e;super.connectedCallback(),this.checkUpvotedStatus(),this.upvoteCount=((e=this.comment)==null?void 0:e.stats.upvote)||0}checkUpvotedStatus(){var t;JSON.parse(localStorage.getItem(dn)||"[]").includes((t=this.comment)==null?void 0:t.metadata.name)&&(this.upvoted=!0)}async handleUpvote(){var o,r,i;const e=JSON.parse(localStorage.getItem(dn)||"[]");if(e.includes((o=this.comment)==null?void 0:o.metadata.name))return;const t={name:(r=this.comment)==null?void 0:r.metadata.name,plural:"comments",group:"content.halo.run"};await fetch(`${this.baseUrl}/apis/api.halo.run/v1alpha1/trackers/upvote`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),e.push((i=this.comment)==null?void 0:i.metadata.name),localStorage.setItem(dn,JSON.stringify(e)),this.upvoteCount+=1,this.upvoted=!0,this.checkUpvotedStatus()}render(){var e,t,o,r,i,s,a,c,d;return x`<base-comment-item
      .userAvatar="${(e=this.comment)==null?void 0:e.owner.avatar}"
      .userDisplayName="${(t=this.comment)==null?void 0:t.owner.displayName}"
      .content="${((o=this.comment)==null?void 0:o.spec.content)||""}"
      .creationTime="${(r=this.comment)==null?void 0:r.spec.creationTime}"
      .approved=${(i=this.comment)==null?void 0:i.spec.approved}
      .userWebsite=${(a=(s=this.comment)==null?void 0:s.spec.owner.annotations)==null?void 0:a.website}
    >
      <base-comment-item-action
        slot="action"
        class="item__action--upvote"
        .text="${this.upvoteCount+""}"
        @click="${this.handleUpvote}"
      >
        ${this.upvoted?x`<svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M0 0h24v24H0z" />
                <path
                  fill="red"
                  d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074z"
                />
              </g>
            </svg>`:x`<svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"
              />
            </svg>`}
      </base-comment-item-action>

      <base-comment-item-action
        slot="action"
        .text="${(((d=(c=this.comment)==null?void 0:c.status)==null?void 0:d.visibleReplyCount)||0)+""}"
        @click="${()=>this.showReplies=!this.showReplies}"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48c3.255 2.777 3.695 7.266 1.029 10.501C16.608 19.942 11.659 20.922 7.7 19L3 20"
          />
        </svg>
      </base-comment-item-action>

      <div slot="footer">
        ${this.showReplies?x`<comment-replies .comment="${this.comment}"></comment-replies>`:""}
      </div>
    </base-comment-item>`}}Ee.styles=[te,X,F`
      .item__action--upvote {
        margin-left: -0.5em;
      }
    `],et([T({context:Se}),S()],Ee.prototype,"baseUrl",void 0),et([P({type:Object})],Ee.prototype,"comment",void 0),et([S()],Ee.prototype,"showReplies",void 0),et([S()],Ee.prototype,"upvoted",void 0),et([S()],Ee.prototype,"upvoteCount",void 0),customElements.get("comment-item")||customElements.define("comment-item",Ee);var un=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class tt extends U{constructor(){super(...arguments),this.total=0,this.page=1,this.size=10}get totalPages(){return Math.ceil(this.total/this.size)}renderPageNumbers(){const e=[],t=this.page,o=3;let r,i;this.totalPages<=o?(r=1,i=this.totalPages):t<=3?(r=1,i=o):t+2>=this.totalPages?(r=this.totalPages-(o-1),i=this.totalPages):(r=t-2,i=t+2),r>1&&(e.push(1),r>2&&e.push("..."));for(let s=r;s<=i;s++)e.push(s);return i<this.totalPages&&(i<this.totalPages-1&&e.push("..."),e.push(this.totalPages)),e.map(s=>s==="..."?x`<li class="pagination__dot">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
          >
            <path
              d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>`:x`<li class="pagination__number ${this.page===s?"active":""}">
          <button @click=${()=>this.gotoPage(s)} ?disabled=${s===this.page}>
            ${s}
          </button>
        </li>`)}gotoPage(e){e!==this.page&&this.dispatchEvent(new CustomEvent("page-change",{detail:{page:e},bubbles:!0,composed:!0}))}render(){return x`
      <ul class="pagination">
        <li class="pagination__button">
          <button @click=${()=>this.gotoPage(this.page-1)} ?disabled=${this.page===1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#888888"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 6l-6 6l6 6"
              />
            </svg>
            上一页
          </button>
        </li>
        ${this.renderPageNumbers()}
        <li class="pagination__button">
          <button
            @click=${()=>this.gotoPage(this.page+1)}
            ?disabled=${this.page===this.totalPages}
          >
            下一页
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#888888"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 6l6 6l-6 6"
              />
            </svg>
          </button>
        </li>
      </ul>
    `}}tt.styles=[te,X,F`
      :host {
        display: flex;
        justify-content: center;
      }

      .pagination {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 0.2em;
      }

      .pagination li {
        display: inline-flex;
        align-items: center;
        user-select: none;
      }

      .pagination__button button,
      .pagination__number button {
        border-radius: var(--base-border-radius);
        color: var(--base-color);
        font-size: 0.875em;
        display: inline-flex;
        align-items: center;
        font-weight: 600;
        padding: 0.4em 0.875em;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.15s;
        border: 1px solid transparent;
      }

      .pagination__button button {
        gap: 0.5em;
      }

      .pagination__number button {
        font-weight: normal;
      }

      .pagination__button button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .pagination__button button:hover,
      .pagination__number button:hover {
        background-color: var(--component-pagination-button-bg-color-hover);
      }

      .pagination__number.active button {
        background-color: var(--component-pagination-button-bg-color-active);
        border: 1px solid var(--component-pagination-button-border-color-active);
      }

      .pagination__dot {
        padding: 0.4em 0.875em;
      }

      @media (max-width: 768px) {
        .pagination__number:not(.active) {
          display: none;
        }
        .pagination__number.active button {
          border: none;
          background-color: inherit;
        }
        .pagination__dot {
          display: none !important;
        }
        .pagination {
          justify-content: space-between;
          width: 100%;
        }
      }
    `],un([P({type:Number})],tt.prototype,"total",void 0),un([P({type:Number})],tt.prototype,"page",void 0),un([P({type:Number})],tt.prototype,"size",void 0),customElements.get("comment-pagination")||customElements.define("comment-pagination",tt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr=Nt(class extends Vt{constructor(n){var e;if(super(n),n.type!==Bt.ATTRIBUTE||n.name!=="class"||((e=n.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var o,r;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((o=this.nt)!=null&&o.has(i))&&this.st.add(i);return this.render(e)}const t=n.element.classList;for(const i of this.st)i in e||(t.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||(r=this.nt)!=null&&r.has(i)||(s?(t.add(i),this.st.add(i)):(t.remove(i),this.st.delete(i)))}return pe}});var qo=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class nt extends U{constructor(){super(...arguments),this.message="",this.type="success"}render(){return x`<div
      class="toast ${mr({"toast--error":this.type==="error","toast--success":this.type==="success","toast--warn":this.type==="warn"})}"
    >
      ${this.type==="success"?x`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
              <path d="m9 12l2 2l4-4" />
            </g>
          </svg>`:x`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9-3v4m0 3v.01"
            />
          </svg>`} <span>${this.message}</span>
    </div>`}}nt.styles=[te,X,F`
      .toast {
        border-radius: var(--base-border-radius);
        font-size: 0.875em;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5em 0.625em;
        justify-content: space-between;
        overflow: hidden;
        color: #fff;
        gap: 0.5em;
        box-shadow:
          0 0 #0000,
          0 0 #0000,
          0 1px 3px 0 rgb(0 0 0 / 0.1),
          0 1px 2px -1px rgb(0 0 0 / 0.1);

        animation: slideInDown 0.3s ease-out forwards;
      }

      .toast--exit {
        animation: slideOutUp 0.3s ease-in forwards;
      }

      .toast--error {
        background-color: #d71d1d;
      }

      .toast--success {
        background-color: #4ccba0;
      }

      .toast--warn {
        background-color: #f5a623;
      }

      @keyframes slideInDown {
        from {
          transform: translateY(0);
          opacity: 0;
        }
        to {
          transform: translateY(100%);
          opacity: 1;
        }
      }

      @keyframes slideOutUp {
        from {
          transform: translateY(100%);
          opacity: 1;
        }
        to {
          transform: translateY(0);
          opacity: 0;
        }
      }
    `],qo([P({type:String})],nt.prototype,"message",void 0),qo([P({type:String})],nt.prototype,"type",void 0);class pn extends U{render(){return x`<slot></slot>`}}pn.styles=[te,X,F`
      :host {
        position: fixed;
        top: 1em;
        z-index: 1000;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5em;
      }
    `],customElements.get("lit-toast")||customElements.define("lit-toast",nt),customElements.get("lit-toast-container")||customElements.define("lit-toast-container",pn);class fr{constructor(){this.body=document.body;const e=this.body.querySelector("lit-toast-container");e?this.toastContainer=e:(this.toastContainer=new pn,this.body.appendChild(this.toastContainer))}show(e,t){const o=new nt;o.message=e,o.type=t,this.toastContainer.appendChild(o),setTimeout(()=>{o.classList.add("toast--exit"),setTimeout(()=>{var r;(r=this.toastContainer)==null||r.removeChild(o)},300)},3e3)}success(e){this.show(e,"success")}error(e){this.show(e,"error")}warn(e){this.show(e,"warn")}}var ne=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};class J extends U{constructor(){super(...arguments),this.baseUrl="",this.kind="",this.group="",this.version="",this.name="",this.emojiDataUrl="https://unpkg.com/@emoji-mart/data",this.allowAnonymousComments=!1,this.comments={page:1,size:20,total:0,items:[],first:!0,last:!1,hasNext:!1,hasPrevious:!1,totalPages:0},this.loading=!1}get shouldDisplayPagination(){return this.loading?!1:this.comments.hasNext||this.comments.hasPrevious}render(){return x`<div class="comment-widget">
      <comment-form
        @reload="${()=>this.fetchComments({page:1,scrollIntoView:!0})}"
      ></comment-form>
      ${this.loading?x`<loading-block></loading-block>`:x`
            <div class="comment-widget__wrapper">
              <div class="comment-widget__stats">
                <span>${this.comments.total} 条评论</span>
              </div>

              <div class="comment-widget__list">
                ${Tn(this.comments.items,e=>e.metadata.name,e=>x`<comment-item .comment=${e}></comment-item>`)}
              </div>
            </div>
          `}
      ${this.shouldDisplayPagination?x`
            <comment-pagination
              .total=${this.comments.total}
              .page=${this.comments.page}
              .size=${this.comments.size}
              @page-change=${this.onPageChange}
            ></comment-pagination>
          `:""}
    </div>`}async fetchGlobalInfo(){try{const t=await(await fetch(`${this.baseUrl}/actuator/globalinfo`,{method:"get",credentials:"same-origin"})).json();this.allowAnonymousComments=t.allowAnonymousComments}catch(e){console.error("Failed to fetch global info",e)}}async fetchCurrentUser(){const t=await(await fetch(`${this.baseUrl}/apis/api.console.halo.run/v1alpha1/users/-`)).json();this.currentUser=t.user.metadata.name==="anonymousUser"?void 0:t.user}async fetchComments(e){var r;const{page:t,scrollIntoView:o}=e||{};try{this.comments.items.length===0&&(this.loading=!0),t&&(this.comments.page=t);const i=[`group=${this.group}`,`kind=${this.kind}`,`name=${this.name}`,`page=${this.comments.page}`,`size=${this.comments.size}`,`version=${this.version}`],s=await fetch(`${this.baseUrl}/apis/api.halo.run/v1alpha1/comments?${i.join("&")}`);if(!s.ok)throw new Error("评论列表加载失败，请稍后重试");const a=await s.json();this.comments=a}catch(i){i instanceof Error&&((r=this.toastManager)==null||r.error(i.message))}finally{this.loading=!1,o&&this.scrollIntoView({block:"start",inline:"start",behavior:"smooth"})}}async onPageChange(e){const t=e.detail;this.comments.page=t.page,await this.fetchComments({scrollIntoView:!0})}connectedCallback(){super.connectedCallback(),this.toastManager=new fr,this.fetchCurrentUser(),this.fetchComments(),this.fetchGlobalInfo()}}J.styles=[te,X,F`
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .comment-widget {
        width: 100%;
      }

      .comment-widget__wrapper {
        margin-top: 1.2em;
      }

      .comment-widget__stats {
        color: var(--base-color);
        font-size: 0.875em;
        margin: 0.875em 0;
        font-weight: 500;
      }
    `],ne([se({context:Se}),P({type:String})],J.prototype,"baseUrl",void 0),ne([se({context:Yt}),P({type:String})],J.prototype,"kind",void 0),ne([se({context:qt}),P({type:String})],J.prototype,"group",void 0),ne([se({context:Bn}),P({type:String})],J.prototype,"version",void 0),ne([se({context:Wt}),P({type:String})],J.prototype,"name",void 0),ne([se({context:Nn}),P({type:String})],J.prototype,"emojiDataUrl",void 0),ne([se({context:dt}),S()],J.prototype,"currentUser",void 0),ne([se({context:lt}),S()],J.prototype,"allowAnonymousComments",void 0),ne([se({context:ht}),S()],J.prototype,"toastManager",void 0),ne([S()],J.prototype,"comments",void 0),ne([S()],J.prototype,"loading",void 0),customElements.get("comment-widget")||customElements.define("comment-widget",J);function vr(n,e){const t=document.querySelector(n);t||console.error("Element not found",n);const o=document.createElement("comment-widget");o.kind=e.kind,o.group=e.group,o.version="v1alpha1",o.name=e.name,o.emojiDataUrl="/plugins/PluginCommentWidget/assets/static/emoji/native.json",new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&t.childElementCount===0&&(t.appendChild(o),t.animate([{opacity:0},{opacity:1}],{duration:300,fill:"forwards"}))})}).observe(t)}return rt.CommentWidget=J,rt.init=vr,Object.defineProperty(rt,Symbol.toStringTag,{value:"Module"}),rt}({});
