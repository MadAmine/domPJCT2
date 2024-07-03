document.addEventListener('DOMContentLoaded',(event)=>{
    let btn = document.getElementById('change-color-btn')
    let box = document.getElementById('colorbox')
   function getRandomColor(){
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        return randomColor
    }
    function changeBackground(){
        box.style.backgroundColor = getRandomColor()
    }
    btn.addEventListener('click', ()=>changeBackground())

    
}) 
