import logo from './logo.svg';
import './App.css';
import {styles} from './styles';
import { useState } from 'react';

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
    </div>
  );
}

export default App;
