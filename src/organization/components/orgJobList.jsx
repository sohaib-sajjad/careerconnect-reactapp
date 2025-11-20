import React from "react";

export default function OrgJobList({ jobs = [], onEdit, onDelete, onView }) {
  if (jobs.length === 0) {
    return <p>No jobs created yet.</p>;
  }

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
          onClick={() => onView && onView(job.id)} // navigate on click
        >
          <h3>{job.title}</h3>
          <p>
            {job.company} — {job.location}
          </p>
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
