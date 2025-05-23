// src/actions/inventario/inventario-actions.ts
"use server"
import { convertirInsumosDecimal } from '@/lib/helpers/Formatear';
import prisma from '@/lib/prisma'

// ==================== TIPOS DE PROVEEDOR ====================

// Crear tipo de proveedor
export async function crearTipoProveedor(data: { 
  nombreTipo: string; 
  descripcion?: string; 
}) {
  try {
    const tipoProveedor = await prisma.tipo_proveedor.create({
      data: {
        nombreTipo: data.nombreTipo,
        descripcion: data.descripcion,
      },
    })
    return { ok: true, data: tipoProveedor }
  } catch (error) {
    console.error("Error al crear tipo de proveedor:", error)
    return { ok: false, message: 'Error al crear tipo de proveedor', error }
  }
}

// Obtener todos los tipos de proveedor
export async function obtenerTiposProveedor() {
  try {
    const tiposProveedor = await prisma.tipo_proveedor.findMany({
      where: { estado: true },
      orderBy: { nombreTipo: 'asc' }
    })
    return { ok: true, data: tiposProveedor }
  } catch (error) {
    console.error("Error al obtener tipos de proveedor:", error)
    return { ok: false, message: 'Error al obtener tipos de proveedor', error }
  }
}

// Actualizar tipo de proveedor
export async function actualizarTipoProveedor(id: number, data: { 
  nombreTipo?: string; 
  descripcion?: string 
}) {
  try {
    const tipoProveedor = await prisma.tipo_proveedor.update({
      where: { idTipoProveedor: id },
      data: {
        nombreTipo: data.nombreTipo,
        descripcion: data.descripcion,
      },
    })
    return { ok: true, data: tipoProveedor }
  } catch (error) {
    console.error("Error al actualizar tipo de proveedor:", error)
    return { ok: false, message: 'Error al actualizar tipo de proveedor', error }
  }
}

// Eliminar tipo de proveedor (soft delete)
export async function eliminarTipoProveedor(id: number) {
  try {
    await prisma.tipo_proveedor.update({
      where: { idTipoProveedor: id },
      data: { estado: false }
    })
    return { ok: true, message: 'Tipo de proveedor eliminado correctamente' }
  } catch (error) {
    console.error("Error al eliminar tipo de proveedor:", error)
    return { ok: false, message: 'Error al eliminar tipo de proveedor', error }
  }
}

// ==================== PROVEEDORES ====================

// Crear proveedor
export async function crearProveedor(data: { 
  idTipoProveedor?: number;
  nombreProveedor: string;
  ruc?: string;
  telefono?: string;
  correo?: string;
  direccion?: string;
  personaContacto?: string;
  telefonoContacto?: string;
}) {
  try {
    const proveedor = await prisma.proveedores.create({
      data: {
        idTipoProveedor: data.idTipoProveedor,
        nombreProveedor: data.nombreProveedor,
        ruc: data.ruc,
        telefono: data.telefono,
        correo: data.correo,
        direccion: data.direccion,
        personaContacto: data.personaContacto,
        telefonoContacto: data.telefonoContacto,
      },
      include: {
        tipoProveedor: true,
      }
    })
    return { ok: true, data: proveedor }
  } catch (error) {
    console.error("Error al crear proveedor:", error)
    return { ok: false, message: 'Error al crear proveedor', error }
  }
}

// Obtener todos los proveedores
export async function obtenerProveedores() {
  try {
    const proveedores = await prisma.proveedores.findMany({
      where: { estado: true },
      include: {
        tipoProveedor: true,
      },
      orderBy: { nombreProveedor: 'asc' }
    })
    return { ok: true, data: proveedores }
  } catch (error) {
    console.error("Error al obtener proveedores:", error)
    return { ok: false, message: 'Error al obtener proveedores', error }
  }
}

