
export type diasTrabajoemana =
  | "Lunes"
  | "Martes"
  | "Miercoles"
  | "Jueves"
  | "Viernes"
  | "Sabado"
  | "Domingo";

export type Rol =
  | "Administrador"
  | "Cocinero"
  | "Mesero"
  | "Limpieza"
  | "Asistente"
  | "RRHH";

interface EmpleadoType {
  dni?: number;
  rol: Rol;
  idEmpleado: number;
  idPersona: number;
  horario: string;
  diasTrabajo?: diasTrabajoemana[];
  contratoFinal?: Date;
  contratoInicio?: Date;
}

export const empleadosRawData: EmpleadoType[] = [
  {
    idEmpleado: 1,
    idPersona: 9,
    rol: "Administrador",
    horario: "09:00 - 17:00",
    diasTrabajo: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
    contratoFinal: new Date("2025-12-31"),
  },
  {
    idEmpleado: 2,
    idPersona: 10,
    rol: "Cocinero",
    horario: "08:00 - 16:00",
    diasTrabajo: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
    contratoFinal: new Date("2025-06-30"),
  },
  {
    idEmpleado: 3,
    idPersona: 14,
    rol: "RRHH",
    horario: "08:00 - 16:00",
    diasTrabajo: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
    contratoFinal: new Date("2026-01-15"),
  },
];

// Solo datos para insertar en tabla Empleado (sin diasTrabajo)
export const empleadosData = empleadosRawData.map(({ diasTrabajo, ...empleado }) => empleado);

// Para insertar días de trabajo
type EmpleadoDiaSemanaType = {
  idEmpleado: number;
  dia: diasTrabajoemana;
};

export const empleadosDias: EmpleadoDiaSemanaType[] = [];
empleadosRawData.forEach(({ idEmpleado, diasTrabajo }) => {
  if (diasTrabajo) {
    diasTrabajo.forEach((dia) => {
      empleadosDias.push({ idEmpleado, dia });
    });
  }
});
