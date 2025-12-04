import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import './jobDetailPageStyles.css';

const JobDetailPage = () => {
    const { jobId } = useParams();
    const location = useLocation();
    const [jobDetails, setJobDetails] = useState(location.state?.jobDetails || null);
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Hardcoded job details if not passed in location.state
        if (!jobDetails) {
            setJobDetails({
                title: "Software Engineer",
                company: "Tech Corp",
                location: "San Francisco, CA",
                description: "Join our dynamic team of engineers at Tech Corp to build cutting-edge software."
            });
        }

        // Hardcoded candidates list for matching candidates
        const hardcodedCandidates = [
            { _id: "1", name: "Alice Johnson", title: "Software Engineer" },
            { _id: "2", name: "Bob Smith", title: "Senior Software Engineer" },
            { _id: "3", name: "Charlie Brown", title: "Software Engineer" }
        ];

        setCandidates(hardcodedCandidates);
        setLoading(false);
    }, [jobDetails]);

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
                            <p>{jobDetails.bio}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobDetailPage;
