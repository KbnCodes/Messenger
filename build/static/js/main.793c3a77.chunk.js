(this["webpackJsonpmessenger-clone"]=this["webpackJsonpmessenger-clone"]||[]).push([[0],{42:function(e,a,n){e.exports=n(66)},47:function(e,a,n){},48:function(e,a,n){},53:function(e,a,n){},66:function(e,a,n){"use strict";n.r(a);var t=n(0),s=n.n(t),r=n(13),o=n.n(r),c=(n(47),n(28)),m=n(88),l=n(86),i=n(87),u=n(83),p=n(84),d=(n(48),Object(t.forwardRef)((function(e,a){var n=e.username,t=e.message,r=n===t.username;return s.a.createElement("div",{ref:a,className:"message ".concat(r&&"message__user"," ")},s.a.createElement(i.a,{className:r?"message__userCard":"message__questCard"},s.a.createElement(u.a,null,s.a.createElement(p.a,{color:"white",variant:"h5",component:"h2"},!r&&"".concat(t.username||"Unknown User"," : "),t.message))))}))),f=(n(53),n(27)),g=n.n(f),b=g.a.initializeApp({apiKey:"AIzaSyBK1rq6y-yK6n__vkKYUUDD18cbl_Bd7yI",authDomain:"messenger-clone-b311d.firebaseapp.com",databaseURL:"https://messenger-clone-b311d.firebaseio.com",projectId:"messenger-clone-b311d",storageBucket:"messenger-clone-b311d.appspot.com",messagingSenderId:"840394304359",appId:"1:840394304359:web:4282d661286831c49fddc2",measurementId:"G-WN3DDZNHXD"}).firestore(),h=n(39),E=n(38),v=n.n(E),_=n(85);var w=function(){var e=Object(t.useState)(""),a=Object(c.a)(e,2),n=a[0],r=a[1],o=Object(t.useState)([]),i=Object(c.a)(o,2),u=i[0],p=i[1],f=Object(t.useState)(""),E=Object(c.a)(f,2),w=E[0],y=E[1];return Object(t.useEffect)((function(){b.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(t.useEffect)((function(){y(prompt("please enter your name"))}),[]),console.log(n),console.log(u),s.a.createElement("div",{className:"App"},s.a.createElement("h2",null,"Welcome ",w),s.a.createElement("form",{className:"app__form"},s.a.createElement(m.a,{className:"app__formControl"},s.a.createElement(l.a,{className:"app__input",placeholder:"Enter a message..",value:n,onChange:function(e){return r(e.target.value)}}),s.a.createElement(_.a,{className:"app__iconButton",disabled:!n,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),b.collection("messages").add({message:n,username:w,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),r("")}},s.a.createElement(v.a,null)))),s.a.createElement(h.a,null,u.map((function(e){var a=e.id,n=e.message;return s.a.createElement(d,{key:a,username:w,message:n})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.793c3a77.chunk.js.map