// Obtener proveedor por ID - CORREGIDO
export async function obtenerProveedorPorId(id: number) {
  try {
    const proveedorRaw = await prisma.proveedores.findUnique({
      where: { idProveedores: id },
      include: {
        tipoProveedor: true,
        insumo: {
          where: { estado: true },
          include: {
            unidadMedida: true,
            tipoInsumo: true
          }
        },
        ordenesCompra: {
          take: 5,
          orderBy: { fechaEmision: 'desc' }
        }
      }
    })
    
    if (!proveedorRaw) {
      return { ok: false, message: 'Proveedor no encontrado' }
    }
    
    // Convertir Decimals en los insumos relacionados
    const proveedor = {
      ...proveedorRaw,
      insumo: proveedorRaw.insumo.map(insumo => ({
        ...insumo,
        stock: insumo.stock.toNumber(),
        stockMinimo: insumo.stockMinimo.toNumber(),
        precio: insumo.precio.toNumber(),
      })),
      ordenesCompra: proveedorRaw.ordenesCompra.map(orden => ({
        ...orden,
        montoTotal: orden.montoTotal.toNumber(),
      }))
    }
    
    return { ok: true, data: proveedor }
  } catch (error) {
    console.error("Error al obtener proveedor:", error)
    return { ok: false, message: 'Error al obtener proveedor', error }
  }
}

// Actualizar proveedor
export async function actualizarProveedor(id: number, data: { 
  idTipoProveedor?: number;
  nombreProveedor?: string;
  ruc?: string;
  telefono?: string;
  correo?: string;
  direccion?: string;
  personaContacto?: string;
  telefonoContacto?: string;
}) {
  try {
    const proveedor = await prisma.proveedores.update({
      where: { idProveedores: id },
      data: {
        idTipoProveedor: data.idTipoProveedor,
        nombreProveedor: data.nombreProveedor,
        ruc: data.ruc,
        telefono: data.telefono,
        correo: data.correo,
        direccion: data.direccion,
        personaContacto: data.personaContacto,
        telefonoContacto: data.telefonoContacto,
      },
      include: {
        tipoProveedor: true,
      }
    })
    return { ok: true, data: proveedor }
  } catch (error) {
    console.error("Error al actualizar proveedor:", error)
    return { ok: false, message: 'Error al actualizar proveedor', error }
  }
}

// Eliminar proveedor (soft delete)
export async function eliminarProveedor(id: number) {
  try {
    await prisma.proveedores.update({
      where: { idProveedores: id },
      data: { estado: false }
    })
    return { ok: true, message: 'Proveedor eliminado correctamente' }
  } catch (error) {
    console.error("Error al eliminar proveedor:", error)
    return { ok: false, message: 'Error al eliminar proveedor', error }
  }
}

// ==================== TIPOS DE INSUMO ====================

// Crear tipo de insumo
export async function crearTipoInsumo(data: { 
  nombreTipo: string; 
  descripcion?: string; 
}) {
  try {
    const tipoInsumo = await prisma.tipo_insumo.create({
      data: {
        nombreTipo: data.nombreTipo,
        descripcion: data.descripcion,
      },
    })
    return { ok: true, data: tipoInsumo }
  } catch (error) {
    console.error("Error al crear tipo de insumo:", error)
    return { ok: false, message: 'Error al crear tipo de insumo', error }
  }
}

// Obtener todos los tipos de insumo
export async function obtenerTiposInsumo() {
  try {
    const tiposInsumo = await prisma.tipo_insumo.findMany({
      where: { estado: true },
      orderBy: { nombreTipo: 'asc' }
    })
    return { ok: true, data: tiposInsumo }
  } catch (error) {
    console.error("Error al obtener tipos de insumo:", error)
    return { ok: false, message: 'Error al obtener tipos de insumo', error }
  }
}

// ==================== UNIDADES DE MEDIDA ====================

