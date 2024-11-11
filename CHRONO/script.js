// Date du prétest : 4 Novembre 2024 à 00:00:00
const testDate = new Date('Nov 18, 2024 00:00:00').getTime();

// Fonction de mise à jour du chronomètre toutes les secondes
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = testDate - now;

    // Calcul des jours, heures, minutes et secondes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Affichage des résultats
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Si la date est passée
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "Le Prétest est en cours!";
    }
}, 1000);
