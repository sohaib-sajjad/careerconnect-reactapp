import React from "react";
import { styles } from "../../styles";

export default function OrgJobList({
  jobs = [],
  onEdit,
  onDelete,
  onView,
  loading,
  error,
}) {
  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!jobs.length) return <p>No jobs created yet.</p>;

  return (
    <div>
      {jobs.map((job) => (
        <div
          key={job.id}
          style={styles.orgJobCard}
          onClick={() => onView && onView(job.id)}
        >
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p>Applicants: {job.applicants?.length || 0}</p>

          <div style={styles.orgJobActions}>
            <button
              style={styles.orgEditButton}
              onClick={(e) => {
                e.stopPropagation();
                onEdit && onEdit(job);
              }}
            >
              Edit
            </button>

            <button
              style={styles.orgDeleteButton}
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