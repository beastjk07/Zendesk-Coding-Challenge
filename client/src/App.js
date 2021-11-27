import './App.css';
import TicketList from './components/TicketList';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
        <Sidebar />
        <TicketList/>     
    </div>
  );
}

export default App;
