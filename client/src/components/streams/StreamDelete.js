import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      fetchStream,
    } = this.props;
    fetchStream(id);
  }

  onDelete = () => {
    const {
      match: {
        params: { id },
      },
      deleteStream,
    } = this.props;
    deleteStream(id);
  };

  onDismiss = () => history.push("/");

  renderActions = () => (
    <React.Fragment>
      <button onClick={this.onDelete} className="ui button negative">
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  renderContent = () => {
    if (!this.props.selectedStreamToDelete)
      return "Are you sure you want to delete this stream";

    return `Are you sure you want to delete this stream ${this.props.selectedStreamToDelete.title}`;
  };

  render() {
    return (
      <Modal
        stream={this.props.selectedStreamToDelete}
        onDismiss={this.onDismiss}
        title={"Delete Stream"}
        content={this.renderContent()}
        actions={this.renderActions()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { selectedStreamToDelete: state.stream[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
