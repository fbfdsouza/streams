import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {meta.touched && meta.error && (
          <div className="ui error message">
            <div className="header">{meta.error}</div>
          </div>
        )}
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        className="ui error form"
      >
        <Field
          name="title"
          component={this.renderInput}
          type="text"
          label="Enter Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          type="text"
          lable="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) errors.title = "You must enter a title";
  if (!formValues.description)
    errors.description = "You must enter a description";

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
