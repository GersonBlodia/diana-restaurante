// src/actions/direccion/post-direccion.ts
'use server';

import prisma from '@/lib/prisma';

export const crearDireccionUbicacionAction = async (data: {
  idDistrito: number;
  detalleUbicacion: string;
}) => {
   try {
    const direccion = await prisma.direccionUbicacion.create({
      data: {
        idDistrito: data.idDistrito,
        detalleUbicacion: data.detalleUbicacion,
      },
    });

    console.log("Dirección creada:", direccion); // <-- imprime toda la info que devuelve
    return { ok: true, direccion };
  } catch (error) {
    console.error("Error al crear DirecciónUbicación:", error);
    return { ok: false, error: "Error al crear la dirección" };
  }
};
