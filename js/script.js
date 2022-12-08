import { a, b} from "./vars.js";
console.log(a,b);

const doors = document.querySelectorAll('.door');

const bodyItems = document.querySelectorAll('.body-item');

bodyItems.forEach(function (element){
   element.addEventListener("click",catHere);
})

function catHere () {
   this.insertAdjacentHTML("afterbegin",`<div class="cat-block">
   <img class="cat-img" src="./img/cat.png" alt="">
 </div>`)
}

doors.forEach(function (element) {
   element.addEventListener("click",anim);
})

function anim () {
   this.classList.add("door-open");
   
   console.log(this);
}



