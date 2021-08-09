# ☕️ Starbucks web clone
</br>

<img src="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white" /> <img src="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" />
</br>
</br>

## 완성본
 ### 📎 [Starbucks Clone Web](https://lm-channel-team-project.github.io/starbucks-web-clone-team12/)
 </br>

<img width="1434" alt="スクリーンショット 2021-07-31 22 23 57" src="https://user-images.githubusercontent.com/77221488/127741321-49e2bc24-0ea4-41fd-8d34-2a110ce119ca.png">
</br>
</br>
</br>

## 프로젝트 소개
HTML, CSS, JS를 사용해서 메인 페이지, manu bar, FOOD, DRINK, GIFT, CARD를 클론했습니다.

<img width="702" alt="スクリーンショット 2021-07-31 22 29 48" src="https://user-images.githubusercontent.com/77221488/127741467-4a59c49b-d7f9-4813-9a8b-6a55be43f39b.png">
</br>
</br>
</br>

## ⭐️개발자 코멘트⭐️
</br>

- 이름: 임홍규
- 깃허브: https://github.com/lhk3337
- 맡은 페이지: 메인페이지, FOOD, DRINK
</br>
</br>

## ❓ 어떻게 구현 했는지?
​
- ### 메인페이지
  - window.scrollY 이용하여 스크롤을 움직이면 수치를 이용
  - 그 섹션에 수치만큼 왔을때 애니메이션 효과를 낼 수 있는 css class를 만들어 적용하였다.
- ### drink & food 페이지
  - 드링크와 푸드의 리스트 데이터 형식을 json(Object & array 구조)으로 만들고,
  - AJAX fetch를 이용하여 json 데이터를 받아옴
  - checkbox value와 json의 value가 같으면 리스트 출력하기 위해 배열의 메서드와 객체의 메서드를 이용하여 처리
</br>

​
## ❓ 구현하는 과정에서 어려웠던 점
​
- ### 메인페이지
  스타벅스 메인페이지를 살펴보면 스크롤 아래로 움직일때 애니메이션 효과가 나타나는데, 이것을 어떻게 구현해야 할지 처음에 막막하였다.
- ### drink & food 페이지
  drink와 food 페이지에서 체크박스를 클릭하면 그 항목에 맞은 결과값을 나타내야하는데, 데이터가 object와 array라서 이것을 조건에 맞게 어떻게 출력을 해야 할지 고민이 많았고, 이부분이 클론 코딩하면서 제일 어려웠다.
</br>

​
## ❓ 이번 프로젝트를 통해 새로 배운 점
​
- ### 메인페이지
​
  - CSS <br />
    keyframes
​
  - JS <br />
    scroll eventlistener, windows.scrollY

- ### drink & food 페이지
  - CSS <br />
    display의 grid <br />
  
  - JS <br />
    Array와 Object 구조 및 두 자료형을 처리하기 위한 메서드 <br />
    AJAX fetch <br />
    event.target <br />
    구조분해할당
</br>

​
## ❓ 내가 구현한 것 중에서 가장 잘했다고 생각하는 점(어필 포인트)
</br>

​
처음에 체크박스를 클릭하면 리스트를 나타내기 위해 html과 css로만 만들려고 했지만, 자바스크립트도 같이 배우고 있었기 때문에
배운것을 토대로 프로젝트에 적용해 보았고, 모르는 부분은 팀원들과 커뮤니케이션을 하거나 구글링을 통하여 이러한 문제를 해결하였다.
</br>
</br>
</br>

---
</br>

- 이름: 카에
- 깃허브: https://github.com/kaehehehe
- 맡은 페이지: menu bar, GIFT
</br>
</br>

### ❓구현하는 과정에서 어려웠던 점

스타벅스 홈페이지에서 사용되는 checkbox와 최대한 비슷하게 구현하기 위해 브라우저에서 제공하는 checkbox를 쓰지 않고 div태그로 박스를 만들어서 css에서 가상 클래스 :focus를 써서 클릭했을 때 체크 마크가 나오게끔 구현했다.

<img width="1055" alt="スクリーンショット 2021-08-09 13 08 47" src="https://user-images.githubusercontent.com/77221488/128659700-67a8d749-b483-4c0a-b04c-d793aaca12ab.png">


### ❓이번 프로젝트를 통해 새로 배운 점

이번 프로젝트를 통해 DOM을 조작하는 법, 그리고 CSS에 대한 이해도가 깊어졌다.

굳이 JavaScript를 쓰지 않아도 CSS만 써서 구현할 수 있는 것들이 생각보다 많다는 것을 알았다.

### ❓내가 구현한 것 중에서 가장 잘했다고 생각하는 점(어필 포인트)

반응형까지 고려해서 구현한 점.



</br>
</br>
</br>

---
</br>

- 이름: 김혜린
- 깃허브: https://github.com/Kim-Hyerin
- 맡은 페이지: CARD
