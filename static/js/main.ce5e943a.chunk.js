(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(13),i=n.n(r),s=n(4),o=n.n(s),l=n(6),u=n(3),d=n(9),p=(n(19),n(8)),b=n(5),j=n(0),h=function(e){var t=e.audioRef,n=e.currentSong,a=e.isPlaying,c=e.setIsPlaying,r=e.setSongInfo,i=e.songInfo,s=e.songs,d=e.setCurrentSong,h=e.setSongs,f=function(e){var t=s.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));h(t)},g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(l.a)(o.a.mark((function e(c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.findIndex((function(e){return e.id===n.id})),"skip-forward"!==c){e.next=5;break}return e.next=4,d(s[(r+1)%s.length]);case 4:f(s[(r+1)%s.length]);case 5:if("skip-back"!==c){e.next=14;break}if((r-1)%s.length!==-1){e.next=12;break}return e.next=9,d(s[s.length-1]);case 9:return f(s[s.length-1]),a&&t.current.play(),e.abrupt("return");case 12:d(s[(r-1)%s.length]),f(s[(r-1)%s.length]);case 14:a&&t.current.play();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsxs)("div",{className:"time-control",children:[Object(j.jsx)("p",{children:g(i.currentTime)}),Object(j.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(n.color[0],",").concat(n.color[1],")")},className:"track",children:[Object(j.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){t.current.currentTime=e.target.value,r(Object(u.a)(Object(u.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(j.jsx)("div",{style:O,className:"animate-track"})]}),Object(j.jsx)("p",{children:i.duration?g(i.duration):"0:00"})]}),Object(j.jsxs)("div",{className:"play-control",children:[Object(j.jsx)(p.a,{onClick:function(){return m("skip-back")},className:"skip-back",size:"2x",icon:b.a}),Object(j.jsx)(p.a,{onClick:function(){a?(t.current.pause(),c(!a)):(t.current.play(),c(!a))},className:"play",size:"2x",icon:a?b.d:b.e}),Object(j.jsx)(p.a,{onClick:function(){return m("skip-forward")},className:"skip-forward",size:"2x",icon:b.b})]})]})},f=n(7),g=function(e){var t=e.currentSong,n=e.isPlaying;return Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("img",Object(f.a)({className:n?"song-playing":"",alt:t.name,src:t.cover},"alt","")),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("h3",{children:t.artist})]})},m=function(e){var t=e.song,n=e.songs,a=e.setCurrentSong,c=e.id,r=e.audioRef,i=e.isPlaying,s=e.setSongs,d=function(){var e=Object(l.a)(o.a.mark((function e(){var t,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.id===c})),e.next=3,a(t[0]);case 3:l=n.map((function(e){return e.id===c?Object(u.a)(Object(u.a)({},e),{},{active:!0}):Object(u.a)(Object(u.a)({},e),{},{active:!1})})),s(l),i&&r.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{onClick:d,className:"library-song ".concat(t.active?"selected":""),children:[Object(j.jsx)("img",Object(f.a)({alt:t.name,src:t.cover},"alt","")),Object(j.jsxs)("div",{className:"song-description",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("h4",{children:t.artist})]})]})},O=function(e){var t=e.songs,n=e.setCurrentSong,a=e.audioRef,c=e.isPlaying,r=e.setSongs,i=e.libraryStatus;return Object(j.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(j.jsx)("h2",{children:"Library"}),Object(j.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(j.jsx)(m,{songs:t,song:e,setCurrentSong:n,id:e.id,audioRef:a,isPlaying:c,setSongs:r},e.id)}))})]})},v=function(e){var t=e.setLibraryStatus,n=e.libraryStatus;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"RickDev Player"}),Object(j.jsxs)("button",{onClick:function(){return t(!n)},children:["Library",Object(j.jsx)(p.a,{icon:b.c})]})]})},x=n(28);var y=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(x.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(x.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(x.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(x.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(x.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(x.a)(),active:!1}]};var S=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(y()),n=Object(d.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(c[0]),s=Object(d.a)(i,2),p=s[0],b=s[1],f=Object(a.useState)(!1),m=Object(d.a)(f,2),x=m[0],S=m[1],k=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(d.a)(k,2),C=w[0],N=w[1],P=Object(a.useState)(!1),I=Object(d.a)(P,2),T=I[0],A=I[1],M=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);N(Object(u.a)(Object(u.a)({},C),{},{currentTime:t,duration:n,animationPercentage:r}))},R=function(){var t=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.findIndex((function(e){return e.id===p.id})),t.next=3,b(c[(n+1)%c.length]);case 3:x&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App ".concat(T?"library-active":""),children:[Object(j.jsx)(v,{libraryStatus:T,setLibraryStatus:A}),Object(j.jsx)(g,{currentSong:p,isPlaying:x}),Object(j.jsx)(h,{audioRef:e,isPlaying:x,setIsPlaying:S,currentSong:p,setSongInfo:N,songInfo:C,songs:c,setCurrentSong:b,setSongs:r}),Object(j.jsx)(O,{audioRef:e,songs:c,setCurrentSong:b,isPlaying:x,setSongs:r,libraryStatus:T}),Object(j.jsx)("audio",{onTimeUpdate:M,onLoadedMetadata:M,ref:e,src:p.audio,onEnded:R})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),k()}},[[26,1,2]]]);
//# sourceMappingURL=main.ce5e943a.chunk.js.map