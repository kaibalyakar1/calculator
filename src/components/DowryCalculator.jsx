import React, { useState } from "react";

const educationOptions = [
  { label: "High School", value: 500 },
  { label: "Bachelor's Degree", value: 2000000 },
  { label: "Master's Degree", value: 1000000 },
  { label: "PhD", value: 10000000 },
];

const jobOptions = [
  { label: "Engineer", value: 30000 },
  { label: "Doctor", value: 500000 },
  { label: "Teacher", value: 200000 },
  { label: "Government Employee", value: 4000 },
  { label: "Businessman", value: 7000000000 },
  { label: "Other", value: 1000000000000 },
];

const assetOptions = [
  { label: "5 Lakhs", value: 500000 },
  { label: "10 Lakhs", value: 1000000 },
  { label: "50 Lakhs", value: 5000000 },
  { label: "1 Crore", value: 10000000 },
  { label: "5 Crores", value: 50000000 },
  { label: "10 Crores+", value: 100000000 },
];

const residenceTypeOptions = [
  { label: "Urban", value: 500000 },
  { label: "Suburban", value: 300000 },
  { label: "Rural", value: 100000 },
];

const houseOwnershipOptions = [
  { label: "Self Owned", value: 500000 },
  { label: "Rented", value: 100000 },
  { label: "Parents' House", value: 200000 },
];

function DowryCalculator() {
  const [education, setEducation] = useState("");
  const [job, setJob] = useState("");
  const [assets, setAssets] = useState("");
  const [residenceType, setResidenceType] = useState("");
  const [houseOwnership, setHouseOwnership] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [dowry, setDowry] = useState(0);
  const [error, setError] = useState("");

  const calculateDowry = () => {
    if (
      !education ||
      !job ||
      !assets ||
      !residenceType ||
      !houseOwnership ||
      !age ||
      !salary
    ) {
      setError("All fields are mandatory. Please fill out all fields.");
      return;
    }
    setError("");
    let dowryAmount =
      (parseFloat(education) +
        parseFloat(job) +
        parseFloat(assets) +
        parseFloat(residenceType) +
        parseFloat(houseOwnership) +
        parseFloat(age) +
        parseFloat(salary)) /
      10;

    // Reduce dowry by 200,000 for each year older than 25
    const ageDiff = parseInt(age.split("-")[0]) - 25;
    if (ageDiff > 0) {
      dowryAmount -= ageDiff * 20000;
    }

    setDowry(dowryAmount);
  };

  return (
    <div>
      <h1>Dowry Calculator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateDowry();
        }}
      >
        <div>
          <label>
            Education Level:
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              required
            >
              <option value="" disabled>
                Select
              </option>
              {educationOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Job Type:
            <select
              value={job}
              onChange={(e) => setJob(e.target.value)}
              required
            >
              <option value="" disabled>
                Select
              </option>
              {jobOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Assets:
            <select
              value={assets}
              onChange={(e) => setAssets(e.target.value)}
              required
            >
              <option value="" disabled>
                Select
              </option>
              {assetOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Residence Type:
            <select
              value={residenceType}
              onChange={(e) => setResidenceType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select
              </option>
              {residenceTypeOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            House Ownership:
            <select
              value={houseOwnership}
              onChange={(e) => setHouseOwnership(e.target.value)}
              required
            >
              <option value="" disabled>
                Select
              </option>
              {houseOwnershipOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Age:
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            >
              <option value="" disabled>
                Select
              </option>
              {[...Array(83)].map((_, i) => (
                <option key={i + 18} value={i + 18}>
                  {i + 18}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Monthly Salary (in INR):
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calculate Dowry</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Calculated Dowry: ₹{dowry.toLocaleString("en-IN")}</h2>
    </div>
  );
}

export default DowryCalculator;
