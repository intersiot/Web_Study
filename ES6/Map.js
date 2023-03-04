// Map 자료형
// ?? : ?? 식으로 key, value를 저장하는 자료형 
// (중요!) 자료간의 연관성을 표현하기 위해 사용한다.

var person = new Map();
// var person = new Array(); // 어레이 만드는 법

person.set('name', 'kim'); // map에 저장하는 법
person.set('age', 20);

// Object 자료형은 자료 이름(key값)으로 글자만 가능하지만 Map 자료형은 다 가능하다.
person.set(100, 'kim');
person.set([1, 2, 3], 'kim');

person.get('age'); // map에서 자료 꺼내는 법
person.delete('age'); // 자료 삭제하는 법
person.size; // 자료 갯수 세는 법


// Map 자료를 한 번에 다 만들고 싶다면 (자료형에 직접 자료를 집어넣을 때)
var person = new Map([
  ['name', 'kim'],
  ['age', 20],
]);

// 반복문으로 Map에서 자료 꺼내는 법
for (var key of person.keys()) {
  console.log(key);
}
