---
layout: page
permalink: /about
permalink_name: ABOUT
title: ABOUT
---


<script>
    // const root = document.documentElement;

    // document.addEventListener("DOMContentLoaded", function(){
    //     root.style.setProperty('--main-color', 'white');
    //     root.style.setProperty('--bg-color', 'black');
    // })

    function clickAlert() {
        var email = document.getElementById('e-mail');
        var context = email.textContent;
        navigator.clipboard.writeText(context).then(function() {
            alert("E-mail 주소가 복사되었습니다.");
        }).catch(function(error) {
            console.error("복사에 실패했습니다.", error);
        });
    }

    // function darkMode(){
    //     // let root = document.documentElement;
    //     let btn = document.getElementById("dkBtn");

    //     console.log(root);
    //     if(root.style.getPropertyValue('--main-color') === 'white'){
    //         console.log("if --main-color is white");
    //         root.style.setProperty('--main-color', 'black');
    //         root.style.setProperty('--bg-color', 'white');
    //     } else{
    //         console.log("if --main-color is black");
    //         root.style.setProperty('--main-color', 'white');
    //         root.style.setProperty('--bg-color', 'black');
    //     }

    //     if(btn.innerText === "Night Mode"){
    //         btn.innerText = "Day Mode";
    //     } else{
    //         btn.innerText = "Night Mode";
    //     }

        // let newLink = document.createElement("link");
        // newLink.setAttribute("rel", "stylesheet");
        // newLink.setAttribute("href", "/assets/css/dark-mode.scss");

        // document.head.appendChild(newLink);

        // let oldLink = document.querySelectorAll("link")[0];
        // if(oldLink){
        //     oldLink.parentNode.removeChild(oldLink);
        // }
    // }
</script>

