import AddCompanyButton from './components/add-company-button';
// import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
        <AddCompanyButton />
      </main>
    </div>
  );
}
