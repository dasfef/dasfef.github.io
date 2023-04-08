---
layout: page
permalink: /portfolio
permalink_name: PORTFOLIO
title:  "PORTFOLIO"
---

<!-- **링크 클릭시 ppt파일로 다운로드 받습니다 :)** -->
<!-- **리뉴얼 중** -->

---

<div class="flow-container">
    <div class="flow-text">
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
        <div class="flow-wrap">리뉴얼 중</div>
    </div>
</div>

<style>
    .flow-text {
        display: flex;
        flex: 0 0 auto;
        white-space: nowrap;
        overflow: hidden;
        transition: .3s;
        font-weight: bold;
    }

    .flow-wrap:hover {
        color: red;
    }

    .flow-text:hover .flow-wrap {
        animation-play-state: paused;
        cursor: pointer;
    }

    .flow-wrap {
        animation: textLoop 2s linear infinite;
        padding-right: 2vw;
        color: yellow;
        /* background-color: yellow; */
    }

    @keyframes textLoop {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }
</style>

---
<!-- <a class="post_link" href="assets/Weather_Project.pptx">1. 날씨 조회 프로젝트</a>

<a class="post_link" href="assets/Ddareung_Project.pptx">2. 따릉이 사용량 예측 프로젝트</a> -->

