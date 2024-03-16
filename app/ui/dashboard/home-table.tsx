
import React from 'react';
import { TbodyTable } from './tbody-table';
import { ThTable } from './th-table';
import  {query, RowData} from "../../lib/db"

interface Props {
  data: RowData[];
}
export default function HomeTable({data}: Props) {
  console.log(data)
  return (
    <div className="mt-6 flow-root">
    <div className="inline-block min-w-full align-middle">
      <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
        <div className="md:hidden">
         
        </div>
        <table className="hidden min-w-full text-gray-900 md:table">
          <thead className="rounded-lg text-left text-sm font-normal">
            <ThTable />
          </thead>
          
          <TbodyTable data ={data} />
        </table>
      </div>
    </div>
  </div>
  
  );
  
}

export async function getServerSideProps() {
  // Realiza la consulta a la base de datos
  const queryResult = await new Promise<RowData[]>((resolve, reject) => {
    query('SELECT * FROM mi_tabla', (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
        reject(error);
      } else {
        console.log('Datos recibidos de la base de datos:', results);
        resolve(results || []);
      }
    });
  });

  return {
    props: {
      data: queryResult,
    },
  };
}


