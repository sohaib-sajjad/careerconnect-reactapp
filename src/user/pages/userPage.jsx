import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import UserJobList from "../components/userJobsList";
import userPageControllers from "./userPageController";
import './userPageStyles.css';

function UserPage() {
    const userId = "692789f039cb0b41c0969cb9"; // hardcoded userId for now
    const [jobs, setJobs] = useState([]);
    const [appliedJobIds, setAppliedJobIds] = useState([]);
    const [recommendedJobs, setRecommendedJobs] = useState([]);
    const [userProfile, setUserProfile] = useState(null); // Add user profile state

    // Fetch all jobs, applied job IDs, and user profile
    useEffect(() => {
        userPageControllers.handleFetchAllJobs(userId, { setJobs }, { setAppliedJobIds });
        userPageControllers.handleFetchRecommendedJobs(userId, { setRecommendedJobs });
        userPageControllers.handleFetchUserProfile(userId, { setUserProfile }); // Fetch user profile
    }, [userId]);

    const onApply = (jobId) => {
        userPageControllers.handleApply(jobId, userId, { setJobs }, { setAppliedJobIds });
    };

    return (
        <div style={styles.userLayout}>
            {/* User Profile Section */}
            {userProfile && (
                <section style={styles.userProfileSection}>
                    <h2>Welcome, {userProfile.name}</h2>
                    <p><strong>Title:</strong> {userProfile.title || "N/A"}</p>
                </section>
            )}

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
                    <div className="job-cards-container">
                        {recommendedJobs.map((job) => (
                            <div key={job.id} className="job-card">
                                <h3>{job.title}</h3>
                                <p>{job.location ? `Location: ${job.location}` : "Location: N/A"}</p>
                                <p>{job.description}</p>
                                <button
                                    onClick={() => onApply(job.id)}
                                    disabled={appliedJobIds.includes(job.id)}
                                >
                                    {appliedJobIds.includes(job.id) ? "Already Applied" : "Apply"}
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default UserPage;
