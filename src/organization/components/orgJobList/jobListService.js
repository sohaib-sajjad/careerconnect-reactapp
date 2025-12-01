export async function fetchJobs(orgId = null) {
  try {
    const url = orgId ? `/api/org/${orgId}/jobs` : `/api/jobs`;

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
