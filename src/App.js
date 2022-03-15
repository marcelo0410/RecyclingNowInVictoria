import Nav from './layout/nav';
import Sorting from './pages/sortingcanvas';
import Footer from './layout/footer';
import Header from './layout/header'
import Banner from './layout/banner'
import Homepage from './pages/homepage'
import CouncilVis from './pages/CouncilVis/councilcanvas'
import './App.css';
import {BrowserRouter as Router, Switch,Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App container">
        <Header/>
        <Switch>
          <Route path="/home">
            <Nav/>
            <Banner/>
            <Homepage/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/sorting">
            <Nav/>
            <Sorting/>
          </Route>
          <Route path="/council">
            <Nav/>
            <CouncilVis/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
