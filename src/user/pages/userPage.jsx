import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import UserJobList from "../components/userJobsList";
import userPageControllers from "./userPageController";

function UserPage() {
    const userId = "692789f039cb0b41c0969cb9"; // hardcoded userId for now
    const [jobs, setJobs] = useState([]);
    const [appliedJobIds, setAppliedJobIds] = useState([]);
    const [recommendedJobs, setRecommendedJobs] = useState([]); // State for recommended jobs

    // Fetch all jobs and applied job IDs
    useEffect(() => {
        userPageControllers.handleFetchAllJobs(userId, { setJobs }, { setAppliedJobIds });
        userPageControllers.handleFetchRecommendedJobs(userId, { setRecommendedJobs }); // Fetch recommended jobs
    }, [userId]);

    const onApply = (jobId) => {
        userPageControllers.handleApply(jobId, userId, { setJobs }, { setAppliedJobIds });
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

            <section style={styles.recommendedSection}>
                <h2>Jobs Recommended for You</h2>
                {recommendedJobs.length === 0 ? (
                    <p>No recommendations at the moment.</p>
                ) : (
                    <ul>
                        {recommendedJobs.map((job) => (
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
