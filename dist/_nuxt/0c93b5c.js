(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{265:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o="https://jsonplaceholder.typicode.com"},271:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("c0b8e6aa",content,!0,{sourceMap:!1})},284:function(t,e,n){"use strict";n(271)},285:function(t,e,n){var o=n(107)((function(i){return i[1]}));o.push([t.i,".block[data-v-94eef6aa]{gap:16px;max-width:1000px}.block[data-v-94eef6aa],.row[data-v-94eef6aa]{display:flex;flex-direction:column}.label[data-v-94eef6aa]{text-transform:uppercase}.info[data-v-94eef6aa]{font-size:1.1em;font-weight:500}.number[data-v-94eef6aa]{color:#535bf2}",""]),o.locals={},t.exports=o},287:function(t,e,n){"use strict";n.r(e);n(43);var o=n(12),c=(n(60),n(109),n(19),n(265)),r={name:"Comment",mixins:[c.a],data:function(){return{comment:null}},created:function(){this.fetchComment()},methods:{fetchComment:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(c.a,"/comments/").concat(t.$route.params.id),e.next=3,fetch(n).then((function(t){return t.json()})).catch((function(t){return t.data}));case 3:t.comment=e.sent;case 4:case"end":return e.stop()}}),e)})))()}}},l=(n(284),n(42)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.comment?e("div",[e("h1",[t._v("\n\t\tКомментарий "),e("span",{staticClass:"number"},[t._v(t._s(t.comment.id))])]),t._v(" "),e("div",{staticClass:"block"},[e("div",{staticClass:"row"},[e("span",{staticClass:"label"},[t._v("Имя")]),t._v(" "),e("span",{staticClass:"info"},[t._v(t._s(t.comment.name))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"label"},[t._v("Email")]),t._v(" "),e("span",{staticClass:"info"},[t._v(t._s(t.comment.email))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"label"},[t._v("Комментарий")]),t._v(" "),e("span",{staticClass:"info"},[t._v(t._s(t.comment.body))])])])]):t._e()}),[],!1,null,"94eef6aa",null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var o={name:"CommentPage",components:{Comment:n(287).default}},c=n(42),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"page"},[t("Comment")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Comment:n(287).default})}}]);