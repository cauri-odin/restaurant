(()=>{"use strict";class e{title="Home";getContent(){const e=document.createElement("section"),t=document.createElement("h2"),n=document.createElement("p");return t.innerHTML="Welcome to our tea house",n.innerHTML="Feel free to visit us in our opening hours to try our fine selection of teas.",e.appendChild(t),e.appendChild(n),e}}class t{title="Menu";#e=[{heading:"A tea you need to try",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "},{heading:"A tea you need to try",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "},{heading:"A tea you need to try",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "},{heading:"A tea you need to try",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "}];getContent(){const e=document.createElement("section"),t=document.createElement("header"),n=document.createElement("h2");n.innerHTML="Try our teas, they are all very good!",t.appendChild(n),e.appendChild(t);for(const t of this.#e){const n=document.createElement("article"),o=document.createElement("h2"),i=document.createElement("p");o.innerHTML=t.heading,i.innerHTML=t.description,n.appendChild(o),n.appendChild(i),e.appendChild(n)}return e}}class n{title="Contact";getContent(){const e=document.createElement("section"),t=document.createElement("h2"),n=document.createElement("p");return t.innerHTML="Contact",n.innerHTML="Feel free to contact us during our opening hours.",e.appendChild(t),e.appendChild(n),e}}function o(e){const t=document.querySelector("main");t.innerHTML="",t.appendChild(e.getContent())}const i=[new e,new t,new n];class d{#t;constructor(e){this.#t=e}load(){const e=document.querySelector("body"),t=document.createElement("main");e.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1");return t.textContent="Tea House TOP",e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav"),t=document.createElement("ul");for(const e of i){const n=document.createElement("li");n.innerHTML=e.title,n.addEventListener("click",(()=>o(e))),t.appendChild(n)}return e.appendChild(t),e}()),e}()),e.appendChild(t),e.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("span");return t.innerHTML="&copy;&nbsp;c-auri&nbsp;2023",e.appendChild(t),e}()),t.appendChild(this.#t[0].getContent())}}!function(){const o=[new e,new t,new n];new d(o).load()}()})();