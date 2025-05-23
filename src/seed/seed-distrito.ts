interface Distrito {
    idProvincia: number;
    idDistrito:number;
    nombreDistrito: string;
}

export const DistritoData: Distrito[] = [
  // ====== PROVINCIA DE ICA (idProvincia: 1) ======
  { idDistrito: 1, nombreDistrito: "Ica", idProvincia: 1 },
  { idDistrito: 2, nombreDistrito: "La Tinguiña", idProvincia: 1 },
  { idDistrito: 3, nombreDistrito: "Los Aquijes", idProvincia: 1 },
  { idDistrito: 4, nombreDistrito: "Ocucaje", idProvincia: 1 },
  { idDistrito: 5, nombreDistrito: "Pachacútec", idProvincia: 1 },
  { idDistrito: 6, nombreDistrito: "Parcona", idProvincia: 1 },
  { idDistrito: 7, nombreDistrito: "Pueblo Nuevo", idProvincia: 1 },
  { idDistrito: 8, nombreDistrito: "Salas Guadalupe", idProvincia: 1 },
  { idDistrito: 9, nombreDistrito: "San José de Los Molinos", idProvincia: 1 },
  { idDistrito: 10, nombreDistrito: "San Juan Bautista", idProvincia: 1 },
  { idDistrito: 11, nombreDistrito: "Santiago", idProvincia: 1 },
  { idDistrito: 12, nombreDistrito: "Subtanjalla", idProvincia: 1 },
  { idDistrito: 13, nombreDistrito: "Tate", idProvincia: 1 },
  { idDistrito: 14, nombreDistrito: "Yauca del Rosario", idProvincia: 1 },

  // ====== PROVINCIA DE CHINCHA (idProvincia: 2) ======
  { idDistrito: 15, nombreDistrito: "Chincha Alta", idProvincia: 2 },
  { idDistrito: 16, nombreDistrito: "Alto Laran", idProvincia: 2 },
  { idDistrito: 17, nombreDistrito: "Chavín", idProvincia: 2 },
  { idDistrito: 18, nombreDistrito: "Chincha Baja", idProvincia: 2 },
  { idDistrito: 19, nombreDistrito: "El Carmen", idProvincia: 2 },
  { idDistrito: 20, nombreDistrito: "Grocio Prado", idProvincia: 2 },
  { idDistrito: 21, nombreDistrito: "Pueblo Nuevo", idProvincia: 2 },
  { idDistrito: 22, nombreDistrito: "San Juan de Yanac", idProvincia: 2 },
  { idDistrito: 23, nombreDistrito: "San Pedro de Huacarpana", idProvincia: 2 },
  { idDistrito: 24, nombreDistrito: "Sunampe", idProvincia: 2 },
  { idDistrito: 25, nombreDistrito: "Tambo de Mora", idProvincia: 2 },

  // ====== PROVINCIA DE PISCO (idProvincia: 3) ======
  { idDistrito: 26, nombreDistrito: "Pisco", idProvincia: 3 },
  { idDistrito: 27, nombreDistrito: "Huancano", idProvincia: 3 },
  { idDistrito: 28, nombreDistrito: "Humay", idProvincia: 3 },
  { idDistrito: 29, nombreDistrito: "Independencia", idProvincia: 3 },
  { idDistrito: 30, nombreDistrito: "Paracas", idProvincia: 3 },
  { idDistrito: 31, nombreDistrito: "San Andrés", idProvincia: 3 },
  { idDistrito: 32, nombreDistrito: "San Clemente", idProvincia: 3 },
  { idDistrito: 33, nombreDistrito: "Túpac Amaru Inca", idProvincia: 3 },

  // ====== PROVINCIA DE PALPA (idProvincia: 4) ======
  { idDistrito: 34, nombreDistrito: "Palpa", idProvincia: 4 },
  { idDistrito: 35, nombreDistrito: "Llipata", idProvincia: 4 },
  { idDistrito: 36, nombreDistrito: "Río Grande", idProvincia: 4 },
  { idDistrito: 37, nombreDistrito: "Santa Cruz", idProvincia: 4 },
  { idDistrito: 38, nombreDistrito: "Tibillo", idProvincia: 4 },

  // ====== PROVINCIA DE NASCA (idProvincia: 5) ======
  { idDistrito: 39, nombreDistrito: "Nasca", idProvincia: 5 },
  { idDistrito: 40, nombreDistrito: "Changuillo", idProvincia: 5 },
  { idDistrito: 41, nombreDistrito: "El Ingenio", idProvincia: 5 },
  { idDistrito: 42, nombreDistrito: "Marcona", idProvincia: 5 },
  { idDistrito: 43, nombreDistrito: "Vista Alegre", idProvincia: 5 }
];


export const FormattedDistritoData = DistritoData.map(d => ({
  ...d,
  
}));
