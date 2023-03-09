// JavaScript para el formulario
const formulario = document.querySelector('#formulario');
const listaPersonas = document.querySelector('#lista-personas');

formulario.addEventListener('submit', (event) => {
  // prevenir el comportamiento por defecto del formulario
  event.preventDefault();

  // capturar los valores del formulario
  const nombre = document.querySelector('#nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const id = document.querySelector('#id').value;

  // crear un objeto con los datos
  const persona = { nombre, apellido, id };

  // guardar el objeto en el localStorage
  if (localStorage.getItem('personas') === null) {
    localStorage.setItem('personas', JSON.stringify([persona]));
  } else {
    const personas = JSON.parse(localStorage.getItem('personas'));
    personas.push(persona);
    localStorage.setItem('personas', JSON.stringify(personas));
  }

  // agregar la persona a la lista
  const li = document.createElement('li');
  li.textContent = `${persona.nombre} ${persona.apellido} - ${persona.id}`;
  listaPersonas.appendChild(li);

  // mostrar una alerta de éxito
  alert('Capturado exitosamente!');
});

// JavaScript para mostrar los datos del localStorage en la lista
if (localStorage.getItem('personas') !== null) {
  const personas = JSON.parse(localStorage.getItem('personas'));
  personas.forEach(persona => {
    const li = document.createElement('li');
    li.textContent = `${persona.nombre} ${persona.apellido} - ${persona.id}`;
    listaPersonas.appendChild(li);
  });
}


// Obtener el formulario y la lista de habitaciones
const roomForm = document.getElementById('room-form');
const roomList = document.getElementById('room-list');

// Agregar un evento submit al formulario
roomForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener los valores del formulario
  const roomNumber = document.getElementById('room-number').value;
  const roomType = document.getElementById('room-type').value;
  
  // Guardar los valores en el LocalStorage
  const room = {
    number: roomNumber,
    type: roomType
  };
  
  let rooms = JSON.parse(localStorage.getItem('rooms')) || [];
  rooms.push(room);
  localStorage.setItem('rooms', JSON.stringify(rooms));
  
  // Mostrar una alerta de captura exitosa
  alert('¡Habitación capturada exitosamente!');
  
  // Actualizar la lista de habitaciones en el HTML
  updateRoomList();
  
  // Limpiar el formulario
  roomForm.reset();
});

// Función para actualizar la lista de habitaciones en el HTML
function updateRoomList() {
  // Obtener las habitaciones del LocalStorage
  let rooms = JSON.parse(localStorage.getItem('rooms')) || [];
  
  // Crear una lista HTML con las habitaciones
  let roomListHTML = '';
  for (let i = 0; i < rooms.length; i++) {
    roomListHTML += `<li>${rooms[i].number} - ${rooms[i].type}</li>`;
  }
  
  // Mostrar la lista en el HTML
  roomList.innerHTML = roomListHTML;
}

// Actualizar la lista de habitaciones cuando se carga la página
updateRoomList();




// Obtener el formulario y la lista de reservas
const reservationForm = document.getElementById('reservation-form');
const reservationList = document.getElementById('reservation-list');

// Agregar un evento submit al formulario
reservationForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener los valores del formulario
  const clientNumber = document.getElementById('client-number').value;
  const roomNumber = document.getElementById('room-number').value;
  
  // Guardar los valores en el LocalStorage
  const reservation = {
    client: clientNumber,
    room: roomNumber
  };
  
  let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  reservations.push(reservation);
  localStorage.setItem('reservations', JSON.stringify(reservations));
  
  // Mostrar una alerta de captura exitosa
  alert('¡Reserva capturada exitosamente!');
  
  // Actualizar la lista de reservas en el HTML
  updateReservationList();
  
  // Limpiar el formulario
  reservationForm.reset();
});

// Función para actualizar la lista de reservas en el HTML
function updateReservationList() {
  // Obtener las reservas del LocalStorage
  let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  
  // Crear una lista HTML con las reservas
  let reservationListHTML = '';
  for (let i = 0; i < reservations.length; i++) {
    reservationListHTML += `<li>Cliente ${reservations[i].client} - Habitación ${reservations[i].room}</li>`;
  }
  
  // Mostrar la lista en el HTML
  reservationList.innerHTML = reservationListHTML;
}

// Actualizar la lista de reservas cuando se carga la página
updateReservationList();





// Obtener el formulario y la lista de clientes
const clientForm = document.getElementById('client-form');
const clientList = document.getElementById('client-list');

// Agregar un evento submit al formulario
clientForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obtener los valores del formulario
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  
  // Guardar los valores en el LocalStorage
  const client = {
    firstName: firstName,
    lastName: lastName
  };
  
  let clients = JSON.parse(localStorage.getItem('clients')) || [];
  clients.push(client);
  localStorage.setItem('clients', JSON.stringify(clients));
  
  // Mostrar una alerta de captura exitosa
  alert('¡Cliente capturado exitosamente!');
  
  // Actualizar la lista de clientes en el HTML
  updateClientList();
  
  // Limpiar el formulario
  clientForm.reset();
});

// Función para actualizar la lista de clientes en el HTML
function updateClientList() {
  // Obtener los clientes del LocalStorage
  let clients = JSON.parse(localStorage.getItem('clients')) || [];
  
  // Crear una lista HTML con los clientes
  let clientListHTML = '';
  for (let i = 0; i < clients.length; i++) {
    clientListHTML += `<li>${clients[i].firstName} ${clients[i].lastName}</li>`;
  }
  
  // Mostrar la lista en el HTML
  clientList.innerHTML = clientListHTML;
}

// Actualizar la lista de clientes cuando se carga la página
updateClientList();
