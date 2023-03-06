// 'use strict'; // 자바스크립트 strict mode -> 자바스크립트를 엄격하게 쓰겠다.



// this 키워드 (1)
// this 키워드는 뜻이 3~4개가 된다.
// 1. 그냥 쓰거나 일반 함수 안에서 쓰면 { window } -> 기본 함수들 수납공간
// -> 함수나 변수를 전역공간에 만들면 -> { window }에 보관한다.
// 2. 오브젝트 내 함수 안에서 쓰면 그 함수를 가지고 있는 오브젝트를 뜻함

console.log(this); // window

function 함수() {
  console.log(this); // window
  // strict mode에서는 undefined라고 나옴 -> this의 두번째 뜻 -> 그냥 첫번째로 퉁치자.
}
함수();
window.함수(); // 이렇게 해도 된다.

var 오브젝트 = {
  // data : 'kim',
  data : {
    // 함수 : function() {
    //  console.log(this); // 이 this를 출력하면 뭐가 나올까? -> 오브젝트.data
    // },
    함수 : () => { // 신문법 Arrow Function 특징 : this 값을 함수 밖에 있던거 그대로 씀
      console.log(this);
    },
    함수3() { // 오브젝트 안에 함수 넣을 때 신문법임. 꼭 : 안써도 됨.
      console.log(this);
    }
  },
  함수2 : function() { // 함수는 이렇게 넣는다.
    console.log(this);
  }
}

오브젝트.data; // kim
오브젝트.함수2(); // 메소드(오브젝트 내 함수)를 가지고 있는 오브젝트를 뜻함 -> 나를 포함하고 있는 오브젝트
