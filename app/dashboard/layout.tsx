import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Dashboard Space</h1>
      <p>&quot;I want one place where I can see my progress.&quot;</p>
      
      <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard/applications">Applications</Link>
      </div>

      <div>{children}</div>
    </div>
  );
}