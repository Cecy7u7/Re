








var Personas=[];

function guardardatos() {
   

    nombre = document.getElementById('name').value;
    apellidoM = document.getElementById('lastname1').value;
    apellidoP = document.getElementById('lastname2').value;
    
    let persona = new Persona(nombre,apellidoM,apellidoP);

    Personas.push(persona);
    
    alert("Se guardo correctamente");
    localStorage.setItem('Personas', JSON.stringify(Personas));
}

