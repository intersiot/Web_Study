const a = 10;
const b = 20;

console.log(a < b); // true
console.log(a > b); // false

// 주로 if문과 함께 조건에 따라 작업 처리를 구분할 때 사용함
const isIOs = navigator.userAgent.includes('iPhone');

if (isIOs) {
    // iOS용 처리 작업
}

// 안녕하세요. 아무개 알림창 표시
const userName = '아무개';
if (userName) {
    alert(`안녕하세요, ${userName} 씨.`);
}

// address가 ''이므로 알림창을 표시하지 않음
const address = '';
if (address) {
    alert(`당신은 ${address}에 살고 계시네요?`);
}

// 진릿값에 '!'을 붙이면 반대의 값을 가진다. (논리부정연산자)
const flg = 'Javascript'.includes('a');
console.log(!flg); // false

// 다른 타입 값에 붙이면 참 혹은 거짓으로 변환된다.
console.log(!'아무개'); // false
console.log(!24); // false
console.log(![1, 2, 3]); // false

// '!'를 두 번 사용하면 데이터의 타입이 boolean으로 변환된다.
console.log(!!'글자'); // true
console.log(!!24); // true
console.log(!![1, 2, 3]); // true
