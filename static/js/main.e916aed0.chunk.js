(this.webpackJsonpwhisky=this.webpackJsonpwhisky||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/placeholder.505dce53.jpeg"},28:function(e,t,a){e.exports=a(45)},33:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),r=a.n(c),o=(a(33),a(3)),u=a.n(o),s=a(5),i=a(1),m=a(10);a(46),a(35),a(39);m.initializeApp({apiKey:"AIzaSyBJdh5HQXypjt8x7FNyn3fMSw_AJO3Vpcs",authDomain:"whisky-c2f56.firebaseapp.com",databaseURL:"https://whisky-c2f56.firebaseio.com",projectId:"whisky-c2f56",storageBucket:"whisky-c2f56.appspot.com",messagingSenderId:"166359406379",appId:"1:166359406379:web:baa8f516ec1187e81fd76e"});var d=m.storage(),p=m.firestore(),g=m.firestore.FieldValue.serverTimestamp,f=(new m.auth.GoogleAuthProvider,new m.auth.GoogleAuthProvider),E=m.auth(),h=function(){E.signInWithPopup(f).then((function(){console.log("logged in")})).catch((function(e){console.log(e.message)}))},b=Object(n.createContext)(),y=function(e){var t=e.children,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],o=c[1];return Object(n.useEffect)((function(){E.onAuthStateChanged(function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n,l,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(a=t.displayName,n=t.email,l=t.photoURL,c=t.uid,o({displayName:a,email:n,photoURL:l,uid:c}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),l.a.createElement(b.Provider,{value:{user:r}},t)},j=a(12),O=a(2),v=a(14),k=Object(n.createContext)(),S=function(e,t){return Object(v.a)(Object(v.a)({},e),t)},_={id:localStorage.getItem("id"),whisky:"",searchResults:"",manual:!1};function N(e){var t=Object(n.useReducer)(S,_),a=Object(i.a)(t,2),c=a[0],r=a[1];return l.a.createElement(k.Provider,{value:{state:c,update:r}},e.children)}var x=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(!0),o=Object(i.a)(r,2),u=o[0],s=o[1],m=Object(n.useState)([]),d=Object(i.a)(m,2),g=d[0],f=d[1],E=Object(n.useState)([]),h=Object(i.a)(E,2),b=h[0],y=h[1],j=Object(n.useState)([]),O=Object(i.a)(j,2),k=O[0],S=O[1],_=Object(n.useState)([]),N=Object(i.a)(_,2),x=N[0],C=N[1];return Object(n.useEffect)((function(){var t=p.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[],a=[],n=[],l=[],r=[];e.forEach((function(e){a.push(e.data().title),n.push(e.data().polet_destilery),l.push(e.data().polet_country),r.push(e.data().polet_region),t.push(Object(v.a)(Object(v.a)({},e.data()),{},{id:e.id}))})),c(t),s(!1),f(a),y(n),S(l),C(r)}));return function(){return t()}}),[e]),{docs:l,loading:u,titles:g,distilleries:b,countries:k,regions:x}},C=function(e){var t=e.isSelected,a=e.setRating;e.click;return l.a.createElement("li",{className:t?"selected":null,onClick:a},l.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 16 15",className:"star"},l.a.createElement("path",{d:"M8.5,0.3l2,4.1c0.1,0.2,0.2,0.3,0.4,0.3l4.6,0.7c0.4,0.1,0.6,0.6,0.3,0.9l-3.3,3.2c-0.1,0.1-0.2,0.3-0.2,0.5l0.8,4.5 c0.1,0.4-0.4,0.8-0.8,0.6l-4.1-2.1c-0.2-0.1-0.3-0.1-0.5,0l-4.1,2.1c-0.4,0.2-0.9-0.1-0.8-0.6l0.8-4.5c0-0.2,0-0.4-0.2-0.5L0.2,6.2 C-0.2,5.9,0,5.4,0.5,5.3L5,4.7c0.2,0,0.3-0.1,0.4-0.3l2-4.1C7.7-0.1,8.3-0.1,8.5,0.3z"})))};var w=function(e){var t=e.rating,a=e.setRating;return l.a.createElement("ul",{className:"stars"},function(){for(var e=[],n=function(n){e.push(l.a.createElement(C,{isSelected:t>n,setRating:function(){return a(n+1)},key:n}))},c=0;c<10;c++)n(c);return e}())},L=a(18),I=a.n(L),D=function(e){var t=e.data;return["localhost","127.0.0.1"].includes(window.location.hostname)?l.a.createElement("img",{src:I.a,alt:t.id}):l.a.createElement("img",{src:t,alt:t.id})},T=function(e){var t=e.data,a=e.setData,c=e.rating,r=e.setRating,o=e.search,u=Object(n.useState)(t.id),s=Object(i.a)(u,2),m=s[0],d=s[1],g=Object(n.useContext)(b).user.uid;return t.title.includes(o)?l.a.createElement("div",{className:"whiskyItem"},l.a.createElement("div",{className:"image",key:t.id,onClick:function(){localStorage.setItem("id",t.id),d(t.id),a(t)}},l.a.createElement(j.b,{to:"/whiskyType"},l.a.createElement(D,{data:t.url}))),l.a.createElement("h2",null,t.title),l.a.createElement("div",{className:"rating",onClick:function(){d(t.id)},data:t.id},l.a.createElement(w,{rating:c,setRating:function(e){r(e),p.collection(g).doc(m).update({star:e})}}))):l.a.createElement(l.a.Fragment,null)},F=function(e){e.data;var t=e.setData,a=(e.rating,e.setRating),c=e.search,r=Object(n.useContext)(b).user.uid,o=x(r),u=o.docs;return!1===o.loading?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"img-grid"},u&&u.map((function(e){return l.a.createElement(T,{name:e.title,key:e.id,id:e.id,data:e,setData:t,rating:e.star,setRating:a,search:c})}))))):l.a.createElement("p",{className:"loading"},"Laster ...")},V=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(null),o=Object(i.a)(r,2),m=o[0],f=o[1],E=Object(n.useState)(null),h=Object(i.a)(E,2),y=h[0],j=h[1],O=Object(n.useState)(null),v=Object(i.a)(O,2),k=v[0],S=v[1],_=Object(n.useContext)(b).user.uid;return console.log(_),Object(n.useEffect)((function(){var t=d.ref(e.name),a=p.collection(_);t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){f(e)}),Object(s.a)(u.a.mark((function e(){var n,l,c,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,l=g(),c=localStorage.getItem("title"),r=localStorage.getItem("rating"),o=localStorage.getItem("notes"),"","","","","","","","","","",a.add({url:n,createdAt:l,title:c,star:r,notes:o,polet_country:"",polet_descColour:"",polet_descOdour:"",polet_descTaste:"",polet_destilery:"",polet_name:"",polet_percentage:"",polet_price:"",polet_productID:"",polet_region:""}).then((function(e){S(e.id)})).catch((function(e){console.error("Error adding document: ",e)})),j(n);case 19:case"end":return e.stop()}}),e)}))))}),[e]),{progress:l,url:y,error:m,docId:k}},R=function(e){var t=e.file,a=e.setFile,c=e.setRating,r=V(t),o=r.url,u=r.progress;return Object(n.useEffect)((function(){o&&(a(null),c(null),document.querySelector("form").style.display="none",document.querySelector(".img-grid").style.display="grid",document.querySelector("#file-title").value="",document.querySelector("#file-notes").value="",document.querySelector(".custom-file-upload").innerHTML="Legg til bilde",document.querySelector(".thumbnail").innerHTML="")}),[o,a]),l.a.createElement("div",{className:"progress-bar",style:{width:u+"%"}})},q=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),o=Object(i.a)(r,2),u=o[0],s=o[1],m=["image/png","image/jpg","image/jpeg","image/heic"],d=Object(n.useState)(0),p=Object(i.a)(d,2),g=p[0],f=p[1],E=Object(n.useState)(""),h=Object(i.a)(E,2),b=h[0],y=h[1];var j=function(e){var t=e.currentTarget,a=t.name,n=t.value;"title"===a?(console.log(n),localStorage.setItem("title",n)):"notes"===a&&localStorage.setItem("notes",n)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"addNewBtn",onClick:function(e){document.querySelector(".uploadForm").style.display="flex",document.querySelector(".img-grid").style.display="none"}},"Legg til ny whisky"),l.a.createElement("form",{className:"uploadForm",method:"post",style:{display:"none"}},l.a.createElement("button",{action:"action",type:"submit",className:"closeForm",onClick:function(e){return function(e){e.preventDefault(),document.querySelector("form").style.display="none",document.querySelector(".img-grid").style.display="grid",document.querySelector("#file-title").value="",document.querySelector("#file-title").style.borderColor="#4e4e4e",document.querySelector("#file-notes").value="",document.querySelector(".custom-file-upload").innerHTML="Legg til bilde",document.querySelector(".thumbnail").innerHTML="",document.body.classList.contains("error")&&document.querySelector(".error").remove()}(e)}},"Lukk"),l.a.createElement("input",{id:"file-title",type:"text",name:"title",placeholder:"Hva heter whiskyen?",onChange:function(e){return j(e)}}),l.a.createElement("textarea",{id:"file-notes",name:"notes",rows:5,cols:5,placeholder:"Smaksnotater ...",onChange:function(e){return j(e)}}),l.a.createElement("div",{className:"starRating"},l.a.createElement(w,{rating:g,setRating:function(e){f(e),localStorage.setItem("rating",e)}})),l.a.createElement("div",{className:"thumbnail"}),l.a.createElement("label",{htmlFor:"file-upload",className:"custom-file-upload"},"Legg til bilde"),l.a.createElement("input",{id:"file-upload",type:"file",onChange:function(e){var t=e.target.files[0];if(t&&m.includes(t.type)){var a=document.createElement("img");a.src=URL.createObjectURL(t),y(t),s(""),document.querySelector(".submitForm").style.display="block",document.querySelector(".thumbnail").innerHTML="",document.querySelector(".thumbnail").appendChild(a),document.querySelector(".custom-file-upload").innerHTML="Velg et annet bilde"}else c(null),s("Du kan bare legge til bildefiler (png, heic or jpeg)")}}),l.a.createElement("div",{className:"output"},u&&l.a.createElement("div",{className:"error"},u),a&&l.a.createElement(R,{file:a,setFile:c,setRating:f}),l.a.createElement("button",{type:"submit",className:"addNewBtn submitForm",onClick:function(e){return function(e){if(e.preventDefault(),document.getElementById("file-title").value)c(b);else{var t=document.getElementById("file-title");t.insertAdjacentHTML("afterend","<div class='error'><p>Du m\xe5 legge til en tittel</p></div>"),t.scrollIntoView(),t.style.borderColor="red"}}(e)}},"Legg til i samlingen"))))},B=function(e){var t=e.searchCallback,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],o=c[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],d=s[1],p=Object(O.f)();return m&&1===r.length&&p.go(0),l.a.createElement("div",{className:"search"},l.a.createElement("input",{type:"text",name:"search",placeholder:"Filtrer etter navn",onChange:function(e){return function(e){var a=e.currentTarget,n=a.name,l=a.value;"search"===n&&(t(l),o(l))}(e)},onKeyDown:function(e){"Backspace"===e.key&&d(!0)}}))},M=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)((function(e){e&&s(e)})),o=Object(i.a)(r,2),u=o[0],s=o[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),p=d[0],g=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,null),l.a.createElement(B,{searchCallback:function(e){console.log(),e&&g(e)}}),l.a.createElement(F,{data:a,setData:c,rating:u,setRating:s,search:p}))},P=function(e){var t=e.data;return["localhost","127.0.0.1"].includes(window.location.hostname)?l.a.createElement("img",{src:I.a,alt:t}):l.a.createElement("img",{src:t,alt:t})},A=function(e){var t=e.productID,a=e.origTitle,c=e.name,r=e.alcohol,o=e.price,u=e.country,s=e.region,m=e.destilery,d=e.descColour,g=e.descOdour,f=e.descTaste,E=Object(n.useContext)(k).state;Object(n.useEffect)((function(){console.log("whiskyId is "+t)}),[E.searchResults]);var h=Object(n.useContext)(b).user.uid,y=Object(n.useState)(localStorage.getItem("id")),j=Object(i.a)(y,1)[0],O=p.collection(h).doc(j),v=Object(n.useState)(c),S=Object(i.a)(v,2),_=S[0],N=S[1],x=Object(n.useState)(t),C=Object(i.a)(x,2),w=C[0],L=C[1],I=Object(n.useState)(r),D=Object(i.a)(I,2),T=D[0],F=D[1],V=Object(n.useState)(o),R=Object(i.a)(V,2),q=R[0],B=R[1],M=Object(n.useState)(u),P=Object(i.a)(M,2),A=P[0],z=P[1],H=Object(n.useState)(s),U=Object(i.a)(H,2),G=U[0],J=U[1],K=Object(n.useState)(m),W=Object(i.a)(K,2),X=W[0],Q=W[1],Y=Object(n.useState)(f),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)(g),ae=Object(i.a)(te,2),ne=ae[0],le=ae[1],ce=Object(n.useState)(d),re=Object(i.a)(ce,2),oe=re[0],ue=re[1];return Object(n.useEffect)((function(){O.update({polet_name:_,polet_productID:w,polet_percentage:T,polet_price:q,polet_country:A,polet_region:G,polet_destilery:X,polet_descColour:oe,polet_descTaste:$,polet_descOdour:ne})}),[_,w,T,q,A,X,G,$,ne,oe]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyDetails"},l.a.createElement("h3",null,"Om whiskyen"),l.a.createElement("ul",null,c?l.a.createElement("li",null,l.a.createElement("strong",null,"Navn")," ",c):l.a.createElement("li",null,l.a.createElement("strong",null,"Navn"),l.a.createElement("input",{className:a?"hasValue":"",type:"text",placeholder:a||"Legg til informasjon",onChange:function(e){return N(e.target.value)}})),t?l.a.createElement("li",null,l.a.createElement("strong",null,"Produkt ID")," #",t):l.a.createElement("li",null,l.a.createElement("strong",null,"Produkt ID"),l.a.createElement("input",{className:t?"hasValue":"",type:"text",placeholder:t||"Legg til informasjon",onChange:function(e){return L(e.target.value)}})),r?l.a.createElement("li",null,l.a.createElement("strong",null,"Alkoholstyrke")," ",r," %"):l.a.createElement("li",null,l.a.createElement("strong",null,"Alkoholstyrke"),l.a.createElement("input",{className:r?"hasValue":"",type:"text",placeholder:r||"Legg til informasjon",onChange:function(e){return F(e.target.value)}})),o?l.a.createElement("li",null,l.a.createElement("strong",null,"Pris")," ",o," NOK"):l.a.createElement("li",null,l.a.createElement("strong",null,"Pris"),l.a.createElement("input",{className:o?"hasValue":"",type:"text",placeholder:o||"Legg til informasjon",onChange:function(e){return B(e.target.value)}}))),l.a.createElement("ul",null,u?l.a.createElement("li",null,l.a.createElement("strong",null,"Land")," ",u):l.a.createElement("li",null,l.a.createElement("strong",null,"Land"),l.a.createElement("input",{className:u?"hasValue":"",type:"text",placeholder:u||"Legg til informasjon",onChange:function(e){return z(e.target.value)}})),s?l.a.createElement("li",null,l.a.createElement("strong",null,"Region")," ",s):l.a.createElement("li",null,l.a.createElement("strong",null,"Region"),l.a.createElement("input",{className:s?"hasValue":"",type:"text",placeholder:s||"Legg til informasjon",onChange:function(e){return J(e.target.value)}})),m?l.a.createElement("li",null,l.a.createElement("strong",null,"Destilleri")," ",m):l.a.createElement("li",null,l.a.createElement("strong",null,"Destilleri"),l.a.createElement("input",{className:m?"hasValue":"",type:"text",placeholder:m||"Legg til informasjon",onChange:function(e){return Q(e.target.value)}})))),l.a.createElement("div",{className:"whiskyDescription"},l.a.createElement("h3",null,"Beskrivelse"),l.a.createElement("ul",null,d?l.a.createElement("li",null,l.a.createElement("strong",null,"Farge")," ",d):l.a.createElement("li",null,l.a.createElement("strong",null,"Farge"),l.a.createElement("input",{className:d?"hasValue":"",type:"text",placeholder:d||"Legg til informasjon om fargen",onChange:function(e){return ue(e.target.value)}})),g?l.a.createElement("li",null,l.a.createElement("strong",null,"Lukt")," ",g):l.a.createElement("li",null,l.a.createElement("strong",null,"Lukt"),l.a.createElement("input",{className:g?"hasValue":"",type:"text",placeholder:g||"Legg til informasjon om lukten",onChange:function(e){return le(e.target.value)}})),f?l.a.createElement("li",null,l.a.createElement("strong",null,"Smak")," ",f):l.a.createElement("li",null,l.a.createElement("strong",null,"Smak"),l.a.createElement("input",{className:f?"hasValue":"",type:"text",placeholder:f||"Legg til informasjon om smaken",onChange:function(e){return ee(e.target.value)}})))))},z=function(e){var t=e.notFound,a=(e.setCallback,Object(n.useState)("")),c=Object(i.a)(a,2),r=c[0],o=c[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),g=d[0],f=d[1],E=Object(n.useState)(!0),h=Object(i.a)(E,2),y=h[0],j=h[1],O=Object(n.useState)(localStorage.getItem("id")),v=Object(i.a)(O,1)[0],S=Object(n.useState)(null),_=Object(i.a)(S,2),N=_[0],x=_[1],C=Object(n.useState)(null),w=Object(i.a)(C,2),L=w[0],I=w[1],D=Object(n.useContext)(k).update,T=Object(n.useContext)(b).user.uid,F=r.split(" ").join("_"),V=p.collection(T).doc(v);return Object(n.useEffect)((function(){if(N){(function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.update({polet_name:N.basic.productLongName,polet_productID:N.basic.productId,polet_percentage:N.basic.alcoholContent,polet_price:N.prices[0].salesPrice,polet_country:N.origins.origin.country,polet_region:N.origins.origin.region,polet_destilery:N.logistics.manufacturerName,polet_descColour:N.description.characteristics.colour,polet_descTaste:N.description.characteristics.taste,polet_descOdour:N.description.characteristics.odour});case 2:return e.next=4,D({searchResults:N});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var e=document.querySelectorAll(".searchResults");e[0].style.display="none",e[1].style.display="none"}}),[N]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"getWhiskyInfo"},t?l.a.createElement("p",{className:"noWataFound"},"S\xf8k etter produktet hos Vinmonopolet"):l.a.createElement("p",null,"Stemmer ikke informasjonen?"),l.a.createElement("div",{className:"searchForm"},l.a.createElement("input",{type:"text",onChange:function(e){return o(e.target.value)}}),l.a.createElement("button",{className:"addNewBtn search",onClick:function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t,a,n,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("running manual fetch"),(t=new Headers).append("Ocp-Apim-Subscription-Key","061c0af40b3740f98c850aa72f2528e1"),a={method:"GET",headers:t,redirect:"follow"},e.next=6,fetch("https://apis.vinmonopolet.no/products/v0/details-normal?changedSince=2000-01-01&productShortNameContains="+F,a);case 6:return n=e.sent,e.next=9,n.json();case 9:(l=e.sent).length?(I(null),f(l)):(I(!0),f(null)),j(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var e=document.querySelectorAll(".searchResults");e[0].style.display="block",e[1].style.display="block"}},"Finn riktig produkt")),l.a.createElement("div",{className:"searchResults"},y?l.a.createElement("h3",{className:"loadingData"},"Laster inn data fra Vinmonopolet ..."):l.a.createElement("div",{className:"displayData"},l.a.createElement("ul",null,g&&g.map((function(e){return l.a.createElement("li",{key:e.basic.productId,onClick:function(){x(e)}},e.basic.productLongName)}))),L&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Fant dessverre ingen produkter p\xe5 Vinmonopolet som matcher s\xf8ket ditt."),l.a.createElement("button",{className:"addNewBtn",onClick:function(){D({manual:!0})}},"Vil du legge til manuelt?"))))))},H=function(e){var t=e.title,a=e.origTitle,c=e.db,r=Object(n.useState)(""),o=Object(i.a)(r,2),m=o[0],d=o[1],g=Object(n.useState)(!0),f=Object(i.a)(g,2),E=f[0],h=f[1],y=Object(n.useState)(null),j=Object(i.a)(y,2),O=(j[0],j[1]),v=Object(n.useState)(localStorage.getItem("id")),k=Object(i.a)(v,1)[0],S=Object(n.useContext)(b).user.uid,_=p.collection(S).doc(k);return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var a,n,l,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("running auto fetch"),(a=new Headers).append("Ocp-Apim-Subscription-Key","061c0af40b3740f98c850aa72f2528e1"),n={method:"GET",headers:a,redirect:"follow"},e.next=6,fetch("https://apis.vinmonopolet.no/products/v0/details-normal?productShortNameContains="+t,n);case 6:return l=e.sent,e.next=9,l.json();case 9:(c=e.sent).length?(O(null),d(c),c.map((function(e){return _.update({polet_name:e.basic.productLongName,polet_productID:e.basic.productId,polet_percentage:e.basic.alcoholContent,polet_price:e.prices[0].salesPrice,polet_country:e.origins.origin.country,polet_region:e.origins.origin.region,polet_destilery:e.logistics.manufacturerName,polet_descColour:e.description.characteristics.colour,polet_descTaste:e.description.characteristics.taste,polet_descOdour:e.description.characteristics.odour})}))):(O(!0),d(null)),h(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),m?E?l.a.createElement("h2",{className:"loadingData"},"Laster inn data fra Vinmonopolet ..."):l.a.createElement(l.a.Fragment,null,m&&m.map((function(e){return l.a.createElement(A,{key:e.basic.productId,productID:e.basic.productId,name:e.basic.productLongName,alcohol:e.basic.alcoholContent,price:e.prices[0].salesPrice,country:e.origins.origin.country,region:e.origins.origin.region,destilery:e.logistics.manufacturerName,descColour:e.description.characteristics.colour,descOdour:e.description.characteristics.odour,descTaste:e.description.characteristics.taste})})),l.a.createElement(z,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{key:c.productID,origTitle:a,productID:c.polet_productID,name:c.polet_name,alcohol:c.polet_percentage,price:c.polet_price,country:c.polet_country,region:c.polet_region,destilery:c.polet_destilery,descColour:c.polet_descColour,descOdour:c.polet_descOdour,descTaste:c.polet_descTaste}),l.a.createElement(z,{notFound:!0}))},U=function(e){e.name;var t=e.db,a=Object(n.useState)(t.polet_name),c=Object(i.a)(a,2),r=c[0],o=c[1],m=Object(n.useState)(t.polet_productID),d=Object(i.a)(m,2),g=d[0],f=d[1],E=Object(n.useState)(t.polet_percentage),h=Object(i.a)(E,2),y=h[0],j=h[1],O=Object(n.useState)(t.polet_price),v=Object(i.a)(O,2),S=v[0],_=v[1],N=Object(n.useState)(t.polet_country),x=Object(i.a)(N,2),C=x[0],w=x[1],L=Object(n.useState)(t.polet_region),I=Object(i.a)(L,2),D=I[0],T=I[1],F=Object(n.useState)(t.polet_destilery),V=Object(i.a)(F,2),R=V[0],q=V[1],B=Object(n.useState)(t.descColour),M=Object(i.a)(B,2),P=M[0],A=M[1],z=Object(n.useState)(t.polet_descOdour),H=Object(i.a)(z,2),U=H[0],G=H[1],J=Object(n.useState)(t.polet_descTaste),K=Object(i.a)(J,2),W=K[0],X=K[1],Q=Object(n.useState)(localStorage.getItem("id")),Y=Object(i.a)(Q,1)[0],Z=Object(n.useState)(null),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useContext)(k).update,ne=Object(n.useContext)(b).user.uid,le=p.collection(ne).doc(Y);return Object(n.useEffect)((function(){ee&&function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.update({polet_name:r});case 2:return t.polet_name=r,e.next=5,le.update({polet_productID:g});case 5:return t.polet_productID=g,e.next=8,le.update({polet_percentage:y});case 8:return t.polet_percentage=y,e.next=11,le.update({polet_price:S});case 11:return t.polet_price=S,e.next=14,le.update({polet_country:C});case 14:return t.polet_country=C,e.next=17,le.update({polet_region:D});case 17:return t.polet_region=D,e.next=20,le.update({polet_destilery:R});case 20:return t.polet_destilery=R,e.next=23,le.update({polet_descTaste:W});case 23:return t.polet_descTaste=W,e.next=26,le.update({polet_descOdour:U});case 26:return t.polet_descOdour=U,e.next=29,ae({manual:!1});case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[ee]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyDetailsContainer"},l.a.createElement("div",{className:"whiskyDetails"},l.a.createElement("h3",null,"Om whiskyen"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Navn"),l.a.createElement("input",{className:r?"hasValue":"",id:"input",type:"text",placeholder:r||"Legg til navn",onChange:function(e){return o(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Produkt ID"),l.a.createElement("input",{className:g?"hasValue":"",type:"text",placeholder:g||"Legg til produkt ID",onChange:function(e){return f(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Alkoholstyrke"),l.a.createElement("input",{className:y?"hasValue":"",type:"text",placeholder:y||"Legg til % alkoholstyrke",onChange:function(e){return j(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Pris"),l.a.createElement("input",{className:S?"hasValue":"",type:"text",placeholder:S||"Legg til pris",onChange:function(e){return _(e.target.value)}}))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Land"),l.a.createElement("input",{className:C?"hasValue":"",type:"text",placeholder:C||"Legg til land",onChange:function(e){return w(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Region"),l.a.createElement("input",{className:D?"hasValue":"",type:"text",placeholder:D||"Legg til region",onChange:function(e){return T(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Destilleri"),l.a.createElement("input",{className:R?"hasValue":"",type:"text",placeholder:R||"Legg til destilleri",onChange:function(e){return q(e.target.value)}})))),l.a.createElement("div",{className:"whiskyDescription"},l.a.createElement("h3",null,"Beskrivelse"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Farge"),l.a.createElement("input",{className:P?"hasValue":"",type:"text",placeholder:P||"Legg til informasjon om fargen",onChange:function(e){return A(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Lukt"),l.a.createElement("input",{className:U?"hasValue":"",type:"text",placeholder:U||"Legg til informasjon om lukten",onChange:function(e){return G(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Smak"),l.a.createElement("input",{className:W?"hasValue":"",type:"text",placeholder:W||"Legg til informasjon om smaken",onChange:function(e){return X(e.target.value)}})))),l.a.createElement("button",{className:"addNewBtn",style:{marginTop:0},onClick:function(){te(!0)}},"Lagre endringer")))},G=function(e){var t=e.db,a=Object(n.useState)(null),c=Object(i.a)(a,2),r=c[0],o=c[1],u=Object(n.useState)(null),s=Object(i.a)(u,2),m=s[0],d=s[1],p=Object(n.useState)(null),g=Object(i.a)(p,2),f=g[0],E=g[1],h=Object(n.useContext)(b).user.uid,y=x(h),j=y.distilleries,O=y.countries,v=y.regions;function k(e,t){var a={};e.forEach((function(e){a[e]=(a[e]||0)+1}));for(var n=0,c=Object.entries(a);n<c.length;n++){var r=Object(i.a)(c[n],2),o=r[0],u=r[1];if(t===o)return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",null,u),l.a.createElement("span",null,"x")),l.a.createElement("p",null,o))}}return Object(n.useEffect)((function(){t.polet_country&&E(k(O,t.polet_country)),t.polet_destilery&&o(k(j,t.polet_destilery)),t.polet_region&&d(k(v,t.polet_region))}),[t,O,j,v]),l.a.createElement("div",{className:"stats"},r?l.a.createElement("div",{className:"destilery"},r):null,m?l.a.createElement("div",{className:"region"},m):null,f?l.a.createElement("div",{className:"country"},f):null)},J=function(e){var t=e.title,a=e.db,c=t;return t=t.split(" ").join("_"),!0===Object(n.useContext)(k).state.manual?(console.log("edit data"),l.a.createElement(U,{db:a})):a.polet_percentage?(console.log("has data"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyDetailsContainer"},l.a.createElement(A,{key:a.productID,origTitle:c,productID:a.polet_productID,name:a.polet_name,alcohol:a.polet_percentage,price:a.polet_price,country:a.polet_country,region:a.polet_region,destilery:a.polet_destilery,descColour:a.polet_descColour,descOdour:a.polet_descOdour,descTaste:a.polet_descTaste}),l.a.createElement(z,null)),l.a.createElement("div",{className:"fullWidth"},l.a.createElement(G,{db:a})),l.a.createElement("div",{className:"searchBlock"},l.a.createElement(z,null)))):(console.log("has no data"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyDetailsContainer"},l.a.createElement(H,{title:t,origTitle:c,db:a})),l.a.createElement("div",{className:"searchBlock",style:{marginTop:"-50px"}},l.a.createElement(z,null))))},K=function(e){var t=e.url;return l.a.createElement("div",{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&(document.querySelector(".backdrop").style.display="none")}},l.a.createElement(D,{data:t}))};function W(e){var t=e.title,a=Object(n.useState)(localStorage.getItem("id")),c=Object(i.a)(a,1)[0],r=Object(n.useContext)(b).user.uid,o=Object(O.f)();return l.a.createElement("div",{className:"deleteItemContainer"},l.a.createElement("div",{className:"deleteItem"},l.a.createElement("p",{className:"deleteText"},"Vil du slette ",t,"?"),l.a.createElement("div",{className:"buttonGroup"},l.a.createElement("button",{className:"deleteButton",onClick:function(){var e=p.collection(r).doc(c);(function(){var t=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.delete();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),o.push("/whisky")}},"Ja, slett"),l.a.createElement("button",{className:"closeButton",onClick:function(){document.querySelector(".deleteItemContainer").style.display="none"}},"Nei, g\xe5 tilbake"))))}var X=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),m=o[0],d=o[1],g=Object(n.useState)(""),f=Object(i.a)(g,2),E=f[0],h=f[1],y=Object(n.useState)(""),j=Object(i.a)(y,2),O=j[0],v=j[1],S=Object(n.useState)(""),_=Object(i.a)(S,2),N=_[0],x=_[1],C=Object(n.useState)(localStorage.getItem("id")),L=Object(i.a)(C,1)[0],I=Object(n.useContext)(k),D=I.state,T=I.update,F=Object(n.useContext)(b).user.uid;Object(n.useEffect)((function(){var e=p.collection(F).doc(L);e.get().then((function(t){c(t.data()),d(t.data().star),h(t.data().notes),v(t.data().url),x(t.data().title),function(){var a=Object(s.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.data().polet_name){a.next=3;break}return a.next=3,e.update({polet_name:""});case 3:if(t.data().polet_productID){a.next=6;break}return a.next=6,e.update({polet_productID:""});case 6:if(t.data().polet_percentage){a.next=9;break}return a.next=9,e.update({polet_percentage:""});case 9:if(t.data().polet_price){a.next=12;break}return a.next=12,e.update({polet_price:""});case 12:if(t.data().polet_country){a.next=15;break}return a.next=15,e.update({polet_country:""});case 15:if(t.data().polet_region){a.next=18;break}return a.next=18,e.update({polet_region:""});case 18:if(t.data().polet_destilery){a.next=21;break}return a.next=21,e.update({polet_destilery:""});case 21:if(t.data().polet_descColour){a.next=24;break}return a.next=24,e.update({polet_descColour:""});case 24:if(t.data().polet_descTaste){a.next=27;break}return a.next=27,e.update({polet_descTaste:""});case 27:if(t.data().polet_descOdour){a.next=30;break}return a.next=30,e.update({polet_descOdour:""});case 30:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()})).catch((function(e){console.log("Error getting document:",e)}))}),[D.searchResults]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyItem"},l.a.createElement("div",{className:"image",key:L,onClick:function(){document.querySelector(".backdrop").style.display="block"}},l.a.createElement(P,{data:O})),l.a.createElement("div",{className:"titleContainer"},l.a.createElement("h2",null,N),l.a.createElement("div",{className:"buttonGroup"},l.a.createElement("button",{className:"deleteButton",onClick:function(){document.querySelector(".deleteItemContainer").style.display="block"}},"Slett"),l.a.createElement("button",{className:"editButton",onClick:function(){T({manual:!0})}},"Rediger"))),l.a.createElement("div",{className:"notes"},l.a.createElement("textarea",{id:"file-notes",rows:5,cols:5,placeholder:"Smaksnotater ...",value:E||"Skriv notater..",onChange:function(e){var t=p.collection(F).doc(L);h(e.target.value),t.update({notes:E})}})),l.a.createElement("div",{className:"rating"},l.a.createElement("h2",{className:"ratingNumber"},m," / 10"),l.a.createElement(w,{rating:m,setRating:function(e){var t=p.collection(F).doc(L);d(e),t.update({star:e})}})),N&&l.a.createElement(J,{title:N,db:a}),l.a.createElement(G,{db:a})),l.a.createElement(K,{url:O}),l.a.createElement(W,{title:N}))},Q=function(){return l.a.createElement("div",{className:"whiskyContainer"},l.a.createElement(X,null))};var Y=function(){return l.a.createElement("h1",null,"Siden finnes ikke :(")},Z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.b,{to:"/whisky"},l.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 480 480",className:"logo"},l.a.createElement("path",{d:"M173.3,203.2l45.6-45.6c3-3.1,3-8.1-0.1-11.2s-8.1-3.1-11.2-0.1l-47.4,47.4c-1.2,1.2-2,2.7-2.2,4.3l-29.5,176.6 c-0.1,0.9-0.1,1.8,0,2.6l10.7,64c0.6,3.9,4,6.7,7.9,6.7c0.4,0,0.9,0,1.3-0.1c4.4-0.7,7.3-4.8,6.6-9.2L144.6,376L173.3,203.2z"}),l.a.createElement("path",{d:"M192,432h-16c-4.4,0-8,3.6-8,8s3.6,8,8,8h16c4.4,0,8-3.6,8-8S196.4,432,192,432z"}),l.a.createElement("path",{d:"M330.3,345.3l5.1,30.7l-9.3,56H224c-4.4,0-8,3.6-8,8s3.6,8,8,8h108.9c3.9,0,7.3-2.8,7.9-6.7l10.7-64 c0.1-0.9,0.1-1.8,0-2.6l-5.3-32c-0.7-4.4-4.8-7.3-9.2-6.6C332.6,336.8,329.6,341,330.3,345.3z"}),l.a.createElement("path",{d:"M261.1,146.3c-3.1,3.1-3.1,8.2,0,11.3l45.6,45.6l19.7,118.1c0.6,3.9,4,6.7,7.9,6.7c0.4,0,0.9,0,1.3-0.1 c4.4-0.7,7.3-4.8,6.6-9.2L322,198.1c-0.3-1.6-1.1-3.2-2.2-4.3l-47.4-47.4C269.3,143.2,264.2,143.2,261.1,146.3z"}),l.a.createElement("path",{d:"M288,8c0-4.4-3.6-8-8-8h-80c-4.4,0-8,3.6-8,8v108.7l-61.7,61.7c-1.2,1.2-2,2.7-2.2,4.3l-32,192 c-0.2,0.9-0.2,1.8,0,2.6l16,96c0.6,3.9,4,6.7,7.9,6.7h240c3.9,0,7.2-2.8,7.9-6.7l16-96c0.2-0.9,0.2-1.8,0-2.6l-32-192 c-0.3-1.6-1.1-3.2-2.2-4.3L288,116.7V8z M208,64h64v16h-24c-4.4,0-8,3.6-8,8s3.6,8,8,8h24v16h-64V64z M208,16h64v32h-64V16z M367.9,376l-14.7,88H126.8l-14.7-88l31.4-188.2l59.8-59.8h73.4l59.8,59.8L367.9,376z"}),l.a.createElement("path",{d:"M184,232v112c0,4.4,3.6,8,8,8h96c4.4,0,8-3.6,8-8V232c0-4.4-3.6-8-8-8h-96C187.6,224,184,227.6,184,232z M200,240h80v96h-80V240z"}),l.a.createElement("path",{d:"M256,256h-32c-4.4,0-8,3.6-8,8s3.6,8,8,8h24v40c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8v-48 C264,259.6,260.4,256,256,256z"})),l.a.createElement("h1",{className:"logoTitle"},"Pet Sematary")))};function $(){if(!Object(n.useContext)(b).user.uid)return l.a.createElement("div",{className:"login-buttons"},l.a.createElement("button",{className:"loginBtn",onClick:h},l.a.createElement("span",null," Logg inn med Google")))}var ee=function(){var e=Object(n.useContext)(b);e=e.user;return l.a.createElement("nav",null,l.a.createElement("img",{src:e.photoURL,alt:e.displayName,onClick:function(){document.querySelector(".userPage").classList.toggle("show")}}))},te=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(b),o=r.user.uid;r=r.user;var u=x(o).titles;Object(n.useEffect)((function(){u.length&&c(u.length)}),[u]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(ee,null),r?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"userPage"},l.a.createElement("button",{className:"closeNav",onClick:function(){document.querySelector(".userPage").classList.toggle("show")}},"X"),l.a.createElement("div",{className:"userContent"},l.a.createElement("img",{src:r.photoURL,alt:r.displayName}),l.a.createElement("p",null,"Hei ",r.displayName),l.a.createElement("p",null,"Du har smakt ",a," whiskyer"),l.a.createElement("button",{className:"logOutBtn",onClick:function(){E.signOut().then((function(){console.log("logged out"),window.location.reload(!1)})).catch((function(e){console.log(e.message)}))}},"Logg ut")))):null)};var ae=function(){return Object(n.useContext)(b).user.uid?l.a.createElement("div",{className:"MainContent"},l.a.createElement(j.a,null,l.a.createElement(O.c,null,l.a.createElement(N,null,l.a.createElement(Z,null),l.a.createElement(te,null),l.a.createElement(O.a,{path:"/",component:M,exact:!0}),l.a.createElement(O.a,{path:"/whisky",component:M,exact:!0}),l.a.createElement(O.a,{path:"/whiskyType",component:Q,exact:!0})),l.a.createElement(O.a,{component:Y})))):l.a.createElement("div",{className:"notLoggedIn"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"logoTitle"},"Pet Sematary"),l.a.createElement($,null)))};var ne=function(){return l.a.createElement(y,null,l.a.createElement("div",{className:"App"},l.a.createElement(ae,null)))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ne,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e916aed0.chunk.js.map