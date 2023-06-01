import React from 'react'

function Header() {
  return (
    <div>
        <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <div class="logo">
          <a href="../index.html">
            <h1 class="logo me-auto">City</h1><br/>
            <h2 class="logo-tiny-text me-auto">Multispeciality Hospital</h2>
          </a>
        </div>
        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto" href="../index.html">Home</a></li>
            <li><a class="nav-link scrollto active" href="./departments.html">Departments</a></li>
            <li><a class="nav-link scrollto" href="./doctors.html">Doctors</a></li>
            <li><a class="nav-link scrollto" href="./about.html">About</a></li>
            <li><a class="nav-link scrollto" href="./contact.html">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="./appointment.html" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span>
          Appointment</a>

      </div>
    </header>
    </div>
  )
}

export default Header
