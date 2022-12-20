
const doors = document.querySelectorAll('.door');

const bodyItems = document.querySelectorAll('.body-item');

const headerImg = document.querySelector('.header-img');


bodyItems.forEach(function (element){
   element.addEventListener("click",catHere);
})

let x = 0 ;

headerImg.addEventListener("click",()=>{
   if(x==0) {
      x = x+1;
   }
  else {
   x = x - 1
  }
   console.log(x);
})

function catHere () {
   console.log(x);
   if (x==1) {
      this.insertAdjacentHTML("afterbegin",`<div class="cat-block">
   <img class="cat-img" src="./img/cat.png" alt="">
 </div>`)
   }
   else {
      this.insertAdjacentHTML("afterbegin",`<div class="cat-block">
   <img class="cat-img" src="./img/free.png" alt="">
 </div>`)
   }
}

doors.forEach(function (element) {
   element.addEventListener("click",anim);
})

function anim () {
   this.classList.add("door-open");
   
   console.log(this);
}



