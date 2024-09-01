import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [login, setLogin] = useState("moontahoe");
  const [userData, setUserData] = useState();

  useEffect(() => {
    client
      .request(query, { login })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error);
  }, [client, query, login]);

  if (!userData) return <p>Loading...</p>;

  return (
    <>
      <SearchFrom value={login} onSearch={setLogin} />
      <UserDetails {...userData} />
      <p>{userData.repositories.totalCount} - repos</p>
      <List
        data={userData.repositories.nodes}
        renderItem={(repo) => <span>{repo.name}</span>}
      />
    </>
  );
}
