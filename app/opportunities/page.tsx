import React from 'react'
import Link from 'next/link';
import { opportunities } from '../data/opportunities'
const page = () => {
  return (
<div>
<h1>Job Opportunities</h1>
<p>Explore the following job opportunities that align with Yehia's career goals:</p>

<div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
  {opportunities.map((opportunity) => (
    <div key={opportunity.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h2>{opportunity.title}</h2>
      <p><strong>Company:</strong> {opportunity.company}</p>
      <p><strong>Location:</strong> {opportunity.location}</p>
      <p><strong>Description:</strong> {opportunity.description}</p>
        <Link href={`/opportunities/${opportunity.id}`}>View opportunity</Link>
    </div>
  ))}   
</div>

    </div>  
  )
}

export default page