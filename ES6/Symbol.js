// 심볼 만드는 법 : Symbol('설명 아무거나')
var 심볼 = Symbol('설명');

// 심볼을 어디서 사용하는지?
// > Object 자료형의 비밀스런 key 값

var weight = Symbol('내 시크릿 몸무게'); // 이렇게 하면 반복문을 돌려도 보이지 않음

// 예제1. 키도 심볼로 저장해보자.
var height = Symbol('내 키');

var person = { name : 'kim' };
person.weight = 100; // 이렇게 쓰면 반복문 돌리거나 할때 다 보임

// 원래 Object의 key 값은 문자만 가능했는데 ES6부턴 심볼을 대신 넣을 수 있다.
person[weight] = 200; // 반복문에서 출력 안됨 (enumerable X)

// 예제1. 키 저장
person[height] = 160;

for (var key in person) {
  console.log(person[key]); // 출력해보면 심볼은 나오지 않음
}
