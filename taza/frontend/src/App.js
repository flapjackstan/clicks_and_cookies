import "./App.css";
import React, { Component } from "react";
import logo from './assets/profilePic.jpg'
class App extends React.Component {
  render() {
    return (
      <body>
        <img src={logo} alt="profile picturee" class="profile-picture-class"/>
        <div class="profile-name-class">
          <p>taza</p>
          <p class="profile-name-subtxt">We sell traditional coffee products & beverages inspired by our culture.</p>
        </div>
        <a href="https://www.instagram.com/taza.de.cafe.la/?igshid=YWJhMjlhZTc%3D" class="links">Instagram</a>
        <a href="https://account.venmo.com/u/tazacafe" target="_blank" class="links">Venmo</a>
        <a href="#" class="links">Upcoming Events</a>
        <a href="#" class="links">Join our email chain</a>

        <a href="#" class="links">Contact us</a>
        <div class="bottom-text-class">Trinklee</div>
      </body>
    );
  }
}

export default App;