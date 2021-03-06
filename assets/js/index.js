"use strict"
document.addEventListener("DOMContentLoaded", init);

let recipeList;
let allRecipes = [];
let button;
let section;
let recipeButton;

function openForm(e) {
    e.preventDefault();
    section.style.display = "block";
}

function closeForm(e) {
    e.preventDefault();

    section.style.display = "none";
}

function init() {
    recipeList = document.querySelector(".recipes");
    loadRecipes();


    section = document.querySelector(".add-recipe");


    recipeButton = document.querySelector(".recipes:last-child");
    recipeButton.addEventListener("click", openForm);

/*
    button = document.querySelector(".hamburger");

    button.addEventListener("click", () =>{
        button.classList.toggle("is-active");
    })*/


}

function loadRecipes() {
    fetch("assets/js/recipes.json")
        .then(response => response.json())
        .then(json => {
            for(let recipe in json){
                allRecipes.push(recipe);
            }
            fillRecipes();
        });
}

function fillRecipes() {
    for(let i = 0; i < 10; i++) {
        recipeList.innerHTML += `<li><figure class="card-left"><img src="media/${allRecipes[i]}.jpg" class="card-img" alt="recipe"><figcaption class="card-text"><p>${allRecipes[i].replaceAll("-", " ")}</p></figcaption></figure></li>`;
    }
    recipeList.innerHTML += `<li><figure class="card-left"><img src="media/plus.svg" class="card-img" id="add" alt="Add new"><figcaption class="card-text"><p>Add new recipe</p></figcaptionfigure></li>`;
}
