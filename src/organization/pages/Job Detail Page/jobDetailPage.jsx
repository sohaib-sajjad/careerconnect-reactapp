import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import './jobDetailPageStyles.css';

const JobDetailPage = () => {

    const { jobId } = useParams();
    const location = useLocation();
    const [jobDetails, setJobDetails] = useState(location.state?.jobDetails || null);


    return (
        <div className="job-detail-container">
            <h2>Job Details</h2>
            <div className="job-detail-card">
                <h3>{jobDetails.title}</h3>
                <p><strong>Company:</strong> {jobDetails.company}</p>
                <p><strong>Location:</strong> {jobDetails.location}</p>
                <p><strong>Description:</strong> {jobDetails.description}</p>
            </div>
        </div>
    );
};

export default JobDetailPage;
