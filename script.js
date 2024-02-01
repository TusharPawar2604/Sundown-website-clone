// var btn = document.querySelector("button")
// var box = document.querySelector("#box")

// btn.addEventListener("click", function (){
//  var a1 =  Math.floor(Math.random()*255)
// var a2 =  Math.floor(Math.random()*255)
// var a3 =  Math.floor(Math.random()*255)

// box.style.backgroundColor = `rgb(${a1},${a2},${a3})`
// })

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var fixed = document.querySelector("#fixed-image")
var elemC = document.querySelector("#elem-container")

elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")

elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

var loader = document.querySelector("#loader")
setTimeout(function(){
   loader.style.top = "-100%"
},4000)

