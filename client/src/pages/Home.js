import React from 'react'
import Headline from '../components/Headline';
import Highlight from '../components/Highlight';
import Overview from '../components/Overview';
import UploadImage from '../components/UploadImage';
// import SimpleForm from './SimpleForm';

// import Watermark from '../components/Watermark';
// import Map from '../components/Map'; 
const Home =()=>{

    return(
        <div>
           
            <Headline/>
            {/* <UploadImage /> */}
            <Overview />
            <Highlight />
            </div>
    )
}
export default Home;