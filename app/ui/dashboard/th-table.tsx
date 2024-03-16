import React from 'react'

export const ThTable = () => {
  return (
    <>
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
    </>
  )
}
