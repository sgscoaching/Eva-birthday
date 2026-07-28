// ===============================
// EVA BIRTHDAY SURPRISE
// SCRIPT PART 1
// ===============================

const password = "2807";

const lockScreen = document.getElementById("lockScreen");
const letterPage = document.getElementById("letterPage");
const galleryPage = document.getElementById("galleryPage");
const finalScreen = document.getElementById("finalScreen");

const input = document.getElementById("password");
const wrong = document.getElementById("wrong");

const music = document.getElementById("music");

const letter = `Happy Birthday to the most wonderful person in my life. ❤️

Today isn't just another day—it's the day someone truly special came into this world.

Thank you for being my best friend, my biggest happiness, and the reason behind so many smiles.

Every conversation with you has become one of my favourite memories.

I pray that this new year of your life brings endless happiness, success, good health and beautiful surprises.

Keep smiling because your smile truly makes the world brighter.

Happy Birthday Eva ❤️

With lots of love,

Priyanshu`;

function unlock(){

if(input.value===password){

if(music){
music.play().catch(()=>{});
}

confetti({
particleCount:250,
spread:180,
origin:{y:.6}
});

lockScreen.classList.remove("active");

setTimeout(()=>{

letterPage.classList.add("active");

typeLetter();

},600);

}else{

wrong.innerHTML="❌ Wrong Password";

input.classList.add("shake");

setTimeout(()=>{

input.classList.remove("shake");

},500);

}

}

let index=0;

function typeLetter(){

const box=document.getElementById("typewriter");

box.innerHTML="";

index=0;

const timer=setInterval(()=>{

box.innerHTML+=letter.charAt(index);

index++;

if(index>=letter.length){

clearInterval(timer);

}

},35);

}

function showGallery(){

letterPage.classList.remove("active");

galleryPage.classList.add("active");

window.scrollTo(0,0);

}

function finalPage(){

galleryPage.classList.remove("active");

finalScreen.classList.add("active");

window.scrollTo(0,0);

confetti({

particleCount:400,

spread:220,

origin:{y:.5}

});

}

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}
// ===============================
// SCRIPT PART 2
// Premium Effects
// ===============================

// Unlock using Enter key
input.addEventListener("keypress", function(e){

if(e.key==="Enter"){

unlock();

}

});

// Fireworks on Final Page

function fireworks(){

confetti({

particleCount:120,

angle:60,

spread:70,

origin:{x:0}

});

confetti({

particleCount:120,

angle:120,

spread:70,

origin:{x:1}

});

confetti({

particleCount:180,

spread:150,

origin:{y:.4}

});

}

// Repeat fireworks

setInterval(()=>{

if(finalScreen.classList.contains("active")){

fireworks();

}

},3000);

// Floating Stars

for(let i=0;i<60;i++){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.opacity=Math.random();

star.style.fontSize=(10+Math.random()*18)+"px";

star.style.pointerEvents="none";

star.style.animation=`twinkle ${2+Math.random()*4}s infinite`;

document.body.appendChild(star);

}

// Fade Animation Helper

function changePage(current,next){

current.classList.remove("active");

setTimeout(()=>{

next.classList.add("active");

},300);

}

// Balloon Generator

function createBalloon(){

const balloon=document.createElement("div");

const colors=["🎈","🎈","🎈","💖"];

balloon.innerHTML=colors[Math.floor(Math.random()*colors.length)];

balloon.style.position="fixed";

balloon.style.left=Math.random()*100+"vw";

balloon.style.bottom="-50px";

balloon.style.fontSize=(25+Math.random()*20)+"px";

balloon.style.pointerEvents="none";

balloon.style.animation=`balloonUp ${8+Math.random()*5}s linear`;

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},13000);

}

// Balloons only on final page

setInterval(()=>{

if(finalScreen.classList.contains("active")){

createBalloon();

}

},1200);

// Welcome message

console.log("❤️ Happy Birthday Eva ❤️");

// Small surprise after 10 seconds on final page

setInterval(()=>{

if(finalScreen.classList.contains("active")){

confetti({

particleCount:60,

spread:90,

origin:{

x:Math.random(),

y:Math.random()

}

});

}

},10000);

setInterval(createHeart,450)