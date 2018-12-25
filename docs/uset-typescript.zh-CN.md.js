webpackJsonp([44],{867:function(n,s){n.exports={content:["article",["p","TypeScript is a superset of javascript that adds a lot of useful features compared to javascript:"],["ul",["li",["p","\u7c7b\u578b\u6279\u6ce8\u548c\u7f16\u8bd1\u65f6\u7c7b\u578b\u68c0\u67e5"]],["li",["p","\u7c7b\u578b\u63a8\u65ad"]],["li",["p","\u7c7b\u578b\u64e6\u9664"]],["li",["p","\u63a5\u53e3"]],["li",["p","\u679a\u4e3e"]],["li",["p","Mixin"]],["li",["p","\u6cdb\u578b\u7f16\u7a0b"]],["li",["p","\u540d\u5b57\u7a7a\u95f4"]],["li",["p","\u5143\u7ec4"]],["li",["p","Await "]]],["p","\u4f7f\u7528 TypeScript \u5bf9 IDE \u4f1a\u66f4\u52a0\u53cb\u597d\uff0c\u5982\u679c\u4f60\u662f\u7528 vscode \u5f00\u53d1\u7684\uff0c\u90a3\u4e48\u4f60\u7684\u5f00\u53d1\u4f53\u9a8c\u5c06\u4f1a\u663e\u8457\u63d0\u5347\u3002\u57fa\u4e8e umi \u7684\u7279\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u5728 Pro \u4e2d\u4f7f\u7528\u3002\nPro \u4e2d\u81ea\u5e26\u4e86 TypeScript \u6240\u9700\u7684\u914d\u7f6e\u6587\u4ef6."],["ul",["li",["p","tsconfig.js"]],["li",["p","tslint.json"]]],["p","tsconfig \u4f1a\u58f0\u660e\u8fd9\u662f\u4e00\u4e2a TypeScript \u7684\u9879\u76ee\uff0c\u5176\u4e2d\u4f1a\u8fdb\u884c\u4e00\u4e9b\u914d\u7f6e\uff0c\u8be6\u7ec6\u5185\u5bb9\u53ef\u4ee5\u770b",["a",{title:null,href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"\u8fd9\u91cc"],"\u3002\ntslint \u7c7b\u4f3ceslint \u5c06\u4f1a\u68c0\u67e5\u4f60\u7684\u4ee3\u7801\uff0c\u4e3a\u4e86\u63d0\u5347\u4f53\u9a8c\uff0c\u53ef\u4ee5\u4e00\u5e76\u5b89\u88c5 vscode \u7684 tslint \u63d2\u4ef6\u3002\n\u63a5\u4e0b\u6765\u6211\u4eec\u53ea\u8981\u76f4\u63a5\u65b0\u5efa tsx \u6587\u4ef6\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb TypeScript \u5f00\u53d1\u4e86\u3002"],["h3","\u5e38\u89c1\u95ee\u9898"],["h4","\u5728 css-module \u4e2d\u4f7f\u7528"],["p","\u7531\u4e8e Pro \u4f7f\u7528\u4e86 css-module\uff0c\u4f60\u53ef\u80fd\u9700\u8981 "],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">\'./index.style.less\'</span>'},["code","import style from './index.style.less'"]],["p","\u8fd9\u65f6\u5019 typescript \u4f1a\u62a5\u9519\uff0c\u4f60\u53ef\u4ee5 \u4f7f\u7528  "],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./index.less"</span><span class="token punctuation">)</span>'},["code",'const style = require("./index.less")']],["p"," \u907f\u5f00\u8fd9\u4e2a\u95ee\u9898\u3002\u793e\u533a\u6709\u5f88\u591a\u76f8\u5173\u8ba8\u8bba\uff0c\u6682\u65f6\u6ca1\u6709\u6700\u597d\u7684\u529e\u6cd5\uff0c\u53ea\u6709\u76f8\u5bf9\u5b8c\u7f8e\u7684 ",["a",{title:null,href:"https://github.com/Jimdo/typings-for-css-modules-loader"},"typings-for-css-modules-loader"],"\uff0c\u540c\u7406\u5bfc\u5165\u56fe\u7247\uff0ccss\uff0csvg \u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u907f\u5f00\u7c7b\u578b\u68c0\u67e5\u3002"],["h4","Form.create()"],["p","\u5728 TypeScript \u4e2d\u4f7f\u7528 Form.create() \u53ef\u80fd\u4f1a\u629b\u51fa\u7c7b\u4f3c\u4e0b\u9762\u7684\u9519\u8bef\uff1a"],["pre",{lang:"bash",highlighted:'error TS2339: Property <span class="token string">\'loading\'</span> does not exist on <span class="token function">type</span> <span class="token string">\'IntrinsicAttributes &amp; IntrinsicClassAttributes&lt;Compone\nnt&lt;{}, ComponentState>> &amp; Readonly&lt;{ childr...\'</span><span class="token keyword">.</span>'},["code","error TS2339: Property 'loading' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<Compone\nnt<{}, ComponentState>> & Readonly<{ childr...'."]],["p","\u8fd9\u662f\u56e0\u4e3a props\u7684\u7c7b\u578b\u6ca1\u6709\u901a\u8fc7\u68c0\u67e5\uff0c\u4ee5\u4e0b\u662f\u6b63\u786e\u7684\u65b9\u5f0f"],["pre",{lang:"tsx",highlighted:'import { FormComponentProps } from <span class="token string">"antd/lib/form/Form"</span><span class="token comment" spellcheck="true">;</span>\n\ninterface IFormComponentProps extends FormComponentProps {\n  test<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>\n}\n\nclass FormComponent extends React<span class="token punctuation">.</span>Component<span class="token operator">&lt;</span>IFormComponentProps<span class="token operator">></span> {\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">:</span> IFormComponentProps<span class="token punctuation">)</span> {\n    <span class="token function">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  }\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    <span class="token keyword">const</span> { getFieldDecorator } <span class="token operator">=</span> this<span class="token punctuation">.</span>props<span class="token punctuation">.</span>form<span class="token comment" spellcheck="true">;</span>\n    return <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token comment" spellcheck="true">;</span>\n  }\n}'},["code",'import { FormComponentProps } from "antd/lib/form/Form";\n\ninterface IFormComponentProps extends FormComponentProps {\n  test: string;\n}\n\nclass FormComponent extends React.Component<IFormComponentProps> {\n  constructor(props: IFormComponentProps) {\n    super(props);\n    ....\n  }\n  render() {\n    const { getFieldDecorator } = this.props.form;\n    return ....;\n  }\n}']],["h4","\u6ca1\u6709\u63cf\u8ff0\u6587\u4ef6\u7684\u4ed3\u5e93"],["p","\u5728\u5b9e\u9645\u4f7f\u7528\u6709\u4e9b\u5e93\u5e76\u6ca1\u6709\u76f8\u5173\u7684 d.ts,\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728\u4f7f\u7528\u7684\u6587\u4ef6\u4e2d\u5b9a\u4e49\uff0c\u4ee5\u9ad8\u5fb7\u5730\u56fe\u4e3a\u4f8b\u3002"],["pre",{lang:"tsx",highlighted:'import React from <span class="token string">\'react\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> \u5b9a\u4e49 Map \u7684 \u7c7b\u578b\ndeclare class GaoDeAMap {\n  <span class="token function">constructor</span><span class="token punctuation">(</span>container<span class="token punctuation">:</span> HTMLElement<span class="token punctuation">,</span> option<span class="token punctuation">:</span> { center<span class="token punctuation">:</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> number<span class="token punctuation">]</span><span class="token comment" spellcheck="true">; zoom: number });</span>\n  public <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> void<span class="token comment" spellcheck="true">;</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> \u5b9a\u4e49\u5168\u5c40\u7684 AMap\ndeclare <span class="token keyword">const</span> AMap<span class="token punctuation">:</span> {\n  Map<span class="token punctuation">:</span> typeof GaoDeAMap<span class="token comment" spellcheck="true">;</span>\n}<span class="token comment" spellcheck="true">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> tslint<span class="token punctuation">:</span>disable<span class="token operator">-</span><span class="token keyword">next</span><span class="token operator">-</span>line<span class="token punctuation">:</span>max<span class="token operator">-</span>classes<span class="token operator">-</span>per<span class="token operator">-</span>file\nclass MapComponent extends React<span class="token punctuation">.</span>Component {\n  public mapDom<span class="token punctuation">:</span> HTMLDivElement<span class="token comment" spellcheck="true">;</span>\n  public map<span class="token punctuation">:</span> GaoDeAMap<span class="token comment" spellcheck="true">;</span>\n  public <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    <span class="token keyword">const</span> map <span class="token operator">=</span> new AMap<span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>mapDom<span class="token punctuation">,</span> {\n      center<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">117.000923</span><span class="token punctuation">,</span> <span class="token number">36.675807</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      zoom<span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    this<span class="token punctuation">.</span>map <span class="token operator">=</span> map<span class="token comment" spellcheck="true">;</span>\n  }\n  public <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    this<span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  }\n  public <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    return <span class="token operator">&lt;</span>div ref<span class="token operator">=</span>{ref <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>mapDom <span class="token operator">=</span> ref<span class="token punctuation">)</span>} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>\n  }\n}\n\nexport <span class="token keyword">default</span> MapComponent<span class="token comment" spellcheck="true">;</span>'},["code","import React from 'react';\n\n// \u5b9a\u4e49 Map \u7684 \u7c7b\u578b\ndeclare class GaoDeAMap {\n  constructor(container: HTMLElement, option: { center: [number, number]; zoom: number });\n  public destroy(): void;\n}\n\n// \u5b9a\u4e49\u5168\u5c40\u7684 AMap\ndeclare const AMap: {\n  Map: typeof GaoDeAMap;\n};\n\n// tslint:disable-next-line:max-classes-per-file\nclass MapComponent extends React.Component {\n  public mapDom: HTMLDivElement;\n  public map: GaoDeAMap;\n  public componentDidMount() {\n    const map = new AMap.Map(this.mapDom, {\n      center: [117.000923, 36.675807],\n      zoom: 11,\n    });\n    this.map = map;\n  }\n  public componentWillUnmount() {\n    this.map.destroy();\n  }\n  public render() {\n    return <div ref={ref => (this.mapDom = ref)} />;\n  }\n}\n\nexport default MapComponent;"]],["p","\u5982\u679c\u8981\u591a\u6b21\u4f7f\u7528\uff0c\u53ef\u4ee5\u5efa\u7acb\u4e00\u4e2a namespace\uff0c"],["pre",{lang:"ts",highlighted:'<span class="token keyword">declare</span> namespace AMap <span class="token punctuation">{</span>\n  <span class="token keyword">class</span> <span class="token class-name">Map</span> <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>container<span class="token punctuation">:</span> HTMLElement<span class="token punctuation">,</span> option<span class="token punctuation">:</span> <span class="token punctuation">{</span> center<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">number</span><span class="token punctuation">,</span> <span class="token keyword">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span> zoom<span class="token punctuation">:</span> <span class="token keyword">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token operator">=</span> AMap<span class="token punctuation">;</span>\n<span class="token keyword">export</span> as namespace AMap<span class="token punctuation">;</span>'},["code","declare namespace AMap {\n  class Map {\n    constructor(container: HTMLElement, option: { center: [number, number]; zoom: number });\n    public destroy(): void;\n  }\n}\n\nexport = AMap;\nexport as namespace AMap;"]],["p","\u7136\u540e\u5728\u9879\u76ee\u4e2d\u76f4\u63a5\u5f15\u5165\u5c31\u53ef\u4ee5\u4e86\u3002"],["pre",{lang:"tsx",highlighted:'import AMapInterface from <span class="token string">\'./AMap\'</span><span class="token comment" spellcheck="true">;</span>\n`\ndeclare <span class="token keyword">const</span> AMap<span class="token punctuation">:</span> typeof AMapInterface<span class="token comment" spellcheck="true">;</span>'},["code","import AMapInterface from './AMap';\n`\ndeclare const AMap: typeof AMapInterface;"]]],meta:{order:7,title:"\u4f7f\u7528 TypeScript",type:"\u8fdb\u9636",filename:"docs/uset-typescript.zh-CN.md"},toc:["ul"]}}});