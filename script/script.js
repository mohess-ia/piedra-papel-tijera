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
  if (eleccion == "" || eleccion == !isNaN(eleccion)) {
    alert("ERROR!");
  } else if (!["piedra", "papel", "tijeras"].includes(eleccion))
  {
    alert("ERROR!");
  }
  return eleccion;
}

function jugarPartida() {
  let puntosHumano = 0;
  let puntosMaquina = 0;
  function jugarRonda(humano, maquina) {
    
    let ganadorRonda = "";
    if (humano == maquina) {
    } else if (humano == "tijeras" && maquina == "papel") {
      puntosHumano += 1;
      ganadorRonda = "Jugador";
    } else if (humano == "papel" && maquina == "piedra") {
      puntosHumano += 1;
      ganadorRonda = "Jugador";
    } else if (humano == "piedra" && maquina == "tijeras") {
      puntosHumano += 1;
      ganadorRonda = "Jugador";
    } else if (!["piedra", "papel", "tijeras"].includes(humano)){
        alert("ERROR!")
    }else{
        puntosMaquina += 1;
        ganadorRonda = "Maquina";
    }

    if (humano == maquina) {
      alert(
        `HABEIS EMPATADO!\nEleccion Jugador: ${humano} y ${puntosHumano}pts\nEleccion Maquina: ${maquina} y ${puntosHumano}pts`
      );
    } else {
      alert(
        `HA GANADO ${ganadorRonda}\nEleccion Jugador: ${humano} y ${puntosHumano}pts\nEleccion Maquina: ${maquina} y ${puntosHumano}pts`
      );
    }
  }

  jugarRonda(eleccionJugador(), eleccionMaquina());
  jugarRonda(eleccionJugador(), eleccionMaquina());
  jugarRonda(eleccionJugador(), eleccionMaquina());
  jugarRonda(eleccionJugador(), eleccionMaquina());
  jugarRonda(eleccionJugador(), eleccionMaquina());


}

jugarPartida()