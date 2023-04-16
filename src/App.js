
import './App.css';
import Users from "./components/users/Users";
import {useState} from "react";
import UserPosts from "./components/user-posts/User-posts";

function App() {
    const [userId, setUserId] = useState(null);

  return (
    <div className="App">
      <Users setUserId={setUserId}/>
        {userId && <UserPosts userId={userId}/>}
    </div>
  );
}

export default App;
