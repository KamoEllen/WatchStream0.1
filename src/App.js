import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Watch from './Watch';

function App() {
  return (
    <div className="App">  
      <Router> 
        <Switch>  
          <Route path="/watch/:id">   
          <Header />
            <Watch />
        </Route>
        <Route path="/">  
        <Header />  
        <div className="main__display" style={{"display":"flex"}}>
        <Sidebar />
        <Videos />
        </div>
        </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
