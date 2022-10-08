
var papel = document.getElementById("area_de_dibujo").getContext("2d"); 


const strokeSty = "#ff6666";
const lineWidth = 8; 
const lineWidthP = 10; 

/* Base */

function baseHorca() {
    papel.lineWidth = 8;
    papel.lineCap = "round"; 
    papel.lineJoin = "round"; 
    papel.fillStyle = "#C68ef5";
    papel.strokeStyle = strokeSty; 

    papel.fillRect(0,0,400,400); 
    papel.beginPath();
    papel.moveTo(50,350); 
    papel.lineTo(200,350); 
    papel.stroke(); 
    papel.closePath; 
} 

/*Funciones de la Horca*/ 

function dibujarAhorcado7() {
    papel.beginPath(); 
    papel.strokeStyle = strokeSty; 
    papel.lineWidth = lineWidth; 
    papel.moveTo(100, 350); 
    papel.lineTo(100, 50); 
    papel.stroke(); 
    papel.closePath;
  
}  // 7 vidas

 function dibujarAhorcado6() {
    papel.beginPath(); 
    papel.strokeStyle = strokeSty; 
    papel.lineWidth = lineWidth; 
    papel.moveTo(97, 50); 
    papel.lineTo(250, 50); 
    papel.lineTo(250,70);
    papel.stroke(); 
    papel.closePath;
  
}  // 6 vidas

function dibujarAhorcado5() {
    papel.beginPath(); 
    papel.strokeStyle = strokeSty; 
    papel.lineWidth = lineWidth; 
    papel.arc(250 , 90 , 25, 0, 2*Math.PI); 
    papel.fillStyle = strokeSty;
    papel.fill(); 
    papel.stroke(); 
    
}  // 5 vidas
 
function dibujarAhorcado4() {
    papel.beginPath(); 
    papel.strokeStyle = strokeSty; 
    papel.lineWidth = lineWidthP; 
    papel.moveTo(250, 250); 
    papel.lineTo(250, 100); 
    papel.stroke(); 
    papel.closePath;
  
}  // 4 vidas
 
function dibujarAhorcado3() {
    papel.beginPath(); 
    papel.strokeStyle = strokeSty; 
    papel.lineWidth = lineWidthP; 
    papel.moveTo(250, 250); 
    papel.lineTo(300, 300); 
    papel.stroke(); 
    papel.closePath;
  
}  // 3 vidas

function dibujarAhorcado2() {
    papel.beginPath(); 
    papel.strokeStyle = strokeSty; 
    papel.lineWidth = lineWidthP; 
    papel.moveTo(250, 250); 
    papel.lineTo(200, 300); 
    papel.stroke(); 
    papel.closePath;
  
}  // 2 vidas

function dibujarAhorcado1() {
    papel.beginPath(); 
    papel.strokeStyle = strokeSty; 
    papel.lineWidth = lineWidthP; 
    papel.moveTo(250, 150); 
    papel.lineTo(220, 230); 
    papel.stroke(); 
    papel.closePath;
  
}  // 1 vida

function dibujarAhorcado0() {
    papel.beginPath(); 
    papel.strokeStyle = strokeSty; 
    papel.lineWidth = lineWidthP; 
    papel.moveTo(250, 150); 
    papel.lineTo(280, 230); 
    papel.stroke(); 
    papel.closePath;
  
}  // Game Over

