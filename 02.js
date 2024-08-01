// 2. 스코프
// 1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName();
// yuno2
// myName 내부에 name이 정의되어있기 때문

// 2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test();
// 2
// var는 블록 스코프를 뚫고 나오게됩니다.

// .화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method();

// 화살표 함수 : yuno
// 일반 함수 : undefined
// 화살표함수는 선언 시점의 상위 스코프가 this로 바인딩 되지만, 일반 함수는 독립적으로 호출 할 때 this는 전역 개체를 가르키기 때문