<style>
    .box{
        width: 150px;
        height: 150px;
        border-radius: 30%;
        overflow: hidden;
        float: left;
        margin-right: 20px;
        display: block;
    }
    .profile{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .top {
        width: 100%;
        height: 150px;
    }
    .middle{
        width: 100%;
        height: 300px;
        /* background-color: white; */
        margin-top: 30px;
        text-align: center;
    }
    .stack{
        text-align: center;
    }
</style>


<div class="top">
    <div class="box" style="background: #BDBDBD;">
        <img class="profile" src="assets/profile_pic.jpeg">
    </div>
    <div class="profile">
        <span>就業亂中日記<br>
        최연웅(Choi Yeon Woong)</span><br>
        <!-- <a href="https://www.instagram.com/das_fef" target="_blank" style="margin-left:8px;"><img src="https://img.shields.io/badge/Instagram-E4405F?style=plastic&logo=Instagram&logoColor=white" style="width:100px;"></a>  <a href="https://www.instagram.com/das_fef" target="blank">das_fef</a><br> <img src="https://img.shields.io/badge/Gmail.com-EA4335?style=plastic&logo=Gmail&logoColor=white" style="width:100px;">  <a>mealhouse3377@gmail.com</a> -->
        <a href="https://www.instagram.com/das_fef" target="_blank" style=""><img src="https://img.shields.io/badge/-E4405F?style=plastic&logo=Instagram&logoColor=white" style="width:30px;"></a><a href="https://www.instagram.com/das_fef" target="blank"> @das_fef</a><br>
        <img src="https://img.shields.io/badge/-EA4335?style=plastic&logo=Gmail&logoColor=white" style="width:30px;"><a id="e-mail" onclick="clickAlert();"> mealhouse3377@gmail.com</a>
    </div>
</div>
<br>
<span class="mini-title">Introduce</span>

IT분야의 모든것에 관심이 많은 사람입니다.
특히 백엔드와 서버 엔지니어링에 관심이 많아 취미로 사설 클라우드 서버 구축, Docker, VMware 등 
가상화 서버 구축에 대한 지식 탐구 및 경험을 쌓고 있습니다.
현재는 뷰티산업 제조 공정의 ERP 운영, Infra 운영 관리, PHP 기반 사내 Help Desk 개발,
정부 사업 프로젝트 진행 등의 업무를 맡고 있습니다.

<p style="text-align: right; line-height:20px;">Latest Update
<span style="background-color:grey; color:white; border-radius:3px;"> 2024.07.09 </span></p>

<br>
<br>

<span class="mini-title">Skills</span>

<div class="stack" style="text-align: left;">
    <img src="https://img.shields.io/badge/Python-3776AB?style=plastic&logo=Python&logoColor=white"> <img src="https://img.shields.io/badge/Java-007396?style=plastic&logo=OpenJDK&logoColor=white"> <br>
    ★★ (취미 수준 : CSV 파일 내 대량 데이터 추출 후 데이터베이스 삽입, 업무자동화 등)<br><br>
    <img src="https://img.shields.io/badge/C-A8B9CC?style=plastic&logo=C&logoColor=white"> <img src="https://img.shields.io/badge/Django-092E20?style=plastic&logo=Django&logoColor=white"> <img src="https://img.shields.io/badge/Tensorflow-FF6F00?style=plastic&logo=TensorFlow&logoColor=white"> <img src="https://img.shields.io/badge/R-276DC3?style=plastic&logo=R&logoColor=white"><br> 
    ★ (미달 수준 : 교육을 통해 학습한 수준)<br><br>
    <img src="https://img.shields.io/badge/MSSQL-003B57?style=plastic&logo=MSSQL&logoColor=white"> <img src="https://img.shields.io/badge/MySql-4479A1?style=plastic&logo=MySql&logoColor=white"> <img src="https://img.shields.io/badge/MariaDB-003545?style=plastic&logo=MariaDB&logoColor=white"> <img src="https://img.shields.io/badge/Oracle-F80000?style=plastic&logo=Oracle&logoColor=white"> <img src="https://img.shields.io/badge/SQLite-003B57?style=plastic&logo=SQLite&logoColor=white"><br>
    ★★★★ (실무 응용 수준 : Migration, Interface 구성, ERP Procedure 설정 등)<br><br>

    <span class="mini-sub">이외</span><br>
    PHP, Docker, Shell Script, Node.js ・・・
</div>

<br>
<br>


<span class="mini-title">Career</span>

<div>
    <span class="date_2">ﾠ2023.10 -ﾠﾠ</span><br>
    <span style="font-size:20px;">(주)코스메카코리아</span> <span style="color: grey;">IT/사원</span><br>
    <span>- 인프라 운영 관리</span><br>
    <span>- 영림원 ERP K-System 운영 관리</span><br>
    <span>- Web Application PLM 구축, Migration 및 Interface 구성</span><br>
    <span>- CentOS Server PHP 기반 Help Desk 개발 내재화</span><br>
    <span>- MySQL/MSSQL 데이터베이스 유지보수 및 관리</span><br>
    
</div>
<br>
<div>
    <span class="date_2">ﾠ2022.03 - 2022.06ﾠ</span><br>
    <span style="font-size: 20px;">서울포장(주)</span>  <span style="color: grey;">인사총무/사원</span><br>
    <span>- 전사 급여 관리</span><br>
    <span>- 인사 업무 총괄</span><br>
    <span>- 시설 운영 및 관리, 전사 총무 관련 업무</span>    
</div>
<br>
<div>
    <span class="date_2">ﾠ2018.10 - 2021.02ﾠ</span><br>
    <span style="font-size: 20px;">(주)하룹</span>  <span style="color: grey;">온라인마케팅/과장</span><br>
    <span>- 팀별 온라인 마케팅 기획 및 총괄</span><br>
    <span>- 기타 회사 법무 사항 처리</span><br>
    <span>- 인사 • 총무 업무 전반 관리</span>
</div>
<br>
<br>

<span class="mini-title">Projects</span>
<div>
    <span class="about-title"> 1. PHP 기반 Help Desk 개발 내재화</span><br>
    <p class="about-date"><span class="latest-date"> 2023.12 -ﾠ</span></p><br>
    <span class="about-mini-title">◎ ERP 사용자 Interface 연동 구성(MSSQL → MySQL)</span><br>
    <span>ﾠﾠ: 최초 Help Desk 서버인 CentOS 에서 Shell script 및 ODBC를 활용하여 MSSQL View를 조회 하려 시도</span><br>
    <span>ﾠﾠ: CentOS 서버의 MSSQL 라이센스 현황 정보가 정확하지 않아 ERP DB(MSSQL) 측에서 OpenQuery 활용으로 방법 전환</span><br>
    <span class="about-mini-title">◎ CMS 게시판 운영 및 유지보수</span><br>
    <span class="about-mini-title">◎ 연결 법인별 게시판 페이지 별도 구성</span><br>
    <span class="about-mini-title">◎ 게시글 통계 페이지 별도 구성</span><br>
    <span>ﾠﾠ: 기존 운영중이던 Help Desk 분석 및 자체 운영 통계 페이지 구성</span><br>
    <span class="about-mini-title">◎ SMS Server 활용 생일자 문자 알람 서비스 스크립트</span><br>
    <span>ﾠﾠ: <a href="https://github.com/dasfef/SMS_Send_Service.git" target="_blank">https://github.com/dasfef/SMS_Send_Service.git</a></span><br>
    <p class="about-skills-p"><span class="about-skills">ﾠSkillﾠ</span>
    <span class="about-skills-detail">PHP</span><span class="about-skills-detail">CentOS</span><span class="about-skills-detail">MySQL</span><span class="about-skills-detail">MSSQL</span></p>
</div>
<br>

<div>
    <span class="about-title"> 2. PLM 구축 및 Migration, Interface 구성</span><br>
    <p class="about-date"><span class="latest-date"> 2023.11 - 2024.07ﾠ</span></p><br>
    <span class="about-mini-title">◎ ERP 내 연구소 모듈 분리</span><br>
    <span class="about-mini-title">◎ Web 기반 Application 구축 PI 역할</span><br>
    <span>ﾠﾠ: 고객사 샘플의뢰 > 연구 > 단가 책정 > 제조 프로세스 이해 및 로직 구성 참여</span><br>
    <span class="about-mini-title">◎ ERP Data Migration 및 Interface 구성</span><br>
    <span>ﾠﾠ: 연구소 연구노트 관련 데이터 Migration 참여</span><br>
    <span>ﾠﾠ: 영업부서 샘플 의뢰 ~ 연구소 샘플 발송 프로세스 Interface 구성 및 참여</span><br>
    <p class="about-skills-p"><span class="about-skills">ﾠSkillﾠ</span>
    <span class="about-skills-detail">MSSQL</span><span class="about-skills-detail">Shell</span><span class="about-skills-detail">Java</span></p>
</div>
<br>
<div>
    <span class="about-title">ﾠ3. 영림원 ERP K-system 운영 및 유지보수</span><br>
    <p class="about-date"><span class="latest-date">ﾠ2023.11 -ﾠ</span></p><br>
    <span class="about-mini-title">◎ ERP 내 로직 및 트랜잭션 유지보수</span><br>
    <span class="about-mini-title">◎ C# 기반 MES 프로그램 공정 프로세스 데이터 연동 유지보수</span><br>
    <span class="about-mini-title">◎ System 개발/수정 관련 현업 업무 프로세스 조정</span><br>
    <p class="about-skills-p"><span class="about-skills">ﾠSkillﾠ</span>
    <span class="about-skills-detail">MSSQL</span></p>
</div>
<div>
    <span class="about-title"> 4. D-Bugging 곤충 객체 인식 및 사육 환경 조정 모듈</span><br>
    <p class="about-date"><span class="latest-date"> 2023.06 - 2023.07 </span></p><br>
    <span class="about-mini-title">◎ ESP32 웹소켓 서버 구성</span><br>
    <span> : ESP32 내에서 촬영하는 이미지 데이터 프레임 별 전송 목적</span><br>
    <span class="about-mini-title">◎ Node.js 웹소켓 서버 구성</span><br>
    <span> : 촬영 이미지 딥러닝 모델 적용 및 좌표 생성 목적</span><br>
    <span> : 접속하는 클라이언트 개수 제한, 서버 접속 시 통신 목적</span><br>
    <span class="about-mini-title">◎ 딥러닝 모델 학습 및 적용</span><br>
    <span> : 최초 가장 최신 학습 모델인 YOLOv8 적용 후 웹 페이지 표현 목적</span><br>
    <span> : WebGL 과부하로 인한 YOLOv8 적용 실패</span><br>
    <span> : Roboflow 3.0 객체 인식 모델 학습 및 적용</span><br>
    <p class="about-skills-p"><span class="about-skills"> Skill </span>
    <span class="about-skills-detail">Node.js</span><span class="about-skills-detail">Javascript</span><span class="about-skills-detail">Python</span><span class="about-skills-detail">Tensorflow</span><span class="about-skills-detail"> C </span><span class="about-skills-detail">PHP</span><span class="about-skills-detail">MySQL</span>
<div>


<br>
<br>

<span class="mini-title">Presentations</span>
<div>
    <span class="about-title"> <a href="assets/D-Bugging.pdf" target="_blank">1) 딥러닝 모델 활용 곤충 객체인식</a></span><br>
    <span class="about-mini-title">◎ 충북대학교 IoT기반 스마트솔루션 개발자 양성과정 최종 프로젝트</span><br>
    <span class="about-mini-title">◎ 프로젝트 참여 : 총 3명 / 기간 : 2023.06-07 약 1개월</span><br>
    <span class="about-mini-title">◎ C#, Android, Node.js, yolo 등 활용</span><br>
    <span class="about-mini-title">◎ 기여 : Node.js 웹소켓 서버 구성, yolov8 활용 딥러닝 모델 학습</span><br>
    <span class="about-mini-title">◎ 기여 : ESP32 캠 모듈 이진데이터 내 모델 적용 및 객체 인식 좌표 구성</span><br>
    <span class="about-mini-title">◎ github :</span><a href="https://github.com/dasfef/PJ_D-Bugging" target="_blank"> https://github.com/dasfef/PJ_D-Bugging</a><br>
    <p class="about-skills-p"><span class="latest-date"> 2023.07.06 </span></p>
<div>
    <span class="about-title"> <a href="assets/클라우드 서비스와 가상화 플랫폼.pdf" target="_blank">2) 클라우드 서비스와 가상화 플랫폼</a></span><br>
    <span class="about-mini-title">◎ 당사 클라우드 서비스 도입을 위한 개념 및 가상화 플랫폼 소개</span><br>
    <span class="about-mini-title">◎ Docker 설명, 당사 운영 서비스 내 Docker 이용 솔루션 소개</span><br>
    <span class="about-mini-title">◎ k8s 설명, Docker 연계 서비스 활용 소개</span><br>
    <span class="about-mini-title">◎ 당사 IDC 운영 히스토리 및 클라우드 서비스와의 차이점 소개</span><br>
    <p class="about-skills-p"><span class="latest-date">ﾠ2023.12.06ﾠ</span></p>
</div>    
