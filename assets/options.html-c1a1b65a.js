import{_ as l,M as p,p as i,q as c,R as n,t as s,N as t,V as o,a1 as a}from"./framework-96b046e1.js";const u={},d=n("h1",{id:"options对象",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#options对象","aria-hidden":"true"},"#"),s(" options对象")],-1),r=n("p",null,[n("code",null,"options"),s(" 对象，提供微前端应用启动参数信息，此参数是"),n("strong",null,"只读"),s("的。")],-1),k=n("h2",{id:"prefetch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prefetch","aria-hidden":"true"},"#"),s(" prefetch")],-1),v=n("li",null,[n("p",null,[s("类型："),n("code",null,"boolean")])],-1),h=n("li",null,[n("p",null,"示例：")],-1),m=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> options <span class="token punctuation">}</span> <span class="token operator">=</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token constant">MF</span>
<span class="token comment">// prefetch</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>prefetch<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sandbox" tabindex="-1"><a class="header-anchor" href="#sandbox" aria-hidden="true">#</a> sandbox</h2>`,2),_=a(`<li><p>类型：<code>SanboxOption</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SanboxOption</span> <span class="token punctuation">{</span>
    <span class="token comment">// 是否启用样式隔离，默认值为true</span>
    experimentalStyleIsolation<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),b=n("li",null,[n("p",null,"示例：")],-1),f=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> options <span class="token punctuation">}</span> <span class="token operator">=</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token constant">MF</span>
<span class="token comment">// sandbox</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>sandbox<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keepalive" tabindex="-1"><a class="header-anchor" href="#keepalive" aria-hidden="true">#</a> keepAlive</h2>`,2),g=n("li",null,[n("p",null,[s("类型："),n("code",null,"boolean")])],-1),x=n("li",null,[n("p",null,"示例：")],-1),j=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> options <span class="token punctuation">}</span> <span class="token operator">=</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token constant">MF</span>
<span class="token comment">// keepAlive</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>keepAlive<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function y(w,A){const e=p("RouterLink");return i(),c("div",null,[d,r,k,n("ul",null,[v,n("li",null,[n("p",null,[s("详情：微前端启动时是否启用预加载，"),t(e,{to:"/configuration/subproject.md.md/#vue-app-micro-prefetch"},{default:o(()=>[s("prefetch 详情")]),_:1}),s("。")])]),h]),m,n("ul",null,[_,n("li",null,[n("p",null,[s("详情：是否启用沙箱隔离，"),t(e,{to:"/configuration/subproject.md/#vue-app-micro-style-isolation"},{default:o(()=>[s("sandbox 详情")]),_:1}),s("。")])]),b]),f,n("ul",null,[g,n("li",null,[n("p",null,[s("详情：微前端启动时是否启用keepAlive模式，"),t(e,{to:"/configuration/subproject.md/#vue-app-micro-keep-alive"},{default:o(()=>[s("keepAlive 详情")]),_:1}),s("。")])]),x]),j])}const V=l(u,[["render",y],["__file","options.html.vue"]]);export{V as default};