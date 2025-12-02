// src/services/jobService.js
const API_BASE =
  process.env.REACT_APP_API_URL || "http://localhost:5000"; 

export async function createJob({ title, description, organizationId }) {
  const res = await fetch(`${API_BASE}/createJob`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      organizationId,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Failed to create job (status ${res.status}): ${text || res.statusText}`
    );
  }


  const job = await res.json();
  return {
    ...job,
  };
}
