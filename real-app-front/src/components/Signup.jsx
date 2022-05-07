import Form from "./common/form";
import Joi from "joi";
import withRouter from "./common/withRouter";
import userService from "../services/userService";
import { Navigate } from "react-router-dom";
import "../styles/signup.css";


class SignUp extends Form {
  state = {
    form: {
      name: "",
      email: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
    name: Joi.string().required().min(2),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form };

    try {
      await userService.createUser(body);
      this.props.navigate("/signin");
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {
    if (userService.getUser()) {
      return <Navigate to='/' />;
    }
    return (
      <>
        
        <div className='register'>
            <h2 className='registerTitle'>join Us Today, It Free</h2>
        
        <form onSubmit={this.handleSubmit} noValidate autoComplete='off'>
          {this.renderInput({ name: "name", label: "Name", type: "text" })}
          {this.renderInput({ name: "email", label: "Email", type: "email" })}
          {this.renderInput({
            name: "password",
            label: "Password",
            type: "password",
          })}

          <div className='mt-3'>{this.renderButton("Sign Up")}</div>
        </form>
        </div>
      </>
    );
  }
}

export default withRouter(SignUp);
