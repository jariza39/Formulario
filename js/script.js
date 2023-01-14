const nombreInput = document.getElementById("nombre");
const nombreTooltip = document.getElementById("mensaje");
nombreInput.oninput = function () {
  if (
    !/^[A-ZÁÉÍÓÚ][a-záéíóú]*( [A-ZÁÉÍÓÚ][a-záéíóú]*){2,}$/.test(
      nombreInput.value
    )
  ) {
    nombreInput.classList.add("is-invalid");
    nombreInput.classList.remove("is-valid");
    nombreTooltip.style.display = "block";
  } else {
    nombreInput.classList.add("is-valid");
    nombreInput.classList.remove("is-invalid");
    nombreTooltip.style.display = "none";
  }
};

const cedulaInput = document.getElementById("cedula");
const cedulaTooltip = document.getElementById("mensaje2");
cedulaInput.oninput = function () {
  if (cedulaInput.value <= 1000000000) {
    cedulaInput.classList.add("is-invalid");
    cedulaInput.classList.remove("is-valid");
    cedulaTooltip.style.display = "block";
  } else {
    cedulaInput.classList.add("is-valid");
    cedulaInput.classList.remove("is-invalid");
    cedulaTooltip.style.display = "none";
  }
};

const correoInput = document.getElementById("correo");
const correoTooltip = document.getElementById("mensaje3");
correoInput.oninput = function () {
  if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correoInput.value)
  ) {
    correoInput.classList.add("is-invalid");
    correoInput.classList.remove("is-valid");
    correoTooltip.style.display = "block";
  } else {
    correoInput.classList.add("is-valid");
    correoInput.classList.remove("is-invalid");
    correoTooltip.style.display = "none";
  }
};

const telefonoInput = document.getElementById("telefono");
const telefonoTooltip = document.getElementById("mensaje4");
telefonoInput.oninput = function () {
  if (!/^3\d{9}$/.test(telefonoInput.value)) {
    telefonoInput.classList.add("is-invalid");
    telefonoInput.classList.remove("is-valid");
    telefonoTooltip.style.display = "block";
  } else {
    telefonoInput.classList.add("is-valid");
    telefonoInput.classList.remove("is-invalid");
    telefonoTooltip.style.display = "none";
  }
};

const operacionInput = document.getElementById("operacion");
const operacionTooltip = document.getElementById("mensaje5");
operacionInput.oninput = function () {
  if (!/^\d+([+\-*/]\d+)+$/.test(operacionInput.value)) {
    operacionInput.classList.add("is-invalid");
    operacionInput.classList.remove("is-valid");
    operacionTooltip.style.display = "block";
  } else {
    operacionInput.classList.add("is-valid");
    operacionInput.classList.remove("is-invalid");
    operacionTooltip.style.display = "none";
  }
};

function suma() {
  event.preventDefault();
  const operacion = document.getElementById("operacion").value;
  $.ajax({
    type: "get",
    url: "http://api.mathjs.org/v4/?expr=" + encodeURIComponent(operacion),
    contentType: "application/json",
    success: function (result) {
      document.getElementById("resultado").innerHTML = parseFloat(result);
    },
    error: function (resp) {
      console.log(error);
    },
  });
}

document.getElementById("form").addEventListener("submit", function (e) {
  let isValid = true;

  const inputs = document.querySelectorAll("#form .form-control");
  inputs.forEach((input) => {
    if (!input.classList.contains("is-valid")) {
      isValid = false;
    }
  });

  if (!isValid) {
    e.preventDefault();

    alert(
      "Por favor, complete todos los campos correctamente antes de enviar el formulario."
    );
  } else {
    e.preventDefault();
    alert("Formulario enviado correctamente");
  }
});
