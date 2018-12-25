webpackJsonp([85],{826:function(n,s){n.exports={content:["article",["h2","Build"],["p","When you finish the development, you can run the following command to build your application:"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run build'},["code","$ npm run build"]],["p",["a",{title:null,href:"https://asciinema.org/a/198144"},["img",{title:null,src:"https://asciinema.org/a/198144.png",alt:"asciicast"}]]],["p","Since Ant Design Pro use ",["a",{title:null,href:"https://umijs.org/"},"Umi"]," as development tool, complex processes have been encapsulated and for most scenarios only one command ",["code","umi build"]," is required to build the package, after build successfully, it will generate the ",["code","dist"]," folder in the root directory, which contains packaged files, usually static files like ",["code","*.js"],", ",["code","*.css"],", ",["code","index.html"],"."],["p","But if you want to custom the build result, like specify the result directory, you can configure it in ",["code","config/config.js"],", refer to ",["a",{title:null,href:"https://umijs.org/guide/config.html"},"Umi configuration"]," for more details."],["h3","Analyze build result"],["p","If your build file is large, you can optimize your code with the ",["code","analyze"]," command to build and analyze the volume distribution of dependent modules."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run analyze'},["code","$ npm run analyze"]],["p","The command will open analyze result in your default browser automatically."],["h2","Release"],["p","For release purposes, you only need publish the resulting static file, which is usually the static file in the ",["code","dist"]," folder, to your CDN or static server. It should be noted that",["code","index.html"]," will be your application's entry page."],["h3","Routing and server integration"],["p","Umi has two modes of router, ",["code","browserHistory"]," and ",["code","hashHistory"],"."],["p",["code","hashHistory"]," uses a URL such as ",["code","https://cdn.com/#/users/123"]," and take the path following the ",["code","#"]," as the application route. ",["code","browserHistory"]," uses ",["code","https://cdn.com/users/123"]," directly. When using ",["code","hashHistory"]," the browser always requests ",["code","index.html"]," under the root directory. Using ",["code","browserHistory"]," requires that the server be prepared to handle URLs. It should be OK to handle the initial ",["code","/"],". However, when the user jumps back and forth and refreshes ",["code","/users/123"],", the server receives a ",["code","/users/123"]," request, then you need to configure the server to handle this URL to return the correct index.html. If you can control the server, we recommend using browserHistory."],["h3","use nginx"],["p","As one of the most popular web containers, nginx is simple to configure and use, with high performance and high availability with a simple configuration. It is recommended to use nginx hosting. The sample configuration is as follows:"],["pre",{lang:null,highlighted:'server {\n    listen <span class="token number">80</span><span class="token comment" spellcheck="true">;</span>\n    # gzip config\n    gzip on<span class="token comment" spellcheck="true">;</span>\n    gzip_min_length 1k<span class="token comment" spellcheck="true">;</span>\n    gzip_comp_level <span class="token number">9</span>\n    gzip_types text<span class="token operator">/</span>plain application<span class="token operator">/</span>javascript application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>css application<span class="token operator">/</span>xml text<span class="token operator">/</span>javascript application<span class="token operator">/</span>x<span class="token operator">-</span>httpd<span class="token operator">-</span>php image<span class="token operator">/</span>jpeg image<span class="token operator">/</span>gif image<span class="token operator">/</span>png<span class="token comment" spellcheck="true">;</span>\n    gzip_vary on<span class="token comment" spellcheck="true">;</span>\n    gzip_disable <span class="token string">"MSIE [1-6]\\."</span><span class="token comment" spellcheck="true">;</span>\n\n    root <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token comment" spellcheck="true">;</span>\n\n    location <span class="token operator">/</span> {\n        # Used <span class="token keyword">in</span> conjunction <span class="token keyword">with</span> browserHistory\n        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span><span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token comment" spellcheck="true">;</span>\n\n        # <span class="token keyword">If</span> you have resources<span class="token punctuation">,</span> it is recommended <span class="token keyword">to</span> use https <span class="token operator">+</span> http2 <span class="token keyword">for</span> a better experience <span class="token keyword">with</span> on<span class="token operator">-</span>demand loading<span class="token punctuation">.</span>\n        # rewrite <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>preview<span class="token punctuation">.</span>pro<span class="token punctuation">.</span>ant<span class="token punctuation">.</span>design<span class="token operator">/</span><span class="token variable">$1</span> permanent<span class="token comment" spellcheck="true">;</span>\n\n    }\n    location <span class="token operator">/</span>api {\n        proxy_pass https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>preview<span class="token punctuation">.</span>pro<span class="token punctuation">.</span>ant<span class="token punctuation">.</span>design<span class="token comment" spellcheck="true">;</span>\n        proxy_set_header   X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Proto <span class="token variable">$scheme</span><span class="token comment" spellcheck="true">;</span>\n        proxy_set_header   Host              <span class="token variable">$http_host</span><span class="token comment" spellcheck="true">;</span>\n        proxy_set_header   X<span class="token operator">-</span>Real<span class="token operator">-</span>IP         <span class="token variable">$remote_addr</span><span class="token comment" spellcheck="true">;</span>\n    }\n}\nserver {\n   # <span class="token keyword">If</span> you have resources<span class="token punctuation">,</span> it is recommended <span class="token keyword">to</span> use https <span class="token operator">+</span> http2 <span class="token keyword">for</span> a better experience <span class="token keyword">with</span> on<span class="token operator">-</span>demand loading<span class="token punctuation">.</span>\n  listen <span class="token number">443</span> ssl http2 default_server<span class="token comment" spellcheck="true">;</span>\n\n  # \bPublic <span class="token operator">and</span> private key of the certificate\n  ssl_certificate <span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span>public<span class="token punctuation">.</span>crt<span class="token comment" spellcheck="true">;</span>\n  ssl_certificate_key <span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span>private<span class="token punctuation">.</span>key<span class="token comment" spellcheck="true">;</span>\n\n  location <span class="token operator">/</span> {\n        # Used <span class="token keyword">in</span> conjunction <span class="token keyword">with</span> browserHistory\n        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span><span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token comment" spellcheck="true">;</span>\n\n  }\n  location <span class="token operator">/</span>api {\n      proxy_pass https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>preview<span class="token punctuation">.</span>pro<span class="token punctuation">.</span>ant<span class="token punctuation">.</span>design<span class="token comment" spellcheck="true">;</span>\n      proxy_set_header   X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Proto <span class="token variable">$scheme</span><span class="token comment" spellcheck="true">;</span>\n      proxy_set_header   Host              <span class="token variable">$http_host</span><span class="token comment" spellcheck="true">;</span>\n      proxy_set_header   X<span class="token operator">-</span>Real<span class="token operator">-</span>IP         <span class="token variable">$remote_addr</span><span class="token comment" spellcheck="true">;</span>\n  }\n}'},["code",'server {\n    listen 80;\n    # gzip config\n    gzip on;\n    gzip_min_length 1k;\n    gzip_comp_level 9\n    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;\n    gzip_vary on;\n    gzip_disable "MSIE [1-6]\\.";\n\n    root /usr/share/nginx/html;\n\n    location / {\n        # Used in conjunction with browserHistory\n        try_files $uri $uri/ /index.html;\n\n        # If you have resources, it is recommended to use https + http2 for a better experience with on-demand loading.\n        # rewrite ^/(.*)$ https://preview.pro.ant.design/$1 permanent;\n\n    }\n    location /api {\n        proxy_pass https://preview.pro.ant.design;\n        proxy_set_header   X-Forwarded-Proto $scheme;\n        proxy_set_header   Host              $http_host;\n        proxy_set_header   X-Real-IP         $remote_addr;\n    }\n}\nserver {\n   # If you have resources, it is recommended to use https + http2 for a better experience with on-demand loading.\n  listen 443 ssl http2 default_server;\n\n  # \bPublic and private key of the certificate\n  ssl_certificate /path/to/public.crt;\n  ssl_certificate_key /path/to/private.key;\n\n  location / {\n        # Used in conjunction with browserHistory\n        try_files $uri $uri/ /index.html;\n\n  }\n  location /api {\n      proxy_pass https://preview.pro.ant.design;\n      proxy_set_header   X-Forwarded-Proto $scheme;\n      proxy_set_header   Host              $http_host;\n      proxy_set_header   X-Real-IP         $remote_addr;\n  }\n}']],["h3","use Spring Boot"],["p","Spring Boot is the most used java framework, and it can be integrated with Ant Design Pro in just a few simple steps."],["p","first run build script"],["p",["code","$ npm run build"]],["p","Then copy the compiled file to the ",["code","/src/main/resources/static"]," directory of the Spring Boot project."],["p","\brestart project, You can see the effect by visiting ",["code","http://localhost:8080/"]," \u3002"],["p","For ease of integration, it is best to use hash routing. If you want to use browserHistory, you create a controller and add the following code:"],["pre",{lang:"java",highlighted:'<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/api/**"</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> ApiResult <span class="token function">api</span><span class="token punctuation">(</span>HttpServletRequest request<span class="token punctuation">,</span> HttpServletResponse response<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> apiProxy<span class="token punctuation">.</span><span class="token function">proxy</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> reponse<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"/**"</span><span class="token punctuation">,</span> method<span class="token operator">=</span>HTTPMethod<span class="token punctuation">.</span>GET<span class="token punctuation">)</span>\n<span class="token keyword">public</span> String <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">"index"</span>\n<span class="token punctuation">}</span>'},["code",'@RequestMapping("/api/**")\npublic ApiResult api(HttpServletRequest request, HttpServletResponse response){\n    return apiProxy.proxy(request, reponse);\n}\n\n@RequestMapping(value="/**", method=HTTPMethod.GET)\npublic String index(){\n    return "index"\n}']],["blockquote",["p","Note that Ant Design Pro does not provide a java api interface implementation, if you just want to preview the demo, you can use a reverse proxy to ",["code","https://preview.pro.ant.design"],"."]],["h3","use express"],["p",["a",{title:null,href:"http://expressjs.com/"},"express"]],["pre",{lang:null,highlighted:'app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/*\'</span><span class="token punctuation">,</span> function <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> {\n  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">,</span> <span class="token string">\'index.html\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","app.use(express.static(path.join(__dirname, 'build')));\n\napp.get('/*', function (req, res) {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});"]],["h3","use egg"],["p",["a",{title:null,href:"https://eggjs.org/"},"egg"]],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> controller\nexports<span class="token punctuation">.</span>index <span class="token operator">=</span> function<span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  yield this<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">\'App.jsx\'</span><span class="token punctuation">,</span> {\n    context<span class="token punctuation">:</span> {\n      user<span class="token punctuation">:</span> this<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n    }<span class="token punctuation">,</span>\n  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token comment" spellcheck="true">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> router\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'home\'</span><span class="token punctuation">,</span> <span class="token string">\'/*\'</span><span class="token punctuation">,</span> <span class="token string">\'home.index\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","// controller\nexports.index = function* () {\n  yield this.render('App.jsx', {\n    context: {\n      user: this.session.user,\n    },\n  });\n};\n\n// router\napp.get('home', '/*', 'home.index');"]],["p","You can refer to ",["a",{title:null,href:"https://umijs.org/guide/router.html"},"Umi Router"]," for more router information."]],meta:{order:8,title:"Build & Deploy",type:"Introduction",filename:"docs/deploy.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Build",title:"Build"},"Build"]],["li",["a",{className:"bisheng-toc-h2",href:"#Release",title:"Release"},"Release"]]]}}});