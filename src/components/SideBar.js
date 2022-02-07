import React from 'react';
import './SideBar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>Bohemian Interactive </div>
      <div className='sidebar-content'>
        <div className='sidebar-content__users'>Users</div>
      </div>
    </div>
  );
};

export default Sidebar;
