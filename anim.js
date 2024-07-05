// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var playAudio =document.querySelector("#playAudio");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    {text: "this is what falling in love feels like", time: 15 },
    {text: "Feel like Sun", time: 19 },
    {text: "on my skin", time: 22 },
    {text: "so this is love", time: 25 },
    {text: "I know it is", time: 27 },
    {text: "I know it sounds super cliché", time: 28 },
    {text: "But you make me feel some type of way", time: 31 },
    {text: "This is falling", time: 34 },
    {text: "falling in love", time: 36 },
    {text: "I got a lot on my mind", time: 47 },
    {text: "Got some more on my plate", time: 48 },
    {text: "My baby got me looking forward to the end of the day", time: 49 },
    {text: "What you say?", time: 52 },
    {text: "You and me", time: 54 },
    {text: "Just forget about the past ", time: 55 },
    {text: "throw it in the trash", time: 57 },
    {text: "What you say?", time: 58 },
    {text: "You and me", time: 59 },
    {text: "Live the life we never had", time: 60 },
    {text: "like we're never going back", time: 62 },
    {text: "Feel like Sun", time: 64.8 },
    {text: "on my skin", time: 66 },
    {text: "So this is love", time: 66.6 },
    {text: "I know it is", time: 69 },
    {text: "I know it sounds super cliché", time: 69.6 },
    {text: "But you make me feel some type of way", time: 70.8 },
    {text: "This is fallin'", time: 72 },
    {text: "fallin' in love", time: 73.8 },
    {text: "I know it sounds super cliché", time: 75 },
    {text: "But you make me feel some type of way", time: 76.2 },
    {text: "This is falling", time: 77.4 },
    {text: " falling in love", time: 78.6 },
    {text: "Yeah", time: 82.8 },
    {text: "falling in love", time: 84.6 },
    {text: "falling in love.", time: 90.6 },
];

// Animar las letras
function updateLyrics () {
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 6
    );

    if (currentLine) {
        // calcula la opacidad basada en el tiempo en la línea actual
        var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
        var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

        // aplica el efecto de aparición 
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        // Restablece la opacidad y el contenido si no hay una línea actual
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation =
     "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
    setTimeout(function () {
        titulo.style.display = "none";
    }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);