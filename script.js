// let countHtml = document.querySelector('.number span');
// let increaseBtn = document.querySelector('.increase');
// let substractBtn = document.querySelector('.substract');
// let resetBtn = document.querySelector('.reset');



// let counter = 0;



// function count(){



//   increaseBtn.addEventListener('click', function(){
//     counter++;
//     countHtml.innerHTML = counter;
//   });


//   substractBtn.addEventListener('click', function(){
//     counter--;
//     countHtml.innerHTML = counter;
//   });

//   resetBtn.addEventListener('click', function(){
//     counter = 0;
//     countHtml.innerHTML = counter;

//   })

// }
// count();




let countHtml = document.querySelector('.number span');
let btns = document.querySelectorAll('.btn');
let counter = 0;
btns.forEach(function(btn, index){
  btn.addEventListener('click',(e) =>{
    if(index === 0){
      counter--;
      colors();
      // countHtml.style.color = 'red';
      countHtml.innerHTML = counter;
    }else if(index === 2){
      counter++;
      colors();
      // countHtml.style.color = 'green';
      countHtml.innerHTML = counter;
    }
    if(index === 1){
      counter = 0;
      colors();
      countHtml.innerHTML = counter;
    }
  })
});



function colors(){
  if(counter < 0){
    countHtml.style.color = 'red';
  }else if(counter > 0){
    countHtml.style.color = 'green';
  }else{
    countHtml.style.color = 'black';
  }
}