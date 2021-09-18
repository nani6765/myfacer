(()=>{"use strict";var n={381:(n,t,e)=>{e.d(t,{Z:()=>i});var r=e(645),o=e.n(r)()((function(n){return n[1]}));o.push([n.id,"@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeOut {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n\r\n    to {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes fadeOut {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n\r\n    to {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.fadeIn {\r\n    animation: fadeIn;\r\n    animation-duration: 0.5s;\r\n}\r\n\r\n.fadeOut {\r\n    animation: fadeOut;\r\n    animation-duration: 0.5s;\r\n}\r\n",""]);const i=o},174:(n,t,e)=>{e.d(t,{Z:()=>i});var r=e(645),o=e.n(r)()((function(n){return n[1]}));o.push([n.id,"body {\r\n    background-color: #E5E5E5;\r\n}\r\n\r\n.wrap {\r\n    max-width: 540px;\r\n}\r\n\r\n* {\r\n    font-family: 'IBM Plex Sans KR',\r\n    sans-serif;\r\n}",""]);const i=o},389:(n,t,e)=>{e.d(t,{Z:()=>b});var r=e(645),o=e.n(r),i=e(667),a=e.n(i),s=new URL(e(586),e.b),d=new URL(e(312),e.b),p=new URL(e(430),e.b),l=new URL(e(32),e.b),c=o()((function(n){return n[1]})),u=a()(s),g=a()(d),m=a()(p),h=a()(l);c.push([n.id,"#main {\n  background-color: #9EE1D5;\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n  text-align: center;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n#main section {\n  width: 100%;\n}\n\n#main section .heading {\n  width: 100%;\n  background-color: white;\n  border-radius: 0px 0px 20px 20px;\n  padding-top: 80px;\n  padding-bottom: 30px;\n  position: relative;\n}\n\n#main section .heading div {\n  width: 80%;\n  margin: 0 auto;\n}\n\n#main section .heading div img {\n  position: absolute;\n  left: 5%;\n  top: 5%;\n  width: 90%;\n}\n\n#main section .heading div h1 {\n  font-size: 36px;\n  font-weight: 800;\n}\n\n#main section .heading div h3 {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n@media (min-width: 335px) and (max-width: 757px) {\n  #main section .heading div h1 {\n    font-size: 24px;\n  }\n  #main section .heading div h3 {\n    font-size: 14px;\n  }\n}\n\n#main section .imgDiv {\n  margin: 0 auto;\n  width: 80%;\n}\n\n@media (min-width: 335px) and (max-width: 757px) {\n  #main section .imgDiv {\n    width: 60%;\n  }\n}\n\n#main section .content {\n  background-color: #62A297;\n  border-radius: 14px;\n  width: 80%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  margin: 0 auto;\n  text-align: center;\n  font-weight: bold;\n  font-size: 20px;\n  position: relative;\n}\n\n#main section .content::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 20px solid transparent;\n  border-right-color: #62A297;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -10px;\n  margin-left: -20px;\n}\n\n@media (min-width: 335px) and (max-width: 757px) {\n  #main section .content {\n    font-size: 14px;\n  }\n}\n\n#main section .startArea {\n  width: 70%;\n  margin: 0 auto;\n}\n\n#main section .startArea #startBtn {\n  background: #FFFFFF;\n  border: 4px solid #494949;\n  border-radius: 14px;\n  border-radius: 14px;\n  color: black;\n  padding: 15px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n#main section .startArea #startBtn .bold {\n  font-weight: bold;\n}\n\n@media (min-width: 335px) and (max-width: 757px) {\n  #main section .startArea {\n    width: 80%;\n  }\n}\n\n#qna {\n  background-color: #9EE1D5;\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n  text-align: center;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 10px;\n  padding-bottom: 30px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  display: none;\n}\n\n#qna section {\n  height: auto;\n}\n\n#qna section .topArea {\n  width: 90%;\n  margin: 0 auto;\n  text-align: right;\n}\n\n#qna section .topArea span {\n  font-weight: bold;\n}\n\n#qna section .topArea .progress {\n  margin-top: 20px;\n  border-radius: 0px;\n  background-color: #FFFFFF;\n  border-radius: 31px;\n  width: 100%;\n}\n\n#qna section .topArea .progress .progress-bar {\n  background: #62A297;\n  border-radius: 31px;\n}\n\n#qna section .imgArea {\n  width: 70%;\n  margin: 0 auto;\n}\n\n#qna section .qBox {\n  width: 80%;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #62A397;\n  position: relative;\n  border-radius: 14px;\n  text-align: center;\n  color: black;\n  font-weight: bold;\n  font-size: 20px;\n  word-break: keep-all;\n}\n\n#qna section .qBox::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 20px solid transparent;\n  border-right-color: #62A397;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -10px;\n  margin-left: -20px;\n}\n\n#qna section .answerList {\n  background-color: #FFFFFF;\n  border-radius: 14px;\n  display: block;\n  position: relative;\n  width: 80%;\n  border: 0px;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-right: 10px;\n  word-break: keep-all;\n}\n\n#qna section .answerList::after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 20px solid transparent;\n  border-left-color: #FFFFFF;\n  border-right: 0;\n  border-bottom: 0;\n  margin-top: -10px;\n  margin-right: -20px;\n}\n\n#qna section .answerList:hover, #qna section .answerList:active {\n  background-color: #a7f1a6;\n  color: black;\n}\n\n#qna section .answerList:hover::after, #qna section .answerList:active::after {\n  border-left-color: #a7f1a6;\n}\n\n#result {\n  background-color: #9EE1D5;\n  width: 100%;\n  min-height: 100vh;\n  height: auto;\n  text-align: center;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n#result section {\n  width: 100%;\n}\n\n#result section .heading {\n  width: 100%;\n  background-color: white;\n  border-radius: 0px 0px 20px 20px;\n  padding-top: 80px;\n  padding-bottom: 30px;\n  position: relative;\n}\n\n#result section .heading div {\n  width: 80%;\n  margin: 0 auto;\n}\n\n#result section .heading div img {\n  position: absolute;\n  left: 5%;\n  top: 5%;\n  width: 90%;\n}\n\n#result section .heading div h1 {\n  font-size: 36px;\n  font-weight: 800;\n}\n\n#result section .heading div h3 {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n@media (min-width: 335px) and (max-width: 757px) {\n  #result section .heading div h1 {\n    font-size: 24px;\n  }\n  #result section .heading div h3 {\n    font-size: 14px;\n  }\n}\n\n#result section .resultName {\n  width: 80%;\n  margin: 0 auto;\n}\n\n#result section .resultName h3 {\n  width: 100%;\n  font-weight: bold;\n  word-break: keep-all;\n}\n\n#result section .resultName h3:nth-of-type(1) {\n  text-align: left;\n}\n\n#result section .resultName h3:nth-of-type(2) {\n  text-align: right;\n}\n\n#result section .resultName div {\n  background: #FFFFFF;\n  border: 4px solid #494949;\n  border-radius: 8px;\n  font-weight: bold;\n}\n\n#result section .resultName div #name {\n  text-align: center;\n}\n\n#result section .resultImgDiv {\n  width: 80%;\n  margin: 0 auto;\n  background: #62A397;\n  position: relative;\n}\n\n#result section .resultImgDiv::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 20%;\n  width: 0;\n  height: 0;\n  border: 20px solid transparent;\n  border-right-color: #62A397;\n  border-left: 0;\n  border-bottom: 0;\n  margin-top: -10px;\n  margin-left: -20px;\n}\n\n#result section .resultImgDiv h1 {\n  margin-bottom: 0px;\n  font-weight: bold;\n}\n\n#result section .profile {\n  width: 90%;\n  margin: 0 auto;\n  background-image: url("+u+");\n  background-repeat: round;\n  background-size: contain;\n  position: relative;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n}\n\n#result section .profile h1 {\n  width: auto;\n  display: inline;\n  font-weight: bold;\n  background-image: url("+g+');\n  background-size: cover;\n}\n\n#result section .profile ul {\n  list-style: none;\n  padding: 0px;\n}\n\n#result section .profile ul li {\n  word-break: keep-all;\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\n#result section .profile ul li:last-of-type {\n  margin-bottom: 0px;\n}\n\n#result section .profile::after {\n  content: "";\n  width: 60px;\n  height: 100px;\n  background-image: url('+m+");\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: -50px;\n  margin-right: 10px;\n  -webkit-transform: matrix(1, 0.5, -0.3, 1, 0, 0);\n          transform: matrix(1, 0.5, -0.3, 1, 0, 0);\n  -webkit-filter: drop-shadow(8px 4px 4px rgba(0, 0, 0, 0.25));\n          filter: drop-shadow(8px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n#result section .tip {\n  width: 90%;\n  margin: 0 auto;\n  background-image: url("+u+');\n  background-repeat: round;\n  background-size: contain;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n}\n\n#result section .tip h1 {\n  position: relative;\n  font-weight: bold;\n  display: inline;\n}\n\n#result section .tip h1::after {\n  content: "";\n  width: 60px;\n  height: 100px;\n  background-image: url('+m+');\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin-top: -25px;\n  margin-left: -80px;\n  -webkit-filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));\n          filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));\n  -webkit-transform: matrix(-0.9, 0.43, 0.43, 0.9, 0, 0);\n          transform: matrix(-0.9, 0.43, 0.43, 0.9, 0, 0);\n}\n\n#result section .tip ul {\n  list-style: none;\n  padding: 0px;\n}\n\n#result section .tip ul li {\n  word-break: keep-all;\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\n#result section .tip ul li:last-of-type {\n  margin-bottom: 0px;\n}\n\n#result section .resultRelation {\n  width: 90%;\n  margin: 0 auto;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  -ms-grid-rows: auto auto;\n      grid-template-rows: auto auto;\n      grid-template-areas: "goodImg badImg"\r "goodName badName";\n  grid-gap: 1rem;\n}\n\n#result section .resultRelation .goodImg {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: goodImg;\n}\n\n#result section .resultRelation .badImg {\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  grid-area: badImg;\n}\n\n#result section .resultRelation .goodName {\n  -ms-grid-row: 2;\n  -ms-grid-column: 1;\n  grid-area: goodName;\n}\n\n#result section .resultRelation .badName {\n  -ms-grid-row: 2;\n  -ms-grid-column: 2;\n  grid-area: badName;\n}\n\n#result section .resultRelation .imgArea {\n  background-color: #FFFFFF;\n  border-radius: 14px;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n#result section .resultRelation .imgArea h3 {\n  font-weight: bold;\n}\n\n#result section .resultRelation .nameArea {\n  background: #FFFFFF;\n  border: 4px solid #494949;\n  border-radius: 8px;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#result section .resultRelation .nameArea h5 {\n  font-weight: bold;\n  word-break: keep-all;\n  margin-bottom: 0px;\n}\n\n#result section .guide {\n  width: 80%;\n  margin: 0 auto;\n  word-break: keep-all;\n  font-weight: bold;\n  background-color: #FFFFFF;\n  border-radius: 14px;\n  position: relative;\n  -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n#result section .guide a {\n  text-decoration: none;\n  color: black;\n}\n\n#result section .guide a h4 {\n  margin: 0px;\n  font-weight: bold;\n}\n\n#result section .guide a:hover, #result section .guide a:active {\n  text-decoration: none;\n  color: black;\n}\n\n#result section .guide::after {\n  content: \'\';\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 20px solid transparent;\n  border-left-color: #FFFFFF;\n  border-right: 0;\n  border-bottom: 0;\n  margin-top: -10px;\n  margin-right: -20px;\n}\n\n#result section .runningPrinciple {\n  width: 90%;\n  margin: 0 auto;\n  background-color: #f9f6f2;\n  border-radius: 14px;\n}\n\n#result section .runningPrinciple .topArea {\n  width: 100%;\n  height: 50px;\n  background-color: #ece2d9;\n  position: relative;\n}\n\n#result section .runningPrinciple .topArea::after {\n  content: "";\n  width: 63px;\n  height: 60px;\n  background-image: url('+h+');\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: -25px;\n  margin-right: calc(50% - 30px);\n}\n\n#result section .runningPrinciple h2 {\n  width: 100%;\n  text-align: center;\n  font-weight: 800;\n}\n\n#result section .runningPrinciple .content {\n  width: 95%;\n  height: auto;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  -ms-grid-rows: auto auto;\n      grid-template-rows: auto auto;\n  grid-gap: 0.5rem;\n  margin: 0 auto;\n}\n\n#result section .runningPrinciple .content img {\n  width: 100%;\n  height: 100%;\n}\n\n#result section .runningPrinciple .content p {\n  margin-bottom: 1rem;\n}\n\n#result section .appDownload {\n  display: -ms-grid;\n  display: grid;\n  width: 90%;\n  margin: 0 auto;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  -ms-grid-rows: auto;\n      grid-template-rows: auto;\n      grid-template-areas: "and ios";\n  grid-gap: 1rem;\n}\n\n#result section .appDownload div {\n  -webkit-filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));\n          filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));\n  background-color: #FFFFFF;\n  border-radius: 14px;\n}\n\n#result section .appDownload div a {\n  text-decoration: none;\n  color: black;\n}\n\n#result section .appDownload div a p {\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n\n#result section .appDownload div a:hover, #result section .appDownload div a:active {\n  text-decoration: none;\n  color: black;\n}\n\n#result section #MoveHome {\n  background-color: #000000;\n  border: 4px solid #494949;\n  border-radius: 8px;\n  width: 90%;\n  color: white;\n  font-weight: bold;\n}\n\n#result section .footer {\n  width: 100%;\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n#result section .footer h2 {\n  font-weight: bold;\n}\n\n#result section .footer .shareArea {\n  width: 50%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n',""]);const b=c},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&o[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),t.push(d))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],p=r.base?d[0]+r.base:d[0],l=i[p]||0,c="".concat(p," ").concat(l);i[p]=l+1;var u=e(c),g={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(t[u].references++,t[u].updater(g)):t.push({identifier:c,updater:o(g,r),references:1}),a.push(c)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var d=r(n,o),p=0;p<i.length;p++){var l=e(i[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},430:(n,t,e)=>{n.exports=e.p+"43222b425f126d4cab21.png"},586:(n,t,e)=>{n.exports=e.p+"eda53e91fa8c08635962.png"},32:(n,t,e)=>{n.exports=e.p+"5b047db08a79458b7346.png"},312:(n,t,e)=>{n.exports=e.p+"13afd4a93eaf1dd3f119.png"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),i=e(569),a=e.n(i),s=e(565),d=e.n(s),p=e(216),l=e.n(p),c=e(589),u=e.n(c),g=e(389),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;var h=e(174),b={};b.styleTagTransform=u(),b.setAttributes=d(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),t()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;var f=e(381),x={};x.styleTagTransform=u(),x.setAttributes=d(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=l(),t()(f.Z,x),f.Z&&f.Z.locals&&f.Z.locals})()})();