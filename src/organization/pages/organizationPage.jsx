import React from "react";
import { styles } from "../../styles";
import JobForm from "../components/jobForm";
import OrgJobList from "../components/orgJobList";
import orgPageControllers from "./OrganizationPageController";


function OrganizationPage() {


 // ---- STATE ----
  const [jobs, setJobs] = React.useState([]);
  const [editingJob, setEditingJob] = React.useState(null);

  // ---- CONTROLLERS ----
  const onCreateJob = (jobData) => {
    orgPageControllers.handleCreateJob(jobData, { setJobs });
  };

  const onUpdateJob = (jobData) => {
    orgPageControllers.handleUpdateJob(jobData, { setJobs, setEditingJob });
  };

  const onDeleteJob = (id) => {
    orgPageControllers.handleDeleteJob(id, { setJobs });
  };

  const onEditJob = (job) => {
    setEditingJob(job); // triggers edit mode
  };


  return (
    <div style={styles.orgLayout}>
      <section style={styles.formSection}>
        <h2>{editingJob ? "Edit Job" : "Create Job"}</h2>
        <JobForm
          key={editingJob ? editingJob.id : "create-form"}
          initialJob={editingJob}
          onSubmit={editingJob ? onUpdateJob : onCreateJob}
          onCancel={() => orgPageControllers.onEditJob(null)}
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
