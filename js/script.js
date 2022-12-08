import { a, b} from "./vars.js";

console.log(a,b);


const doors = document.querySelectorAll('.door');

console.log(doors);


doors.forEach(function (element) {
   element.addEventListener("click",anim);
})

function anim () {
   this.classList.add("door-open")
   console.log(this);
}