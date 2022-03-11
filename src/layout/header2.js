import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
export default class header extends Component {
  render() {
    return (
      <div>
          <nav style={{background:"green"}} class="navbar navbar-expand-lg navbar-dark " aria-label="Ninth navbar example">
    <div class="container-xl">
      {/* <a class="navbar-brand" href="#">Container XL</a> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07XL">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link active" to="/sorting">Trash Sorting</NavLink>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/">Councils</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/">Activity</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/">Others</a>
          </li>
        </ul>
        <form>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>
      </div>
    )
  }
}
