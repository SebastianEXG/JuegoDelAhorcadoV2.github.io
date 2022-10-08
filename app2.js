let nuevaPalabra = document.getElementById("area_nueva_palabra"); 
let listaPalabras = palabrasSecr; 
let listaSeparada;

console.log(listaPalabras) 
console.log(listaPalabras.length) 

function validarTexto(input, patron) {
    var texto = input.value 
    var letras = texto.split("") 
    for(var x in letras) {
        var letra = letras[x] 
        if(!(new RegExp(patron, "i")).test(letra)) {
            letras[x] = "";
        }
    }
    input.value = letras.join("")
}

var txtSoloLetras = document.getElementById("area_nueva_palabra") 
txtSoloLetras.addEventListener("input", function (event) {
    validarTexto(this, "[A-Z]")
})



function menuPalabras() {
    window.onload = document.getElementById("menuInicio").style.display="none";  
    window.onload = document.getElementById("menuAgrPalabra").style.display="inline-block";
    generarLista(); 
}


function añadirElemento() {
    let input = nuevaPalabra.value; 
    console.log(palabrasSecr) 
    if(input === "") {
    } 
    else {
    palabrasSecr.push(input.toUpperCase()); 
    añadirPalabra()
    limpiar() 
    } 
} 


function generarLista() {
    
    palabrasSecr.forEach((value, index) => {
    listaSeparada = palabrasSecr.slice(index, index+1) 
    console.log(listaSeparada)
    const nuevoNodo = document.createElement("li"); 
    const texto = document.createTextNode("⇨ " + listaSeparada) 
    nuevoNodo.appendChild(texto) 

    const lista = document.getElementById("listaContainer"); 
    lista.insertBefore(nuevoNodo, lista.children[0]);
   })
}



function limpiar() {
    nuevaPalabra.value = "";
} 

function limpiarLista() {
    let listaBorrar = listaSeparada; 
    while(listaBorrar.length > 0 ) {
        listaBorrar.pop();
        
    }  
    document.getElementById("listaContainer").innerHTML = "";
    
    
}

function añadirPalabra() {
    let input = nuevaPalabra.value.toUpperCase();
    const nuevoNodo = document.createElement("li"); 
    const texto = document.createTextNode("⇨ " + input) 
    nuevoNodo.appendChild(texto) 

    const lista = document.getElementById("listaContainer"); 
    lista.insertBefore(nuevoNodo, lista.children[0]);

}  

function quitarGuiones() {
    for( i = 0; i < palabraDiv.length; i++) {
        letrasCorrectas[i] = "";
    }  
    document.getElementById("areaPalabra").innerHTML = letrasCorrectas.join(" ");
    document.getElementById("areaPalabraError").innerHTML = "";
    
} 






