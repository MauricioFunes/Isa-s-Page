const cube = document.getElementById("cube");
const wishesContainer = document.getElementById("wishes");
const typingText = document.getElementById("typing-text");

function startCubeAnimation() {
  setTimeout(() => {
    cube.style.animation = "rotateCube 12s infinite";
  }, 500);
}

const messages = [
  "Feliz San Valentín, mi amor💕 Desde que estás en mi vida, me siento acompañado y todo es bello a tu lado. No necesito una fecha especial para recordarte el cariño que te tengo, pero hoy aprovecho para decirte que sos mi persona favorita. Gracias por compartir risas, abrazos y momentos conmigo. Te elijo siempre💖 (tambien si te convirtieras en un gusanito😗)",
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenMessages = 1500;

function type() {
  const currentMessage = messages[messageIndex];

  if (isDeleting) {
    typingText.innerHTML = currentMessage.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(type, delayBetweenMessages);
    } else {
      setTimeout(type, deletingSpeed);
    }
  } else {
    typingText.innerHTML = currentMessage.substring(0, charIndex++);
    if (charIndex > currentMessage.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenMessages);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

setTimeout(type, 2000);
startCubeAnimation();

function createFlower() {
  const flower = document.createElement("img");
  flower.src = "img/dia.png"; // URL de flor, podés cambiarla
  flower.classList.add("flower");

  const size = Math.random() * 20 + 30; // Tamaño entre 10px y 30px
  flower.style.width = `${size}px`;
  flower.style.height = `${size}px`;

  flower.style.left = `${Math.random() * 100}vw`;
  flower.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración entre 2 y 5 segundos

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 5000); // Remover después de la animación
}

setInterval(createFlower, 300);
