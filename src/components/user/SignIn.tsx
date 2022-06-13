import Input from "../layout/form/Input";
import "./User.scss";
import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SubmitButton from "../layout/button/SubmitButton";
import axios from "axios";
import { authMiddleware } from "../../utils";


const SignIn = () => {

  const [usernameInputs, setUsernameInputs] = useState()
  const [passwordInputs, setPasswordInputs] = useState()

  const [feedback, setFeedback] = useState("");

  const handleChangeUsername = (e: any) => {
    setUsernameInputs(e.target.value)
  }
  const handleChangePassword = (e: any) => {
    setPasswordInputs(e.target.value)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>)=> {
    e.preventDefault()
    try {
    const result = await axios.post("http://localhost:8080/auth/signin", {username: usernameInputs, password: passwordInputs})
    if(result.data.token) {
      localStorage.setItem("role", result.data.role)
      localStorage.setItem("token", result.data.token)
    }
        setFeedback("Logged in successfully")
        document.location.href = "http://localhost:3000/"
    }
    catch(err: any) {
      setFeedback(err.response.data || "Network error. try again")
    }
  }

  useEffect(() => {
    authMiddleware(true, false, true)
  }, [])

  return (
    <Fragment>
      <Header />
      <form>
        <h2>Sign In</h2>
        <Input
          content={"Username "}
          placeholder={"Please Enter Your Username"}
          type={"text"}
          onChange={(e:any) => handleChangeUsername(e)}
          value={usernameInputs}
          minLength={2}
          maxLength={32}
        ></Input>
        <Input
          content={"Password "}
          placeholder={"Please Enter Your Password"}
          type={"password"}
          onChange={(e:any) => handleChangePassword(e)}
          value={passwordInputs}
          minLength={2}
          maxLength={32}
        ></Input>
        <SubmitButton onClick={(e:any) => handleSubmit(e)} value={"Submit"}/>
        <p>
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </p>
        <b>{feedback}</b>
      </form>
      <div className="signin-footer"></div>
      <Footer />
    </Fragment>
  );
};

export default SignIn;
