!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequired7c6;function s(e){var n=new Date(e.release_date).getFullYear();return{filmsName:e.original_title,filmsImg:e.poster_path,filmRelise:n,filmGanre:e.genres,filmRait:e.vote_average,id:e.id}}null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){i[e]=n},n.parcelRequired7c6=a);var l=a("fpFLL"),r=a("gbT2k"),o=(l=a("fpFLL"),a("gQM3s"));function c(e,n){var t=e.poster_path,i=e.original_title,a=e.overview,s=e.popularity,l=e.vote_average,r=e.vote_count,c=(0,o.getGenr)(n);return'\n  <div class="modal">\n        <svg class="modal--icon"  width="30" height="30" viewBox="0 0 30 30" fill="white" xmlns="http://www.w3.org/2000/svg">\n            <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n            <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n        </svg>\n    <div class="modal--title">\n      <div class="modal--img">\n        <img src="https://image.tmdb.org/t/p/w500'.concat(t,'" alt="').concat(i,'"/>\n      </div>\n      <div class="modal--title__info">\n        <h2 class="title--text">').concat(i,'</h2>\n        <div class="conteiner--modal__list">\n          <ul class="modal--title__list--left">\n            <li class="list--element">\n              <p>Vote / Votes</p>\n            </li>\n            <li class="list--element">\n              <p>Popularity</p>\n            </li>\n            <li class="list--element">\n              <p>Original Title</p>\n            </li>\n            <li class="list--element">\n              <p>Genre</p>\n            </li>\n          </ul>\n          <ul class="modal--title__list--right">\n            <li class="list--element">\n              <p class="element--value"><span class="rait">').concat(l.toFixed(2),"</span> / ").concat(r.toFixed(2),'</p>\n            </li>\n            <li class="list--element">\n              <p class="element--value">').concat(s.toFixed(2),'</p>\n            </li>\n            <li class="list--element">\n              <p class="element--value">').concat(i,'</p>\n            </li>\n            <li class="list--element">\n              <p class="element--value">').concat(c,'</p>\n            </li>\n          </ul>\n        </div>\n        <div class="conteiner--about">\n          <p>ABOUT</p>\n          <p class="about--text">').concat(a,'</p>\n        </div>\n        <div class="conteiner--btn">\n          <button class="btn--modal" name="watched" data-action="add-to-watch">add to Watched</button>\n          <button class="btn--modal" name="queve" data-action="queve">add to queue</button>\n        </div>\n      </div>\n    </div>\n    </div>\n\n    ')}var d;function m(n){var t=n.title,i=n.poster_path,a=n.genre_ids,s=n.release_date,l=n.vote_average,r=n.name,o=n.first_air_date,c=n.id,m=function(e,n){if(e)return e;if(n)return n}(r,t),u=function(e,n){for(var t=function(n){i.find((function(t){var i=t.id,s=t.name;i===e[n]&&a.push(s)}))},i=n.genres,a=[],s=0;s<e.length;s+=1)t(s);a.length>2&&a.splice(2,3);return a.join(" ")}(a,e(d)),p=function(e,n){if(e)return e;if(n)return n}(s,o);return'\n  <li class="list--title">\n          <img name="'.concat(c,'"   src="https://image.tmdb.org/t/p/w500').concat(i,'" alt="').concat(m,'" />\n        <div class="conteiner--image__title">\n          <p class="image--title">\n            ').concat(m,' <br />\n            <div class="list--ganre_date--conteiner">\n            <span class="image--text">\n              ').concat(u," | ").concat(p.slice(0,4),'\n            </span>\n            <span class="rait">').concat(l.toFixed(2),"</span>\n            </div>\n          </p>\n        </div>\n      </li>\n    ")}d=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var u=a("4Nugj");function p(e){var n=!0,t=!1,i=void 0;try{for(var a,s=u.refs.title.children[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){a.value.addEventListener("click",f)}}catch(e){t=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(t)throw i}}}function f(e){var n,t;u.refs.backDrop.classList.remove("is-hidden"),u.refs.backDrop.addEventListener("click",v),u.refs.backDrop.classList.contains("is-hidden")||window.addEventListener("keydown",g,{once:!0}),u.refs.backDrop.classList.contains("is-hidden")&&u.refs.backDrop.removeEventListener("click",v),n=parseInt(e.target.name),t=[],(0,r.getIdMovies)(n).then((function(e){var n=e.data;n.genres.filter((function(e){return t.push(e.name),t})),u.refs.backDrop.innerHTML="",u.refs.backDrop.insertAdjacentHTML("beforeend",c(n,t)),(0,l.default)(s(n))})).catch(console.error)}function v(e){"backdrop"===e.target.className&&u.refs.backDrop.classList.add("is-hidden")}function g(e){if("Escape"===e.code)return u.refs.backDrop.classList.add("is-hidden")}u=a("4Nugj");(0,r.createResponseTitleTrend)().then((function(e){var n=e.data.results;n.map((function(e){u.refs.title.insertAdjacentHTML("afterbegin",m(e))})),p()}))}();
//# sourceMappingURL=index.21384643.js.map
