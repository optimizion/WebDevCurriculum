# Quest 02. CSS의 기초와 응용

## Introduction
* CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics
* CSS의 기초 문법과 적용 방법
  * Inline, `<style>`, `<link rel="stylesheet" href="...">`
* CSS 규칙의 우선순위
* 박스 모델과 레이아웃 요소
  * 박스 모델: `width`, `height`, `margin`, `padding`, `border`, `box-sizing`
  * `position`, `left`, `top`, `display`
  * CSS Flexbox와 Grid
* CSS 표준의 역사
* 브라우저별 Developer tools

## Resources
* [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
* [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist
* CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
  * 세 가지 방법 각각의 장단점은 무엇일까요?
    * Inline - 각 태그의 스타일 속성에 스타일 지정. - 우선순위가 높음. 동일한 스타일 중복 생김
    * `<style>` - 선택자를 이용해 html 내부에 스타일 지정 - 선택자를 이용한 중복 제거, html 파싱을 블로킹함.
    * `<link rel="stylesheet" href="...">` - html 외부로 스타일시트 지정 - 재사용 가능. html 파싱을 블로킹하지 않음.
* CSS 규칙의 우선순위는 어떻게 결정될까요? - !important, 인라인 스타일, id, class, tag ...
  * CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요? - width, height, padding, border, margin을 이용. `content-box`는 width와 height로 컨텐츠 자체의 크기를 지정하고, 추가로 padding, border, margin이 더해지는 반면, `border-box`는 width와 height로 컨텐츠와 padding, border를 합쳐 크기를 지정하고, 추가로 margin이 더해짐.
* `float` 속성은 왜 좋지 않을까요? - float 속성을 준 요소 외에 다른 요소에 영향을 준다. 이 영향을 없애기 위해 추가적인 방법이 필요하다.
* Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요? - flexbox는 1차원 레이아웃을 지원함. (horizontal or vertical), grid는 2차원 레이아웃을 지원함. (row, column)
* CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요? - 클래스를 사용한 스타일링.

## Quest
* Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](screen.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
* **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**

## Advanced
* 왜 CSS는 어려울까요? - 규칙의 다양성, cascading 성질, 브라우저별 호환성 등 ...
* CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요? - css 전처리기  등을 활용한 기술을 사용.
* CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요? - 파싱해서 CSSOM을 만들고, DOM과 함께 렌더 트리를 생성하고, 각 추상화된 속성값을 실제 px로 변경하고, 렌더링한다.
* 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요? - IE와 그외 브라우저로 나뉨. 웹 요청을 하고 난 후 응답이 오기 전 어떻게 표시할 것인지가 다름. (Flash Of Invisible Text vs Flash Of Unstyled Text)
