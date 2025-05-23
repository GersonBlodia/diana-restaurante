const tiposProducto = [
  { idTipoProducto: 1, nombreTipo: "Bebidas", descripcion: "Productos líquidos para consumo", estado: true },
  { idTipoProducto: 2, nombreTipo: "Comida", descripcion: "Productos sólidos y preparados", estado: true },
];


const productos = [
  {
    idProducto: 1,
    idTipoProducto: 1,
    codigoProducto: "BEB001",
    nombreProducto: "Jugo de naranja",
    descripcion: "Jugo natural de naranja, 1 litro",
    precio: 5.00,
    stock: 50,
    imagen: null,
    estado: true,
  },
  {
    idProducto: 2,
    idTipoProducto: 2,
    codigoProducto: "COM001",
    nombreProducto: "Hamburguesa clásica",
    descripcion: "Hamburguesa con carne de res y queso",
    precio: 12.50,
    stock: 30,
    imagen: null,
    estado: true,
  },
];

const tiposPlatillo = [
  { idTipoPlatillo: 1, nombreTipo: "Entradas", descripcion: "Platos para comenzar la comida", estado: true },
  { idTipoPlatillo: 2, nombreTipo: "Platos principales", descripcion: "Platos fuertes y completos", estado: true },
];

const menus = [
  {
    idMenu: 1,
    idTipoPlatillo: 1, // Relacionado con 'Entradas'
    nombreMenu: "Sopa de pollo",
    descripcion: "Sopa caliente con pollo y verduras",
    imagenMenu: null,
    precio: 8.50,
    tiempoPreparacion: 20,
    estado: true,
  },
  {
    idMenu: 2,
    idTipoPlatillo: 2, // Relacionado con 'Platos principales'
    nombreMenu: "Hamburguesa con papas",
    descripcion: "Hamburguesa con carne de res, queso y papas fritas",
    imagenMenu: null,
    precio: 12.50,
    tiempoPreparacion: 15,
    estado: true,
  },
];

const recetas = [
  {
    idReceta: 1,
    idMenu: 2, // Relacionado con 'Hamburguesa con papas'
    idInsumo: 2, // Carne de res
    cantidad: 0.200, // 200 gramos de carne de res
    observaciones: "Carne fresca de res",
  },
  {
    idReceta: 2,
    idMenu: 2, // Relacionado con 'Hamburguesa con papas'
    idInsumo: 1, // Tomate
    cantidad: 0.150, // 150 gramos de tomate
    observaciones: "Tomate fresco",
  },
];


export const FormattedtiposProducto = tiposProducto.map(p => ({...p,}));
export const Formattedproductos = productos.map(p => ({...p,}));
export const FormattedtiposPlatillo = tiposPlatillo.map(p => ({...p,}));
export const FormatedMenus= menus.map(p=>({
...p
}))

export const Formatedrecetas= recetas.map(p=>({
...p
}))