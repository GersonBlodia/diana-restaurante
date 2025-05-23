import prisma from "@/lib/prisma"

// Actualizar stock de un insumo
export async function actualizarStockInsumo(idInsumo: number, cantidad: number) {
  try {
    const insumo = await prisma.insumo.update({
      where: { idInsumo },
      data: {
        stock: {
          increment: cantidad, // Aumenta el stock, si es una venta, usa decrement
        },
      },
    })
    return { ok: true, message: 'Stock actualizado correctamente', data: insumo }
  } catch (error) {
    console.error("Error al actualizar el stock del insumo", error)
    return { ok: false, message: 'Error al actualizar el stock', error }
  }
}


export async function decrementarStockInsumo(idInsumo: number, cantidad: number) {
  try {
    const insumo = await prisma.insumo.update({
      where: { idInsumo },
      data: {
        stock: {
          decrement: cantidad, // Para reducir el stock
        },
      },
    })
    return { ok: true, message: 'Stock decrecido correctamente', data: insumo }
  } catch (error) {
    console.error("Error al decrecer el stock del insumo", error)
    return { ok: false, message: 'Error al decrecer el stock', error }
  }
}