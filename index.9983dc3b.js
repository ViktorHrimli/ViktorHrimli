function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequired7c6;function s(e){const n=new Date(e.release_date).getFullYear();return{filmsName:e.original_title,filmsImg:e.poster_path,filmRelise:n,filmGanre:e.genres,filmRait:e.vote_average,id:e.id}}null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){i[e]=n},n.parcelRequired7c6=a);var l=a("3ZI3M"),r=a("cjwWu"),d=(l=a("3ZI3M"),a("bBupM"));function o({poster_path:e,original_title:n,overview:t,popularity:i,vote_average:a,vote_count:s},l){const r=(0,d.getGenr)(l);return`\n  <div class="modal">\n        <svg class="modal--icon"  width="30" height="30" viewBox="0 0 30 30" fill="white" xmlns="http://www.w3.org/2000/svg">\n            <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n            <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n        </svg>\n    <div class="modal--title">\n      <div class="modal--img">\n        <img src="https://image.tmdb.org/t/p/w500${e}" alt="${n}"/>\n      </div>\n      <div class="modal--title__info">\n        <h2 class="title--text">${n}</h2>\n        <div class="conteiner--modal__list">\n          <ul class="modal--title__list--left">\n            <li class="list--element">\n              <p>Vote / Votes</p>\n            </li>\n            <li class="list--element">\n              <p>Popularity</p>\n            </li>\n            <li class="list--element">\n              <p>Original Title</p>\n            </li>\n            <li class="list--element">\n              <p>Genre</p>\n            </li>\n          </ul>\n          <ul class="modal--title__list--right">\n            <li class="list--element">\n              <p class="element--value"><span class="rait">${a.toFixed(2)}</span> / ${s.toFixed(2)}</p>\n            </li>\n            <li class="list--element">\n              <p class="element--value">${i.toFixed(2)}</p>\n            </li>\n            <li class="list--element">\n              <p class="element--value">${n}</p>\n            </li>\n            <li class="list--element">\n              <p class="element--value">${r}</p>\n            </li>\n          </ul>\n        </div>\n        <div class="conteiner--about">\n          <p>ABOUT</p>\n          <p class="about--text">${t}</p>\n        </div>\n        <div class="conteiner--btn">\n          <button class="btn--modal" name="watched" data-action="add-to-watch">add to Watched</button>\n          <button class="btn--modal" name="queve" data-action="queve">add to queue</button>\n        </div>\n      </div>\n    </div>\n    </div>\n\n    `}var c;function m({title:n,poster_path:t,genre_ids:i,release_date:a,vote_average:s,name:l,first_air_date:r,id:d}){const o=function(e,n){if(e)return e;if(n)return n}(l,n),m=function(e,{genres:n}){let t=[];for(let i=0;i<e.length;i+=1)n.find((({id:n,name:a})=>{n===e[i]&&t.push(a)}));t.length>2&&t.splice(2,3);return t.join(" ")}(i,e(c));return`\n  <li class="list--title">\n          <img name="${d}"   src="https://image.tmdb.org/t/p/w500${t}" alt="${o}" />\n        <div class="conteiner--image__title">\n          <p class="image--title">\n            ${o} <br />\n            <div class="list--ganre_date--conteiner">\n            <span class="image--text">\n              ${m} | ${function(e,n){if(e)return e;if(n)return n}(a,r).slice(0,4)}\n            </span>\n            <span class="rait">${s.toFixed(2)}</span>\n            </div>\n          </p>\n        </div>\n      </li>\n    `}c=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var p=a("krGWQ");function u(e){for(let e of p.refs.title.children)e.addEventListener("click",f)}function f(e){p.refs.backDrop.classList.remove("is-hidden"),p.refs.backDrop.addEventListener("click",v),p.refs.backDrop.classList.contains("is-hidden")||window.addEventListener("keydown",g,{once:!0}),p.refs.backDrop.classList.contains("is-hidden")&&p.refs.backDrop.removeEventListener("click",v),h(parseInt(e.target.name))}function v(e){"backdrop"===e.target.className&&p.refs.backDrop.classList.add("is-hidden")}function g(e){if("Escape"===e.code)return p.refs.backDrop.classList.add("is-hidden")}p=a("krGWQ");function h(e){let n=[];(0,r.getIdMovies)(e).then((({data:e})=>{e.genres.filter((e=>(n.push(e.name),n))),p.refs.backDrop.innerHTML="",p.refs.backDrop.insertAdjacentHTML("beforeend",o(e,n)),(0,l.default)(s(e))})).catch(console.error)}(0,r.createResponseTitleTrend)().then((({data:{results:e}})=>{e.map((e=>{p.refs.title.insertAdjacentHTML("afterbegin",m(e))})),u()}));
//# sourceMappingURL=index.9983dc3b.js.map
