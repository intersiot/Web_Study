/**
 * 정해지지 않은 파라미터의 개수를 가지는 함수는 '...'을 이용하여 '...파라미터'와 같은 방식으로 정의
 * 입력받은 파라미터는 인덱스를 이용하여 파라미터[0], 파라미터[1]의 방식으로 사용하며,
 * 이와 같은 정의 방식을 '나머지 파라미터'라고 함.
 */

/**
 * 파라미터의 합계를 반환하는 함수
 * @param prices
 * @returns {number}
 */
function calcSum(...prices) {
    let result = 0;
    for (const value of prices) {
        result += value;
    }
    return result;
}

const result1 = calcSum(10, 20);
console.log(result1); // 결과: 30

const result2 = calcSum(5, 10, 15);
console.log(result2); // 결과: 30
