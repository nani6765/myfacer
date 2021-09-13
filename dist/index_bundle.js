(()=>{"use strict";const e=[{q:"1. 러닝을 시작하려는 당신, 러닝을 선택한 이유는?",a:[{answer:"a. 최고의 가성비! (신발만 있으면 되니까)",type:["T","P"]},{answer:"b. 퇴근하면 헬스장 문이 닫혀 있어서.. (시간 제한 없는 운동)",type:["R","N"]},{answer:"c. 아직 다른 운동 경험이 없어서.. (운동을 굳이 배우면서 해야하나?)",type:["W","A"]},{answer:"d. 체력, 다이어트, 기분전환. 러닝은 효과 만점 운동!",type:["R","T"]}]},{q:"2. 러닝 준비 중일 때, 당신이 가장 신경쓰는 것은?",a:[{answer:"a. 오늘 나의 러닝을 책임져줄 러닝화 고르기",type:["W","P"]},{answer:"b. 러닝도 기분이지! (러닝하면서 들을 음악과 이어폰)",type:["R","P"]},{answer:"c. 러닝도 패셔너블하게~(러닝 패션 아이템 – 옷, 코디, 악세사리 등)",type:["N","A"]}]},{q:"3. 이제 러닝하러 나간다. 당신이 향한 러닝 장소는?",a:[{answer:"a. 조용한 나만의 코스! (한적한 곳, 사람이 많지 않은 곳)",type:["W","T"]},{answer:"b. 러닝도 코스를 고민해야해? (집앞 아무 장소 혹은 러닝머신)",type:["R","A"]},{answer:"c. 러닝하기 분위기 좋은 코스 없을까? (경치가 좋은 장소)",type:["W","N"]},{answer:"d. 러닝은 극한이지! 도전! (오르막이 있는 장소)",type:["R","N"]}]},{q:"4. 러닝화 끈을 점검하고 있는 당신! 오늘 당신의 러닝 목표는?",a:[{answer:"a. 짧고 강하게! (짧은 시간과 거리, 그리고 빠른 속도)",type:["N","P"]},{answer:"b. 꾸준함이 중요하지! (쉽게쉽게, 짧은 시간과 거리)",type:["T","P"]},{answer:"c. 난 우리 동네 최고의 러너!! (최대한 긴시간과 거리, 그리고 빠른 속도)",type:["R","N"]},{answer:"d. 한결같은 꾸준함의 중요하지! (평균 거리와 시간, 그리고 적정 속도)",type:["W","T"]}]},{q:"5. 열심히 땀 흘리며 러닝하고 있는 당신! 지금 드는 생각은?",a:[{answer:"a. 이번달까지 꼭 5kg 감량 목표! (다이어트 생각)",type:["T","P"]},{answer:"b. 기분 전환된다. 오늘 스트레스 훌~ 훌 ~ (러닝이 그냥 좋음)",type:["R","A"]},{answer:"c. 달리기 끝나면 푸쉬업 100회, 윗몸일으키기 100회 (운동 루틴 생각)",type:["W","P"]},{answer:"d. 올해는 꼭 러닝 10km 완주하자! (러닝만의 목표 존재)",type:["N","A"]}]},{q:"6. 드디어 러닝 끝~ 당신의 생각은?",a:[{answer:"a. 더 빨리 달릴 수 있었는데… (러닝 기록을 보며 아쉬움)",type:["R","N"]},{answer:"b. 휴~ 오늘도 러닝 했으니 뿌듯함",type:["W","A"]},{answer:"c. 다음엔 더 멀리 달려볼까?? (다음 도전 목표 생각)",type:["T","P"]}]},{q:"7. 최근 러닝 다이어리를 보면 어떻게 채워져 있을까?",a:[{answer:"a. 너무 안 뛰었다. (한참 비어있다)",type:["N","P"]},{answer:"b. 러닝은 꾸준함이지 (매일매일의 기록이 빼곡하다) ",type:["T","P"]},{answer:"c. 가끔 달리는 것도 좋다 (듬성듬성, 무규칙)",type:["R","A"]}]},{q:"8. 지인이 러닝을 하다 부상을 당했다고 한다, 내 반응은?",a:[{answer:"a. 러닝하다 다칠수도 있어?? (난 러닝 부상 경험 없음)",type:["T","A"]},{answer:"b. 러닝 부상 경험은 없지만 왠지 두려움 (러닝 부상 경험담 많이 들음)",type:["W","A"]},{answer:"c. 러닝 부상은 정말 최악이야! 다신 경험하고 싶지 않아 (이미 경험함)",type:["R","N"]}]},{q:"9. 마라톤 대회 신청자 모집 광고를 보았다.",a:[{answer:"a. 무조건 참가해야지!",type:["R","A"]},{answer:"b. 내가 왜? (나와 관계 없음)",type:["W","T"]},{answer:"c. 아직은 준비가 안되어 다음 기회에 꼭!",type:["W","P"]}]}],t=document.querySelector("#main"),a=document.querySelector("#qna");var n=new Object({R:0,T:0,P:0,W:0,N:0,A:0});const s=(t,a,s)=>{var y=document.querySelector(".answerBox"),l=document.createElement("div");l.classList.add("answerList"),l.classList.add("my-3"),l.classList.add("py-3"),l.classList.add("mx-auto"),l.classList.add("fadeIn"),y.appendChild(l),l.innerHTML=t,l.addEventListener("click",(()=>{var t=document.querySelectorAll(".answerList");for(let e=0;e<t.length;e++)t[e].disabled=!0,t[e].style.WebkitAnimation="fadeOut 0.5s",t[e].style.animation="fadeOut 0.5s";setTimeout((()=>{var y=e[a].a[s].type;for(let e=0;e<y.length;e++)n[y[e]]+=1;for(let e=0;e<t.length;e++)t[e].style.display="none";r(++a)}),450)}),!1)},r=t=>{if(9!==t){document.querySelector(".currentIdx").innerHTML=t+1,document.querySelector(".qBox").innerHTML=e[t].q;for(let a in e[t].a)s(e[t].a[a].answer,t,a);var a=document.querySelector(".progress-bar");a.style.width=100/9*(t+1)+"%",a.setAttribute("aria-valuenow",100/9*(t+1))}else(()=>{let e=(()=>{let e,t,a;e=n.R>=n.W?"R":"W",t=n.T>=n.N?"T":"N",a=n.P>=n.A?"P":"A";let s=e+t+a;return"WNP"===s&&(s="WNA"),s})();location.href=`/result/${e}.html`})()};document.querySelector("#startBtn").addEventListener("click",(()=>{t.style.WebkitAnimation="fadeOut 1s",t.style.animation="fadeOut 1s",setTimeout((()=>{a.style.WebkitAnimation="fadeIn 1s",a.style.animation="fadeIn 1s",setTimeout((()=>{t.style.display="none",a.style.display="block"}),450),r(0)}),450)})),window.onload=()=>{}})();