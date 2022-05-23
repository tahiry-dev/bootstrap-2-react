import './App.css';
import Navigation from './Components/Navigation/Index';
import Aside from './Components/Aside/Index';

function App() {
  return (
    <div className="sb-nav-fixed">
       <Navigation />
       <div id="layoutSidenav">
          <Aside />
       </div>
    </div>
  );
}

export default App;
