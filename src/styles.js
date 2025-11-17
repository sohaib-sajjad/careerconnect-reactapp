export const styles = {
app: {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    background: "#f4f5fb",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  },
   main: {
    maxWidth: 1000,
    margin: "0 auto",
    background: "#fff",
    borderRadius: 8,
    padding: 20,
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  header: {
    maxWidth: 1000,
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
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
}