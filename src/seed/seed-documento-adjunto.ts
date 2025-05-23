interface DocumentoAdjunto{
        nombreTipo: string;
       descripcion: string;
       idTipoDocumentoAdjunto:number;
}




export const DocumentoAdjunto: DocumentoAdjunto[] = [
  {
    idTipoDocumentoAdjunto: 1,
    nombreTipo: "Pasaporte",
    descripcion: "Documento internacional para viajes",
  },
  {
    idTipoDocumentoAdjunto: 2,
    nombreTipo: "Carné de Extranjería",
    descripcion: "Documento de identificación para extranjeros residentes",
  },
  {
    idTipoDocumentoAdjunto: 3,
    nombreTipo: "Permiso Temporal de Permanencia (PTP)",
    descripcion: "Documento temporal para extranjeros",
  },
  {
    idTipoDocumentoAdjunto: 4,
    nombreTipo: "Cédula Diplomática",
    descripcion: "Documento de identidad para diplomáticos",
  },
];
export const FormatedDocumentoAdjunto = DocumentoAdjunto.map(dep => ({
  ...dep,
}));