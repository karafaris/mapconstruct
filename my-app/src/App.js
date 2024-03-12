import React from 'react';

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="index.html"><img src="assets\LOGO.jpg" alt="Logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="Residential\index.html" id="navbarDropdownResidential" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Residential 
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownResidential">
              <a className="dropdown-item" href="FullRehabs\index.html">Full Rehabs</a>
              <a className="dropdown-item" href="InvestmentPropertyAnalysis\index.html">Investment Property Analysis</a>
              <a className="dropdown-item" href="Kitchen\index.html">Kitchen</a>
              <a className="dropdown-item" href="Bathroom\index.html">Bathroom</a>
              <a className="dropdown-item" href="RoomAddition\index.html">Room Addition</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCommercial" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Commercial 
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownCommercial">
              <a className="dropdown-item" href="HotelProjectImprovementPlans\index.html">Hotel Project Improvement Plans</a>
              <a className="dropdown-item" href="DelinquentSalesTaxAudition\index.html">Delinquent Sales Tax Audition</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownInfo" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Info
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownInfo">
              <a className="dropdown-item" href="About\index.html">About Us </a>
              <a className="dropdown-item" href="Gallery\index.html">Gallery</a>
              <a className="dropdown-item" href="Blog\index.html"> Blog</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="PermitsandCityCodeManagement\index.html">Permits and City Code Management</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="AvailableHomes\index.html">Available Homes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="ContactUS\index.html">Contact Us</a>
          </li>
          <li className="nav-item">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
