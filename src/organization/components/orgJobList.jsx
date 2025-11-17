import React from "react";
import { styles } from "../../styles";

function OrgJobList({ jobs, onEdit, onDelete }) {
  if (jobs.length === 0) {
    return <p>No jobs created yet.</p>;
  }

  return (
    <div style={styles.cardList}>
      {jobs.map((job) => (
        <div key={job.id} style={styles.jobCard}>
          <h3 style={styles.jobTitle}>{job.title}</h3>
          <p style={styles.jobMeta}>
            <strong>{job.company}</strong> · {job.location || "Location N/A"}
          </p>
          <p style={styles.jobDescription}>
            {job.description || "No description provided."}
          </p>

          <div style={styles.cardActions}>
            <button style={styles.smallButton} onClick={() => onEdit(job)}>
              Edit
            </button>
            <button
              style={{ ...styles.smallButton, ...styles.dangerButton }}
              onClick={() => onDelete(job.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrgJobList;
