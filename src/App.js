import logo from './logo.svg';
import './App.css';
import { styles } from './styles';
import { useState, useRef} from 'react';
import OrganizationPage from './organization/pages/organizationPage.jsx';
import UserPage from './user/pages/userPage.jsx';

function App() {

  const [mode, setMode] = useState("org"); // "org" | "user"
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Acme Inc.",
      location: "Remote",
      description: "Build UI components with React and modern JS.",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Tech Corp",
      location: "New York",
      description: "Work with Node.js, APIs, and databases.",
    },
  ]);

  const nextIdRef = useRef(3);
  const [editingJob, setEditingJob] = useState(null);
  const [appliedJobIds, setAppliedJobIds] = useState([]);
  

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Career Connect</h1>

        <div style={styles.modeSwitch}>
          <button
            onClick={() => setMode("org")}
            style={{
              ...styles.modeButton,
              ...(mode === "org" ? styles.modeButtonActive : {}),
            }}
          >
            Organization
          </button>
          <button
            onClick={() => setMode("user")}
            style={{
              ...styles.modeButton,
              ...(mode === "user" ? styles.modeButtonActive : {}),
            }}
          >
            Job Seeker
          </button>
        </div>
        <main style={styles.main}>
          {mode === "org" ? (
            <OrganizationPage
            />
          ) : (
            <UserPage
            />
          )}
        </main>
      </header>
    </div>
  );
}

export default App;
