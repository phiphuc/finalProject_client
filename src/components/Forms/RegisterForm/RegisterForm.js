/**
 * Redux form.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  email, required, maxLength, minLength
} from '../../../validation/validations';
import { addCustomer } from '../../../actions/customers';
import RenderForm from '../RenderForm/RenderForm.js';
import RenderField from '../RenderField/RenderField.js';

/**
 * Validate all form fields and return object with invalid entries error messages
 * @param values {object} - form values
 * @returns {{}}
 */
const validate = (values) => {
  const errors = {};

  if (!required(values.email)) {
    errors.email = 'E-mail is required';
  } else {
    if (!email(values.email)) {
      errors.email = 'E-mail has to be valid email';
    }
  }
  if (!required(values.subject)) {
    errors.subject = 'Subject is required';
  } else {
    if (!minLength(2)(values.subject) || !maxLength(5)(values.subject)) {
      errors.subject = 'Subject has tobe between 2 an d 5 chars length';
    }
  }
  if (!required(values.body)) {
    errors.body = 'Body is required';
  }
  return errors;
};

/**
 * ReduxForm container
 */
const RegisterForm = (
  {
    error, onSubmitAction, handleSubmit, pristine, reset, submitting, invalid, submitSucceeded
  }
) => {
  
  let messageType = '';
  let message = '';

  if (error) {
    messageType = 'error';
    message = error;
  } else if (submitSucceeded) {
    messageType = 'success';
    message = 'Saved!!';
  } else if (submitting) {
    messageType = 'info';
    message = 'Submitting...';
  }

  return (
    <RenderForm
      title=""
      submitLabel="Register"
      resetLabel="Reset"
      isVisibleReset={false}
      onSubmit={handleSubmit(onSubmitAction)}
      onReset={reset}  
    >
      {/*error={error}
      isSubmitting={submitting}
      isPristine={pristine}
      isSucceeded={submitSucceeded}
      isInvalid={invalid}
      message={message}
      messageType={messageType}*/}
    
      <Field name="email" type="email" component={RenderField} label="Name" />
      <Field name="email" type="email" component={RenderField} label="Email" />
      <Field name="password" type="password" component={RenderField} label="Repeat password" />
      <Field name="password" type="password" component={RenderField} label="Password" />
    </RenderForm>
  );
};

RegisterForm.propTypes = {
  /** A function meant to be passed to onSubmit={handleSubmit} or to onClick={handleSubmit} */
  handleSubmit: PropTypes.func.isRequired,
  /** Action connected to the form submission */
  onSubmitAction: PropTypes.func.isRequired,
  /** A generic error for the entire form given by the _error key */
  error: PropTypes.string,
  /** true if the form data is the same as its initialized values. Opposite of dirty. */
  pristine: PropTypes.bool,
  /** Resets all the values in the form to the initialized state, making it pristine again. */
  reset: PropTypes.func.isRequired,
  /** Whether or not your form is currently submitting */
  submitting: PropTypes.bool,
  /** true if the form has validation errors. Opposite of valid. */
  invalid: PropTypes.bool,
  /** If onSubmit is called, and succeed to submit , submitSucceeded will be set to true. */
  submitSucceeded: PropTypes.bool,
};

RegisterForm.defaultProps = {
  error: '',
  pristine: true,
  submitting: false,
  invalid: false,
  submitSucceeded: false
};

const mapDispatchToProps = dispatch => (
  {
    onSubmitAction: data => dispatch(addCustomer(data))
  }
);

export default reduxForm({
  form: 'RegisterForm', validate
})(connect(null, mapDispatchToProps)(RegisterForm));
