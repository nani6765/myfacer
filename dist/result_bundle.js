(()=>{"use strict";const e=[{title:"어떻게 달리지? 걸음마형 러너",type:"RNA"},{title:"러닝 쯤이야, 허세형 러너",type:"RNP"},{title:"러닝계의 인싸, 관종형 러너",type:"RTA"},{title:"전생에 선수, 프로 선수형 러너?",type:"RTP"},{title:"바삭바삭 쿠크다스형 러너",type:"WNP"},{title:"나만의 길을 간다, 마이웨이형 러너",type:"WTA"},{title:"고독한 완벽주의자형 러너",type:"WTP"}],t="https://mypacer-runningtest.site/";(()=>{let l=document.querySelector("#kakaoBtn");l&&l.addEventListener("click",(()=>{(()=>{const l=parseInt(document.querySelector("#resultImg").alt);Kakao.Link.sendDefault({objectType:"feed",content:{title:e[l].title,description:"나에게 맞는 러닝 방법 테스트",imageUrl:t+"/img/"+e[l].type,link:{mobileWebUrl:t+"/result/"+e[l].type,webUrl:t+"/result/"+e[l].type}},buttons:[{title:"결과 확인하기",link:{mobileWebUrl:t+"/result/"+e[l].type,webUrl:t+"/result/"+e[l].type}}]})})()}))})(),(()=>{let e=document.querySelector("#MoveHome");e&&e.addEventListener("click",(()=>{location.href="/"}))})(),document.querySelector("#GetURL")&&document.querySelector("#GetURL").addEventListener("click",(()=>{var e,t;t=document.createElement("textarea"),document.body.appendChild(t),e=window.document.location.href,t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("URL이 복사되었습니다.")})),Kakao.init("79b7dfde17a4b74f0e89c54877bedc97"),Kakao.isInitialized()})();