const buttonListContainer = document.querySelector('.ButtonList');
const plate = document.querySelector('.plate');
document.addEventListener('DOMContentLoaded', function () {
    const parentButtons = document.querySelectorAll('.parentButton');
    let currentActiveIndex = 0;

    function activateParentButton(index) {
        const currentButton = parentButtons[index];
        const mainButton = currentButton.querySelector('button');
        const subButtonList = currentButton.querySelector('.subButtonList');

        subButtonList.style.display = 'block';
        mainButton.style.backgroundColor = '#F48D52';
        mainButton.style.pointerEvents = 'auto';
    }

    function deactivateParentButton(index) {
        const currentButton = parentButtons[index];
        const mainButton = currentButton.querySelector('button');
        const subButtonList = currentButton.querySelector('.subButtonList');

        subButtonList.style.display = 'none';
        mainButton.style.backgroundColor = '#b7b7b7';
        mainButton.style.pointerEvents = 'none';
    }

    function activateSubButton(subButton) {
        subButton.style.backgroundColor = '#FF7233';
        subButton.style.color = 'white';
        subButton.classList.add('selected');
    }

    function deactivateSubButtons(subButtons) {
        subButtons.forEach(function (subButton) {
            subButton.style.backgroundColor = '#FFD6BD';
            subButton.style.color = 'initial';
            subButton.classList.remove('selected');
        });
    }

    function handleSubButtonClick(subButton) {
        const subButtons = subButton.parentNode.querySelectorAll('button');

        if (subButton.classList.contains('none')) {
            // Clicked on "None"
            deactivateSubButtons(subButtons);
        } else {
            // Clicked on a subButton other than "None"
            const noneButton = subButton.parentNode.querySelector('.none');
            if (noneButton) {
                deactivateSubButtons([noneButton]);
            }
        }

        activateSubButton(subButton);
        // Handle the logic for the clicked sub-button (if needed)
    }

    // Activate the first parent button
    activateParentButton(currentActiveIndex);

    parentButtons.forEach(function (button, index) {
        const mainButton = button.querySelector('button');
        const subButtonList = button.querySelector('.subButtonList');

        mainButton.addEventListener('click', function () {
            if (index === currentActiveIndex) {
                // Clicking on the active parent button
                // Handle the logic for the clicked sub-button (if needed)
            } else if (index === currentActiveIndex + 1) {
                // Clicking on the next parent button
                deactivateParentButton(currentActiveIndex);
                currentActiveIndex = index;
                activateParentButton(currentActiveIndex);
            }
            // You can add additional conditions or logic for other cases if needed
        });

        const subButtons = subButtonList.querySelectorAll('button');

        subButtons.forEach(function (subButton) {
            subButton.addEventListener('click', function () {
                deactivateSubButtons(subButtons);
                handleSubButtonClick(subButton);
            });
        });
    });
});


function addIngredient(ingredient) {
    
    ingredient.classList.toggle("hidden");
}


var bottomBunButton = document.getElementById("White");
var bottomBunWheatButton = document.getElementById("Whole");
var meatPattyButton = document.getElementById("Beef");
var chickenPattyButton = document.getElementById("Chicken");
var cheeseButton = document.getElementById("American");
var lettuceButton = document.getElementById("Green");
var cucumberButton = document.getElementById("RegularCucumber");
var pickledCucumberButton = document.getElementById("Pickeled");
var omeletteButton = document.getElementById("Omelette");
var pepperoniSlicesButton = document.getElementById("PepperoniSlices");
var tomatoButton = document.getElementById("RegularTomato");
var onionButton = document.getElementById("RegularOnion");

var noneCheeseButton = document.getElementById("noneCheeseButton");
var noneLettuceButton = document.getElementById("noneLettuceButton");
var noneCucumberButton = document.getElementById("noneCucumberButton");
var noneToppingsButton = document.getElementById("noneToppingsButton");
var noneOnionButton = document.getElementById("noneOnionButton");
var noneTomatoButton = document.getElementById("noneTomatoButton");


var finishButton = document.querySelector(".FinishButton");


var bottomBun = document.querySelector(".bottomBun");
var bottomBunWheat = document.querySelector(".bottomBunWheat");
var meatPatty = document.querySelector(".Meatpatty");
var chickenPatty = document.querySelector(".Chickenpatty");
var cheese = document.querySelector(".Cheese");
var lettuce = document.querySelector(".lettuce");
var cucumber = document.querySelector(".cucumber");
var pickledCucumber = document.querySelector(".Pickeledcucumber");
var pickledCucumber2 = document.querySelector(".Pickeledcucumber2");
var omelette = document.querySelector(".Omelette");
var pepperoni1 = document.querySelector(".pepperoni1");
var pepperoni2 = document.querySelector(".pepperoni2");
var pepperoni3 = document.querySelector(".pepperoni3");
var pepperoni4 = document.querySelector(".pepperoni4");
var tomato = document.querySelector(".tomato");
var tomato1 = document.querySelector(".tomato1");
var tomato2 = document.querySelector(".tomato2");
var onion1 = document.querySelector(".onion1");
var onion = document.querySelector(".onion");
var topBun = document.querySelector(".topBun");
var topBunWheat = document.querySelector(".topBunWheat");
var maker = document.querySelector(".maker");


