import{d as y,r as b,b as t,c as n,n as r,F as x,a9 as k,f as d,a0 as g,W as C,D as I,t as T,Y as h,l as j}from"./entry.accfc75e.js";const w={class:"code-group-tabs"},$=["onClick"],B=y({__name:"CodeGroupTabs",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(s,{emit:p}){const a={npm:"logos:npm",yarn:"vscode-icons:file-type-yarn",pnpm:"vscode-icons:file-type-light-pnpm",mdc:"mdi:language-markdown",vue:"vscode-icons:file-type-vue",nuxt:"vscode-icons:file-type-nuxt",node:"vscode-icons:file-type-node",html:"vscode-icons:file-type-html",css:"vscode-icons:file-type-css",js:"vscode-icons:file-type-js-official",javascript:"vscode-icons:file-type-js-official",ts:"vscode-icons:file-type-typescript-official",typescript:"vscode-icons:file-type-typescript-official"},l=b(),u=(e,i)=>{p("update:activeTabIndex",i)},f=e=>Object.keys(a).includes(e.toLowerCase()),_=e=>a[e.toLowerCase()];return(e,i)=>{const m=h;return t(),n("div",w,[s.tabs?(t(),n("div",{key:0,ref_key:"tabsRef",ref:l,class:r(["tabs",[s.tabs.length===2?"two-tabs":""]])},[(t(!0),n(x,null,k(s.tabs,({label:o},c)=>(t(),n("button",{key:`${c}${o}`,class:r([s.activeTabIndex===c?"active":"inactive"]),onClick:v=>u(v,c)},[f(o)?(t(),C(m,{key:0,name:_(o)},null,8,["name"])):d("",!0),I(" "+T(o),1)],10,$))),128))],2)):d("",!0),g(e.$slots,"footer",{},void 0,!0)])}}});const N=j(B,[["__scopeId","data-v-82b4fbe8"]]);export{N as default};
