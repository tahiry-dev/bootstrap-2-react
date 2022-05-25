import React from 'react';
import DividerTitle from './DividerTitle';
import IconTitle from './IconTitle';
import Dropdown from './Dropdown';
import FooterAside from './FooterAside';


function Index() {
  return <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <DividerTitle>Core</DividerTitle>
                        <IconTitle>
                            <i class="fas fa-tachometer-alt"></i>
                            Dashboard
                        </IconTitle>
                        <DividerTitle>INTERFACE</DividerTitle>
                        <Dropdown />
                        <DividerTitle>ADDONS</DividerTitle>
                        <IconTitle>
                            <i class="fas fa-chart-area"></i>
                            Charts
                        </IconTitle>
                        <IconTitle>
                            <i class="fas fa-table"></i>
                            Tables
                        </IconTitle>    
                    </div>
                </div>
                <FooterAside />
            </nav>
        </div>
}
export default Index;