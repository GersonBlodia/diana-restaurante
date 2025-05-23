interface Provincia {
 idProvincia:number
    idDepartamento: number;
    nombreProvincia: string;
}

export const ProvinciaData: Provincia[] = [
    { nombreProvincia: "Ica", idDepartamento: 1, idProvincia:1 },
    { nombreProvincia: "Chincha", idDepartamento: 1, idProvincia:2 },
    { nombreProvincia: "Pisco", idDepartamento: 1, idProvincia:3},
    { nombreProvincia: "Palpa", idDepartamento: 1,idProvincia:4 },
    { nombreProvincia: "Nasca", idDepartamento: 1, idProvincia: 5 }
];

export const FormattedProvinciaData = ProvinciaData.map(p => ({
  ...p,
 
}));