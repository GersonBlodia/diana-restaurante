import prisma from "../lib/prisma";

export type diasTrabajoemana =
  | "Lunes"
  | "Martes"
  | "Miercoles"
  | "Jueves"
  | "Viernes"
  | "Sabado"
  | "Domingo";

import { FormatedDataDocumento } from "./seed-tipo-documento";
import { FormatedDocumentoAdjunto } from "./seed-documento-adjunto";
import { DepartamentoSeed } from "./seed-departamento";
import { FormattedDistritoData } from "./seed-distrito";
import { FormattedProvinciaData } from "./seed-provincia";
import { formantDirecciones } from "./see-direccion";
import { FormatedPersona } from "./seed-persona";
import { empleadosData, empleadosDias } from "./seed-empleado";
import { formantUsuario } from "./seed-usuario";
import {
  FormatedOrdenCompra,
  FormatedProveedor,
  FormatedTipoProveedor,
} from "./seed-tipo-proveedor";
import {
  FormatedDetalleOrdenCompra,
  FormatedInsumo,
  FormatedTipoInsumo,
  FormatedUnidadesMedida,
} from "./seed-insumo";
import {
  FormatedAuditoriaInventario,
  FormateddetalleAuditoriaInventarios,
  Formatedinventarios,
  Formatedmermas,
  FormatedmovimientosInventario,
} from "./seed-inventario";
import {
  FormatedMenus,
  Formatedrecetas,
  Formattedproductos,
  FormattedtiposPlatillo,
  FormattedtiposProducto,
} from "./seed-producto";

async function main() {
  await prisma.detallePedido.deleteMany();
  await prisma.comprobante.deleteMany();
  await prisma.venta.deleteMany();
  await prisma.pago.deleteMany();
  await prisma.pedido.deleteMany();
  await prisma.recetaIngrediente.deleteMany();
  await prisma.menu.deleteMany();
  await prisma.producto.deleteMany();
  await prisma.tipo_platillo.deleteMany();
  await prisma.tipo_producto.deleteMany();

  await prisma.detalleAuditoriaInventario.deleteMany();
  await prisma.inventarioAuditoria.deleteMany();
  await prisma.movimientoInventario.deleteMany();
  await prisma.merma.deleteMany();
  await prisma.inventario.deleteMany();
  await prisma.detalleOrdenCompra.deleteMany();
  await prisma.ordenCompra.deleteMany();
  await prisma.insumo.deleteMany();
  await prisma.tipo_insumo.deleteMany(); // Aquí agregas la eliminación de tipo_insumo
  await prisma.unidadMedida.deleteMany(); // <<-- agregado aquí

  await prisma.proveedores.deleteMany();
  await prisma.tipo_proveedor.deleteMany();

  await prisma.logUsuario.deleteMany();
  await prisma.mensajeChat.deleteMany();
  await prisma.notificacion.deleteMany();
  await prisma.mensajeInterno.deleteMany();
  await prisma.usuario.deleteMany();
  await prisma.empleadoCapacitacion.deleteMany();
  await prisma.capacitacion.deleteMany();
  await prisma.ausencia.deleteMany();
  await prisma.historialEmpleado.deleteMany();
  await prisma.evaluacionDesempeno.deleteMany();
  await prisma.infoEmpleadoRRHH.deleteMany();
  await prisma.empleadoDiaSemana.deleteMany();
  await prisma.empleado.deleteMany();
  await prisma.puesto_trabajo.deleteMany();
  await prisma.departamento_rrhh.deleteMany();

  await prisma.documentoAdjunto.deleteMany();
  await prisma.persona.deleteMany();
  await prisma.tipo_Documento_Adjunto.deleteMany();
  await prisma.tipo_Documento.deleteMany();

  await prisma.direccionUbicacion.deleteMany();
  await prisma.distrito.deleteMany();
  await prisma.provincia.deleteMany();
  await prisma.departamento.deleteMany();
  await prisma.pais.deleteMany();

  //insertar datos de tipo documento
  await prisma.tipo_Documento.createMany({ data: FormatedDataDocumento });
  await prisma.tipo_Documento_Adjunto.createMany({
    data: FormatedDocumentoAdjunto,
  });

  //traer los id de los paises
  const paises = [
    { idPais: 1, nombrePais: "Perú" },
    { idPais: 2, nombrePais: "Chile" },
  ];
  // Usar createMany para insertar países
  await prisma.pais.createMany({ data: paises });
  await prisma.departamento.createMany({ data: DepartamentoSeed });

  const provinciaValidas = FormattedProvinciaData.map(
    ({ idDepartamento, nombreProvincia, idProvincia }) => ({
      idDepartamento,
      nombreProvincia,
      idProvincia,
    })
  );
  await prisma.provincia.createMany({ data: provinciaValidas });
  await prisma.distrito.createMany({ data: FormattedDistritoData });
  await prisma.direccionUbicacion.createMany({ data: formantDirecciones });
  await prisma.persona.createMany({ data: FormatedPersona });

  await prisma.empleado.createMany({
    data: empleadosData,
  });
  await prisma.empleadoDiaSemana.createMany({
    data: empleadosDias,
  });
  await prisma.usuario.createMany({ data: formantUsuario });

  //inventario
  await prisma.tipo_proveedor.createMany({ data: FormatedTipoProveedor });
  await prisma.proveedores.createMany({ data: FormatedProveedor });
  await prisma.ordenCompra.createMany({ data: FormatedOrdenCompra });

  //insumos

  await prisma.tipo_insumo.createMany({ data: FormatedTipoInsumo });
  await prisma.unidadMedida.createMany({ data: FormatedUnidadesMedida });
  await prisma.insumo.createMany({ data: FormatedInsumo });
  await prisma.detalleOrdenCompra.createMany({
    data: FormatedDetalleOrdenCompra,
  });

  //inventario
  await prisma.inventario.createMany({ data: Formatedinventarios });
  await prisma.inventarioAuditoria.createMany({
    data: FormatedAuditoriaInventario,
  });
  await prisma.detalleAuditoriaInventario.createMany({
    data: FormateddetalleAuditoriaInventarios,
  });
  await prisma.movimientoInventario.createMany({
    data: FormatedmovimientosInventario,
  });
  await prisma.merma.createMany({ data: Formatedmermas });
  await prisma.tipo_producto.createMany({ data: FormattedtiposProducto });
  await prisma.producto.createMany({ data: Formattedproductos });
  await prisma.tipo_platillo.createMany({ data: FormattedtiposPlatillo });
  await prisma.menu.createMany({ data: FormatedMenus });
  await prisma.recetaIngrediente.createMany({ data: Formatedrecetas });

  console.log("✅ Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