// Crear unidad de medida
export async function crearUnidadMedida(data: { 
  nombre: string; 
  abreviatura: string;
  descripcion?: string; 
}) {
  try {
    const unidadMedida = await prisma.unidadMedida.create({
      data: {
        nombre: data.nombre,
        abreviatura: data.abreviatura,
        descripcion: data.descripcion,
      },
    })
    return { ok: true, data: unidadMedida }
  } catch (error) {
    console.error("Error al crear unidad de medida:", error)
    return { ok: false, message: 'Error al crear unidad de medida', error }
  }
}

// Obtener todas las unidades de medida
export async function obtenerUnidadesMedida() {
  try {
    const unidadesMedida = await prisma.unidadMedida.findMany({
      where: { estado: true },
      orderBy: { nombre: 'asc' }
    })
    return { ok: true, data: unidadesMedida }
  } catch (error) {
    console.error("Error al obtener unidades de medida:", error)
    return { ok: false, message: 'Error al obtener unidades de medida', error }
  }
}

// ==================== INSUMOS ====================

// Crear insumo - CORREGIDO
export async function crearInsumo(data: {
  idTipoInsumo: number;
  idProveedor?: number;
  idUnidadMedida: number;
  codigoInsumo?: string;
  nombreInsumo: string;
  descripcion?: string;
  stock: number;
  stockMinimo: number;
  precio: number;
  ubicacionAlmacen?: string;
}) {
  try {
    const insumoRaw = await prisma.insumo.create({
      data: {
        idTipoInsumo: data.idTipoInsumo,
        idProveedor: data.idProveedor,
        idUnidadMedida: data.idUnidadMedida,
        codigoInsumo: data.codigoInsumo,
        nombreInsumo: data.nombreInsumo,
        descripcion: data.descripcion,
        stock: data.stock,
        stockMinimo: data.stockMinimo,
        precio: data.precio,
        ubicacionAlmacen: data.ubicacionAlmacen,
      },
      include: {
        tipoInsumo: true,
        unidadMedida: true,
        proveedor: true,
      }
    })

    // Convertir TODO manualmente para estar 100% seguro
    const insumo = {
      idInsumo: insumoRaw.idInsumo,
      idTipoInsumo: insumoRaw.idTipoInsumo,
      idProveedor: insumoRaw.idProveedor,
      idUnidadMedida: insumoRaw.idUnidadMedida,
      codigoInsumo: insumoRaw.codigoInsumo,
      nombreInsumo: insumoRaw.nombreInsumo,
      descripcion: insumoRaw.descripcion,
      imagenInsumo: insumoRaw.imagenInsumo,
      stock: insumoRaw.stock.toNumber(),
      stockMinimo: insumoRaw.stockMinimo.toNumber(),
      precio: insumoRaw.precio.toNumber(),
      ubicacionAlmacen: insumoRaw.ubicacionAlmacen,
      fechaRegistro: insumoRaw.fechaRegistro,
      estado: insumoRaw.estado,
      tipoInsumo: insumoRaw.tipoInsumo,
      unidadMedida: insumoRaw.unidadMedida,
      proveedor: insumoRaw.proveedor,
    }

    return { ok: true, data: insumo }
  } catch (error) {
    console.error("Error al crear insumo:", error)
    return { ok: false, message: 'Error al crear insumo', error }
  }
}

// Obtener insumos con formato correcto
 export async function getInsumos() {
  try {
    const insumos = await prisma.insumo.findMany({
      where: { estado: true },
      include: {
        tipoInsumo: true,
        unidadMedida: true,
        proveedor: true,
      },
      orderBy: { nombreInsumo: 'asc' }
    });

    // Convertir TODOS los valores Decimal manualmente
    const insumosFormateados = insumos.map((insumo) => ({
      ...insumo,
      stock: insumo.stock.toNumber(),
      stockMinimo: insumo.stockMinimo.toNumber(),
      precio: insumo.precio.toNumber(),
    }));

    return insumosFormateados;
  } catch (error) {
    console.error("Error al obtener insumos:", error)
    return []
  }
}

