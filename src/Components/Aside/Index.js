import React from 'react';
import DividerTitle from './DividerTitle';
import IconTitle from './IconTitle';
import DropdownUp from './DropdownUp';
import Dropdown from './DropDown';

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
                        <DropdownUp />
                        <DividerTitle>ADDONS</DividerTitle>
                        <Dropdown />
                    </div>
                </div>
            </nav>
    </div>
}
export default Index;