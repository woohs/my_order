(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(15),n(1)),m=n(2),s=n(4),l=n(3),d=n(5),u=n(8),h=(n(16),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).handleOpenEditArea=function(){n.setState({editing:!0})},n.handleCommentChange=function(e){n.setState({comment:e.target.value})},n.handleClickStars=function(e){n.setState({stars:e})},n.handleCancelComment=function(){n.setState({editing:!1,stars:n.props.data.stars||0,comment:n.props.data.comment||""})},n.handleSubmitComment=function(){var e=n.props.data.id,t=n.state,a=t.comment,r=t.stars;n.setState({editing:!1}),n.props.onSubmit(e,a,r)},n.handleCheckComment=function(){n.setState({editing:!0})},n.state={editing:!1,stars:e.data.stars||0,comment:e.data.comment||"",ifCommented:e.data.ifCommented||!1},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.shop,n=e.product,a=e.price,o=e.picture,c=e.ifCommented;return r.a.createElement("div",null,r.a.createElement("div",{className:"orderItem"},r.a.createElement("div",{className:"orderItem__picContainer"},r.a.createElement("img",{className:"orderItem__pic",src:o})),r.a.createElement("div",{className:"orderItem__content"},r.a.createElement("div",{className:"orderItem__product"},n),r.a.createElement("div",{className:"orderItem__shop"},t),r.a.createElement("div",{className:"orderItem__detail"},r.a.createElement("div",{className:"orderItem__price"},a),r.a.createElement("div",null,c?r.a.createElement("button",{className:"orderItem__btn orderItem__btn--grey",onClick:this.handleCheckComment},"\u5df2\u8bc4\u4ef7"):r.a.createElement("button",{className:"orderItem__btn orderItem__btn--red",onClick:this.handleOpenEditArea},"\u8bc4\u4ef7"))))),this.state.editing?this.renderEditArea():null)}},{key:"renderEditArea",value:function(){return r.a.createElement("div",{className:"orderItem__commentContainer"},r.a.createElement("textarea",{className:"orderItem__comment",onChange:this.handleCommentChange,value:this.state.comment}),this.renderStars(),this.props.data.ifCommented?null:r.a.createElement("button",{className:"orderItem__btn orderItem__btn--red",onClick:this.handleSubmitComment},"\u63d0\u4ea4"),r.a.createElement("button",{className:"orderItem__btn orderItem__btn--grey",onClick:this.handleCancelComment},"\u53d6\u6d88"))}},{key:"renderStars",value:function(){var e=this,t=this.state.stars;return r.a.createElement("div",null,[1,2,3,4,5].map(function(n,a){var o=t>=n?"orderItem_star--light":"";return r.a.createElement("span",{key:a,className:o,onClick:e.handleClickStars.bind(e,n)},"\u2605")}))}}]),t}(a.Component)),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).handleSubmit=function(e,t,a){var r=n.state.data.map(function(n){return n.id===e?Object(u.a)({},n,{comment:t,stars:a,ifCommented:!0}):n});n.setState({data:r})},n.state={data:[]},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/mock/orders.json").then(function(t){t.ok&&t.json().then(function(t){e.setState({data:t})})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.data.map(function(t){return r.a.createElement(h,{key:t.id,data:t,onSubmit:e.handleSubmit})}))}}]),t}(a.Component),b=(n(17),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},"\u6211\u7684\u8ba2\u5355")}}]),t}(a.Component)),f=(n(18),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(b,null),r.a.createElement(p,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.3a8c0f0e.chunk.js.map