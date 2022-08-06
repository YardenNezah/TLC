import axios from "axios";
import { useEffect, useState } from "react";
import { authMiddleware } from "../../utils";
import Header from "../header/Header";


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
    <div className="page-container all-volunteeering-container">
      <Header />
      <form>
        <h2>User Profile</h2>
        <p><strong>Username:  </strong> {userDetails.username}</p>
        <p><strong>Name:  </strong> {userDetails.name}</p>
        <p><strong>Phone:  </strong> {userDetails.phone}</p>
        <button onClick={() => {logout()}} className="logout-btn">Logout</button>
      </form>
    </div>
  );
};

export default Profile;
