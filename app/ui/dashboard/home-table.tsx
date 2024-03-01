  'use client'
import React, { useEffect, useState } from 'react';
import { GetAtletas , DataBaseAtletas} from '../../lib/db';


export default function HomeTable() {
  const [data, setData] = useState<DataBaseAtletas[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFromDB = await GetAtletas();
        setData(dataFromDB);
      } catch (err) {
        console.error('Error al obtener los datos de la base de datos:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-6 flow-root">
    <div className="inline-block min-w-full align-middle">
      <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
        <div className="md:hidden">
         
        </div>
        <table className="hidden min-w-full text-gray-900 md:table">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Nombre Completo
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Genero
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
              Direccion
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
              Numero de telefono
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Estado
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
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
        </table>
      </div>
    </div>
  </div>
  
  );
}