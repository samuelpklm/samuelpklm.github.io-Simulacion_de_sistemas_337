let aleatorio = 0;
let aleatoriofaltas = 0;

let reservaciones = [];
let inasistencias = [];
let habitaciones = [];

$(document).ready(function() {
 
  $("#boton-simular").click(function(){

  

    $("#cuerpo-tabla").addClass("widthm10");
    $("#tableGeneral tbody tr").remove();
    $("#tablaReservaciones tbody tr").remove();
    $("#tablaInasistencias tbody tr").remove();
    $("#tablaHabitaciones tbody tr").remove();
   

    let n = $("#ciclo").val();

    simulacion(n);
    let frecuenciaReservaciones = reservacionesDiarias();
    let frecuenciaInasistencia = inasistenciasDiarias();
    let frecuenciaHabitaciones = habitacionesDiarias();

    
    for (let i = 0; i < n; i++) {
      $("#tableGeneral tbody").append(`<tr><td class="column1">${i + 1}</td><td class="column2">${reservaciones[i]}</td><td class="column3">${inasistencias[i]}</td><td class="column4">${habitaciones[i]}</td></tr>`);
    }

    for (let i = 0, r = 96; i < 10; i++,r++) {
      $("#tablaReservaciones tbody").append(`<tr><td class="column1-r">${r}</td><td class="column2-r">${frecuenciaReservaciones[i]}</td><td class="column3-r">${frecuenciaReservaciones[i]} / ${n}</td><td class="column4-r">${((frecuenciaReservaciones[i] * 100)/n).toFixed(2)}%</td></tr>`);
    }

    for (let i = 0; i <= 5; i++) {
      $("#tablaInasistencias tbody").append(`<tr><td class="column1-r">${i}</td><td class="column2-r">${frecuenciaInasistencia[i]}</td><td class="column3-r">${frecuenciaInasistencia[i]} / ${n}</td><td class="column4-r">${((frecuenciaInasistencia[i] * 100)/n).toFixed(2)}%</td></tr>`);
    }

    for (let i = 0, r = -5; i < 15; i++, r++) {
      $("#tablaHabitaciones tbody").append(`<tr><td class="column1-r">${r}</td><td class="column2-r">${frecuenciaHabitaciones[i]}</td><td class="column3-r">${frecuenciaHabitaciones[i]} / ${n}</td><td class="column4-r">${((frecuenciaHabitaciones[i] * 100)/n).toFixed(2)}%</td></tr>`);
    }
   
     $("#tableGeneral").slideDown();
     $("#tablaReservaciones").slideDown();
     $("#tablaInasistencias").slideDown();
     $("#tablaHabitaciones").slideDown();
    
    if($("#tableGeneral #cuerpo-tabla").height() > 585){
      $("#tableGeneral #cuerpo-tabla").removeClass("widthm10");
    }

  });
 
  
  });

  function simulacion(n){

     reservaciones = [];
     inasistencias = [];
     habitaciones = [];  

    for (let i = 0; i < n; i++) {
     
      aleatorio = Math.floor((Math.random() * (105 - 96 + 1)) + 96);
      reservaciones.push(aleatorio);

      aleatoriofaltas = Math.floor(Math.random() * (100 - 0 + 1) +0);
      if(aleatoriofaltas >= 0 && aleatoriofaltas <= 10){
        aleatoriofaltas = 0;
      }else if(aleatoriofaltas > 10 && aleatoriofaltas <= 30){
        aleatoriofaltas = 1;
      } else if(aleatoriofaltas > 30 && aleatoriofaltas <= 55){
        aleatoriofaltas = 2;
      }else if(aleatoriofaltas > 55 && aleatoriofaltas <= 85){
        aleatoriofaltas = 3;
      }else if(aleatoriofaltas > 85 && aleatoriofaltas <= 95){
        aleatoriofaltas = 4;
      }else if(aleatoriofaltas > 95 && aleatoriofaltas <= 100){
        aleatoriofaltas = 5;
      }
       inasistencias.push(aleatoriofaltas);

       habitaciones.push(100 - aleatorio + aleatoriofaltas);

    }

    return "fin";
  }

  function reservacionesDiarias(){
    let arreglo = [];
    let reserva = 96;

    for(let i = 0; i < 10; i++){
      arreglo[i] = 0;
      for (let j = 0; j < reservaciones.length; j++) {
        if(reservaciones[j] == reserva)
        arreglo[i] += 1;
      }
      reserva += 1;
    }

    return arreglo;
  }

  function inasistenciasDiarias(){
    let arreglo = [];
    let inasis = 0;

    for(let i = 0; i <= 5; i++){
      arreglo[i] = 0;
      for (let j = 0; j < inasistencias.length; j++) {
        if(inasistencias[j] == inasis)
        arreglo[i] += 1;
      }
      inasis += 1;
    }

    return arreglo;
  }

  function habitacionesDiarias(){
    let arreglo = [];
    let habi = -5;

    for(let i = 0; i < 15; i++){
      arreglo[i] = 0;
      for (let j = 0; j < habitaciones.length; j++) {
        if(habitaciones[j] == habi)
        arreglo[i] += 1;
      }
      habi += 1;
    }

    return arreglo;
  }

