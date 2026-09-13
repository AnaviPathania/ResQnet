// ---------- Forms, controlled components, useRef, ES6+ spread ----------

import { useState, useRef } from "react";
import { currentDonor } from "../../data/donors.js";
import Button from "../../components/Button.jsx";

function DonorProfile() {
  // "..." spread operator: copies all fields of currentDonor into a NEW object,
  // so editing this form doesn't accidentally mutate the original mock data.
  const [formData, setFormData] = useState({ ...currentDonor });
  const [saved, setSaved] = useState(false);

  // useRef gives us a direct reference to a DOM element (the name input),
  // without causing a re-render every time we use it.
  const nameInputRef = useRef(null);

  // A single handler for every input field, using the input's "name" attribute
  // to know which piece of state to update. This is a common React pattern.
  function handleChange(event) {
    const { name, value } = event.target; // ES6+ destructuring
    setFormData((previousData) => ({
      ...previousData, // keep all other fields the same
      [name]: value,   // ES6+ computed property name: update just this one field
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page
    setSaved(true);
    setTimeout(() => setSaved(false), 2000); // hide the "saved" message after 2s
  }

  function focusNameField() {
    nameInputRef.current.focus(); // directly tells the browser to focus this input
  }

  return (
    <div className="card">
      <h2>Donor Profile</h2>

      {/* Controlled form: every input's value comes from React state (formData),
          and every keystroke updates that state via onChange. */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            ref={nameInputRef}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <input
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" label="Save Profile" />
      </form>

      {/* Conditional rendering: only shown right after saving */}
      {saved && <p style={{ color: "green" }}>Profile saved!</p>}

      <button type="button" onClick={focusNameField} style={{ marginTop: "1rem" }}>
        Click to jump to Name field (useRef demo)
      </button>
    </div>
  );
}

export default DonorProfile;