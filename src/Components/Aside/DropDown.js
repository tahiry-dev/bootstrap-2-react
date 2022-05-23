import React from 'react';

function Dropdown() {
  return <>
        <a className="nav-link" href="charts.html">
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            Charts
        </a>
        <a className="nav-link" href="tables.html">
            <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
            Tables
        </a>
    </>
}
export default Dropdown;