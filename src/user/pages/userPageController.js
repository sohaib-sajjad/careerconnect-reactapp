const API_BASE =
  process.env.REACT_APP_API_URL || "http://localhost:5000";

const handleFetchAllJobs = async (userId, { setJobs }, { setAppliedJobIds }) => {
  try {
    const res = await fetch(`${API_BASE}/jobs/getAllJobs`);
    if (!res.ok) {
      throw new Error('Failed to fetch jobs');
    }
    const data = await res.json();
    setJobs(data); // Update the state with the fetched jobs

     setAppliedJobIds((prev) => {
      const appliedJobIds = data
        .filter(job => job.applicants && job.applicants.includes(userId)) 
        .map(job => job.id); 

      return [...new Set([...prev, ...appliedJobIds])];
    });


  } catch (error) {
    console.error("handleFetchJobs error:", error);
    alert(error.message || "Failed to fetch jobs");
  }
};


const handleApply = async (jobId, applicantId, { setJobs }, { setAppliedJobIds }) => {
  try {

    if (!applicantId) {
      alert("Missing applicant ID");
      return;
    }

    const res = await fetch(`${API_BASE}/jobs/applyJob`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        applicantId,
        jobId,
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

    setAppliedJobIds((prev) => {
      if (!prev.includes(updatedJob.id)) {
        return [...prev, updatedJob.id];
      }
      return prev;
    });


    alert("Successfully applied for the job!");

  } catch (err) {
    console.error("handleApply error:", err);
    alert(err.message || "Failed to apply for the job");
  }
};

const handleFetchRecommendedJobs = async (userId, { setRecommendedJobs }) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/recommendedJobs/${userId}`);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to fetch recommended jobs (${res.status}): ${text || res.statusText}`);
    }

  } catch (err) {
    console.error("handleFetchRecommendedJobs error:", err);
  }
};

const userPageController = {
  handleApply,
  handleFetchAllJobs,
  handleFetchRecommendedJobs
}

export default userPageController