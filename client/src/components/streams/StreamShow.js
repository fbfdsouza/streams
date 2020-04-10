import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
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
    this.loadVideo();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      fetchStream,
    } = this.props;

    fetchStream(id);

    if (!this.stream) return;
    this.loadVideo();
  }

  render() {
    if (!this.props.stream) return "Loading";

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
