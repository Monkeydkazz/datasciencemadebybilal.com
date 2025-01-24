document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll("#skills-list img"); // Liste des images
    const dynamicImage = document.getElementById("dynamic-image");
    let index = 0;

    // Fonction pour changer d'image
    function showSkill() {
        dynamicImage.style.opacity = 0; // Masquer l'image
        setTimeout(() => {
            dynamicImage.src = skills[index].src; // Mettre à jour la source de l'image
            dynamicImage.alt = skills[index].alt; // Mettre à jour l'attribut alt
            dynamicImage.style.opacity = 1; // Afficher l'image
            index = (index + 1) % skills.length; // Passer à l'image suivante
        }, 500); // Correspond au délai pour l'effet d'opacité
    }

    // Changer d'image toutes les 3 secondes
    setInterval(showSkill, 3000);

    // Lancer l'affichage initial
    showSkill();
});
