// HTML elements

var elPokemonLIst = document.querySelector(".pokemons__list")

// Pokemon render

function render(array, place) {
    place.innerHTML = null
    
    for (var item of array) {
        var newLI = document.createElement("li");
        var newImg = document.createElement("img");
        var newDiv = document.createElement("div");
        var newH3 = document.createElement("h3");
        var newInfo = document.createElement("p");
        var newWeight = document.createElement("p");
        var newLength = document.createElement("p");
        
        newImg.src = item.img;
        newImg.classList.add("pokemon__images");
        newImg.width = 157;
        
        newLI.appendChild(newImg);
        newLI.classList.add("pokemon__item");

        newDiv.classList.add("pokemon__bottom");
        
        newH3.textContent = item.name;
        newDiv.appendChild(newH3);
        newH3.classList.add("pokemon__heading");
        
        newInfo.textContent = item.type;
        newDiv.appendChild(newInfo);
        newInfo.classList.add("pokemon__name");
        
        newWeight.textContent = item.weight;
        newDiv.appendChild(newWeight);
        newWeight.classList.add("pokemon__info");
        
        newLength.textContent = item.height;
        newDiv.appendChild(newLength);
        newLength.classList.add("pokemon__info");
        
        newLI.appendChild(newDiv);
        place.appendChild(newLI);
    }
    
}



var result = pokemons.slice(0, 100);

render(result, elPokemonLIst )