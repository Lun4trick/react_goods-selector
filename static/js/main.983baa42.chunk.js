(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),a=c(5),o=c(6),l=c(8),r=c(7),d=c(1),i=c.n(d),u=(c(13),c(14),c(3)),b=c.n(u),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.handleClick=function(t){return e.state.selectedGood===t?e.setState({selectedGood:""}):e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood,c=t.length>0;return Object(j.jsxs)("main",{className:"section container",children:[Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c?"".concat(t," is selected"):"No goods selected",c&&Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",onClick:function(){return e.setState({selectedGood:""})},className:"delete ml-3"})]}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(c){var n=t===c;return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":n}),children:[Object(j.jsx)("td",{children:Object(j.jsx)("button",{"data-cy":n?"RemoveButton":"AddButton",type:"button",className:b()("button",{"is-info":n}),onClick:function(){e.handleClick(c)},children:n?"-":"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);s.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.983baa42.chunk.js.map