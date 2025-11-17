import React from "react";
import { styles } from "../../styles";

function UserJobList({ jobs, appliedJobIds, onApply }) {
  if (jobs.length === 0) {
    return <p>No jobs available at the moment.</p>;
  }

  return (
    <div style={styles.cardList}>
      {jobs.map((job) => {
        const applied = appliedJobIds.includes(job.id);
        return (
          <div key={job.id} style={styles.jobCard}>
            <h3 style={styles.jobTitle}>{job.title}</h3>
            <p style={styles.jobMeta}>
              <strong>{job.company}</strong> · {job.location || "Location N/A"}
            </p>
            <p style={styles.jobDescription}>
              {job.description || "No description provided."}
            </p>

            <button
              style={{
                ...styles.primaryButton,
                ...(applied ? styles.disabledButton : {}),
              }}
              onClick={() => onApply(job.id)}
              disabled={applied}
            >
              {applied ? "Already Applied" : "Apply"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default UserJobList;
