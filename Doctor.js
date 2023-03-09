class Doctor extends Persona{
    consultorio;
    especialidad;
    cedula;

    constructor(consult, esp, celula){
        this.consultorio = consult;
        this.especialidad = esp;
        this.cedula = celula;
    }

}

asignarConsultorio = function(){
    return `El consultario es${this.consult}`;
}