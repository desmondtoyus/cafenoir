import React from 'react';
import {Link} from 'react-router-dom';


const  ResourceBox = (props)=>{
return(
    <div>
        {/* <!-- ROW TWO --> */}
        <div className="row">

          {/* <!-- Highlights Card 1 --> */}
          <div className="col-md-4 " style={{height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2'}}>
            <div className="resources-card">

            <Link to="/Map">

                <div className="highlights-card-content">
                  <img src="img/search-icon.svg"   alt = "source" />
                </div>
            </Link>

              <span className="highlights-card-title">Addiction Recovery</span>
              <div className="line"></div>

              <p className="highlights-copy">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>


          {/* <!-- Highlights Card 2 --> */}
          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
            <div className="resources-card">

            <Link to ="/Map">

                <div className="highlights-card-content">
                  <img src="img/search-icon.svg"   alt = "source" />
                </div>
            </Link>

              <span className="highlights-card-title">Domestic Violence</span>
              <div className="line"></div>

              <p className="highlights-copy">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>

          {/* <!-- Highlights Card 3 --> */}
          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
            <div className="resources-card">

            <Link to ="/Map">
            
                <div className="highlights-card-content">
                    <img src="img/search-icon.svg"   alt = "source" />
                </div>
            </Link>

              <span className="highlights-card-title">Food Resources</span>
              <div className="line"></div>

              <p className="highlights-copy">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>


        </div>

        {/* <!-- ROW THREE --> */}
        <div className="row">

          {/* <!-- Highlights Card 1 --> */}
          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
            <div className="resources-card">

            <Link to ="/Map">
            
                <div className="highlights-card-content">
                    <img src="img/search-icon.svg"   alt = "source" />
                </div>
            </Link>

              <span className="highlights-card-title">Medical Care</span>
              <div className="line"></div>

              <p className="highlights-copy">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>


          {/* <!-- Highlights Card 2 --> */}
          <div className="col-md-4 " style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
            <div className="resources-card">

            <Link to ="/Map">
            
                <div className="highlights-card-content">
                    <img src="img/search-icon.svg"   alt = "source" />
                </div>
            </Link>

              <span className="highlights-card-title">Ministries & Churches</span>
              <div className="line"></div>

              <p className="highlights-copy">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>

          {/* <!-- Highlights Card 3 --> */}
          <div className="col-md-4 " style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
            <div className="resources-card">

            <Link to ="/Map">
            
                <div className="highlights-card-content">
                    <img src="img/search-icon.svg"   alt = "source" />
                </div>
            </Link>

              <span className="highlights-card-title">Resources</span>
              <div className="line"></div>

              <p className="highlights-copy">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>
        </div>


        {/* <!-- ROW FOUR --> */}
        <div className="row">

          {/* <!-- Highlights Card 1 --> */}
          <div className="col-md-4 " style={{height: '100%', paddingleft: '25px', position: 'relative', zindex: '2'}}>
            <div className="resources-card">

            <Link to ="/Map">
            
                <div className="highlights-card-content">
                    <img src="img/search-icon.svg"   alt = "source" />
                </div>
            </Link>

              <span className="highlights-card-title">Shelter</span>
              <div className="line"></div>

              <p className="highlights-copy">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>


          {/* <!-- Highlights Card 2 --> */}
          <div className="col-md-4 " style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
            <div className="resources-card">

            <Link to ="/Map">
            
                <div className="highlights-card-content">
                    <img src="img/search-icon.svg"   alt = "source" />
                </div>
            </Link>

              <span className="highlights-card-title">Services</span>
              <div className="line"></div>

              <p className="highlights-copy">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>

          {/* <!-- Highlights Card 3 --> */}
          <div className="col-md-4 " style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
            <div className="resources-card-submit">


            <Link to ="/Map">
            
                <div className="highlights-card-content">
                    <img src="img/search-icon.svg"   alt = "source" />
                </div>
            </Link>

              <span className="highlights-card-title">Submit a New Resource</span>
              <div className="line"></div>

              <p className="highlights-copy">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>


        </div>
    </div>

)


}
export default ResourceBox;

