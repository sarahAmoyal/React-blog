import Form from "./common/form";
import withRouter from "./common/withRouter";
import Joi from "joi";
import userService from "../services/userService";
import { Navigate } from "react-router-dom";
import "../styles/signin.css";

class SignIn extends Form {
  state = {
    form: {
      email: "",
      password: "",
    },
  };
  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
  };
  async doSubmit() {
    const { email, password } = this.state.form;

    try {
      await userService.login(email, password);
      window.location = "/create-cards";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({
          errors: { email: response.data },
        });
      }
    }
  }

  render() {
    if (userService.getUser()) {
      return <Navigate to='/' />;
    }
    return (
      <>
        <div className='login'>
          <h2 className='loginTitle'>Sign In With Your Account</h2>

          <form onSubmit={this.handleSubmit} noValidate autoComplete='off'>
            {this.renderInput({ name: "email", label: "Email", type: "email" })}
            {this.renderInput({
              name: "password",
              label: "Password",
              type: "password",
            })}
            <div className='mt-3'>{this.renderButton("Sign In")}</div>
          </form>
        </div>
      </>
    );
  }
}
export default withRouter(SignIn);
