/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var nt="",lt="";function $t(o){nt=o}function ro(o=""){if(!nt){const t=document.querySelector("[data-webawesome]");if(t!=null&&t.hasAttribute("data-webawesome")){const e=new URL(t.getAttribute("data-webawesome")??"",window.location.href).pathname;$t(e)}else{const r=[...document.getElementsByTagName("script")].find(s=>s.src.endsWith("webawesome.js")||s.src.endsWith("webawesome.loader.js")||s.src.endsWith("webawesome.ssr-loader.js"));if(r){const s=String(r.getAttribute("src"));$t(s.split("/").slice(0,-1).join("/"))}}}return nt.replace(/\/$/,"")+(o?`/${o.replace(/^\//,"")}`:"")}function Xt(o){lt=o}function Yt(){if(!lt){const o=document.querySelector("[data-fa-kit-code]");o&&Xt(o.getAttribute("data-fa-kit-code")||"")}return lt}var g="7.0.1";function Qt(o,t,e){const r=Yt(),s=r.length>0;let i="solid";return t==="notdog"?(e==="solid"&&(i="solid"),e==="duo-solid"&&(i="duo-solid"),`https://ka-p.fontawesome.com/releases/v${g}/svgs/notdog-${i}/${o}.svg?token=${encodeURIComponent(r)}`):t==="chisel"?`https://ka-p.fontawesome.com/releases/v${g}/svgs/chisel-regular/${o}.svg?token=${encodeURIComponent(r)}`:t==="etch"?`https://ka-p.fontawesome.com/releases/v${g}/svgs/etch-solid/${o}.svg?token=${encodeURIComponent(r)}`:t==="jelly"?(e==="regular"&&(i="regular"),e==="duo-regular"&&(i="duo-regular"),e==="fill-regular"&&(i="fill-regular"),`https://ka-p.fontawesome.com/releases/v${g}/svgs/jelly-${i}/${o}.svg?token=${encodeURIComponent(r)}`):t==="slab"?((e==="solid"||e==="regular")&&(i="regular"),e==="press-regular"&&(i="press-regular"),`https://ka-p.fontawesome.com/releases/v${g}/svgs/slab-${i}/${o}.svg?token=${encodeURIComponent(r)}`):t==="thumbprint"?`https://ka-p.fontawesome.com/releases/v${g}/svgs/thumbprint-light/${o}.svg?token=${encodeURIComponent(r)}`:t==="whiteboard"?`https://ka-p.fontawesome.com/releases/v${g}/svgs/whiteboard-semibold/${o}.svg?token=${encodeURIComponent(r)}`:(t==="classic"&&(e==="thin"&&(i="thin"),e==="light"&&(i="light"),e==="regular"&&(i="regular"),e==="solid"&&(i="solid")),t==="sharp"&&(e==="thin"&&(i="sharp-thin"),e==="light"&&(i="sharp-light"),e==="regular"&&(i="sharp-regular"),e==="solid"&&(i="sharp-solid")),t==="duotone"&&(e==="thin"&&(i="duotone-thin"),e==="light"&&(i="duotone-light"),e==="regular"&&(i="duotone-regular"),e==="solid"&&(i="duotone")),t==="sharp-duotone"&&(e==="thin"&&(i="sharp-duotone-thin"),e==="light"&&(i="sharp-duotone-light"),e==="regular"&&(i="sharp-duotone-regular"),e==="solid"&&(i="sharp-duotone-solid")),t==="brands"&&(i="brands"),s?`https://ka-p.fontawesome.com/releases/v${g}/svgs/${i}/${o}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${g}/svgs/${i}/${o}.svg`)}var te={name:"default",resolver:(o,t="classic",e="solid")=>Qt(o,t,e),mutator:(o,t)=>{if(t!=null&&t.family&&!o.hasAttribute("data-duotone-initialized")){const{family:e,variant:r}=t;if(e==="duotone"||e==="sharp-duotone"||e==="notdog"&&r==="duo-solid"||e==="jelly"&&r==="duo-regular"||e==="thumbprint"){const s=[...o.querySelectorAll("path")],i=s.find(n=>!n.hasAttribute("opacity")),a=s.find(n=>n.hasAttribute("opacity"));if(!i||!a)return;if(i.setAttribute("data-duotone-primary",""),a.setAttribute("data-duotone-secondary",""),t.swapOpacity&&i&&a){const n=a.getAttribute("opacity")||"0.4";i.style.setProperty("--path-opacity",n),a.style.setProperty("--path-opacity","1")}o.setAttribute("data-duotone-initialized","")}}}},ee=te;const ct=new Set,I=new Map;let E,ut="ltr",pt="en";const Pt=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Pt){const o=new MutationObserver(Ft);ut=document.documentElement.dir||"ltr",pt=document.documentElement.lang||navigator.language,o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function qt(...o){o.map(t=>{const e=t.$code.toLowerCase();I.has(e)?I.set(e,Object.assign(Object.assign({},I.get(e)),t)):I.set(e,t),E||(E=t)}),Ft()}function Ft(){Pt&&(ut=document.documentElement.dir||"ltr",pt=document.documentElement.lang||navigator.language),[...ct.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}let oe=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ct.add(this.host)}hostDisconnected(){ct.delete(this.host)}dir(){return`${this.host.dir||ut}`.toLowerCase()}lang(){return`${this.host.lang||pt}`.toLowerCase()}getTranslationData(t){var e,r;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s==null?void 0:s.language.toLowerCase(),a=(r=(e=s==null?void 0:s.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&r!==void 0?r:"",n=I.get(`${i}-${a}`),l=I.get(i);return{locale:s,language:i,region:a,primary:n,secondary:l}}exists(t,e){var r;const{primary:s,secondary:i}=this.getTranslationData((r=e.lang)!==null&&r!==void 0?r:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||i&&i[t]||e.includeFallback&&E&&E[t])}term(t,...e){const{primary:r,secondary:s}=this.getTranslationData(this.lang());let i;if(r&&r[t])i=r[t];else if(s&&s[t])i=s[t];else if(E&&E[t])i=E[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,e)}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Tt={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(o,t)=>`Go to slide ${o} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:o=>o===0?"No options selected":o===1?"1 option selected":`${o} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:o=>`Slide ${o}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};qt(Tt);var re=Tt;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Bt=class extends oe{};qt(re);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function se(o){return`data:image/svg+xml,${encodeURIComponent(o)}`}var Y={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},ie={name:"system",resolver:(o,t="classic",e="solid")=>{let s=Y[e][o]??Y.regular[o]??Y.regular["circle-question"];return s?se(s):""}},ae=ie;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ne="classic",le=[ee,ae],dt=[];function ce(o){dt.push(o)}function de(o){dt=dt.filter(t=>t!==o)}function Q(o){return le.find(t=>t.name===o)}function he(){return ne}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ue=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,Nt=o=>{throw TypeError(o)},c=(o,t,e,r)=>{for(var s=r>1?void 0:r?pe(t,e):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(s=(r?a(t,e,s):a(s))||s);return r&&s&&ue(t,e,s),s},Vt=(o,t,e)=>t.has(o)||Nt("Cannot "+e),fe=(o,t,e)=>(Vt(o,t,"read from private field"),t.get(o)),me=(o,t,e)=>t.has(o)?Nt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),we=(o,t,e,r)=>(Vt(o,t,"write to private field"),t.set(o,e),e);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ve=()=>({checkValidity(o){const t=o.input,e={message:"",isValid:!0,invalidKeys:[]};if(!t)return e;let r=!0;if("checkValidity"in t&&(r=t.checkValidity()),r)return e;if(e.isValid=!1,"validationMessage"in t&&(e.message=t.validationMessage),!("validity"in t))return e.invalidKeys.push("customError"),e;for(const s in t.validity){if(s==="valid")continue;const i=s;t.validity[i]&&e.invalidKeys.push(i)}return e}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,ft=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),_t=new WeakMap;let Dt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ft&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=_t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&_t.set(e,t))}return t}toString(){return this.cssText}};const ge=o=>new Dt(typeof o=="string"?o:o+"",void 0,mt),U=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,s,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new Dt(e,o,mt)},be=(o,t)=>{if(ft)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=W.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,o.appendChild(r)}},At=ft?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return ge(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ye,defineProperty:$e,getOwnPropertyDescriptor:_e,getOwnPropertyNames:Ae,getOwnPropertySymbols:Ce,getPrototypeOf:Ee}=Object,A=globalThis,Ct=A.trustedTypes,Se=Ct?Ct.emptyScript:"",tt=A.reactiveElementPolyfillSupport,q=(o,t)=>o,Z={toAttribute(o,t){switch(t){case Boolean:o=o?Se:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},wt=(o,t)=>!ye(o,t),Et={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:wt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);let z=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&$e(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:i}=_e(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){const n=s==null?void 0:s.call(this);i==null||i.call(this,a),this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const t=Ee(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const e=this.properties,r=[...Ae(e),...Ce(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(At(s))}else t!==void 0&&e.push(At(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return be(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){var i;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const a=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Z).toAttribute(e,r.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){var i,a;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:Z;this._$Em=s;const h=l.fromAttribute(e,n.type);this[s]=h??((a=this._$Ej)==null?void 0:a.get(s))??h,this._$Em=null}}requestUpdate(t,e,r,s=!1,i){var a;if(t!==void 0){const n=this.constructor;if(s===!1&&(i=this[t]),r??(r=n.getPropertyOptions(t)),!((r.hasChanged??wt)(i,e)||r.useDefault&&r.reflect&&i===((a=this._$Ej)==null?void 0:a.get(t))&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),i!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s){const{wrapped:n}=a,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[q("elementProperties")]=new Map,z[q("finalized")]=new Map,tt==null||tt({ReactiveElement:z}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis,St=o=>o,G=F.trustedTypes,xt=G?G.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ht="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,jt="?"+_,xe=`<${jt}>`,k=document,B=()=>k.createComment(""),N=o=>o===null||typeof o!="object"&&typeof o!="function",vt=Array.isArray,ke=o=>vt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",et=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,Lt=/>/g,C=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,It=/"/g,Wt=/^(?:script|style|textarea|title)$/i,Le=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),J=Le(1),L=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Mt=new WeakMap,S=k.createTreeWalker(k,129);function Kt(o,t){if(!vt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(t):t}const ze=(o,t)=>{const e=o.length-1,r=[];let s,i=t===2?"<svg>":t===3?"<math>":"",a=R;for(let n=0;n<e;n++){const l=o[n];let h,f,u=-1,v=0;for(;v<l.length&&(a.lastIndex=v,f=a.exec(l),f!==null);)v=a.lastIndex,a===R?f[1]==="!--"?a=kt:f[1]!==void 0?a=Lt:f[2]!==void 0?(Wt.test(f[2])&&(s=RegExp("</"+f[2],"g")),a=C):f[3]!==void 0&&(a=C):a===C?f[0]===">"?(a=s??R,u=-1):f[1]===void 0?u=-2:(u=a.lastIndex-f[2].length,h=f[1],a=f[3]===void 0?C:f[3]==='"'?It:zt):a===It||a===zt?a=C:a===kt||a===Lt?a=R:(a=C,s=void 0);const $=a===C&&o[n+1].startsWith("/>")?" ":"";i+=a===R?l+xe:u>=0?(r.push(h),l.slice(0,u)+Ht+l.slice(u)+_+$):l+_+(u===-2?n:$)}return[Kt(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class V{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,a=0;const n=t.length-1,l=this.parts,[h,f]=ze(t,e);if(this.el=V.createElement(h,r),S.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=S.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(Ht)){const v=f[a++],$=s.getAttribute(u).split(_),H=/([.?@])?(.*)/.exec(v);l.push({type:1,index:i,name:H[2],strings:$,ctor:H[1]==="."?Me:H[1]==="?"?Ue:H[1]==="@"?Oe:X}),s.removeAttribute(u)}else u.startsWith(_)&&(l.push({type:6,index:i}),s.removeAttribute(u));if(Wt.test(s.tagName)){const u=s.textContent.split(_),v=u.length-1;if(v>0){s.textContent=G?G.emptyScript:"";for(let $=0;$<v;$++)s.append(u[$],B()),S.nextNode(),l.push({type:2,index:++i});s.append(u[v],B())}}}else if(s.nodeType===8)if(s.data===jt)l.push({type:2,index:i});else{let u=-1;for(;(u=s.data.indexOf(_,u+1))!==-1;)l.push({type:7,index:i}),u+=_.length-1}i++}}static createElement(t,e){const r=k.createElement("template");return r.innerHTML=t,r}}function M(o,t,e=o,r){var a,n;if(t===L)return t;let s=r!==void 0?(a=e._$Co)==null?void 0:a[r]:e._$Cl;const i=N(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=M(o,s._$AS(o,t.values),s,r)),t}class Ie{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??k).importNode(e,!0);S.currentNode=s;let i=S.nextNode(),a=0,n=0,l=r[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new D(i,i.nextSibling,this,t):l.type===1?h=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(h=new Re(i,this,t)),this._$AV.push(h),l=r[++n]}a!==(l==null?void 0:l.index)&&(i=S.nextNode(),a++)}return S.currentNode=k,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class D{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),N(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ke(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=V.createElement(Kt(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(e);else{const a=new Ie(s,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new V(t)),e}k(t){vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const i of t)s===e.length?e.push(r=new D(this.O(B()),this.O(B()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t!==this._$AB;){const s=St(t).nextSibling;St(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(t,e=this,r,s){const i=this.strings;let a=!1;if(i===void 0)t=M(this,t,e,0),a=!N(t)||t!==this._$AH&&t!==L,a&&(this._$AH=t);else{const n=t;let l,h;for(t=i[0],l=0;l<i.length-1;l++)h=M(this,n[r+l],e,l),h===L&&(h=this._$AH[l]),a||(a=!N(h)||h!==this._$AH[l]),h===m?t=m:t!==m&&(t+=(h??"")+i[l+1]),this._$AH[l]=h}a&&!s&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Me extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class Ue extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class Oe extends X{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??m)===L)return;const r=this._$AH,s=t===m&&r!==m||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==m&&(r===m||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Re{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const ot=F.litHtmlPolyfillSupport;ot==null||ot(V,D),(F.litHtmlVersions??(F.litHtmlVersions=[])).push("3.3.2");const Pe=(o,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const i=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new D(t.insertBefore(B(),i),i,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis;let T=class extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return L}};var Rt;T._$litElement$=!0,T.finalized=!0,(Rt=x.litElementHydrateSupport)==null||Rt.call(x,{LitElement:T});const rt=x.litElementPolyfillSupport;rt==null||rt({LitElement:T});(x.litElementVersions??(x.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:wt},Fe=(o=qe,t,e)=>{const{kind:r,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(e.name,o),r==="accessor"){const{name:a}=e;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(a,l,o,!0,n)},init(n){return n!==void 0&&this.C(a,void 0,o,n),n}}}if(r==="setter"){const{name:a}=e;return function(n){const l=this[a];t.call(this,n),this.requestUpdate(a,l,o,!0,n)}}throw Error("Unsupported decorator location: "+r)};function d(o){return(t,e)=>typeof e=="object"?Fe(o,t,e):((r,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),a?Object.getOwnPropertyDescriptor(s,i):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(o){return d({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zt(o,t){return(e,r,s)=>{const i=a=>{var n;return((n=a.renderRoot)==null?void 0:n.querySelector(o))??null};return Te(e,r,{get(){return i(this)}})}}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Be=U`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }

  [hidden] {
    display: none !important;
  }
`,K,O=class extends T{constructor(){super(),me(this,K,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,e)=>{var r;if((r=this.internals)!=null&&r.states)try{e?this.internals.states.add(t):this.internals.states.delete(t)}catch(s){if(String(s).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw s}},has:t=>{var e;if(!((e=this.internals)!=null&&e.states))return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let o=this.constructor;for(let[t,e]of o.elementProperties)e.default==="inherit"&&e.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${e.initial}`,!0)}static get styles(){const o=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Be,...o]}attributeChangedCallback(o,t,e){fe(this,K)||(this.constructor.elementProperties.forEach((r,s)=>{r.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),we(this,K,!0)),super.attributeChangedCallback(o,t,e)}willUpdate(o){super.willUpdate(o),this.initialReflectedProperties.forEach((t,e)=>{o.has(e)&&this[e]==null&&(this[e]=t)})}firstUpdated(o){var t;super.firstUpdated(o),this.didSSR&&((t=this.shadowRoot)==null||t.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}))}update(o){try{super.update(o)}catch(t){if(this.didSSR&&!this.hasUpdated){const e=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});e.error=t,this.dispatchEvent(e)}throw t}}relayNativeEvent(o,t){o.stopImmediatePropagation(),this.dispatchEvent(new o.constructor(o.type,{...o,...t}))}};K=new WeakMap;c([d()],O.prototype,"dir",2);c([d()],O.prototype,"lang",2);c([d({type:Boolean,reflect:!0,attribute:"did-ssr"})],O.prototype,"didSSR",2);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Gt=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},Ne=()=>({observedAttributes:["custom-error"],checkValidity(o){const t={message:"",isValid:!0,invalidKeys:[]};return o.customError&&(t.message=o.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}),y=class extends O{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=o=>{o.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Gt))},this.handleInteraction=o=>{var e;const t=this.emittedEvents;t.includes(o.type)||t.push(o.type),t.length===((e=this.assumeInteractionOn)==null?void 0:e.length)&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[Ne()]}static get observedAttributes(){const o=new Set(super.observedAttributes||[]);for(const t of this.validators)if(t.observedAttributes)for(const e of t.observedAttributes)o.add(e);return[...o]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(o=>{this.addEventListener(o,this.handleInteraction)})}firstUpdated(...o){super.firstUpdated(...o),this.updateValidity()}willUpdate(o){if(o.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),o.has("value")||o.has("disabled")){const t=this.value;if(Array.isArray(t)){if(this.name){const e=new FormData;for(const r of t)e.append(this.name,r);this.setValue(e,e)}}else this.setValue(t,t)}o.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(o)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(o){o?this.setAttribute("form",o):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...o){const t=o[0],e=o[1];let r=o[2];r||(r=this.validationTarget),this.internals.setValidity(t,e,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const o=!!this.required,t=this.internals.validity.valid,e=this.hasInteracted;this.customStates.set("required",o),this.customStates.set("optional",!o),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&e),this.customStates.set("user-valid",t&&e)}setCustomValidity(o){if(!o){this.customError=null,this.setValidity({});return}this.customError=o,this.setValidity({customError:!0},o,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(o){this.disabled=o,this.updateValidity()}formStateRestoreCallback(o,t){this.value=o,t==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...o){const[t,e]=o;this.internals.setFormValue(t,e)}get allValidators(){const o=this.constructor.validators||[],t=this.validators||[];return[...o,...t]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const o=this.allValidators;if(!(o!=null&&o.length))return;const t={customError:!!this.customError},e=this.validationTarget||this.input||void 0;let r="";for(const s of o){const{isValid:i,message:a,invalidKeys:n}=s.checkValidity(this);i||(r||(r=a),(n==null?void 0:n.length)>=0&&n.forEach(l=>t[l]=!0))}r||(r=this.validationMessage),this.setValidity(t,r,e)}};y.formAssociated=!0;c([d({reflect:!0})],y.prototype,"name",2);c([d({type:Boolean})],y.prototype,"disabled",2);c([d({state:!0,attribute:!1})],y.prototype,"valueHasChanged",2);c([d({state:!0,attribute:!1})],y.prototype,"hasInteracted",2);c([d({attribute:"custom-error",reflect:!0})],y.prototype,"customError",2);c([d({attribute:!1,state:!0,type:Object})],y.prototype,"validity",1);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Ve=U`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  .button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button.disabled * {
    pointer-events: none;
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  .button.is-icon-button:has(wa-icon) {
    width: auto;
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-radius: var(--wa-border-radius-pill);
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }

  /*
   * Button group border radius modifications
   */

  /* Remove border radius from all grouped buttons by default */
  :host(.wa-button-group__button) .button {
    border-radius: 0;
  }

  /* Horizontal orientation */
  :host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-form-control-border-radius);
    border-end-start-radius: var(--wa-form-control-border-radius);
  }

  :host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
    border-start-end-radius: var(--wa-form-control-border-radius);
    border-end-end-radius: var(--wa-form-control-border-radius);
  }

  /* Vertical orientation */
  :host(.wa-button-group__vertical) {
    flex: 1 1 auto;
  }

  :host(.wa-button-group__vertical) .button {
    width: 100%;
    justify-content: start;
  }

  :host(.wa-button-group__vertical.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-form-control-border-radius);
    border-start-end-radius: var(--wa-form-control-border-radius);
  }

  :host(.wa-button-group__vertical.wa-button-group__button-last) .button {
    border-end-start-radius: var(--wa-form-control-border-radius);
    border-end-end-radius: var(--wa-form-control-border-radius);
  }

  /* Handle pill modifier for button groups */
  :host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-border-radius-pill);
    border-end-start-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {
    border-start-end-radius: var(--wa-border-radius-pill);
    border-end-end-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-border-radius-pill);
    border-start-end-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {
    border-end-start-radius: var(--wa-border-radius-pill);
    border-end-end-radius: var(--wa-border-radius-pill);
  }
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var De=class{constructor(o,...t){this.slotNames=[],this.handleSlotChange=e=>{const r=e.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=o).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(o=>{if(o.nodeType===Node.TEXT_NODE&&o.textContent.trim()!=="")return!0;if(o.nodeType===Node.ELEMENT_NODE){const t=o;if(t.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(o){return this.host.querySelector(`:scope > [slot="${o}"]`)!==null}test(o){return o==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(o)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var He=U`
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var je=U`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function yt(o,t){const e={waitUntilFirstUpdate:!1,...t};return(r,s)=>{const{update:i}=r,a=Array.isArray(o)?o:[o];r.update=function(n){a.forEach(l=>{const h=l;if(n.has(h)){const f=n.get(h),u=this[h];f!==u&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[s](f,u)}}),i.call(this,n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We={ATTRIBUTE:1},Ke=o=>(...t)=>({_$litDirective$:o,values:t});let Ze=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=Ke(class extends Ze{constructor(o){var t;if(super(o),o.type!==We.ATTRIBUTE||o.name!=="class"||((t=o.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var r,s;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const e=o.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(a?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return L}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=o=>o??m;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=Symbol.for(""),Je=o=>{if((o==null?void 0:o.r)===Jt)return o==null?void 0:o._$litStatic$},Ut=(o,...t)=>({_$litStatic$:t.reduce((e,r,s)=>e+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+o[s+1],o[0]),r:Jt}),Ot=new Map,Xe=o=>(t,...e)=>{const r=e.length;let s,i;const a=[],n=[];let l,h=0,f=!1;for(;h<r;){for(l=t[h];h<r&&(i=e[h],(s=Je(i))!==void 0);)l+=s+t[++h],f=!0;h!==r&&n.push(i),a.push(l),h++}if(h===r&&a.push(t[r]),f){const u=a.join("$$lit$$");(t=Ot.get(u))===void 0&&(a.raw=a,Ot.set(u,t=a)),e=n}return o(t,...e)},st=Xe(J);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var p=class extends y{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new De(this,"[default]","start","end"),this.localize=new Bt(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,ve()]}constructLightDOMButton(){const o=document.createElement("button");for(const t of this.attributes)t.name!=="style"&&o.setAttribute(t.name,t.value);return o.type=this.type,o.style.position="absolute !important",o.style.width="0 !important",o.style.height="0 !important",o.style.clipPath="inset(50%) !important",o.style.overflow="hidden !important",o.style.whiteSpace="nowrap !important",this.name&&(o.name=this.name),o.value=this.value||"",o}handleClick(){var e;if(!this.getForm())return;const t=this.constructLightDOMButton();(e=this.parentElement)==null||e.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new Gt)}handleLabelSlotChange(){const o=this.labelSlot.assignedNodes({flatten:!0});let t=!1,e=!1,r=!1,s=!1;[...o].forEach(i=>{var a;if(i.nodeType===Node.ELEMENT_NODE){const n=i;n.localName==="wa-icon"?(e=!0,t||(t=n.label!==void 0)):s=!0}else i.nodeType===Node.TEXT_NODE&&(((a=i.textContent)==null?void 0:a.trim())||"").length>0&&(r=!0)}),this.isIconButton=e&&!r&&!s,this.isIconButton&&!t&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...o){}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}render(){const o=this.isLink(),t=o?Ut`a`:Ut`button`;return st`
      <${t}
        part="base"
        class=${Ge({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${b(o?void 0:this.disabled)}
        type=${b(o?void 0:this.type)}
        title=${this.title}
        name=${b(o?void 0:this.name)}
        value=${b(o?void 0:this.value)}
        href=${b(o?this.href:void 0)}
        target=${b(o?this.target:void 0)}
        download=${b(o?this.download:void 0)}
        rel=${b(o&&this.rel?this.rel:void 0)}
        role=${b(o?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?st`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?st`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${t}>
    `}};p.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};p.css=[Ve,je,He];c([Zt(".button")],p.prototype,"button",2);c([Zt("slot:not([name])")],p.prototype,"labelSlot",2);c([bt()],p.prototype,"invalid",2);c([bt()],p.prototype,"isIconButton",2);c([d()],p.prototype,"title",2);c([d({reflect:!0})],p.prototype,"variant",2);c([d({reflect:!0})],p.prototype,"appearance",2);c([d({reflect:!0})],p.prototype,"size",2);c([d({attribute:"with-caret",type:Boolean,reflect:!0})],p.prototype,"withCaret",2);c([d({type:Boolean})],p.prototype,"disabled",2);c([d({type:Boolean,reflect:!0})],p.prototype,"loading",2);c([d({type:Boolean,reflect:!0})],p.prototype,"pill",2);c([d()],p.prototype,"type",2);c([d({reflect:!0})],p.prototype,"name",2);c([d({reflect:!0})],p.prototype,"value",2);c([d({reflect:!0})],p.prototype,"href",2);c([d()],p.prototype,"target",2);c([d()],p.prototype,"rel",2);c([d()],p.prototype,"download",2);c([d({attribute:"formaction"})],p.prototype,"formAction",2);c([d({attribute:"formenctype"})],p.prototype,"formEnctype",2);c([d({attribute:"formmethod"})],p.prototype,"formMethod",2);c([d({attribute:"formnovalidate",type:Boolean})],p.prototype,"formNoValidate",2);c([d({attribute:"formtarget"})],p.prototype,"formTarget",2);c([yt("disabled",{waitUntilFirstUpdate:!0})],p.prototype,"handleDisabledChange",1);p=c([gt("wa-button")],p);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Ye=U`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-dasharray: 75, 100;
    stroke-dashoffset: -5;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ht=class extends O{constructor(){super(...arguments),this.localize=new Bt(this)}render(){return J`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};ht.css=Ye;ht=c([gt("wa-spinner")],ht);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Qe=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var to=U`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    height: 1em;
    overflow: visible;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eo=(o,t)=>(o==null?void 0:o._$litType$)!==void 0;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var oo=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},P=Symbol(),j=Symbol(),it,at=new Map,w=class extends O{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(o,t)=>{var r;let e;if(t!=null&&t.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=J`<svg part="svg">
        <use part="use" href="${o}"></use>
      </svg>`,await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(s,this),this.svg}try{if(e=await fetch(o,{mode:"cors"}),!e.ok)return e.status===410?P:j}catch{return j}try{const s=document.createElement("div");s.innerHTML=await e.text();const i=s.firstElementChild;if(((r=i==null?void 0:i.tagName)==null?void 0:r.toLowerCase())!=="svg")return P;it||(it=new DOMParser);const n=it.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):P}catch{return P}}}connectedCallback(){super.connectedCallback(),ce(this)}firstUpdated(o){super.firstUpdated(o),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),de(this)}getIconSource(){const o=Q(this.library),t=this.family||he();return this.name&&o?{url:o.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var i;const{url:o,fromLibrary:t}=this.getIconSource(),e=t?Q(this.library):void 0;if(!o){this.svg=null;return}let r=at.get(o);r||(r=this.resolveIcon(o,e),at.set(o,r));const s=await r;if(s===j&&at.delete(o),o===this.getIconSource().url){if(eo(s)){this.svg=s;return}switch(s){case j:case P:this.svg=null,this.dispatchEvent(new oo);break;default:this.svg=s.cloneNode(!0),(i=e==null?void 0:e.mutator)==null||i.call(e,this.svg,this),this.dispatchEvent(new Qe)}}}updated(o){var r,s;super.updated(o);const t=Q(this.library),e=(r=this.shadowRoot)==null?void 0:r.querySelector("svg");e&&((s=t==null?void 0:t.mutator)==null||s.call(t,e,this))}render(){return this.hasUpdated?this.svg:J`<svg part="svg" width="16" height="16"></svg>`}};w.css=to;c([bt()],w.prototype,"svg",2);c([d({reflect:!0})],w.prototype,"name",2);c([d({reflect:!0})],w.prototype,"family",2);c([d({reflect:!0})],w.prototype,"variant",2);c([d({attribute:"auto-width",type:Boolean,reflect:!0})],w.prototype,"autoWidth",2);c([d({attribute:"swap-opacity",type:Boolean,reflect:!0})],w.prototype,"swapOpacity",2);c([d()],w.prototype,"src",2);c([d()],w.prototype,"label",2);c([d({reflect:!0})],w.prototype,"library",2);c([yt("label")],w.prototype,"handleLabelChange",1);c([yt(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],w.prototype,"setIcon",1);w=c([gt("wa-icon")],w);export{ro as g,$t as s};
