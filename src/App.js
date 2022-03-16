import Nav from './layout/nav';
import Sorting from './pages/sortingcanvas';
import Footer from './layout/footer';
import Header from './layout/header'
import Banner from './layout/banner'
import Homepage from './pages/homepage'
import CouncilVis from './pages/CouncilVis/councilcanvas'
import Login from './pages/login/Login';
import './App.css';
import {BrowserRouter as Router, Switch,Route, Redirect} from 'react-router-dom'
import {useState} from 'react'

function App() {

  const [auth, setAuth] = useState(false)

  function handleUserAuth(newValue){
    setAuth(newValue)
  }


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
          {/* <Route exact path="/" render={()=>{
            localStorage.getItem('token')? <Redirect to="/home"/>:<Redirect to="/login"/>
          }}>
          </Route> */}
          <Route exact path="/">
            <Redirect to="/login"/>
          </Route>
            
          <Route path="/login">
            <Login/>
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
