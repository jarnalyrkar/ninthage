!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hamburger=document.querySelector("#hamburger"),this.nav=document.querySelector(".headerMenu"),this.events()}var t,n,o;return t=e,(n=[{key:"events",value:function(){var e=this;this.hamburger.addEventListener("click",(function(t){e.nav.classList.toggle("headerMenu--open"),e.hamburger.classList.toggle("hamburger--toggled"),document.body.classList.toggle("disableScroll"),e.closeOpenMenus()}))}},{key:"closeOpenMenus",value:function(){this.menuItems=document.querySelectorAll(".headerMenu__list .headerMenu__item"),this.menuItems.forEach((function(e){e.classList.contains("menu-item-has-children--open")&&(e.classList.remove("menu-item-has-children--open"),e.querySelector(".headerMenu__submenu--open").classList.remove("headerMenu__submenu--open"))}))}}])&&r(t.prototype,n),o&&r(t,o),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nav=document.querySelector(".topHeader"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",(function(t){window.scrollY>10?e.nav.classList.add("topHeader--hasScrolled"):e.nav.classList.remove("topHeader--hasScrolled")}))}}])&&a(t.prototype,n),r&&a(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menu=document.querySelector(".headerMenu"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){this.menu.addEventListener("click",(function(e){e.target.parentElement.classList.contains("menu-item-has-children")&&(e.preventDefault(),e.target.parentElement.classList.toggle("menu-item-has-children--open"),e.target.parentElement.querySelector(".headerMenu__submenu").classList.toggle("headerMenu__submenu--open"))}))}}])&&c(t.prototype,n),r&&c(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lightbox=document.querySelector("#lightbox"),this.currentImage=document.querySelector("#current_image"),this.imageGallery=document.querySelector("#image_gallery"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.lightbox&&document.addEventListener("click",(function(t){"IMG"===t.target.nodeName&&t.target.classList.contains("imageGallery__image")?(e.currentImage.src=t.target.src,e.lightbox.classList.add("lightbox--open")):e.lightbox.classList.contains("lightbox--open")&&e.lightbox.classList.remove("lightbox--open")}))}}])&&u(t.prototype,n),r&&u(t,r),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.languageSwitcher=document.querySelector("#desktop_language_switcher"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.languageSwitcher.addEventListener("click",(function(t){e.languageSwitcher.querySelector(".headerMenu__submenu").classList.toggle("headerMenu__submenu--open")}))}}])&&f(t.prototype,n),r&&f(t,r),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.accordions=document.querySelectorAll(".accordion"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){this.accordions&&this.accordions.forEach((function(e){e.addEventListener("click",(function(e){e.target.classList.contains("accordion__title")&&e.target.classList.toggle("accordion__title--open")}))}))}}])&&h(t.prototype,n),r&&h(t,r),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteUrl=document.querySelector("#page_url").value+"/wp-content/themes/ninthage/inc/get_forum_posts.php",this.getPosts()}var t,n,r;return t=e,(n=[{key:"getPosts",value:function(){var e=document.querySelector("#recentPostsList");e&&fetch(this.siteUrl).then((function(e){return e.text()})).then((function(t){for(var n=(new DOMParser).parseFromString(t,"text/html").querySelector("#lastXBoardPosts"),r=n.querySelectorAll("tbody .wbbTopicLink"),o=n.querySelectorAll("tbody .columnBoard > a"),a=[],i=0;i<r.length;i++)a[i]={topic:r[i],board:o[i]};var c=document.createElement("p");c.innerHTML="Posted in ",c.classList.add("recentPostsList__postedIn");var s=document.createElement("article");s.classList.add("recentPostsList__item"),a.forEach((function(t){var n=s.cloneNode(!0);e.appendChild(n),n.appendChild(t.topic);var r=c.cloneNode(!0);n.appendChild(r),r.appendChild(t.board)})),e.classList.remove("loading")}))}}])&&m(t.prototype,n),r&&m(t,r),e}();new o,new i,new s,new l,new d,new v,new p}]);
//# sourceMappingURL=scripts-bundled.d665122679304de3ba25.js.map