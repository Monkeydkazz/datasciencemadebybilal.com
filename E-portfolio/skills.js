<script>
    // Fonction pour afficher les compétences de manière dynamique
    document.addEventListener("DOMContentLoaded", function () {
        const skills = document.querySelectorAll("#skills-list li"); // Liste des compétences
        const displaySkill = document.getElementById("dynamic-skill");
        let index = 0;

        // Fonction pour changer de compétence
        function showSkill() {
            displaySkill.style.opacity = 0; // Masquer l'élément
            setTimeout(() => {
                displaySkill.textContent = skills[index].textContent; // Changer le texte
                displaySkill.style.opacity = 1; // Afficher l'élément
                index = (index + 1) % skills.length; // Passer à l'élément suivant
            }, 500);
        }

        // Changer de compétence toutes les 3 secondes
        setInterval(showSkill, 3000);

        // Lancer l'affichage initial
        showSkill();
    });
</script>
