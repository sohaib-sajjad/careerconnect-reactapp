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

    const handleEdit = () => {
        navigate(`/edit-job/${jobId}`); // Use navigate instead of history.push
    };

    const handleDelete = async () => {
        const response = await fetch(`/api/jobs/${jobId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            navigate('/all-jobs'); // Redirect to the job list page
        } else {
            alert('Failed to delete the job');
        }
    };


    return (
        <div className="job-detail-container">
            <h2>Job Details</h2>
            <div className="job-detail-card">
                <h3>{"jobDetails.title"}</h3>
                <p><strong>Company:</strong> {"jobDetails.company"}</p>
                <p><strong>Location:</strong> {"jobDetails.location"}</p>
                <p><strong>Description:</strong> {"jobDetails.description"}</p>

                <div className="job-actions">
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete} className="delete-btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetailPage;
