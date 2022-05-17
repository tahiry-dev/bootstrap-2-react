import React from 'react';
import Toogle from './Toggle';
import SearchBar from './SearchBar';
import Users from './Users';


function Index(){
    return <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
        <Toogle />
        <SearchBar />
        <Users />
    </nav>
}
export default Index;