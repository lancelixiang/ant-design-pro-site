webpackJsonp([20],{813:function(t,e){t.exports={content:["section",["p","\u9875\u5934\u7528\u6765\u58f0\u660e\u9875\u9762\u7684\u4e3b\u9898\uff0c\u5305\u542b\u4e86\u7528\u6237\u6240\u5173\u6ce8\u7684\u6700\u91cd\u8981\u7684\u4fe1\u606f\uff0c\u4f7f\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u7406\u89e3\u5f53\u524d\u9875\u9762\u662f\u4ec0\u4e48\u4ee5\u53ca\u5b83\u7684\u529f\u80fd\u3002"]],meta:{title:{"en-US":"PageHeader","zh-CN":"PageHeader"},subtitle:"\u9875\u5934",cols:1,order:11,filename:"scaffold/src/components/PageHeader/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","title"],["td","title \u533a\u57df"],["td","ReactNode"],["td","-"]],["tr",["td","logo"],["td","logo\u533a\u57df"],["td","ReactNode"],["td","-"]],["tr",["td","action"],["td","\u64cd\u4f5c\u533a\uff0c\u4f4d\u4e8e title \u884c\u7684\u884c\u5c3e"],["td","ReactNode"],["td","-"]],["tr",["td","home"],["td","\u9ed8\u8ba4\u7684\u4e3b\u9875\u8bf4\u660e\u6587\u5b57"],["td","ReactNode"],["td","-"]],["tr",["td","content"],["td","\u5185\u5bb9\u533a"],["td","ReactNode"],["td","-"]],["tr",["td","extraContent"],["td","\u989d\u5916\u5185\u5bb9\u533a\uff0c\u4f4d\u4e8econtent\u7684\u53f3\u4fa7"],["td","ReactNode"],["td","-"]],["tr",["td","breadcrumbList"],["td","\u9762\u5305\u5c51\u6570\u636e\uff0c\u914d\u7f6e\u4e86\u6b64\u5c5e\u6027\u65f6 ",["code","routes"]," ",["code","params"]," ",["code","location"]," ",["code","breadcrumbNameMap"]," \u65e0\u6548"],["td","array<{title: ReactNode, href?: string}>"],["td","-"]],["tr",["td","hiddenBreadcrumb"],["td","\u9690\u85cf\u9762\u5305\u5c51"],["td","boolean"],["td","false"]],["tr",["td","routes"],["td","\u9762\u5305\u5c51\u76f8\u5173\u5c5e\u6027\uff0crouter \u7684\u8def\u7531\u6808\u4fe1\u606f"],["td","object[]"],["td","-"]],["tr",["td","params"],["td","\u9762\u5305\u5c51\u76f8\u5173\u5c5e\u6027\uff0c\u8def\u7531\u7684\u53c2\u6570"],["td","object"],["td","-"]],["tr",["td","location"],["td","\u9762\u5305\u5c51\u76f8\u5173\u5c5e\u6027\uff0c\u5f53\u524d\u7684\u8def\u7531\u4fe1\u606f"],["td","object"],["td","-"]],["tr",["td","breadcrumbNameMap"],["td","\u9762\u5305\u5c51\u76f8\u5173\u5c5e\u6027\uff0c\u8def\u7531\u7684\u5730\u5740-\u540d\u79f0\u6620\u5c04\u8868"],["td","object"],["td","-"]],["tr",["td","tabList"],["td","tab \u6807\u9898\u5217\u8868"],["td","array<{key: string, tab: ReactNode}>"],["td","-"]],["tr",["td","tabActiveKey"],["td","\u5f53\u524d\u9ad8\u4eae\u7684 tab \u9879"],["td","string"],["td","-"]],["tr",["td","tabDefaultActiveKey"],["td","\u9ed8\u8ba4\u9ad8\u4eae\u7684 tab \u9879"],["td","string"],["td","\u7b2c\u4e00\u9879"]],["tr",["td","wide"],["td","\u662f\u5426\u5b9a\u5bbd"],["td","boolean"],["td","false"]],["tr",["td","onTabChange"],["td","\u5207\u6362\u9762\u677f\u7684\u56de\u8c03"],["td","(key) => void"],["td","-"]],["tr",["td","itemRender"],["td","\u81ea\u5b9a\u4e49\u8282\u70b9\u65b9\u6cd5"],["td","(menuItem) => ReactNode"],["td","-"]],["tr",["td","linkElement"],["td","\u5b9a\u4e49\u94fe\u63a5\u7684\u5143\u7d20\uff0c\u9ed8\u8ba4\u4e3a ",["code","a"],"\uff0c\u53ef\u4f20\u5165 react-router \u7684 Link"],["td","string","|","ReactElement"],["td","-"]]]],["blockquote",["p","\u9762\u5305\u5c51\u7684\u914d\u7f6e\u65b9\u5f0f\u6709\u4e09\u79cd\uff0c\u4e00\u662f\u76f4\u63a5\u914d\u7f6e ",["code","breadcrumbList"],"\uff0c\u4e8c\u662f\u7ed3\u5408 ",["code","react-router@2"]," ",["code","react-router@3"],"\uff0c\u914d\u7f6e ",["code","routes"]," \u53ca ",["code","params"]," \u5b9e\u73b0\uff0c\u7c7b\u4f3c ",["a",{title:null,href:"https://ant.design/components/breadcrumb-cn/#components-breadcrumb-demo-router"},"\u9762\u5305\u5c51 Demo"],"\uff0c\u4e09\u662f\u7ed3\u5408 ",["code","react-router@4"],"\uff0c\u914d\u7f6e ",["code","location"]," ",["code","breadcrumbNameMap"],"\uff0c\u4f18\u5148\u7ea7\u4f9d\u6b21\u9012\u51cf\uff0c\u811a\u624b\u67b6\u4e2d\u4f7f\u7528\u6700\u540e\u4e00\u79cd\u3002 \u5bf9\u4e8e\u540e\u4e24\u79cd\u7528\u6cd5\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06 ",["code","routes"]," ",["code","params"]," \u53ca ",["code","location"]," ",["code","breadcrumbNameMap"]," \u653e\u5230 context \u4e2d\uff0c\u7ec4\u4ef6\u4f1a\u81ea\u52a8\u83b7\u53d6\u3002"]]]}}});