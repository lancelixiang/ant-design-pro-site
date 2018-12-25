webpackJsonp([13],{1083:function(a,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=Object.assign||function(a){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t])}return a},p=l(n(1)),e=n(30),o=l(n(205)),c=l(n(1132));function l(a){return a&&a.__esModule?a:{default:a}}function u(a,s,n){return s in a?Object.defineProperty(a,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[s]=n,a}var i=function(a){var s;return(0,o.default)(c.default.avatarItem,(u(s={},c.default.avatarItemLarge,"large"===a),u(s,c.default.avatarItemSmall,"small"===a),u(s,c.default.avatarItemMini,"mini"===a),s))},r=function(a){var s=a.children,n=a.size,o=a.maxLength,l=a.excessItemsStyle,u=function(a,s){var n={};for(var t in a)s.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t]);return n}(a,["children","size","maxLength","excessItemsStyle"]),r=p.default.Children.count(s),k=o>=r?r:o,m=p.default.Children.toArray(s).slice(0,k).map(function(a){return p.default.cloneElement(a,{size:n})});if(k<r){var g=i(n);m.push(p.default.createElement("li",{key:"exceed",className:g},p.default.createElement(e.Avatar,{size:n,style:l},"+"+(r-o))))}return p.default.createElement("div",t({},u,{className:c.default.avatarList}),p.default.createElement("ul",null," ",m," "))};r.Item=function(a){var s=a.src,n=a.size,t=a.tips,o=a.onClick,c=void 0===o?function(){}:o,l=i(n);return p.default.createElement("li",{className:l,onClick:c},t?p.default.createElement(e.Tooltip,{title:t},p.default.createElement(e.Avatar,{src:s,size:n,style:{cursor:"pointer"}})):p.default.createElement(e.Avatar,{src:s,size:n}))},s.default=r},1131:function(a,s,n){a.exports={content:[["p",["code","maxLength"]," attribute specifies the maximum number of items to show while ",["code","excessItemsStyle"]," style the excess\nitem component."]],meta:{order:0,title:{"zh-CN":"\u8981\u663e\u793a\u7684\u6700\u5927\u9879\u76ee","en-US":"Max Items to Show"},filename:"scaffold/src/components/AvatarList/demo/maxLength.md",id:"scaffold-src-components-AvatarList-demo-maxLength"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> AvatarList <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/AvatarList\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">maxLength</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">excessItemsStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#f56a00\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fde3cf\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Jake<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Andy<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Niko<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Niko<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Niko<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Niko<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AvatarList</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var a=n(1),s=(n(11),function(a){return a&&a.__esModule?a:{default:a}}(n(1083)));return a.createElement(s.default,{size:"mini",maxLength:3,excessItemsStyle:{color:"#f56a00",backgroundColor:"#fde3cf"}},a.createElement(s.default.Item,{tips:"Jake",src:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"}),a.createElement(s.default.Item,{tips:"Andy",src:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"}),a.createElement(s.default.Item,{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}),a.createElement(s.default.Item,{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}),a.createElement(s.default.Item,{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}),a.createElement(s.default.Item,{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}))}}},1132:function(a,s){a.exports={avatarList:"avatarList___2TPU6",avatarItem:"avatarItem___3WwV6",avatarItemLarge:"avatarItemLarge___34d4X",avatarItemSmall:"avatarItemSmall___26OZD",avatarItemMini:"avatarItemMini___3A1Y7"}},1133:function(a,s,n){a.exports={content:[["p","Simplest of usage."]],meta:{order:0,title:{"zh-CN":"\u57fa\u7840\u6837\u4f8b","en-US":"Basic Usage"},filename:"scaffold/src/components/AvatarList/demo/simple.md",id:"scaffold-src-components-AvatarList-demo-simple"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> AvatarList <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/AvatarList\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Jake<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Andy<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Niko<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AvatarList</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var a=n(1),s=(n(11),function(a){return a&&a.__esModule?a:{default:a}}(n(1083)));return a.createElement(s.default,{size:"mini"},a.createElement(s.default.Item,{tips:"Jake",src:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"}),a.createElement(s.default.Item,{tips:"Andy",src:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"}),a.createElement(s.default.Item,{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}))}}},778:function(a,s,n){a.exports={maxLength:n(1131),simple:n(1133)}}});