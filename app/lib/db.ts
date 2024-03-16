import mysql from 'mysql2/promise';
import {  Pool ,RowDataPacket } from 'mysql2/promise'
import * as dotenv from 'dotenv'

// Carga las variables de entorno desde el archivo .env
dotenv.config();
export interface RowData {
  id: number;
  nombre_completo: string;
  genero: string;
  direccion: string;
  numero_telefono: string;
  activo: boolean;
}


export interface DataBaseAtletas extends RowDataPacket {
  id: number;
  foto: string;
  nombre_completo: string;
  fecha_nacimiento: Date;
  numero_telefono: string;
  genero: string;
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
  activo: number;
}

const pool = mysql.createPool({
  
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  
  
});
export function query(query: string, callback: (error: Error | null, results?: RowData[]) => void): void {
  // Simulación de una consulta a la base de datos
  const simulatedResults: RowData[] = [
    // Aquí deberías tener datos reales obtenidos de tu base de datos
  ];
  
  // Aquí manejarías la lógica real de tu consulta a la base de datos
  
  // Simulamos un error si la consulta falla
  const error = null; // null para indicar que no hay error, cambiar a una instancia de Error si hay un error
  
  // Llamamos al callback con el error y los resultados (que podrían ser undefined)
  callback(error, simulatedResults);
}