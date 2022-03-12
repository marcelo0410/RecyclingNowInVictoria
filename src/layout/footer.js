import React, { Component } from 'react'


export default class footer extends Component {
  render() {
    return (
      <footer class="pt-4 mt-1 pt-md-5 border-top" style={{background:"#55C595", marginLeft:"32px"}}>
        <div class="row">
          <div class="col-6 col-md">
            <h5 style={{color:"white"}}>Garbage Classification</h5>
            <ul class="list-unstyled text-small" >
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Type of bins</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Garbage items</a></li>

            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 style={{color:"white"}}>Councils Information</h5>
            <ul class="list-unstyled text-small">
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">General review</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Councils ranking</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Category ranking</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" style={{color:"white"}} href="#">Councils statistical</a></li>

            </ul>
          </div>
          <div class="col-12 col-md">
            {/* <img class="mb-2" src="../assets/brand/bootstrap-logo.svg" alt="" width="24" height="19"> */}
            <small class="d-block mb-3 text-muted" style={{color:"white"}}>&copy; RecyclenowinVic 2022 - 2022</small>
          </div>
        </div>
      </footer>
    )
  }
}
