interface Tipo_Documento {
  nombreTipoDocumento: string;
  descripcion: string;
  nacionalidadAproximada: string;
  idTipoDocumento:number;
}

const data_documento: Tipo_Documento[] = [
  {
    idTipoDocumento: 1,
    nombreTipoDocumento: "DNI",
    descripcion: "Documento Nacional de Identidad para ciudadanos peruanos",
    nacionalidadAproximada: "Peruano",
  },
  {
    idTipoDocumento: 2,
    nombreTipoDocumento: "Carné de Extranjería",
    descripcion: "Documento de identificación para extranjeros residentes",
    nacionalidadAproximada: "Extranjero",
  },
  {
    idTipoDocumento: 3,
    nombreTipoDocumento: "Pasaporte",
    descripcion:
      "Documento internacional de viaje para peruanos y extranjeros",
    nacionalidadAproximada: "Ambos",
  },
  {
    idTipoDocumento: 4,
    nombreTipoDocumento: "Permiso Temporal de Permanencia (PTP)",
    descripcion:
      "Documento temporal para extranjeros en proceso migratorio",
    nacionalidadAproximada: "Extranjero",
  },
  {
    idTipoDocumento: 5,
    nombreTipoDocumento: "Cédula Diplomática",
    descripcion:
      "Documento de identidad para diplomáticos acreditados en el país",
    nacionalidadAproximada: "Extranjero",
  },
];

 
export const FormatedDataDocumento = data_documento.map(dep => ({
  ...dep,
}));
