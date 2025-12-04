export const styles = {
  app: {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    background: "#f4f5fb",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  },
  header: {
    maxWidth: 1000,
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  main: {
    maxWidth: 1000,
    margin: "0 auto",
    background: "#fff",
    borderRadius: 8,
    padding: 20,
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  modeSwitch: {
    display: "flex",
    gap: 8,
  },
  modeButton: {
    padding: "8px 16px",
    borderRadius: 999,
    border: "1px solid #d0d0e0",
    background: "#fff",
    cursor: "pointer",
    fontSize: 14,
  },
  modeButtonActive: {
    background: "#2563eb",
    color: "#fff",
    borderColor: "#2563eb",
  },
  orgLayout: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1.4fr",
    gap: 20,
  },
  userLayout: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr",
    gap: 20,
  },
  formSection: {},
  listSection: {},
  appliedSection: {},
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: 14,
    fontWeight: 500,
    gap: 4,
  },
  input: {
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid #d1d5db",
    fontSize: 14,
    outline: "none",
  },
  buttonRow: {
    display: "flex",
    gap: 8,
    marginTop: 4,
  },
  primaryButton: {
    padding: "8px 14px",
    borderRadius: 6,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontSize: 14,
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "8px 14px",
    borderRadius: 6,
    border: "1px solid #d1d5db",
    background: "#fff",
    fontSize: 14,
    cursor: "pointer",
  },
  disabledButton: {
    background: "#9ca3af",
    cursor: "not-allowed",
  },
  cardList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  jobCard: {
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    padding: 12,
    background: "#fafafa",
  },
  jobTitle: {
    margin: "0 0 4px",
    fontSize: 16,
  },
  jobMeta: {
    margin: "0 0 8px",
    fontSize: 13,
    color: "#4b5563",
  },
  jobDescription: {
    margin: "0 0 10px",
    fontSize: 14,
    color: "#374151",
  },
  cardActions: {
    display: "flex",
    gap: 8,
  },
  smallButton: {
    padding: "6px 10px",
    borderRadius: 6,
    border: "1px solid #d1d5db",
    background: "#fff",
    fontSize: 13,
    cursor: "pointer",
  },
  dangerButton: {
    borderColor: "#f87171",
    color: "#b91c1c",
  },

  userProfileSection: {
    backgroundColor: "#f8f9fa",
    padding: "12px 20px",
    borderRadius: "8px",
    marginBottom: "12px",
    borderLeft: "4px solid #667eea",
    alignSelf: "start",
    gridColumn: "1 / -1"
  }

};

