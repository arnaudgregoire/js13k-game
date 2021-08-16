(()=>{"use strict";function e([e,...t],...n){return n.reduce(((e,n)=>e.concat(n,t.shift())),[e]).filter((e=>null!=e)).join("")}const t={ABSINTHE:{keyCode:65,key:"A",color:"#76b583",name:"Absinthe"},BACARDI:{keyCode:66,key:"B",color:"#9D702E",name:"Bacardi"},Campari:{keyCode:67,key:"C",color:"#B60000",name:"Campari"}},n={timer:"00:00",gold:0,customers:[],sentence:"'a green Zoltan please, im thirsty'",ingredients:[],decorations:[],recipe:{title:"'The Green Zoltan'",content:"2x Acanthe, 2x Qarus, 1x Fireweed"}},{attach:o,connect:i,dispatch:c}=function(e){let t=e();const n=new Map,o=new Map;function i(){for(const[e,i]of n){const n=i();if(n!==o.get(e)){o.set(e,n),e.innerHTML=n;const i=new CustomEvent("render",{detail:t});e.dispatchEvent(i)}}}return{attach(e,t){n.set(t,e),i()},connect:e=>(...n)=>e(t,...n),dispatch(n,...o){t=e(t,n,o),i()}}}((function(e,o,i){console.group(o),console.log("Previous State",e),console.log("Action Arguments",i);const c=function(e=n,o,i){switch(o){case"CHANGE_TIMER":const[n]=i;return Object.assign({},e,{timer:n});case"CHANGE_GOLD":{const[t]=i;return Object.assign({},e,{gold:t})}case"ADD_CUSTOMER":{const{customers:t}=e,[n]=i;return Object.assign({},e,{customers:[...t,n]})}case"REMOVE_CUSTOMER":{const{customers:t}=e,[n]=i;return Object.assign({},e,{customers:[...t.slice(0,n),...t.slice(n+1)]})}case"KEY_PRESSED":{const{ingredients:n}=e,[o]=i;let c;if(Object.keys(t).forEach((e=>{o==t[e].keyCode&&(c=t[e])})),c)return Object.assign({},e,{ingredients:[...n,c]})}default:return e}}(e,o,i);return console.log("Next State",c),console.groupEnd(),c}));function s(t,n){return e`
        <li>
            <p>name:${t.name}</p>
            <p>type:${t.type}</p>
            <p>index:${n}</p>
        </li>
    `}const r=i((function(t){const{customers:n}=t;return e`
        <div>
            <h2>Customers</h2>
            <ul>
                ${n.map(s)}
            </ul>
        </div>
    `})),l=i((function(t){const{gold:n}=t;return e`
        <p>Gold :${n}</p>
    `})),a=i((function(t){const{timer:n}=t;return e`
        <p>Time :${n}</p>
    `})),u=i((function(t){const{recipe:n}=t;return e`
        <div>
            <p>title:${n.title}</p>
            <p>content:${n.content}</p>
        </div>
    `}));function d(t,n){return e`
        <li>
            <p style="color:${t.color}">${t.name}</p>
        </li>
    `}const y=i((function(t){const{ingredients:n}=t;return e`
        <ul style='display:flex; list-style-type:none'>
            ${n.map(d)}
        </ul>
        <canvas id="cocktail" style="height:600px; border: 1px solid; image-rendering: crisp-edges;"></canvas>
    `})),p=i((function(t){const{recipe:n,sentence:o,cocktail:i}=t;return e`
        <div style='display:flex; justify-content:space-between;flex-flow:column;'>
            <h3>${o}</h3>
            ${y(i)}
            ${u(n)}
        </div>
    `}));function f(n,o){return e`
        <li>
            <p>${t[n].key}: ${t[n].name} </p>
        </li>
    `}function m(){return e`
        <div style='height:100%; font-family:Verdana; color:white; background-color:black'>
            <div style='display:flex; justify-content:space-even;'>
                ${a()}
                ${l()}
            </div>
            <div style='display:flex; justify-content:space-between; height:90%;'>
                ${r()}
                ${p()}
                ${e`
    <div>
        <h2>Controls</h2>
        <ul>
            ${Object.keys(t).map(f)}
        </ul>
    </div>
    `}
            </div>
        </div>
    `}function g(e,t,n){return{x:Math.floor(e.x+(t.x-e.x)*n),y:Math.floor(e.y+(t.y-e.y)*n)}}window.onload=()=>{var e=document.querySelector("#root");e.addEventListener("render",(function(e){const{ingredients:t,decorations:n}=e.detail;t&&function(e,t){let n=document.getElementById("cocktail");if(n){let t=n.getContext("2d"),o=new Image;const i=100,c=50,s={x:100,y:50},r={x:0,y:0},l={x:76,y:0},a={x:38,y:38};o.onload=()=>{t.drawImage(o,s.x,s.y),e.forEach(((e,n)=>{t.fillStyle=e.color,t.beginPath();let o=g(a,r,Math.min(1,.1*n)),u=g(a,l,Math.min(1,.1*n)),d=g(a,r,Math.min(1,.1*(n+1))),y=g(a,l,Math.min(1,.1*(n+1)));t.moveTo(o.x+s.x,o.y+s.y),t.lineTo(d.x+s.x,d.y+s.y),t.lineTo(y.x+i,y.y+c),t.lineTo(u.x+i,u.y+c),t.fill()}))},o.src="assets/cocktail.png"}}(t)})),o(m,e)},window.onkeypress=e=>{c("KEY_PRESSED",e.keyCode)}})();