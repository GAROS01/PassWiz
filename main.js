const cantidad = document.getElementById("cantidad");
const btnGenerar = document.getElementById("generar");
const resultado = document.getElementById("contrasena");
const btnCopiar = document.getElementById("copiar");
const btnLimpiar = document.getElementById("limpiar");
const parrafo = document.getElementById("parrafo");

const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

btnGenerar.addEventListener("click", () => {
  let contrasena = "";
  let longitud = parseInt(cantidad.value);

  if (longitud < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  for (let i = 0; i < cantidad.value; i++) {
    contrasena += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }

  resultado.value = contrasena;

  if (esContrasenaFuerte(contrasena)) {
    parrafo.style.color = "green";
    parrafo.textContent = "La contraseña es fuerte.";
  } else {
    parrafo.style.color = "red";
    parrafo.textContent = "La contraseña no es fuerte.";
  }
});

btnCopiar.addEventListener("click", () => {
  navigator.clipboard
    .writeText(resultado.value)
    .then(() => {
      alert("Contraseña copiada al portapapeles");
    })
    .catch((err) => {
      alert("Error al copiar la contraseña: ", err);
    });
});

btnLimpiar.addEventListener("click", () => {
  cantidad.value = "";
  resultado.value = "";
  parrafo.textContent = "";
});

function esContrasenaFuerte(contrasena) {
  const tieneMayuscula = /[A-Z]/.test(contrasena);
  const tieneMinuscula = /[a-z]/.test(contrasena);
  const tieneNumero = /[0-9]/.test(contrasena);
  const tieneEspecial = /[!@#$%^&*()]/.test(contrasena);

  return tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;
}
