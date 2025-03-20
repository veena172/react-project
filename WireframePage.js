import React from "react";
import "./WireframePage.css"; // Import the CSS file for styling

const WireframePage = () => {
  return (
    <div className="wireframe-container">
      <h2 className="title">Design a Page based on the Wireframe</h2>
      <div className="main-box">
        {/* Header */}
        <div className="header">Mon Oct 07 2024 16:39:07</div>

        {/* Left Section */}
        <div className="left-section">
          <button className="back-button">←</button>
          <div className="table-container">
            {/* RBC Table */}
            <table className="data-table">
              <thead>
                <tr>
                  <th colSpan="3" className="section-header">RBC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Angled Cells</td> <td>222</td> <td>67%</td>
                </tr>
                <tr>
                  <td>Borderline Ovalocytes</td> <td>50</td> <td>20%</td>
                </tr>
                <tr>
                  <td>Burr Cells</td> <td>87</td> <td>34%</td>
                </tr>
              </tbody>
            </table>

            {/* WBC Table */}
            <table className="data-table">
              <thead>
                <tr>
                  <th colSpan="3" className="section-header">WBC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basophil</td> <td>222</td> <td>67%</td>
                </tr>
                <tr>
                  <td>Eosinophil</td> <td>50</td> <td>20%</td>
                </tr>
              </tbody>
            </table>

            {/* Platelets Table */}
            <table className="data-table">
              <thead>
                <tr>
                  <th colSpan="3" className="section-header">Platelets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Count</td> <td>222</td>
                </tr>
                <tr>
                  <td>Percentage</td> <td>222</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="wsi-box">WSI Zoomed out View (Hub)</div>
          <div className="patient-info">Patient ID | Blood</div>
          <div className="wsi-text">WSI Zoomed IN View</div>
          <button className="report-button">Report</button>
        </div>
      </div>
    </div>
  );
};

export default WireframePage;
