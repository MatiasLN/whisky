(this.webpackJsonpwhisky=this.webpackJsonpwhisky||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/placeholder.505dce53.jpeg"},28:function(e,t,a){e.exports=a.p+"static/media/loading.2df9872c.gif"},29:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),r=a.n(c),o=(a(34),a(12)),u=a(2),s=a(1),i=a(14),m=Object(n.createContext)(),d=function(e,t){return Object(i.a)(Object(i.a)({},e),t)},p={id:localStorage.getItem("id"),whisky:"",searchResults:"",manual:!1,countedWhiskyData:"",currentWhisky:""};function g(e){var t=Object(n.useReducer)(d,p),a=Object(s.a)(t,2),c=a[0],r=a[1];return l.a.createElement(m.Provider,{value:{state:c,update:r}},e.children)}var E=a(3),h=a.n(E),f=a(5),b=a(10);a(47),a(36),a(40);b.initializeApp({apiKey:"AIzaSyBJdh5HQXypjt8x7FNyn3fMSw_AJO3Vpcs",authDomain:"whisky-c2f56.firebaseapp.com",databaseURL:"https://whisky-c2f56.firebaseio.com",projectId:"whisky-c2f56",storageBucket:"whisky-c2f56.appspot.com",messagingSenderId:"166359406379",appId:"1:166359406379:web:baa8f516ec1187e81fd76e"});var j=b.storage(),O=b.firestore(),y=b.firestore.FieldValue.serverTimestamp,v=(new b.auth.GoogleAuthProvider,new b.auth.GoogleAuthProvider),S=b.auth(),k=function(){S.signInWithPopup(v).then((function(){console.log("logged in")})).catch((function(e){console.log(e.message)}))},N=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),r=Object(s.a)(c,2),o=r[0],u=r[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),d=m[0],p=m[1],g=Object(n.useState)(""),E=Object(s.a)(g,2),b=E[0],j=E[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("displayName"),t=localStorage.getItem("email"),a=localStorage.getItem("photoURL"),n=localStorage.getItem("uid");e&&t&&a&&""!==n?(l(e),u(t),p(a),j(n)):S.onAuthStateChanged(function(){var e=Object(f.a)(h.a.mark((function e(t){var a,n,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(a=t.displayName,n=t.email,c=t.photoURL,r=t.uid,console.log("fetching user data"),localStorage.setItem("displayName",a),localStorage.setItem("email",n),localStorage.setItem("photoURL",c),localStorage.setItem("uid",r),l(a),u(n),p(c),j(r));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),{displayName:a,email:o,photoURL:d,uid:b}},_=function(){var e=N().uid,t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(!0),o=Object(s.a)(r,2),u=o[0],d=o[1],p=Object(n.useState)([]),g=Object(s.a)(p,2),E=g[0],h=g[1],f=Object(n.useState)([]),b=Object(s.a)(f,2),j=b[0],y=b[1],v=Object(n.useState)([]),S=Object(s.a)(v,2),k=S[0],_=S[1],C=Object(n.useState)([]),x=Object(s.a)(C,2),L=x[0],w=x[1],I=Object(n.useContext)(m).update;return Object(n.useEffect)((function(){if(e){var t=O.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[],a=[],n=[],l=[],r=[];e.forEach((function(e){a.push(e.data().title),n.push(e.data().polet_destilery),l.push(e.data().polet_country),r.push(e.data().polet_region),t.push(Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id}))})),c(t),d(!1),h(a),y(n),_(l),w(r),I({countedWhiskyData:{titles:a,distillery:n,country:l,region:r}})}));return function(){return t()}}}),[e]),{docs:l,loading:u,titles:E,distilleries:j,countries:k,regions:L}},C=function(e){var t=e.isSelected,a=e.setRating;e.click;return l.a.createElement("li",{className:t?"selected":null,onClick:a},l.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 16 15",className:"star"},l.a.createElement("path",{d:"M8.5,0.3l2,4.1c0.1,0.2,0.2,0.3,0.4,0.3l4.6,0.7c0.4,0.1,0.6,0.6,0.3,0.9l-3.3,3.2c-0.1,0.1-0.2,0.3-0.2,0.5l0.8,4.5 c0.1,0.4-0.4,0.8-0.8,0.6l-4.1-2.1c-0.2-0.1-0.3-0.1-0.5,0l-4.1,2.1c-0.4,0.2-0.9-0.1-0.8-0.6l0.8-4.5c0-0.2,0-0.4-0.2-0.5L0.2,6.2 C-0.2,5.9,0,5.4,0.5,5.3L5,4.7c0.2,0,0.3-0.1,0.4-0.3l2-4.1C7.7-0.1,8.3-0.1,8.5,0.3z"})))};var x=function(e){var t=e.rating,a=e.setRating;return l.a.createElement("ul",{className:"stars"},function(){for(var e=[],n=function(n){e.push(l.a.createElement(C,{isSelected:t>n,setRating:function(){return a(n+1)},key:n}))},c=0;c<10;c++)n(c);return e}())},L=a(18),w=a.n(L),I=function(e){var t=e.data;return["localhost","127.0.0.1"].includes(window.location.hostname)?l.a.createElement("img",{src:w.a,alt:t.id}):l.a.createElement("img",{src:t,alt:t.id})},D=function(e){var t=e.data,a=e.setData,c=e.rating,r=e.setRating,u=e.search,i=Object(n.useState)(t.id),m=Object(s.a)(i,2),d=m[0],p=m[1],g=Object(n.useState)(localStorage.getItem("uid")),E=Object(s.a)(g,1)[0];return t.title.includes(u)?l.a.createElement("div",{className:"whiskyItem"},l.a.createElement("div",{className:"image",key:t.id,onClick:function(){localStorage.setItem("id",t.id),p(t.id),a(t)}},l.a.createElement(o.b,{to:"/whiskyType"},l.a.createElement(I,{data:t.url}))),l.a.createElement("h2",null,t.title),l.a.createElement("div",{className:"rating",onClick:function(){p(t.id)},data:t.id},l.a.createElement(x,{rating:c,setRating:function(e){r(e),O.collection(E).doc(d).update({star:e})}}))):l.a.createElement(l.a.Fragment,null)},V=a(28),F=a.n(V),R=function(e){e.data;var t=e.setData,a=(e.rating,e.setRating),n=e.search,c=_(),r=c.docs;return!1===c.loading?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"img-grid"},r&&r.map((function(e){return l.a.createElement(D,{name:e.title,key:e.id,id:e.id,data:e,setData:t,rating:e.star,setRating:a,search:n})}))))):l.a.createElement("div",null,l.a.createElement("img",{className:"loadingAnimation",src:F.a,alt:"loading animation"}),l.a.createElement("p",{className:"loading"},"Laster ..."),";")},T=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(null),o=Object(s.a)(r,2),u=o[0],i=o[1],m=Object(n.useState)(null),d=Object(s.a)(m,2),p=d[0],g=d[1],E=Object(n.useState)(null),b=Object(s.a)(E,2),v=b[0],S=b[1],k=Object(n.useState)(localStorage.getItem("uid")),N=Object(s.a)(k,1)[0];return Object(n.useEffect)((function(){var t=j.ref(e.name),a=O.collection(N);t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){i(e)}),Object(f.a)(h.a.mark((function e(){var n,l,c,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,l=y(),c=localStorage.getItem("title"),r=localStorage.getItem("rating"),o=localStorage.getItem("notes"),"","","","","","","","","","",a.add({url:n,createdAt:l,title:c,star:r,notes:o,polet_country:"",polet_descColour:"",polet_descOdour:"",polet_descTaste:"",polet_destilery:"",polet_name:"",polet_percentage:"",polet_price:"",polet_productID:"",polet_region:""}).then((function(e){S(e.id)})).catch((function(e){console.error("Error adding document: ",e)})),g(n),localStorage.setItem("rating",""),localStorage.setItem("notes","");case 21:case"end":return e.stop()}}),e)}))))}),[e,N]),{progress:l,url:p,error:u,docId:v}},q=function(e){var t=e.file,a=e.setFile,c=e.setRating,r=T(t),o=r.url,u=r.progress;return Object(n.useEffect)((function(){o&&(a(null),c(null),document.querySelector("form").style.display="none",document.querySelector(".img-grid").style.display="grid",document.querySelector("#file-title").value="",document.querySelector("#file-notes").value="",document.querySelector(".custom-file-upload").innerHTML="Legg til bilde",document.querySelector(".thumbnail").innerHTML="")}),[o,a,c]),l.a.createElement("div",{className:"progress-bar",style:{width:u+"%"}})},B=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),o=Object(s.a)(r,2),u=o[0],i=o[1],m=["image/png","image/jpg","image/jpeg","image/heic"],d=Object(n.useState)(0),p=Object(s.a)(d,2),g=p[0],E=p[1],h=Object(n.useState)(""),f=Object(s.a)(h,2),b=f[0],j=f[1];var O=function(e){var t=e.currentTarget,a=t.name,n=t.value;"title"===a?(console.log(n),localStorage.setItem("title",n)):"notes"===a&&localStorage.setItem("notes",n)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"addNewBtn",onClick:function(e){document.querySelector(".uploadForm").style.display="flex",document.querySelector(".img-grid").style.display="none"}},"Legg til ny whisky"),l.a.createElement("form",{className:"uploadForm",method:"post",style:{display:"none"}},l.a.createElement("button",{action:"action",type:"submit",className:"closeForm",onClick:function(e){return function(e){e.preventDefault(),document.querySelector("form").style.display="none",document.querySelector(".img-grid").style.display="grid",document.querySelector("#file-title").value="",document.querySelector("#file-title").style.borderColor="#4e4e4e",document.querySelector("#file-notes").value="",document.querySelector(".custom-file-upload").innerHTML="Legg til bilde",document.querySelector(".thumbnail").innerHTML="",document.body.classList.contains("error")&&document.querySelector(".error").remove()}(e)}},"Lukk"),l.a.createElement("input",{id:"file-title",type:"text",name:"title",placeholder:"Hva heter whiskyen?",onChange:function(e){return O(e)}}),l.a.createElement("textarea",{id:"file-notes",name:"notes",rows:5,cols:5,placeholder:"Smaksnotater ...",onChange:function(e){return O(e)}}),l.a.createElement("div",{className:"starRating"},l.a.createElement(x,{rating:g,setRating:function(e){E(e),localStorage.setItem("rating",e)}})),l.a.createElement("div",{className:"thumbnail"}),l.a.createElement("label",{htmlFor:"file-upload",className:"custom-file-upload"},"Legg til bilde"),l.a.createElement("input",{id:"file-upload",type:"file",onChange:function(e){var t=e.target.files[0];if(t&&m.includes(t.type)){var a=document.createElement("img");a.src=URL.createObjectURL(t),j(t),i(""),document.querySelector(".submitForm").style.display="block",document.querySelector(".thumbnail").innerHTML="",document.querySelector(".thumbnail").appendChild(a),document.querySelector(".custom-file-upload").innerHTML="Velg et annet bilde"}else c(null),i("Du kan bare legge til bildefiler (png, heic or jpeg)")}}),l.a.createElement("div",{className:"output"},u&&l.a.createElement("div",{className:"error"},u),a&&l.a.createElement(q,{file:a,setFile:c,setRating:E}),l.a.createElement("button",{type:"submit",className:"addNewBtn submitForm",onClick:function(e){return function(e){if(e.preventDefault(),document.getElementById("file-title").value)c(b);else{var t=document.getElementById("file-title");t.insertAdjacentHTML("afterend","<div class='error'><p>Du m\xe5 legge til en tittel</p></div>"),t.scrollIntoView(),t.style.borderColor="red"}}(e)}},"Legg til i samlingen"))))},M=function(e){var t=e.searchCallback,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)(!1),m=Object(s.a)(i,2),d=m[0],p=m[1],g=Object(u.f)();return d&&1===r.length&&g.go(0),l.a.createElement("div",{className:"search"},l.a.createElement("input",{type:"text",name:"search",placeholder:"Filtrer etter navn",onChange:function(e){return function(e){var a=e.currentTarget,n=a.name,l=a.value;"search"===n&&(t(l),o(l))}(e)},onKeyDown:function(e){"Backspace"===e.key&&p(!0)}}))},A=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)((function(e){e&&i(e)})),o=Object(s.a)(r,2),u=o[0],i=o[1],m=Object(n.useState)(""),d=Object(s.a)(m,2),p=d[0],g=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(B,null),l.a.createElement(M,{searchCallback:function(e){console.log(),e&&g(e)}}),l.a.createElement(R,{data:a,setData:c,rating:u,setRating:i,search:p}))},P=function(e){var t=e.data;return["localhost","127.0.0.1"].includes(window.location.hostname)?l.a.createElement("img",{src:w.a,alt:t}):l.a.createElement("img",{src:t,alt:t})},z=function(e){var t=e.productID,a=e.origTitle,c=e.name,r=e.alcohol,o=e.price,u=e.country,i=e.region,d=e.destilery,p=e.descColour,g=e.descOdour,E=e.descTaste,h=Object(n.useContext)(m).state;Object(n.useEffect)((function(){console.log("whiskyId is "+t)}),[h.searchResults]);var f=Object(n.useState)(localStorage.getItem("uid")),b=Object(s.a)(f,1)[0],j=Object(n.useState)(localStorage.getItem("id")),y=Object(s.a)(j,1)[0],v=O.collection(b).doc(y),S=Object(n.useState)(c),k=Object(s.a)(S,2),N=k[0],_=k[1],C=Object(n.useState)(t),x=Object(s.a)(C,2),L=x[0],w=x[1],I=Object(n.useState)(r),D=Object(s.a)(I,2),V=D[0],F=D[1],R=Object(n.useState)(o),T=Object(s.a)(R,2),q=T[0],B=T[1],M=Object(n.useState)(u),A=Object(s.a)(M,2),P=A[0],z=A[1],H=Object(n.useState)(i),U=Object(s.a)(H,2),W=U[0],G=U[1],J=Object(n.useState)(d),K=Object(s.a)(J,2),X=K[0],Q=K[1],Y=Object(n.useState)(E),Z=Object(s.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)(g),ae=Object(s.a)(te,2),ne=ae[0],le=ae[1],ce=Object(n.useState)(p),re=Object(s.a)(ce,2),oe=re[0],ue=re[1];return Object(n.useEffect)((function(){v.update({polet_name:N,polet_productID:L,polet_percentage:V,polet_price:q,polet_country:P,polet_region:W,polet_destilery:X,polet_descColour:oe,polet_descTaste:$,polet_descOdour:ne})}),[N,L,V,q,P,X,W,$,ne,oe]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyDetails"},l.a.createElement("h3",null,"Om whiskyen"),l.a.createElement("ul",null,c?l.a.createElement("li",null,l.a.createElement("strong",null,"Navn")," ",c):l.a.createElement("li",null,l.a.createElement("strong",null,"Navn"),l.a.createElement("input",{className:a?"hasValue":"",type:"text",placeholder:a||"Legg til informasjon",onChange:function(e){return _(e.target.value)}})),t?l.a.createElement("li",null,l.a.createElement("strong",null,"Produkt ID")," #",t):l.a.createElement("li",null,l.a.createElement("strong",null,"Produkt ID"),l.a.createElement("input",{className:t?"hasValue":"",type:"text",placeholder:t||"Legg til informasjon",onChange:function(e){return w(e.target.value)}})),r?l.a.createElement("li",null,l.a.createElement("strong",null,"Alkoholstyrke")," ",r," %"):l.a.createElement("li",null,l.a.createElement("strong",null,"Alkoholstyrke"),l.a.createElement("input",{className:r?"hasValue":"",type:"text",placeholder:r||"Legg til informasjon",onChange:function(e){return F(e.target.value)}})),o?l.a.createElement("li",null,l.a.createElement("strong",null,"Pris")," ",o," NOK"):l.a.createElement("li",null,l.a.createElement("strong",null,"Pris"),l.a.createElement("input",{className:o?"hasValue":"",type:"text",placeholder:o||"Legg til informasjon",onChange:function(e){return B(e.target.value)}}))),l.a.createElement("ul",null,u?l.a.createElement("li",null,l.a.createElement("strong",null,"Land")," ",u):l.a.createElement("li",null,l.a.createElement("strong",null,"Land"),l.a.createElement("input",{className:u?"hasValue":"",type:"text",placeholder:u||"Legg til informasjon",onChange:function(e){return z(e.target.value)}})),i?l.a.createElement("li",null,l.a.createElement("strong",null,"Region")," ",i):l.a.createElement("li",null,l.a.createElement("strong",null,"Region"),l.a.createElement("input",{className:i?"hasValue":"",type:"text",placeholder:i||"Legg til informasjon",onChange:function(e){return G(e.target.value)}})),d?l.a.createElement("li",null,l.a.createElement("strong",null,"Destilleri")," ",d):l.a.createElement("li",null,l.a.createElement("strong",null,"Destilleri"),l.a.createElement("input",{className:d?"hasValue":"",type:"text",placeholder:d||"Legg til informasjon",onChange:function(e){return Q(e.target.value)}})))),l.a.createElement("div",{className:"whiskyDescription"},l.a.createElement("h3",null,"Beskrivelse"),l.a.createElement("ul",null,p?l.a.createElement("li",null,l.a.createElement("strong",null,"Farge")," ",p):l.a.createElement("li",null,l.a.createElement("strong",null,"Farge"),l.a.createElement("input",{className:p?"hasValue":"",type:"text",placeholder:p||"Legg til informasjon om fargen",onChange:function(e){return ue(e.target.value)}})),g?l.a.createElement("li",null,l.a.createElement("strong",null,"Lukt")," ",g):l.a.createElement("li",null,l.a.createElement("strong",null,"Lukt"),l.a.createElement("input",{className:g?"hasValue":"",type:"text",placeholder:g||"Legg til informasjon om lukten",onChange:function(e){return le(e.target.value)}})),E?l.a.createElement("li",null,l.a.createElement("strong",null,"Smak")," ",E):l.a.createElement("li",null,l.a.createElement("strong",null,"Smak"),l.a.createElement("input",{className:E?"hasValue":"",type:"text",placeholder:E||"Legg til informasjon om smaken",onChange:function(e){return ee(e.target.value)}})))))},H=function(e){var t=e.notFound,a=(e.setCallback,Object(n.useState)("")),c=Object(s.a)(a,2),r=c[0],o=c[1],u=Object(n.useState)(""),i=Object(s.a)(u,2),d=i[0],p=i[1],g=Object(n.useState)(!0),E=Object(s.a)(g,2),b=E[0],j=E[1],y=Object(n.useState)(localStorage.getItem("id")),v=Object(s.a)(y,1)[0],S=Object(n.useState)(localStorage.getItem("uid")),k=Object(s.a)(S,1)[0],N=Object(n.useState)(null),_=Object(s.a)(N,2),C=_[0],x=_[1],L=Object(n.useState)(null),w=Object(s.a)(L,2),I=w[0],D=w[1],V=Object(n.useState)(""),F=Object(s.a)(V,2),R=F[0],T=F[1],q=Object(n.useContext)(m).update,B=r.split(" ").join("_"),M=O.collection(k).doc(v);Object(n.useEffect)((function(){B.match(/^\d/)?T("productId="+B):T("productShortNameContains="+B)}),[r]);return Object(n.useEffect)((function(){C&&function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n,l,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Headers,a={method:"GET",headers:t,redirect:"follow"},e.next=4,fetch("https://www.vinmonopolet.no/api/products/"+C.basic.productId,a);case 4:return n=e.sent,e.next=7,n.json();case 7:l=e.sent,function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.update({polet_name:l.name,polet_productID:l.code,polet_price:l.price.value,polet_country:l.main_country.name,polet_region:l.district.name});case 2:return e.next=4,q({searchResults:C});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),(c=document.querySelectorAll(".searchResults"))[0].style.display="none",c[1].style.display="none";case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[C]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"getWhiskyInfo"},t?l.a.createElement("p",{className:"noWataFound"},"S\xf8k etter produktet hos Vinmonopolet"):l.a.createElement("p",null,"Stemmer ikke informasjonen?"),l.a.createElement("div",{className:"searchForm"},l.a.createElement("input",{type:"text",onChange:function(e){return o(e.target.value)}}),l.a.createElement("button",{className:"addNewBtn search",onClick:function(){(function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("running manual fetch"),(t=new Headers).append("Ocp-Apim-Subscription-Key","061c0af40b3740f98c850aa72f2528e1"),a={method:"GET",headers:t,redirect:"follow"},e.next=6,fetch("https://apis.vinmonopolet.no/products/v0/details-normal?changedSince=2000-01-01&"+R,a);case 6:return n=e.sent,e.next=9,n.json();case 9:(l=e.sent).length?(D(null),p(l)):(D(!0),p(null)),j(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var e=document.querySelectorAll(".searchResults");e[0].style.display="block",e[1].style.display="block"}},"Finn riktig produkt")),l.a.createElement("div",{className:"searchResults"},b?l.a.createElement("h3",{className:"loadingData"},"Laster inn data fra Vinmonopolet ..."):l.a.createElement("div",{className:"displayData"},l.a.createElement("ul",null,d&&d.map((function(e){return l.a.createElement("li",{key:e.basic.productId,onClick:function(){x(e)}},e.basic.productShortName)}))),I&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Fant dessverre ingen produkter p\xe5 Vinmonopolet som matcher s\xf8ket ditt."),l.a.createElement("button",{className:"addNewBtn",onClick:function(){q({manual:!0})}},"Vil du legge til manuelt?"))))))},U=function(e){var t=e.productID,a=e.origTitle,c=e.name,r=e.alcohol,o=e.price,u=e.country,i=e.region,d=e.destilery,p=e.descColour,g=e.descOdour,E=e.descTaste,h=Object(n.useContext)(m).state;Object(n.useEffect)((function(){console.log("whiskyId is "+t)}),[h.searchResults]);var f=Object(n.useState)(localStorage.getItem("uid")),b=Object(s.a)(f,1)[0],j=Object(n.useState)(localStorage.getItem("id")),y=Object(s.a)(j,1)[0],v=O.collection(b).doc(y),S=Object(n.useState)(c),k=Object(s.a)(S,2),N=k[0],_=k[1],C=Object(n.useState)(""),x=Object(s.a)(C,2),L=x[0],w=x[1],I=Object(n.useState)(""),D=Object(s.a)(I,2),V=D[0],F=D[1],R=Object(n.useState)(""),T=Object(s.a)(R,2),q=T[0],B=T[1],M=Object(n.useState)(""),A=Object(s.a)(M,2),P=A[0],z=A[1],H=Object(n.useState)(""),U=Object(s.a)(H,2),W=U[0],G=U[1],J=Object(n.useState)(""),K=Object(s.a)(J,2),X=K[0],Q=K[1],Y=Object(n.useState)(""),Z=Object(s.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)(""),ae=Object(s.a)(te,2),ne=ae[0],le=ae[1],ce=Object(n.useState)(""),re=Object(s.a)(ce,2),oe=re[0],ue=re[1];return Object(n.useEffect)((function(){v.update({polet_name:N,polet_productID:L,polet_percentage:V,polet_price:q,polet_country:P,polet_region:W,polet_destilery:X,polet_descColour:oe,polet_descTaste:$,polet_descOdour:ne})}),[N,L,V,q,P,X,W,$,ne,oe]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyDetails"},l.a.createElement("h3",null,"Om whiskyen"),l.a.createElement("ul",null,c?l.a.createElement("li",null,l.a.createElement("strong",null,"Navn")," ",c):l.a.createElement("li",null,l.a.createElement("strong",null,"Navn"),l.a.createElement("input",{className:a?"hasValue":"",type:"text",placeholder:a||"Legg til informasjon",onChange:function(e){return _(e.target.value)}})),t?l.a.createElement("li",null,l.a.createElement("strong",null,"Produkt ID")," #",t):l.a.createElement("li",null,l.a.createElement("strong",null,"Produkt ID"),l.a.createElement("input",{className:t?"hasValue":"",type:"text",placeholder:t||"Legg til informasjon",onChange:function(e){return w(e.target.value)}})),r?l.a.createElement("li",null,l.a.createElement("strong",null,"Alkoholstyrke")," ",r," %"):l.a.createElement("li",null,l.a.createElement("strong",null,"Alkoholstyrke"),l.a.createElement("input",{className:r?"hasValue":"",type:"text",placeholder:r||"Legg til informasjon",onChange:function(e){return F(e.target.value)}})),o?l.a.createElement("li",null,l.a.createElement("strong",null,"Pris")," ",o," NOK"):l.a.createElement("li",null,l.a.createElement("strong",null,"Pris"),l.a.createElement("input",{className:o?"hasValue":"",type:"text",placeholder:o||"Legg til informasjon",onChange:function(e){return B(e.target.value)}}))),l.a.createElement("ul",null,u?l.a.createElement("li",null,l.a.createElement("strong",null,"Land")," ",u):l.a.createElement("li",null,l.a.createElement("strong",null,"Land"),l.a.createElement("input",{className:u?"hasValue":"",type:"text",placeholder:u||"Legg til informasjon",onChange:function(e){return z(e.target.value)}})),i?l.a.createElement("li",null,l.a.createElement("strong",null,"Region")," ",i):l.a.createElement("li",null,l.a.createElement("strong",null,"Region"),l.a.createElement("input",{className:i?"hasValue":"",type:"text",placeholder:i||"Legg til informasjon",onChange:function(e){return G(e.target.value)}})),d?l.a.createElement("li",null,l.a.createElement("strong",null,"Destilleri")," ",d):l.a.createElement("li",null,l.a.createElement("strong",null,"Destilleri"),l.a.createElement("input",{className:d?"hasValue":"",type:"text",placeholder:d||"Legg til informasjon",onChange:function(e){return Q(e.target.value)}})))),l.a.createElement("div",{className:"whiskyDescription"},l.a.createElement("h3",null,"Beskrivelse"),l.a.createElement("ul",null,p?l.a.createElement("li",null,l.a.createElement("strong",null,"Farge")," ",p):l.a.createElement("li",null,l.a.createElement("strong",null,"Farge"),l.a.createElement("input",{className:p?"hasValue":"",type:"text",placeholder:p||"Legg til informasjon om fargen",onChange:function(e){return ue(e.target.value)}})),g?l.a.createElement("li",null,l.a.createElement("strong",null,"Lukt")," ",g):l.a.createElement("li",null,l.a.createElement("strong",null,"Lukt"),l.a.createElement("input",{className:g?"hasValue":"",type:"text",placeholder:g||"Legg til informasjon om lukten",onChange:function(e){return le(e.target.value)}})),E?l.a.createElement("li",null,l.a.createElement("strong",null,"Smak")," ",E):l.a.createElement("li",null,l.a.createElement("strong",null,"Smak"),l.a.createElement("input",{className:E?"hasValue":"",type:"text",placeholder:E||"Legg til informasjon om smaken",onChange:function(e){return ee(e.target.value)}})))))},W=function(e){e.name;var t=e.db,a=Object(n.useState)(t.polet_name),c=Object(s.a)(a,2),r=c[0],o=c[1],u=Object(n.useState)(t.polet_productID),i=Object(s.a)(u,2),d=i[0],p=i[1],g=Object(n.useState)(t.polet_percentage),E=Object(s.a)(g,2),b=E[0],j=E[1],y=Object(n.useState)(t.polet_price),v=Object(s.a)(y,2),S=v[0],k=v[1],N=Object(n.useState)(t.polet_country),_=Object(s.a)(N,2),C=_[0],x=_[1],L=Object(n.useState)(t.polet_region),w=Object(s.a)(L,2),I=w[0],D=w[1],V=Object(n.useState)(t.polet_destilery),F=Object(s.a)(V,2),R=F[0],T=F[1],q=Object(n.useState)(t.polet_descColour),B=Object(s.a)(q,2),M=B[0],A=B[1],P=Object(n.useState)(t.polet_descOdour),z=Object(s.a)(P,2),H=z[0],U=z[1],W=Object(n.useState)(t.polet_descTaste),G=Object(s.a)(W,2),J=G[0],K=G[1],X=Object(n.useState)(localStorage.getItem("id")),Q=Object(s.a)(X,1)[0],Y=Object(n.useState)(localStorage.getItem("uid")),Z=Object(s.a)(Y,1)[0],$=Object(n.useState)(null),ee=Object(s.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useContext)(m).update,le=O.collection(Z).doc(Q);return Object(n.useEffect)((function(){te&&function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.update({polet_name:r});case 2:return t.polet_name=r,e.next=5,le.update({polet_productID:d});case 5:return t.polet_productID=d,e.next=8,le.update({polet_percentage:b});case 8:return t.polet_percentage=b,e.next=11,le.update({polet_price:S});case 11:return t.polet_price=S,e.next=14,le.update({polet_country:C});case 14:return t.polet_country=C,e.next=17,le.update({polet_region:I});case 17:return t.polet_region=I,e.next=20,le.update({polet_destilery:R});case 20:return t.polet_destilery=R,e.next=23,le.update({polet_descColour:M});case 23:return t.polet_descColour=M,e.next=26,le.update({polet_descTaste:J});case 26:return t.polet_descTaste=J,e.next=29,le.update({polet_descOdour:H});case 29:return t.polet_descOdour=H,e.next=32,ne({manual:!1});case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[te]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyDetailsContainer"},l.a.createElement("div",{className:"whiskyDetails"},l.a.createElement("h3",null,"Om whiskyen"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Navn"),l.a.createElement("input",{className:r?"hasValue":"",id:"input",type:"text",placeholder:r||"Legg til navn",onChange:function(e){return o(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Produkt ID"),l.a.createElement("input",{className:d?"hasValue":"",type:"text",placeholder:d||"Legg til produkt ID",onChange:function(e){return p(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Alkoholstyrke"),l.a.createElement("input",{className:b?"hasValue":"",type:"text",placeholder:b||"Legg til % alkoholstyrke",onChange:function(e){return j(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Pris"),l.a.createElement("input",{className:S?"hasValue":"",type:"text",placeholder:S||"Legg til pris",onChange:function(e){return k(e.target.value)}}))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Land"),l.a.createElement("input",{className:C?"hasValue":"",type:"text",placeholder:C||"Legg til land",onChange:function(e){return x(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Region"),l.a.createElement("input",{className:I?"hasValue":"",type:"text",placeholder:I||"Legg til region",onChange:function(e){return D(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Destilleri"),l.a.createElement("input",{className:R?"hasValue":"",type:"text",placeholder:R||"Legg til destilleri",onChange:function(e){return T(e.target.value)}})))),l.a.createElement("div",{className:"whiskyDescription"},l.a.createElement("h3",null,"Beskrivelse"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Farge"),l.a.createElement("input",{className:M?"hasValue":"",type:"text",placeholder:M||"Legg til informasjon om fargen",onChange:function(e){return A(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Lukt"),l.a.createElement("input",{className:H?"hasValue":"",type:"text",placeholder:H||"Legg til informasjon om lukten",onChange:function(e){return U(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("strong",null,"Smak"),l.a.createElement("input",{className:J?"hasValue":"",type:"text",placeholder:J||"Legg til informasjon om smaken",onChange:function(e){return K(e.target.value)}})))),l.a.createElement("button",{className:"addNewBtn",style:{marginTop:0},onClick:function(){ae(!0)}},"Lagre endringer")))},G=function(e){var t=e.db,a=Object(n.useState)(null),c=Object(s.a)(a,2),r=c[0],o=c[1],u=Object(n.useState)(null),i=Object(s.a)(u,2),m=i[0],d=i[1],p=Object(n.useState)(null),g=Object(s.a)(p,2),E=g[0],h=g[1],f=_(),b=f.distilleries,j=f.countries,O=f.regions;function y(e,t){var a={};e.forEach((function(e){a[e]=(a[e]||0)+1}));for(var n=0,c=Object.entries(a);n<c.length;n++){var r=Object(s.a)(c[n],2),o=r[0],u=r[1];if(t===o)return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",null,u),l.a.createElement("span",null,"x")),l.a.createElement("p",null,o))}}return Object(n.useEffect)((function(){t.polet_country&&h(y(j,t.polet_country)),t.polet_destilery&&o(y(b,t.polet_destilery)),t.polet_region&&d(y(O,t.polet_region))}),[t,j,b,O]),l.a.createElement("div",{className:"stats"},r?l.a.createElement("div",{className:"destilery"},r):null,m?l.a.createElement("div",{className:"region"},m):null,E?l.a.createElement("div",{className:"country"},E):null)},J=function(e){var t=e.title,a=e.db,c=t;return t=t.split(" ").join("_"),!0===Object(n.useContext)(m).state.manual?(console.log("edit data"),l.a.createElement(W,{db:a})):a.polet_percentage||a.polet_country||a.polet_price||a.polet_region||a.polet_descColour?(console.log("has data"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyDetailsContainer"},l.a.createElement(z,{key:a.productID,origTitle:c,productID:a.polet_productID,name:a.polet_name,alcohol:a.polet_percentage,price:a.polet_price,country:a.polet_country,region:a.polet_region,destilery:a.polet_destilery,descColour:a.polet_descColour,descOdour:a.polet_descOdour,descTaste:a.polet_descTaste}),l.a.createElement(H,null)),l.a.createElement("div",{className:"fullWidth"},l.a.createElement(G,{db:a})),l.a.createElement("div",{className:"searchBlock"},l.a.createElement(H,null)))):(console.log("has no data"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyDetailsContainer"},l.a.createElement(U,{name:c}),l.a.createElement(H,null)),l.a.createElement("div",{className:"searchBlock",style:{marginTop:"-50px"}},l.a.createElement(H,null))))},K=function(e){var t=e.url;return l.a.createElement("div",{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&(document.querySelector(".backdrop").style.display="none")}},l.a.createElement(I,{data:t}))};function X(e){var t=e.title,a=Object(n.useState)(localStorage.getItem("id")),c=Object(s.a)(a,1)[0],r=Object(n.useState)(localStorage.getItem("uid")),o=Object(s.a)(r,1)[0],i=Object(u.f)();return l.a.createElement("div",{className:"deleteItemContainer"},l.a.createElement("div",{className:"deleteItem"},l.a.createElement("p",{className:"deleteText"},"Vil du slette ",t,"?"),l.a.createElement("div",{className:"buttonGroup"},l.a.createElement("button",{className:"deleteButton",onClick:function(){var e=O.collection(o).doc(c);(function(){var t=Object(f.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.delete();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),i.push("/whisky")}},"Ja, slett"),l.a.createElement("button",{className:"closeButton",onClick:function(){document.querySelector(".deleteItemContainer").style.display="none"}},"Nei, g\xe5 tilbake"))))}var Q=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),u=o[0],i=o[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),g=p[0],E=p[1],h=Object(n.useState)(""),f=Object(s.a)(h,2),b=f[0],j=f[1],y=Object(n.useState)(""),v=Object(s.a)(y,2),S=v[0],k=v[1],N=Object(n.useState)(localStorage.getItem("id")),_=Object(s.a)(N,1)[0],C=Object(n.useState)(localStorage.getItem("uid")),L=Object(s.a)(C,1)[0],w=Object(n.useContext)(m),I=w.state,D=w.update;Object(n.useEffect)((function(){O.collection(L).doc(_).get().then((function(e){c(e.data()),i(e.data().star),E(e.data().notes),j(e.data().url),k(e.data().title),D({currentWhisky:{notes:g,polet_country:e.data().polet_country,polet_descColour:e.data().polet_descColour,polet_descOdour:e.data().polet_descOdour,polet_descTaste:e.data().polet_descTaste,polet_destilery:e.data().polet_destilery,polet_name:e.data().polet_name,polet_percentage:e.data().polet_percentage,polet_price:e.data().polet_price,polet_productID:e.data().polet_productID,polet_region:e.data().polet_region,star:e.data().star,title:e.data().title,url:e.data().url}})})).catch((function(e){console.log("Error getting document:",e)}))}),[I.searchResults,L,_]);return l.a.createElement(l.a.Fragment,null,L?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"whiskyItem"},l.a.createElement("div",{className:"image",key:_,onClick:function(){document.querySelector(".backdrop").style.display="block"}},l.a.createElement(P,{data:b})),l.a.createElement("div",{className:"titleContainer"},l.a.createElement("h2",null,S),l.a.createElement("div",{className:"buttonGroup"},l.a.createElement("button",{className:"deleteButton",onClick:function(){document.querySelector(".deleteItemContainer").style.display="block"}},"Slett"),l.a.createElement("button",{className:"editButton",onClick:function(){D({manual:!0})}},"Rediger"))),l.a.createElement("div",{className:"notes"},l.a.createElement("textarea",{id:"file-notes",rows:5,cols:5,placeholder:"Smaksnotater ...",value:g||"",onChange:function(e){var t=O.collection(L).doc(_);E(e.target.value),t.update({notes:g})}})),l.a.createElement("div",{className:"rating"},l.a.createElement("h2",{className:"ratingNumber"},u," / 10"),l.a.createElement(x,{rating:u,setRating:function(e){var t=O.collection(L).doc(_);i(e),t.update({star:e})}})),S&&l.a.createElement(J,{title:S,db:a}),l.a.createElement(G,{db:a})),l.a.createElement(K,{url:b}),l.a.createElement(X,{title:S})):l.a.createElement("p",null,"loading ...."))},Y=function(){return l.a.createElement("div",{className:"whiskyContainer"},l.a.createElement(Q,null))};var Z=function(){return l.a.createElement("h1",null,"Siden finnes ikke :(")},$=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{to:"/whisky"},l.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 480 480",className:"logo"},l.a.createElement("path",{d:"M173.3,203.2l45.6-45.6c3-3.1,3-8.1-0.1-11.2s-8.1-3.1-11.2-0.1l-47.4,47.4c-1.2,1.2-2,2.7-2.2,4.3l-29.5,176.6 c-0.1,0.9-0.1,1.8,0,2.6l10.7,64c0.6,3.9,4,6.7,7.9,6.7c0.4,0,0.9,0,1.3-0.1c4.4-0.7,7.3-4.8,6.6-9.2L144.6,376L173.3,203.2z"}),l.a.createElement("path",{d:"M192,432h-16c-4.4,0-8,3.6-8,8s3.6,8,8,8h16c4.4,0,8-3.6,8-8S196.4,432,192,432z"}),l.a.createElement("path",{d:"M330.3,345.3l5.1,30.7l-9.3,56H224c-4.4,0-8,3.6-8,8s3.6,8,8,8h108.9c3.9,0,7.3-2.8,7.9-6.7l10.7-64 c0.1-0.9,0.1-1.8,0-2.6l-5.3-32c-0.7-4.4-4.8-7.3-9.2-6.6C332.6,336.8,329.6,341,330.3,345.3z"}),l.a.createElement("path",{d:"M261.1,146.3c-3.1,3.1-3.1,8.2,0,11.3l45.6,45.6l19.7,118.1c0.6,3.9,4,6.7,7.9,6.7c0.4,0,0.9,0,1.3-0.1 c4.4-0.7,7.3-4.8,6.6-9.2L322,198.1c-0.3-1.6-1.1-3.2-2.2-4.3l-47.4-47.4C269.3,143.2,264.2,143.2,261.1,146.3z"}),l.a.createElement("path",{d:"M288,8c0-4.4-3.6-8-8-8h-80c-4.4,0-8,3.6-8,8v108.7l-61.7,61.7c-1.2,1.2-2,2.7-2.2,4.3l-32,192 c-0.2,0.9-0.2,1.8,0,2.6l16,96c0.6,3.9,4,6.7,7.9,6.7h240c3.9,0,7.2-2.8,7.9-6.7l16-96c0.2-0.9,0.2-1.8,0-2.6l-32-192 c-0.3-1.6-1.1-3.2-2.2-4.3L288,116.7V8z M208,64h64v16h-24c-4.4,0-8,3.6-8,8s3.6,8,8,8h24v16h-64V64z M208,16h64v32h-64V16z M367.9,376l-14.7,88H126.8l-14.7-88l31.4-188.2l59.8-59.8h73.4l59.8,59.8L367.9,376z"}),l.a.createElement("path",{d:"M184,232v112c0,4.4,3.6,8,8,8h96c4.4,0,8-3.6,8-8V232c0-4.4-3.6-8-8-8h-96C187.6,224,184,227.6,184,232z M200,240h80v96h-80V240z"}),l.a.createElement("path",{d:"M256,256h-32c-4.4,0-8,3.6-8,8s3.6,8,8,8h24v40c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8v-48 C264,259.6,260.4,256,256,256z"})),l.a.createElement("h1",{className:"logoTitle"},"Pet Sematary")))};function ee(){return N().uid?l.a.createElement("p",null,"Sign in"):l.a.createElement("div",{className:"login-buttons"},l.a.createElement("button",{className:"loginBtn",onClick:k},l.a.createElement("span",null," Logg inn med Google")))}var te=function(){var e=N(),t=e.photoURL,a=e.displayName;return l.a.createElement("nav",null,l.a.createElement("img",{src:t,alt:a,onClick:function(){document.querySelector(".userPage").classList.toggle("show")}}))},ae=function(){var e=N(),t=e.uid,a=e.photoURL,n=e.displayName;return l.a.createElement(l.a.Fragment,null,l.a.createElement(te,null),t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"userPage"},l.a.createElement("button",{className:"closeNav",onClick:function(){document.querySelector(".userPage").classList.toggle("show")}},"X"),l.a.createElement("div",{className:"userContent"},l.a.createElement("img",{src:a,alt:n}),l.a.createElement("p",null,"Hei ",n),l.a.createElement("button",{className:"logOutBtn",onClick:function(){S.signOut().then((function(){console.log("logged out"),window.location.reload(!1)})).catch((function(e){console.log(e.message)}))}},"Logg ut")))):null)};var ne=function(){return N().uid?l.a.createElement("div",{className:"MainContent"},l.a.createElement(o.a,null,l.a.createElement(u.c,null,l.a.createElement(g,null,l.a.createElement($,null),l.a.createElement(ae,null),l.a.createElement(u.a,{path:"/",component:A,exact:!0}),l.a.createElement(u.a,{path:"/whisky",component:A,exact:!0}),l.a.createElement(u.a,{path:"/whiskyType",component:Y,exact:!0})),l.a.createElement(u.a,{component:Z})))):l.a.createElement("div",{className:"notLoggedIn"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"logoTitle"},"Pet Sematary"),l.a.createElement(ee,null)))};var le=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(ne,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(le,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.88a4f47a.chunk.js.map