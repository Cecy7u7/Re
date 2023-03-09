// Obtener el arreglo de habitaciones almacenado en el almacenamiento local
let habitaciones = JSON.parse(localStorage.getItem('habitaciones')) || [];

// Función para actualizar la lista en la página index.html
function actualizarLista() {
  const lista = document.getElementById('lista');

  // Limpiar la lista existente
  lista.innerHTML = '';

  // Agregar cada elemento de habitaciones a la lista
  for (const habitacion of habitaciones) {
    const item = document.createElement('li');
    item.textContent = `Número de cliente: ${habitacion.numCliente} - Número de habitación: ${habitacion.numHabitacion}`;
    lista.appendChild(item);
  }
}

// Manejador de eventos para el envío del formulario
document.getElementById('habitacionForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores ingresados por el usuario
  const numCliente = document.getElementById('numCliente').value;
  const numHabitacion = document.getElementById('numHabitacion').value;

  // Crear un objeto con los valores ingresados
  const habitacion = {
    numCliente,
    numHabitacion
  };

  // Agregar el nuevo objeto al arreglo de habitaciones
  habitaciones.push(habitacion);

  // Convertir el arreglo de habitaciones en una cadena JSON y guardarlo en el almacenamiento local
  localStorage.setItem('habitaciones', JSON.stringify(habitaciones


    // Función para guardar los datos del usuario en el LocalStorage
function guardarDatos(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Obtener los valores de los campos de entrada
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var id = document.getElementById("id").value;

  // Crear un objeto con los datos del usuario
  var usuario = {
      nombre: nombre,
      apellido: apellido,
      id: id
  };

  // Agregar el objeto de usuario al arreglo de usuarios almacenado en el LocalStorage
  var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Mostrar una alerta de éxito
  alert("Usuario registrado exitosamente.");

  // Limpiar los campos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("id").value = "";

  // Actualizar la lista de usuarios en la página
  mostrarUsuarios();
}

// Función para mostrar la lista de usuarios en la página
function mostrarUsuarios() {
  var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Limpiar la lista de usuarios antes de actualizarla
  var listaUsuarios = document.getElementById("usuarios");
  listaUsuarios.innerHTML = "";

  // Agregar cada usuario a la lista de usuarios
  usuarios.forEach(function(usuario) {
      var li = document.createElement("li");
      li.innerText = usuario.nombre + " " + usuario.apellido + " - ID: " + usuario.id;
      listaUsuarios.appendChild(li);
  });
}

// Mostrar la lista de usuarios al cargar la página
mostrarUsuarios();
