export async function fetchJobs(orgId = "6739bbf16e41de7cf2c99801") {
  try {
    const url = orgId ? `http://localhost:5000/jobs/getJobsByOrg/${orgId}` : `/api/jobs`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data = await res.json();

    // Normalize MongoDB _id → id
    return data.map((job) => ({
      ...job,
      id: job._id,
    }));
  } catch (err) {
    console.error("fetchJobs error:", err);
    throw err;
  }
}
