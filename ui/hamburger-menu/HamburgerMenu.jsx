import React from 'react';

const HamburgerMenu = React.forwardRef((props, ref) => {
    return (
        <div className="menu-wrapper" onClick={() => props.openMenu()}>
            <span className="menu-wrapper__text">Menu</span>
            <div className="hamburger-menu" ref={ref}></div>
        </div>
    )
});

export default HamburgerMenu;