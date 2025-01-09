

document.addEventListener("DOMContentLoaded", function () {
    const evaluar = document.querySelector("#evaluar");
    const limpiar = document.querySelector("#limpiar");

    evaluar.addEventListener("click", function () {
      const notas = document.querySelectorAll('input[type="number"]');
      let valido = true;

      // Para evaluar el orden de los campos
      for (let i = 0; i < notas.length; i++) {
        if (!notas[i].checkValidity()) {
          notas[i].reportValidity();
          valido = false;  // Detiene la validación si un campo no es válido
          break;  // Sale del bucle al encontrar el primer campo vacío
        }
      }

      // Detiene el cálculo si algún campo está vacío
      if (!valido) return;

      // Calcular el promedio 
      let ep1 = parseFloat(notas[0].value) || 0;
      let ep2 = parseFloat(notas[1].value) || 0;
      let ep3 = parseFloat(notas[2].value) || 0;
      let ep4 = parseFloat(notas[3].value) || 0;
      let parcial = parseFloat(notas[4].value) || 0;
      let final = parseFloat(notas[5].value) || 0;

      let promedio =
        ep1 * 0.1 +
        ep2 * 0.1 +
        ep3 * 0.1 +
        ep4 * 0.1 +
        parcial * 0.3 +
        final * 0.3;

      let resultado = document.querySelector(".resultado");
      if (!resultado) {
        resultado = document.createElement("div");
        resultado.classList.add("resultado");
        resultado.style.textAlign = "center";
        resultado.style.marginTop = "20px";
        document
          .querySelector(".botones")
          .insertAdjacentElement("afterend", resultado);
      }

      resultado.innerHTML = `<p style="font-size: 1.5em; padding-top: 30px; padding-bottom: 30px">Tu promedio final es: <strong>${promedio.toFixed(
        2
      )}</strong></p>`;

      if (promedio >= 13) {
        resultado.innerHTML +=
          '<p style="color: green; font-weight: bold; font-size: 1.5em;">Aprobaste</p>';
      } else {
        resultado.innerHTML +=
          '<p style="color: red; font-weight: bold; font-size: 1.5em;">Desapruebas</p>';
      }
    });

    // Limpiar los campos
    limpiar.addEventListener("click", function () {
      document
        .querySelectorAll('input[type="number"]')
        .forEach((input) => (input.value = ""));
      let resultado = document.querySelector(".resultado");
      if (resultado) resultado.remove();
    });
  });
