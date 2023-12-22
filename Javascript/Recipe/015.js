/**
 * 15. 조건문 사용하기 if
 * : 조건을 만족하는 데이터를 처리하고 싶을 때
 * 
 * 자바스크립트는 'if/else'를 사용하여 조건에 따른 처리가 가능함.
 */

const myPrice = 100
if (myPrice >= 50) {
    alert('myPrice는 50 이상임')
} else if (myPrice >= 10) {
    alert('myPrice는 10 이상임')
} else {
    alert('myPrice는 10 미만임')
}


/**
 * else if와 else는 필요에 따라 구문의 생략도 가능함.
 * 블록 내의 처리 내용이 한 줄이라면 {}의 생략이 가능하지만, 한 줄 이상이라면 생략이 불가능.
 * 생략하면 코드가 짧아지지만 가독성이 떨어질 수 있으므로 주의.
 */
if (true) alert('hello');

const randomNum = Math.random() * 10
if (randomNum >= 5) {
    alert(randomNum + '은 5 이상임')
} else {
    alert(randomNum + '은 5 미만임')
}
