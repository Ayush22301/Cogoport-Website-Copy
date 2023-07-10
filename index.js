var crnt = 0;
function changeButton(x){
    crnt = x;
    let y = document.getElementsByClassName("laptopClass");
    if(crnt===1)
    {
        document.getElementById("leftButton").style.backgroundColor="rgb(223, 220, 220)";
        document.getElementById("rightButton").style.backgroundColor="#fbdc00";
        document.getElementById("laptopImage").src = "images/laptop2.png";
    }
    else{
        document.getElementById("rightButton").style.backgroundColor="rgb(223, 220, 220)";
        document.getElementById("leftButton").style.backgroundColor="#fbdc00";
        document.getElementById("laptopImage").src = "images/laptop1.png";
    }
    y.appendChild(newImg)
}



let vidImg=document.querySelector('.homepage-vid');
let btnVid=document.querySelector('.vid-btn');
let ytVid=document.querySelector('.ytvid');

vidImg.addEventListener('click', function(){
    // console.log('clicked');
    if(ytVid.classList.contains('hidden')){
        ytVid.classList.remove('hidden');
    }
    else{
        ytVid.classList.add('hidden');
    }
})

btnVid.addEventListener('click', function(){
    // console.log('clicked');
    if(ytVid.classList.contains('hidden')){
        ytVid.classList.remove('hidden');
    }
    else{
        ytVid.classList.add('hidden');
    }
})