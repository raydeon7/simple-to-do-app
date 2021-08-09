(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),l=r.n(n),o=r(6),c=r.n(o),s=(r(13),r(0));var i=function(){return Object(s.jsx)("h1",{className:"uppercase text-4xl font-bold text-gray-100 tracking-wider",children:"To Do App"})},a=r(7),d=r(8),u=r(4);var x=function(e){var t=e.todos,r=e.setTodos,n=function(e){e,r(t)};return Object(s.jsxs)("div",{className:"w-full h-auto py-6 px-6 bg-gray-100 rounded-md shadow-md",children:[Object(s.jsx)("ul",{className:"flex flex-col divide-y border-gray-600",children:t.map((function(e){return Object(s.jsxs)("li",{className:"flex flex-row py-2 m-0 gap-4 items-center",children:[Object(s.jsx)("input",{type:"checkbox",class:"flex-shrink focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",checked:e.isComplete?"checked":null,onChange:function(){return function(e){var n=t.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{isComplete:t.id===e}):Object(u.a)({},t)}));console.log(n),r(n)}(e.id)}}),Object(s.jsx)("p",{className:"flex-grow p-0 text-gray-800 "+(e.isComplete?"line-through":null),children:e.title}),Object(s.jsx)("button",{className:"bg-red-600 hover:bg-red-800 p-2 rounded-md text-white",onClick:function(){return function(e){var n=t.filter((function(t){return t.id!==e}));r(n)}(e.id)},children:Object(s.jsx)("span",{children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"flex-shrink h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})})})})]},e.id)}))}),Object(s.jsxs)("div",{className:"flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center mt-8",children:[Object(s.jsx)("p",{className:"flex-shrink order-3 lg:order-1 text-gray-600 text-sm font-light tracking-wider",children:"3 Items Left"}),Object(s.jsxs)("div",{className:"flex-grow flex flex-row order-1 lg:order-2 justify-center items-center gap-2 text-gray-600 text-basee font-light tracking-wider",children:[Object(s.jsx)("button",{className:"rounded-md text-sm bg-blue-600 text-gray-100 hover:bg-blue-800 hover:text-gray-100 py-1 px-2",onClick:function(){return n("all")},children:"All"}),Object(s.jsx)("button",{className:"rounded-md bg-transparent text-sm text-gray-600 hover:bg-blue-800 hover:text-gray-100 py-1 px-2",onClick:function(){return n("active")},children:"Active"}),Object(s.jsx)("button",{className:"rounded-md bg-transparent text-sm text-gray-600 hover:bg-blue-800 hover:text-gray-100 py-1 px-2",onClick:function(){return n("complete")},children:"Complete"})]}),Object(s.jsx)("a",{className:"order-2 lg:order-3 text-sm text-gray-600 font-light tracking-wider",href:"#",onClick:function(){return function(){var e=t.filter((function(e){return!0!==e.isComplete}));r(e)}()},children:"Clear Completed"})]})]})};var b=function(){var e=Object(n.useState)([{id:1,isComplete:!0,title:"Boil water in saucepan"},{id:2,isComplete:!1,title:"Put the egg in saucepan"},{id:3,isComplete:!1,title:"Submerge the egg in water"},{id:4,isComplete:!1,title:"Peel and enjoy it!"}]),t=Object(d.a)(e,2),r=t[0],l=t[1],o="";return Object(s.jsxs)("div",{className:"flex flex-col gap-4",children:[Object(s.jsxs)("div",{className:"w-full h-auto py-6 px-6 bg-gray-100 rounded-md shadow-md flex flex-row",children:[Object(s.jsx)("input",{type:"text",className:"flex-grow w-auto h-auto p-2 text-base rounded-l-md outline-none focus:ring focus:border-blue-300",placeholder:"Input task",onChange:function(e){o=e.target.value}}),Object(s.jsx)("button",{className:"flex-shrink w-auto h-auto py-2 px-4 lg:px-8 text-base rounded-r-md bg-blue-600 text-gray-100 hover:bg-blue-800 hover:text-gray-100",onClick:function(){return function(){var e=0;r.map((function(t){t.id>=e&&(e=t.id+1)})),l([].concat(Object(a.a)(r),[{id:e,isComplete:!1,title:o}]))}()},children:"Add"})]}),Object(s.jsx)(x,{todos:r,setTodos:l})]})};var p=function(){return Object(s.jsx)("h6",{className:"font-thin text-gray-400 text-sm tracking-wider",children:"To Do App By Rai Raksa"})};var g=function(){return Object(s.jsxs)("div",{className:"App bg-gray-800 relative w-full min-h-screen pt-20",children:[Object(s.jsx)("div",{className:"absolute left-0 top-0 w-full h-72 bg-gradient-to-br from-blue-400 to-blue-600 via-blue-500 z-0"}),Object(s.jsx)("div",{className:"absolute top-0 w-full h-auto pt-16 px-4 py-4 lg:px-0",children:Object(s.jsxs)("div",{className:"w-full lg:w-1/3 mx-auto flex flex-col gap-4",children:[Object(s.jsx)(i,{}),Object(s.jsx)(b,{}),Object(s.jsx)(p,{})]})})]})};c.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8ed2bf4.chunk.js.map