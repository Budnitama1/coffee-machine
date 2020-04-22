"use strict";

//window.document.documentElement.body
// поиск элементов
// --------------------------Устаревшие методы----------------------------------------
/*let coffeeMachine = document.getElementById("coffee"); // поиск по ID
console.log(coffeeMachine);
let images = document.getElementsByTagName("img"); // поиск по тегам
console.log(images); 
let coffeeItems = document.getElementsByClassName("coffee-item"); // поиск по классу
console.log(coffeeItems[0]);
let firstImage = coffeeItems[0].getElementsByTagName("img");
console.log(firstImage[0]);*/
// -----------------------------------------------------------------------------------
///----------------------Современные методы-------------------------------------------
/*let coffeeMachine = document.querySelector("#coffee");
console.log(coffeeMachine);
let image = document.querySelector("img");
console.log(image);
let coffeeItems = document.querySelectorAll(".coffee-item");
console.log(coffeeItems);
let itemImages = document.querySelectorAll(".coffee-item img");
console.log(itemImages);
let cupImages = document.querySelectorAll(".coffee-item img, .coffee-cup img");
console.log(cupImages);*/
//-------------------------------------------------------------------------------------
//--------------------------------------------Работа с элементами----------------------------
// Изменение CSS свойств
/*let coffeeMachine = document.querySelector(".coffee-machine");
coffeeMachine.style.border = "10px solid darkblue";
coffeeMachine.style.borderRadius = "25px";
coffeeMachine.style.position = "absolute";
coffeeMachine.style.top = "15px";
coffeeMachine.style.left = "150px";
let coffeeMachineTop = coffeeMachine.style.top;
console.log(parseInt(coffeeMachineTop)); // обрезали px*/
// Изменение атрибутов
/*let balance = document.querySelector("input[type='text']");*/
/*let balanceType = balance.getAttribute("type");
console.log(balanceType);
balance.setAttribute("type", "date");

console.log( balance.hasAttribute("placeholder") ); // проверить, есть ли такой атрибут
balance.removeAttribut("aria-label");*/
/*balance.value = 500; // == balance.setAttribute('value', 500);*/
/*console.log(balance.value); // == balance.getAttribute('value');*/
// Изменение классов
/*let changeButton = document.querySelector(".btn");
console.log(changeButton.classList);
changeButton.classList.remove("btn-primary");// убираем свойства из CSS
changeButton.classList.add("btn-success");//добавляем свойства
//changeButton.classList.toggle(""); добавлять и убирать (вкл\выкл)*/

///Изменение содержимого элементов
/*let displayText = document.querySelector(".display-text");
console.log( displayText.innerHTML );
console.log( displayText.innerText );
/*displayText.innerHTML = "<b>Готовим кофе<b>";*/
/*displayText.innerText = "<b>Готовим кофе<b>";*/

// События и слушатели событий

// mouse - click mouserover mouseup mousedown mousemove
// input - focus change

//1. С помощью атрибута(атрибут в HTML)

//--------Планирование---------------------------------------

/// таймаут

/*let timeout = setTimeout(paintBody, 5000, 'aqua');

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearTimeout(timeout);
}


function paintBody (color) {
  document.body.style.background = color;
}
*/


/*setInterval(trashConsole, 1000);

function trashConsole() {
  console.log(Math.random());

}*/
