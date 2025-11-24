import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const DesktopHeader = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="header desktop-header">
      <div className="header-content">
        <div className="header-left">
          {/* show icon-only logo */}
          <img src="logo neurai.svg" alt="NeurAI" className="logo" />
          <div className="header-text" ></div>  
                  <nav className="nav-links">
                    <a href="#solutions">Solutions</a>
                    {/* <a href="#">Roles</a> */}
                    <a href="#">Resources</a>
                    <a href="#faq-q4">Pricing</a>
                  </nav>
        </div>
        <div className="header-right">
          {/* <a href="#" className="login-link">Log in</a> */}
          {/* <button className="demo-button">Get a demo</button> */}
          <button className="signup-button">Get a Demo</button>
        </div>
      </div>
    </header>
  );
};

export const MobileHeader = ({ onToggleDrawer }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="header mobile-header">
      <div className="header-content">
        <img src="logo neurai.svg" alt="NeurAI" className="logo" />
        <img src="NEUR AI BLACK FONT WITHOUT ICON.png" alt="NeurAI" className="logotext" />
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* theme toggle removed — dark mode enforced */}
          <button className="menu-button" onClick={onToggleDrawer}>
            <span className="menu-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

// Convenience wrapper used by App.jsx — renders both desktop and mobile headers.
export const Header = ({ onToggleDrawer }) => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader onToggleDrawer={onToggleDrawer} />
    </>
  );
};