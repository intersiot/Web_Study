// 캔버스에 그림을 그리고 싶다면
// 아래의 네 줄 코드가 기본 (그림 그리기에 필요한 최소한의 코드임)
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 네모대신 이미지 넣기
var img1 = new Image();
img1.src = 'cactus.png';
var img2 = new Image();
img2.src = 'dinosaur.png';
// 네모는 일명 히트박스
// 게임 개발할때는 네모 그려놓고 하는 게 일반적임

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
    // ctx.fillStyle = 'green';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img2, this.x, this.y, this.width, this.height);
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
    // ctx.fillStyle = 'red';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1, this.x, this.y, this.width, this.height);
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
var 점프timer = 0;
var animation;

function 프레임마다실행하기() {
  // 1초에 60번 코드 실행하기
  // requestAnimationFrame()는 자바스크립트, 웹브라우저 기본 기능임
  animation = requestAnimationFrame(프레임마다실행하기);
  timer++;
  // 잔상을 없애는 법
  // 지우고 > 그리고 > 지우고
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 200 === 0) { // 120 프레임마다 장애물을 그려줌
    // 장애물도 생성하기
    var cactus = new Cactus();
    catus여러개.push(cactus); // 120 프레임마다 장애물이 생성되면 어레이에 보관됨
    // 장애물을 여러개 관리하려면?
    // 장애물 만들 때마다 어레이에 담아서 보관하자
  }

  // 어레이에 있던 거 다 그려주세요.
  catus여러개.forEach((a, i, o) => {
    // 필요 없어진 장애물은 제거하자
    // x좌표가 0미만이면 제거하자
    if (a.x < 0) {
      // 제거해라
      o.splice(i, 1);
    }
    a.x--; // 1초에 60번정도 x좌료를 1씩 빼라

    충돌하냐(dino, a); // 충돌체크는 여기서 해야 함
    // 왜냐면 주인공 vs 모든 장애물의 충돌 체크를 해줘야 하기 때문에

    a.draw();
  });

  // 점프기능
  // 스페이스바를 누르면 점프하도록
  if (점프중 == true) {
    dino.y--; // 근데 이렇게 하면 무한히 점프함 그래서 제한을 줘야 함.
    // 점프속도는 -값을 조절하면 됨
    점프timer++; // 점프시마다 1++ 됨
  }
  // 100프레임 지나면 dino.y-- 점프를 그만해라.
  if (점프timer > 100) {
    점프중 = false;
    점프timer = 0;
  }
  // 점프중이 아니라면 항상 dino.y++ (중력은 항상 존재하기때문에)
  // 그런데 무한히 아래로 떨어진다.
  // 최저  y높이를 정해두고 그 이상으로는 dino.y++ 금지시키면 될듯함
  if (점프중 == false) {
    if (dino.y < 200) {
      dino.y++;
    }
  }

  dino.draw();
}
프레임마다실행하기();

// 충돌 체크하기
// 장애물의 x좌표값 - 주인공의 x좌표값 = 음수로 나온다면 충돌했다고 본다.
// y값도 좌표 계산을 해줘야 함.
// 장애물의 y좌표값 - 주인공의 y좌표값 = 음수로 나온다면 충돌했다고 봄
// x축도 만나고(음수) y축도 만나면(음수) 충돌했다고 한다.
function 충돌하냐(dino, cactus) {
  var x축차이 = cactus.x - (dino.x + dino.width);
  var y축차이 = cactus.y - (dino.y + dino.height);

  if (x축차이 < 0 && y축차이 < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스를 비움
    cancelAnimationFrame(animation); // 게임이 정지됨
  }
}

// 스페이스바를 눌렀을 때 이벤트가 생성되도록 하자
var 점프중 = false;
document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    점프중 = true;
  }
});

