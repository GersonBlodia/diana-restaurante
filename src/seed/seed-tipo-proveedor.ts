import { EstadoOrden } from "@prisma/client";

const tiposProveedores = [
  { idTipoProveedor: 1, nombreTipo: "Alimentos", descripcion: "Proveedores de alimentos frescos y procesados" },
  { idTipoProveedor: 2, nombreTipo: "Limpieza", descripcion: "Proveedores de productos de limpieza" },
  { idTipoProveedor: 3, nombreTipo: "Equipos", descripcion: "Proveedores de equipos y utensilios" },
];


const proveedores = [
  {
    idProveedores: 1,
    idTipoProveedor: 1,
    nombreProveedor: "Distribuciones Frescas SAC",
    ruc: "20456789012",
    telefono: "987654321",
    correo: "contacto@frescasac.com",
    direccion: "Av. Principal 123, Lima",
    personaContacto: "Juan Perez",
    telefonoContacto: "987654321",
  },
  {
    idProveedores: 2,
    idTipoProveedor: 2,
    nombreProveedor: "Limpieza Total SRL",
    ruc: "20123456789",
    telefono: "987654322",
    correo: "ventas@limpiezatotal.com",
    direccion: "Jr. Limpio 456, Lima",
    personaContacto: "Ana Gómez",
    telefonoContacto: "987654322",
  },
];



const ordenesCompra = [
  {
    idOrdenCompra: 1,
    idProveedor: 1,
    numeroOrden: "OC-001",
    fechaEmision: new Date("2025-05-01"),
    fechaEntrega: new Date("2025-05-05"),
    estado: EstadoOrden.Pendiente,
    observaciones: "Entrega urgente",
    montoTotal: 1500.0,
  },
  {
    idOrdenCompra: 2,
    idProveedor: 2,
    numeroOrden: "OC-002",
    fechaEmision: new Date("2025-05-03"),
    fechaEntrega: new Date("2025-05-07"),
    estado: EstadoOrden.Parcial,
    observaciones: "Entrega parcial aprobada",
    montoTotal: 800.0,
  },
];

export const FormatedTipoProveedor = tiposProveedores.map(dep => ({...dep,}));

export const FormatedProveedor = proveedores.map(dep => ({...dep,}));
export const FormatedOrdenCompra = ordenesCompra.map(dep => ({...dep,}));
