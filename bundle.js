(()=>{"use strict";class e{#e;#t;constructor(e,t){this.#e=e,this.#t=t}render(){const e=document.createElement("header"),n=document.createElement("h1");n.textContent=this.#e;const i=new t(this.#t);return e.appendChild(n),e.appendChild(i.render()),e}}class t{#t;constructor(e){this.#t=e}render(){const e=document.createElement("nav"),t=document.createElement("ul");for(const e of this.#t){const n=document.createElement("li");n.innerHTML=e.title,n.addEventListener("click",(()=>{const t=document.querySelector("main");t.innerHTML="",t.appendChild(e.render())})),t.appendChild(n)}return e.appendChild(t),e}}class n{#n;constructor(e){this.#n=e}render(){const e=document.createElement("footer"),t=document.createElement("span");return t.innerHTML=this.#n,e.appendChild(t),e}}class i{#e;#t;#n;constructor(e,t,n){this.#e=e,this.#t=t,this.#n=n}load(){document.querySelector("title").innerHTML=this.#e;const t=document.querySelector("body"),i=new e(this.#e,this.#t),r=document.createElement("main");r.appendChild(this.#t[0].render());const o=new n(this.#n);t.appendChild(i.render()),t.appendChild(r),t.appendChild(o.render())}}class r{title="Home";render(){const e=document.createElement("section"),t=document.createElement("h2"),n=document.createElement("p");return t.innerHTML="Welcome to our tea house",n.innerHTML="Feel free to visit us in our opening hours to try our fine selection of teas.",e.appendChild(t),e.appendChild(n),e}}class o{title="Menu";#i;constructor(e){this.#i=e}render(){const e=document.createElement("section"),t=document.createElement("header"),n=document.createElement("h2");n.innerHTML="Try our teas, they are all very good!",t.appendChild(n),e.appendChild(t);for(const t of this.#i){const n=document.createElement("article"),i=document.createElement("h2"),r=document.createElement("p");i.innerHTML=t.heading,r.innerHTML=t.description,n.appendChild(i),n.appendChild(r),e.appendChild(n)}return e}}class s{title="Contact";#r;constructor(e){this.#r=e}render(){const e=document.createElement("section"),t=document.createElement("h2"),n=document.createElement("p");return t.innerHTML="Contact",n.innerHTML=this.#r,e.appendChild(t),e.appendChild(n),e}}!function(){const e=[new r,new o([{heading:"A tea you need to try",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "},{heading:"A tea you need to try",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "},{heading:"A tea you need to try",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "},{heading:"A tea you need to try",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "}]),new s("Feel free to contact us during our opening hours.")];new i("Tea House TOP",e,"&copy;&nbsp;c-auri&nbsp;2023").load()}()})();