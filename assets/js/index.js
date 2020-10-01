"use strict"
document.addEventListener("DOMContentLoaded", init);

let recipeList;
let allRecipes = [];

function init() {
    recipeList = document.querySelector(".recipes");
    loadRecipes();
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
    for(let i = 0; i < 100; i++) {
        recipeList.innerHTML += `<li><figure class="card-left"><img src="media/${allRecipes[i]}.jpg" class="card-img" alt="recipe"><figcaption class="card-text"><p>${allRecipes[i].replaceAll("-", " ")}</p></figcaption></figure></li>`;
    }

}
