import Header from '@/app/components/header';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddCompanyButton from '@/app/components/add-company-button';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';
import React from 'react';
// import Headers from '../components/header';
// import Toolbar from '../components/toolbar';
// import SearchInput from '../components/search-input';
// import AddCompanyButton from '../components/add-company-button';
// import CompanyTable from '../components/company-table';
// import CompanyRow from '../components/company-row';
// import { Status } from '../components/status-label';

export interface CompaniesPageProps {}

export default function CompaniesPage({}: CompaniesPageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="02.19.2023"
        ></CompanyRow>
      </CompanyTable>
    </>
  );
}