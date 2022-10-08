var palabra = document.getElementById("areaPalabra"); 
let palabrasSecr = ["HTML","JAVA","REACT","FRONTEND","BACKEND"]; //Indice o lista de palabras 
let palabraDiv = "";
let intento;
let letrasOk = []; 
let letrasCorrectas = [];  
let letrasIncorrectas = [];
let vidas = 8; 
let aciertos = 0; 

const efecto1 = new Audio("sm64_coin.wav"); 
const efecto2 = new Audio("smb_bump.wav"); 
const efecto3 = new Audio("smb_stage_clear.wav") 
const efecto4 = new Audio("smb_gameover.wav")


window.onload = document.getElementById("menuJuego").style.display = "none"; 

function iniciarJuego() {
    
    document.getElementById("menuInicio").style.display = "none"; 
    document.getElementById("menuAgrPalabra").style.display = "none";
    document.getElementById("menuJuego").style.display = "inline-block"; 
    document.getElementById("areaPalabraError").innerHTML = "";
    seleccionarPalabra(); 
    baseHorca(); 
    transformarPalabra();
    separarPalabra(); 
    controlarLetra(); 
    console.log(palabrasSecr)
    
}

function seleccionarPalabra() { 
    let palabraSelec = palabrasSecr[Math.floor(Math.random()*palabrasSecr.length)]; 
    palabraDiv = palabraSelec; 
    console.log(palabraDiv)  
}  // Se selecciona una palabra al azar

function separarPalabra() {
    const pal = palabraDiv; 
    let letras = palabraDiv.split(""); 
    letrasOk = letras;  
    console.log(letras);
} 

function transformarPalabra() {
    for( i = 0; i < palabraDiv.length; i++) {
        letrasCorrectas[i] = "__";
    } 
 document.getElementById("areaPalabra").innerHTML = letrasCorrectas.join(" "); 
}
// Se separa la palabra y se las reemplaza por los guiones

/* Jugabilidad */ 

function controlarLetra () {
    document.onkeyup = function(evento) {
        intento = evento.key.toUpperCase(); 
        let encontrado = false; 
        for(i = 0; i < letrasOk.length; i++) {
            if(intento === letrasOk[i]) {
                letrasCorrectas[i] = intento; 
                document.getElementById("areaPalabra").innerHTML = letrasCorrectas.join(" "); 
                encontrado = true;  
                aciertos = aciertos + 1; 
                ganadorJuego();
                console.log(aciertos) 
                efecto1.play(); 
                efecto1.playbackReate = 1; 
            }
        } 
        if (encontrado) return;  
        else {
            letraIncorrecta()
        }
        
        function ganadorJuego() {
            if(aciertos === letrasOk.length) {
            generarMsjGanador(); 
            efecto3.play();
            efecto3.playbackRate = 1;
        } 
       
        } 
    }
}   
    function letraIncorrecta () {
        for(i = 0; i < 1 ; i++) {
            if(intento != letrasOk[i] && letrasIncorrectas.indexOf(intento) <= 0) { 
            letrasIncorrectas.push(intento); 
            document.getElementById("areaPalabraError").innerHTML = letrasIncorrectas.join(" ");   
            vidas = vidas - 1; 
            intentosFallidos(); 
            console.log(vidas) 
            console.log(intento) 
        }
        } 
        }
        

        function intentosFallidos() {
            for(vidasRestantes = vidas; vidasRestantes < 8 && vidasRestantes >= 0; vidasRestantes++) {
             if(vidasRestantes === 7) {
                dibujarAhorcado7(); 
                efecto2.play();
                console.log(vidasRestantes);
            } 
            else if(intento != letrasCorrectas && vidas === 6) {
                dibujarAhorcado6() 
            } 
            else if(intento != letrasCorrectas && vidas === 5) {
                dibujarAhorcado5() 
            }
            else if(intento != letrasCorrectas && vidas === 4) {
                dibujarAhorcado4() 
            }
            else if(intento != letrasCorrectas && vidas === 3) {
                dibujarAhorcado3() 
            }
            else if(intento != letrasCorrectas && vidas === 2) {
                dibujarAhorcado2() 
            } 
            else if(intento != letrasCorrectas && vidas === 1) {
                dibujarAhorcado1() 
            }
            else if (intento != letrasCorrectas && vidas === 0) {
                dibujarAhorcado0();
                generarMsjPerdedor(); 
                efecto4.play();
                break; 
            } 
        } 
    } 

    function reiniciar() {
        document.getElementById("areaPalabraError").innerHTML = "";
        letrasIncorrectas.length = letrasIncorrectas.length - letrasIncorrectas.length;
        quitarGuiones(); 
        controlarLetra(); 
        iniciarJuego(); 
        transformarPalabra(); 
        aciertos = 0; 
        intento = 0;  
        vidas = 8; 
        document.getElementById("msjGanador").innerHTML = ""; 
        document.getElementById("msjPerdedor").innerHTML = ""; 
        console.log(letrasIncorrectas)
        
    } 

    function rendicion() {
    efecto4.play();
    alert("Fin del juego, la palabra era " + palabraDiv);  
    document.getElementById("menuJuego").style.display= "none"; 
    document.getElementById("menuInicio").style.display = "inline-block"; 
    document.getElementById("menuAgrPalabra").style.display = "none";  
    document.getElementById("listaContainer").innerHTML = "";
        quitarGuiones() 
        aciertos = 0; 
        intento = 0;  
        vidas = 8; 

    } 

    function generarMsjGanador () {
    const nuevoMsj = document.createElement("p"); 
    const texto = document.createTextNode("Felicidades, Ganaste!!") 
    nuevoMsj.appendChild(texto) 

    const lista = document.getElementById("msjGanador"); 
    lista.insertBefore(nuevoMsj, lista.children[0]);
    } 

    function generarMsjPerdedor () {
        const nuevoMsj = document.createElement("p"); 
        const texto = document.createTextNode("Fin del Juego, la palabra era " + palabraDiv) 
        nuevoMsj.appendChild(texto) 
    
        const lista = document.getElementById("msjPerdedor"); 
        lista.insertBefore(nuevoMsj, lista.children[0]);
    }
