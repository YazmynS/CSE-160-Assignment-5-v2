import * as THREE from 'three';

export function createBillboard(scene, text, position) {
    //Creater Canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Cretae font/text
    const fontSize = 32;
    context.font = `${fontSize}px Arial`;
    const textWidth = context.measureText(text).width;

    // Adjust size dynamically w/ padding
    canvas.width = textWidth + 20; 
    canvas.height = fontSize + 20;

    // Get Background Color
    context.fillStyle = 'rgb(205, 11, 195)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Get Text Information
    context.fillStyle = 'white';
    context.font = `${fontSize}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    // Create texture
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });

    // Remove Fog
    material.fog = false;

    // Create Billboard
    const billboard = new THREE.Sprite(material);
    billboard.position.set(position.x, position.y, position.z);
    billboard.scale.set(textWidth / 80, fontSize / 40, 1);

    scene.add(billboard);
    return billboard;
}
