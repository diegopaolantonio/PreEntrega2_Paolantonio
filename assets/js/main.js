alert("Cotizador de costo mensual de mano de obra de EXPERTO INGENIERIA");

let seguir = true;
let trabajo = 0;
let cantidad = 0;
let opcionTiempo = 0;
let dias = 0;
let precio = 0;
let herramientas = 0;
let costo = 0;
let horas = 0;
let trabajoString;

let dato = 0;
let min = 0;
let max = 0;
let repetir = true;

function costoHora(trabajo) {
  if (trabajo == 1) {
    precio = 20;
    trabajoString = "Programador";
  } else if (trabajo == 2) {
    precio = 15;
    trabajoString = "Electricista";
  } else if (trabajo == 3) {
    precio = 14;
    trabajoString = "Asistencia Tecnica";
  } else if (trabajo == 4) {
    precio = 0;
    trabajoString = "Indefinido";
  }

  return precio;
}

function controlarNumero(dato, min = 0, max = 0) {
  if (isNaN(dato) || dato == 0) {
    repetir = true;
  } else if ((dato < min || dato > max) && min != 0 && max != 0) {
    repetir = true;
  } else {
    repetir = false;
  }
  return repetir;
}

do {
  trabajo = Number(
    prompt(
      "Tipo de trabajo: 1-Programacion, 2-Electricidad, 3-Asistencia tecnica, 4-Finalizar",
      0
    )
  );
} while (controlarNumero(trabajo, 1, 4));

do {
  if (trabajo == 1) {
    herramientas = String(prompt("Llevar computadora propia?"));
  } else if (trabajo == 2) {
    herramientas = String(prompt("Llevar herramientas propias?"));
  } else if (trabajo == 3) {
    alert("No se asiste con herramientas ni computadora");
    herramientas = "no";
  }

  if (
    herramientas == "si" ||
    herramientas == "Si" ||
    herramientas == "SI" ||
    herramientas == "sI"
  ) {
    herramientas = "Si";
  } else if (
    herramientas == "no" ||
    herramientas == "No" ||
    herramientas == "NO" ||
    herramientas == "nO"
  ) {
    herramientas = "No";
  }
} while (herramientas != "Si" && herramientas != "No");

precio = costoHora(trabajo);

if (herramientas == "Si") {
  precio = precio * 1.25;
}

if (trabajo != 4) {
  do {
    cantidad = Number(prompt("Cantidad de personas que necesita: ", 0));
  } while (controlarNumero(cantidad));
  do {
    opcionTiempo = Number(
      prompt("Tiempo que necesitara es en: 1-dias, 2-meses", 0)
    );
  } while (controlarNumero(opcionTiempo, 1, 2));

  if (opcionTiempo == 1) {
    do {
      dias = Number(prompt("Cantidad de dias que necesitara el personal: ", 0));
    } while (controlarNumero(dias));
  } else if (opcionTiempo == 2) {
    do {
      dias = Number(
        prompt("Cantidad de meses que necesitara el personal: ", 0)
      );
    } while (controlarNumero(dias));

    dias = dias * 24;
  }

  do {
    horas = Number(prompt("Horas diarias de la jornada laboral promedio", 0));
  } while (controlarNumero(horas));

  costo = dias * precio * cantidad * horas;

  alert ("Costo total: USD " + costo);
}

console.log("Cantidad de personas: " + cantidad);
console.log("Computadora/Herramientas propias: " + herramientas);
console.log("Cantidad de dias " + dias);
console.log("Horas de trabajo por dia " + horas);
console.log("Precio hora de trabajo " + precio);
console.log("Costo total " + costo);

document.write("<p>Datos introducidos:</p>");
document.write("<ul>");
document.write("<li>Tipo de trabajo: " + trabajoString + "</li>");
document.write("<li>Cantidad de personas: " + cantidad + "</li>");
document.write(
  "<li>Computadora/Herramientas propias: " + herramientas + "</li>"
);
document.write("<li>Cantidad de dias: " + dias + "</li>");
document.write("<li>Jornada laboral de " + horas + " horas</li>");
document.write("<li>Precio por hora USD " + precio + "</li>");
document.write("</ul>");
document.write("<h2>El costo total es de: USD " + costo + "</h2>");
