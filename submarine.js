const cursor = document.querySelector('.custom-cursor');
let lastX = 0; // Dernière position X de la souris
let lastY = 0; // Dernière position Y de la souris

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    // Positionne le curseur au centre de l'image
    cursor.style.left = `${clientX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${clientY - cursor.offsetHeight / 2}px`;

    // Calcule l'angle de rotation
    const deltaX = clientX - lastX;
    const deltaY = clientY - lastY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Convertir en degrés

    // Applique la rotation
    cursor.style.transform = `rotate(${angle}deg)`;

    // Met à jour la dernière position
    lastX = clientX;
    lastY = clientY;
});