"use server"

import prisma from "@/lib/prisma"

 
// Tipado opcional
export interface PersonaDTO {
  idPersona: number
  nombre: string
  apellido: string
  dni: number ,
  telefono?: string | null
}

// Obtener personas disponibles (por ejemplo, personas que no sean empleados aún)
export async function getPersonasDisponibles(): Promise<PersonaDTO[]> {
  try {
    const personas = await prisma.persona.findMany({
      where: {
        empleado: null, // solo personas sin relación con Empleado
        estado: true,
        dni:{
      not: null,         // DNI NO sea null (existe)
      // opcionalmente podrías agregar condiciones numéricas si es string, pero aquí es Int? por lo que no es necesario.
    },
      },
      select: {
        idPersona: true,
        nombre: true,
        apellido: true,
        dni: true,
        telefono: true,
      },
    })
   const personasConDniNoNull = personas.map(({ dni, ...rest }) => ({
  ...rest,
  dni: dni!, // forzamos que no es null aquí (usar con cuidado)
}));
    return personasConDniNoNull;
  } catch (error) {
    console.error("Error al obtener personas disponibles:", error)
    throw new Error("No se pudo obtener personas disponibles")
  }
}

// Obtener persona por DNI
// Obtener persona por DNI
export async function getPersonaPorDni(dni: number): Promise<PersonaDTO | null> {
  try {
    const persona = await prisma.persona.findUnique({
      where: {
        dni,
      },
      select: {
        idPersona: true,
        nombre: true,
        apellido: true,
        dni: true,
        telefono: true,
      },
    });

    if (!persona) return null;

    // Forzamos que dni no sea null (usar con cuidado)
    if (persona.dni === null) {
      // Aquí puedes manejar el caso, lanzar error o retornar null
      return null;
    }

    // Retornamos el objeto con dni seguro no nulo
    return {
      ...persona,
      dni: persona.dni, // ya sabemos que no es null
    };
  } catch (error) {
    console.error(`Error al obtener persona con DNI ${dni}:`, error);
    throw new Error("No se pudo obtener la persona por DNI");
  }
}
