import React from 'react';
const MapPage = (props)=>{

    return(
        <div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">

                    <div className="col-md-9">

                        {/* <!-- PAGE TITLE & ARROW --> */}
            <Link to ="">
                            <div className="button__holder"  style={{marginRight: '20px'}}>
                                <button className="arrow-left">
                                    <img src="img/arrow_left.svg"/>
                </button>
              </div>
            </Link>
                            <h2 className="resources-title">All Categories</h2>

          </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="col-md-9">

                            {/* <!-- MAP vs. LIST --> */}
            <div className="onoffswitch3">
                                <input type="checkbox" name="onoffswitch3" className="onoffswitch3-checkbox" id="myonoffswitch3" checked/>
                                    <label className="onoffswitch3-label" for="myonoffswitch3">
                                        <span className="onoffswitch3-inner">
                                            <span className="onoffswitch3-map">
                                                <span className="onoffswitch3-switch">Map</span>
                                            </span>
                                            <span className="onoffswitch3-list">
                                                <span className="onoffswitch3-switch">List</span>
                                            </span>
                                        </span>
                                    </label>
            </div>
                                <div>
                                    <p>Hover over a drop pin for more information.</p>
                                    <br/>
                                        <br/>
            </div>

          </div>
                                </div>

                            </div>

                        </div>


                       

   
        </div>
    )
}


    