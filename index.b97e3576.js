!function(){var e="https://api.thecatapi.com/v1",n="live_uam23cpifjbKw0k7CvEgzOveb02VkOGkGJscTeyrw4TQ2X2hYhsKdYyhmbVf1LZp";function t(t){return fetch("".concat(e,"/images/search?api_key=").concat(n,"&breed_ids=").concat(t)).then((function(e){if(e.ok)return e.json();throw new Error(e.status)}))}var c=document.querySelector(".breed-select"),a=document.querySelector(".cat-info"),i=document.querySelector(".loader"),s=document.querySelector(".error");function r(){s.classList.remove("is-hidden"),c.classList.add("is-hidden")}s.classList.add("is-hidden"),fetch("".concat(e,"/breeds?api_key=").concat(n)).then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(e){i.classList.replace("loader","is-hidden");var n=e.map((function(e){var n=e.name,t=e.id;return"<option value=".concat(t,">").concat(n,"</option>")}));c.insertAdjacentHTML("beforeend",n),c.classList.remove("is-hidden")})).catch(r),c.addEventListener("change",(function(e){i.classList.replace("is-hidden","loader"),a.classList.add("is-hidden"),t(e.target.value).then((function(e){var n=e[0],t=n.url,c=n.breeds[0],s=c.name,r=c.description,o=c.temperament;a.innerHTML="\n            <img src='".concat(t,"' alt='{name}' width=\"400\"/>\n            <div class='box'>\n                <h2>").concat(s,"</h2>\n                <p>").concat(r,"</p>\n                <p>").concat(o,"</p>\n            </div>\n        "),a.classList.remove("is-hidden"),i.classList.add("is-hidden")})).catch(r)}))}();
//# sourceMappingURL=index.b97e3576.js.map
