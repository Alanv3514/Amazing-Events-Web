import{u as w,s as C,c as p,r as E,o as l,a as n,b as r,t as i,d as s,e as m,f as e,F as d,g as h,w as f,v as D,h as V,_ as $,j,k as B,l as S}from"./index-138e7328.js";const M={class:"navbar navbar-expand-lg bg-body-light pt-5 pb-5 pe-5 ps-2"},N=["@submit"],T={class:"container-fluid"},F={class:"d-flex"},K={class:"nav-item me-3",style:{"list-style":"none"}},L=["id","value"],P={class:"container pb-5"},U={class:"row g-3",id:"cardC"},q={class:"d-flex justify-content-center flex-wrap"},R={class:"card h-100 m-4 m-md-0 m-lg-0","data-category":"{{event.category}}"},z=["src"],A={class:"card-body d-flex flex-column align-items-center justify-content-between"},G={class:"card-title"},H={class:"card-text"},I={class:"d-flex w-75 gap-3 justify-content-between"},J=e("p",null,null,-1),Y={__name:"Past",setup(O){const o=w(),{currentDate:v,bckEvents:Q,categorias:b,allEvents:g,selectCategorias:x,apiEvents:W}=C(o),y=p(()=>g.value.filter(c=>c.date<v.value)),u=p(()=>{o.filtroDoble(x)});return(c,a)=>{const k=E("router-link");return l(),n(d,null,[r(i(s(u))+" ",1),m($,{bckpage:"./upcoming-events",nxtpage:"./contact"}),e("nav",M,[e("form",{class:"d-flex container-fluid",role:"search","@submit":s(u)},[e("div",T,[e("fieldset",F,[(l(!0),n(d,null,h(s(b),t=>(l(),n("li",K,[e("label",null,[f(e("input",{"onUpdate:modelValue":a[0]||(a[0]=_=>s(o).$state.selectCategorias=_),type:"checkbox",name:"category",id:t,class:"chkBoxes",value:t},null,8,L),[[j,s(o).$state.selectCategorias]]),r(" "+i(t),1)])]))),256))])]),f(e("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>c.texto=t),class:"form-control me-2 mb-2",type:"search",placeholder:"Search","aria-label":"Search",id:"search-input",onKeydown:a[2]||(a[2]=V(B(()=>{},["prevent"]),["enter"])),ref:"search-form"},null,544),[[D,c.texto]])],8,N)]),e("div",P,[e("div",U,[e("div",q,[(l(!0),n(d,null,h(s(y),t=>(l(),n("div",{key:t.id,class:"col-12 col-md-6 col-lg-3 m-2"},[e("div",R,[e("img",{src:t.image,height:"180",class:"m-2",alt:""},null,8,z),e("div",A,[e("h3",G,i(t.name),1),e("p",H,i(t.description),1),e("div",I,[J,e("p",null,"Price: $"+i(t.price),1),m(k,{to:{path:"/details",query:{id:t._id}},class:"btn btn-primary",onClick:_=>s(o).setCurrentEvent(t._id)},{default:S(()=>[r("Details")]),_:2},1032,["to","onClick"])])])])]))),128))])])])],64)}}};export{Y as default};
