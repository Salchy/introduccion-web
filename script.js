function saludar() {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var edad = document.getElementById("edad").value;

	alert("Hola " + nombre + " " + apellido);
}