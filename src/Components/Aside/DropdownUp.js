import React from 'react';

function DropdownUp() {
  return <>
        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
            Layouts
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
        </a>
        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
            <nav className="sb-sidenav-menu-nested nav">
                <a className="nav-link" href="layout-static.html">Static Navigation</a>
                <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
            </nav>
        </div>
        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
            Pages
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
        </a>
    </>
}
export default DropdownUp;