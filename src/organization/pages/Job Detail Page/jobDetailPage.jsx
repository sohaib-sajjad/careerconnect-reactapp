import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './jobDetailPageStyles.css';

const JobDetailPage = () => {
    const location = useLocation();
    const [jobDetails, setJobDetails] = useState(location.state?.jobDetails || null);
    const [candidates, setCandidates] = useState(location.state?.candidates || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!jobDetails || !candidates) {
            setError("Missing job details or candidates.");
        } else {
            setLoading(false);
        }
    }, [jobDetails, candidates]);

    return (
        <div className="job-detail-container">
            <h2>Job Details</h2>
            <div className="job-detail-card">
                {jobDetails ? (
                    <>
                        <h3>{jobDetails.title}</h3>
                        <p><strong>Company:</strong> {jobDetails.company}</p>
                        <p><strong>Location:</strong> {jobDetails.location}</p>
                        <p><strong>Description:</strong> {jobDetails.description}</p>
                    </>
                ) : (
                    <p>Loading job details...</p>
                )}
            </div>

            <h3>Matching Candidates</h3>

            {loading ? (
                <p>Loading candidates...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : candidates.length === 0 ? (
                <p>No matching candidates found.</p>
            ) : (
                <div className="candidate-list">
                    {candidates.map(candidate => (
                        <div key={candidate._id} className="candidate-card">
                            <h4>{candidate.name}</h4>
                            <p><strong>Title:</strong> {candidate.title}</p>
                            <p><strong>Job Applied:</strong> {jobDetails.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobDetailPage;