// Obtener insumo por ID - CORREGIDO
export async function obtenerInsumoPorId(id: number) {
  try {
    const insumoRaw = await prisma.insumo.findUnique({
      where: { idInsumo: id },
      include: {
        tipoInsumo: true,
        unidadMedida: true,
        proveedor: true,
        movimientosInventario: {
          take: 10,
          orderBy: { fechaMovimiento: 'desc' },
          include: {
            empleado: {
              include: {
                persona: true
              }
            }
          }
        }
      }
    })
    
    if (!insumoRaw) {
      return { ok: false, message: 'Insumo no encontrado' }
    }
    
    // Formatear datos incluyendo los movimientos
    const insumoFormateado = {
      ...insumoRaw,
      stock: insumoRaw.stock.toNumber(),
      stockMinimo: insumoRaw.stockMinimo.toNumber(),
      precio: insumoRaw.precio.toNumber(),
      movimientosInventario: insumoRaw.movimientosInventario.map(mov => ({
        ...mov,
        cantidad: mov.cantidad.toNumber()
      }))
    }
    
    return { ok: true, data: insumoFormateado }
  } catch (error) {
    console.error("Error al obtener insumo:", error)
    return { ok: false, message: 'Error al obtener insumo', error }
  }
}

// Actualizar insumo - CORREGIDO
export async function actualizarInsumo(id: number, data: { 
  idTipoInsumo?: number;
  idProveedor?: number;
  idUnidadMedida?: number;
  codigoInsumo?: string;
  nombreInsumo?: string; 
  descripcion?: string;
  stockMinimo?: number;
  precio?: number;
  ubicacionAlmacen?: string;
}) {
  try {
    const insumoRaw = await prisma.insumo.update({
      where: { idInsumo: id },
      data: {
        idTipoInsumo: data.idTipoInsumo,
        idProveedor: data.idProveedor,
        idUnidadMedida: data.idUnidadMedida,
        codigoInsumo: data.codigoInsumo,
        nombreInsumo: data.nombreInsumo,
        descripcion: data.descripcion,
        stockMinimo: data.stockMinimo,
        precio: data.precio,
        ubicacionAlmacen: data.ubicacionAlmacen,
      },
      include: {
        tipoInsumo: true,
        unidadMedida: true,
        proveedor: true,
      }
    })
    
    // Convertir TODO manualmente
    const insumo = {
      idInsumo: insumoRaw.idInsumo,
      idTipoInsumo: insumoRaw.idTipoInsumo,
      idProveedor: insumoRaw.idProveedor,
      idUnidadMedida: insumoRaw.idUnidadMedida,
      codigoInsumo: insumoRaw.codigoInsumo,
      nombreInsumo: insumoRaw.nombreInsumo,
      descripcion: insumoRaw.descripcion,
      imagenInsumo: insumoRaw.imagenInsumo,
      stock: insumoRaw.stock.toNumber(),
      stockMinimo: insumoRaw.stockMinimo.toNumber(),
      precio: insumoRaw.precio.toNumber(),
      ubicacionAlmacen: insumoRaw.ubicacionAlmacen,
      fechaRegistro: insumoRaw.fechaRegistro,
      estado: insumoRaw.estado,
      tipoInsumo: insumoRaw.tipoInsumo,
      unidadMedida: insumoRaw.unidadMedida,
      proveedor: insumoRaw.proveedor,
    }
    
    return { ok: true, data: insumo }
  } catch (error) {
    console.error("Error al actualizar insumo:", error)
    return { ok: false, message: 'Error al actualizar insumo', error }
  }
}

// Eliminar insumo (soft delete)
export async function eliminarInsumo(id: number) {
  try {
    await prisma.insumo.update({
      where: { idInsumo: id },
      data: { estado: false }
    })
    return { ok: true, message: 'Insumo eliminado correctamente' }
  } catch (error) {
    console.error("Error al eliminar insumo:", error)
    return { ok: false, message: 'Error al eliminar insumo', error }
  }
}
 
// ==================== MOVIMIENTOS DE INVENTARIO ====================

