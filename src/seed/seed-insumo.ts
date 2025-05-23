const tiposInsumo = [
  { idTipoInsumo: 1, nombreTipo: "Verduras", descripcion: "Insumos frescos de verduras", estado: true },
  { idTipoInsumo: 2, nombreTipo: "Carnes", descripcion: "Insumos de carnes y derivados", estado: true },
];

const unidadesMedida = [
  { idUnidadMedida: 1, nombre: "Kilogramo", abreviatura: "kg", descripcion: "Unidad de peso en kilogramos", estado: true },
  { idUnidadMedida: 2, nombre: "Litro", abreviatura: "l", descripcion: "Unidad de volumen en litros", estado: true },
];

const insumos = [
  {
    idInsumo: 1,
    idTipoInsumo: 1,
    idProveedor: 1,
    idUnidadMedida: 1,
    codigoInsumo: "VER001",
    nombreInsumo: "Tomate",
    descripcion: "Tomate fresco para ensaladas",
    stock: 100,
    stockMinimo: 20,
    precio: 3.50,
    ubicacionAlmacen: "Estante 3",
    estado: true,
  },
  {
    idInsumo: 2,
    idTipoInsumo: 2,
    idProveedor: 2,
    idUnidadMedida: 1,
    codigoInsumo: "CAR001",
    nombreInsumo: "Carne de res",
    descripcion: "Carne de res fresca",
    stock: 50,
    stockMinimo: 10,
    precio: 15.00,
    ubicacionAlmacen: "Cámara fría 1",
    estado: true,
  },
];

const detallesOrdenCompra = [
  {
    idDetalleOrden: 1,
    idOrdenCompra: 1,
    idInsumo: 1,
    cantidad: 10,
    precioUnitario: 3.50,
    subtotal: 35.00,
    cantidadRecibida: 10,
  },
  {
    idDetalleOrden: 2,
    idOrdenCompra: 1,
    idInsumo: 2,
    cantidad: 5,
    precioUnitario: 15.00,
    subtotal: 75.00,
    cantidadRecibida: 5,
  },
];


export const FormatedTipoInsumo = tiposInsumo.map(dep => ({...dep,}));
export const FormatedUnidadesMedida = unidadesMedida.map(dep => ({...dep,}));
export const FormatedInsumo = insumos.map(dep => ({...dep,}));
export const FormatedDetalleOrdenCompra = detallesOrdenCompra.map(dep => ({...dep,}));
