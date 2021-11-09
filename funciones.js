function Encender(){
    document.getElementById("img").src="Bombillo2.png";

}

function Apagar(){
    document.getElementById("img").src="Bombillo.png";

}

function CambiaVerde(){
    document.getElementById("fondo").style.backgroundColor="LightGreen";
    document.getElementById("conte").style.backgroundColor="LightGreen";

}

function CambiaBlanco(){
    document.getElementById("conte").style.backgroundColor="White";
    document.getElementById("fondo").style.backgroundColor="White";
    
}

function agregar(){
    var lista = document.getElementById("lista");
    var dato = document.getElementById("Dato").value;
    var li = document.createElement("li");
    li.textContent = dato;
    lista.appendChild(li);
}

function eliminar(){
    var lista = document.getElementById("lista");
    lista.removeChild(lista.lastElementChild);
}

