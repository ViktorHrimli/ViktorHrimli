var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("krGWQ"),i("cjwWu"),i("3ZI3M");var a=i("krGWQ");function s(e){return"watched"===e?(a.refs.btnQueve.classList.remove("active"),void a.refs.btnAddWatched.classList.add("active")):"queve"===e?(a.refs.btnAddWatched.classList.remove("active"),void a.refs.btnQueve.classList.add("active")):void 0}function r(e){const t=localStorage.getItem(e);JSON.parse(t).map((e=>{a.refs.titleLib.insertAdjacentHTML("beforeend",function({filmsName:e,filmsImg:t,filmRelise:n,filmGanre:i,filmRait:a,id:s}){return console.log(i),`\n  <li class="list--title">\n          <img src="https://image.tmdb.org/t/p/w500${t}" alt="${e}" />\n        <div class="conteiner--image__title">\n          <p class="image--title">\n            ${e} <br /><span class="image--text">\n              ${i.name} | ${n}\n            </span>\n            <span class="rait">${a.toFixed(2)}</span>\n          </p>\n        </div>\n      </li>\n    `}(e))}))}a.refs.btnAddWatched.addEventListener("click",(function(e){s(e.target.name),r(Object.keys(localStorage)[1])})),a.refs.btnQueve.addEventListener("click",(function(e){s(e.target.name),r(Object.keys(localStorage)[0])}));
//# sourceMappingURL=myLibrary.ca1075fe.js.map
