// ?. / ?? 연산자

//  여러 문자, 숫자를 한 변수에 저장하려면? -> object 자료형
var user = {
  name: 'kim',
  // age: 20
  // age: { value: 20 }
}
user.name; // kim
user.age; // 20

console.log(user?.age);
// ?. -> 왼쪽이 비어있으면 오른쪽 안해줌
// 옵셔널 체이닝이라고 부름
// ?. 왼쪽이 null, undefined면 점 안찍어주고 undefined를 남겨줌
// 즉 ? 왼쪽이 널이거나 언디파인드면 .age를 실행시켜주지 않음

// 언제쓸까?
// 중첩된 오브젝트 자료에서 자료를 뽑을 때 레퍼런스 에러없이 안전하게 뽑을 수 있다.
console.log(user.age?.value);
// 참고로 점이 두개이상 있을 때만 ?를 쓰는거임.
// 중첩된게 아닌데 쓰면 손해임
// 물음표 문법은 에러를 해결해주는 게 아닌 감추는 문법임

// ?? nullish coalescing 연산자 ??
console.log(undefined ?? '으잉');

var user2;
console.log(user2 ?? '로딩중'); // 왼쪽이 널이거나 언디파인드면 오른쪽 걸 보여준다.