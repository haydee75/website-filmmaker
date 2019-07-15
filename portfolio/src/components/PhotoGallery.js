import React, { Component } from "react";
import photos from "../photos.json";
import PhotoCard from "./PhotoCard.js";

class PhotoGallery extends Component {
  constructor() {
    super();
    this.state = {
      datas: photos
    };
  }
  render() {
    return (
      <div className="gallery">
        {this.state.datas.map(photo => (
          <PhotoCard key={photo.id} image={photo.image} name={photo.name} />
        ))}
      </div>
    );
  }
}

export default PhotoGallery;
