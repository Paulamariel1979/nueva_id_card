const app = document.getElementById("typewriter");


const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter

    .typeString("cerca de tí y tu equipo")
    .pauseFor(200)
    .start();