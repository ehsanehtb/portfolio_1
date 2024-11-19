import React from "react";

const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="menu-button"
      >
        <div
          className={`menu-bar ${menuOpened ? "menu-bar-open-rotate" : ""}`}
        />
        <div
          className={`menu-bar menu-bar-middle ${
            menuOpened ? "menu-bar-hidden" : ""
          }`}
        />
        <div
          className={`menu-bar ${
            menuOpened ? "menu-bar-open-rotate-reverse" : ""
          }`}
        />
      </button>
      <div
        className={`menu-container ${
          menuOpened ? "menu-container-open" : "menu-container-closed"
        }`}
      >
        <div className="menu-content">
          <MenuButton label="About" onClick={() => {onSectionChange(0); setMenuOpened(false)} } />
          <MenuButton label="Skills" onClick={() => {onSectionChange(1); setMenuOpened(false)}} />
          {/* <MenuButton label="Projects" onClick={() => onSectionChange(2)} /> */}
          <MenuButton label="Contact" onClick={() => {onSectionChange(3); setMenuOpened(false)}} />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button onClick={onClick} className="menu-button-item">
      {label}
    </button>
  );
};

export default Menu;
