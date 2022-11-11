const ticket = 200;

const nombre = document.getElementById("nombre");

const apellido = document.getElementById("apellido");

const email = document.querySelector("cantidaddetickets");

const categorias = document.querySelector("categorias");

const pago = document.querySelector("pago");


const btnBorrar =  document.querySelector("btnBorrar");

const btnResumen = document.querySelector("btnResumen");


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
	apellido: false,
	email: false,
}



btnBorrar.addEventListener("click", borrar);
btnCalcular.addEventListener("click", mostrarTotal);

function borrar() {
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  cantidad.value = "";
  totalPago.textContent = "";
}

function calcularDescuento() {
  switch (categoria.value) {
    case "0":
      return 1;
    case "1":
      return 0.8;
    case "2":
      return 0.5;
    case "3":
      return 0.15;
    default:
      return false;
  }
}

function calcularTotal() {
  let total = 0;
  total = parseInt(cantidad.value) * calcularDescuento() * TICKET;
  return total;
}

function mostrarTotal() {
  totalPago.textContent = calcularTotal();
}
