/*
  Warnings:

  - The primary key for the `Ausencia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Capacitacion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Comprobante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Departamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Departamento_rrhh` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DetalleAuditoriaInventario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DetalleOrdenCompra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DetallePedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DireccionUbicacion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Distrito` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DocumentoAdjunto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Empleado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `EmpleadoCapacitacion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `EmpleadoDiaSemana` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `EvaluacionDesempeno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `HistorialEmpleado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `InfoEmpleadoRRHH` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Insumo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Inventario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `InventarioAuditoria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `LogUsuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MensajeChat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MensajeInterno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Menu` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Merma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MovimientoInventario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Notificacion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `OrdenCompra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pago` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pais` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Persona` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Producto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Proveedores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Provincia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Puesto_trabajo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RecetaIngrediente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tipo_Documento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tipo_Documento_Adjunto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tipo_comprobante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tipo_insumo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tipo_pago` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tipo_platillo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tipo_producto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tipo_proveedor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UnidadMedida` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Venta` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Ausencia" DROP CONSTRAINT "Ausencia_idEmpleado_fkey";

-- DropForeignKey
ALTER TABLE "Comprobante" DROP CONSTRAINT "Comprobante_idTipoComprobante_fkey";

-- DropForeignKey
ALTER TABLE "Comprobante" DROP CONSTRAINT "Comprobante_idVenta_fkey";

-- DropForeignKey
ALTER TABLE "Departamento" DROP CONSTRAINT "Departamento_idPais_fkey";

-- DropForeignKey
ALTER TABLE "DetalleAuditoriaInventario" DROP CONSTRAINT "DetalleAuditoriaInventario_idAuditoria_fkey";

-- DropForeignKey
ALTER TABLE "DetalleOrdenCompra" DROP CONSTRAINT "DetalleOrdenCompra_idInsumo_fkey";

-- DropForeignKey
ALTER TABLE "DetalleOrdenCompra" DROP CONSTRAINT "DetalleOrdenCompra_idOrdenCompra_fkey";

-- DropForeignKey
ALTER TABLE "DetallePedido" DROP CONSTRAINT "DetallePedido_idMenu_fkey";

-- DropForeignKey
ALTER TABLE "DetallePedido" DROP CONSTRAINT "DetallePedido_idPedido_fkey";

-- DropForeignKey
ALTER TABLE "DireccionUbicacion" DROP CONSTRAINT "DireccionUbicacion_idDistrito_fkey";

-- DropForeignKey
ALTER TABLE "Distrito" DROP CONSTRAINT "Distrito_idProvincia_fkey";

-- DropForeignKey
ALTER TABLE "DocumentoAdjunto" DROP CONSTRAINT "DocumentoAdjunto_idPersona_fkey";

-- DropForeignKey
ALTER TABLE "DocumentoAdjunto" DROP CONSTRAINT "DocumentoAdjunto_idTipoDocumentoAdjunto_fkey";

-- DropForeignKey
ALTER TABLE "Empleado" DROP CONSTRAINT "Empleado_idPersona_fkey";

-- DropForeignKey
ALTER TABLE "EmpleadoCapacitacion" DROP CONSTRAINT "EmpleadoCapacitacion_idCapacitacion_fkey";

-- DropForeignKey
ALTER TABLE "EmpleadoCapacitacion" DROP CONSTRAINT "EmpleadoCapacitacion_idEmpleado_fkey";

-- DropForeignKey
ALTER TABLE "EmpleadoDiaSemana" DROP CONSTRAINT "EmpleadoDiaSemana_idEmpleado_fkey";

-- DropForeignKey
ALTER TABLE "EvaluacionDesempeno" DROP CONSTRAINT "EvaluacionDesempeno_idEmpleado_fkey";

-- DropForeignKey
ALTER TABLE "HistorialEmpleado" DROP CONSTRAINT "HistorialEmpleado_idEmpleado_fkey";

-- DropForeignKey
ALTER TABLE "HistorialEmpleado" DROP CONSTRAINT "HistorialEmpleado_idPuestoTrabajoAnterior_fkey";

-- DropForeignKey
ALTER TABLE "HistorialEmpleado" DROP CONSTRAINT "HistorialEmpleado_idPuestoTrabajoNuevo_fkey";

-- DropForeignKey
ALTER TABLE "InfoEmpleadoRRHH" DROP CONSTRAINT "InfoEmpleadoRRHH_idEmpleado_fkey";

-- DropForeignKey
ALTER TABLE "InfoEmpleadoRRHH" DROP CONSTRAINT "InfoEmpleadoRRHH_idPuestoTrabajo_fkey";

-- DropForeignKey
ALTER TABLE "Insumo" DROP CONSTRAINT "Insumo_idProveedor_fkey";

-- DropForeignKey
ALTER TABLE "Insumo" DROP CONSTRAINT "Insumo_idTipoInsumo_fkey";

-- DropForeignKey
ALTER TABLE "Insumo" DROP CONSTRAINT "Insumo_idUnidadMedida_fkey";

-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_idInsumo_fkey";

-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_idProveedor_fkey";

-- DropForeignKey
ALTER TABLE "InventarioAuditoria" DROP CONSTRAINT "InventarioAuditoria_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "LogUsuario" DROP CONSTRAINT "LogUsuario_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "MensajeChat" DROP CONSTRAINT "MensajeChat_idReceptor_fkey";

-- DropForeignKey
ALTER TABLE "MensajeChat" DROP CONSTRAINT "MensajeChat_idRemitente_fkey";

-- DropForeignKey
ALTER TABLE "MensajeInterno" DROP CONSTRAINT "MensajeInterno_idDestinatario_fkey";

-- DropForeignKey
ALTER TABLE "MensajeInterno" DROP CONSTRAINT "MensajeInterno_idRemitente_fkey";

-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_idTipoPlatillo_fkey";

-- DropForeignKey
ALTER TABLE "Merma" DROP CONSTRAINT "Merma_idInsumo_fkey";

-- DropForeignKey
ALTER TABLE "MovimientoInventario" DROP CONSTRAINT "MovimientoInventario_idEmpleado_fkey";

-- DropForeignKey
ALTER TABLE "MovimientoInventario" DROP CONSTRAINT "MovimientoInventario_idInsumo_fkey";

-- DropForeignKey
ALTER TABLE "Notificacion" DROP CONSTRAINT "Notificacion_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "OrdenCompra" DROP CONSTRAINT "OrdenCompra_idProveedor_fkey";

-- DropForeignKey
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_idTipoPago_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_idMenu_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_idPersona_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_idProducto_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "Persona" DROP CONSTRAINT "Persona_idDireccionUbicacion_fkey";

-- DropForeignKey
ALTER TABLE "Persona" DROP CONSTRAINT "Persona_idTipoDocumento_fkey";

-- DropForeignKey
ALTER TABLE "Producto" DROP CONSTRAINT "Producto_idTipoProducto_fkey";

-- DropForeignKey
ALTER TABLE "Proveedores" DROP CONSTRAINT "Proveedores_idTipoProveedor_fkey";

-- DropForeignKey
ALTER TABLE "Provincia" DROP CONSTRAINT "Provincia_idDepartamento_fkey";

-- DropForeignKey
ALTER TABLE "Puesto_trabajo" DROP CONSTRAINT "Puesto_trabajo_idDepartamentoRRHH_fkey";

-- DropForeignKey
ALTER TABLE "RecetaIngrediente" DROP CONSTRAINT "RecetaIngrediente_idInsumo_fkey";

-- DropForeignKey
ALTER TABLE "RecetaIngrediente" DROP CONSTRAINT "RecetaIngrediente_idMenu_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idEmpleado_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_idPago_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_idPedido_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_idPersona_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_idUsuario_fkey";

-- AlterTable
ALTER TABLE "Ausencia" DROP CONSTRAINT "Ausencia_pkey",
ALTER COLUMN "idAusencia" DROP DEFAULT,
ALTER COLUMN "idAusencia" SET DATA TYPE TEXT,
ALTER COLUMN "idEmpleado" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ausencia_pkey" PRIMARY KEY ("idAusencia");
DROP SEQUENCE "Ausencia_idAusencia_seq";

-- AlterTable
ALTER TABLE "Capacitacion" DROP CONSTRAINT "Capacitacion_pkey",
ALTER COLUMN "idCapacitacion" DROP DEFAULT,
ALTER COLUMN "idCapacitacion" SET DATA TYPE TEXT,
ADD CONSTRAINT "Capacitacion_pkey" PRIMARY KEY ("idCapacitacion");
DROP SEQUENCE "Capacitacion_idCapacitacion_seq";

-- AlterTable
ALTER TABLE "Comprobante" DROP CONSTRAINT "Comprobante_pkey",
ALTER COLUMN "idComprobante" DROP DEFAULT,
ALTER COLUMN "idComprobante" SET DATA TYPE TEXT,
ALTER COLUMN "idVenta" SET DATA TYPE TEXT,
ALTER COLUMN "idTipoComprobante" SET DATA TYPE TEXT,
ADD CONSTRAINT "Comprobante_pkey" PRIMARY KEY ("idComprobante");
DROP SEQUENCE "Comprobante_idComprobante_seq";

-- AlterTable
ALTER TABLE "Departamento" DROP CONSTRAINT "Departamento_pkey",
ALTER COLUMN "idDepartamento" DROP DEFAULT,
ALTER COLUMN "idDepartamento" SET DATA TYPE TEXT,
ALTER COLUMN "idPais" SET DATA TYPE TEXT,
ADD CONSTRAINT "Departamento_pkey" PRIMARY KEY ("idDepartamento");
DROP SEQUENCE "Departamento_idDepartamento_seq";

-- AlterTable
ALTER TABLE "Departamento_rrhh" DROP CONSTRAINT "Departamento_rrhh_pkey",
ALTER COLUMN "idDepartamentoRRHH" DROP DEFAULT,
ALTER COLUMN "idDepartamentoRRHH" SET DATA TYPE TEXT,
ADD CONSTRAINT "Departamento_rrhh_pkey" PRIMARY KEY ("idDepartamentoRRHH");
DROP SEQUENCE "Departamento_rrhh_idDepartamentoRRHH_seq";

-- AlterTable
ALTER TABLE "DetalleAuditoriaInventario" DROP CONSTRAINT "DetalleAuditoriaInventario_pkey",
ALTER COLUMN "idDetalleAuditoria" DROP DEFAULT,
ALTER COLUMN "idDetalleAuditoria" SET DATA TYPE TEXT,
ALTER COLUMN "idAuditoria" SET DATA TYPE TEXT,
ALTER COLUMN "idInsumo" SET DATA TYPE TEXT,
ADD CONSTRAINT "DetalleAuditoriaInventario_pkey" PRIMARY KEY ("idDetalleAuditoria");
DROP SEQUENCE "DetalleAuditoriaInventario_idDetalleAuditoria_seq";

-- AlterTable
ALTER TABLE "DetalleOrdenCompra" DROP CONSTRAINT "DetalleOrdenCompra_pkey",
ALTER COLUMN "idDetalleOrden" DROP DEFAULT,
ALTER COLUMN "idDetalleOrden" SET DATA TYPE TEXT,
ALTER COLUMN "idOrdenCompra" SET DATA TYPE TEXT,
ALTER COLUMN "idInsumo" SET DATA TYPE TEXT,
ADD CONSTRAINT "DetalleOrdenCompra_pkey" PRIMARY KEY ("idDetalleOrden");
DROP SEQUENCE "DetalleOrdenCompra_idDetalleOrden_seq";

-- AlterTable
ALTER TABLE "DetallePedido" DROP CONSTRAINT "DetallePedido_pkey",
ALTER COLUMN "idDetallePedido" DROP DEFAULT,
ALTER COLUMN "idDetallePedido" SET DATA TYPE TEXT,
ALTER COLUMN "idPedido" SET DATA TYPE TEXT,
ALTER COLUMN "idMenu" SET DATA TYPE TEXT,
ADD CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("idDetallePedido");
DROP SEQUENCE "DetallePedido_idDetallePedido_seq";

-- AlterTable
ALTER TABLE "DireccionUbicacion" DROP CONSTRAINT "DireccionUbicacion_pkey",
ALTER COLUMN "idDireccionUbicacion" DROP DEFAULT,
ALTER COLUMN "idDireccionUbicacion" SET DATA TYPE TEXT,
ALTER COLUMN "idDistrito" SET DATA TYPE TEXT,
ADD CONSTRAINT "DireccionUbicacion_pkey" PRIMARY KEY ("idDireccionUbicacion");
DROP SEQUENCE "DireccionUbicacion_idDireccionUbicacion_seq";

-- AlterTable
ALTER TABLE "Distrito" DROP CONSTRAINT "Distrito_pkey",
ALTER COLUMN "idDistrito" DROP DEFAULT,
ALTER COLUMN "idDistrito" SET DATA TYPE TEXT,
ALTER COLUMN "idProvincia" SET DATA TYPE TEXT,
ADD CONSTRAINT "Distrito_pkey" PRIMARY KEY ("idDistrito");
DROP SEQUENCE "Distrito_idDistrito_seq";

-- AlterTable
ALTER TABLE "DocumentoAdjunto" DROP CONSTRAINT "DocumentoAdjunto_pkey",
ALTER COLUMN "idDocumentoAdjunto" DROP DEFAULT,
ALTER COLUMN "idDocumentoAdjunto" SET DATA TYPE TEXT,
ALTER COLUMN "idPersona" SET DATA TYPE TEXT,
ALTER COLUMN "idTipoDocumentoAdjunto" SET DATA TYPE TEXT,
ADD CONSTRAINT "DocumentoAdjunto_pkey" PRIMARY KEY ("idDocumentoAdjunto");
DROP SEQUENCE "DocumentoAdjunto_idDocumentoAdjunto_seq";

-- AlterTable
ALTER TABLE "Empleado" DROP CONSTRAINT "Empleado_pkey",
ALTER COLUMN "idEmpleado" DROP DEFAULT,
ALTER COLUMN "idEmpleado" SET DATA TYPE TEXT,
ALTER COLUMN "idPersona" SET DATA TYPE TEXT,
ADD CONSTRAINT "Empleado_pkey" PRIMARY KEY ("idEmpleado");
DROP SEQUENCE "Empleado_idEmpleado_seq";

-- AlterTable
ALTER TABLE "EmpleadoCapacitacion" DROP CONSTRAINT "EmpleadoCapacitacion_pkey",
ALTER COLUMN "idEmpleadoCapacitacion" DROP DEFAULT,
ALTER COLUMN "idEmpleadoCapacitacion" SET DATA TYPE TEXT,
ALTER COLUMN "idEmpleado" SET DATA TYPE TEXT,
ALTER COLUMN "idCapacitacion" SET DATA TYPE TEXT,
ADD CONSTRAINT "EmpleadoCapacitacion_pkey" PRIMARY KEY ("idEmpleadoCapacitacion");
DROP SEQUENCE "EmpleadoCapacitacion_idEmpleadoCapacitacion_seq";

-- AlterTable
ALTER TABLE "EmpleadoDiaSemana" DROP CONSTRAINT "EmpleadoDiaSemana_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "idEmpleado" SET DATA TYPE TEXT,
ADD CONSTRAINT "EmpleadoDiaSemana_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "EmpleadoDiaSemana_id_seq";

-- AlterTable
ALTER TABLE "EvaluacionDesempeno" DROP CONSTRAINT "EvaluacionDesempeno_pkey",
ALTER COLUMN "idEvaluacion" DROP DEFAULT,
ALTER COLUMN "idEvaluacion" SET DATA TYPE TEXT,
ALTER COLUMN "idEmpleado" SET DATA TYPE TEXT,
ADD CONSTRAINT "EvaluacionDesempeno_pkey" PRIMARY KEY ("idEvaluacion");
DROP SEQUENCE "EvaluacionDesempeno_idEvaluacion_seq";

-- AlterTable
ALTER TABLE "HistorialEmpleado" DROP CONSTRAINT "HistorialEmpleado_pkey",
ALTER COLUMN "idHistorial" DROP DEFAULT,
ALTER COLUMN "idHistorial" SET DATA TYPE TEXT,
ALTER COLUMN "idEmpleado" SET DATA TYPE TEXT,
ALTER COLUMN "idPuestoTrabajoAnterior" SET DATA TYPE TEXT,
ALTER COLUMN "idPuestoTrabajoNuevo" SET DATA TYPE TEXT,
ADD CONSTRAINT "HistorialEmpleado_pkey" PRIMARY KEY ("idHistorial");
DROP SEQUENCE "HistorialEmpleado_idHistorial_seq";

-- AlterTable
ALTER TABLE "InfoEmpleadoRRHH" DROP CONSTRAINT "InfoEmpleadoRRHH_pkey",
ALTER COLUMN "idInfoEmpleadoRRHH" DROP DEFAULT,
ALTER COLUMN "idInfoEmpleadoRRHH" SET DATA TYPE TEXT,
ALTER COLUMN "idEmpleado" SET DATA TYPE TEXT,
ALTER COLUMN "idPuestoTrabajo" SET DATA TYPE TEXT,
ADD CONSTRAINT "InfoEmpleadoRRHH_pkey" PRIMARY KEY ("idInfoEmpleadoRRHH");
DROP SEQUENCE "InfoEmpleadoRRHH_idInfoEmpleadoRRHH_seq";

-- AlterTable
ALTER TABLE "Insumo" DROP CONSTRAINT "Insumo_pkey",
ALTER COLUMN "idInsumo" DROP DEFAULT,
ALTER COLUMN "idInsumo" SET DATA TYPE TEXT,
ALTER COLUMN "idTipoInsumo" SET DATA TYPE TEXT,
ALTER COLUMN "idProveedor" SET DATA TYPE TEXT,
ALTER COLUMN "idUnidadMedida" SET DATA TYPE TEXT,
ADD CONSTRAINT "Insumo_pkey" PRIMARY KEY ("idInsumo");
DROP SEQUENCE "Insumo_idInsumo_seq";

-- AlterTable
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_pkey",
ALTER COLUMN "idInventario" DROP DEFAULT,
ALTER COLUMN "idInventario" SET DATA TYPE TEXT,
ALTER COLUMN "idInsumo" SET DATA TYPE TEXT,
ALTER COLUMN "idProveedor" SET DATA TYPE TEXT,
ADD CONSTRAINT "Inventario_pkey" PRIMARY KEY ("idInventario");
DROP SEQUENCE "Inventario_idInventario_seq";

-- AlterTable
ALTER TABLE "InventarioAuditoria" DROP CONSTRAINT "InventarioAuditoria_pkey",
ALTER COLUMN "idAuditoria" DROP DEFAULT,
ALTER COLUMN "idAuditoria" SET DATA TYPE TEXT,
ALTER COLUMN "idUsuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "InventarioAuditoria_pkey" PRIMARY KEY ("idAuditoria");
DROP SEQUENCE "InventarioAuditoria_idAuditoria_seq";

-- AlterTable
ALTER TABLE "LogUsuario" DROP CONSTRAINT "LogUsuario_pkey",
ALTER COLUMN "idLog" DROP DEFAULT,
ALTER COLUMN "idLog" SET DATA TYPE TEXT,
ALTER COLUMN "idUsuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "LogUsuario_pkey" PRIMARY KEY ("idLog");
DROP SEQUENCE "LogUsuario_idLog_seq";

-- AlterTable
ALTER TABLE "MensajeChat" DROP CONSTRAINT "MensajeChat_pkey",
ALTER COLUMN "idMensaje" DROP DEFAULT,
ALTER COLUMN "idMensaje" SET DATA TYPE TEXT,
ALTER COLUMN "idRemitente" SET DATA TYPE TEXT,
ALTER COLUMN "idReceptor" SET DATA TYPE TEXT,
ADD CONSTRAINT "MensajeChat_pkey" PRIMARY KEY ("idMensaje");
DROP SEQUENCE "MensajeChat_idMensaje_seq";

-- AlterTable
ALTER TABLE "MensajeInterno" DROP CONSTRAINT "MensajeInterno_pkey",
ALTER COLUMN "idMensaje" DROP DEFAULT,
ALTER COLUMN "idMensaje" SET DATA TYPE TEXT,
ALTER COLUMN "idRemitente" SET DATA TYPE TEXT,
ALTER COLUMN "idDestinatario" SET DATA TYPE TEXT,
ADD CONSTRAINT "MensajeInterno_pkey" PRIMARY KEY ("idMensaje");
DROP SEQUENCE "MensajeInterno_idMensaje_seq";

-- AlterTable
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_pkey",
ALTER COLUMN "idMenu" DROP DEFAULT,
ALTER COLUMN "idMenu" SET DATA TYPE TEXT,
ALTER COLUMN "idTipoPlatillo" SET DATA TYPE TEXT,
ADD CONSTRAINT "Menu_pkey" PRIMARY KEY ("idMenu");
DROP SEQUENCE "Menu_idMenu_seq";

-- AlterTable
ALTER TABLE "Merma" DROP CONSTRAINT "Merma_pkey",
ALTER COLUMN "idMerma" DROP DEFAULT,
ALTER COLUMN "idMerma" SET DATA TYPE TEXT,
ALTER COLUMN "idInsumo" SET DATA TYPE TEXT,
ADD CONSTRAINT "Merma_pkey" PRIMARY KEY ("idMerma");
DROP SEQUENCE "Merma_idMerma_seq";

-- AlterTable
ALTER TABLE "MovimientoInventario" DROP CONSTRAINT "MovimientoInventario_pkey",
ALTER COLUMN "idMovimiento" DROP DEFAULT,
ALTER COLUMN "idMovimiento" SET DATA TYPE TEXT,
ALTER COLUMN "idInsumo" SET DATA TYPE TEXT,
ALTER COLUMN "idEmpleado" SET DATA TYPE TEXT,
ADD CONSTRAINT "MovimientoInventario_pkey" PRIMARY KEY ("idMovimiento");
DROP SEQUENCE "MovimientoInventario_idMovimiento_seq";

-- AlterTable
ALTER TABLE "Notificacion" DROP CONSTRAINT "Notificacion_pkey",
ALTER COLUMN "idNotificacion" DROP DEFAULT,
ALTER COLUMN "idNotificacion" SET DATA TYPE TEXT,
ALTER COLUMN "idUsuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "Notificacion_pkey" PRIMARY KEY ("idNotificacion");
DROP SEQUENCE "Notificacion_idNotificacion_seq";

-- AlterTable
ALTER TABLE "OrdenCompra" DROP CONSTRAINT "OrdenCompra_pkey",
ALTER COLUMN "idOrdenCompra" DROP DEFAULT,
ALTER COLUMN "idOrdenCompra" SET DATA TYPE TEXT,
ALTER COLUMN "idProveedor" SET DATA TYPE TEXT,
ADD CONSTRAINT "OrdenCompra_pkey" PRIMARY KEY ("idOrdenCompra");
DROP SEQUENCE "OrdenCompra_idOrdenCompra_seq";

-- AlterTable
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_pkey",
ALTER COLUMN "idPago" DROP DEFAULT,
ALTER COLUMN "idPago" SET DATA TYPE TEXT,
ALTER COLUMN "idTipoPago" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pago_pkey" PRIMARY KEY ("idPago");
DROP SEQUENCE "Pago_idPago_seq";

-- AlterTable
ALTER TABLE "Pais" DROP CONSTRAINT "Pais_pkey",
ALTER COLUMN "idPais" DROP DEFAULT,
ALTER COLUMN "idPais" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pais_pkey" PRIMARY KEY ("idPais");
DROP SEQUENCE "Pais_idPais_seq";

-- AlterTable
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_pkey",
ALTER COLUMN "idPedido" DROP DEFAULT,
ALTER COLUMN "idPedido" SET DATA TYPE TEXT,
ALTER COLUMN "idUsuario" SET DATA TYPE TEXT,
ALTER COLUMN "idPersona" SET DATA TYPE TEXT,
ALTER COLUMN "idMenu" SET DATA TYPE TEXT,
ALTER COLUMN "idProducto" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pedido_pkey" PRIMARY KEY ("idPedido");
DROP SEQUENCE "Pedido_idPedido_seq";

-- AlterTable
ALTER TABLE "Persona" DROP CONSTRAINT "Persona_pkey",
ALTER COLUMN "idPersona" DROP DEFAULT,
ALTER COLUMN "idPersona" SET DATA TYPE TEXT,
ALTER COLUMN "idDireccionUbicacion" SET DATA TYPE TEXT,
ALTER COLUMN "idTipoDocumento" SET DATA TYPE TEXT,
ADD CONSTRAINT "Persona_pkey" PRIMARY KEY ("idPersona");
DROP SEQUENCE "Persona_idPersona_seq";

-- AlterTable
ALTER TABLE "Producto" DROP CONSTRAINT "Producto_pkey",
ALTER COLUMN "idProducto" DROP DEFAULT,
ALTER COLUMN "idProducto" SET DATA TYPE TEXT,
ALTER COLUMN "idTipoProducto" SET DATA TYPE TEXT,
ADD CONSTRAINT "Producto_pkey" PRIMARY KEY ("idProducto");
DROP SEQUENCE "Producto_idProducto_seq";

-- AlterTable
ALTER TABLE "Proveedores" DROP CONSTRAINT "Proveedores_pkey",
ALTER COLUMN "idProveedores" DROP DEFAULT,
ALTER COLUMN "idProveedores" SET DATA TYPE TEXT,
ALTER COLUMN "idTipoProveedor" SET DATA TYPE TEXT,
ADD CONSTRAINT "Proveedores_pkey" PRIMARY KEY ("idProveedores");
DROP SEQUENCE "Proveedores_idProveedores_seq";

-- AlterTable
ALTER TABLE "Provincia" DROP CONSTRAINT "Provincia_pkey",
ALTER COLUMN "idProvincia" DROP DEFAULT,
ALTER COLUMN "idProvincia" SET DATA TYPE TEXT,
ALTER COLUMN "idDepartamento" SET DATA TYPE TEXT,
ADD CONSTRAINT "Provincia_pkey" PRIMARY KEY ("idProvincia");
DROP SEQUENCE "Provincia_idProvincia_seq";

-- AlterTable
ALTER TABLE "Puesto_trabajo" DROP CONSTRAINT "Puesto_trabajo_pkey",
ALTER COLUMN "idPuestoTrabajo" DROP DEFAULT,
ALTER COLUMN "idPuestoTrabajo" SET DATA TYPE TEXT,
ALTER COLUMN "idDepartamentoRRHH" SET DATA TYPE TEXT,
ADD CONSTRAINT "Puesto_trabajo_pkey" PRIMARY KEY ("idPuestoTrabajo");
DROP SEQUENCE "Puesto_trabajo_idPuestoTrabajo_seq";

-- AlterTable
ALTER TABLE "RecetaIngrediente" DROP CONSTRAINT "RecetaIngrediente_pkey",
ALTER COLUMN "idReceta" DROP DEFAULT,
ALTER COLUMN "idReceta" SET DATA TYPE TEXT,
ALTER COLUMN "idMenu" SET DATA TYPE TEXT,
ALTER COLUMN "idInsumo" SET DATA TYPE TEXT,
ADD CONSTRAINT "RecetaIngrediente_pkey" PRIMARY KEY ("idReceta");
DROP SEQUENCE "RecetaIngrediente_idReceta_seq";

-- AlterTable
ALTER TABLE "Tipo_Documento" DROP CONSTRAINT "Tipo_Documento_pkey",
ALTER COLUMN "idTipoDocumento" DROP DEFAULT,
ALTER COLUMN "idTipoDocumento" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tipo_Documento_pkey" PRIMARY KEY ("idTipoDocumento");
DROP SEQUENCE "Tipo_Documento_idTipoDocumento_seq";

-- AlterTable
ALTER TABLE "Tipo_Documento_Adjunto" DROP CONSTRAINT "Tipo_Documento_Adjunto_pkey",
ALTER COLUMN "idTipoDocumentoAdjunto" DROP DEFAULT,
ALTER COLUMN "idTipoDocumentoAdjunto" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tipo_Documento_Adjunto_pkey" PRIMARY KEY ("idTipoDocumentoAdjunto");
DROP SEQUENCE "Tipo_Documento_Adjunto_idTipoDocumentoAdjunto_seq";

-- AlterTable
ALTER TABLE "Tipo_comprobante" DROP CONSTRAINT "Tipo_comprobante_pkey",
ALTER COLUMN "idTipoComprobante" DROP DEFAULT,
ALTER COLUMN "idTipoComprobante" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tipo_comprobante_pkey" PRIMARY KEY ("idTipoComprobante");
DROP SEQUENCE "Tipo_comprobante_idTipoComprobante_seq";

-- AlterTable
ALTER TABLE "Tipo_insumo" DROP CONSTRAINT "Tipo_insumo_pkey",
ALTER COLUMN "idTipoInsumo" DROP DEFAULT,
ALTER COLUMN "idTipoInsumo" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tipo_insumo_pkey" PRIMARY KEY ("idTipoInsumo");
DROP SEQUENCE "Tipo_insumo_idTipoInsumo_seq";

-- AlterTable
ALTER TABLE "Tipo_pago" DROP CONSTRAINT "Tipo_pago_pkey",
ALTER COLUMN "idTipoPago" DROP DEFAULT,
ALTER COLUMN "idTipoPago" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tipo_pago_pkey" PRIMARY KEY ("idTipoPago");
DROP SEQUENCE "Tipo_pago_idTipoPago_seq";

-- AlterTable
ALTER TABLE "Tipo_platillo" DROP CONSTRAINT "Tipo_platillo_pkey",
ALTER COLUMN "idTipoPlatillo" DROP DEFAULT,
ALTER COLUMN "idTipoPlatillo" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tipo_platillo_pkey" PRIMARY KEY ("idTipoPlatillo");
DROP SEQUENCE "Tipo_platillo_idTipoPlatillo_seq";

-- AlterTable
ALTER TABLE "Tipo_producto" DROP CONSTRAINT "Tipo_producto_pkey",
ALTER COLUMN "idTipoProducto" DROP DEFAULT,
ALTER COLUMN "idTipoProducto" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tipo_producto_pkey" PRIMARY KEY ("idTipoProducto");
DROP SEQUENCE "Tipo_producto_idTipoProducto_seq";

-- AlterTable
ALTER TABLE "Tipo_proveedor" DROP CONSTRAINT "Tipo_proveedor_pkey",
ALTER COLUMN "idTipoProveedor" DROP DEFAULT,
ALTER COLUMN "idTipoProveedor" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tipo_proveedor_pkey" PRIMARY KEY ("idTipoProveedor");
DROP SEQUENCE "Tipo_proveedor_idTipoProveedor_seq";

-- AlterTable
ALTER TABLE "UnidadMedida" DROP CONSTRAINT "UnidadMedida_pkey",
ALTER COLUMN "idUnidadMedida" DROP DEFAULT,
ALTER COLUMN "idUnidadMedida" SET DATA TYPE TEXT,
ADD CONSTRAINT "UnidadMedida_pkey" PRIMARY KEY ("idUnidadMedida");
DROP SEQUENCE "UnidadMedida_idUnidadMedida_seq";

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
ALTER COLUMN "idUsuario" DROP DEFAULT,
ALTER COLUMN "idUsuario" SET DATA TYPE TEXT,
ALTER COLUMN "idEmpleado" SET DATA TYPE TEXT,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario");
DROP SEQUENCE "Usuario_idUsuario_seq";

-- AlterTable
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_pkey",
ALTER COLUMN "idVenta" DROP DEFAULT,
ALTER COLUMN "idVenta" SET DATA TYPE TEXT,
ALTER COLUMN "idPedido" SET DATA TYPE TEXT,
ALTER COLUMN "idUsuario" SET DATA TYPE TEXT,
ALTER COLUMN "idPersona" SET DATA TYPE TEXT,
ALTER COLUMN "idPago" SET DATA TYPE TEXT,
ADD CONSTRAINT "Venta_pkey" PRIMARY KEY ("idVenta");
DROP SEQUENCE "Venta_idVenta_seq";

-- AddForeignKey
ALTER TABLE "Departamento" ADD CONSTRAINT "Departamento_idPais_fkey" FOREIGN KEY ("idPais") REFERENCES "Pais"("idPais") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Provincia" ADD CONSTRAINT "Provincia_idDepartamento_fkey" FOREIGN KEY ("idDepartamento") REFERENCES "Departamento"("idDepartamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Distrito" ADD CONSTRAINT "Distrito_idProvincia_fkey" FOREIGN KEY ("idProvincia") REFERENCES "Provincia"("idProvincia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DireccionUbicacion" ADD CONSTRAINT "DireccionUbicacion_idDistrito_fkey" FOREIGN KEY ("idDistrito") REFERENCES "Distrito"("idDistrito") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentoAdjunto" ADD CONSTRAINT "DocumentoAdjunto_idPersona_fkey" FOREIGN KEY ("idPersona") REFERENCES "Persona"("idPersona") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentoAdjunto" ADD CONSTRAINT "DocumentoAdjunto_idTipoDocumentoAdjunto_fkey" FOREIGN KEY ("idTipoDocumentoAdjunto") REFERENCES "Tipo_Documento_Adjunto"("idTipoDocumentoAdjunto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Persona" ADD CONSTRAINT "Persona_idDireccionUbicacion_fkey" FOREIGN KEY ("idDireccionUbicacion") REFERENCES "DireccionUbicacion"("idDireccionUbicacion") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Persona" ADD CONSTRAINT "Persona_idTipoDocumento_fkey" FOREIGN KEY ("idTipoDocumento") REFERENCES "Tipo_Documento"("idTipoDocumento") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Empleado" ADD CONSTRAINT "Empleado_idPersona_fkey" FOREIGN KEY ("idPersona") REFERENCES "Persona"("idPersona") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmpleadoDiaSemana" ADD CONSTRAINT "EmpleadoDiaSemana_idEmpleado_fkey" FOREIGN KEY ("idEmpleado") REFERENCES "Empleado"("idEmpleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Puesto_trabajo" ADD CONSTRAINT "Puesto_trabajo_idDepartamentoRRHH_fkey" FOREIGN KEY ("idDepartamentoRRHH") REFERENCES "Departamento_rrhh"("idDepartamentoRRHH") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfoEmpleadoRRHH" ADD CONSTRAINT "InfoEmpleadoRRHH_idEmpleado_fkey" FOREIGN KEY ("idEmpleado") REFERENCES "Empleado"("idEmpleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfoEmpleadoRRHH" ADD CONSTRAINT "InfoEmpleadoRRHH_idPuestoTrabajo_fkey" FOREIGN KEY ("idPuestoTrabajo") REFERENCES "Puesto_trabajo"("idPuestoTrabajo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluacionDesempeno" ADD CONSTRAINT "EvaluacionDesempeno_idEmpleado_fkey" FOREIGN KEY ("idEmpleado") REFERENCES "Empleado"("idEmpleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialEmpleado" ADD CONSTRAINT "HistorialEmpleado_idEmpleado_fkey" FOREIGN KEY ("idEmpleado") REFERENCES "Empleado"("idEmpleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialEmpleado" ADD CONSTRAINT "HistorialEmpleado_idPuestoTrabajoAnterior_fkey" FOREIGN KEY ("idPuestoTrabajoAnterior") REFERENCES "Puesto_trabajo"("idPuestoTrabajo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialEmpleado" ADD CONSTRAINT "HistorialEmpleado_idPuestoTrabajoNuevo_fkey" FOREIGN KEY ("idPuestoTrabajoNuevo") REFERENCES "Puesto_trabajo"("idPuestoTrabajo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmpleadoCapacitacion" ADD CONSTRAINT "EmpleadoCapacitacion_idEmpleado_fkey" FOREIGN KEY ("idEmpleado") REFERENCES "Empleado"("idEmpleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmpleadoCapacitacion" ADD CONSTRAINT "EmpleadoCapacitacion_idCapacitacion_fkey" FOREIGN KEY ("idCapacitacion") REFERENCES "Capacitacion"("idCapacitacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ausencia" ADD CONSTRAINT "Ausencia_idEmpleado_fkey" FOREIGN KEY ("idEmpleado") REFERENCES "Empleado"("idEmpleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idEmpleado_fkey" FOREIGN KEY ("idEmpleado") REFERENCES "Empleado"("idEmpleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MensajeInterno" ADD CONSTRAINT "MensajeInterno_idRemitente_fkey" FOREIGN KEY ("idRemitente") REFERENCES "Usuario"("idUsuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MensajeInterno" ADD CONSTRAINT "MensajeInterno_idDestinatario_fkey" FOREIGN KEY ("idDestinatario") REFERENCES "Usuario"("idUsuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacion" ADD CONSTRAINT "Notificacion_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MensajeChat" ADD CONSTRAINT "MensajeChat_idRemitente_fkey" FOREIGN KEY ("idRemitente") REFERENCES "Usuario"("idUsuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MensajeChat" ADD CONSTRAINT "MensajeChat_idReceptor_fkey" FOREIGN KEY ("idReceptor") REFERENCES "Usuario"("idUsuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proveedores" ADD CONSTRAINT "Proveedores_idTipoProveedor_fkey" FOREIGN KEY ("idTipoProveedor") REFERENCES "Tipo_proveedor"("idTipoProveedor") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenCompra" ADD CONSTRAINT "OrdenCompra_idProveedor_fkey" FOREIGN KEY ("idProveedor") REFERENCES "Proveedores"("idProveedores") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleOrdenCompra" ADD CONSTRAINT "DetalleOrdenCompra_idOrdenCompra_fkey" FOREIGN KEY ("idOrdenCompra") REFERENCES "OrdenCompra"("idOrdenCompra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleOrdenCompra" ADD CONSTRAINT "DetalleOrdenCompra_idInsumo_fkey" FOREIGN KEY ("idInsumo") REFERENCES "Insumo"("idInsumo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insumo" ADD CONSTRAINT "Insumo_idTipoInsumo_fkey" FOREIGN KEY ("idTipoInsumo") REFERENCES "Tipo_insumo"("idTipoInsumo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insumo" ADD CONSTRAINT "Insumo_idUnidadMedida_fkey" FOREIGN KEY ("idUnidadMedida") REFERENCES "UnidadMedida"("idUnidadMedida") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insumo" ADD CONSTRAINT "Insumo_idProveedor_fkey" FOREIGN KEY ("idProveedor") REFERENCES "Proveedores"("idProveedores") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_idInsumo_fkey" FOREIGN KEY ("idInsumo") REFERENCES "Insumo"("idInsumo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_idProveedor_fkey" FOREIGN KEY ("idProveedor") REFERENCES "Proveedores"("idProveedores") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventarioAuditoria" ADD CONSTRAINT "InventarioAuditoria_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleAuditoriaInventario" ADD CONSTRAINT "DetalleAuditoriaInventario_idAuditoria_fkey" FOREIGN KEY ("idAuditoria") REFERENCES "InventarioAuditoria"("idAuditoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimientoInventario" ADD CONSTRAINT "MovimientoInventario_idInsumo_fkey" FOREIGN KEY ("idInsumo") REFERENCES "Insumo"("idInsumo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimientoInventario" ADD CONSTRAINT "MovimientoInventario_idEmpleado_fkey" FOREIGN KEY ("idEmpleado") REFERENCES "Empleado"("idEmpleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Merma" ADD CONSTRAINT "Merma_idInsumo_fkey" FOREIGN KEY ("idInsumo") REFERENCES "Insumo"("idInsumo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_idTipoProducto_fkey" FOREIGN KEY ("idTipoProducto") REFERENCES "Tipo_producto"("idTipoProducto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_idTipoPlatillo_fkey" FOREIGN KEY ("idTipoPlatillo") REFERENCES "Tipo_platillo"("idTipoPlatillo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecetaIngrediente" ADD CONSTRAINT "RecetaIngrediente_idMenu_fkey" FOREIGN KEY ("idMenu") REFERENCES "Menu"("idMenu") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecetaIngrediente" ADD CONSTRAINT "RecetaIngrediente_idInsumo_fkey" FOREIGN KEY ("idInsumo") REFERENCES "Insumo"("idInsumo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idPersona_fkey" FOREIGN KEY ("idPersona") REFERENCES "Persona"("idPersona") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idMenu_fkey" FOREIGN KEY ("idMenu") REFERENCES "Menu"("idMenu") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Producto"("idProducto") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_idPedido_fkey" FOREIGN KEY ("idPedido") REFERENCES "Pedido"("idPedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_idMenu_fkey" FOREIGN KEY ("idMenu") REFERENCES "Menu"("idMenu") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_idTipoPago_fkey" FOREIGN KEY ("idTipoPago") REFERENCES "Tipo_pago"("idTipoPago") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_idPago_fkey" FOREIGN KEY ("idPago") REFERENCES "Pago"("idPago") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_idPersona_fkey" FOREIGN KEY ("idPersona") REFERENCES "Persona"("idPersona") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_idPedido_fkey" FOREIGN KEY ("idPedido") REFERENCES "Pedido"("idPedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comprobante" ADD CONSTRAINT "Comprobante_idVenta_fkey" FOREIGN KEY ("idVenta") REFERENCES "Venta"("idVenta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comprobante" ADD CONSTRAINT "Comprobante_idTipoComprobante_fkey" FOREIGN KEY ("idTipoComprobante") REFERENCES "Tipo_comprobante"("idTipoComprobante") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogUsuario" ADD CONSTRAINT "LogUsuario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE SET NULL ON UPDATE CASCADE;
