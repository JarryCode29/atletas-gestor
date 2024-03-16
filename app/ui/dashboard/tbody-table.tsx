
import React from 'react'
import  {query, RowData} from "../../lib/db"




interface Props {
  data: RowData[];
}



export const TbodyTable: React.FC<Props> = ({ data }) => {
  console.log(data)
  if (!data) {
    return <tbody>No hay datos disponibles</tbody>;
  }
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


