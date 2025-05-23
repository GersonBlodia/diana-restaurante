import { TipoMovimiento } from "@prisma/client";

const inventarios = [
  {
    idInventario: 1,
    idInsumo: 1,
    idProveedor: 1,
    lote: "L20230501",
    cantidad: 100.0,
    fechaIngreso: new Date("2025-05-01"),
    fechaCaducidad: new Date("2025-11-01"),
    precioCompra: 3.50,
    facturaCompra: "FAC-001",
    ubicacion: "Estante 3",
    observaciones: "Ingreso inicial de tomate",
    estado: true,
  },
  {
    idInventario: 2,
    idInsumo: 2,
    idProveedor: 2,
    lote: "L20230502",
    cantidad: 50.0,
    fechaIngreso: new Date("2025-05-02"),
    fechaCaducidad: new Date("2025-10-30"),
    precioCompra: 15.0,
    facturaCompra: "FAC-002",
    ubicacion: "Cámara fría 1",
    observaciones: "Ingreso inicial de carne de res",
    estado: true,
  },
];


const inventarioAuditorias = [
  {
    idAuditoria: 1,
    idUsuario: 1,
    fechaAuditoria: new Date("2025-05-15"),
    tipoAuditoria: "Completa",
    observaciones: "Auditoría completa sin discrepancias",
    resultado: "Ok",
  },
  {
    idAuditoria: 2,
    idUsuario: 2,
    fechaAuditoria: new Date("2025-06-01"),
    tipoAuditoria: "Parcial",
    observaciones: "Faltaron algunos documentos",
    resultado: "Pendiente revisión",
  },
];

const detalleAuditoriaInventarios = [
  {
    idDetalleAuditoria: 1,
    idAuditoria: 1,
    idInsumo: 1,
    stockSistema: 100.00,
    stockFisico: 98.50,
    diferencia: -1.50,
    observaciones: "Pequeña diferencia detectada por manejo inadecuado.",
  },
  {
    idDetalleAuditoria: 2,
    idAuditoria: 1,
    idInsumo: 2,
    stockSistema: 50.00,
    stockFisico: 50.00,
    diferencia: 0.00,
    observaciones: "Stock correcto.",
  },
];

const movimientosInventario = [
  {
    idMovimiento: 1,
    idInsumo: 1,
    idEmpleado: 1,
    tipoMovimiento: TipoMovimiento.Entrada,
    cantidad: 20.00,
    fechaMovimiento: new Date("2025-05-10"),
    idReferencia: 1,
    tipoReferencia: "OrdenCompra",
    motivo: "Ingreso de nuevo lote",
    observaciones: "Lote recibido en buen estado.",
  },
  {
    idMovimiento: 2,
    idInsumo: 2,
    idEmpleado: 2,
    tipoMovimiento: TipoMovimiento.Merma,
    cantidad: 5.00,
    fechaMovimiento: new Date("2025-05-11"),
    motivo: "Producto dañado",
    observaciones: "Carne con fecha próxima a caducidad.",
  },
];

const mermas = [
  {
    idMerma: 1,
    idInsumo: 2,
    cantidad: 3.00,
    fecha: new Date("2025-05-11"),
    motivo: "Caducidad",
    descripcion: "Carne no utilizada antes de fecha de vencimiento.",
    costoEstimado: 45.00,
  },
  {
    idMerma: 2,
    idInsumo: 1,
    cantidad: 1.50,
    fecha: new Date("2025-05-12"),
    motivo: "Preparación",
    descripcion: "Pérdida por corte y preparación.",
    costoEstimado: 5.25,
  },
];


export const Formatedinventarios = inventarios.map(dep => ({...dep,}));

export const FormatedAuditoriaInventario = inventarioAuditorias.map(dep => ({...dep,}));


export const FormateddetalleAuditoriaInventarios=detalleAuditoriaInventarios.map(dep => ({...dep,}));
export const FormatedmovimientosInventario=movimientosInventario.map(dep => ({...dep,}));
 
export const Formatedmermas=mermas.map(dep => ({...dep,}));
 