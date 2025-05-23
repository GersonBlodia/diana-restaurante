interface TypeDireccion {
  idDireccionUbicacion: number;
  idDistrito: number;
  detalleUbicacion: string;
}

export const Direcciones: TypeDireccion[] = [
  {
    idDireccionUbicacion: 1,
    idDistrito: 1,
    detalleUbicacion: "Av. Principal 123, Edificio A, Piso 2",
  },
  {
    idDireccionUbicacion: 2,
    idDistrito: 2,
    detalleUbicacion: "Calle Secundaria 456, Casa 7",
  },
  {
    idDireccionUbicacion: 3,
    idDistrito: 3,
    detalleUbicacion: "Jr. Las Flores 789, Departamento 4",
  },
  {
    idDireccionUbicacion: 4,
    idDistrito: 1,
    detalleUbicacion: "Av. Los Olivos 321, Local 5",
  },
  {
    idDireccionUbicacion: 5,
    idDistrito: 2,
    detalleUbicacion: "Pasaje San Juan 567, Casa 12",
  },
];

export const formantDirecciones= Direcciones.map(direcciones=>({
    ...direcciones,
}))