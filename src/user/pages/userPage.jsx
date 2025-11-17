import React from "react";
import { styles } from "../../styles";
import UserJobList from "../components/userJobsList";
import userPageControllers from "./userPageController";
import { useState} from 'react';

function UserPage() {

    // ---- STATE ----
    const [jobs, setJobs] = React.useState([]);
    const [editingJob, setEditingJob] = React.useState(null);
    const [appliedJobIds, setAppliedJobIds] = useState([]);


    // ---- CONTROLLERS ----
    const onApply = (jobId) => {
        userPageControllers.handleApply(jobId);
    };



    return (
        <div style={styles.userLayout}>
            <section style={styles.listSection}>
                <h2>Browse Jobs</h2>
                <UserJobList
                    jobs={jobs}
                    appliedJobIds={appliedJobIds}
                    onApply={onApply}
                />
            </section>

            <section style={styles.appliedSection}>
                <h2>My Applications</h2>
                {appliedJobIds.length === 0 ? (
                    <p>You have not applied to any jobs yet.</p>
                ) : (
                    <ul>
                        {jobs
                            .filter((job) => appliedJobIds.includes(job.id))
                            .map((job) => (
                                <li key={job.id}>
                                    {job.title} – {job.company}
                                </li>
                            ))}
                    </ul>
                )}
            </section>
        </div>
    );
}

export default UserPage;
