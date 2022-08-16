import { createContext, useState } from 'react';
import './App.css';
import UserData from './components/userData';

export const userContext = createContext();

function App() {
  const [users, setUsers] = useState({});
  return (
    <div className="App">
      <userContext.Provider value={setUsers}>
        <UserData />
      </userContext.Provider>
      {
        users ?
          <div>
            {users.name}<br/>{users.email}
          </div>
          :
          null
      }
    </div>
  );
}

export default App;
