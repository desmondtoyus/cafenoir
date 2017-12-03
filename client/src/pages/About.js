import React from 'react';
import {Link} from 'react-router-dom';
const About = (props)=>{

    return(

<div>

{/* <!-- CONTAINER AREA --> */}

    <div className="resources-area">
      <div className="container">

        {/* <!-- ROW --> */}
        <div className="row">


          {/* <!-- ABOUT US CARD --> */}
          <div className="col-md-12 higlights" style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
            <div className="highlights-card">
              <br/>
              <br/>
              <span className="about-title">About Us</span>
              <span className="about-subhead">An overview of our organization.</span>
              <span className="user-location-country">United States</span>

              <div className="highlights-card-content" style={{paddingTop:'25px'}}>
                <div className="col-md-8" style={{paddingRight: '0px', marginBottom: '20px', position: 'relative', zIndex: '2'}}>
                  <div className="" style={{display:'inline'}}>
                    <img className="profile-icon" style={{width:'300px'}} src="img/about-hommore-icon.png" alt = "source" />
                  </div>
                  <br/>
                  <h2 style={{fontWeight:'200', fontSize: '28px', fontFamily: 'Mandali, sans-serif', lineHeight: '35px', textAlign: 'center'}}>More than a nonprofit serving the homeless,
                    <span style={{color: '#FF6B6B'}}> hommore</span> is a movement.</h2>
                  <hr/>
                  <br/>
                  <br/>

                  <p className="overview-copy" style={{textAlign: 'center'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                    <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </p>
                </div>
              </div>

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
        </div>

      </div>
    </div>

</div>
    )
}

export default About;


    