var G=Object.defineProperty,F=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var k=(e,a,t)=>a in e?G(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))j.call(a,t)&&k(e,t,a[t]);if(S)for(var t of S(a))U.call(a,t)&&k(e,t,a[t]);return e},p=(e,a)=>F(e,V(a));import{j as o,a as s,b as N,r as d,u as E,F as C,f as H,c as B,d as q,e as z,g as v,h as Y,i as W,k as K,l as J,m as Q,R as X,n as Z,P as ee,t as se}from"./vendor.f3d423fa.js";const ae=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};ae();const y=({label:e,value:a})=>o("div",{className:"game-information-block",children:[s("div",{className:"game-information-block-label",children:e}),s("div",{className:"game-information-block-value",children:a})]}),te=({player:e,game:a})=>o("div",{className:"game-information",children:[s("div",{className:"logo",children:a.name}),s(y,{label:"Score",value:e.globalScore}),s(y,{label:"Temps",value:"00:00:00"})]});const P="CREATE_OR_GET_PLAYER",A="ADD_SCORE",M="REMOVE_SCORE",ie="SAVE_PLAYER",I="ADD_MISSION_ACHIEVED",ne=(e,a)=>t=>{N({method:"post",url:"http://localhost:5000/api/player/",data:{pseudo:e,gameId:a},withCredentials:!0}).then(i=>{t({type:P,payload:i.data})}).catch(i=>console.log(i))},oe=e=>a=>{a({type:A,payload:e})},re=e=>a=>{a({type:M,payload:e})},ce=e=>a=>{a({type:I,payload:e})},le=(e,a)=>t=>{N({method:"put",url:`http://localhost:5000/api/player/${a.id}`,data:{gameId:e,globalScore:a.globalScore,step:a.step,missionsAchieved:a.missionsAchieved},withCredentials:!0}).then(i=>{t({type:ie,payload:i.data})}).catch(i=>console.log(i))},de=({game:e,player:a})=>{const[t,i]=d.exports.useState(a.name||""),n=E(),r=l=>{l.preventDefault(),n(ne(t,e._id))};return o("div",{className:"welcome-container",children:[o("div",{className:"title",children:["Bienvenue dans ",e.name]}),s("div",{className:"description",children:e.description}),o("div",{className:"pseudo-form",children:[o("div",{className:"pseudo-label",children:["Entrez votre pseudo pour commencer \xE0 jouer",s("div",{className:"pseudo-resume-game",children:"( ou pour reprendre une partie )"})]}),s("input",{className:"pseudo-input",type:"text",value:t,onChange:l=>i(l.target.value),placeholder:"Entrez votre pseudo"}),s("button",{className:"next-button pseudo-submit",onClick:r,children:"Commencer"})]})]})};const me=({socialNetworkName:e})=>s("div",{className:"navbar",children:s("div",{className:"social-network-name",children:e})}),ue=({coverPicture:e})=>s("div",{className:"account-cover",children:s("img",{className:"account-cover-picture",src:`http://localhost:5000/img/${e}`,alt:"cover-account-image"})}),pe=({accountPicture:e})=>s("div",{className:"account-picture",children:s("div",{className:"account-picture-wrapper",children:s("img",{className:"account-picture-img",src:`http://localhost:5000/img/${e}`,alt:"account-picture"})})}),h=({icon:e,value:a})=>o("div",{className:"personal-information",children:[s(C,{className:"personal-information-icon",icon:e}),s("div",{className:"personal-value",children:a})]}),he=({data:e})=>{const a=`N\xE9e le ${e.birthday}`,t=`Habite \xE0 ${e.location}`,i=`${e.job}`,n=`Avec ${e.firstNamePartner} ${e.lastNamePartner}`;return s("div",{className:"account-information",children:o("div",{className:"personal-informations",children:[s(h,{value:a,icon:H}),s(h,{value:t,icon:B}),s(h,{value:i,icon:q}),s(h,{value:n,icon:z})]})})},ve=({partnerName:e})=>o("div",{children:[s("span",{children:"avec"})," ",s("span",{className:"partnerName",children:e})]}),Ne=({picturePath:e})=>{const a=`http://localhost:5000/img/${e}`;return s("div",{className:"post-img-container",children:s("img",{className:"post-img",alt:"post-img",src:a})})},fe=({post:e,partnerName:a})=>{const t=e.mentionPartner?s(ve,{partnerName:a}):"",i=e.picturePath!==""?s(Ne,{picturePath:e.picturePath}):"";return o("div",{className:"account-post",children:[o("div",{className:"post-header",children:[e.date,t]}),s("div",{className:"post-content",children:e.text}),i]})},Ee=({data:e})=>{const a=`${e.firstNamePartner} ${e.lastNamePartner}`,t=e.posts.map((i,n)=>s(fe,{post:i,partnerName:a},n));return s("div",{className:"social-network-posts",children:t})},be=({data:e})=>{const a=`${e.firstName} ${e.lastName}`;return s("div",{className:"account-page-container",children:s("div",{className:"account-page-wrapper",children:o("div",{className:"account-page",children:[s(ue,{coverPicture:e.coverPicture}),s(pe,{accountPicture:e.accountPicture}),s("div",{className:"account-name",children:a}),s(he,{data:e}),s(Ee,{data:e})]})})})},xe=({data:e})=>o("div",{className:"social-network-page",children:[s(me,{socialNetworkName:e.socialNetworkName}),s(be,{data:e})]});const ge=({data:e})=>{const a=`https://www.${e.socialNetworkName.toLowerCase()}.com/${e.firstName[0].toLowerCase()}.${e.lastName.toLowerCase()}`;return o("div",{className:"mission1-browser",children:[s("div",{className:"header"}),s("div",{className:"navigation-bar",children:a}),s(xe,{data:e})]})};const we=({userPassword:e,handleChange:a,handleSubmit:t,isInvalid:i=!0})=>s("div",{className:"mission1-check-password",children:o("form",{className:"mission1-check-password-form",onSubmit:t,children:[s("label",{className:"label-check-password",children:"Mot de passe"}),s("input",{className:"input-check-password",type:"text",value:e,placeholder:"Entrer le mot de passe",onChange:a}),i?s("span",{className:"invalid-message",children:"Mot de passe incorrect"}):"",s("button",{className:"button-submit-check-password",type:"submit",children:"Valider"})]})}),Se=({mission:e,handleChangePassword:a,userPassword:t,handleSubmitPasswordCheck:i,isUserPasswordInvalid:n})=>o("div",{className:"mission1-content",children:[s(ge,{data:e.specificData.dataFakeSocialNetwork}),s(we,{handleChange:a,userPassword:t,isInvalid:n,handleSubmit:i})]});const ke=({pseudo:e,handleclick:a})=>{const t=`Tu as trouv\xE9 le mot de passe de ${e}`;return o("div",{className:"mission1-success-container",children:[s("div",{className:"title",children:"F\xE9licitation !!!!"}),s("div",{className:"subtitle",children:t}),s("button",{className:"next-button show-explanation",onClick:a,children:`Voir les erreurs faites par ${e}`})]})};const ye=({pseudo:e,handleclick:a})=>o("div",{className:"mission-explanation",children:[s("h1",{className:"title",children:" Explication"}),s("h2",{className:"subtitle",children:`Les erreurs de ${e}`}),o("p",{children:["Comme vous l'avez devin\xE9, la victime a utilis\xE9 des donn\xE9es personnelles, facilement trouvables sur les r\xE9seaux sociaux. ",s("br",{}),s("br",{}),"La seconde erreur a \xE9t\xE9 d'avoir utilis\xE9 un mot de passe trop simple et donc trop faible. En effet, un hacker va pouvoir avec les outils qu'il a sa disposition et sans m\xEAme se renseigner sur vous, trouver ce mot de passe, car les mots utilis\xE9s sont fr\xE9quemment utilis\xE9s dans d'autres mots de passe."]}),s("h2",{className:"subtitle",children:"Cr\xE9er un mot de passe fort"}),"Vos mots de passe doivent respecter les r\xE8gles suivantes :",o("ul",{className:"rules-password-explanation",children:[o("li",{children:["Un mot de passe doit contenir au minimum ",s("b",{children:"12 caract\xE8res"})]}),o("li",{children:["Avec ",s("b",{children:"4 types de caract\xE8res diff\xE9rents "})," (des minuscules, des majuscules, des chiffres et des caract\xE8res sp\xE9ciaux)"]}),o("li",{children:["Il ne doit rien dire sur vous (",s("b",{children:"pas de donn\xE9es personnelles"}),")"]}),o("li",{children:[s("b",{children:"Un compte = un nouveaux mot de passe "}),"(afin d'\xE9viter d'\xEAtre pirater sur tous vos comptes)"]}),o("li",{children:["Ne jamais \xE9crire vos mot de passe dans ",s("b",{children:"un espace non s\xE9curis\xE9"})," (smartphone, post-it, fichier texte, etc.)",s("ul",{children:s("li",{children:"Il est conseiller d'utilis\xE9 un gestionnaire de mot de passe comme keepass, lastpass, bitwarden"})})]})]}),s("button",{className:"next-button",onClick:a,children:"Mission suivante"})]}),Ce=e=>({mission:a,handleClick:t})=>s("div",{className:"mission-intro",children:o("div",{className:"mission-intro-content",children:[s("div",{className:"mission-name",children:a.name}),s("div",{className:"mission-description",children:a.description}),s(e,{mission:a}),s("button",{className:"next-button",onClick:t,children:"Pr\xEAt !"})]})}),Pe=()=>s("div",{className:"mission1-rules",children:s("p",{children:"5 000 points vont vous \xEAtre attribu\xE9s d\xE8s le d\xE9part de la mission. \xC0 chaque tentative rat\xE9e, vous perdrez des points -250 points. (score min 500 pts)"})}),Ae=Ce(Pe),Me=({missionID:e,handleClickForNextMission:a})=>{const[t,i]=d.exports.useState(1),[n,r]=d.exports.useState({}),l=v(c=>c.missionReducer),[b,R]=d.exports.useState(""),[D,x]=d.exports.useState(!1),f=E();d.exports.useEffect(()=>{const c=l.find(T=>T._id===e);r(c)},[e]);const g=()=>{const c=t+1;switch(i(c),c){case 2:f(oe(5e3));break}},O=c=>{R(c.target.value)},L=c=>{c.preventDefault(),b!==n.specificData.passToFind?(x(!0),f(re(250))):(f(ce(n._id)),x(!1),i(3))};let m="";const w=n.specificData&&n.specificData.dataFakeSocialNetwork.firstName;switch(t){case 1:m=s(Ae,{mission:n,handleClick:g});break;case 2:m=s(Se,{userPassword:b,handleChangePassword:O,isUserPasswordInvalid:D,handleSubmitPasswordCheck:L,mission:n});break;case 3:m=s(ke,{pseudo:w,handleclick:g});break;case 4:m=s(ye,{pseudo:w,handleclick:a});break}return s("div",{className:"mission1-container",children:m})},Ie=({player:e,game:a,handleClickForNextMission:t})=>{let i="";switch(e.step){case 1:i=s(de,{game:a,player:e});break;case 2:i=s(Me,{missionID:a.missions[0],handleClickForNextMission:t});break}return s("div",{className:"mission-container",children:i})};const _e=({mission:e,isActive:a=!1,isAchieved:t=!1})=>{const i=a?"":"is-disabled",n=t?s(C,{className:"mission-achieved-icon",icon:Y}):"";return o("div",{className:`mission-information ${i}`,children:[o("div",{className:"mission-information-content",children:[s("div",{className:"mission-name",children:e.name}),s("div",{className:"mission-description",children:e.description})]}),n]})},$e=({player:e})=>{const t=v(i=>i.missionReducer).map(i=>{const n=e.missionsAchieved.indexOf(i._id)!==-1;return s(_e,{mission:i,isAchieved:n},i._id)});return o("div",{className:"missions-informations",children:[s("div",{className:"title",children:"Vos missions"}),s("div",{className:"mission-list",children:t})]})},_="GET_GAME_INFO",Re=()=>e=>{N({method:"get",url:"http://localhost:5000/api/game/Hacky",withCredentials:!0}).then(a=>{e({type:_,payload:a.data})}).catch(a=>console.log(a))},$="GET_MISSIONS",De=e=>a=>{N({method:"get",url:`http://localhost:5000/api/mission/gameMissions/${e}`,withCredentials:!0}).then(t=>{a({type:$,payload:t.data})}).catch(t=>console.log(t))},Oe=()=>{const e=E(),a=v(n=>n.gameReducer),t=v(n=>n.playerReducer);return d.exports.useEffect(()=>{e(Re())},[]),d.exports.useEffect(()=>{a._id&&e(De(a._id))},[a]),o("div",{className:"game-controller",children:[s(te,{game:a,player:t}),s(Ie,{game:a,player:t,handleClickForNextMission:()=>{const n=p(u({},t),{step:t.step+1});e(le(a._id,n))}}),s($e,{player:t})]})};function Le(){return s("div",{className:"App",children:s(Oe,{})})}const Te={name:""};var Ge=(e=Te,a)=>{switch(a.type){case _:return a.payload}return e};const Fe=[];var Ve=(e=Fe,a)=>{switch(a.type){case $:return a.payload}return e};const je={name:"",step:1,globalScore:0,missionsAchieved:[]};var Ue=(e=je,a)=>{switch(a.type){case P:return a.payload;case A:return p(u({},e),{globalScore:e.globalScore+a.payload});case M:let t=e.globalScore-a.payload;return t<=500&&(t=500),p(u({},e),{globalScore:t});case I:const i=u({},e);return i.missionsAchieved.push(a.payload),i}return e},He=W({gameReducer:Ge,missionReducer:Ve,playerReducer:Ue});const Be=K(He,J(Q(se)));X.render(s(Z.StrictMode,{children:s(ee,{store:Be,children:s(Le,{})})}),document.getElementById("root"));
