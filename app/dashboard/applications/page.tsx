export default function DashboardApplications() {
  const applications = [
    { id: "1", title: "Junior Front-End Developer", company: "Cedar Digital", status: "Applied" },
    { id: "2", title: "Graduate Software Engineer", company: "Code Harbor", status: "Under review" },
  ];

  return (
    <div>
      <h2>Applications List</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.id} style={{ marginBottom: '1rem' }}>
            <strong>{app.title}</strong> at {app.company} — <em>Status: {app.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}