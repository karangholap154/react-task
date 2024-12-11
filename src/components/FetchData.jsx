import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="app-container">
      <h2>Fetch API Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchData;
