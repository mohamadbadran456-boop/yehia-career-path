import Link from 'next/link'
import React from 'react'

const page = () => {
  const milestones = [
    { title: 'Prepare', 
        description: 'Update resume, LinkedIn, and portfolio',
        action: 'Update professional materials to reflect current skills and experiences.' 

    },
    { 
    title: 'Build Skills',
    description: 'Learn and practice relevant technologies',
    action: 'Focus on improving coding skills, especially in JavaScript, React, and other relevant frameworks.'
    },
    {
    title: 'Apply',
    description: 'Submit applications to job postings',
    action: 'Search for job opportunities and submit applications.'
    },
  ]
  return (
   <main style={{ padding: '2rem' }}>
      <h1>Yehia's Career Plan</h1>
      <p>Yehia has a structured plan to achieve his goal of landing a software engineering role within two months. The plan consists of three main milestones:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>  
          {milestones.map((milestone, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '1rem' }}>
              <h2>{milestone.title}</h2>
              <p>{milestone.description}</p>
              <p><strong>Action:</strong> {milestone.action}</p>
            </div>
          ))}
        </div>
    <div style={{ marginTop: '2rem' }}>
   <Link href="/" 
          style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}
        >
          ← Back to Home
        </Link>
    </div>
   </main>
   
  )
}

export default page