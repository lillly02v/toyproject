// const 요청url = 'https://eulsoo.github.io/list.json';
      // const 요청객체 = new XMLHttpRequest();
      // 요청객체.open('GET', 요청url);
      // 요청객체.responseType = 'json';
      // 요청객체.send();
      // 요청객체.onload = () => {
      //   const obj = 요청객체.response;
      //   할일(obj);
      // }
    
      fetch('https://raw.githubusercontent.com/Sweet-Pumpkin/mgs-toy-project/main/json/list-01.json')
        .then(function(res){
          return res.json()
        })
        .then(function(obj){
          console.log(obj);
          할일(obj);
        })
  
      function 할일(obj) {
        console.log(obj);
        const accountList = document.querySelectorAll('.account_detail__list');
        //날짜 차이수 계산
        const date1 =  new Date(obj[obj.length-1].date);
        const date2 = new Date(obj[0].date);
        const diffDate = date1.getTime() - date2.getTime();
        const dateDays = Math.abs(diffDate / (1000* 3600 * 24));
        console.log(dateDays);

        let sum = [];
        let accountSum =[];
        let day=[];
        let expend=[];
        let ulElem=[];
        for(let k= 0; k<3;k++) {//해리,론,헤르미온느 페이지 3번반복
          for (let j=0; j<=dateDays;j++){
            //하루 단위 for문 반복
            sum[j] =0;

            accountSum[j] = document.createElement('div');
            day[j] = document.createElement('span');
            expend[j] = document.createElement('span');
            ulElem[j] = document.createElement('ul');
            //css를 위한 class 추가
            accountSum[j].classList.add('account_detail__sum');
            ulElem[j].classList.add('list');
            day[j].classList.add('day');
            expend[j].classList.add('expend');

            accountList.item(k).appendChild(accountSum[j]); // 날짜+sum부분
            accountSum[j].appendChild(day[j]); //날짜부분
            accountSum[j].appendChild(expend[j]); //sum부분
            accountList.item(k).appendChild(ulElem[j]); // list부분
  
            for(let i = 0; i < obj.length; i++ ) { //객체의 모든 item 반복
              console.log((obj[obj.length-1].date).substr(0,8)+String(parseInt((obj[obj.length-1].date).substr(8,2))-j));
              //수정중
              if (obj[i].date == (String(parseInt((obj[obj.length-1].date).substr(8,2))).length == 2 ? (obj[obj.length-1].date).substr(0,8)+String(parseInt((obj[obj.length-1].date).substr(8,2))-j): (obj[obj.length-1].date).substr(0,8)+"0"+String(parseInt((obj[obj.length-1].date).substr(8,2))-j))) { // 요일차이를 이용한 if문 조건
                if(j === 0 ){
                  day[j].textContent = '오늘'; //날짜 출력
                } else if (j===1) {
                  day[j].textContent = '어제';
                } else if (j===2) {
                  day[j].textContent = '그제';
                } else {
                  day[j].textContent = (String(parseInt((obj[obj.length-1].date).substr(8,2))).length == 2 ? (obj[obj.length-1].date).substr(0,8)+String(parseInt((obj[obj.length-1].date).substr(8,2))-j): (obj[obj.length-1].date).substr(0,8)+"0"+String(parseInt((obj[obj.length-1].date).substr(8,2))-j));
                }
                
                const li = document.createElement('li');
                const strong = document.createElement('strong');
                strong.textContent = obj[i].item; //리스트 목록 출력
                const span = document.createElement('span');
                
                span.textContent = obj[i].price; //리스트 가격 출력
    
                li.appendChild(strong);
                li.appendChild(span);
                ulElem[j].appendChild(li);
                if(obj[i].inOut == 'out'){
                  sum[j]+=obj[i].price; //out일때 sum더해주기
                }
              }
              
            }
            expend[j].textContent = sum[j] + "원 지출"; // 가격 출력
          }
        }

      };