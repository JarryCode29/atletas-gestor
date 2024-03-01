import mysql, { Pool, RowDataPacket } from 'mysql2/promise';
import * as dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

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

export const GetAtletas = async (): Promise<DataBaseAtletas[]> => {
  const connection = await pool.getConnection();
  const [rows] = await connection.execute<DataBaseAtletas[]>('SELECT * FROM atletas');
  pool.releaseConnection(connection);
  return rows;
};