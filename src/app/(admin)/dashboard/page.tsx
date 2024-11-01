import MagicButton from '@/app/components/magic-button';

export interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps) {
  return (
    <div>
      <main>
        <h1 className="text-xl">Dashboard page</h1>
        <MagicButton />
      </main>
    </div>
  );
}
