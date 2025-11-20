import './App.css';
import { styles } from './styles';
import { useState } from 'react';
import OrganizationPage from './organization/pages/organizationPage.jsx';
import UserPage from './user/pages/userPage.jsx';
import JobDetailPage from './organization/pages/Job Detail Page/jobDetailPage.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("org"); // "org" | "user"

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
      </header>

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={mode === "org" ? <OrganizationPage /> : <UserPage />} />
          <Route path="/job/:jobId" element={<JobDetailPage />} />
        </Routes>
        {/* {mode === "org" ? (
          <OrganizationPage />
        ) : (
          <UserPage />
        )} */}
      </main>
    </div>
  );
}

export default App;
