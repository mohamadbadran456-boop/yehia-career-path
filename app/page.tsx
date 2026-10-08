import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Yehias Job Search Journey</h1>
      <p>Yehia goal is to successfully land a software engineering role over the next two months by preparing his professional materials, building technical skills, and tracking applications.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
        <Link href="/plan" style={{ padding: '0.5rem 1rem', background: '#0070f3', color: '#fff', borderRadius: '4px', textDecoration: 'none' }}>
          View Plan
        </Link>
        <Link href="/opportunities" style={{ padding: '0.5rem 1rem', background: '#0070f3', color: '#fff', borderRadius: '4px', textDecoration: 'none' }}>
          Explore Opportunities
        </Link>
      </div>
    </div>
  )
}

export default page