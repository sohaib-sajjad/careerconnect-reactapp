import React from "react";
import { styles } from "../../styles";
import JobForm from "../components/jobForm";
import OrgJobList from "../components/OrgJobList";

function OrganizationPage({
  jobs,
  editingJob,
  onCreateJob,
  onUpdateJob,
  onDeleteJob,
  onEditJob,
}) {
  return (
    <div style={styles.orgLayout}>
      <section style={styles.formSection}>
        <h2>{editingJob ? "Edit Job" : "Create Job"}</h2>
        <JobForm
          key={editingJob ? editingJob.id : "create-form"}
          initialJob={editingJob}
          onSubmit={editingJob ? onUpdateJob : onCreateJob}
          onCancel={() => onEditJob(null)}
        />
      </section>

      <section style={styles.listSection}>
        <h2>All Jobs</h2>
        <OrgJobList jobs={jobs} onEdit={onEditJob} onDelete={onDeleteJob} />
      </section>
    </div>
  );
}

export default OrganizationPage;
