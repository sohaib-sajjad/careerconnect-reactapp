const API_BASE =
  process.env.REACT_APP_API_URL || "http://localhost:5000";

const handleFetchAllJobs = async ({ setJobs }) => {
  try {
    const res = await fetch(`${API_BASE}/jobs/getAllJobs`);
    if (!res.ok) {
      throw new Error('Failed to fetch jobs');
    }
    const data = await res.json();
    setJobs(data); // Update the state with the fetched jobs
  } catch (error) {
    console.error("handleFetchJobs error:", error);
    alert(error.message || "Failed to fetch jobs");
  }
};


// POST /api/jobs/applyJob/:jobId
const handleApply = async (jobId, applicantId, { setJobs }) => {
  try {
    // Check if applicantId is provided
    if (!applicantId) {
      alert("Missing applicant ID");
      return;
    }

    const res = await fetch(`${API_BASE}/jobs/applyJob/${jobId}`, {
      method: "PATCH", // Using PATCH to update the job
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        applicantId,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(
        `Failed to apply for job (${res.status}): ${text || res.statusText}`
      );
    }

    const updatedJob = await res.json();

    // Update the job list in state after applying
    setJobs((prev) =>
      prev.map((job) =>
        job.id === updatedJob.id ? { ...job, applicants: updatedJob.applicants } : job
      )
    );

    alert("Successfully applied for the job!");

  } catch (err) {
    console.error("handleApply error:", err);
    alert(err.message || "Failed to apply for the job");
  }
};


const userPageController = {
  handleApply,
  handleFetchAllJobs
}

export default userPageController