import React, { useState, useEffect, useCallback } from 'react';

import UsersList from './components/UsersList';
import Sidebar from './components/SideBar';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      console.log(data);

      const transformedUsers = data.map((userData) => {
        return {
          id: userData.id,
          avatar: `https://avatars.dicebear.com/v2/avataaars/${userData.username}.svg?options[mood][]=happy`,
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          address: userData.address,
          website: userData.website,
          company: userData.company,
        };
      });
      setUsers(transformedUsers);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  let content = <p>Found no users.</p>;

  if (users.length > 0) {
    content = <UsersList users={users} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <div className='spinner'></div>;
  }

  return (
    <React.Fragment>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
