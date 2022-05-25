import './App.css';
import Navigation from './Components/Navigation/Index';
import Aside from './Components/Aside/Index';
import Main from './Components/Main/Index';

function App() {
  return (
    <div className="sb-nav-fixed">
       <Navigation />
       <div id="layoutSidenav">
          <Aside />
          <Main />
       </div>
    </div>
  );
}

export default App;
