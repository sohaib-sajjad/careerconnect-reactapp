import React, { useEffect } from "react";
import { styles } from "../../styles";
import UserJobList from "../components/userJobsList";
import userPageControllers from "./userPageController";
import { useState } from 'react';

function UserPage() {

    const userId = "65a44dd2f48a4c89c0a94567"
    const [jobs, setJobs] = useState([]);
    const [appliedJobIds, setAppliedJobIds] = useState([]);

    useEffect(() => {
        userPageControllers.handleFetchAllJobs(userId, { setJobs }, {setAppliedJobIds});
    }, []);

    const onApply = (jobId) => {
        userPageControllers.handleApply(jobId, userId, {setJobs}, {setAppliedJobIds});
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
