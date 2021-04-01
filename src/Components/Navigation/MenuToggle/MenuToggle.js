import React from 'react';
import './MenuToggle.css';

const MenuToggle = props => {
    return (
        <button className={["menu-toggle", props.isOpen ? 'menu-toggle_open' : ""].join(" ")} onClick={props.onToggle}>
            <span className="menu-toggle__line"></span>
        </button>
    )
};

export default MenuToggle;