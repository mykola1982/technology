"use strict";(self.webpackChunktechnology=self.webpackChunktechnology||[]).push([[740],{740:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(433),i=t(439),a=t(791),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},d=t(184),s="\u0414\u0456\u043b\u044c\u043d\u0438\u0446\u044f \u0437 \u0427\u041f\u0423",o="\u0428\u0442\u0430\u043c\u043f\u043e\u0432\u043e\u0447\u043d\u0430 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044f",l=["2500x1250 \u041e\u0446.","2500x1250 \u0421\u04423.","2500x1250 AISI 304","2500x1250 AISI 430","2000x1000 \u041e\u0446.","2000x1000 \u0421\u04423.","2000x1000 AISI 304","2000x1000 AISI 430","\u0449\u043e\u0441\u044c"],c=["0.8","1.0","1.2","1.5","1.8","2.0","2.5","3.0"],m=function(e){var n=e.onSubmit,t=u(),r=u(),m=u(),h=(0,a.useState)(!1),p=(0,i.Z)(h,2),b=p[0],x=p[1];return(0,d.jsxs)("form",{style:{display:" inline-grid"},onSubmit:function(e){e.preventDefault();var t=e.currentTarget,r=t.elements.name.value,i=t.elements.number.value,a=t.elements.quantity.value,u=t.elements.department.value,d=t.elements.thickness.value,s=t.elements.material.value;n({name:r,number:i,quantity:a,department:u,thickness:d,material:s}),t.reset()},children:[(0,d.jsx)("label",{htmlFor:t,children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,d.jsx)("input",{type:"text",name:"name",id:t}),(0,d.jsx)("label",{htmlFor:r,children:"\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440"}),(0,d.jsx)("input",{type:"text",name:"number",id:r}),(0,d.jsx)("label",{htmlFor:m,children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0437 \u043b\u0438\u0441\u0442\u0430"}),(0,d.jsx)("input",{type:"number",name:"quantity",id:m}),(0,d.jsx)("p",{children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0447\u0443 \u0434\u0456\u043b\u044c\u043d\u0438\u0446\u044e"}),(0,d.jsxs)("label",{children:["\u0427\u041f\u0423",(0,d.jsx)("input",{type:"radio",checked:!0,name:"department",value:s})]}),(0,d.jsxs)("label",{children:["\u0428\u0442\u0430\u043c\u043f\u043e\u0432\u043a\u0430",(0,d.jsx)("input",{type:"radio",name:"department",value:o})]}),(0,d.jsxs)("label",{children:["\u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443:",(0,d.jsx)("select",{name:"thickness",children:c.map((function(e){return(0,d.jsxs)("option",{value:e,children:[e," \u043c\u043c."]},u())}))})]}),(0,d.jsxs)("label",{children:["\u0420\u043e\u0437\u043c\u0456\u0440 \u043b\u0438\u0441\u0442\u0430 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0443:",(0,d.jsx)("select",{name:"material",children:l.map((function(e){return(0,d.jsx)("option",{value:e,children:e},u())}))})]}),(0,d.jsxs)("label",{children:["\u0412\u0441\u0456 \u0434\u0430\u043d\u0456 \u0432\u0432\u0435\u0434\u0435\u043d\u0456 \u0432\u0456\u0440\u043d\u043e",(0,d.jsx)("input",{type:"checkbox",checked:b,onChange:function(e){x(e.target.checked)}})]}),(0,d.jsx)("button",{type:"submit",disabled:!b,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0434\u0435\u0442\u0430\u043b\u044c \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0443"})]})},h=function(e){var n=e.value,t=e.onChange;return(0,d.jsx)("div",{children:(0,d.jsx)("input",{type:"text",name:"filter",value:n,onChange:t})})},p=function(e){var n=e.id,t=e.name,r=e.number,i=e.onSelectProduct;return(0,d.jsx)("li",{onClick:function(){i(n)},onFocus:function(){return console.log(n)},style:{cursor:"pointer"},children:(0,d.jsxs)("p",{children:[t," - ",r]})})},b=t(366),x=t(462),v=t(182),j=t(419),f=t(543),g=t(388);var y=a.createContext({}),S=t(407),k=t(225);function Z(e){return(0,k.Z)("MuiList",e)}(0,S.Z)("MuiList",["root","padding","dense","subheader"]);var P=["children","className","component","dense","disablePadding","subheader"],w=(0,f.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disablePadding&&n.padding,t.dense&&n.dense,t.subheader&&n.subheader]}})((function(e){var n=e.ownerState;return(0,x.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!n.disablePadding&&{paddingTop:8,paddingBottom:8},n.subheader&&{paddingTop:0})})),C=a.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiList"}),r=t.children,i=t.className,u=t.component,s=void 0===u?"ul":u,o=t.dense,l=void 0!==o&&o,c=t.disablePadding,m=void 0!==c&&c,h=t.subheader,p=(0,b.Z)(t,P),f=a.useMemo((function(){return{dense:l}}),[l]),S=(0,x.Z)({},t,{component:s,dense:l,disablePadding:m}),k=function(e){var n=e.classes,t={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,j.Z)(t,Z,n)}(S);return(0,d.jsx)(y.Provider,{value:f,children:(0,d.jsxs)(w,(0,x.Z)({as:s,className:(0,v.Z)(k.root,i),ref:n,ownerState:S},p,{children:[h,r]}))})})),q=function(e){var n=e.products,t=e.onSelectProduct;return(0,d.jsx)(C,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:300,"& ul":{padding:0}},children:(0,d.jsx)("li",{children:n.map((function(e){var n=e.id,r=e.name,i=e.number;return(0,d.jsx)(p,{id:n,name:r,number:i,onSelectProduct:t},n)}))})})},I=function(e){var n=e.product,t=n.name,r=n.number,i=n.quantity,a=n.department,u=n.thickness,s=n.material;return(0,d.jsxs)("div",{children:["\u0422\u0443\u0442 \u0431\u0443\u0434\u0435 \u0434\u0435\u043b\u044c\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u043f\u0440\u043e \u0434\u0435\u0442\u0430\u043b\u044c",(0,d.jsxs)("h2",{children:["\u041e\u043f\u0438\u0441 \u0434\u0435\u0442\u0430\u043b\u0456 - ",t," ",r]}),(0,d.jsxs)("p",{children:["\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f - ",t]}),(0,d.jsxs)("p",{children:["\u0414\u0435\u0446\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 - ",r]}),(0,d.jsxs)("p",{children:["\u0414\u0456\u043b\u044c\u043d\u0438\u0446\u044f \u0432\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044f -",a]}),(0,d.jsxs)("p",{children:["\u041c\u0430\u0442\u0435\u0440\u0456\u0430\u043b -",s," "]}),(0,d.jsx)("p",{children:"\u041d\u043e\u0440\u043c\u0430 \u0432\u0438\u0442\u0440\u0430\u0442\u0438"}),(0,d.jsxs)("p",{children:["\u0422\u043e\u0432\u0449\u0438\u043d\u0430 \u043c\u0435\u0442\u0430\u043b\u0443-",u," \u043c\u043c."]}),(0,d.jsxs)("p",{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u043b\u0438\u0441\u0442\u0430-",i," \u0448\u0442."]})]})},L=[{id:"1",name:"\u041f\u0456\u0434\u0441\u0438\u043b\u044e\u0432\u0430\u0447",number:"600.000.054.50-01",quantity:160},{id:"2",name:"\u041a\u0440\u043e\u043d\u0448\u0442\u0435\u0439\u043d",number:"600.000.054.51",quantity:154},{id:"3",name:"\u041a\u0440\u043e\u043d\u0448\u0442\u0435\u0439\u043d \u0442\u0435\u0440\u043c\u043e\u0441\u0442\u0430\u0442\u0430",number:"600.000.054.52"},{id:"4",name:"\u0424\u0456\u043a\u0441\u0430\u0442\u043e\u0440 \u0442\u043e\u0440\u0441\u0456\u043e\u043d\u0430",number:"600.000.054.53"},{id:"5",name:"\u041a\u0440\u043e\u043d\u0448\u0442\u0435\u0439\u043d",number:"600.000.054.54"},{id:"6",name:"\u041a\u0443\u0442\u043d\u0438\u043a",number:"600.000.054.55"},{id:"7",name:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0447\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0438",number:"600.000.054.56"},{id:"8",name:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0447\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0438",number:"600.000.054.56-01"},{id:"9",name:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0447\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0438",number:"600.000.054.56-02"},{id:"10",name:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0447\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0438",number:"600.000.054.56-03"},{id:"11",name:"\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u0430 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u0430",number:"600.000.054.60"},{id:"12",name:"\u041e\u0431\u043b\u0438\u0446\u044e\u0432\u0430\u043d\u043d\u044f \u043d\u0438\u0436\u043d\u0454",number:"300.000.054.61"},{id:"13",name:"\u041e\u0441\u043d\u043e\u0432\u0430 \u043b\u0430\u0439\u0442-\u0431\u043e\u043a\u0441\u0430",number:"321.000.054.62"},{id:"14",name:"\u041f\u0456\u0434\u0441\u0438\u043b\u044e\u0432\u0430\u0447 \u0432\u0435\u0440\u0445\u043d\u0431\u043e\u0457 \u0432\u0441\u0442\u0430\u0432\u043a\u0438",number:"600.000.054.63"},{id:"15",name:"\u0417\u0430\u0433\u043b\u0443\u0448\u043a\u0430",number:"000.000.054.64"},{id:"16",name:"\u041e\u0431\u043b\u0438\u0446\u044e\u0432\u0430\u043d\u043d\u044f",number:"600.000.054.65"},{id:"17",name:"\u041f\u0456\u0434\u0441\u0438\u043b\u044e\u0432\u0430\u0447",number:"600.000.054.66"},{id:"18",name:"\u041f\u0456\u0434\u0441\u0438\u043b\u044e\u0432\u0430\u0447",number:"600.000.054.67"},{id:"19",name:"\u0421\u0442\u0456\u0439\u043a\u0430 \u043f\u043e\u043b\u0438\u0446\u0456",number:"600.000.054.58"},{id:"20",name:"\u041a\u0440\u043e\u043d\u0448\u0442\u0435\u0439\u043d \u043f\u043e\u043b\u0438\u0446\u0456",number:"600.000.054.59"}],A=function(){return L},F=function(){var e=(0,a.useState)(A()),n=(0,i.Z)(e,2),t=n[0],s=n[1],o=(0,a.useState)(""),l=(0,i.Z)(o,2),c=l[0],p=l[1],b=(0,a.useState)({id:"1",name:"\u041f\u0456\u0434\u0441\u0438\u043b\u044e\u0432\u0430\u0447",number:"600.000.054.50-01",quantity:160}),x=(0,i.Z)(b,2),v=x[0],j=x[1],f=function(){var e=c.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)||n.number.startsWith(e)}))}();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{onSubmit:function(e){var n=e.name,t=e.number,i=e.quantity,a=e.department,d=e.thickness,o=e.material,l={id:u(),name:n,number:t,quantity:i,department:a,thickness:d,material:o};s((function(e){return[l].concat((0,r.Z)(e))}))}}),(0,d.jsx)("p",{children:"\u0442\u0443\u0442 \u0431\u0443\u0434\u0435 \u043b\u0438\u0441\u0442 \u0437 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u0454\u044e"}),(0,d.jsx)(h,{value:c,onChange:function(e){var n=e.currentTarget.value;p(n)}}),(0,d.jsx)(q,{products:f,onSelectProduct:function(e){console.log("\u0446\u0435 \u0432\u0438\u0431\u0440\u0430\u0432 \u0432 productpage",e),j(t.find((function(n){return n.id===e})))}}),(0,d.jsx)(I,{product:v})]})}}}]);
//# sourceMappingURL=740.99a196f1.chunk.js.map