!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("4Nugj"),a("gbT2k"),a("fpFLL");var i=a("4Nugj");function c(e){return"watched"===e?(i.refs.btnQueve.classList.remove("active"),void i.refs.btnAddWatched.classList.add("active")):"queve"===e?(i.refs.btnAddWatched.classList.remove("active"),void i.refs.btnQueve.classList.add("active")):void 0}function s(e){var t=localStorage.getItem(e);JSON.parse(t).map((function(e){var t,n,a,c,s,r;i.refs.titleLib.insertAdjacentHTML("beforeend",(n=(t=e).filmsName,a=t.filmsImg,c=t.filmRelise,s=t.filmGanre,r=t.filmRait,t.id,console.log(s),'\n  <li class="list--title">\n          <img src="https://image.tmdb.org/t/p/w500'.concat(a,'" alt="').concat(n,'" />\n        <div class="conteiner--image__title">\n          <p class="image--title">\n            ').concat(n,' <br /><span class="image--text">\n              ').concat(s.name," | ").concat(c,'\n            </span>\n            <span class="rait">').concat(r.toFixed(2),"</span>\n          </p>\n        </div>\n      </li>\n    ")))}))}i.refs.btnAddWatched.addEventListener("click",(function(e){c(e.target.name),s(Object.keys(localStorage)[1])})),i.refs.btnQueve.addEventListener("click",(function(e){c(e.target.name),s(Object.keys(localStorage)[0])}))}();
//# sourceMappingURL=myLibrary.e51df4ec.js.map
