import * as THREE from 'three';

export function createBillboard(scene, text, position) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Set initial font size and measure text width
    const fontSize = 32;
    context.font = `${fontSize}px Arial`;
    const textWidth = context.measureText(text).width;

    // Adjust canvas size dynamically
    canvas.width = textWidth + 20; // Add some padding
    canvas.height = fontSize + 20;

    // Redraw background
    context.fillStyle = 'rgb(205, 11, 195)'; // Semi-transparent background
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Redraw text centered
    context.fillStyle = 'white';
    context.font = `${fontSize}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    // Create texture
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });

    // Disable fog for the billboard
    material.fog = false;

    // Create sprite (billboard effect)
    const billboard = new THREE.Sprite(material);
    billboard.position.set(position.x, position.y, position.z);

    // Scale the billboard based on text size
    billboard.scale.set(textWidth / 80, fontSize / 40, 1);

    scene.add(billboard);
    return billboard;
}
