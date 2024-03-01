// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
    id: number; // Cambiado a number para reflejar el tipo de dato en la base de datos
    nombre_usuario: string; // Nombre de columna cambiado para coincidir con la base de datos
    contraseña: string;
    rol: 'Presidente' | 'Vicepresidente' | 'Secretario' | 'Tesorero' | 'Vocal' | 'Usuario'; // Tipo de dato cambiado para coincidir con ENUM en la base de datos
    activo: boolean;
};

export type Atletas = {
    id: number;
    foto: string;
    nombre_completo: string;
    fecha_nacimiento: Date;
    numero_telefono: string;
    genero: 'Masculino' | 'Femenino' | 'Otro'; // Tipo de dato cambiado para coincidir con ENUM en la base de datos
    direccion: string;
    tipo_sangre: string;
    alergias: string;
    nombre_padre: string;
    telefono_padre: string;
    nombre_madre: string;
    telefono_madre: string;
    nombre_tutor: string;
    telefono_tutor: string;
    talla_poloches: string;
    talla_bermudas: string;
    activo: boolean;
};

// Otros tipos permanecen sin cambios
