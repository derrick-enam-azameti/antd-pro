(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6527],{46502:function(x){x.exports={baseView:"baseView___3sRG3",left:"left___GavW0",right:"right___3-EXe",avatar_title:"avatar_title___13ztg",avatar:"avatar___1GisI",button_view:"button_view___o9apF",area_code:"area_code___3Tg4d",phone_number:"phone_number___1bV0u"}},41215:function(x){x.exports={main:"main___2yGev",leftMenu:"leftMenu___179-W",right:"right___2jdGg",title:"title___3cGwa"}},60503:function(x,P,t){"use strict";t.r(P),t.d(P,{default:function(){return me}});var p=t(11849),z=t(2824),fe=t(30887),V=t(18515),y=t(67294),G=t(21349),pe=t(47673),I=t(4107),ge=t(34792),W=t(48086),g=t(3182),je=t(43185),b=t(11324),ye=t(57663),L=t(71577),R=t(94043),o=t.n(R),T=t(84391),S=t(952),A=t(5966),K=t(90672),E=t(64317),$=t(97462),U=t(61768),Z=t(25377);function O(){return C.apply(this,arguments)}function C(){return C=(0,g.Z)(o().mark(function l(){return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,Z.WY)("/api/accountSettingCurrentUser"));case 1:case"end":return n.stop()}},l)})),C.apply(this,arguments)}function Y(){return w.apply(this,arguments)}function w(){return w=(0,g.Z)(o().mark(function l(){return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,Z.WY)("/api/geographic/province"));case 1:case"end":return n.stop()}},l)})),w.apply(this,arguments)}function Q(l){return N.apply(this,arguments)}function N(){return N=(0,g.Z)(o().mark(function l(s){return o().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,Z.WY)("/api/geographic/city/".concat(s)));case 1:case"end":return i.stop()}},l)})),N.apply(this,arguments)}function xe(){return D.apply(this,arguments)}function D(){return D=_asyncToGenerator(_regeneratorRuntime.mark(function l(){return _regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/users"));case 1:case"end":return n.stop()}},l)})),D.apply(this,arguments)}var X=t(46502),v=t.n(X),e=t(85893),H=function(s,n,i){var r=n.split("-");r[0]||i("Please input your area code!"),r[1]||i("Please input your phone number!"),i()},J=function(s){var n=s.avatar;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:v().avatar_title,children:"\u5934\u50CF"}),(0,e.jsx)("div",{className:v().avatar,children:(0,e.jsx)("img",{src:n,alt:"avatar"})}),(0,e.jsx)(b.Z,{showUploadList:!1,children:(0,e.jsx)("div",{className:v().button_view,children:(0,e.jsxs)(L.Z,{children:[(0,e.jsx)(T.Z,{}),"\u66F4\u6362\u5934\u50CF"]})})})]})},k=function(){var s=(0,Z.QT)(function(){return O()}),n=s.data,i=s.loading,r=function(){if(n){if(n.avatar)return n.avatar;var d="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";return d}return""},B=function(){var c=(0,g.Z)(o().mark(function d(){return o().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:W.ZP.success("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F\u6210\u529F");case 1:case"end":return h.stop()}},d)}));return function(){return c.apply(this,arguments)}}();return(0,e.jsx)("div",{className:v().baseView,children:i?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:v().left,children:(0,e.jsxs)(S.ZP,{layout:"vertical",onFinish:B,submitter:{resetButtonProps:{style:{display:"none"}},submitButtonProps:{children:"\u66F4\u65B0\u57FA\u672C\u4FE1\u606F"}},initialValues:(0,p.Z)((0,p.Z)({},n),{},{phone:n==null?void 0:n.phone.split("-")}),hideRequiredMark:!0,children:[(0,e.jsx)(A.Z,{width:"md",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1!"}]}),(0,e.jsx)(A.Z,{width:"md",name:"name",label:"\u6635\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u6635\u79F0!"}]}),(0,e.jsx)(K.Z,{name:"profile",label:"\u4E2A\u4EBA\u7B80\u4ECB",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB!"}],placeholder:"\u4E2A\u4EBA\u7B80\u4ECB"}),(0,e.jsx)(E.Z,{width:"sm",name:"country",label:"\u56FD\u5BB6/\u5730\u533A",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u56FD\u5BB6\u6216\u5730\u533A!"}],options:[{label:"\u4E2D\u56FD",value:"China"}]}),(0,e.jsxs)(S.ZP.Group,{title:"\u6240\u5728\u7701\u5E02",size:8,children:[(0,e.jsx)(E.Z,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u6240\u5728\u7701!"}],width:"sm",fieldProps:{labelInValue:!0},name:"province",className:v().item,request:(0,g.Z)(o().mark(function c(){return o().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Y().then(function(h){var f=h.data;return f.map(function(a){return{label:a.name,value:a.id}})}));case 1:case"end":return u.stop()}},c)}))}),(0,e.jsx)($.Z,{name:["province"],children:function(d){var u=d.province;return(0,e.jsx)(E.Z,{params:{key:u==null?void 0:u.value},name:"city",width:"sm",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u6240\u5728\u57CE\u5E02!"}],disabled:!u,className:v().item,request:(0,g.Z)(o().mark(function h(){return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(u!=null&&u.key){a.next=2;break}return a.abrupt("return",[]);case 2:return a.abrupt("return",Q(u.key||"").then(function(j){var he=j.data;return he.map(function(M){return{label:M.name,value:M.id}})}));case 3:case"end":return a.stop()}},h)}))})}})]}),(0,e.jsx)(A.Z,{width:"md",name:"address",label:"\u8857\u9053\u5730\u5740",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u8857\u9053\u5730\u5740!"}]}),(0,e.jsxs)(U.Z,{name:"phone",label:"\u8054\u7CFB\u7535\u8BDD",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u8054\u7CFB\u7535\u8BDD!"},{validator:H}],children:[(0,e.jsx)(I.Z,{className:v().area_code}),(0,e.jsx)(I.Z,{className:v().phone_number})]})]})}),(0,e.jsx)("div",{className:v().right,children:(0,e.jsx)(J,{avatar:r()})})]})})},q=k,Ze=t(54421),m=t(38272),_=t(98522),ee=t(94506),te=t(73566),ne=function(){var s=function(){return[{title:"\u7ED1\u5B9A\u6DD8\u5B9D",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u6DD8\u5B9D\u8D26\u53F7",actions:[(0,e.jsx)("a",{children:"\u7ED1\u5B9A"},"Bind")],avatar:(0,e.jsx)(_.Z,{className:"taobao"})},{title:"\u7ED1\u5B9A\u652F\u4ED8\u5B9D",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u652F\u4ED8\u5B9D\u8D26\u53F7",actions:[(0,e.jsx)("a",{children:"\u7ED1\u5B9A"},"Bind")],avatar:(0,e.jsx)(ee.Z,{className:"alipay"})},{title:"\u7ED1\u5B9A\u9489\u9489",description:"\u5F53\u524D\u672A\u7ED1\u5B9A\u9489\u9489\u8D26\u53F7",actions:[(0,e.jsx)("a",{children:"\u7ED1\u5B9A"},"Bind")],avatar:(0,e.jsx)(te.Z,{className:"dingding"})}]};return(0,e.jsx)(y.Fragment,{children:(0,e.jsx)(m.ZP,{itemLayout:"horizontal",dataSource:s(),renderItem:function(i){return(0,e.jsx)(m.ZP.Item,{actions:i.actions,children:(0,e.jsx)(m.ZP.Item.Meta,{avatar:i.avatar,title:i.title,description:i.description})})}})})},re=ne,Fe=t(77576),ae=t(12028),ie=function(){var s=function(){var r=(0,e.jsx)(ae.Z,{checkedChildren:"\u5F00",unCheckedChildren:"\u5173",defaultChecked:!0});return[{title:"\u8D26\u6237\u5BC6\u7801",description:"\u5176\u4ED6\u7528\u6237\u7684\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[r]},{title:"\u7CFB\u7EDF\u6D88\u606F",description:"\u7CFB\u7EDF\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[r]},{title:"\u5F85\u529E\u4EFB\u52A1",description:"\u5F85\u529E\u4EFB\u52A1\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[r]}]},n=s();return(0,e.jsx)(y.Fragment,{children:(0,e.jsx)(m.ZP,{itemLayout:"horizontal",dataSource:n,renderItem:function(r){return(0,e.jsx)(m.ZP.Item,{actions:r.actions,children:(0,e.jsx)(m.ZP.Item.Meta,{title:r.title,description:r.description})})}})})},se=ie,ue={strong:(0,e.jsx)("span",{className:"strong",children:"\u5F3A"}),medium:(0,e.jsx)("span",{className:"medium",children:"\u4E2D"}),weak:(0,e.jsx)("span",{className:"weak",children:"\u5F31 Weak"})},le=function(){var s=function(){return[{title:"\u8D26\u6237\u5BC6\u7801",description:(0,e.jsxs)(e.Fragment,{children:["\u5F53\u524D\u5BC6\u7801\u5F3A\u5EA6\uFF1A",ue.strong]}),actions:[(0,e.jsx)("a",{children:"\u4FEE\u6539"},"Modify")]},{title:"\u5BC6\u4FDD\u624B\u673A",description:"\u5DF2\u7ED1\u5B9A\u624B\u673A\uFF1A138****8293",actions:[(0,e.jsx)("a",{children:"\u4FEE\u6539"},"Modify")]},{title:"\u5BC6\u4FDD\u95EE\u9898",description:"\u672A\u8BBE\u7F6E\u5BC6\u4FDD\u95EE\u9898\uFF0C\u5BC6\u4FDD\u95EE\u9898\u53EF\u6709\u6548\u4FDD\u62A4\u8D26\u6237\u5B89\u5168",actions:[(0,e.jsx)("a",{children:"\u8BBE\u7F6E"},"Set")]},{title:"\u5907\u7528\u90AE\u7BB1",description:"\u5DF2\u7ED1\u5B9A\u90AE\u7BB1\uFF1Aant***sign.com",actions:[(0,e.jsx)("a",{children:"\u4FEE\u6539"},"Modify")]},{title:"MFA \u8BBE\u5907",description:"\u672A\u7ED1\u5B9A MFA \u8BBE\u5907\uFF0C\u7ED1\u5B9A\u540E\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4E8C\u6B21\u786E\u8BA4",actions:[(0,e.jsx)("a",{children:"\u7ED1\u5B9A"},"bind")]}]},n=s();return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(m.ZP,{itemLayout:"horizontal",dataSource:n,renderItem:function(r){return(0,e.jsx)(m.ZP.Item,{actions:r.actions,children:(0,e.jsx)(m.ZP.Item.Meta,{title:r.title,description:r.description})})}})})},oe=le,ce=t(41215),F=t.n(ce),de=V.Z.Item,ve=function(){var s={base:"\u57FA\u672C\u8BBE\u7F6E",security:"\u5B89\u5168\u8BBE\u7F6E",binding:"\u8D26\u53F7\u7ED1\u5B9A",notification:"\u65B0\u6D88\u606F\u901A\u77E5"},n=(0,y.useState)({mode:"inline",selectKey:"base"}),i=(0,z.Z)(n,2),r=i[0],B=i[1],c=(0,y.useRef)(),d=function(){requestAnimationFrame(function(){if(!!c.current){var a="inline",j=c.current.offsetWidth;c.current.offsetWidth<641&&j>400&&(a="horizontal"),window.innerWidth<768&&j>400&&(a="horizontal"),B((0,p.Z)((0,p.Z)({},r),{},{mode:a}))}})};(0,y.useLayoutEffect)(function(){return c.current&&(window.addEventListener("resize",d),d()),function(){window.removeEventListener("resize",d)}},[c.current]);var u=function(){return Object.keys(s).map(function(a){return(0,e.jsx)(de,{children:s[a]},a)})},h=function(){var a=r.selectKey;switch(a){case"base":return(0,e.jsx)(q,{});case"security":return(0,e.jsx)(oe,{});case"binding":return(0,e.jsx)(re,{});case"notification":return(0,e.jsx)(se,{});default:return null}};return(0,e.jsx)(G.Z,{children:(0,e.jsxs)("div",{className:F().main,ref:function(a){a&&(c.current=a)},children:[(0,e.jsx)("div",{className:F().leftMenu,children:(0,e.jsx)(V.Z,{mode:r.mode,selectedKeys:[r.selectKey],onClick:function(a){var j=a.key;B((0,p.Z)((0,p.Z)({},r),{},{selectKey:j}))},children:u()})}),(0,e.jsxs)("div",{className:F().right,children:[(0,e.jsx)("div",{className:F().title,children:s[r.selectKey]}),h()]})]})})},me=ve}}]);
