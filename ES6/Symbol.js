// 심볼 만드는 법 : Symbol('설명 아무거나')
var 심볼 = Symbol('설명');

// 심볼을 어디서 사용하는지?
// > Object 자료형의 비밀스런 key 값

var weight = Symbol('내 시크릿 몸무게'); // 이렇게 하면 반복문을 돌려도 보이지 않음

// 예제1. 키도 심볼로 저장해보자.
var height = Symbol('내 키');

// 심볼을 이렇게도 만들 수 있다. (직접 넣기)
var person = { name : 'kim', [height] : 160 };

person.weight = 100; // 이렇게 쓰면 반복문 돌리거나 할때 다 보임

// 원래 Object의 key 값은 문자만 가능했는데 ES6부턴 심볼을 대신 넣을 수 있다.
person[weight] = 200; // 반복문에서 출력 안됨 (enumerable X)

// 예제1. 키 저장
person[height] = 160;

for (var key in person) {
  console.log(person[key]); // 출력해보면 심볼은 나오지 않음
}

// Symbol의 특징 1. 설명이 같다고 같은 Symbol이 아님
// > Symbol이 만들어질 때마다 유니크한 심볼이 생성된다고 보면 됨.

var a = Symbol('설명1');
var b = Symbol('설명2');

console.log(a === b); // false가 출력됨

// Symbol의 특징 2. 전역변수 같은 전역 Symbol?
// > Symbol.for()로 만드는 전역심볼
// > 같은 설명을 가지고 있는 심볼이 위에 이미 있으면 기존 심볼을 복붙해줌.

var c = Symbol.for('설명1');
var d = Symbol.for('설명1');

console.log(c === d); // true가 출력됨

// Symbol 특징 3. 기본 내장 Symbol들

var 어레이 = [2, 3, 4];
어레이[Symbol.iterator]; // Symbol.iterator = array에 집어넣는 기본 Symbol
