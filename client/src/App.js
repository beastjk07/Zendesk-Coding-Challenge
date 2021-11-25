import './App.css';
import UserList from './components/UserList';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
        <Sidebar />
        <UserList/>     
    </div>
  );
}

export default App;
