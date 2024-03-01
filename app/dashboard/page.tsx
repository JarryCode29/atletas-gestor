import HomeTable from '../ui/dashboard/home-table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';



  return (
    <main className=' h-full bg-slate-600 flex justify-center '>
      <HomeTable />
    </main>
  );
}