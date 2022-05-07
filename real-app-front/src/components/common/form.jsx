import Joi from "joi";
import React from "react";
import Input from "./input";
import "../../styles/form.css";

class Form extends React.Component {
  validateInput({ name, value }) {
    const data = {
      [name]: value,
    };
    const schema = Joi.object({
      [name]: this.schema[name],
    });
    const { error } = schema.validate(data);

    return error ? error.details[0].message : null;
  }
  validateForm() {
    const {
      schema,
      state: { form },
    } = this;
    const { error } = Joi.object({ ...schema }).validate(form, {
      abortEarly: false,
    });

    if (!error) {
      return null;
    }
    const errors = {};
    for (const detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }
    return errors;
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({ errors });

    if (errors) {
      return;
    }
    this.doSubmit();
  };
  handleChang = ({ target }) => {
    const { form, errors } = this.state;
    this.setState({
      form: {
        ...form,
        [target.name]: target.value,
      },
      errors: {
        [target.name]: this.validateInput(target),
      },
    });
  };
  renderInput({ name, label, type = "text" }) {
    const { form, errors } = this.state;
    // console.log(type);
    return (
      <Input
        type={type}
        name={name}
        label={label}
        onChange={this.handleChang}
        value={form[name]}
        error={errors?.[name]}
      />
    );
  }
  renderButton(label) {
    return <button className='registerButton'>{label}</button>;
  }
}

export default Form;
