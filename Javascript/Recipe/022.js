console.log(Math.round(6.24)); // 6
console.log(Math.floor(6.24)); // 6
console.log(Math.ceil(6.24)); // 7
console.log(Math.trunc(6.24)); // 6

console.log(Math.round(7.8)); // 8
console.log(Math.floor(7.8)); // 7
console.log(Math.ceil(7.8)); // 8
console.log(Math.trunc(7.8)); // 7

/**
 * Math.round()는 
 * 소수점이 0.5 이상이면 올림
 * 소수점이 0.5 미만이면 내림
 */
console.log(Math.round(-7.49)); // -7
console.log(Math.round(-7.5)); // -7
console.log(Math.round(-7.51)); // -8

/**
 * Math.floor()는
 * Math.floor(값): 값 이하 최대의 정숫값을 반환
 * Math.floor(값): 값 이상 최소의 정숫값을 반환
 */
console.log(Math.floor(-8.6));
console.log(Math.floor(-8.6));

/**
 * Math.trunc()는 음과 양에 상관없이 정수 부분만을 반환
 */
console.log(Math.trunc(8.6));
console.log(Math.trunc(-8.6))
