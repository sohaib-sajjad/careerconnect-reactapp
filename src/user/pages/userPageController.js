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


const handleApply = (jobId) => {
    alert("Application submitted!");
};

const userPageController = {
  handleApply,
  handleFetchAllJobs
}

export default userPageController