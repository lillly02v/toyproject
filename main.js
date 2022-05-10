var swiper = new Swiper(".mySwiper", {});

const chartIcon = document.querySelectorAll('.account_middle__chart');
for(let i = 0; i<3;i++) {
  chartIcon[i].addEventListener('click', chartHandler);

  const chart = document.querySelector(".chartSection");
  function chartHandler() {
    chart.classList.add("chartUp");
  }
  const closeBtn = document.querySelector('.closeBtn');
  closeBtn.addEventListener('click', closeBtnHandler);
  function closeBtnHandler() {
   chart.classList.remove("chartUp");
  }
}

const range = document.querySelector('.standardBar');
const result = document.querySelector('.standard');
function handleInput(e){
  result.innerHTML = `${e.target.value}`
  // 이벤트 타겟의 value를 result 안에 뿌린다.
}

function init(){
  range.oninput = handleInput; // range에 입력이 들어가면 handleInput을 실행한다.
  result.innerText = `${range.value}` // range의 초기 셋팅 값을 뿌려준다.
}

init();




const accountBar = document.querySelectorAll('.account_detail__bar');
for(let i =0;i<3;i++) {
  accountBar[i].addEventListener('click', accountBarHandler);
  const accountDetail = document.querySelectorAll('.account_detail');
  function accountBarHandler() {
    console.log(accountDetail[1]);
    accountDetail[i].classList.toggle('barUp');
  }
}

