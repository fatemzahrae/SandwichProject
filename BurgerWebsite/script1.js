window.addEventListener('scroll', function() {
    const burgerImage = document.querySelector('.BurgerImage');
    burgerImage.style.top = `${30 - window.scrollY * 0.2}%`;

    const burgerBackground = document.querySelector('.Burgerbackground');
    burgerBackground.style.backgroundPositionY = `${-window.scrollY * 0.5}px`;

    const bigText = document.querySelector('.bigText');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 70) {

        bigText.style.color = '#FFA775';
    } else {
        
        bigText.style.color = '#332B46';
    }

    const premiumSection = document.querySelector('.premium');
    premiumSection.style.top = `${150 - window.scrollY * 0.1}%`;

    const hotdogImage = document.querySelector('.hotdog');
    hotdogImage.style.transform = `translateY(${window.scrollY * 0.5}px)`;

    const shawarmaImage = document.querySelector('.shawarma');
    shawarmaImage.style.transform = `translateY(${window.scrollY * 0.5}px)`;

    const burgerPremiumImage = document.querySelector('.burgerPremium');
    burgerPremiumImage.style.transform = `translateY(${window.scrollY * 0.5}px)`;

    const pizzaImage = document.querySelector('.pizza');
    pizzaImage.style.transform = `translateY(${window.scrollY * 0.5}px)`;
});

const makeYourOwnButton = document.querySelector('.button');
const buttonText = document.querySelector('.buttonText');

makeYourOwnButton.addEventListener('mouseover', function() {
    
    buttonText.style.color = '#FFA775';
});

makeYourOwnButton.addEventListener('mouseout', function() {
    
    buttonText.style.color = '#332B46';
});