import Test from './component/test';
import Header from './component/header';
import Sorting from './component/sorting';
import Trending from './component/trending';
import Footer from './component/footer';
import Carosel from './component/carousel';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header/>
            <Carosel/>
          </Route>
          <Route path="/sorting">
            <Header/>
            <Sorting/>
          </Route>
          <Route path="/trending">
            <Header/>
            <Trending/>
          </Route>
        </Switch>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
