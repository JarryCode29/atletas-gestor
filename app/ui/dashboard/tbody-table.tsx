
import React from 'react'
import * as db from "../../lib/db"


interface RowData {
  id: number;
  nombre_completo: string;
  genero: string;
  direccion: string;
  numero_telefono: string;
  activo: boolean;
}

interface Props {
  data: RowData[];
}

interface DbModule {
  query: (query: string, callback: (error: Error | null, results?: any) => void) => void;
  // Otros métodos y propiedades de db si los hay
}
const dbInstance = module as unknown as DbModule;
export const TbodyTable: React.FC<Props> = ({ data }) => {
   
  return (
   <>
     <tbody className="bg-white">
           {data.map((row) => (
            <tr key={row.id}>
                  <td className="px-4 py-5 font-medium sm:pl-6">
                    {row.nombre_completo}
                  </td>
                  <td className="px-3 py-5 font-medium">
                    {row.genero}
                  </td>
                  <td className="px-3 py-5 font-medium">
                    {row.direccion}
                  </td>
                  <td className="px-3 py-5 font-medium">
                    {row.numero_telefono}
                  </td>
                  <td className="px-3 py-5 font-medium">
                    {row.activo}
                  </td>
                  <td className="relative py-3 pl-6 pr-3">
                    {/* Your edit button or any other action */}
                  </td>
                </tr>
               
           ))}
           
          </tbody>
   </>
  )
}


export async function getServerSideProps(): Promise<{ props: { datos: any } }> {
  // Realiza la consulta a la base de datos
  const query = 'SELECT * FROM mi_tabla';
  const datos = await new Promise((resolve, reject) => {
    dbInstance.query(query, (error, results) => {
      if (error) {
        console.error("Error al ejecutar la consulta:", error);
        reject(error);
        return;
      }
      console.log("Datos recibidos de la base de datos:", results);
      resolve(results);
    });
  });
  return {
    props: {
      datos
    }
  };
}
