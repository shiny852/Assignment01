import React from 'react';
import Sidebar from './SideBar';

import User from './User';
import './UsersList.css';

const UsersList = (props) => {
  return (
    <>
      <Sidebar />
      <ul className='users-list'>
        {props.users.map((user) => (
          <User
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            email={user.email}
            phone={user.phone}
            address={user.address}
            website={user.website}
            company={user.company}
          />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
