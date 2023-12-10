document.addEventListener('DOMContentLoaded', function () {
    const parentButtons = document.querySelectorAll('.parentButton');
    let lastActivatedParent = null;

    parentButtons.forEach(function (button, index) {
        const mainButton = button.querySelector('button');
        const subButtonList = button.querySelector('.subButtonList');
        let parentActivated = false;

        mainButton.addEventListener('click', function () {
            if (!parentActivated) {
                if (lastActivatedParent !== null) {
                    
                    return;
                }

                subButtonList.style.display = 'block';
                parentActivated = true;
                lastActivatedParent = index;

                parentButtons.forEach(function (otherButton, otherIndex) {
                    if (index !== otherIndex) {
                        const otherMainButton = otherButton.querySelector('button');
                        const otherSubButtonList = otherButton.querySelector('.subButtonList');
                        otherSubButtonList.style.display = 'none';
                        otherMainButton.style.backgroundColor = '#b7b7b7';
                    }
                });
            } else {
                subButtonList.style.display = 'none';
            }
        });

        const subButtons = subButtonList.querySelectorAll('button');

        subButtons.forEach(function (subButton) {
            subButton.addEventListener('click', function () {
                
                subButton.style.backgroundColor = '#FF7233';
                subButton.style.Color = 'white';

                
                const previousSubButton = subButtonList.querySelector('.selected');
                if (previousSubButton && previousSubButton !== subButton) {
                    previousSubButton.style.backgroundColor = '#FFD6BD';
                }

                
                subButton.classList.add('selected');

                
                for (let i = 0; i < lastActivatedParent; i++) {
                    const previousParentButton = parentButtons[i].querySelector('button');
                    const previousSubButtonList = parentButtons[i].querySelector('.subButtonList');
                    previousSubButtonList.style.pointerEvents = 'none';
                    previousParentButton.style.backgroundColor = '#b7b7b7';
                }

                
                if (index < parentButtons.length - 1) {
                    const nextMainButton = parentButtons[index + 1].querySelector('button');
                    const nextSubButtonList = parentButtons[index + 1].querySelector('.subButtonList');
                    nextSubButtonList.style.display = 'block';
                    nextMainButton.style.backgroundColor = '#F48D52';
                    parentActivated = true;
                    lastActivatedParent = index + 1;
                }
            });
        });
    });
});
