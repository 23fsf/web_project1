document.addEventListener("keypress",key)
document.querySelectorAll("img")[0].addEventListener("click",test0)
document.querySelectorAll("img")[1].addEventListener("click",test1)
document.querySelectorAll("img")[2].addEventListener("click",test2)
document.querySelectorAll("img")[3].addEventListener("click",test3)
document.querySelectorAll("img")[5].addEventListener("click",test4)

function key(event){
    console.log(event.which)
    if (event.which === 100){ 
        var audio=new Audio("./music/1.mp3")
        audio.play()//play music
    }
    if (event.which=== 101){
        var audio=new Audio("./music/2.mp3")
        audio.play()//play music
    }
    if (event.which === 108){
        var audio=new Audio("./music/3.mp3")
        audio.play()//play music
    }
    if (event.which === 116){
        var audio=new Audio("./music/4.mp3")
        audio.play()//play music
    }
    if (event.which === 119){
        var audio=new Audio("./music/5.mp3")
        audio.play()//play music
    }
}