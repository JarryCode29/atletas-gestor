'use client'
import React from 'react';

import { ThTable } from './th-table';


export default function HomeTable() {


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
         
        </table>
      </div>
    </div>
  </div>
  
  );
}