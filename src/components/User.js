import React from 'react';

import './User.css';

const User = (props) => {
  return (
    <li className='user'>
      <div className='user-row first'>
        <img src={props.avatar} alt={props.name} />
        <div className='user-row__name'>{props.name}</div>
      </div>
      <div className='user-row'>
        <p>
          <strong>Email:</strong> {props.email}
        </p>
        <p>
          <strong>Phone:</strong> {props.phone}
        </p>
        <p>
          <strong>Website:</strong> {props.website}
        </p>
        <p>
          <strong>Company name:</strong> {props.company.name}
        </p>
      </div>
      <div className='user-row'>
        <p>
          <strong>Street:</strong> {props.address.street}
        </p>
        <p>
          <strong>Suite:</strong> {props.address.suite}
        </p>
        <p>
          <strong>City:</strong> {props.address.city}
        </p>
        <p>
          <strong>Zip code:</strong> {props.address.zipcode}
        </p>
      </div>
    </li>
  );
};

export default User;
