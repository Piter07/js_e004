
//Variable para saber el turno de que jugador es
var jugador = new Array()
var sim =new Array()
var casillas = new Array(" "," "," "," "," "," "," "," "," ")
var turno 


function submitForm(event){
    event.preventDefault();
    window.history.back();
}
function cambiarVentana(){
    var aux1 = document.getElementById("b1")
    var aux2 = document.getElementById("b2")
    aux1.id = "b2"
    aux2.id = "b1"
}
function empezarNuevo(){
    casillas = new Array(" "," "," "," "," "," "," "," "," ")
    for( let j = 0 ; j < 9; j++){
        aux = document.getElementById(j)
        aux.value = " " 
    }
    cambiarVentana()
}


function guardarJugadores(){
    var datos
    //Establecer que el nombre del jugador 1 junto con el simbolo que utilizara
    auxJ = document.getElementById("J1")
    auxS = document.getElementById("S1")
    jugador[0] = auxJ.value
    sim[0] = auxS.value

    //Establecer que el nombre del jugador 2 junto con el simbolo que utilizara
    auxJ = document.getElementById("J2")
    auxS = document.getElementById("S2")
    jugador[1] = auxJ.value
    sim[1] = auxS.value
    turno = 0
    cambiarVentana()


}

function cambiarTurno(){
    turno++
    if(turno == 2)
        turno = 0
    aux = document.getElementById("turno")
    aux.innerHTML = jugador[turno] 
}
async function marcarCasilla(id){
    await marcarCasilla2(id)
    await finJuego()

}

async function marcarCasilla2(id){
    var aux = document.getElementById(id)
    if(casillas[parseInt(id)] == " "){
        casillas[parseInt(id)] =  sim[turno]
        aux.value = sim[turno]
        cambiarTurno()
    }
    
}

async function finJuego(){

    for(let i = 0 ; i < 7; i = i+3){
        if(casillas[i] != " "){
            if( casillas[i] == casillas[i+1] && casillas[i+2] == casillas[i+1]){
                alert("El ganador es :" + jugador[turno]) 
                return
            }
            if(casillas[i] == casillas[i+3] && casillas[i+6] == casillas[i+3]){
                alert("El ganador es :" + jugador[turno])
                return
            }
        }
    }
    if(casillas[4] != " "){
        if(casillas[0] == casillas[4] && casillas[4] == casillas[8]){
            alert("El ganador es :" + jugador[turno])
            return
        }
        if(casillas[2] == casillas[4] && casillas[4] == casillas[6]){
            alert("El ganador es :" + jugador[turno])
            return
        }
    }
    var j
    var cont = 0
    for( j = 0 ; j < 9; j++){
        if(casillas[j] != " " )
            cont++
    }
    if(cont == j)
        alert("Termino en empate")

}