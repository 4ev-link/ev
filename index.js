const C='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',L=4,H={'Access-Control-Allow-Origin':'*'}
const r=()=>[...Array(L)].map(()=>C[Math.random()*C.length|0]).join('')
export default{async fetch(q,e){
if(q.method==='OPTIONS')return new Response(null,{headers:{...H,'Access-Control-Allow-Methods':'POST','Access-Control-Allow-Headers':'Content-Type'}})
const u=new URL(q.url),p=u.pathname.slice(1)
if(q.method==='POST'){try{let{url:t}=await q.json();new URL(t);let s;do s=r();while(await e.EV.get(s)!=null);await e.EV.put(s,t);const d={slug:s,target:t,shortUrl:`${u.origin}/${s}`};return new Response(JSON.stringify(d),{headers:{'Content-Type':'application/json',...H}})}catch(e){return new Response('Invalid URL',{status:400,headers:H})}}
if(p){const t=await e.EV.get(p);if(t)return Response.redirect(t,302)}
return new Response('Not Found',{status:404})
}}
