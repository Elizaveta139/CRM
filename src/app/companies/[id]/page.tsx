import React from 'react';
import Header from '../../components/header';

// export interface IdCompaniesPageProps {
//   params: { id: string[] };
// }

// export default function IdCompaniesPage({ params }: IdCompaniesPageProps) {
//   return (
//     <>
//       <Headers>Companies ({String(params.id)})</Headers>
//       <p>{new Date().toTimeString()} </p>
//     </>
//   );
// }

export interface PageProps {
  params: { id: string };
}
export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}
