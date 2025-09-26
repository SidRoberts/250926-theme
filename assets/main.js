(()=>{var o=class extends HTMLElement{constructor(){super();let e=this.innerHTML;this.innerHTML=`
            <div class="message">
                ${e}
            </div>

            <span class="badge"></span>`}static get observedAttributes(){return["badge"]}attributeChangedCallback(e,i,t){e==="badge"&&(this.querySelector("& > .badge").innerHTML=t)}};customElements.define("sr-badge",o);var s=function(n){n.preventDefault();let e=document.querySelector(this.dataset.openDialog);e.showModal(),e.setAttribute("tabindex","-1"),e.addEventListener("click",function(i){let t=e.getBoundingClientRect();t.top<=i.clientY&&i.clientY<=t.top+t.height&&t.left<=i.clientX&&i.clientX<=t.left+t.width||e.close()})};document.querySelectorAll("[data-open-dialog]").forEach(function(n){n.addEventListener("click",s)});var a={attributes:!0,childList:!0,subtree:!0},c=(n,e)=>{for(let i of n)i.type==="childList"&&i.addedNodes.forEach(function(t){t.nodeType===Node.ELEMENT_NODE&&(t.hasAttribute("data-open-dialog")?t.addEventListener("click",s):t.querySelectorAll("[data-open-dialog]").forEach(function(r){r.addEventListener("click",s)}))})},d=new MutationObserver(c);d.observe(document,a);})();
