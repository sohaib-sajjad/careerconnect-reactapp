import React from "react";
import { styles } from "../../../styles";
import JobForm from "../../components/jobForm";
import OrgJobList from "../../components/orgJobList";
import orgPageControllers from "./OrganizationPageController";
import { useNavigate } from "react-router-dom";

function OrganizationPage() {
  const navigate = useNavigate();

  const organizationId = "6739bbf16e41de7cf2c99801"; // hardcoded

  // STATE
  const [jobs, setJobs] = React.useState([]);
  const [editingJob, setEditingJob] = React.useState(null);

  //INITIAL FETCH
  React.useEffect(() => {
    if (!organizationId) return;
    orgPageControllers.handleFetchJobs({ setJobs, organizationId });
  }, [organizationId]);

  // CONTROLLERS
  const onCreateJob = (jobData) => {
    orgPageControllers.handleCreateJob(jobData, { setJobs, organizationId });
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

  // navigate to detail page
  const onViewJob = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <div style={styles.orgLayout}>
      <section style={styles.formSection}>
        <h2>{editingJob ? "Edit Job" : "Create Job"}</h2>
        <JobForm
          key={editingJob ? editingJob.id : "create-form"}
          initialJob={editingJob}
          onSubmit={editingJob ? onUpdateJob : onCreateJob}
          onCancel={() => setEditingJob(null)}
        />
      </section>

      <section style={styles.listSection}>
        <h2>All Jobs</h2>
        <OrgJobList
          jobs={jobs}
          onEdit={onEditJob}
          onDelete={onDeleteJob}
          onView={onViewJob}
        />
      </section>
    </div>
  );
}

export default OrganizationPage;
