import React, { useState } from "react";
import { styles } from "../../styles";
import { createJob } from "../../services/jobService";

function JobForm({ initialJob, organizationId, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initialJob?.title || "");
  const [company, setCompany] = useState(initialJob?.company || "");
  const [location, setLocation] = useState(initialJob?.location || "");
  const [description, setDescription] = useState(
    initialJob?.description || ""
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required.");
      return;
    }

    // company/location are frontend only for now
    const jobData = {
      id: initialJob?.id,
      title: title.trim(),
      company: company.trim(),
      location: location.trim(),
      description: description.trim(),
    };

    try {
      setLoading(true);

      if (initialJob) {
        // EDIT MODE: let parent handle update (PATCH/PUT)
        onSubmit && onSubmit(jobData);
      } else {
        // CREATE MODE: call backend
        if (!organizationId) {
          alert("organizationId is required to create a job.");
          return;
        }

        const createdJob = await createJob({
          title: jobData.title,
          description: jobData.description,
          organizationId,
        });

        // optionally merge frontend-only fields into created job
        const fullJob = {
          ...createdJob,
          company: jobData.company,
          location: jobData.location,
        };

        // Inform parent that a new job was created
        onSubmit && onSubmit(fullJob);

        // Reset form after successful create
        setTitle("");
        setCompany("");
        setLocation("");
        setDescription("");
      }
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to save job");
    } finally {
      setLoading(false);
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
        <button type="submit" style={styles.primaryButton} disabled={loading}>
          {loading
            ? "Saving..."
            : initialJob
            ? "Save Changes"
            : "Create Job"}
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