// Crear movimiento de inventario con control de stock - CORREGIDO
export async function crearMovimientoInventario(data: {
  idInsumo: number;
  idEmpleado: number;
  tipoMovimiento: 'Entrada' | 'Salida' | 'Ajuste' | 'Merma' | 'Transferencia';
  cantidad: number;
  motivo?: string;
  observaciones?: string;
  idReferencia?: number;
  tipoReferencia?: string;
}) {
  try {
    // Validar que el empleado existe
    const empleado = await prisma.empleado.findUnique({
      where: { idEmpleado: data.idEmpleado }
    })

    if (!empleado) {
      return { ok: false, message: 'Empleado no encontrado' }
    }

    // Obtener el insumo actual
    const insumo = await prisma.insumo.findUnique({
      where: { idInsumo: data.idInsumo },
      include: {
        unidadMedida: true,
        tipoInsumo: true
      }
    })

    if (!insumo) {
      return { ok: false, message: 'Insumo no encontrado' }
    }

    // Calcular nuevo stock
    let nuevoStock = insumo.stock.toNumber()

    switch (data.tipoMovimiento) {
      case 'Entrada':
        nuevoStock += data.cantidad
        break
      case 'Salida':
      case 'Merma':
        nuevoStock -= data.cantidad
        break
      case 'Ajuste':
        nuevoStock = data.cantidad // En ajuste, la cantidad es el nuevo stock total
        break
      case 'Transferencia':
        nuevoStock -= data.cantidad
        break
    }

    // Validar que el stock no sea negativo
    if (nuevoStock < 0) {
      return { ok: false, message: 'Stock insuficiente para realizar la operación' }
    }

    // Crear el movimiento en una transacción
    const resultado = await prisma.$transaction(async (tx) => {
      // Crear el registro de movimiento
      const movimientoRaw = await tx.movimientoInventario.create({
        data: {
          idInsumo: data.idInsumo,
          idEmpleado: data.idEmpleado,
          tipoMovimiento: data.tipoMovimiento,
          cantidad: data.cantidad,
          motivo: data.motivo,
          observaciones: data.observaciones,
          idReferencia: data.idReferencia,
          tipoReferencia: data.tipoReferencia,
        },
        include: {
          insumo: {
            include: {
              unidadMedida: true,
              tipoInsumo: true
            }
          },
          empleado: {
            include: {
              persona: true
            }
          }
        }
      })

      // Actualizar el stock del insumo
      const insumoActualizadoRaw = await tx.insumo.update({
        where: { idInsumo: data.idInsumo },
        data: { stock: nuevoStock },
        include: {
          unidadMedida: true,
          tipoInsumo: true,
          proveedor: true
        }
      })

      // Convertir Decimals manualmente
      const movimiento = {
        ...movimientoRaw,
        cantidad: movimientoRaw.cantidad.toNumber()
      }

      const insumoActualizado = {
        ...insumoActualizadoRaw,
        stock: insumoActualizadoRaw.stock.toNumber(),
        stockMinimo: insumoActualizadoRaw.stockMinimo.toNumber(),
        precio: insumoActualizadoRaw.precio.toNumber(),
      }

      return { movimiento, insumoActualizado }
    })

    return {
      ok: true,
      data: resultado,
      message: `${data.tipoMovimiento} registrada correctamente. Nuevo stock: ${nuevoStock} ${insumo.unidadMedida.abreviatura}`
    }

  } catch (error) {
    console.error("Error al crear movimiento de inventario:", error)
    return { ok: false, message: 'Error al registrar el movimiento', error }
  }
}

