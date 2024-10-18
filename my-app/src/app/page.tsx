'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';


export default function AlohaBeerDocument() {
  return (
      <div>
          <nav id="navbar1" className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                  <a className="navbar-brands" href="#">
                      <i className="bi bi-facebook"></i>
                      <i className="bi bi-instagram ms-2"></i>
                  </a>

                  <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                      <div className="navbar-nav">
                          <a className="nav-link2 fixed">Independent craft brewery and beer garden in Honolulu, Hawaii</a>
                      </div>
                  </div>
              </div>
          </nav>

          <div className="navbar white-background">
              <nav className="container-fluid justify-content-start">
                  <ul className="nav justify-content-start">
                      <li className="nav-item">
                          <a className="navbar-brand ps-5">
                              <img src="https://courses.ics.hawaii.edu/ics314f24/morea/ui-frameworks/wod-aloha-beer-logo.png"
                                  alt="Logo"
                                  style={{ width: "120px", height: "100px" }}
                                  className="ps-3 pb-2" />
                          </a>
                      </li>

                      <ul className="nav justify-content-end" id="topMenu">
                          <li className="nav-item" style={{ marginTop: '5px', marginRight: '5px' }}>
                              <a className="nav-link" href="#">Location & Menus</a>
                          </li>
                          <li className="nav-item" style={{ marginTop: '5px', marginRight: '5px' }}>
                              <a className="nav-link" href="#">Events</a>
                          </li>
                          <li className="nav-item" style={{ marginTop: '5px', marginRight: '5px' }}>
                              <a className="nav-link" href="#">Brewery</a>
                          </li>
                          <li id="yello" className="nav-item" style={{ marginTop: '5px', marginRight: '275px' }}>
                              <a className="nav-link" href="#">Shop</a>
                          </li>
                          <li className="nav-item" style={{ marginTop: '5px', marginRight: '5px' }}>
                              <a className="nav-link" href="#">Account</a>
                          </li>
                          <li className="nav-item" style={{ marginTop: '5px', marginRight: '5px' }}>
                              <a className="nav-link" href="#">Search <i className="bi bi-search"></i></a>
                          </li>
                          <li className="nav-item" style={{ marginTop: '5px', marginRight: '5px' }}>
                              <a className="nav-link" href="#">Cart<i className="bi bi-cart"></i></a>
                          </li>
                      </ul>
                  </ul>
              </nav>
          </div>

          <div className="grad-background">
              <div className="container-fluid colorblocktop col justify-content-start">
                  <h1 id="loccolor" style={{ paddingLeft: '75px', paddingTop: '35vh' }}>OUR<br />LOCATIONS</h1>
              </div>
          </div>

          <footer style={{ backgroundColor: '#EDC601' }}>
              <div className="container-fluid">
                  <div className="row pt-3 pb-3">
                      <div className="col text-center">
                          <h3 className="pt-4" style={{ color: 'black', fontSize: '2rem',  fontWeight: 'normal' }}>KAKA'AKO - At 700 QUEEN ST</h3>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
  );
}