import Link from 'next/link';
import { opportunities } from '../../data/opportunities';

export default async function OpportunityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const opportunity = opportunities.find((opp) => opp.id === id);

  if (!opportunity) {
    return (
      <div>
        <h2>Opportunity not found</h2>
        <p>The role you are looking for does not exist.</p>
        <Link href="/opportunities">← Back to opportunities</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{opportunity.title}</h1>
      <p><strong>Company:</strong> {opportunity.company}</p>
      <p><strong>Location:</strong> {opportunity.location}</p>
      <p><strong>Description:</strong> {opportunity.description}</p>
      
      <div style={{ marginTop: '2rem' }}>
        <Link href="/opportunities">← Back to opportunities list</Link>
      </div>
    </div>
  );
}