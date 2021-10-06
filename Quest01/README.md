# Quest 01. HTML과 웹의 기초

## Introduction

- HTML은 HyperText Markup Language의 약자로, 웹 브라우저에 내용을 표시하기 위한 가장 기본적인 언어입니다. 이번 퀘스트를 통해 HTML에 관한 기초적인 사항들을 알아볼 예정입니다.

## Topics

- HTML의 역사
  - HTML 4.01, XHTML 1.0, XHTML 1.1
  - XHTML 2.0과 HTML5의 대립
  - HTML5와 현재
- 브라우저의 역사
  - Mosaic와 Netscape
  - Internet Explorer의 독점시대
  - Firefox와 Chrome의 등장
  - iOS Safari와 모바일 환경의 브라우저
  - Edge와 Whale 등의 최근의 Chromium 계열 브라우저
- HTML 문서의 구조
  - `<html>`, `<head>`와 `<body>` 등의 HTML 문서의 기본 구조
  - 시맨틱 엘리먼트
  - 블록 엘리먼트와 인라인 엘리먼트의 차이

## Resources

- [MDN - HTML](https://developer.mozilla.org/ko/docs/Web/HTML)
- [HTML For Beginners](https://html.com/)
- [History of the web browser](https://en.wikipedia.org/wiki/History_of_the_web_browser)
- [History of HTML](https://en.wikipedia.org/wiki/HTML)
- [StatCounter](https://gs.statcounter.com/)

## Checklist

- HTML 표준의 역사는 어떻게 될까요?
  - HTML 표준을 지키는 것은 왜 중요할까요? - 표준이 없으면 여러 클라이언트가 동일한 컨텐츠를 보여줄 수 없기 때문
  - XHTML 2.0은 왜 세상에 나오지 못하게 되었을까요? - 2.0이 제정되기 전 HTML5의 표준이 만들면서 HTML4, XHTML1의 표준을 포함했기 때문.
  - HTML5 표준은 어떤 과정을 통해 정해질까요? -
- 브라우저의 역사는 어떻게 될까요?
  - Internet Explorer가 브라우저 시장을 독점하면서 어떤 문제가 일어났고, 이 문제는 어떻게 해결되었을까요?
  - 현재 시점에 브라우저별 점유율은 어떻게 될까요? 이 브라우저별 점유율을 알아보는 것은 왜 중요할까요? - 크롬 60% 이상, 사파리 약 18%, 그 외 브라우저 4% 미만 ...
  - 브라우저 엔진(렌더링 엔진)이란 무엇일까요? 어떤 브라우저들이 어떤 엔진을 쓸까요? - 각 브라우저마다 화면을 그리는 엔진(레이아웃 엔진, 렌더링 엔진)을 갖고 있음.
    - 크롬, 오페라, 마이크로소프트 엣지 - [Blink](<https://en.wikipedia.org/wiki/%EB%B8%94%EB%A7%81%ED%81%AC_(%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EC%97%94%EC%A7%84)>)
    - 파이어폭스 - [Gecko](<https://en.wikipedia.org/wiki/%EA%B2%8C%EC%BD%94_(%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EC%97%94%EC%A7%84)>)
    - 사파리 - [Webkit](https://en.wikipedia.org/wiki/%EC%9B%B9%ED%82%A4%ED%8A%B8)
  - 모바일 시대 이후, 최근에 출시된 브라우저들은 어떤 특징을 가지고 있을까요?
- HTML 문서는 어떤 구조로 이루어져 있나요?
  - `<head>`에 자주 들어가는 엘리먼트들은 어떤 것이 있고, 어떤 역할을 할까요? - 다른 리소스 요청, 스타일 작성, 아이콘 정의, 메타 정보 정의
  - 시맨틱 태그는 무엇일까요?
    - 시맨틱 엘리먼트를 사용하면 어떤 점이 좋을까요? - 검색 엔진이 페이지의 구조를 이해하고 분석할 수 있음.
    - `<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요? - `section`, `header`, `footer`, `article`는 시맨틱 태그임. 각 태그는 페이지의 특정 부분을 나타내는 의미를 갖고 있음.
  - 블록 레벨 엘리먼트와 인라인 엘리먼트는 어떤 차이가 있을까요?
    - 블록 레벨 엘리먼트 - 부모의 `width`를 모두 채움. 따라서 위에서 아래로 쌓이는 형태가 됨.
    - 인라인 엘리먼트 - 자신의 컨텐츠 영역만큼 `width`를 가짐. 따라서 부모의 `width`내에서 좌에서 우로 펼쳐지는 형태가 됨.

## Quest

- [이 화면](screen.png)의 정보를 HTML 문서로 표현해 보세요. 다만 CSS를 전혀 사용하지 않고, 문서의 구조가 어떻게 되어 있는지를 파악하여 구현해 보세요.
  - [CSS Naked Day](https://css-naked-day.github.io/)는 매년 4월 9일에 CSS 없는 웹 페이지를 공개하여 내용과 마크업에 집중한 HTML 구조의 중요성을 강조하는 행사입니다.
- 폴더에 있는 `skeleton.html` 파일을 바탕으로 작업해 보시면 됩니다.
  - 화면을 구성하는 큰 요소들을 어떻게 처리하면 좋을까요?
  - HTML 문서상에서 같은 층위에 비슷한 요소들이 반복될 때는 어떤 식으로 처리하는 것이 좋을까요?

## Advanced

- XML은 어떤 표준일까요? 어떤 식으로 발전해 왔을까요?
- YML, Markdown 등 다른 마크업 언어들은 어떤 특징을 가지고 있고, 어떤 용도로 쓰일까요?
