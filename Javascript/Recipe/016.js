/**
 * 조건을 만족하는 다수의 데이터를 처리하고 싶을 때
 * switch (식)             => 식에 따라 처리를 분기
 *  case 값 : 처리 내용     => 해당 조건 만족 시 처리
 *  default : 처리 내영     => 만족하는 조건이 하나도 없는 경우의 처리
 */

const myFruit = 'apple';

switch (myFruit) {
    case 'apple' :
        alert('사과');
        break; // 처리를 종료하는 명령문 -> 생략하면 switch문을 종료하지 않고 다음 case로 넘어가 조건 일치 여부를 계속 확인함.
    case 'orange' :
        alert('오렌지');
        break;
    default :
        alert('기타 과일');
        break;
}

// 문자 타입의 '100'
const myValue = '100'

switch (myValue) {
	case 100 :
		// 숫자 타입일 경우 실행
		console.log('숫자 타입임');
		break;
	default :
		console.log('숫자 타입 아님')
		break;
}
