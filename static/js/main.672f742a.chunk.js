(this["webpackJsonppathfinding-algorithms"]=this["webpackJsonppathfinding-algorithms"]||[]).push([[0],{57:function(t,e,a){t.exports=a(72)},62:function(t,e,a){},64:function(t,e,a){},65:function(t,e,a){},66:function(t,e,a){},72:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),s=(a(62),a(13)),c=a(103),l=a(104),u=a(32),h=a(100),f=a(105),d=a(112),m=a(106),p=a(107),v=a(108),y=a(114),g=a(109),b=a(102),E=a(110),w=a(111),k=a(50),O=a.n(k),j=a(42),x=(a(64),a(11)),S=a(113),P=a(101),C=a(30),N=a(19),B=function(){function t(e,a,n,r,o){Object(C.a)(this,t),this.rows=e,this.cols=a,this.startPos=n,this.endPos=r,this.walls=o,this.marked=[]}return Object(N.a)(t,[{key:"getAdjacentNodes",value:function(t){var e=t.x,a=t.y,n=[];return n.push({x:e-1,y:a}),n.push({x:e,y:a+1}),n.push({x:e+1,y:a}),n.push({x:e,y:a-1}),n}},{key:"isEnd",value:function(t){return this.areEqual(this.endPos,t)}},{key:"isWall",value:function(t){var e=this;return this.walls.some((function(a){return e.areEqual(a,t)}))}},{key:"isOutOfBounds",value:function(t){return t.x<0||t.x>=this.rows||t.y<0||t.y>=this.cols}},{key:"mark",value:function(t){this.marked.push(t)}},{key:"isMarked",value:function(t){var e=this;return this.marked.some((function(a){return e.areEqual(a,t)}))}},{key:"areEqual",value:function(t,e){return t.x===e.x&&t.y===e.y}},{key:"manhattanDistance",value:function(t,e){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)}},{key:"dijkstraAlgorithm",value:function(){var t=performance.now(),e=[],a=[];for(this.startPos.distance=0,this.startPos.path=[],a.push(this.startPos);a.length>0;){var n=1/0,r=0,o=0,i=void 0,s=!0,c=!1,l=void 0;try{for(var u,h=a[Symbol.iterator]();!(s=(u=h.next()).done);s=!0){var f=u.value;f.distance<n&&(n=f.distance,r=o,i=f),o++}}catch(b){c=!0,l=b}finally{try{s||null==h.return||h.return()}finally{if(c)throw l}}if(a.splice(r,1),e.push(i),i.path.push(i),this.isEnd(i))return{visited:e,path:i.path,time:performance.now()-t};var d=!0,m=!1,p=void 0;try{for(var v,y=this.getAdjacentNodes(i)[Symbol.iterator]();!(d=(v=y.next()).done);d=!0){var g=v.value;this.isMarked(g)||this.isWall(g)||this.isOutOfBounds(g)||(this.mark(g),g.path=Object(x.a)(i.path),void 0!==g.distance?g.distance++:g.distance=1,a.push(g))}}catch(b){m=!0,p=b}finally{try{d||null==y.return||y.return()}finally{if(m)throw p}}}}},{key:"aStar",value:function(){var t=this,e=performance.now(),a=[],n=[],r=[];for(this.startPos.path=[],a.push(this.startPos);a.length>0;){var o=1/0,i=0,s=0,c=void 0,l=!0,u=!1,h=void 0;try{for(var f,d=a[Symbol.iterator]();!(l=(f=d.next()).done);l=!0){var m=f.value;"f"in m||(m.f=0,m.g=0,m.h=0),m.f<o&&(o=m.f,i=s,c=m),s++}}catch(w){u=!0,h=w}finally{try{l||null==d.return||d.return()}finally{if(u)throw h}}if(r.push(c),c.path.push(c),this.areEqual(c,this.endPos))return{visited:r,path:c.path,time:performance.now()-e};a.splice(i,1),n.push(c);var p=!0,v=!1,y=void 0;try{for(var g,b=function(){var e=g.value;if(!n.some((function(a){return t.areEqual(a,e)}))&&!t.isWall(e)&&!t.isOutOfBounds(e)){var r=c.g+1,o=!1;a.some((function(a){return t.areEqual(a,e)}))?r<e.g&&(o=!0):(o=!0,e.h=t.manhattanDistance(e,t.endPos),a.push(e)),o&&(e.path=Object(x.a)(c.path),e.g=r,e.f=e.g+e.h)}},E=this.getAdjacentNodes(c)[Symbol.iterator]();!(p=(g=E.next()).done);p=!0)b()}catch(w){v=!0,y=w}finally{try{p||null==E.return||E.return()}finally{if(v)throw y}}}throw new Error("Path not found")}},{key:"dfs",value:function(){return this.startPos.path=[],this.dfsHelper(this.startPos,[],performance.now())}},{key:"dfsHelper",value:function(t,e,a){if(e.push(t),t.path.push(t),this.mark(t),this.isEnd(t))return{visited:e,path:t.path,time:performance.now()-a};var n=!0,r=!1,o=void 0;try{for(var i,s=this.getAdjacentNodes(t)[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var c=i.value;if(!this.isMarked(c)&&!this.isWall(c)&&!this.isOutOfBounds(c)){c.path=Object(x.a)(t.path);var l=this.dfsHelper(c,Object(x.a)(e),a);if(void 0!==l)return l}}}catch(u){r=!0,o=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}}},{key:"bfs",value:function(){var t=performance.now(),e=[],a=[];for(this.startPos.path=[],a.push(this.startPos);a.length>0;){var n=a.shift();if(e.push(n),n.path.push(n),this.isEnd(n))return{visited:e,path:n.path,time:performance.now()-t};var r=!0,o=!1,i=void 0;try{for(var s,c=this.getAdjacentNodes(n)[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var l=s.value;this.isMarked(l)||this.isWall(l)||this.isOutOfBounds(l)||(l.path=Object(x.a)(n.path),a.push(l),this.mark(l))}}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}}throw new Error("Path not found")}},{key:"bidirectionalBFS",value:function(){var t=performance.now();this.startPos.path=[],this.endPos.path=[];for(var e=[this.startPos],a=[this.endPos],n=[this.startPos,this.endPos],r=[this.startPos],o=[this.endPos];e.length>0||a.length>0;){var i=this.pathExistsHelper(e,r,o,n);if(!1!==i)return{visited:n,path:i,time:performance.now()-t};var s=this.pathExistsHelper(a,o,r,n);if(!1!==s)return{visited:n,path:s,time:performance.now()-t}}throw new Error("Path not found")}},{key:"pathExistsHelper",value:function(t,e,a,n){var r=this;if(t.length>0){var o=t.shift();o.path.push(o);var i=!0,s=!1,c=void 0;try{for(var l,u=function(){var i=l.value;if(!r.isWall(i)&&!r.isOutOfBounds(i)){if(i.path=Object(x.a)(o.path),a.some((function(t){return r.areEqual(t,i)}))){i.path.push(i);for(var s=[],c=a.find((function(t){return r.areEqual(t,i)})).path,u=0;u<Math.max(i.path.length,c.length);u++)u<i.path.length&&s.push(i.path[u]),u<c.length&&s.push(c[u]);return{v:s}}e.some((function(t){return r.areEqual(t,i)}))||(i.path=Object(x.a)(o.path),e.push(i),n.push(i),t.push(i))}},h=this.getAdjacentNodes(o)[Symbol.iterator]();!(i=(l=h.next()).done);i=!0){var f=u();if("object"===typeof f)return f.v}}catch(d){s=!0,c=d}finally{try{i||null==h.return||h.return()}finally{if(s)throw c}}}return!1}}]),t}();a(65);function H(t){return r.a.createElement("div",{id:"cell-".concat(t.pos.x,"-").concat(t.pos.y),className:"cell"+(t.wall?" selected":"")+(t.start?" start":"")+(t.end?" end":""),onMouseDown:function(){return t.mouseDownHandler(t.pos)},onMouseEnter:function(){return t.mouseEnterHandler(t.pos)},onMouseUp:function(){return t.mouseLeaveHandler(t.pos)},onClick:function(){return t.clickHandler()}})}a(66);var A=a(2),M=a(97),W=a(98),L=a(99),q=a(96),D=a(44),I=a.n(D),R=a(49),F=a.n(R),T=a(47),U=a.n(T),z=a(48),J=a.n(z),V=a(46),_=a.n(V),$=a(3),G={success:I.a,warning:_.a,error:U.a,info:J.a},K=Object(q.a)((function(t){return{success:{backgroundColor:M.a[600]},error:{backgroundColor:t.palette.error.dark},info:{backgroundColor:t.palette.primary.main},warning:{backgroundColor:W.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:t.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function Q(t){var e=K(),a=t.className,n=t.message,o=t.onClose,i=t.variant,s=Object(A.a)(t,["className","message","onClose","variant"]),c=G[i];return r.a.createElement(L.a,Object.assign({className:Object($.a)(e[i],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:e.message},r.a.createElement(c,{className:Object($.a)(e.icon,e.iconVariant)}),n),action:[r.a.createElement(h.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},r.a.createElement(F.a,{className:e.icon}))]},s))}function X(t){for(var e=[],a=Object(n.useState)({x:Math.floor(10),y:Math.floor(7.2)}),o=Object(s.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)({x:Math.floor(10),y:Math.floor(28.8)}),u=Object(s.a)(l,2),h=u[0],f=u[1],d=Object(n.useState)([]),m=Object(s.a)(d,2),p=m[0],v=m[1],y=Object(n.useState)(!1),g=Object(s.a)(y,2),E=g[0],w=g[1],k=Object(n.useState)(!1),O=Object(s.a)(k,2),j=O[0],C=O[1],N=Object(n.useState)(!1),A=Object(s.a)(N,2),M=A[0],W=A[1],L=Object(n.useState)(!1),q=Object(s.a)(L,2),D=q[0],I=q[1],R=Object(n.useState)(!1),F=Object(s.a)(R,2),T=F[0],U=F[1],z=Object(n.useState)(0),J=Object(s.a)(z,2),V=J[0],_=J[1],$=Object(n.useState)(0),G=Object(s.a)($,2),K=G[0],X=G[1],Y=function(t){return t.x===i.x&&t.y===i.y},Z=function(t){return t.x===h.x&&t.y===h.y},tt=function(t){return p.some((function(e){return e.x===t.x&&e.y===t.y}))},et=function(e,a){var n=0,r=!0,o=!1,i=void 0;try{for(var s,c=function(){var e=s.value;if(Y(e)||Z(e))return"continue";setTimeout((function(){document.getElementById("cell-".concat(e.x,"-").concat(e.y)).classList.add("visited")}),2.5/t.speed*n),n++},l=e[Symbol.iterator]();!(r=(s=l.next()).done);r=!0)c()}catch(v){o=!0,i=v}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}var u=!0,h=!1,f=void 0;try{for(var d,m=function(){var e=d.value;if(Y(e)||Z(e))return"continue";setTimeout((function(){document.getElementById("cell-".concat(e.x,"-").concat(e.y)).classList.add("path")}),2.5/t.speed*n),n++},p=a[Symbol.iterator]();!(u=(d=p.next()).done);u=!0)m()}catch(v){h=!0,f=v}finally{try{u||null==p.return||p.return()}finally{if(h)throw f}}},at=function(){for(var t=0;t<20;t++)for(var e=0;e<36;e++)document.getElementById("cell-".concat(t,"-").concat(e)).classList.remove("path"),document.getElementById("cell-".concat(t,"-").concat(e)).classList.remove("visited")},nt=function(t){Y(t)||Z(t)||(tt(t)?rt(t):v((function(e){return[].concat(Object(x.a)(e),[t])})))},rt=function(t){var e=p.findIndex((function(e){return e.x===t.x&&e.y===t.y}));-1!==e&&(p.splice(e,1),v((function(t){return Object(x.a)(t)})))},ot=0;ot<20;ot++){for(var it=[],st=function(t){var e={x:ot,y:t};it.push(r.a.createElement(H,{key:t,start:Y(e),end:Z(e),pos:e,wall:tt(e),mouseDownHandler:function(t){w(!0),nt(t)},mouseEnterHandler:function(t){j&&c(t),M&&f(t),E&&nt(t)},mouseLeaveHandler:function(t){w(!1)},clickHandler:function(){j&&(c(e),C(!1),rt(e)),M&&(f(e),W(!1),rt(e)),Y(e)&&!j&&C(!0),Z(e)&&!M&&W(!0)}}))},ct=0;ct<36;ct++)st(ct);e.push(r.a.createElement("div",{className:"row",key:ot},it))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:T,autoHideDuration:6e3,onClose:function(){U(!1)}},r.a.createElement(Q,{onClose:function(){U(!1)},variant:"error",message:"Path not found!"})),r.a.createElement(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:D,autoHideDuration:6e3,onClose:function(){I(!1)}},r.a.createElement(Q,{onClose:function(){I(!1)},variant:"success",message:"Path found! (Path length: ".concat(V,", time: ").concat(K.toFixed(2),"ms)")})),r.a.createElement(P.a,{style:{marginTop:12},className:"menu"},r.a.createElement(b.a,{color:"primary",onClick:function(){at();var t=new B(20,36,i,h,p);try{var e=t.bfs();et(e.visited,e.path),_(e.path.length),X(e.time),I(!0)}catch(a){U(!0)}}},"Breadth first Search"),r.a.createElement(b.a,{color:"primary",onClick:function(){at();var t=new B(20,36,i,h,p);try{var e=t.dfs();et(e.visited,e.path),_(e.path.length),X(e.time),I(!0)}catch(a){U(!0)}}},"Depth first Search"),r.a.createElement(b.a,{color:"primary",onClick:function(){at();var t=new B(20,36,i,h,p);try{var e=t.bidirectionalBFS();et(e.visited,e.path),_(e.path.length),X(e.time),I(!0)}catch(a){U(!0)}}},"Bidirectional BFS"),r.a.createElement(b.a,{color:"primary",onClick:function(){at();var t=new B(20,36,i,h,p);try{var e=t.aStar();et(e.visited,e.path),_(e.path.length),X(e.time),I(!0)}catch(a){U(!0)}}},"A* Search"),r.a.createElement("br",null),r.a.createElement(b.a,{color:"default",onClick:function(){v([])}},"Clear walls"),r.a.createElement(b.a,{color:"default",onClick:function(){at()}},"Clear path")),r.a.createElement("div",null,e))}var Y=function(){r.a.useEffect((function(){Object(j.loadCSS)("https://use.fontawesome.com/releases/v5.1.0/css/all.css",document.querySelector("#font-awesome-css"))}),[]);var t=Object(n.useState)(.5),e=Object(s.a)(t,2),a=e[0],o=e[1],i=Object(n.useState)(.5),k=Object(s.a)(i,2),x=k[0],S=k[1],P=Object(n.useState)(!1),C=Object(s.a)(P,2),N=C[0],B=C[1];return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{position:"static"},r.a.createElement(l.a,{style:{minHeight:48}},r.a.createElement(u.a,{variant:"h6",style:{marginRight:16,marginLeft:-12}},"Pathfinding Algorithms"),r.a.createElement(h.a,{color:"inherit",style:{marginLeft:"auto",marginRight:-12},onClick:function(){return B(!0)}},r.a.createElement(O.a,null)),r.a.createElement(h.a,{color:"inherit",style:{marginLeft:10},href:"https://github.com",target:"_blank",rel:"noopener"},r.a.createElement(f.a,{className:"fab fa-github"})))),r.a.createElement(d.a,{open:N,"aria-labelledby":"form-dialog-title"},r.a.createElement(m.a,{id:"form-dialog-title"},"Settings"),r.a.createElement(p.a,null,r.a.createElement(v.a,null,"Adjust the speed of the simulation."),r.a.createElement("div",null,r.a.createElement(u.a,{gutterBottom:!0},"Speed"),r.a.createElement(y.a,{min:1,value:100*a,onChange:function(t,e){return o(e/100)},"aria-labelledby":"continuous-slider"}))),r.a.createElement(g.a,null,r.a.createElement(b.a,{onClick:function(){o(x),B(!1)},color:"default"},"Cancel"),r.a.createElement(b.a,{onClick:function(){S(a),B(!1)},color:"primary"},"Save"))),r.a.createElement(E.a,{maxWidth:!1},r.a.createElement(X,{speed:x}),r.a.createElement("footer",null,"Made by ",r.a.createElement(w.a,{href:"https://lluis.life",target:"_blank",rel:"noopener"},"Llu\xeds Camino")," with React")))},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function tt(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}i.a.render(r.a.createElement(Y,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/pathfinding-algorithms",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/pathfinding-algorithms","/service-worker.js");Z?(!function(t,e){fetch(t).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):tt(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):tt(e,t)}))}}()}},[[57,1,2]]]);
//# sourceMappingURL=main.672f742a.chunk.js.map