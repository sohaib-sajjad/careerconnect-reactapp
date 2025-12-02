import React, { useEffect, useState } from "react";
import { fetchJobs } from "../../pages/orgPage/NetworkServices/jobListService";

export default function OrgJobList({ orgId, onEdit, onDelete, onView }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const data = await fetchJobs(orgId);

        if (!cancelled) {
          setJobs(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [orgId]);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (jobs.length === 0) return <p>No jobs created yet.</p>;

  return (
    <div>
      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ddd",
            padding: 12,
            marginBottom: 8,
            cursor: "pointer",
          }}
          onClick={() => onView && onView(job.id)}
        >
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p>Applicants: {job.applicants?.length || 0}</p>

          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit && onEdit(job);
              }}
            >
              Edit
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete && onDelete(job.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
