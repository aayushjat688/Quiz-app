const htmlTime = document.querySelector('.time')
const nextButton = document.querySelector('.next-button');









let time = 30;
let timer = setInterval(()=>{
    time--;
    if(time<16){
        document.body.style.backgroundColor = 'rgba(228, 229, 199, 1)';
        htmlTime.style.backgroundColor = 'rgba(197, 177, 0, 0.43)';
        nextButton.style.color = 'rgba(197, 177, 0, 0.43)';
    }
    if(time<6){
        document.body.style.backgroundColor =  'rgba(219, 173, 173, 1)';
        htmlTime.style.backgroundColor = 'rgba(197, 12, 0, 0.43)';
        nextButton.style.color = 'rgba(197, 0,0,1)';
    }
htmlTime.innerHTML = `00:${time < 10 ? '0' + time : time}`
},1000);

setTimeout(()=>{
    clearInterval(timer);
    
},30000);