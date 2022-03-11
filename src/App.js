import Test from './components/test';
import Header from './layout/nav';
import Sorting from './pages/sorting';
import Footer from './layout/footer';
import Carosel from './layout/carousel';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header/>
            
          </Route>
          <Route path="/sorting">
            <Header/>
            <Sorting/>
          </Route>
          <Route path="/trending">
            <Header/>
          </Route>
        </Switch>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
