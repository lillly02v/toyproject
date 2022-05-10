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
        for(let k= 0; k<3;k++) {
          for (let j=0; j<=dateDays;j++){
          
            sum[j] =0;
            accountSum[j] = document.createElement('div');
            day[j] = document.createElement('span');
            expend[j] = document.createElement('span');
            ulElem[j] = document.createElement('ul');
            accountSum[j].classList.add('account_detail__sum');
            ulElem[j].classList.add('list');
            day[j].classList.add('day');
            expend[j].classList.add('expend');
            accountList.item(k).appendChild(accountSum[j]);
            accountSum[j].appendChild(day[j]);
            accountSum[j].appendChild(expend[j]);
            accountList.item(k).appendChild(ulElem[j]);
  
            for(let i = 0; i < obj.length; i++ ) {
              if (obj[i].date == ('2022.05.0'+String(6-j))) {
                if(j === 0 ){
                  day[j].textContent = '오늘';
                } else if (j===1) {
                  day[j].textContent = '어제';
                } else if (j===2) {
                  day[j].textContent = '그제';
                } else {
                  day[j].textContent = '2022.05.0'+String(6-j);
                }
                
                const li = document.createElement('li');
                const strong = document.createElement('strong');
                strong.textContent = obj[i].item;
                const span = document.createElement('span');
                
                span.textContent = obj[i].price;
    
                li.appendChild(strong);
                li.appendChild(span);
                ulElem[j].appendChild(li);
                if(obj[i].inOut == 'out'){
                  sum[j]+=obj[i].price;
                }
              }
              // if (obj[i].date == '2022.05.05') {
              //   day1.textContent = '어제';
              //   const li = document.createElement('li');
              //   const strong = document.createElement('strong');
              //   strong.textContent = obj[i].item;
              //   const span = document.createElement('span');
                
              //   span.textContent = obj[i].price;
              //   li.appendChild(strong);
              //   li.appendChild(span);
              //   ulElem1.appendChild(li);
              //   if(obj[i].inOut == 'out'){
              //     sum1+=obj[i].price;
              //   }
              // }
            }
            expend[j].textContent = sum[j] + "원 지출";
          }
        }

        
        
        
        
      };