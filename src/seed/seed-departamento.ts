interface DepartamentoType {
  idDepartamento: number;
  nombreDepartamento: string;
  idPais: number;
  estado?: boolean;
}

export const DepartamentoSeed: DepartamentoType[] = [
  { nombreDepartamento: 'Ica', idPais: 1 , idDepartamento:1}
];

export const FormattedDepartamentoSeed = DepartamentoSeed.map(dep => ({
  ...dep,
 
}));