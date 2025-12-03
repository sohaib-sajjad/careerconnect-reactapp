

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


// PATCH /api/jobs/:id
const handleUpdateJob = async (jobData, { setJobs }) => {
  try {
    if (!jobData?.id) {
      alert("Missing job ID");
      return;
    }

    const res = await fetch(`${API_BASE}/jobs/updateJob/${jobData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: jobData.title,
        description: jobData.description,
        company: jobData.company || "",
        location: jobData.location || "",
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(
        `Failed to update job (${res.status}): ${text || res.statusText}`
      );
    }

    const updated = await res.json();

    const normalized = {
      ...updated,
      id: updated._id,
      company: updated.company || "",
      location: updated.location || "",
    };

    // update job in state
    setJobs((prev) =>
      prev.map((job) => (job.id === normalized.id ? normalized : job))
    );
  } catch (err) {
    console.error("handleUpdateJob error:", err);
    alert(err.message || "Failed to update job");
  }
};


const handleFetchJobDetails = async (id) => {
  try {
    if (!id) {
      alert("Missing job ID");
      return null;
    }

    const res = await fetch(`${API_BASE}/jobs/getJob/${id}`);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(
        `Failed to fetch job details (${res.status}): ${text || res.statusText}`
      );
    }

    const job = await res.json();

    const normalized = {
      ...job,
      id: job._id,
      company: job.company || "",
      location: job.location || "",
    };

    return normalized;
  } catch (err) {
    console.error("handleFetchJobDetails error:", err);
    alert(err.message || "Failed to fetch job details");
    return null;
  }

};

const handleDeleteJob = (id) => {

};


const orgPageControllers = {
  handleFetchJobs,
  handleFetchJobDetails,
  handleCreateJob,
  handleUpdateJob,
  handleDeleteJob,
};

export default orgPageControllers;