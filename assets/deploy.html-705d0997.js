import{_ as e,p as s,q as i,a1 as a}from"./framework-96b046e1.js";const d="/images/guide/deploy-main.jpg",l="/images/guide/deploy-sub-1.jpg",c="/images/guide/subsystem-edit-1.jpg",n="/images/guide/deploy-sub-success.jpg",o="/images/guide/subsystem-edit-2.jpg",t={},r=a('<h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1><p>前面几节已经完成了整个微前端的开发配置功能，这一节将会帮助你如何部署微前端项目到生产环境，部署服务端以 <code>nginx</code> 为例， 部署 <code>ip</code> 约定为 <code>192.168.0.159</code> 。</p><h2 id="部署主项目" tabindex="-1"><a class="header-anchor" href="#部署主项目" aria-hidden="true">#</a> 部署主项目</h2><ol><li><strong>步骤一</strong>：进入主项目目录，输入如下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build:prod\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打包完成后会生成命名方式为 <code>main_${主项目名}</code> 的输出目录，将此目录拷贝到 <code>nginx</code> 的 <code>apps</code> 目录， 如图：</p><p><img src="'+d+`" alt="主项目部署"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>输出环境：产品环境使用 <code>npm run build:prod</code> , 测试环境使用 <code>npm run build:stage</code> 。</li><li>输出命名规则：主项目默认以 <code>main_</code> 开头，子项目默认以 <code>sub_</code> 开头。</li></ol></div><ol start="2"><li><strong>步骤二</strong>：打开 <code>nginx/conf/nginx.conf</code> 文件，添加以下配置：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># XTZHFC
server {
    # 监听端口
    listen       9070;
    server_name  localhost;

    location / {
        # 主项目部署包根路径
        root   D:/dev/nginx-1.21.5_wqd/apps/main_xtzhfc/;
        index  index.html;

        # 解决history路由刷新404的问题
        try_files $uri $uri/ /index.html;

        # 使用协商缓存，解决页面缓存问题
        expires -1s;   
        add_header Cache-Control no-cache;   
        add_header Cache-Control private; 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li><code>监听端口</code> 和 <code>根目录路径</code> 按实际修改。</li><li>为了减少部署不必要的麻烦，主项目请部署到 <span class="c-red">根路径</span>： <code>location /</code> ，不要部署到子路径如： <code>location /xtzhfc</code></li></ol></div><ol><li><strong>步骤三</strong>：启动 <code>nginx</code>， 测试主项目是否部署成功。</li></ol><p>启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># windows 环境</span>
<span class="token builtin class-name">cd</span> D:<span class="token punctuation">\\</span>dev<span class="token punctuation">\\</span>nginx-1.21.5_wqd
start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器，访问地址：<code>http:/192.168.0.159:9070/</code>，能看到登录页面，说明部署成功！</p><h2 id="部署子项目" tabindex="-1"><a class="header-anchor" href="#部署子项目" aria-hidden="true">#</a> 部署子项目</h2><p>子系统的部署和主项目基本一致，不同的是它即可以部署在根路径： <code>location /</code> , 又可以部署在子路径如：<code>location /byfz</code> ， 两种方式任意一种即可。</p><h3 id="根路径部署" tabindex="-1"><a class="header-anchor" href="#根路径部署" aria-hidden="true">#</a> 根路径部署</h3><p>根路径部署模式会将子应用和主应用部署在不同的端口，但路径都是根路径。</p><ol><li><strong>步骤一</strong>：修改配置文件 <code>.env.production</code>，找到 <code>VUE_APP_DEPLOY_MODE</code> 修改为 <code>1</code>：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 子应用部署方式, 1：独立端口根路径部署，2：与主应用同一端口子路径部署
VUE_APP_DEPLOY_MODE = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>步骤二</strong>：进入子项目目录，输入如下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build:prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打包完成后会生成命名方式为 <code>sub_\${子项目名}</code> 的输出目录，将此目录拷贝到 <code>nginx</code> 的 <code>apps</code> 目录， 如图：</p><p><img src="`+l+`" alt="子项目根路径部署"></p><ol start="3"><li><strong>步骤三</strong>：打开 <code>nginx/conf/nginx.conf</code> 文件，修改为以下配置：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># XTZHFC
server {
    # 监听端口
    listen       9070;
    server_name  localhost;

    location / {
        # 主项目部署包根路径
        root   D:/dev/nginx-1.21.5_wqd/apps/main_xtzhfc/;
        index  index.html;

        # 解决history路由刷新404的问题
        try_files $uri $uri/ /index.html;

        # 使用协商缓存，解决页面缓存问题
        expires -1s;   
        add_header Cache-Control no-cache;   
        add_header Cache-Control private; 
    }
}

# BYFZ 
server {
    # 监听端口
    listen       10003;
    server_name  localhost;

    location / {
        # 子项目部署包根路径
        root   D:/dev/nginx-1.21.5_wqd/apps/sub_byfz/;
        index  index.html;

        # 解决微前端主项目请求子项目跨域问题
        add_header Access-Control-Allow-Methods *;
        add_header Access-Control-Max-Age 3600;
        add_header Access-Control-Allow-Credentials true;
        add_header Access-Control-Allow-Origin $http_origin;
        add_header Access-Control-Allow-Headers $http_access_control_request_headers;

        # 使用协商缓存，解决页面缓存问题
        expires -1s;   
        add_header Cache-Control no-cache;   
        add_header Cache-Control private; 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li><code>监听端口</code> 和 <code>根目录路径</code> 按实际修改。</li><li>和主项目不同，需要增加跨域头，解决微前端主项目请求子项目跨域问题。</li></ol></div><ol start="4"><li><strong>步骤四</strong>：<code>nginx</code> 重新读取配置，输入以下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># windows 环境</span>
<span class="token builtin class-name">cd</span> D:<span class="token punctuation">\\</span>dev<span class="token punctuation">\\</span>nginx-1.21.5_wqd
nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><strong>步骤五</strong>：修改后台管理子系统配置</li></ol><p>使用管理员账号 <code>admin</code> 登陆 <code>V7平台</code> 管理端，打开 <code>权限-&gt;子系统管理</code> 编辑子系统，如图：</p><p><img src="`+c+'" alt="编辑子系统"></p><p>找到 <code>扩展配置</code> ，修改 <code>prodUrl</code> 为 <code>http://192.168.0.159:10003/</code> 。</p><p>打开浏览器，访问地址：<code>http:/192.168.0.159:9070/${子系统代号}</code>，登录完成后跳转，能看到系统加载成功的信息，如图：</p><p><img src="'+n+`" alt="子系统加载成功"></p><h3 id="子路径部署" tabindex="-1"><a class="header-anchor" href="#子路径部署" aria-hidden="true">#</a> 子路径部署</h3><p>子路径部署模式会将子应用和主应用部署在相同的端口，主应用使用根路径，子应用使用子路径。</p><ol><li><strong>步骤一</strong>：修改配置文件 <code>.env.production</code>，找到 <code>VUE_APP_DEPLOY_MODE</code> 修改为 <code>2</code>：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 子应用部署方式, 1：独立端口根路径部署，2：与主应用同一端口子路径部署
VUE_APP_DEPLOY_MODE = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>步骤二</strong>：进入子项目目录，输入如下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build:prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打包完成后会生成命名方式为 <code>sub_\${子项目名}</code> 的输出目录，将此目录拷贝到 <code>nginx</code> 的 <code>apps</code> 目录。</p><ol start="3"><li><strong>步骤三</strong>：打开 <code>nginx/conf/nginx.conf</code> 文件，修改为以下配置：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    <span class="token comment"># 监听端口</span>
    listen       <span class="token number">9070</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment"># XTZHFC</span>
    location / <span class="token punctuation">{</span>
        <span class="token comment"># 主项目部署包根路径</span>
        root   D:/dev/nginx-1.21.5_wqd/apps/main_xtzhfc/<span class="token punctuation">;</span>
        index  index.html<span class="token punctuation">;</span>

        <span class="token comment"># 解决history路由刷新404的问题</span>
        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>

        <span class="token comment"># 使用协商缓存，解决页面缓存问题</span>
        expires -1s<span class="token punctuation">;</span>   
        add_header Cache-Control no-cache<span class="token punctuation">;</span>   
        add_header Cache-Control private<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>

    <span class="token comment"># BYFZ</span>
    location /sub_byfz <span class="token punctuation">{</span>
        <span class="token comment"># 子项目部署包根路径</span>
        <span class="token builtin class-name">alias</span>   D:/dev/nginx-1.21.5_wqd/apps/sub_byfz/<span class="token punctuation">;</span>
        index  index.html<span class="token punctuation">;</span>

        <span class="token comment"># 使用协商缓存，解决页面缓存问题</span>
        expires -1s<span class="token punctuation">;</span>   
        add_header Cache-Control no-cache<span class="token punctuation">;</span>   
        add_header Cache-Control private<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li><code>监听端口</code> 和 <code>根目录路径</code> 按实际修改。</li><li>和根路径部署不同，由于和主项目端口号相同，不存在跨域问题，不需要加跨域头。</li></ol></div><ol start="4"><li><strong>步骤四</strong>：<code>nginx</code> 重新读取配置，输入以下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># windows 环境</span>
<span class="token builtin class-name">cd</span> D:<span class="token punctuation">\\</span>dev<span class="token punctuation">\\</span>nginx-1.21.5_wqd
nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><strong>步骤五</strong>：修改后台管理子系统配置</li></ol><p>使用管理员账号 <code>admin</code> 登陆 <code>V7平台</code> 管理端，打开 <code>权限-&gt;子系统管理</code> 编辑子系统，如图：</p><p><img src="`+o+'" alt="编辑子系统"></p><p>找到 <code>扩展配置</code> ，修改 <code>prodUrl</code> 为 <code>http://192.168.0.159:9070/sub_byfz/</code> 。</p><p>打开浏览器，访问地址：<code>http:/192.168.0.159:9070/${子系统代号}</code>，登录完成后跳转，能看到系统加载成功的信息，如图：</p><p><img src="'+n+'" alt="子系统加载成功"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>一个应用系统只部署一个主项目，可以部署一个或多个子项目。</li><li>多个子项目部署，重复当前部署子项目步骤。</li></ol></div>',55),v=[r];function u(p,m){return s(),i("div",null,v)}const h=e(t,[["render",u],["__file","deploy.html.vue"]]);export{h as default};
