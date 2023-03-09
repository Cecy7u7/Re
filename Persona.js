class Persona {
    nombre;
    apellidoP;
    apellidoM;
    constructor(name,lastname1,lastname2) {
        this.nombre = name;
        this.apellidoP = lastname1;
        this.apellidoM= lastname2;
    }

}


verInformacion =function(){
    return `El nombre es ${this.name},su apellido paterno es ${this.lastname1}`;
}
