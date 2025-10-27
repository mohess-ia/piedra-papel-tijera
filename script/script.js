function eleccionMaquina() {
  let eleccion = Math.floor(Math.random() * 3);
  let eleccionMachine = "";
  switch (eleccion) {
    case 0:
      eleccionMachine = "piedra";
      break;
    case 1:
      eleccionMachine = "papel";
      break;
    case 2:
      eleccionMachine = "tijeras";
      break;
  }
  return eleccionMachine;
}

function eleccionJugador() {
  let eleccion = prompt("Que piensas elegir?\n1.Piedra\n2.Papel\n3.Tijeras").toLocaleLowerCase();
  return eleccion;
}

function jugarPartida() {
  let puntosHumano = 0;
  let puntosMaquina = 0;
  function jugarRonda(humano, maquina) {
    
    let ganadorRonda = "";
    if (humano == maquina) {
    } else if (humano == "tijeras" && maquina == "papel") {

      ganadorRonda = "Jugador";
    } else if (humano == "papel" && maquina == "piedra") {

      ganadorRonda = "Jugador";
    } else if (humano == "piedra" && maquina == "tijeras") {

      ganadorRonda = "Jugador";
    }else{
        ganadorRonda = "Maquina";
    }

    if(ganadorRonda == "Jugador"){
      puntosHumano+=1
     
    }else if(ganadorRonda == "Maquina"){
      puntosMaquina+=1
      
    }

    if (humano == maquina) {
      alert(
        `HABEIS EMPATADO!\nEleccion Jugador: ${humano} y ${puntosHumano}pts\nEleccion Maquina: ${maquina} y ${puntosMaquina}pts`
      )} else {
      alert(
        `HA GANADO ${ganadorRonda}\nEleccion Jugador: ${humano} y ${puntosHumano}pts\nEleccion Maquina: ${maquina} y ${puntosMaquina}pts`
      )
    }
    
  }

  jugarRonda(eleccionJugador(), eleccionMaquina());
  jugarRonda(eleccionJugador(), eleccionMaquina());
  jugarRonda(eleccionJugador(), eleccionMaquina());
  jugarRonda(eleccionJugador(), eleccionMaquina());
  jugarRonda(eleccionJugador(), eleccionMaquina());


}

jugarPartida()