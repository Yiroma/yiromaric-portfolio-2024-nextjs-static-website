(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{6200:(e,t,s)=>{Promise.resolve().then(s.bind(s,9730))},4976:(e,t,s)=>{"use strict";function r(e){let{src:t,width:s,quality:r}=e;return"https://yiromaric.fr".concat(t,"?w=").concat(s,"&q=").concat(r||75)}s.r(t),s.d(t,{default:()=>r})},9730:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>D});var r=s(5155),a=s(2115),i=s(7396),l=s(3761);class o{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let n={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},c=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},m=async(e,t,s={})=>{let r=await fetch(n.origin+e,{method:"POST",headers:s,body:t}),a=await r.text(),i=new o(r.status,a);if(r.ok)return i;throw i},d=(e,t,s)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||"string"!=typeof s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},h=e=>e.webdriver||!e.languages||0===e.languages.length,p=()=>new o(451,"Unavailable For Headless Browser"),u=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},g=e=>!e.list?.length||!e.watchVariable,b=(e,t)=>e instanceof FormData?e.get(t):e[t],f=(e,t)=>{if(g(e))return!1;u(e.list,e.watchVariable);let s=b(t,e.watchVariable);return"string"==typeof s&&e.list.includes(s)},x=()=>new o(403,"Forbidden"),y=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},w=async(e,t,s)=>{let r=Number(await s.get(e)||0);return t-Date.now()+r},v=async(e,t,s)=>{if(!t.throttle||!s)return!1;y(t.throttle,t.id);let r=t.id||e;return await w(r,t.throttle,s)>0||(await s.set(r,Date.now().toString()),!1)},j=()=>new o(429,"Too Many Requests"),k=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},_=e=>"string"==typeof e?document.querySelector(e):e,N={sendForm:async(e,t,s,r)=>{let a=c(r),i=a.publicKey||n.publicKey,l=a.blockHeadless||n.blockHeadless,o=n.storageProvider||a.storageProvider,u={...n.blockList,...a.blockList},g={...n.limitRate,...a.limitRate};if(l&&h(navigator))return Promise.reject(p());let b=_(s);d(i,e,t),k(b);let y=new FormData(b);return f(u,y)?Promise.reject(x()):await v(location.pathname,g,o)?Promise.reject(j()):(y.append("lib_version","4.4.1"),y.append("service_id",e),y.append("template_id",t),y.append("user_id",i),m("/api/v1.0/email/send-form",y))}};var T=s(5565);let P=[{id:1,desc:"t\xe9l\xe9phone",link:"tel:+33695386099",icon:"/icons/phone.svg"},{id:2,desc:"email",link:"mailto:yiromaric@gmail.com",icon:"/icons/email.svg"},{id:3,desc:"whatsapp",link:"https://wa.me/33695386099",icon:"/icons/whatsapp.svg"}],E=()=>(0,r.jsx)("div",{className:"w-full flex flex-row justify-center gap-8 md:p-8",children:P.map(e=>(0,r.jsx)("button",{className:"w-1/3 flex justify-center items-center p-4 rounded-lg ring-1 ring-black bg-black text-white font-semibold hover:bg-white hover:text-black",children:(0,r.jsx)(i.default,{href:e.link,children:(0,r.jsx)(T.default,{src:e.icon,alt:e.desc,width:64,height:64})})},e.id))});var L=s(2818);let D=()=>{let[e,t]=(0,a.useState)(!1),[s,o]=(0,a.useState)(!1),[n,c]=(0,a.useState)({user_message:"",user_email:"",acceptTerms:!1}),m=(0,a.useRef)(),d=e=>{let{name:t,value:s,type:r,checked:a}=e.target;c({...n,[t]:"checkbox"===r?a:s})};return(0,r.jsx)(l.P.div,{className:"h-full",initial:{y:"-200vh"},animate:{y:"0%"},transition:{duration:.6},children:(0,r.jsxs)("div",{className:"min-h-[calc(100vh-6rem)] flex flex-col items-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48",children:[(0,r.jsxs)("div",{className:"lg:w-1/2 flex flex-col lg:h-full items-center justify-center gap-8 text-4xl lg:text-6xl mt-12 mb-12",children:[(0,r.jsxs)("div",{children:["Bonjour".split("").map((e,t)=>(0,r.jsx)(l.P.span,{initial:{opacity:1},animate:{opacity:0},transition:{duration:3,repeat:1/0,delay:.1*t},children:e},t)),"\uD83D\uDE0A"]}),(0,r.jsx)("p",{className:"text-xl",children:"Discutons ensemble"}),(0,r.jsx)(E,{})]}),(0,r.jsxs)("form",{ref:m,onSubmit:e=>{e.preventDefault(),t(!1),o("");let{user_message:s,user_email:r,acceptTerms:a}=n;if(!s||!r||!a){o(s?r?"Vous devez accepter les mentions l\xe9gales.":"Le champ email est obligatoire.":"Le champ message est obligatoire.");return}N.sendForm(L.env.NEXT_PUBLIC_SERVICE_ID,L.env.NEXT_PUBLIC_TEMPLATE_ID,m.current,{publicKey:L.env.NEXT_PUBLIC_PUBLIC_KEY}).then(()=>{t(!0),m.current.reset()},e=>{o(!0),console.error(e)})},className:"lg:h-full lg:w-1/2 bg-sky-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-8 sm:p-10 md:p-14 lg:p-18 xl:p-24",children:[(0,r.jsx)("span",{children:"Bonjour Romaric,"}),(0,r.jsx)("textarea",{rows:6,name:"user_message",placeholder:"Ecrivez votre texte ici",value:n.user_message,onChange:d,className:"p-2 bg-white bg-opacity-40 rounded border-b-2 border-b-black outline-none resize-none"}),(0,r.jsx)("span",{children:"Votre adresse mail:"}),(0,r.jsx)("input",{type:"email",name:"user_email",placeholder:"votremail@exemple.com",value:n.user_email,onChange:d,className:"p-2 bg-white bg-opacity-40 rounded border-b-2 border-b-black outline-none"}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"checkbox",name:"acceptTerms",checked:n.acceptTerms,onChange:d})," ","J'accepte les ",(0,r.jsx)(i.default,{href:"/mentions-legales",className:"font-medium text-sky-700 underline",children:"conditions d'utilisations"})]}),(0,r.jsx)("button",{type:"submit",className:"bg-purple-200 rounded font-semibold text-gray-600 p-4",children:"Envoyer"}),e&&(0,r.jsx)("span",{className:"text-green-600 font-semibold",children:"Le message est bien envoy\xe9 !"}),s&&(0,r.jsx)("span",{className:"text-red-700 font-semibold",children:s})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[158,565,441,517,358],()=>t(6200)),_N_E=e.O()}]);