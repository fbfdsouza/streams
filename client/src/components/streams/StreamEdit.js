import React from "react";
import { connect } from "react-redux";
import { updateStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    const { match, fetchStream } = this.props;
    fetchStream(match.params.id);
  }

  onSubmit = formValues => {
    const {
      updateStream,
      match: {
        params: { id }
      }
    } = this.props;

    updateStream(id, formValues);
  };

  render() {
    if (!this.props.selectedStreamToEdit) return <div>Loading</div>;

    const { title, description } = this.props.selectedStreamToEdit;
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={{ title: title, description: description }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { selectedStreamToEdit: state.stream[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { updateStream, fetchStream })(
  StreamEdit
);
