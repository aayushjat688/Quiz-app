const htmlTime = document.querySelector('.time')
const nextButton = document.querySelector('.next-button');
const question = document.querySelector('.question p');
const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')



let queNo = 1;
let time = 30;
const aptitudeQuestions = [
  {
    question: "If 5 pens cost ₹50, how much do 8 pens cost?",
    options: ["₹70", "₹75", "₹80", "₹85"],
    answer: "₹80"
  },
  {
    question: "A train travels 60 km in 1.5 hours. What is its speed?",
    options: ["30 km/h", "40 km/h", "45 km/h", "50 km/h"],
    answer: "40 km/h"
  },
  {
    question: "What is 25% of 240?",
    options: ["50", "55", "60", "65"],
    answer: "60"
  },
  {
    question: "If the ratio of boys to girls is 3:2, how many girls are there in a class of 30?",
    options: ["10", "12", "15", "18"],
    answer: "12"
  },
  {
    question: "A man spends 1/3 of his salary on rent and 1/4 on food. What fraction of his salary is left?",
    options: ["5/12", "7/12", "1/2", "1/3"],
    answer: "5/12"
  },
  {
    question: "The average of 10, 20, 30, 40, 50 is:",
    options: ["25", "30", "35", "40"],
    answer: "30"
  },
  {
    question: "If a clock shows 3:15, what is the angle between the hour and minute hand?",
    options: ["37.5°", "45°", "47.5°", "52.5°"],
    answer: "7.5°"
  },
  {
    question: "A shopkeeper bought an item for ₹200 and sold it for ₹250. What is the profit percentage?",
    options: ["20%", "25%", "30%", "35%"],
    answer: "25%"
  },
  {
    question: "If 12 men can complete a work in 8 days, how many men are needed to complete it in 6 days?",
    options: ["14", "15", "16", "18"],
    answer: "16"
  },
  {
    question: "The simple interest on ₹1000 at 5% per annum for 2 years is:",
    options: ["₹50", "₹75", "₹100", "₹150"],
    answer: "₹100"
  },
  {
    question: "What is the next number in the series: 2, 6, 12, 20, ?",
    options: ["28", "30", "32", "34"],
    answer: "30"
  },
  {
    question: "A car covers 150 km in 3 hours. How long will it take to cover 250 km at the same speed?",
    options: ["4 hours", "4.5 hours", "5 hours", "5.5 hours"],
    answer: "5 hours"
  },
  {
    question: "If the perimeter of a square is 36 cm, what is its area?",
    options: ["81 cm²", "100 cm²", "121 cm²", "144 cm²"],
    answer: "81 cm²"
  },
  {
    question: "A person’s present age is 30 years. After 10 years, his age will be:",
    options: ["35", "38", "40", "45"],
    answer: "40"
  },
  {
    question: "If 3 pencils cost ₹9, how much do 10 pencils cost?",
    options: ["₹25", "₹28", "₹30", "₹32"],
    answer: "₹30"
  },
  {
    question: "The average of first 5 odd numbers is:",
    options: ["3", "5", "7", "9"],
    answer: "5"
  },
  {
    question: "A man walks 5 km north, then 12 km east. What is the shortest distance back to the starting point?",
    options: ["12 km", "13 km", "14 km", "15 km"],
    answer: "13 km"
  },
  {
    question: "If the cost price is ₹400 and the selling price is ₹500, what is the profit percentage?",
    options: ["20%", "25%", "30%", "35%"],
    answer: "25%"
  },
  {
    question: "What is the missing number: 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "40"],
    answer: "36"
  },
  {
    question: "If 15 workers can build a wall in 20 days, how many days will 30 workers take?",
    options: ["5", "10", "15", "20"],
    answer: "10"
  }
];
let quechecker = 0;
function definer(quechecker){
let noOfQue = aptitudeQuestions[quechecker];
question.innerHTML = noOfQue.question;
a.innerHTML = noOfQue.options[0];
b.innerHTML = noOfQue.options[1];
c.innerHTML = noOfQue.options[2];
d.innerHTML = noOfQue.options[3];
}
nextButton.addEventListener('click',()=>{
    definer(quechecker);
    quechecker++;
    
});






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






