(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),o=t.n(c),m=(t(13),t(1)),i=(t(15),t(17),"http://localhost:8000/data_array/");var r=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(""),r=Object(m.a)(o,2),s=r[0],u=r[1],d=Object(n.useState)(""),p=Object(m.a)(d,2),E=p[0],b=p[1],h=Object(n.useState)(""),v=Object(m.a)(h,2),f=v[0],g=v[1],N=Object(n.useState)(""),y=Object(m.a)(N,2),j=y[0],O=y[1],C=Object(n.useState)(""),w=Object(m.a)(C,2),S=w[0],A=w[1],T=Object(n.useState)(""),k=Object(m.a)(T,2),P=k[0],D=k[1];function F(){fetch(i).then(function(e){return e.json()}).then(function(e){c(e)})}return Object(n.useEffect)(function(){F()},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"div1"},l.a.createElement("span",{className:"spanClass"},"Tech Parichay"),l.a.createElement("div",null,l.a.createElement("a",{className:"atag",href:"https://www.youtube.com/@TechParichay",target:"_blank",rel:"noreferrer"},"Youtube")),l.a.createElement("div",{className:"floating-div"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",null,"Add/Update Employees")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",null,l.a.createElement("button",{className:"addbtn"},"+")),l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:E,onChange:function(e){return b(e.target.value)},name:"name",placeholder:"Employee Name"}),l.a.createElement("input",{type:"number",value:f,onChange:function(e){return g(e.target.value)},name:"age",placeholder:"Employee Age"}),l.a.createElement("input",{type:"email",value:j,onChange:function(e){return O(e.target.value)},name:"email",placeholder:"Employee Email Id"}),l.a.createElement("input",{type:"number",value:S,onChange:function(e){return A(e.target.value)},name:"mobileno",placeholder:"Employee Mobile No."}),l.a.createElement("input",{type:"text",value:P,onChange:function(e){return D(e.target.value)},name:"photo",placeholder:"Use Photo URL"}),l.a.createElement("br",null),l.a.createElement("div",{className:"info butDiv"},l.a.createElement("button",{className:"btn",type:"submit",onClick:function(){console.log({id:s,name:E,age:f,mobileno:S,email:j,photo:P});var e={id:s,name:E,age:f,mobileno:S,email:j,photo:P};fetch("".concat(i,"/").concat(s),{method:"PUT",headers:{"Access-Control-Allow-Origin":"*",Accept:"applcation/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){e.json().then(function(e){F()})})}},"Update"),l.a.createElement("button",{className:"btn",type:"submit",onClick:function(){console.log({id:s,name:E,age:f,mobileno:S,email:j,photo:P});var e={name:E,age:f,mobileno:S,email:j,photo:P};fetch(i,{method:"POST",headers:{"Access-Control-Allow-Origin":"*",Accept:"applcation/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){F()})}},"Add New")))))),t.map(function(e,a){return l.a.createElement("div",{key:a,className:"floating-div"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",null,"Employees Details--@@")),l.a.createElement("div",{className:"divImg"},l.a.createElement("img",{src:e.photo,alt:"img"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"info"},l.a.createElement("p",{className:"label"},"Name : "),l.a.createElement("p",{className:"value"},e.name)),l.a.createElement("div",{className:"info"},l.a.createElement("p",{className:"label"},"Age : "),l.a.createElement("p",{className:"value"},e.age)),l.a.createElement("div",{className:"info"},l.a.createElement("p",{className:"label"},"Email : "),l.a.createElement("p",{className:"value"},e.email)),l.a.createElement("div",{className:"info"},l.a.createElement("p",{className:"label"},"Mobile No. : "),l.a.createElement("p",{className:"value"},e.mobileno)),l.a.createElement("div",{className:"info butDiv"},l.a.createElement("button",{className:"btn",onClick:function(){return function(e){console.warn(t[e-1]," --id");var a=t[e-1];u(a.id),b(a.name),g(a.age),O(a.email),A(a.mobileno),D(a.photo)}(e.id)}},"Edit"),l.a.createElement("button",{className:"btn",onClick:function(){return a=e.id,void fetch("".concat(i,"/").concat(a),{method:"DELETE"}).then(function(e){e.json().then(function(e){F()})});var a}},"Delete")))))})))},s=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,20)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,o=a.getTTFB;t(e),n(e),l(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r,null))),s()},4:function(e,a,t){e.exports=t(19)}},[[4,3,2]]]);
//# sourceMappingURL=main.1827b4a2.chunk.js.map