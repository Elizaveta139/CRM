import AddCompanyButton from './components/add-company-button';
import ClientComponent from './components/client-component';
// import CompanyRow from './components/company-row';
import ServerComponent from './components/server-component';
import ServerComponentCopy from './components/server-component copy';
// import StatusLabel, { Status } from './components/status-label';
import MagicButton from '@/app/components/magic-button';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-xl">Home page</h1>
        <AddCompanyButton />
        <MagicButton />

        <ServerComponent />
        <ClientComponent>
          <ServerComponentCopy />
        </ClientComponent>
      </main>
    </div>
  );
}
