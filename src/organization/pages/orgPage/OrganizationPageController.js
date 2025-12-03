

const API_BASE =
  process.env.REACT_APP_API_URL || "http://localhost:5000";

// GET /api/org/:orgId/jobs
const handleFetchJobs = async ({ setJobs, organizationId }) => {
  try {
    const res = await fetch(`${API_BASE}/jobs/getJobsByOrg/${organizationId}`);

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


// POST /api/jobs
const handleCreateJob = async (jobData, { setJobs, organizationId }) => {
  try {
    if (!organizationId) {
      alert("Missing organizationId");
      return;
    }

    const res = await fetch(`${API_BASE}/jobs/createJob`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: jobData.title,
        description: jobData.description,
        organizationId,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(
        `Failed to create job (${res.status}): ${text || res.statusText}`
      );
    }

    const created = await res.json();

    const newJob = {
      ...created,
      id: created._id,
      company: jobData.company || "",
      location: jobData.location || "",
    };

    setJobs((prev) => [...prev, newJob]);
  } catch (err) {
    console.error("handleCreateJob error:", err);
    alert(err.message || "Failed to create job");
  }
};


const handleUpdateJob = (jobData) => {

};

const handleDeleteJob = (id) => {

};

// ---- USER HANDLERS ----
const handleApply = (jobId) => {

};

const orgPageControllers = {
  handleFetchJobs,
  handleCreateJob,
  handleUpdateJob,
  handleDeleteJob,
  handleApply,
};

export default orgPageControllers;