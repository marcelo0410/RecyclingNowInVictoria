import Nav from './layout/nav';
import Sorting from './pages/sorting';
import Footer from './layout/footer';
import Header from './layout/header'
import Banner from './layout/banner'
import './App.css';
import {BrowserRouter as Router, Switch,Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App container">
        <Switch>
          <Route path="/home">
            <Header/>
            <Nav/>
            <Banner/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/sorting">
            <Header/>
            <Nav/>
            <Sorting/>
          </Route>
          <Route path="/trending">
            <Header/>
            <Nav/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
