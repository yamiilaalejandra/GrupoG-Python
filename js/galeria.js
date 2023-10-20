const botonAside = document.querySelector(".boton-aside");
const aside = document.querySelector(".esconder");

function openAside(){
    if(aside.style.display === "none"){
        aside.style.display = "block";
    }else{
        aside.style.display = "none";
    }
}