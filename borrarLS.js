// Obtener el botón
const clearStorageBtn = document.getElementById('clear-storage');

// Agregar un evento click al botón
clearStorageBtn.addEventListener('click', function() {
  // Borrar todos los datos del LocalStorage
  localStorage.clear();
  
  // Mostrar una alerta de borrado exitoso
  alert('¡LocalStorage borrado exitosamente!');
});