// Obtener movimientos de inventario con filtros
export async function obtenerMovimientosInventario(filtros?: {
  idInsumo?: number;
  tipoMovimiento?: string;
  fechaDesde?: Date;
  fechaHasta?: Date;
  limite?: number;
}) {
  try {
    const where: any = {}

    if (filtros?.idInsumo) where.idInsumo = filtros.idInsumo
    if (filtros?.tipoMovimiento) where.tipoMovimiento = filtros.tipoMovimiento
    if (filtros?.fechaDesde || filtros?.fechaHasta) {
      where.fechaMovimiento = {}
      if (filtros.fechaDesde) where.fechaMovimiento.gte = filtros.fechaDesde
      if (filtros.fechaHasta) where.fechaMovimiento.lte = filtros.fechaHasta
    }

    const movimientos = await prisma.movimientoInventario.findMany({
      where,
      include: {
        insumo: {
          include: {
            unidadMedida: true,
            tipoInsumo: true
          }
        },
        empleado: {
          include: {
            persona: true
          }
        }
      },
      orderBy: { fechaMovimiento: 'desc' },
      take: filtros?.limite || 100
    })

    // Formatear las cantidades decimales
    const movimientosFormateados = movimientos.map(mov => ({
      ...mov,
      cantidad: mov.cantidad.toNumber()
    }))

    return { ok: true, data: movimientosFormateados }
  } catch (error) {
    console.error("Error al obtener movimientos:", error)
    return { ok: false, message: 'Error al obtener movimientos', error }
  }
}

// ==================== ESTADÍSTICAS ====================

// Obtener estadísticas del inventario - CORREGIDO
export async function obtenerEstadisticasInventario() {
  try {
    // Obtener todos los insumos activos
    const insumosRaw = await prisma.insumo.findMany({
      where: { estado: true },
      include: {
        tipoInsumo: true,
        unidadMedida: true,
        proveedor: true,
      }
    })

    // Convertir Decimals
    const insumos = convertirInsumosDecimal(insumosRaw)

    // Calcular estadísticas
    const totalInsumos = insumos.length
    const stockBajo = insumos.filter(i => i.stock <= i.stockMinimo).length
    const stockCritico = insumos.filter(i => i.stock <= (i.stockMinimo * 0.5)).length
    const valorTotal = insumos.reduce((sum, i) => sum + (i.stock * i.precio), 0)

    // Obtener movimientos recientes
    const movimientosRaw = await prisma.movimientoInventario.findMany({
      take: 10,
      orderBy: { fechaMovimiento: 'desc' },
      include: {
        insumo: {
          include: {
            unidadMedida: true
          }
        },
        empleado: {
          include: { persona: true }
        }
      }
    })

    // Formatear movimientos
    const movimientosRecientes = movimientosRaw.map(mov => ({
      ...mov,
      cantidad: mov.cantidad.toNumber()
    }))

    return {
      ok: true,
      data: {
        totalInsumos,
        stockBajo,
        stockCritico,
        valorTotal,
        insumosDetalle: insumos,
        movimientosRecientes
      }
    }
  } catch (error) {
    console.error("Error al obtener estadísticas:", error)
    return { ok: false, message: 'Error al obtener estadísticas', error }
  }
}

// Obtener alertas de stock bajo - CORREGIDO
export async function obtenerAlertasStock() {
  try {
    const insumosRaw = await prisma.insumo.findMany({
      where: {
        estado: true,
      },
      include: {
        tipoInsumo: true,
        unidadMedida: true,
        proveedor: true,
      },
      orderBy: { stock: 'asc' }
    })

    // Convertir Decimals y filtrar
    const alertas = insumosRaw
      .map(insumo => ({
        ...insumo,
        stock: insumo.stock.toNumber(),
        stockMinimo: insumo.stockMinimo.toNumber(),
        precio: insumo.precio.toNumber(),
      }))
      .filter(insumo => insumo.stock <= insumo.stockMinimo)
      .map(insumo => ({
        ...insumo,
        nivelAlerta: insumo.stock <= (insumo.stockMinimo * 0.5) ? 'critico' : 'bajo'
      }))

    return { ok: true, data: alertas }
  } catch (error) {
    console.error("Error al obtener alertas:", error)
    return { ok: false, message: 'Error al obtener alertas', error }
  }
}