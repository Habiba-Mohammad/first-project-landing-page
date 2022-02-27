// get elements from Html 
let Nav = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');
// change the color of the title  
let style=document.querySelector('h1').style.color=('red');
//////////////////////////////
// set the varibales of the project 
let link=""
let contaner= `<li><ul><a class="menu__link" href="`
let counter=1
let sectionId="#section"
let scrolling2="<style>html{scroll-behavior: smooth;}</style>"
// first requirement add a dynamic navigation bar // 
for (let section=1;section<=sections.length;section+=1){
    let Id = sectionId+counter;
    let DataNav = 'Section '+section
// add counter instead of section because counter start from 1 but section start from zero 
    counter++
    link += `${contaner}${Id}">${DataNav}</a></ul><li>`
///// change color of section when scrolling using addEventListener and getBoundingClientRect()
let sectionScroll = document.getElementById("section"+section);
document.addEventListener("scroll",function(){
  if(sectionScroll.getBoundingClientRect().top<=100){
    sectionScroll.style.backgroundColor="black"}
  else{
    sectionScroll.style.backgroundColor="blue"
      }})}
      Nav.innerHTML = link;
//////////////////////////////////////////////
// smooth scrolling 
document.head.insertAdjacentHTML("beforeend",scrolling2)
///////////////////
// text replace by js 
let textReplace = document.getElementById("section1").innerHTML;
document.getElementById("section1").innerHTML = textReplace.replace("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero", "I am speech and language pathologist and web developer............................................");
////////////////////////////////////

 
