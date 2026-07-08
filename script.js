
let paso=0;

const boton=document.getElementById("boton");
const titulo=document.getElementById("titulo");
const texto=document.getElementById("texto");
const foto=document.getElementById("foto");
const contador=document.getElementById("contador");
const musica=document.getElementById("musica");

boton.onclick=function(){

musica.volume = 0.5;

musica.play().catch(error => {
    console.log(error);
});

paso++;

if(paso==1){

titulo.innerHTML="";

foto.style.display="block";

setTimeout(()=>{
    foto.style.opacity="1";
},10);

texto.innerHTML="";

boton.style.display="none";

setTimeout(carta,3000);

}

}

function carta(){

foto.style.display="none";

let mensaje=`Hola wawita mia ❤️

Quería hacerte un pequeño regalo.

No será el más caro.

Pero está hecho con todo mi amor.

Gracias por hacerme sonreír.

Gracias por estar conmigo.

Gracias por formar parte de mi mente a diario.

Te quiero <3`;

let i=0;

function escribir(){

if(i<mensaje.length){

texto.innerHTML+=mensaje.charAt(i);

i++;

setTimeout(escribir,40);

}else{

crearBoton();

}

}

escribir();

}

function crearBoton(){

let b=document.createElement("button");

b.innerHTML="¿Sabes cuánto te quiero?";

document.getElementById("pantalla").appendChild(b);

b.onclick=function(){

b.remove();

texto.innerHTML="";

contar();

}

}

function contar(){

let numeros=[1,5,20,25,50,75,100,200,300,400,500,600,700,800,900,1000,10000,100000,1000000,999999999];

let i=0;

let intervalo=setInterval(()=>{

contador.innerHTML=numeros[i];

i++;

if(i==numeros.length){

clearInterval(intervalo);

setTimeout(final,1000);

}

},300);

}

function final(){

    contador.innerHTML="∞";

    setTimeout(()=>{

        titulo.innerHTML='<span class="corazonFinal">❤️</span>';

        texto.innerHTML=`
No existe un número

con el que sea capaz de expresar

todo lo que siento por ti.

❤️

Gracias por estos 3 meses contigo.

Te amo.`;
        

        lluvia();

    },2000);

}

function lluvia(){

setInterval(()=>{

let c=document.createElement("div");

c.className="corazon";

c.innerHTML="❤️";

// Posición horizontal aleatoria
c.style.left=Math.random()*100+"vw";

// Distintos tamaños
let tamaño=20+Math.random()*35;
c.style.fontSize=tamaño+"px";

// Que empiecen desde distintas alturas
c.style.top=(-Math.random()*500)+"px";

// Duración distinta
c.style.animationDuration=(3+Math.random()*3)+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},6000);

},120);

}
