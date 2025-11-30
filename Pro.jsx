import "./App.css";

export default function Pro() {
  return (
    <div className="page">
      <header className="header">
        <h1>Daily Wage Worker Hiring Platform</h1>
        <p>Hire skilled workers easily & quickly</p>
      </header>

      <div className="form-box">
        <h2>Find Workers</h2>

        <label>Worker Category</label>
        <select>
          <option>Construction Worker</option>
          <option>Electrician</option>
          <option>Plumber</option>
          <option>Painter</option>
          <option>Carpenter</option>
          <option>Driver</option>
        </select>

        <label>Your Location</label>
        <input type="text" placeholder="Enter your location" />

        <button className="btn">Search Workers</button>
      </div>

      <div className="worker-list">
        <h2>Available Workers</h2>

        <div className="worker-card">
          <h3>Ramesh Kumar</h3>
          <p>Electrician • 5 Years Experience</p>
          <button className="hire-btn">Hire Now</button>
        </div>

        <div className="worker-card">
          <h3>Sunil Sharma</h3>
          <p>Plumber • 3 Years Experience</p>
          <button className="hire-btn">Hire Now</button>
        </div>

        <div className="worker-card">
          <h3>Amit Singh</h3>
          <p>Painter • 4 Years Experience</p>
          <button className="hire-btn">Hire Now</button>
        </div>
      </div>
    </div>
  );
}
