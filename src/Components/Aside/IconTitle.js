import React from 'react';


function IconTitle(props){
    return <a className="nav-link" href="#">
            <div className="sb-nav-link-icon">{props.children[0]}</div>
            {props.children[1]}
        </a>
}
export default IconTitle;