document.addEventListener('DOMContentLoaded', function () {
    const parentButtons = document.querySelectorAll('.parentButton');
    let lastActivatedParent = null;

    parentButtons.forEach(function (button, index) {
        const mainButton = button.querySelector('button');
        const subButtonList = button.querySelector('.subButtonList');
        let parentActivated = false;

        mainButton.addEventListener('click', function () {
            if (!parentActivated) {
                // Vérifier si un bouton parent a déjà été activé
                if (lastActivatedParent !== null) {
                    // Si oui, ne rien faire
                    return;
                }

                // Activer le bouton parent et afficher la liste de boutons fils
                subButtonList.style.display = 'block';
                //mainButton.style.backgroundColor = '#b7b7b7';
                parentActivated = true;
                lastActivatedParent = index;

                // Désactiver les autres boutons parents et cacher leurs listes de boutons fils
                parentButtons.forEach(function (otherButton, otherIndex) {
                    if (index !== otherIndex) {
                        const otherMainButton = otherButton.querySelector('button');
                        const otherSubButtonList = otherButton.querySelector('.subButtonList');
                        otherSubButtonList.style.display = 'none';
                        otherMainButton.style.backgroundColor = '#b7b7b7';
                    }
                });
            } else {
                // Cacher la liste de boutons fils du bouton parent actuel
                subButtonList.style.display = 'none';

                // Changer la couleur du bouton parent actuel
              //  mainButton.style.backgroundColor = '#3498db';
            }
        });

        // Ajouter des événements pour les boutons fils (si nécessaire)
        const subButtons = subButtonList.querySelectorAll('button');

        subButtons.forEach(function (subButton) {
            subButton.addEventListener('click', function () {
                // Changer la couleur du bouton parent actuel
             //   mainButton.style.backgroundColor = '#3498db';

                // Passer automatiquement au bouton parent suivant (s'il existe)
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