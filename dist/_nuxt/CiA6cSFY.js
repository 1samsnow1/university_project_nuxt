import{_ as x}from"./BrMcl280.js";import{_ as f}from"./CjB_daqQ.js";import{t as k}from"./CdOW-PiK.js";import{_ as b,u as S,r as h,A as L,o as a,c as d,a as l,b as g,S as c,p as s,F as T,n as M,y as v,w as B,d as C,t as R,T as $}from"./DUBKg3g8.js";import{u as r}from"./BYnjSPjX.js";const z={class:"w-full pageHeight flex justify-end relative"},q={id:"panelMenu",class:"w-[300px] shortHoverTransition absolute top-0 right-0 z-10 h-svh bg-gray-900 text-gray-100"},H={__name:"admin",setup(N){let _=[{name:"خبرها",nameRoute:"/admin/panel/news",panel_id:"1"},{name:"نمونه کارها",nameRoute:"/admin/panel/products",panel_id:"1"},{name:"اعضا",nameRoute:"/admin/panel/members",panel_id:"1"},{name:"درباره ما",nameRoute:"/admin/panel/about",panel_id:"2"}];const m=S(),y=()=>{window.innerWidth<883&&(document.querySelector("#panelMenu").style.width="0px",e.value=!1)};let e=h(!0);setTimeout(()=>{window.innerWidth<883&&(e.value=!1,document.querySelector("#panelMenu").style.width="0px")},20);const p=()=>{e.value?(document.querySelector("#panelMenu").style.width="0px",e.value=!1):(document.querySelector("#panelMenu").style.width="240px",e.value=!0)};let u=h(!1);const w=async()=>{try{u.value=!0;const o=await $fetch("https://resume.bargh-saman.ir/api/logout",{method:"GET",headers:{Authorization:`Bearer ${r("userToken").value}`}});let t=r("userToken"),i=r("adminLoginStatus");t.value=null,i.value=null,m.push("/")}catch(o){console.log(o)}finally{u.value=!1}};return L(()=>{r("adminLoginStatus").value!=="logedIn"&&m.push("/admin")}),(o,t)=>{const i=x;return a(),d("section",z,[l("button",{onClick:t[0]||(t[0]=n=>p()),class:"z-10 absolute top-2 right-4"},[g(f)]),l("div",q,[l("button",{onClick:t[1]||(t[1]=n=>p()),class:c([s(e)?"block":"hidden","z-50 absolute top-2 right-2"])},[g(f)],2),l("ul",{class:c([s(e)?"overflow-y-scroll darkScrollBar":"overflow-hidden","w-full h-full flex flex-col justify-around items-center overflow-hidden"])},[(a(!0),d(T,null,M(s(_),n=>(a(),v(i,{onClick:y,key:n.name,class:"w-full py-6 text-center cursor-pointer lg:hover:font-bold lg:hover:bg-gray-700",to:n.nameRoute},{default:B(()=>[C(R(n.name),1)]),_:2},1032,["to"]))),128)),s(u)?(a(),v(k,{key:0})):(a(),d("li",{key:1,onClick:w,class:"text-red-600 cursor-pointer lg:hover:font-bold"},"خروج"))],2)]),l("div",{class:c([s(e)?"contentWidth":"w-full","shortHoverTransition h-svh bg-gray-400 flex justify-center items-center overflow-y-scroll panelScrollBar"])},[$(o.$slots,"default",{},void 0,!0)],2)])}}},F=b(H,[["__scopeId","data-v-763ecbde"]]);export{F as default};
