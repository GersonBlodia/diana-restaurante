export function convertirInsumosDecimal(insumos: any[]) {
  return insumos.map(insumo => ({
    ...insumo,
    stock: typeof insumo.stock === 'object' && insumo.stock?.toNumber ? insumo.stock.toNumber() : insumo.stock,
    stockMinimo: typeof insumo.stockMinimo === 'object' && insumo.stockMinimo?.toNumber ? insumo.stockMinimo.toNumber() : insumo.stockMinimo,
    precio: typeof insumo.precio === 'object' && insumo.precio?.toNumber ? insumo.precio.toNumber() : insumo.precio,
  }))
}

export function convertirDecimalAString(obj: any): any {
  if (obj === null || obj === undefined) {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(convertirDecimalAString);
  }
  
  if (typeof obj === 'object' && obj.constructor === Object) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = convertirDecimalAString(value);
    }
    return result;
  }
  
  // Verificar si es un Decimal de Prisma
  if (typeof obj === 'object' && obj.toNumber && typeof obj.toNumber === 'function') {
    return obj.toNumber();
  }
  
  return obj;
}