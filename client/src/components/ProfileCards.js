import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCards =(props)=>

  {
      return(
        <div className="col-md-4 higlights" style={{height: '100', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
          <div className="highlights-card">

            <div className="highlights-card-content">
              <Link to="">
                <div className="profile-image">
                  <img className="profile-icon" src="img/profile-icon.svg" alt=" profile" />
                </div>
              </Link>
            </div>

            <span className="user-title">{props.profile.name}</span>
            <span className="user-location"> {props.userData.location}</span>
            
            <br/>
              <br/>
                <span className="followers">
                  <a href="dashboard.html">
                    <img id="followers-icon" src="img/followers-icon.svg" alt="follower"/>
                    <span className="span"> 0 Followers</span>
                  </a>
                </span>
                <br/>
                  <br/>
                    <span className="donate">
                      <Link to ="">
                        <img id="donate-icon" src="img/dollar-icon.svg"  alt= "donate"/>
                        <span className="span" style={{marginLeft: '26px'}}> Set up You Caring Account</span>
                      </Link >
                    </span>
                    <br/>
                      <br/>
                        <span className="find-helper">
                          <Link to ="find-helper.html">
                            <img id="helper-icon" src="img/helper-icon.svg" alt ="helper" />
                            <span className="span">Find a Helper</span>
                          </Link>
                        </span>
                        <br/>
                          <br/>
                            <span className="chat">
                              <Link to="messages.html">
                                <img id="chat-icon" src="img/chat-icon.svg" alt="chat" />
                                <span className="span">View Messages</span>
                              </Link>
                            </span>
                            <br/>
                              <br/>
                                <br/>
                                  <br/>

                                    <p className="highlights-copy">
                                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
                                    <br/>
                                      <br/>
            </div>
                                      <br/>
                                        <br/>
          </div>

      )
    }
 


export default ProfileCards;
