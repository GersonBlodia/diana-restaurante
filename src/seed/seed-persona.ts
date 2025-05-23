  type TypeValorGenero =
  | "Masculino"
  | "Femenino"
  | "Otro"
  | "No_Binario";

export interface Persona {
    idTipoDocumento: number;
    idPersona: number;
    nombre: string;
    apellido: string;
    dni?: number;
    telefono?: string;
    genero: TypeValorGenero;
    fechaNacimiento?: Date | undefined;
}
export const personasRaw:Persona[] = [
    {
      idPersona: 9,
      idTipoDocumento: 1,
      nombre: "sasha",
      apellido: "garcia",
      dni: 12125242,
      telefono: "2222277",
      genero: "Femenino",
    },
    {
      idPersona: 10,
      idTipoDocumento: 1,
      nombre: "Gerson",
      apellido: "vera",
      dni: 73482311,
      genero: "Masculino",
      fechaNacimiento: new Date("2000-10-10"),
    },
    {
      idPersona: 11,
      idTipoDocumento: 2,
      nombre: "sdadd",
      apellido: "sdsd",
      genero: "No_Binario",
      fechaNacimiento: new Date("2333-02-23"),
    },
    {
      idPersona: 12,
      idTipoDocumento: 1,
      nombre: "Gerson",
      apellido: "xsdadsda",
      dni: 45151059,
      genero: "Masculino",
      fechaNacimiento: new Date("0022-02-22"),
    },
    {
      idPersona: 13,
      idTipoDocumento: 2,
      nombre: "Gerson",
      apellido: "vera",
      genero: "Masculino",
      fechaNacimiento: new Date("2222-02-22"),
    },
    {
      idPersona: 14,
      idTipoDocumento: 1,
      nombre: "Jhon",
      apellido: "xsdadsda",
      dni: 74419269,
      genero: "Masculino",
      fechaNacimiento: new Date("0022-02-22"),
    },
  ];

   
  export const FormatedPersona = personasRaw.map(dep => ({
    ...dep,
  }));
  