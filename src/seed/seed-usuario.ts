import bcrypt from "bcryptjs";


interface Props { 
    idUsuario:number;
    idEmpleado:number;
    correo: string;
    userName: string;
    contrasena: string;
}
const usuariosRaw:Props[] = [
    {
        idUsuario:1,
       idEmpleado:1,
      correo: "admin@example.com",
      userName: "Sasha Garcia",
      contrasena: "admin123",
    },
    {
       idUsuario:2,
       idEmpleado:2,
      correo: "cocinero@example.com",
      userName: "José Miguel",
      contrasena: "cocinero456",
    },
    {
      idUsuario:3,
       idEmpleado:3,
      correo: "rrhh@example.com",
      userName: "josé",
      contrasena: "rrhh789",
    },
  ];

export const formantUsuario=usuariosRaw.map((usuario)=>(({
     idUsuario:usuario.idUsuario,
     idEmpleado:usuario.idEmpleado,
    correo:usuario.correo,
    userName:usuario.userName,
    contrasena: bcrypt.hashSync(usuario.contrasena,10) 
})))