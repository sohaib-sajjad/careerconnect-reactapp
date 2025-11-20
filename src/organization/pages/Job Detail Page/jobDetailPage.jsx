import './jobDetailPageStyles.css';

const JobDetailPage = () => {
 
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
