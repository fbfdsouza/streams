import React from "react";
import flv from "flv.js";

class SimpleStreamVideo extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  loadVideo = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    this.player.play();
  };

  componentDidUpdate() {
    console.log("componentDidUpdate was called");
    this.loadVideo();
  }

  componentDidMount() {
    this.loadVideo();
  }

  render() {
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>Simple Video Streamer</h1>
        <h5>Simple Video Streamer</h5>
      </div>
    );
  }
}

export default SimpleStreamVideo;
