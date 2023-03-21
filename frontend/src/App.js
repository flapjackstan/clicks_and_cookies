import "./App.css";
import React, { Component } from "react";
import taza_logo from './assets/profilePic.jpg'
import insta_logo from './assets/instagramLogo_bnw.jpg'
import venmo_logo from './assets/venmoLogo_bnw.jpg'
import twitter_logo from './assets/twitterLogo_bnw.jpg'

// import Component from the react module
// import Modal from "./components/Modal";
import axios from 'axios'; 
const tazaFrontPageInfo = 0;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tazaMessage:null,
      tazaAnnouncement:null, 
      tazaTitle:null,
      clientIpV4:null,
      clientCity:null,
    };
  }


  handleSubscriptionChange = dataSource => {
    this.setState({
      hi: dataSource.value,
    });
  }

  getUserLocationFromAPI = () => {
    //Maybe put in .env? // maybe not if frontend and backend will be seperated.
    const apiKey = '85a7c40fdc8e4a69ba97e1630d3515fa';
    axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey)
        .then(response => {
          this.setState({clientIpV4:response.data.ip_address, clientCity:response.data.city});
        })
        .catch(error => {
            console.log("Error fetching geo-location: " + error);
        });
  }

  getTasksForFrontend() {
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
  }

  handleClicks = (ip,city,component) => () => {
    if (city == null){
      city="CNG"
      console.log("City is null, could not gather with geo-location. This is not an issue");
    }
      
    axios.post("http://127.0.0.1:8000/api/clicks/", 
    {user_ipv4: ip, user_city: city, component:component}
   )
   .then((response) => {
     console.log(response);
   });
  };
  
  componentDidMount() {
    this.getTasksForFrontend()
    this.getUserLocationFromAPI()
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.clientIpV4 != prevProps.clientIpV4) 
      {
        if (this.state.clientCity == null){
          this.state.clientCity ="CNG"
          console.log("City is null, could not gather with geo-location. This is not an issue");
        }
            //TODO update with calling handleClicks()
            axios.post("http://127.0.0.1:8000/api/clicks/", 
            {user_ipv4: this.state.clientIpV4, user_city: this.state.clientCity, component:"TazaHome"})
            .then((response) => {
              console.log(response);
            });
     }
  }

  //TODO split components into their own json file
  render() {
    const {tazaMessage} = this.state;
    const {tazaAnnouncement} = this.state;
    const {tazaTitle} = this.state;
    const {clientIpV4} = this.state;
    const {clientCity} = this.state;


    return (
      <body>
        <img src={taza_logo} alt="profile picturee" class="profile-picture-class"/>
        <div class="profile-name-class">
          <p>{tazaTitle}</p>
          <p class="profile-name-subtxt">{tazaMessage}</p>
          <p>{tazaAnnouncement}</p>
        </div>
        <a href="#" target="_blank" class="links" onClick={this.handleClicks(clientIpV4,clientCity,"See Menu")}>Menu</a>
        <a href="#" target="_blank" class="links" onClick={this.handleClicks(clientIpV4,clientCity,"L+H")}>Location & Hours</a>
        <a href="#" class="links" onClick={this.handleClicks(clientIpV4,clientCity,"Upcoming Events")}>Upcoming Events</a>
        <a href="#" class="links">Join our email chain</a>
        <a href="#" class="links">Contact us</a>
        <a href="#" class="links" onClick={this.handleClicks(clientIpV4,clientCity,"Founders")}>Meet the founders</a>
        <div class="bottom-text-class">TazaParaTi</div>


        <div class="social-media-block">

          <a href="https://www.instagram.com/taza.de.cafe.la/?igshid=YWJhMjlhZTc%3D" target="_blank" rel="noreferrer" class="social-media-links" onClick={this.handleClicks(clientIpV4,clientCity,"Instagram")}>
            <img data-testid="LinkThumbnailImage" src={insta_logo} alt="" filter="" loading="lazy" crossorigin="" class="logo-class"></img>
          </a>
          <a href="https://account.venmo.com/u/tazacafe" target="_blank" class="social-media-links" rel="noreferrer" onClick={this.handleClicks(clientIpV4,clientCity,"Venmo")}>
            <img data-testid="LinkThumbnailImage" src={venmo_logo} alt="" filter="" loading="lazy" crossorigin="" class="logo-class"></img>
          </a>
          <a href="https://twitter.com" target="_blank" class="social-media-links" rel="noreferrer" onClick={this.handleClicks(clientIpV4,clientCity,"Twitter")}>
            <img data-testid="LinkThumbnailImage" src={twitter_logo} alt="" filter="" loading="lazy" crossorigin="" class="logo-class"></img>
          </a>

        </div>

      </body>
    );
  }
}

export default App;