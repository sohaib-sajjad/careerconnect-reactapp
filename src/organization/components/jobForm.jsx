import React, { useState } from "react";
import { styles } from "../../styles";

function JobForm({ initialJob, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initialJob?.title || "");
  const [company, setCompany] = useState(initialJob?.company || "");
  const [location, setLocation] = useState(initialJob?.location || "");
  const [description, setDescription] = useState(
    initialJob?.description || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !company.trim()) {
      alert("Title and Company are required.");
      return;
    }

    const jobData = {
      id: initialJob?.id,
      title: title.trim(),
      company: company.trim(),
      location: location.trim(),
      description: description.trim(),
    };

    onSubmit(jobData);

    if (!initialJob) {
      setTitle("");
      setCompany("");
      setLocation("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Job Title
        <input
          style={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. React Developer"
        />
      </label>

      <label style={styles.label}>
        Company
        <input
          style={styles.input}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="e.g. Acme Inc."
        />
      </label>

      <label style={styles.label}>
        Location
        <input
          style={styles.input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Remote, New York, London"
        />
      </label>

      <label style={styles.label}>
        Description
        <textarea
          style={{ ...styles.input, minHeight: 80, resize: "vertical" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short job description..."
        />
      </label>

      <div style={styles.buttonRow}>
        <button type="submit" style={styles.primaryButton}>
          {initialJob ? "Save Changes" : "Create Job"}
        </button>
        {initialJob && (
          <button
            type="button"
            style={styles.secondaryButton}
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default JobForm;
