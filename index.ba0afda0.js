!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var t={},i={},a=e.parcelRequired7c6;function r(e){var n=new Date(e.release_date).getFullYear();return{filmsName:e.original_title,filmsImg:e.poster_path,filmRelise:n,filmGanre:e.genres,filmRait:e.vote_average,id:e.id}}null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},e.parcelRequired7c6=a);var o,l=a("l5bVx"),s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,m=v||p||Function("return this")(),g=Object.prototype.toString,h=Math.max,b=Math.min,y=function(){return m.Date.now()};function _(e){var t=void 0===e?"undefined":n(l)(e);return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":n(l)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(_(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var i=d.test(e);return i||u.test(e)?f(e.slice(2),i?2:8):c.test(e)?NaN:+e}o=function(e,n,t){var i,a,r,o,l,s,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(n){var t=i,r=a;return i=a=void 0,c=n,o=e.apply(r,t)}function p(e){return c=e,l=setTimeout(g,n),d?v(e):o}function m(e){var t=e-s;return void 0===s||t>=n||t<0||u&&e-c>=r}function g(){var e=y();if(m(e))return k(e);l=setTimeout(g,function(e){var t=n-(e-s);return u?b(t,r-(e-c)):t}(e))}function k(e){return l=void 0,f&&i?v(e):(i=a=void 0,o)}function x(){var e=y(),t=m(e);if(i=arguments,a=this,s=e,t){if(void 0===l)return p(s);if(u)return l=setTimeout(g,n),v(s)}return void 0===l&&(l=setTimeout(g,n)),o}return n=w(n)||0,_(t)&&(d=!!t.leading,r=(u="maxWait"in t)?h(w(t.maxWait)||0,n):r,f="trailing"in t?!!t.trailing:f),x.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=s=a=l=void 0},x.flush=function(){return void 0===l?o:k(y())},x};var k=a("fpFLL"),x=a("gbT2k");k=a("fpFLL");(M=a("4Nugj")).refs.input.addEventListener("input",n(o)((function(e){var n=e.target.value;""!==n&&R(n)}),500));var L=a("gQM3s");function T(e,n){var t=e.poster_path,i=e.original_title,a=e.overview,r=e.popularity,o=e.vote_average,l=e.vote_count,s=(0,L.getGenr)(n);return'\n  <div class="modal">\n        <svg class="modal--icon"  width="30" height="30" viewBox="0 0 30 30" fill="white" xmlns="http://www.w3.org/2000/svg">\n            <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n            <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n        </svg>\n    <div class="modal--title">\n      <div class="modal--img">\n        <img src="https://image.tmdb.org/t/p/w500'.concat(t,'" alt="').concat(i,'"/>\n      </div>\n      <div class="modal--title__info">\n        <h2 class="title--text">').concat(i,'</h2>\n        <div class="conteiner--modal__list">\n          <ul class="modal--title__list--left">\n            <li class="list--element">\n              <p>Vote / Votes</p>\n            </li>\n            <li class="list--element">\n              <p>Popularity</p>\n            </li>\n            <li class="list--element">\n              <p>Original Title</p>\n            </li>\n            <li class="list--element">\n              <p>Genre</p>\n            </li>\n          </ul>\n          <ul class="modal--title__list--right">\n            <li class="list--element">\n              <p class="element--value"><span class="rait">').concat(o.toFixed(2),"</span> / ").concat(l.toFixed(2),'</p>\n            </li>\n            <li class="list--element">\n              <p class="element--value">').concat(r.toFixed(2),'</p>\n            </li>\n            <li class="list--element">\n              <p class="element--value">').concat(i,'</p>\n            </li>\n            <li class="list--element">\n              <p class="element--value">').concat(s,'</p>\n            </li>\n          </ul>\n        </div>\n        <div class="conteiner--about">\n          <p>ABOUT</p>\n          <p class="about--text">').concat(a,'</p>\n        </div>\n        <div class="conteiner--btn">\n          <button class="btn--modal" name="watched" data-action="add-to-watch">add to Watched</button>\n          <button class="btn--modal" name="queve" data-action="queve">add to queue</button>\n        </div>\n      </div>\n    </div>\n    </div>\n\n    ')}var j;function D(e){var t=e.title,i=e.poster_path,a=e.genre_ids,r=e.release_date,o=e.vote_average,l=e.name,s=e.first_air_date,c=e.id,d=function(e,n){if(e)return e;if(n)return n}(l,t),u=function(e,n){for(var t=function(n){i.find((function(t){var i=t.id,r=t.name;i===e[n]&&a.push(r)}))},i=n.genres,a=[],r=0;r<e.length;r+=1)t(r);a.length>2&&a.splice(2,3);return a.join(" ")}(a,n(j)),f=function(e,n){if(e)return e;if(n)return n}(r,s);return'\n  <li class="list--title">\n          <img name="'.concat(c,'"   src="https://image.tmdb.org/t/p/w500').concat(i,'" alt="').concat(d,'" />\n        <div class="conteiner--image__title">\n          <p class="image--title">\n            ').concat(d,' <br />\n            <div class="list--ganre_date--conteiner">\n            <span class="image--text">\n              ').concat(u," | ").concat(f.slice(0,4),'\n            </span>\n            <span class="rait">').concat(o.toFixed(2),"</span>\n            </div>\n          </p>\n        </div>\n      </li>\n    ")}j=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var M=a("4Nugj");function O(e){var n=!0,t=!1,i=void 0;try{for(var a,r=M.refs.title.children[Symbol.iterator]();!(n=(a=r.next()).done);n=!0){a.value.addEventListener("click",F)}}catch(e){t=!0,i=e}finally{try{n||null==r.return||r.return()}finally{if(t)throw i}}}function F(e){M.refs.backDrop.classList.remove("is-hidden"),M.refs.backDrop.addEventListener("click",N),M.refs.backDrop.classList.contains("is-hidden")||window.addEventListener("keydown",E,{once:!0}),M.refs.backDrop.classList.contains("is-hidden")&&M.refs.backDrop.removeEventListener("click",N),A(parseInt(e.target.name))}function N(e){"backdrop"===e.target.className&&M.refs.backDrop.classList.add("is-hidden")}function E(e){if("Escape"===e.code)return M.refs.backDrop.classList.add("is-hidden")}M=a("4Nugj");function A(e,n){try{var t=[];(0,x.getIdMovies)(e).then((function(e){var n=e.data;n.genres.filter((function(e){return t.push(e.name),t})),M.refs.backDrop.innerHTML="",M.refs.backDrop.insertAdjacentHTML("beforeend",T(n,t)),(0,k.default)(r(n))}))}catch(e){console.log(e)}}function R(e){try{(0,x.getSearchMovies)(e,1).then((function(e){console.log(e)}))}catch(e){console.log(e)}}(0,x.createResponseTitleTrend)(1).then((function(e){var n=e.data.results;try{n.map((function(e){M.refs.title.insertAdjacentHTML("afterbegin",D(e))})),O()}catch(e){console.log(e)}}))}();
//# sourceMappingURL=index.ba0afda0.js.map