bottomBunButton.addEventListener("click", function () {
    bottomBunWheat.classList.add("hidden")
    addIngredient(bottomBun);

});

bottomBunWheatButton.addEventListener("click", function () {
    bottomBun.classList.add("hidden")
    addIngredient(bottomBunWheat);
});

meatPattyButton.addEventListener("click", function () {
    addIngredient(meatPatty);
    chickenPatty.classList.add("hidden");
});

chickenPattyButton.addEventListener("click", function () {
    addIngredient(chickenPatty);
    meatPatty.classList.add("hidden");
});

cheeseButton.addEventListener("click", function () {
    addIngredient(cheese);
});

lettuceButton.addEventListener("click", function () {
    addIngredient(lettuce);
});

cucumberButton.addEventListener("click", function () {
    addIngredient(cucumber);
});

pickledCucumberButton.addEventListener("click", function () {
    addIngredient(pickledCucumber);
    addIngredient(pickledCucumber2);
});

omeletteButton.addEventListener("click", function () {
    addIngredient(omelette);
});

tomatoButton.addEventListener("click", function () {
    addIngredient(tomato);
    addIngredient(tomato1);
    addIngredient(tomato2);
});


onionButton.addEventListener("click", function () {
    addIngredient(onion1);
    addIngredient(onion);
});

pepperoniSlicesButton.addEventListener("click", function () {
    addIngredient(pepperoni1);
    addIngredient(pepperoni2);
    addIngredient(pepperoni3);
    addIngredient(pepperoni4);
});


noneLettuceButton.addEventListener("click", function () {
    if (lettuce.classList.contains("hidden")) {
        return;
    } 
    else {
        lettuce.classList.add("hidden");
    }
});

noneCheeseButton.addEventListener("click", function () {
    if (cheese.classList.contains("hidden")) {
        return;
    } 
    else {
        cheese.classList.add("hidden");
    }
});

noneCucumberButton.addEventListener("click", function () {
if (cucumber.classList.contains("hidden")) {
        return;
    } 
    else {
        cucumber.classList.add("hidden");
    }
if (pickledCucumber.classList.contains("hidden")) {
        return;
    } 
    else {
        pickledCucumber.classList.add("hidden");
    }
if (pickledCucumber2.classList.contains("hidden")) {
        return;
    } 
    else {
        pickledCucumber2.classList.add("hidden");
    }
});

noneToppingsButton.addEventListener("click", function () {
    if (omelette.classList.contains("hidden")) {
        return;
    } 
    else {
        omelette.classList.add("hidden");
    }
if (pepperoni1.classList.contains("hidden")) {
        return;
    } 
    else {
        pepperoni1.classList.add("hidden");
    }
if (pepperoni2.classList.contains("hidden")) {
        return;
    } 
    else {
        pepperoni2.classList.add("hidden");
    }
if (pepperoni3.classList.contains("hidden")) {
        return;
    } 
    else {
        pepperoni3.classList.add("hidden");
    }
if (pepperoni4.classList.contains("hidden")) {
        return;
    } 
    else {
        pepperoni4.classList.add("hidden");
    }
});

noneTomatoButton.addEventListener("click", function () {
if (tomato.classList.contains("hidden")) {
        return;
    } 
    else {
        tomato.classList.add("hidden");
    }
if (tomato1.classList.contains("hidden")) {
        return;
    } 
    else {
        tomato1.classList.add("hidden");
    }
if (tomato2.classList.contains("hidden")) {
        return;
    } 
    else {
        tomato2.classList.add("hidden");
    }
});

noneOnionButton.addEventListener("click", function () {
    if (onion.classList.contains("hidden")) {
        return;
    } 
    else {
        onion.classList.add("hidden");
    }
if (onion1.classList.contains("hidden")) {
        return;
    } 
    else {
        onion1.classList.add("hidden");
    }
});

finishButton.addEventListener("click", function () {
    const selectedBottomBun = document.querySelector(".subBottomBunButton.selected");

    if (selectedBottomBun) {
        const bottomBunType = selectedBottomBun.id;

        const topBuns = document.querySelectorAll(".topBun, .topBunWheat");
        topBuns.forEach(function (topBun) {
            topBun.classList.add("hidden");
        });

        const topBunToShow = document.querySelector(`.${bottomBunType === "White" ? "topBun" : "topBunWheat"}`);
        if (topBunToShow) {
            topBunToShow.classList.remove("hidden");
        }
    }

    const appetitText = document.querySelector(".Appetit");
    appetitText.classList.remove("hidden");
    maker.classList.add("hidden");
    buttonListContainer.style.display = "none";
    plate.classList.remove("hidden");
});
