import { Img } from "ionic-angular";

export interface Patient {
    key?: string;
    avatar: Img;
    nombre: string;
    apellidos: string;
    dni: string;
    codigoidentificador: string;
    sexo: string;
    edad: string;
    lugarnacimiento: string;
    enfermedades: string;
    alergias: string;
    medicamentos: string;   

}