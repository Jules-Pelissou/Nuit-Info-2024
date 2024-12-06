const cursor = document.querySelector('.custom-cursor');
if (!cursor) {
    // Créer une nouvelle div
    cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    // Ajouter l'élément au body
    document.body.appendChild(cursor);
}
let lastX = 0;
let lastY = 0;

let currentAngle = 0;

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    cursor.style.left = `${clientX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${clientY - cursor.offsetHeight / 2}px`;

    const deltaX = clientX - lastX;
    const deltaY = clientY - lastY;
    if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
        const targetAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); 

        currentAngle = lerp(currentAngle, targetAngle, 0.1);

        cursor.style.transform = `rotate(${currentAngle}deg)`;

        lastX = clientX;
        lastY = clientY;
    }
});

function lerp(start, end, alpha) {
    return start + (end - start) * alpha;
}

const clickables = document.querySelectorAll('.clickable');

clickables.forEach(clickable => {
    clickable.addEventListener('mouseover', () => {
        cursor.style.backgroundImage = "url('images/red_submarine_tout_petit.png')";
    });

    clickable.addEventListener('mouseout', () => {
        cursor.style.backgroundImage = "url('images/yellow_submarine_tout_petit.png')";
    });
});
