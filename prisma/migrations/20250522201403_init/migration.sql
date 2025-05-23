/*
  Warnings:

  - The primary key for the `Ausencia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idAusencia` column on the `Ausencia` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Capacitacion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idCapacitacion` column on the `Capacitacion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Comprobante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idComprobante` column on the `Comprobante` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Departamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idDepartamento` column on the `Departamento` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Departamento_rrhh` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idDepartamentoRRHH` column on the `Departamento_rrhh` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `DetalleAuditoriaInventario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idDetalleAuditoria` column on the `DetalleAuditoriaInventario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `DetalleOrdenCompra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idDetalleOrden` column on the `DetalleOrdenCompra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `DetallePedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idDetallePedido` column on the `DetallePedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idMenu` column on the `DetallePedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `DireccionUbicacion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idDireccionUbicacion` column on the `DireccionUbicacion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Distrito` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idDistrito` column on the `Distrito` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `DocumentoAdjunto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idDocumentoAdjunto` column on the `DocumentoAdjunto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Empleado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idEmpleado` column on the `Empleado` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `EmpleadoCapacitacion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idEmpleadoCapacitacion` column on the `EmpleadoCapacitacion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `EmpleadoDiaSemana` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `EmpleadoDiaSemana` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `EvaluacionDesempeno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idEvaluacion` column on the `EvaluacionDesempeno` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `HistorialEmpleado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idHistorial` column on the `HistorialEmpleado` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idPuestoTrabajoAnterior` column on the `HistorialEmpleado` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idPuestoTrabajoNuevo` column on the `HistorialEmpleado` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `InfoEmpleadoRRHH` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idInfoEmpleadoRRHH` column on the `InfoEmpleadoRRHH` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idPuestoTrabajo` column on the `InfoEmpleadoRRHH` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Insumo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idInsumo` column on the `Insumo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idProveedor` column on the `Insumo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Inventario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idInventario` column on the `Inventario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idProveedor` column on the `Inventario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `InventarioAuditoria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idAuditoria` column on the `InventarioAuditoria` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `LogUsuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idLog` column on the `LogUsuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idUsuario` column on the `LogUsuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MensajeChat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idMensaje` column on the `MensajeChat` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idRemitente` column on the `MensajeChat` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idReceptor` column on the `MensajeChat` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MensajeInterno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idMensaje` column on the `MensajeInterno` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idRemitente` column on the `MensajeInterno` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idDestinatario` column on the `MensajeInterno` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Menu` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idMenu` column on the `Menu` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Merma` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idMerma` column on the `Merma` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MovimientoInventario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idMovimiento` column on the `MovimientoInventario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Notificacion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idNotificacion` column on the `Notificacion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idUsuario` column on the `Notificacion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `OrdenCompra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idOrdenCompra` column on the `OrdenCompra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Pago` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idPago` column on the `Pago` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Pais` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idPais` column on the `Pais` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Pedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idPedido` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idUsuario` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idPersona` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idMenu` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idProducto` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Persona` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idPersona` column on the `Persona` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idDireccionUbicacion` column on the `Persona` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idTipoDocumento` column on the `Persona` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Producto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idProducto` column on the `Producto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Proveedores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idProveedores` column on the `Proveedores` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idTipoProveedor` column on the `Proveedores` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Provincia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idProvincia` column on the `Provincia` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Puesto_trabajo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idPuestoTrabajo` column on the `Puesto_trabajo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `RecetaIngrediente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idReceta` column on the `RecetaIngrediente` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tipo_Documento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idTipoDocumento` column on the `Tipo_Documento` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tipo_Documento_Adjunto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idTipoDocumentoAdjunto` column on the `Tipo_Documento_Adjunto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tipo_comprobante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idTipoComprobante` column on the `Tipo_comprobante` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tipo_insumo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idTipoInsumo` column on the `Tipo_insumo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tipo_pago` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idTipoPago` column on the `Tipo_pago` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tipo_platillo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idTipoPlatillo` column on the `Tipo_platillo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tipo_producto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idTipoProducto` column on the `Tipo_producto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tipo_proveedor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idTipoProveedor` column on the `Tipo_proveedor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UnidadMedida` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idUnidadMedida` column on the `UnidadMedida` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idUsuario` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Venta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idVenta` column on the `Venta` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idPersona` column on the `Venta` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `idPago` column on the `Venta` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `idEmpleado` on the `Ausencia` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idVenta` on the `Comprobante` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idTipoComprobante` on the `Comprobante` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idPais` on the `Departamento` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idAuditoria` on the `DetalleAuditoriaInventario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idInsumo` on the `DetalleAuditoriaInventario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idOrdenCompra` on the `DetalleOrdenCompra` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idInsumo` on the `DetalleOrdenCompra` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idPedido` on the `DetallePedido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idDistrito` on the `DireccionUbicacion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idProvincia` on the `Distrito` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idPersona` on the `DocumentoAdjunto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idTipoDocumentoAdjunto` on the `DocumentoAdjunto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idPersona` on the `Empleado` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idEmpleado` on the `EmpleadoCapacitacion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idCapacitacion` on the `EmpleadoCapacitacion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idEmpleado` on the `EmpleadoDiaSemana` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idEmpleado` on the `EvaluacionDesempeno` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idEmpleado` on the `HistorialEmpleado` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idEmpleado` on the `InfoEmpleadoRRHH` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idTipoInsumo` on the `Insumo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idUnidadMedida` on the `Insumo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idInsumo` on the `Inventario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idUsuario` on the `InventarioAuditoria` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idTipoPlatillo` on the `Menu` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idInsumo` on the `Merma` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idInsumo` on the `MovimientoInventario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idEmpleado` on the `MovimientoInventario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idProveedor` on the `OrdenCompra` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idTipoPago` on the `Pago` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idTipoProducto` on the `Producto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idDepartamento` on the `Provincia` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idDepartamentoRRHH` on the `Puesto_trabajo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idMenu` on the `RecetaIngrediente` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idInsumo` on the `RecetaIngrediente` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idEmpleado` on the `Usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idPedido` on the `Venta` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idUsuario` on the `Venta` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

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
DROP COLUMN "idAusencia",
ADD COLUMN     "idAusencia" SERIAL NOT NULL,
DROP COLUMN "idEmpleado",
ADD COLUMN     "idEmpleado" INTEGER NOT NULL,
ADD CONSTRAINT "Ausencia_pkey" PRIMARY KEY ("idAusencia");

-- AlterTable
ALTER TABLE "Capacitacion" DROP CONSTRAINT "Capacitacion_pkey",
DROP COLUMN "idCapacitacion",
ADD COLUMN     "idCapacitacion" SERIAL NOT NULL,
ADD CONSTRAINT "Capacitacion_pkey" PRIMARY KEY ("idCapacitacion");

-- AlterTable
ALTER TABLE "Comprobante" DROP CONSTRAINT "Comprobante_pkey",
DROP COLUMN "idComprobante",
ADD COLUMN     "idComprobante" SERIAL NOT NULL,
DROP COLUMN "idVenta",
ADD COLUMN     "idVenta" INTEGER NOT NULL,
DROP COLUMN "idTipoComprobante",
ADD COLUMN     "idTipoComprobante" INTEGER NOT NULL,
ADD CONSTRAINT "Comprobante_pkey" PRIMARY KEY ("idComprobante");

-- AlterTable
ALTER TABLE "Departamento" DROP CONSTRAINT "Departamento_pkey",
DROP COLUMN "idDepartamento",
ADD COLUMN     "idDepartamento" SERIAL NOT NULL,
DROP COLUMN "idPais",
ADD COLUMN     "idPais" INTEGER NOT NULL,
ADD CONSTRAINT "Departamento_pkey" PRIMARY KEY ("idDepartamento");

-- AlterTable
ALTER TABLE "Departamento_rrhh" DROP CONSTRAINT "Departamento_rrhh_pkey",
DROP COLUMN "idDepartamentoRRHH",
ADD COLUMN     "idDepartamentoRRHH" SERIAL NOT NULL,
ADD CONSTRAINT "Departamento_rrhh_pkey" PRIMARY KEY ("idDepartamentoRRHH");

-- AlterTable
ALTER TABLE "DetalleAuditoriaInventario" DROP CONSTRAINT "DetalleAuditoriaInventario_pkey",
DROP COLUMN "idDetalleAuditoria",
ADD COLUMN     "idDetalleAuditoria" SERIAL NOT NULL,
DROP COLUMN "idAuditoria",
ADD COLUMN     "idAuditoria" INTEGER NOT NULL,
DROP COLUMN "idInsumo",
ADD COLUMN     "idInsumo" INTEGER NOT NULL,
ADD CONSTRAINT "DetalleAuditoriaInventario_pkey" PRIMARY KEY ("idDetalleAuditoria");

-- AlterTable
ALTER TABLE "DetalleOrdenCompra" DROP CONSTRAINT "DetalleOrdenCompra_pkey",
DROP COLUMN "idDetalleOrden",
ADD COLUMN     "idDetalleOrden" SERIAL NOT NULL,
DROP COLUMN "idOrdenCompra",
ADD COLUMN     "idOrdenCompra" INTEGER NOT NULL,
DROP COLUMN "idInsumo",
ADD COLUMN     "idInsumo" INTEGER NOT NULL,
ADD CONSTRAINT "DetalleOrdenCompra_pkey" PRIMARY KEY ("idDetalleOrden");

-- AlterTable
ALTER TABLE "DetallePedido" DROP CONSTRAINT "DetallePedido_pkey",
DROP COLUMN "idDetallePedido",
ADD COLUMN     "idDetallePedido" SERIAL NOT NULL,
DROP COLUMN "idPedido",
ADD COLUMN     "idPedido" INTEGER NOT NULL,
DROP COLUMN "idMenu",
ADD COLUMN     "idMenu" INTEGER,
ADD CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("idDetallePedido");

-- AlterTable
ALTER TABLE "DireccionUbicacion" DROP CONSTRAINT "DireccionUbicacion_pkey",
DROP COLUMN "idDireccionUbicacion",
ADD COLUMN     "idDireccionUbicacion" SERIAL NOT NULL,
DROP COLUMN "idDistrito",
ADD COLUMN     "idDistrito" INTEGER NOT NULL,
ADD CONSTRAINT "DireccionUbicacion_pkey" PRIMARY KEY ("idDireccionUbicacion");

-- AlterTable
ALTER TABLE "Distrito" DROP CONSTRAINT "Distrito_pkey",
DROP COLUMN "idDistrito",
ADD COLUMN     "idDistrito" SERIAL NOT NULL,
DROP COLUMN "idProvincia",
ADD COLUMN     "idProvincia" INTEGER NOT NULL,
ADD CONSTRAINT "Distrito_pkey" PRIMARY KEY ("idDistrito");

-- AlterTable
ALTER TABLE "DocumentoAdjunto" DROP CONSTRAINT "DocumentoAdjunto_pkey",
DROP COLUMN "idDocumentoAdjunto",
ADD COLUMN     "idDocumentoAdjunto" SERIAL NOT NULL,
DROP COLUMN "idPersona",
ADD COLUMN     "idPersona" INTEGER NOT NULL,
DROP COLUMN "idTipoDocumentoAdjunto",
ADD COLUMN     "idTipoDocumentoAdjunto" INTEGER NOT NULL,
ADD CONSTRAINT "DocumentoAdjunto_pkey" PRIMARY KEY ("idDocumentoAdjunto");

-- AlterTable
ALTER TABLE "Empleado" DROP CONSTRAINT "Empleado_pkey",
DROP COLUMN "idEmpleado",
ADD COLUMN     "idEmpleado" SERIAL NOT NULL,
DROP COLUMN "idPersona",
ADD COLUMN     "idPersona" INTEGER NOT NULL,
ADD CONSTRAINT "Empleado_pkey" PRIMARY KEY ("idEmpleado");

-- AlterTable
ALTER TABLE "EmpleadoCapacitacion" DROP CONSTRAINT "EmpleadoCapacitacion_pkey",
DROP COLUMN "idEmpleadoCapacitacion",
ADD COLUMN     "idEmpleadoCapacitacion" SERIAL NOT NULL,
DROP COLUMN "idEmpleado",
ADD COLUMN     "idEmpleado" INTEGER NOT NULL,
DROP COLUMN "idCapacitacion",
ADD COLUMN     "idCapacitacion" INTEGER NOT NULL,
ADD CONSTRAINT "EmpleadoCapacitacion_pkey" PRIMARY KEY ("idEmpleadoCapacitacion");

-- AlterTable
ALTER TABLE "EmpleadoDiaSemana" DROP CONSTRAINT "EmpleadoDiaSemana_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "idEmpleado",
ADD COLUMN     "idEmpleado" INTEGER NOT NULL,
ADD CONSTRAINT "EmpleadoDiaSemana_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "EvaluacionDesempeno" DROP CONSTRAINT "EvaluacionDesempeno_pkey",
DROP COLUMN "idEvaluacion",
ADD COLUMN     "idEvaluacion" SERIAL NOT NULL,
DROP COLUMN "idEmpleado",
ADD COLUMN     "idEmpleado" INTEGER NOT NULL,
ADD CONSTRAINT "EvaluacionDesempeno_pkey" PRIMARY KEY ("idEvaluacion");

-- AlterTable
ALTER TABLE "HistorialEmpleado" DROP CONSTRAINT "HistorialEmpleado_pkey",
DROP COLUMN "idHistorial",
ADD COLUMN     "idHistorial" SERIAL NOT NULL,
DROP COLUMN "idEmpleado",
ADD COLUMN     "idEmpleado" INTEGER NOT NULL,
DROP COLUMN "idPuestoTrabajoAnterior",
ADD COLUMN     "idPuestoTrabajoAnterior" INTEGER,
DROP COLUMN "idPuestoTrabajoNuevo",
ADD COLUMN     "idPuestoTrabajoNuevo" INTEGER,
ADD CONSTRAINT "HistorialEmpleado_pkey" PRIMARY KEY ("idHistorial");

-- AlterTable
ALTER TABLE "InfoEmpleadoRRHH" DROP CONSTRAINT "InfoEmpleadoRRHH_pkey",
DROP COLUMN "idInfoEmpleadoRRHH",
ADD COLUMN     "idInfoEmpleadoRRHH" SERIAL NOT NULL,
DROP COLUMN "idEmpleado",
ADD COLUMN     "idEmpleado" INTEGER NOT NULL,
DROP COLUMN "idPuestoTrabajo",
ADD COLUMN     "idPuestoTrabajo" INTEGER,
ADD CONSTRAINT "InfoEmpleadoRRHH_pkey" PRIMARY KEY ("idInfoEmpleadoRRHH");

-- AlterTable
ALTER TABLE "Insumo" DROP CONSTRAINT "Insumo_pkey",
DROP COLUMN "idInsumo",
ADD COLUMN     "idInsumo" SERIAL NOT NULL,
DROP COLUMN "idTipoInsumo",
ADD COLUMN     "idTipoInsumo" INTEGER NOT NULL,
DROP COLUMN "idProveedor",
ADD COLUMN     "idProveedor" INTEGER,
DROP COLUMN "idUnidadMedida",
ADD COLUMN     "idUnidadMedida" INTEGER NOT NULL,
ADD CONSTRAINT "Insumo_pkey" PRIMARY KEY ("idInsumo");

-- AlterTable
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_pkey",
DROP COLUMN "idInventario",
ADD COLUMN     "idInventario" SERIAL NOT NULL,
DROP COLUMN "idInsumo",
ADD COLUMN     "idInsumo" INTEGER NOT NULL,
DROP COLUMN "idProveedor",
ADD COLUMN     "idProveedor" INTEGER,
ADD CONSTRAINT "Inventario_pkey" PRIMARY KEY ("idInventario");

-- AlterTable
ALTER TABLE "InventarioAuditoria" DROP CONSTRAINT "InventarioAuditoria_pkey",
DROP COLUMN "idAuditoria",
ADD COLUMN     "idAuditoria" SERIAL NOT NULL,
DROP COLUMN "idUsuario",
ADD COLUMN     "idUsuario" INTEGER NOT NULL,
ADD CONSTRAINT "InventarioAuditoria_pkey" PRIMARY KEY ("idAuditoria");

-- AlterTable
ALTER TABLE "LogUsuario" DROP CONSTRAINT "LogUsuario_pkey",
DROP COLUMN "idLog",
ADD COLUMN     "idLog" SERIAL NOT NULL,
DROP COLUMN "idUsuario",
ADD COLUMN     "idUsuario" INTEGER,
ADD CONSTRAINT "LogUsuario_pkey" PRIMARY KEY ("idLog");

-- AlterTable
ALTER TABLE "MensajeChat" DROP CONSTRAINT "MensajeChat_pkey",
DROP COLUMN "idMensaje",
ADD COLUMN     "idMensaje" SERIAL NOT NULL,
DROP COLUMN "idRemitente",
ADD COLUMN     "idRemitente" INTEGER,
DROP COLUMN "idReceptor",
ADD COLUMN     "idReceptor" INTEGER,
ADD CONSTRAINT "MensajeChat_pkey" PRIMARY KEY ("idMensaje");

-- AlterTable
ALTER TABLE "MensajeInterno" DROP CONSTRAINT "MensajeInterno_pkey",
DROP COLUMN "idMensaje",
ADD COLUMN     "idMensaje" SERIAL NOT NULL,
DROP COLUMN "idRemitente",
ADD COLUMN     "idRemitente" INTEGER,
DROP COLUMN "idDestinatario",
ADD COLUMN     "idDestinatario" INTEGER,
ADD CONSTRAINT "MensajeInterno_pkey" PRIMARY KEY ("idMensaje");

-- AlterTable
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_pkey",
DROP COLUMN "idMenu",
ADD COLUMN     "idMenu" SERIAL NOT NULL,
DROP COLUMN "idTipoPlatillo",
ADD COLUMN     "idTipoPlatillo" INTEGER NOT NULL,
ADD CONSTRAINT "Menu_pkey" PRIMARY KEY ("idMenu");

-- AlterTable
ALTER TABLE "Merma" DROP CONSTRAINT "Merma_pkey",
DROP COLUMN "idMerma",
ADD COLUMN     "idMerma" SERIAL NOT NULL,
DROP COLUMN "idInsumo",
ADD COLUMN     "idInsumo" INTEGER NOT NULL,
ADD CONSTRAINT "Merma_pkey" PRIMARY KEY ("idMerma");

-- AlterTable
ALTER TABLE "MovimientoInventario" DROP CONSTRAINT "MovimientoInventario_pkey",
DROP COLUMN "idMovimiento",
ADD COLUMN     "idMovimiento" SERIAL NOT NULL,
DROP COLUMN "idInsumo",
ADD COLUMN     "idInsumo" INTEGER NOT NULL,
DROP COLUMN "idEmpleado",
ADD COLUMN     "idEmpleado" INTEGER NOT NULL,
ADD CONSTRAINT "MovimientoInventario_pkey" PRIMARY KEY ("idMovimiento");

-- AlterTable
ALTER TABLE "Notificacion" DROP CONSTRAINT "Notificacion_pkey",
DROP COLUMN "idNotificacion",
ADD COLUMN     "idNotificacion" SERIAL NOT NULL,
DROP COLUMN "idUsuario",
ADD COLUMN     "idUsuario" INTEGER,
ADD CONSTRAINT "Notificacion_pkey" PRIMARY KEY ("idNotificacion");

-- AlterTable
ALTER TABLE "OrdenCompra" DROP CONSTRAINT "OrdenCompra_pkey",
DROP COLUMN "idOrdenCompra",
ADD COLUMN     "idOrdenCompra" SERIAL NOT NULL,
DROP COLUMN "idProveedor",
ADD COLUMN     "idProveedor" INTEGER NOT NULL,
ADD CONSTRAINT "OrdenCompra_pkey" PRIMARY KEY ("idOrdenCompra");

-- AlterTable
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_pkey",
DROP COLUMN "idPago",
ADD COLUMN     "idPago" SERIAL NOT NULL,
DROP COLUMN "idTipoPago",
ADD COLUMN     "idTipoPago" INTEGER NOT NULL,
ADD CONSTRAINT "Pago_pkey" PRIMARY KEY ("idPago");

-- AlterTable
ALTER TABLE "Pais" DROP CONSTRAINT "Pais_pkey",
DROP COLUMN "idPais",
ADD COLUMN     "idPais" SERIAL NOT NULL,
ADD CONSTRAINT "Pais_pkey" PRIMARY KEY ("idPais");

-- AlterTable
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_pkey",
DROP COLUMN "idPedido",
ADD COLUMN     "idPedido" SERIAL NOT NULL,
DROP COLUMN "idUsuario",
ADD COLUMN     "idUsuario" INTEGER,
DROP COLUMN "idPersona",
ADD COLUMN     "idPersona" INTEGER,
DROP COLUMN "idMenu",
ADD COLUMN     "idMenu" INTEGER,
DROP COLUMN "idProducto",
ADD COLUMN     "idProducto" INTEGER,
ADD CONSTRAINT "Pedido_pkey" PRIMARY KEY ("idPedido");

-- AlterTable
ALTER TABLE "Persona" DROP CONSTRAINT "Persona_pkey",
DROP COLUMN "idPersona",
ADD COLUMN     "idPersona" SERIAL NOT NULL,
DROP COLUMN "idDireccionUbicacion",
ADD COLUMN     "idDireccionUbicacion" INTEGER,
DROP COLUMN "idTipoDocumento",
ADD COLUMN     "idTipoDocumento" INTEGER,
ADD CONSTRAINT "Persona_pkey" PRIMARY KEY ("idPersona");

-- AlterTable
ALTER TABLE "Producto" DROP CONSTRAINT "Producto_pkey",
DROP COLUMN "idProducto",
ADD COLUMN     "idProducto" SERIAL NOT NULL,
DROP COLUMN "idTipoProducto",
ADD COLUMN     "idTipoProducto" INTEGER NOT NULL,
ADD CONSTRAINT "Producto_pkey" PRIMARY KEY ("idProducto");

-- AlterTable
ALTER TABLE "Proveedores" DROP CONSTRAINT "Proveedores_pkey",
DROP COLUMN "idProveedores",
ADD COLUMN     "idProveedores" SERIAL NOT NULL,
DROP COLUMN "idTipoProveedor",
ADD COLUMN     "idTipoProveedor" INTEGER,
ADD CONSTRAINT "Proveedores_pkey" PRIMARY KEY ("idProveedores");

-- AlterTable
ALTER TABLE "Provincia" DROP CONSTRAINT "Provincia_pkey",
DROP COLUMN "idProvincia",
ADD COLUMN     "idProvincia" SERIAL NOT NULL,
DROP COLUMN "idDepartamento",
ADD COLUMN     "idDepartamento" INTEGER NOT NULL,
ADD CONSTRAINT "Provincia_pkey" PRIMARY KEY ("idProvincia");

-- AlterTable
ALTER TABLE "Puesto_trabajo" DROP CONSTRAINT "Puesto_trabajo_pkey",
DROP COLUMN "idPuestoTrabajo",
ADD COLUMN     "idPuestoTrabajo" SERIAL NOT NULL,
DROP COLUMN "idDepartamentoRRHH",
ADD COLUMN     "idDepartamentoRRHH" INTEGER NOT NULL,
ADD CONSTRAINT "Puesto_trabajo_pkey" PRIMARY KEY ("idPuestoTrabajo");

-- AlterTable
ALTER TABLE "RecetaIngrediente" DROP CONSTRAINT "RecetaIngrediente_pkey",
DROP COLUMN "idReceta",
ADD COLUMN     "idReceta" SERIAL NOT NULL,
DROP COLUMN "idMenu",
ADD COLUMN     "idMenu" INTEGER NOT NULL,
DROP COLUMN "idInsumo",
ADD COLUMN     "idInsumo" INTEGER NOT NULL,
ADD CONSTRAINT "RecetaIngrediente_pkey" PRIMARY KEY ("idReceta");

-- AlterTable
ALTER TABLE "Tipo_Documento" DROP CONSTRAINT "Tipo_Documento_pkey",
DROP COLUMN "idTipoDocumento",
ADD COLUMN     "idTipoDocumento" SERIAL NOT NULL,
ADD CONSTRAINT "Tipo_Documento_pkey" PRIMARY KEY ("idTipoDocumento");

-- AlterTable
ALTER TABLE "Tipo_Documento_Adjunto" DROP CONSTRAINT "Tipo_Documento_Adjunto_pkey",
DROP COLUMN "idTipoDocumentoAdjunto",
ADD COLUMN     "idTipoDocumentoAdjunto" SERIAL NOT NULL,
ADD CONSTRAINT "Tipo_Documento_Adjunto_pkey" PRIMARY KEY ("idTipoDocumentoAdjunto");

-- AlterTable
ALTER TABLE "Tipo_comprobante" DROP CONSTRAINT "Tipo_comprobante_pkey",
DROP COLUMN "idTipoComprobante",
ADD COLUMN     "idTipoComprobante" SERIAL NOT NULL,
ADD CONSTRAINT "Tipo_comprobante_pkey" PRIMARY KEY ("idTipoComprobante");

-- AlterTable
ALTER TABLE "Tipo_insumo" DROP CONSTRAINT "Tipo_insumo_pkey",
DROP COLUMN "idTipoInsumo",
ADD COLUMN     "idTipoInsumo" SERIAL NOT NULL,
ADD CONSTRAINT "Tipo_insumo_pkey" PRIMARY KEY ("idTipoInsumo");

-- AlterTable
ALTER TABLE "Tipo_pago" DROP CONSTRAINT "Tipo_pago_pkey",
DROP COLUMN "idTipoPago",
ADD COLUMN     "idTipoPago" SERIAL NOT NULL,
ADD CONSTRAINT "Tipo_pago_pkey" PRIMARY KEY ("idTipoPago");

-- AlterTable
ALTER TABLE "Tipo_platillo" DROP CONSTRAINT "Tipo_platillo_pkey",
DROP COLUMN "idTipoPlatillo",
ADD COLUMN     "idTipoPlatillo" SERIAL NOT NULL,
ADD CONSTRAINT "Tipo_platillo_pkey" PRIMARY KEY ("idTipoPlatillo");

-- AlterTable
ALTER TABLE "Tipo_producto" DROP CONSTRAINT "Tipo_producto_pkey",
DROP COLUMN "idTipoProducto",
ADD COLUMN     "idTipoProducto" SERIAL NOT NULL,
ADD CONSTRAINT "Tipo_producto_pkey" PRIMARY KEY ("idTipoProducto");

-- AlterTable
ALTER TABLE "Tipo_proveedor" DROP CONSTRAINT "Tipo_proveedor_pkey",
DROP COLUMN "idTipoProveedor",
ADD COLUMN     "idTipoProveedor" SERIAL NOT NULL,
ADD CONSTRAINT "Tipo_proveedor_pkey" PRIMARY KEY ("idTipoProveedor");

-- AlterTable
ALTER TABLE "UnidadMedida" DROP CONSTRAINT "UnidadMedida_pkey",
DROP COLUMN "idUnidadMedida",
ADD COLUMN     "idUnidadMedida" SERIAL NOT NULL,
ADD CONSTRAINT "UnidadMedida_pkey" PRIMARY KEY ("idUnidadMedida");

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
DROP COLUMN "idUsuario",
ADD COLUMN     "idUsuario" SERIAL NOT NULL,
DROP COLUMN "idEmpleado",
ADD COLUMN     "idEmpleado" INTEGER NOT NULL,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario");

-- AlterTable
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_pkey",
DROP COLUMN "idVenta",
ADD COLUMN     "idVenta" SERIAL NOT NULL,
DROP COLUMN "idPedido",
ADD COLUMN     "idPedido" INTEGER NOT NULL,
DROP COLUMN "idUsuario",
ADD COLUMN     "idUsuario" INTEGER NOT NULL,
DROP COLUMN "idPersona",
ADD COLUMN     "idPersona" INTEGER,
DROP COLUMN "idPago",
ADD COLUMN     "idPago" INTEGER,
ADD CONSTRAINT "Venta_pkey" PRIMARY KEY ("idVenta");

-- CreateIndex
CREATE UNIQUE INDEX "Comprobante_serie_correlativo_idTipoComprobante_key" ON "Comprobante"("serie", "correlativo", "idTipoComprobante");

-- CreateIndex
CREATE INDEX "DocumentoAdjunto_idPersona_idx" ON "DocumentoAdjunto"("idPersona");

-- CreateIndex
CREATE INDEX "DocumentoAdjunto_idTipoDocumentoAdjunto_idx" ON "DocumentoAdjunto"("idTipoDocumentoAdjunto");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_idPersona_key" ON "Empleado"("idPersona");

-- CreateIndex
CREATE UNIQUE INDEX "EmpleadoCapacitacion_idEmpleado_idCapacitacion_key" ON "EmpleadoCapacitacion"("idEmpleado", "idCapacitacion");

-- CreateIndex
CREATE UNIQUE INDEX "EmpleadoDiaSemana_idEmpleado_dia_key" ON "EmpleadoDiaSemana"("idEmpleado", "dia");

-- CreateIndex
CREATE UNIQUE INDEX "InfoEmpleadoRRHH_idEmpleado_key" ON "InfoEmpleadoRRHH"("idEmpleado");

-- CreateIndex
CREATE UNIQUE INDEX "RecetaIngrediente_idMenu_idInsumo_key" ON "RecetaIngrediente"("idMenu", "idInsumo");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idEmpleado_key" ON "Usuario"("idEmpleado");

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
