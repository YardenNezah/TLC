import axios from "axios";
import { useEffect, useState } from "react";
import { authMiddleware } from "../../utils";
import Header from "../header/Header";
import SubmitButton from "../layout/button/SubmitButton";

const Profile = () => {
  
  const [userDetails, setUserDetails]: any = useState({})
  const fetchUserDetails = async () => {
    try {
      const accessToken: any = localStorage.getItem('token')
      const res = await axios.get("http://localhost:8080/auth/getByToken", {
        headers: {
          'auth-token': accessToken
        }
      })
      setUserDetails(res.data.result)
    }
    catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchUserDetails()
    authMiddleware(false, true, true)
  }, []);

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    document.location.href = "http://localhost:3000/"
  }
  return (
    <div className="page-container">
      <Header />
      <form>
        <h2>My Profile</h2>
        <h3>username: {userDetails.username}</h3>
        <h3>name: {userDetails.name}</h3>
        <h3>phone: {userDetails.phone}</h3>
        <SubmitButton onClick={() => {logout()}} value="Logout"></SubmitButton>
      </form>
    </div>
  );
};

export default Profile;
