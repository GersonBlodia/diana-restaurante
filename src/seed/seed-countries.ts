 
interface Country {
  idPais: number;
    nombrePais: string;
}
  export const countries:Country[] = [
    {idPais:1, nombrePais: "Perú" },
    {idPais:2, nombrePais: "Chile" }
  ];

 
// Si necesitas agregar `estado: true` o alguna transformación:
export const formCountries = countries.map((c) => ({
  ...c,
}));