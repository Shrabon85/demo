window.addEventListener("scroll" ,function() {
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


function openNav(){
    document.getElementById("overlay").style.width="50%";
}

function closeNav(){

    document.getElementById("overlay").style.width="0%";

}



var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");

button1.addEventListener("click",function() {
    document.querySelector(".header").classList.add("para");
})

button2.addEventListener("click",function() {
    document.querySelector(".header").classList.add("para1");
})



// function res_drop(){
    
//     document.querySelector(".dropdown1").style.display="block";
    
// }






