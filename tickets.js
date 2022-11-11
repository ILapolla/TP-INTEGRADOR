const TICKET  = 200
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#mail");
const tickets = document.querySelector(cantidaddetickets");
const categoria = document.querySelector("categorias");
const pago = document.querySelector("#pago");


const expresiones = {
	nombre: /^[a-zA-Z0-9\_\-]{4,16}$/,
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
