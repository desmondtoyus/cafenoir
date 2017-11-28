import React, {Component} from 'react';
import Dropzone from 'react-dropzone'
import axios from "axios";


// var Dropzone = require('react-dropzone');

class UploadImage extends React.Component{
    constructor()
    {
        super();
        this.state ={
            files: []
        }
    }


    onDrop=(files)=> {
        this.setState({
            files: files
        })
            console.log(files);
            axios.post("/api/image", files);
      
       
    }

    

    onOpenClick=()=> {
        this.refs.dropzone.open();
    }

    render () {
        return (
            <div>
                <Dropzone ref="dropzone" onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
                <button type="button" onClick={this.onOpenClick}>
                    Open Dropzone
                </button>
                {this.state.files.length > 0 ? <div>
                    <h2>Uploading {this.state.files.length} files...</h2>
                    <div>{this.state.files.map((file, i) => <img src={file.preview} key={i} />)}</div>
                </div> : null}
            </div>
        );
    }
}

export default UploadImage;