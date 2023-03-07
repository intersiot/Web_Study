// 캔버스에 그림을 그리고 싶다면
// 아래의 네 줄 코드가 기본 (그림 그리기에 필요한 최소한의 코드임)
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 네모를 그리고 싶다
// ctx.fillStyle = 'green'; // 초록색 네모를 그려주세요
// ctx.fillRect(10, 10, 100, 100); // 왼쪽 위에서부터 10, 10이라는 좌표에 100x100 사이즈의 네모를 그려주세요
// 그런데 이렇게 직접적으로 그리진 않음
// 등장 캐릭터의 속성부터 오브젝트 자료에 정리해두면 편리함
var dino = {
  // 공룡의 좌표
  x: 10,
  y: 200,
  // 공룡의 사이즈
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
// dino.draw();

// 장애물도 역시 송성부터 오브젝트 자료에 정리해두면 편리
// 근데 장애물들은 각각 다른 속성을 가지고 있을 수 있음 -> 비슷한 오브젝트가 많이 필요
// 그래서 클래스로 만드는 게 일반적임
class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
// 오브젝트를 하나 뽑고 싶다? -> 장애물 하나를 뽑고싶다면
// var cactus = new Cactus();
// 장애물을 그려주자
// cactus.draw();

// 애니메이션을 만들려면?
// 1초에 60번 정도 x++을 해줘야 함
// dino.x + 100; // 이건 애니메이션이 아님
// dino.x++; // 이런식으로 해야 함

var timer = 0;
var catus여러개 = [];

function 프레임마다실행하기() {
  // 1초에 60번 코드 실행하기
  requestAnimationFrame(프레임마다실행하기);
  timer++;
  // 잔상을 없애는 법
  // 지우고 > 그리고 > 지우고
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 120 === 0) { // 120 프레임마다 장애물을 그려줌
    // 장애물도 생성하기
    var cactus = new Cactus();
    catus여러개.push(cactus); // 120 프레임마다 장애물이 생성되면 어레이에 보관됨
    // 장애물을 여러개 관리하려면?
    // 장애물 만들 때마다 어레이에 담아서 보관하자
  }

  // 어레이에 있던 거 다 그려주세요.
  catus여러개.forEach((a) => {
    a.x--;
    a.draw();
  });

  dino.draw();
}
프레임마다실행하기();