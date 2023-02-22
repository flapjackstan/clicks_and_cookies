import "./App.css";
import React, { Component } from "react";
import taza_logo from './assets/profilePic.jpg'
import insta_logo from './assets/instagramLogo.jpg'
import venmo_logo from './assets/venmoLogo.jpg'

// import Component from the react module
// import Modal from "./components/Modal";
import axios from 'axios'; 
const tazaFrontPageInfo = 2;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tazaMessage:null,
      tazaAnnouncement:null, 
      tazaTitle:null
    };
  }

  //TODO add description 
  componentDidMount() {
    axios
    .get('http://localhost:8000/api/tasks/')
    .then((response) => {
      this.setState({ 
        tazaMessage: response.data[tazaFrontPageInfo].item_contents.tazaMessage, 
        tazaAnnouncement: response.data[tazaFrontPageInfo].item_contents.tazaAnnouncement,
        tazaTitle: response.data[tazaFrontPageInfo].item_contents.tazaTitle
      });
    })
    .catch((error) => {
       console.log("Error fetching Django Database: " + error);
    });
    
    axios
    .get('https://geolocation-db.com/json/')
    .then((response) => {
      //This may change, inorder to POST data
      this.setState({clientIpV4:response.data.IPv4, clientCity:response.data.city});
    })
    .catch((error) => {
       console.log("Error fetching geo-location: " + error);
    });
  }

  //TODO split components into their own json file
  render() {
    const {tazaMessage} = this.state;
    const {tazaAnnouncement} = this.state;
    const {tazaTitle} = this.state;
    return (
      <body>
        <img src={taza_logo} alt="profile picturee" class="profile-picture-class"/>
        <div class="profile-name-class">
          <p>{tazaTitle}</p>
          <p class="profile-name-subtxt">{tazaMessage}</p>
          <p>{tazaAnnouncement}</p>
        </div>
        <a href="https://www.instagram.com/taza.de.cafe.la/?igshid=YWJhMjlhZTc%3D" target="_blank" class="links">Instagram</a>
        <a href="https://account.venmo.com/u/tazacafe" target="_blank" class="links">Venmo</a>
        <a href="#" class="links">Upcoming Events</a>
        <a href="#" class="links">Join our email chain</a>
        <a href="#" class="links">Contact us</a>
        <div class="bottom-text-class">Trinklee</div>
        {/* TODO - Have images in links or insert button imange in bottom of page
        <img data-testid="LinkThumbnailImage" src={insta_logo} alt="" filter="" loading="lazy" crossorigin="" class="profile-picture-class"></img>
        <img data-testid="LinkThumbnailImage" src={venmo_logo} alt="" filter="" loading="lazy" crossorigin="" class="profile-picture-class"></img> */}
      </body>
    );
  }
}

export default App;