

const API_BASE =
  process.env.REACT_APP_API_URL || "http://localhost:5000";

// GET /api/org/:orgId/jobs
const handleFetchJobs = async ({ setJobs, organizationId }) => {
  try {
    const res = await fetch(`${API_BASE}/api/org/${organizationId}/jobs`);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(
        `Failed to fetch jobs (${res.status}): ${text || res.statusText}`
      );
    }

    const data = await res.json();

    const normalized = data.map((job) => ({
      ...job,
      id: job._id,
      company: job.company || "",
      location: job.location || "",
    }));

    setJobs(normalized);
  } catch (err) {
    console.error("handleFetchJobs error:", err);
    alert(err.message || "Failed to fetch jobs");
  }
};




// ---- ORG HANDLERS ----
const handleCreateJob = (jobData) => {
  // setJobs((prev) => [...prev, newJob]);
};

const handleUpdateJob = (jobData) => {

};

const handleDeleteJob = (id) => {

};

// ---- USER HANDLERS ----
const handleApply = (jobId) => {

};

const orgPageControllers = {
  handleCreateJob,
  handleUpdateJob,
  handleDeleteJob,
  handleApply,
};

export default orgPageControllers;