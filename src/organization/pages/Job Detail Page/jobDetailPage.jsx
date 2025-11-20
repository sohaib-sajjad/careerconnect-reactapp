import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate for v6

import './jobDetailPageStyles.css';

const JobDetailPage = () => {

    const { jobId } = useParams();
    const [jobDetails, setJobDetails] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    // Fetch job details using the jobId
    const fetchJobDetails = async () => {
        const response = await fetch(`/api/jobs/${jobId}`);
        const data = await response.json();
        setJobDetails(data);
    };

    useEffect(() => {
        fetchJobDetails();
    }, [jobId]);


    return (
        <div className="job-detail-container">
            <h2>Job Details</h2>
            <div className="job-detail-card">
                <h3>{"jobDetails.title"}</h3>
                <p><strong>Company:</strong> {"jobDetails.company"}</p>
                <p><strong>Location:</strong> {"jobDetails.location"}</p>
                <p><strong>Description:</strong> {"jobDetails.description"}</p>
            </div>
        </div>
    );
};

export default JobDetailPage;
