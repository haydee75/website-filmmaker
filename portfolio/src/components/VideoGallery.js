import React, { Component } from "react";

class VideoGallery extends Component {
  render() {
    return (
      <div className="videos">
        <p className="titleVideo">Teaser Show Lyks SS18 - Iphone 7</p>
        <div className="video">
          <iframe
            title="lyksss18"
            className="iframe"
            src="https://player.vimeo.com/video/327125738?title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
        <script src="https://player.vimeo.com/api/player.js" />

        <p className="titleVideo">
          La Créole 1ST Anniversary, Paris, 2019 - Sony Alpha 7 II
        </p>
        <div className="video">
          <iframe
            title="creole"
            className="iframe"
            src="https://player.vimeo.com/video/314045107?title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
        <script src="https://player.vimeo.com/api/player.js" />

        <p className="titleVideo">
          Film d’étude, Coach, Bry-sur-Marne, 2018 - C300 - PMW 300
        </p>
        <div className="video">
          <iframe
            title="coach"
            className="iframe"
            src="https://www.youtube.com/embed/05IHgQd7oTQ?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="titleVideo">Teaser Show Lyks SS18 - Iphone 7</p>
        <div className="video">
          <iframe
            title="lyksshow"
            className="iframe"
            src="https://www.youtube.com/embed/eeAjzN5HktE?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default VideoGallery;
