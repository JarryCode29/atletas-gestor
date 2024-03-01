
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crear usuario',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  return (
    <main>
      <h1>Create user</h1>
    </main>
  );
}