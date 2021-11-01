(()=>{"use strict";const e=[{q:"운동을 시작하려는 당신,<br/> 러닝을 선택한 이유는?",a:[{answer:"a. 신발만 있어도 되는 최고의 가성비 운동",type:["N","A"]},{answer:"b. 퇴근하면 헬스장 문이 닫혀 있어서",type:["R","T"]},{answer:"c. 아직 다른 운동을 배운 경험이 없어서",type:["R","A"]},{answer:"d. 체력, 다이어트, 기분전환.<br/> 러닝은 효과 만점 운동! ",type:["R","P"]}]},{q:"러닝하러 가기 전,<br/>당신이 가장 신경쓰는 것은?",a:[{answer:"a. 오늘의 러닝을 책임져줄 러닝화 고르기",type:["R","P"]},{answer:"b. 러닝하면서 들을 음악과 이어폰 세팅하기",type:["W","A"]},{answer:"c. 패셔너블한 러닝 패션 아이템 고르기<br/>(옷, 코디, 악세사리 등)",type:["N","A"]}]},{q:"이제 러닝하러 간다.<br/>당신이 향한 러닝 장소는?",a:[{answer:"a. 한적하고 조용한 나만의 러닝 장소<br/>(사람 드문 곳)",type:["W","N"]},{answer:"b. 장소 고민하기 싫다.<br/>(집앞 가까운 곳 혹은 러닝머신)",type:["R","A"]},{answer:"c. 러닝하면서 주변 분위기를 즐길 수 있는 장소",type:["W","A"]},{answer:"d. 극한 러닝을 할 수 있는 장소<br/>(오르막, 긴 거리 러닝)",type:["R","T"]}]},{q:"러닝화 끈을 점검하고 있는 당신!<br/>오늘의 러닝 목표는?",a:[{answer:"a. 짧은 거리와 빠른 속도로 짧고 굵게!",type:["T","P"]},{answer:"b. 쉽게 쉽게 하자.<br/>짧은 거리와 천천히 러닝",type:["N","A"]},{answer:"c. 난 우리 동네 최고의 마라토너야<br/>(최대한 긴 거리와  빠른 속도)",type:["R","T"]},{answer:"d. 늘 하던데로 하자.<br/>어제 러닝한 그대로",type:["R","P"]}]},{q:"가쁜 호흡으로 러닝하고 있는 당신!<br/>지금 드는 생각은?",a:[{answer:"a. 이번 달엔 꼭 5kg 다이어트하자!",type:["T","P"]},{answer:"b. 기분 전환된다. 스트레스 훌~ 훌 ~ 풀린다.",type:["W","A"]},{answer:"c. 러닝 후 운동할 루틴 생각<br/>(푸쉬업 100회, 스쿼트 100회)",type:["T","P"]},{answer:"d. 나의 러닝 목표는 10km 완주!",type:["R","T"]}]},{q:"목표 지점까지 러닝을 마친 당신!<br/>생각은?",a:[{answer:"a.러닝 기록을 보며<br/>더 빨리 달리지 못한 아쉬운 생각",type:["R","T"]},{answer:"b. 휴~ 오늘도 러닝 완료! 너무 뿌듯하다.",type:["W","A"]},{answer:"c. 다음에 러닝할 목표를 생각한다.<br/>(10km 도전)",type:["T","P"]}]},{q:"당신의 최근 러닝 다이어리는 어떻게 채워져 있을까?",a:[{answer:"a. 최근 러닝 다이어리가 비어있다.",type:["N","P"]},{answer:"b. 빼곡한 러닝 다이어리",type:["T","P"]},{answer:"c. 무규칙으로 듬성듬성 채워져 있는 러닝 다이어리",type:["N","A"]}]},{q:"지인의 러닝 부상 경험을 들었다.<br/>당신의 반응은?",a:[{answer:"a. 러닝 부상 경험은 없지만<br/>러닝하다 부상 당할 수 있어?",type:["R","A"]},{answer:"b. 러닝 부상 경험은 없지만<br/>나도 부상 경험할까 두려워 진다.",type:["W","A"]},{answer:"c. 나도 경험해 봤지 러닝 부상은 정말 최악이야!",type:["W","P"]}]},{q:"마라톤 대회 신청자<br/>모집 광고를 보았다.",a:[{answer:"a. 무조건 참가해야지!",type:["R","T"]},{answer:"b. 난 선수가 아니니 나와 관계없어!",type:["W","N"]},{answer:"c. 아직은 준비가 안되어 다음 기회에 꼭!",type:["W","P"]}]}],t=document.querySelector("#main"),a=document.querySelector("#qna"),r=document.querySelector("#prepare"),n=document.querySelector("#running");document.querySelector("#rest");var s=new Object({R:0,T:0,P:0,W:0,N:0,A:0});const l=(t,a,r)=>{var n=document.querySelector(".answerBox"),l=document.createElement("div");l.classList.add("answerList"),l.classList.add("my-4"),l.classList.add("py-3"),l.classList.add("mx-auto"),l.classList.add("fadeIn"),n.appendChild(l),l.innerHTML=t,l.addEventListener("click",(()=>{var t=document.querySelectorAll(".answerList");for(let e=0;e<t.length;e++)t[e].disabled=!0,t[e].style.WebkitAnimation="fadeOut 0.5s",t[e].style.animation="fadeOut 0.5s";setTimeout((()=>{var n=e[a].a[r].type;for(let e=0;e<n.length;e++)s[n[e]]+=1;for(let e=0;e<t.length;e++)t[e].style.display="none";o(++a)}),450)}),!1)},o=t=>{if(9!==t){4===t&&r.classList.add("transparent"),6===t&&n.classList.add("transparent"),window.scrollTo(0,0),document.querySelector(".currentIdx").innerHTML=t+1,document.querySelector(".qBox").innerHTML=e[t].q;for(let a in e[t].a)l(e[t].a[a].answer,t,a);var o=document.querySelector(".progress-bar");o.style.width=100/9*(t+1)+"%",o.setAttribute("aria-valuenow",100/9*(t+1))}else(()=>{let e=(()=>{let e,t,a;e=s.R>=s.W?"R":"W",t=s.T>=s.N?"T":"N",a=s.P>=s.A?"P":"A";let r=e+t+a;return"WNA"===r&&(r="WNP"),r})();setTimeout((()=>{a.style.animation="fadeOut 1s",a.style.WebkitAnimation="fadeOut 1s",location.href=`/result/${e}.html`,setTimeout((()=>{a.style.display="none"}),450)}),450)})()};(()=>{const e=parseInt(100);let r=(new Date).getTime()/1e3,n=parseInt((r-1635745502)/2);document.querySelector(".totalUserArea").innerHTML=Number(e+n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),document.querySelector("#startBtn").addEventListener("click",(()=>{t.style.WebkitAnimation="fadeOut 1s",t.style.animation="fadeOut 1s",setTimeout((()=>{a.style.WebkitAnimation="fadeIn 1s",a.style.animation="fadeIn 1s",window.scrollTo(0,0),setTimeout((()=>{t.style.display="none",a.style.display="block"}),450),o(0)}),450)}))})(),window.onload=()=>{}})();